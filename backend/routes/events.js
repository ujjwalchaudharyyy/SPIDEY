const express = require('express');
const { queryAll, queryGet, queryRun } = require('../db');
const { authenticateToken } = require('./auth');

const router = express.Router();

const EVENT_ENRICHMENTS = {
  1: {
    video_url: "/assets/videos/web_drone.mp4",
    video_title: "Himalayan Web-Drone Flight Demo & Aerial Surveillance"
  },
  2: {
    image_url: "/assets/events/graphite_live_3.jpg",
    gallery: [
      "/assets/events/graphite_live_3.jpg",
      "/assets/events/graphite_live_1.jpg",
      "/assets/events/graphite_live_2.jpg",
      "/assets/events/graphite_live_4.jpg",
      "/assets/events/graphite_live_5.jpg",
      "/assets/events/graphite_live_6.jpg",
      "/assets/events/graphite_live_7.jpg",
      "/assets/events/graphite_live_8.jpg"
    ]
  },
  4: {
    gallery: [
      "/assets/events/watch_the_code_1.jpg",
      "/assets/events/watch_the_code_stage.jpg",
      "/assets/events/watch_the_code_team.jpg",
      "/assets/events/watch_the_code_trophy1.jpg",
      "/assets/events/watch_the_code_trophy2.jpg"
    ],
    winner_team: "Team TECH4ALL (Consolation Prize ₹5,000 & Trophy)"
  }
};

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

  const rawEvents = queryAll(query, params);
  const events = rawEvents.map(e => {
    const enrich = EVENT_ENRICHMENTS[e.id] || {};
    const item = { ...e, ...enrich };
    if (item.photos && typeof item.photos === 'string') {
      try { item.photos = JSON.parse(item.photos); } catch (err) {}
    }
    if (item.gallery && typeof item.gallery === 'string') {
      try { item.gallery = JSON.parse(item.gallery); } catch (err) {}
    }
    if (item.highlights && typeof item.highlights === 'string') {
      try { item.highlights = JSON.parse(item.highlights); } catch (err) {}
    }
    return item;
  
  });
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
  const cats = ['Academic', 'Cultural', 'Sports', 'Technical', 'Workshop', 'Social', 'Hackathon / Technical Event', 'Other'];
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
  if (req.user.role !== 'organizer' && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Organizer or Admin access required' });
  }

  const { title, description, category, venue, campus, image_url, event_date, event_time } = req.body;
  if (!title || !description || !category || !venue || !event_date || !event_time) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const selectedCampus = campus || req.user.campus || 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL';
  const organizerId = req.user.id || 1;
  const organizerName = req.user.name || 'Organizer';
  const initialStatus = req.user.role === 'admin' ? 'approved' : 'pending';

  const result = queryRun(`
    INSERT INTO events (title, description, category, venue, campus, image_url, event_date, event_time, organizer_id, organizer_name, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [title, description, category, venue, selectedCampus, image_url || '', event_date, event_time, organizerId, organizerName, initialStatus]);

  const event = queryGet('SELECT * FROM events WHERE id = ?', [result.lastInsertRowid]);
  res.status(201).json(event);
});

// POST /api/events/admin-create — Admin directly creates an APPROVED event (no pending queue)
router.post('/admin-create', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin' && req.user.role !== 'organizer') {
    return res.status(403).json({ error: 'Admin access required' });
  }

  const { title, description, category, venue, campus, image_url, event_date, event_time } = req.body;
  if (!title || !description || !category || !venue || !event_date || !event_time) {
    return res.status(400).json({ error: 'All required fields must be filled: title, description, category, venue, event_date, event_time' });
  }

  const isSuperAdmin = req.user.email === 'ujjwalchaudhary2007@gmail.com' || req.user.campus === 'ALL';
  const selectedCampus = (isSuperAdmin && campus) ? campus : (req.user.campus || campus || 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL');
  const organizerId = req.user.id || 1;
  const organizerName = req.user.name || 'Admin';

  const result = queryRun(`
    INSERT INTO events (title, description, category, venue, campus, image_url, event_date, event_time, organizer_id, organizer_name, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'approved')
  `, [
    title, description, category, venue, selectedCampus,
    image_url || '', event_date, event_time,
    organizerId, organizerName
  ]);

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
  if (!event) {
    return res.json({ message: 'Event already removed or not found' });
  }
  if (req.user.role !== 'admin' && event.organizer_id !== req.user.id) {
    return res.status(403).json({ error: 'Not authorized to delete this event' });
  }
  queryRun('DELETE FROM rsvps WHERE event_id = ?', [parseInt(req.params.id)]);
  queryRun('DELETE FROM events WHERE id = ?', [parseInt(req.params.id)]);
  res.json({ message: 'Event deleted successfully' });
});

module.exports = router;
