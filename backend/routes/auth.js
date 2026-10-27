const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { OAuth2Client } = require('google-auth-library');
const { queryGet, queryRun } = require('../db');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'campus_event_hub_secret_2024';
const googleClient = new OAuth2Client();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Access token required' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token' });
    req.user = user;
    next();
  });
};

router.post('/register', (req, res) => {
  const { name, email, password, role, campus, phone, degree } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ error: 'Name, email, password, and role are required' });
  }
  if (!['student', 'organizer'].includes(role)) {
    return res.status(400).json({ error: 'Role must be student or organizer' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  const selectedCampus = campus || 'Graphic Era Hill University, Bhimtal';

  const existing = queryGet('SELECT id FROM users WHERE email = ?', [email]);
  if (existing) return res.status(409).json({ error: 'Email already registered in Spider-Registry' });

  const hashed = bcrypt.hashSync(password, 10);
  const result = queryRun(
    'INSERT INTO users (name, email, password, role, campus, phone, degree) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [name, email, hashed, role, selectedCampus, phone || '', degree || '']
  );

  const token = jwt.sign(
    { id: result.lastInsertRowid, name, email, role, campus: selectedCampus, phone: phone || '', degree: degree || '' },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.status(201).json({
    token,
    user: {
      id: result.lastInsertRowid,
      name,
      email,
      role,
      campus: selectedCampus,
      phone: phone || '',
      degree: degree || ''
    }
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

  const user = queryGet('SELECT * FROM users WHERE email = ?', [email]);
  if (!user) return res.status(401).json({ error: 'Invalid Spider-ID credentials' });

  const valid = bcrypt.compareSync(password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid Spider-ID credentials' });

  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      campus: user.campus || 'Graphic Era, Dehradun',
      phone: user.phone || '',
      degree: user.degree || ''
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.json({
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      campus: user.campus || 'Graphic Era, Dehradun',
      phone: user.phone || '',
      degree: user.degree || ''
    }
  });
});

// POST /api/auth/google — Verify Google ID Token & Authenticate/Register User
router.post('/google', async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ error: 'Google ID token required' });
  }

  const clientId = process.env.GOOGLE_CLIENT_ID || '329285224512-im9fsfjmh1gkmoalcrbh8a0salnkmcbu.apps.googleusercontent.com';

  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: clientId,
    });
    const payload = ticket.getPayload();

    if (!payload || !payload.email) {
      return res.status(401).json({ error: 'Google account email unavailable' });
    }

    if (!payload.email_verified) {
      return res.status(401).json({ error: 'Google email address must be verified' });
    }

    const normalizedEmail = payload.email.trim().toLowerCase();

    // Look for existing user by normalized email
    let user = queryGet('SELECT * FROM users WHERE email = ?', [normalizedEmail]);

    if (!user) {
      // New user registration — assign least-privileged role 'student'
      const name = payload.name || normalizedEmail.split('@')[0];
      const defaultCampus = 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL';
      // Cryptographically random hashed password to satisfy SQLite 'password NOT NULL' constraint
      const randomSecret = crypto.randomBytes(32).toString('hex');
      const hashedPassword = bcrypt.hashSync(randomSecret, 10);

      const result = queryRun(
        'INSERT INTO users (name, email, password, role, campus, phone, degree) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, normalizedEmail, hashedPassword, 'student', defaultCampus, '', '']
      );

      user = queryGet('SELECT * FROM users WHERE id = ?', [result.lastInsertRowid]);
    }

    // Never promote or change role/campus of existing users
    const userRole = user.role || 'student';
    const userCampus = user.campus || 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL';

    const jwtToken = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        role: userRole,
        campus: userCampus,
        phone: user.phone || '',
        degree: user.degree || ''
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      token: jwtToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: userRole,
        campus: userCampus,
        phone: user.phone || '',
        degree: user.degree || ''
      }
    });
  } catch (err) {
    console.error('Google verification error:', err.message);
    return res.status(401).json({ error: 'Invalid or expired Google authentication token' });
  }
});

router.get('/me', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
module.exports.authenticateToken = authenticateToken;
