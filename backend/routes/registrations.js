const express = require('express');
const { queryAll, queryGet, queryRun } = require('../db');
const { authenticateToken } = require('./auth');

const router = express.Router();

// Helper to save attendees to verified_passes
function saveAttendeesToVerifiedPasses(eventId, event, team_name, track_info, attendees) {
  if (!Array.isArray(attendees)) return;

  for (const att of attendees) {
    if (!att || !att.ticketCode) continue;

    try {
      queryRun(`
        INSERT OR REPLACE INTO verified_passes (
          ticket_code, event_id, event_title, event_venue, event_date, event_time,
          event_campus, student_name, student_email, phone, roll_no, campus, degree,
          team_name, role_in_team, track_info, photo_url, attendance_status, checkin_time, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'))
      `, [
        att.ticketCode,
        eventId || (event && event.id) || 1,
        (event && event.title) || att.event_title || 'Campus Event',
        (event && event.venue) || 'Campus Auditorium',
        (event && (event.display_date || event.event_date)) || 'Wed, Nov 25, 2026',
        (event && event.event_time) || '10:30 AM',
        att.campus || (event && event.campus) || 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
        att.name || att.student_name || 'Graphic Era Student',
        att.email || att.student_email || 'student@gehu.ac.in',
        att.phone || '+91 98765 43210',
        att.rollNo || att.roll_no || 'GEHU-STUDENT',
        att.campus || (event && event.campus) || 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
        att.degree || 'B.Tech CSE',
        team_name || att.team_name || 'Solo',
        att.roleInTeam || (att.isLeader ? 'Team Leader' : 'Team Member'),
        track_info || att.track_info || 'General Track',
        att.photoUrl || att.photo || '',
        'REGISTERED & VERIFIED',
        null
      ]);
    } catch (err) {
      console.error('Error inserting verified pass:', err);
    }
  }
}

// POST /api/events/verify/save-passes — Public sync endpoint for frontend to store passes immediately
router.post('/verify/save-passes', (req, res) => {
  const { event_id, event_title, event_venue, event_date, event_time, event_campus, team_name, track_info, attendees } = req.body;

  if (Array.isArray(attendees) && attendees.length > 0) {
    saveAttendeesToVerifiedPasses(event_id, {
      id: event_id,
      title: event_title,
      venue: event_venue,
      event_date: event_date,
      event_time: event_time,
      campus: event_campus
    }, team_name, track_info, attendees);

    return res.json({ success: true, count: attendees.length });
  }

  res.status(400).json({ error: 'No attendees provided' });
});

// POST /api/events/:id/register — Student registers for an event
router.post('/:id/register', authenticateToken, (req, res) => {
  const eventId = parseInt(req.params.id);
  const { student_name, student_email, phone, degree, roll_no, campus, team_name, team_size, track_info, github_link, details_json } = req.body;

  if (!student_name || !student_email || !phone || !roll_no) {
    return res.status(400).json({ error: 'Name, email, phone, and University Roll No are required.' });
  }

  const event = queryGet("SELECT * FROM events WHERE id = ? AND status = 'approved'", [eventId]);
  if (!event) return res.status(404).json({ error: 'Event not found or not currently approved' });

  // Generate futuristic Spider Ticket Code with event acronym
  let prefix = 'SPIDEY';
  if (event.title.includes('Winter')) prefix = 'HTW-2027';
  else if (event.title.includes('Astro')) prefix = 'ASTRO-26';
  else if (event.title.includes('Grafest')) prefix = 'GRAFEST';
  else if (event.title.includes('Infotsav')) prefix = 'TECHFEST';
  else if (event.title.includes('Spardha')) prefix = 'SPARDHA';

  const ticketCode = details_json?.attendees?.[0]?.ticketCode || `${prefix}-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

  // Parse details_json if object
  const detailsObj = typeof details_json === 'object' ? details_json : (details_json ? JSON.parse(details_json) : null);

  const result = queryRun(`
    INSERT OR REPLACE INTO event_registrations (event_id, user_id, student_name, student_email, phone, degree, roll_no, campus, ticket_code, team_name, team_size, track_info, github_link, details_json)
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
    detailsObj ? JSON.stringify(detailsObj) : null
  ]);

  // Insert all attendees into verified_passes table
  if (detailsObj && Array.isArray(detailsObj.attendees)) {
    saveAttendeesToVerifiedPasses(eventId, event, team_name, track_info, detailsObj.attendees);
  } else {
    saveAttendeesToVerifiedPasses(eventId, event, team_name, track_info, [{
      ticketCode,
      name: student_name,
      email: student_email,
      phone,
      rollNo: roll_no,
      campus: campus || event.campus,
      degree,
      isLeader: true
    }]);
  }

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

// GET /api/events/admin/all — High Command Admin gets all registrations across all events
router.get('/admin/all', authenticateToken, (req, res) => {
  if (req.user.role !== 'admin' && req.user.email !== 'admin@campus.edu' && req.user.email !== 'ujjwalchaudhary2007@gmail.com') {
    return res.status(403).json({ error: 'High Command Admin access required' });
  }

  const registrations = queryAll(`
    SELECT r.*, e.title as event_title, e.category as event_category, e.campus as event_campus, e.venue as event_venue
    FROM event_registrations r
    JOIN events e ON e.id = r.event_id
    ORDER BY r.created_at DESC
  `);

  res.json(registrations);
});

// GET /api/events/:id/attendees — Organizer or Admin can see who registered
router.get('/:id/attendees', authenticateToken, (req, res) => {
  const eventId = parseInt(req.params.id);
  const attendees = queryAll(`
    SELECT student_name, student_email, phone, degree, roll_no, campus, ticket_code, team_name, team_size, track_info, github_link, details_json, created_at
    FROM event_registrations
    WHERE event_id = ?
    ORDER BY created_at DESC
  `, [eventId]);

  res.json(attendees);
});

// GET /api/events/verify/:ticketCode — Public QR scan verification with exact student photo & time
router.get('/verify/:ticketCode', (req, res) => {
  const code = (req.params.ticketCode || '').trim();

  // 1. Search in dedicated verified_passes table
  let pass = queryGet(`SELECT * FROM verified_passes WHERE ticket_code = ?`, [code]);

  // 2. If not found, search in event_registrations table directly
  if (!pass) {
    const reg = queryGet(`
      SELECT r.*, e.title as event_title, e.category as event_category, e.campus as event_campus, e.venue as event_venue, e.event_date, e.event_time
      FROM event_registrations r
      JOIN events e ON e.id = r.event_id
      WHERE r.ticket_code = ?
    `, [code]);

    if (reg) {
      pass = {
        ticket_code: reg.ticket_code,
        event_title: reg.event_title,
        event_venue: reg.event_venue || 'Campus Auditorium',
        event_date: reg.event_date || 'Wed, Nov 25, 2026',
        event_time: reg.event_time || '10:30 AM',
        event_campus: reg.event_campus,
        student_name: reg.student_name,
        student_email: reg.student_email,
        phone: reg.phone,
        roll_no: reg.roll_no,
        campus: reg.campus,
        degree: reg.degree,
        team_name: reg.team_name,
        role_in_team: 'Team Leader',
        track_info: reg.track_info,
        photo_url: '',
        attendance_status: 'REGISTERED & VERIFIED',
        checkin_time: null,
        created_at: reg.created_at
      };
    }
  }

  // 3. If still not found, search inside details_json of all event_registrations
  if (!pass) {
    const allRegs = queryAll(`SELECT details_json, created_at FROM event_registrations WHERE details_json IS NOT NULL`);
    for (const r of allRegs) {
      try {
        const dj = JSON.parse(r.details_json);
        if (Array.isArray(dj.attendees)) {
          const found = dj.attendees.find(a => (a.ticketCode || '').toUpperCase() === code.toUpperCase());
          if (found) {
            pass = {
              ticket_code: found.ticketCode,
              event_title: dj.event_title || 'Campus Event',
              event_venue: 'Block C Auditorium',
              event_date: dj.display_date || dj.event_date || 'Wed, Nov 25, 2026',
              event_time: dj.event_time || '10:30 AM',
              event_campus: found.campus || dj.event_campus,
              student_name: found.name,
              student_email: found.email,
              phone: found.phone,
              roll_no: found.rollNo,
              campus: found.campus,
              degree: found.degree,
              team_name: dj.team_name,
              role_in_team: found.roleInTeam || (found.isLeader ? 'Team Leader' : 'Team Member'),
              track_info: dj.track_info,
              photo_url: found.photoUrl || '',
              attendance_status: 'REGISTERED & VERIFIED',
              checkin_time: null,
              created_at: r.created_at
            };
            break;
          }
        }
      } catch (e) {}
    }
  }

  if (!pass) {
    return res.status(404).json({ verified: false, message: 'Ticket code not found' });
  }

  res.json({
    verified: true,
    pass: pass,
    registration: pass
  });
});

// POST /api/events/verify/:ticketCode/checkin — Gatekeeper / Organizer Mark Attendance
router.post('/verify/:ticketCode/checkin', (req, res) => {
  const code = (req.params.ticketCode || '').trim();
  const istTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  const checkinLabel = `PRESENT & ADMITTED AT GATE (${istTime})`;

  try {
    queryRun(`
      UPDATE verified_passes 
      SET attendance_status = 'PRESENT & VERIFIED', checkin_time = ?
      WHERE ticket_code = ?
    `, [istTime, code]);
  } catch (err) {}

  res.json({
    success: true,
    ticket_code: code,
    attendance_status: 'PRESENT & VERIFIED',
    checkin_time: istTime,
    message: 'Attendance marked present successfully at campus security gate!'
  });
});

module.exports = router;
