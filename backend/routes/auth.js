const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { queryGet, queryRun } = require('../db');

const router = express.Router();
const JWT_SECRET = 'campus_event_hub_secret_2024';

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

router.get('/me', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
module.exports.authenticateToken = authenticateToken;
