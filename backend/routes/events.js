const express = require('express');
const { queryAll, queryGet, queryRun } = require('../db');
const { authenticateToken } = require('./auth');

const router = express.Router();

router.get('/', (req, res) => {
  const { category, search, campus, timeline } = req.query;

  let query = `
    SELECT e.*, 
      (SELECT COUNT(*) FROM rsvps WHERE event_id = e.id) as rsvp_count
    FROM events e
    WHERE e.status = 'approved'
  `;
  const params = [];

  if (category && category !== 'all') {
    query += ' AND e.category = ?';
    params.push(category);
  }
  if (campus && campus !== 'all') {
    query += ' AND e.campus = ?';
    params.push(campus);
  }
  if (search) {
    query += ' AND (e.title LIKE ? OR e.description LIKE ? OR e.venue LIKE ?)';
    const s = `%${search}%`;
    params.push(s, s, s);
  }

  const today = '2026-10-27';
  if (timeline === 'past') {
    query += ` AND e.event_date < '${today}'`;
  } else if (timeline === 'present') {
    query += ` AND e.event_date = '${today}'`;
  } else if (timeline === 'future') {
    query += ` AND e.event_date > '${today}'`;
  }

  query += ' ORDER BY e.event_date DESC, e.event_time ASC';

  const events = queryAll(query, params);
  res.json(events);
});

// GET /api/events/campuses — 4 Graphic Era Campuses with 4K Photos
router.get('/campuses', (req, res) => {
  const campuses = [
    {
      id: "bhimtal",
      name: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
      shortName: "GEHU Bhimtal",
      code: "Bhimtal Campus",
      themeColor: "#E21B24",
      image: "/assets/campuses/bhimtal.png",
      location: "Bhimtal, Nainital, Uttarakhand",
      tagline: "High-Altitude Lake View Innovation & Tech Arena",
      bgGradient: "from-red-950/80 via-black to-slate-950",
      accentBorder: "border-red-500/50"
    },
    {
      id: "haldwani",
      name: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
      shortName: "GEHU Haldwani",
      code: "Haldwani Campus",
      themeColor: "#0F52BA",
      image: "/assets/campuses/haldwani.png",
      location: "Haldwani, Nainital, Uttarakhand",
      tagline: "Gateway Cyber-Robotics, Design & Innovation Arena",
      bgGradient: "from-blue-950/80 via-black to-slate-950",
      accentBorder: "border-blue-500/50"
    },
    {
      id: "dehradun",
      name: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
      shortName: "GEHU Dehradun",
      code: "Dehradun Campus",
      themeColor: "#FFD700",
      image: "/assets/campuses/dehradun.png",
      location: "Society Area, Clement Town, Dehradun",
      tagline: "Hill University Flagship Center of Excellence",
      bgGradient: "from-amber-950/80 via-black to-slate-950",
      accentBorder: "border-amber-500/50"
    },
    {
      id: "deemed",
      name: "GRAPHIC ERA DEEMED UNIVERSITY",
      shortName: "GEU Deemed to be University",
      code: "Deemed University",
      themeColor: "#00F0FF",
      image: "/assets/campuses/deemed.png",
      location: "Bell Road, Clement Town, Dehradun",
      tagline: "NAAC A+ Accredited Multiverse Research Headquarters",
      bgGradient: "from-cyan-950/80 via-black to-slate-950",
      accentBorder: "border-cyan-500/50"
    }
  ];
  res.json(campuses);
});

router.get('/pending', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin access required' });
  const events = queryAll(`
    SELECT e.*, (SELECT COUNT(*) FROM rsvps WHERE event_id = e.id) as rsvp_count
    FROM events e WHERE e.status = 'pending'
    ORDER BY e.created_at DESC
  `);
  res.json(events);
});

router.get('/my', authenticateToken, (req, res) => {
  if (req.user.role !== 'organizer') return res.status(403).json({ error: 'Organizer access required' });
  const events = queryAll(`
    SELECT e.*, (SELECT COUNT(*) FROM rsvps WHERE event_id = e.id) as rsvp_count
    FROM events e WHERE e.organizer_id = ?
    ORDER BY e.created_at DESC
  `, [req.user.id]);
  res.json(events);
});

router.get('/stats', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin access required' });

  const total = queryGet("SELECT COUNT(*) as count FROM events");
  const pending = queryGet("SELECT COUNT(*) as count FROM events WHERE status = 'pending'");
  const approved = queryGet("SELECT COUNT(*) as count FROM events WHERE status = 'approved'");
  const rejected = queryGet("SELECT COUNT(*) as count FROM events WHERE status = 'rejected'");
  const totalRsvps = queryGet("SELECT COUNT(*) as count FROM rsvps");
  const totalUsers = queryGet("SELECT COUNT(*) as count FROM users");

  res.json({
    totalEvents: total.count,
    pendingEvents: pending.count,
    approvedEvents: approved.count,
    rejectedEvents: rejected.count,
    totalRsvps: totalRsvps.count,
    totalUsers: totalUsers.count
  });
});

router.get('/categories', (req, res) => {
  const cats = ['Academic', 'Cultural', 'Sports', 'Technical', 'Workshop', 'Social', 'Other'];
  res.json(cats);
});

router.get('/all', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin access required' });
  const events = queryAll(`
    SELECT e.*, (SELECT COUNT(*) FROM rsvps WHERE event_id = e.id) as rsvp_count
    FROM events e
    ORDER BY e.created_at DESC
  `);
  res.json(events);
});

router.post('/submit', authenticateToken, (req, res) => {
  if (req.user.role !== 'organizer') return res.status(403).json({ error: 'Organizer access required' });

  const { title, description, category, venue, campus, image_url, event_date, event_time } = req.body;
  if (!title || !description || !category || !venue || !event_date || !event_time) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const selectedCampus = campus || req.user.campus || 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL';

  const result = queryRun(`
    INSERT INTO events (title, description, category, venue, campus, image_url, event_date, event_time, organizer_id, organizer_name, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')
  `, [title, description, category, venue, selectedCampus, image_url || '', event_date, event_time, req.user.id, req.user.name]);

  const event = queryGet('SELECT * FROM events WHERE id = ?', [result.lastInsertRowid]);
  res.status(201).json(event);
});

router.put('/:id/approve', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin access required' });
  const event = queryGet('SELECT * FROM events WHERE id = ?', [parseInt(req.params.id)]);
  if (!event) return res.status(404).json({ error: 'Event not found' });
  queryRun("UPDATE events SET status = 'approved', rejection_reason = NULL WHERE id = ?", [parseInt(req.params.id)]);
  res.json({ message: 'Event approved successfully' });
});

router.put('/:id/reject', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ error: 'Admin access required' });
  const { reason } = req.body;
  const event = queryGet('SELECT * FROM events WHERE id = ?', [parseInt(req.params.id)]);
  if (!event) return res.status(404).json({ error: 'Event not found' });
  queryRun("UPDATE events SET status = 'rejected', rejection_reason = ? WHERE id = ?", [reason || 'No reason provided', parseInt(req.params.id)]);
  res.json({ message: 'Event rejected' });
});

router.delete('/:id', authenticateToken, (req, res) => {
  const event = queryGet('SELECT * FROM events WHERE id = ?', [parseInt(req.params.id)]);
  if (!event) return res.status(404).json({ error: 'Event not found' });
  if (req.user.role !== 'admin' && event.organizer_id !== req.user.id) {
    return res.status(403).json({ error: 'Not authorized to delete this event' });
  }
  queryRun('DELETE FROM rsvps WHERE event_id = ?', [parseInt(req.params.id)]);
  queryRun('DELETE FROM events WHERE id = ?', [parseInt(req.params.id)]);
  res.json({ message: 'Event deleted successfully' });
});

module.exports = router;
