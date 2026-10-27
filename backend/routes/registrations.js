const express = require('express');
const { queryAll, queryGet, queryRun } = require('../db');
const { authenticateToken } = require('./auth');

const router = express.Router();

// POST /api/events/:id/register — Student registers for an event
router.post('/:id/register', authenticateToken, (req, res) => {
  const eventId = parseInt(req.params.id);
  const { student_name, student_email, phone, degree, roll_no, campus, team_name, team_size, track_info, github_link, details_json } = req.body;

  if (!student_name || !student_email || !phone || !roll_no) {
    return res.status(400).json({ error: 'Name, email, phone, and University Roll No are required.' });
  }

  const event = queryGet("SELECT * FROM events WHERE id = ? AND status = 'approved'", [eventId]);
  if (!event) return res.status(404).json({ error: 'Event not found or not currently approved' });

  // Check if already registered
  const existing = queryGet('SELECT * FROM event_registrations WHERE event_id = ? AND user_id = ?', [eventId, req.user.id]);
  if (existing) {
    return res.status(400).json({ error: 'You have already registered for this mission. Ticket code: ' + existing.ticket_code });
  }

  // Generate futuristic Spider Ticket Code with event acronym
  let prefix = 'SPIDER';
  if (event.title.includes('Winter')) prefix = 'HTW-2027';
  else if (event.title.includes('Astro')) prefix = 'ASTRO-26';
  else if (event.title.includes('Grafest')) prefix = 'GRAFEST';
  else if (event.title.includes('Infotsav')) prefix = 'TECHFEST';
  else if (event.title.includes('Spardha')) prefix = 'SPARDHA';

  const ticketCode = `${prefix}-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

  const result = queryRun(`
    INSERT INTO event_registrations (event_id, user_id, student_name, student_email, phone, degree, roll_no, campus, ticket_code, team_name, team_size, track_info, github_link, details_json)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [
    eventId,
    req.user.id,
    student_name,
    student_email,
    phone,
    degree || req.user.degree || 'B.Tech CSE',
    roll_no,
    campus || req.user.campus || event.campus,
    ticketCode,
    team_name || null,
    team_size || null,
    track_info || null,
    github_link || null,
    typeof details_json === 'object' ? JSON.stringify(details_json) : (details_json || null)
  ]);

  // Also auto-add to RSVPs if not already there
  const existingRsvp = queryGet('SELECT * FROM rsvps WHERE user_id = ? AND event_id = ?', [req.user.id, eventId]);
  if (!existingRsvp) {
    queryRun('INSERT INTO rsvps (user_id, event_id) VALUES (?, ?)', [req.user.id, eventId]);
  }

  res.status(201).json({
    message: 'Event registration confirmed! Ticket code generated.',
    ticketCode,
    registrationId: result.lastInsertRowid
  });
});

// GET /api/events/registrations/my — List events current user registered for
router.get('/registrations/my', authenticateToken, (req, res) => {
  const registrations = queryAll(`
    SELECT r.*, e.title as event_title, e.category, e.venue, e.event_date, e.event_time, e.image_url
    FROM event_registrations r
    JOIN events e ON e.id = r.event_id
    WHERE r.user_id = ?
    ORDER BY r.created_at DESC
  `, [req.user.id]);

  res.json(registrations);
});

// GET /api/events/:id/attendees — Organizer or Admin can see who registered
router.get('/:id/attendees', authenticateToken, (req, res) => {
  const eventId = parseInt(req.params.id);
  const attendees = queryAll(`
    SELECT student_name, student_email, phone, degree, roll_no, campus, ticket_code, created_at
    FROM event_registrations
    WHERE event_id = ?
    ORDER BY created_at DESC
  `, [eventId]);

  res.json(attendees);
});

module.exports = router;
