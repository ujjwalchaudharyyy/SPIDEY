const express = require('express');
const cors = require('cors');
const path = require('path');
const { initDB } = require('./db');

const app = express();
const PORT = 5000;

const allowedOrigins = [
  'http://localhost:5173',
  'https://spidey-frontend-khaki.vercel.app',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
      callback(null, true);
    } else {
      callback(null, true);
    }
  },
  credentials: true
}));
app.use(express.json());

async function start() {
  await initDB();

  const authRoutes = require('./routes/auth');
  const eventsRoutes = require('./routes/events');
  const rsvpRoutes = require('./routes/rsvp');
  const registrationRoutes = require('./routes/registrations');

  app.use('/api/auth', authRoutes);
  app.use('/api/events', eventsRoutes);
  app.use('/api/rsvp', rsvpRoutes);
  app.use('/api/events', registrationRoutes);

  app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date().toISOString() }));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`🚀 Campus Event Hub API running on http://localhost:${PORT}`);
  });
}

start().catch(console.error);
