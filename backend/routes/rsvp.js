const express = require('express');
const { queryAll, queryGet, queryRun } = require('../db');
const { authenticateToken } = require('./auth');

const router = express.Router();

// POST /api/rsvp/:eventId — toggle RSVP (student only)
router.post('/:eventId', authenticateToken, (req, res) => {
  if (req.user.role !== 'student') return res.status(403).json({ error: 'Only students can RSVP' });

  const eventId = parseInt(req.params.eventId);
  const event = queryGet("SELECT * FROM events WHERE id = ? AND status = 'approved'", [eventId]);
  if (!event) return res.status(404).json({ error: 'Event not found or not approved' });

  const existing = queryGet('SELECT * FROM rsvps WHERE user_id = ? AND event_id = ?', [req.user.id, eventId]);

  if (existing) {
    queryRun('DELETE FROM rsvps WHERE user_id = ? AND event_id = ?', [req.user.id, eventId]);
    const count = queryGet('SELECT COUNT(*) as count FROM rsvps WHERE event_id = ?', [eventId]);
    return res.json({ rsvped: false, rsvp_count: count.count });
  } else {
    queryRun('INSERT INTO rsvps (user_id, event_id) VALUES (?, ?)', [req.user.id, eventId]);
    console.log(`📧 Reminder queued: ${req.user.email} → "${event.title}" on ${event.event_date} at ${event.event_time}`);
    const count = queryGet('SELECT COUNT(*) as count FROM rsvps WHERE event_id = ?', [eventId]);
    return res.json({ rsvped: true, rsvp_count: count.count });
  }
});

// GET /api/rsvp/my — get student's RSVPed events
router.get('/my', authenticateToken, (req, res) => {
  if (req.user.role !== 'student') return res.status(403).json({ error: 'Only students can view RSVPs' });

  const events = queryAll(`
    SELECT e.*, 
      (SELECT COUNT(*) FROM rsvps WHERE event_id = e.id) as rsvp_count,
      1 as is_rsvped
    FROM events e
    INNER JOIN rsvps r ON r.event_id = e.id
    WHERE r.user_id = ? AND e.status = 'approved'
    ORDER BY e.event_date ASC
  `, [req.user.id]);

  res.json(events);
});

// GET /api/rsvp/status/:eventId — check if current user has RSVPed
router.get('/status/:eventId', authenticateToken, (req, res) => {
  const rsvp = queryGet('SELECT * FROM rsvps WHERE user_id = ? AND event_id = ?', [req.user.id, parseInt(req.params.eventId)]);
  const count = queryGet('SELECT COUNT(*) as count FROM rsvps WHERE event_id = ?', [parseInt(req.params.eventId)]);
  res.json({ rsvped: !!rsvp, rsvp_count: count.count });
});

module.exports = router;
