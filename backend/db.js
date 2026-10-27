const initSqlJs = require('sql.js');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

const DB_PATH = path.join(__dirname, 'geu_spider_events.db');

let db = null;

function saveDB() {
  if (db) {
    const data = db.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(DB_PATH, buffer);
  }
}

setInterval(saveDB, 5000);

async function initDB() {
  const SQL = await initSqlJs();

  if (fs.existsSync(DB_PATH)) {
    const fileBuffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(fileBuffer);
    console.log('📂 Loaded existing database');
  } else {
    db = new SQL.Database();
    console.log('🆕 Created new database');
  }

  // Users Table
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      phone TEXT,
      degree TEXT,
      role TEXT NOT NULL CHECK(role IN ('student', 'organizer', 'admin')),
      campus TEXT NOT NULL DEFAULT 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Events Table
  db.run(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      category TEXT NOT NULL,
      venue TEXT NOT NULL,
      campus TEXT NOT NULL DEFAULT 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
      image_url TEXT,
      photos TEXT,
      gallery TEXT,
      winner_team TEXT,
      event_date TEXT NOT NULL,
      event_time TEXT NOT NULL,
      organizer_id INTEGER NOT NULL,
      organizer_name TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'pending' CHECK(status IN ('pending', 'approved', 'rejected')),
      rejection_reason TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (organizer_id) REFERENCES users(id)
    )
  `);

  try { db.run("ALTER TABLE events ADD COLUMN photos TEXT"); } catch (e) {}
  try { db.run("ALTER TABLE events ADD COLUMN gallery TEXT"); } catch (e) {}
  try { db.run("ALTER TABLE events ADD COLUMN winner_team TEXT"); } catch (e) {}

  // RSVPs Table
  db.run(`
    CREATE TABLE IF NOT EXISTS rsvps (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      event_id INTEGER NOT NULL,
      reminded INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, event_id),
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (event_id) REFERENCES events(id)
    )
  `);

  // NEW: Dedicated Event Registrations Table (Full Registration Protocol)
  db.run(`
    CREATE TABLE IF NOT EXISTS event_registrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event_id INTEGER NOT NULL,
      user_id INTEGER NOT NULL,
      student_name TEXT NOT NULL,
      student_email TEXT NOT NULL,
      phone TEXT NOT NULL,
      degree TEXT NOT NULL,
      roll_no TEXT NOT NULL,
      campus TEXT NOT NULL,
      ticket_code TEXT NOT NULL UNIQUE,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(event_id, user_id),
      FOREIGN KEY (event_id) REFERENCES events(id),
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  // Admin user
  const adminRes = db.exec("SELECT id FROM users WHERE email = 'admin@campus.edu'");
  if (adminRes.length === 0) {
    const hashed = bcrypt.hashSync('admin123', 10);
    db.run("INSERT INTO users (name, email, password, role, campus) VALUES (?, ?, ?, ?, ?)",
      ['Peter Parker (Head Admin)', 'admin@campus.edu', hashed, 'admin', 'GRAPHIC ERA HILL UNIVERSITY DEHRADUN']);
  }

  // Student user (Peter Parker)
  const studentRes = db.exec("SELECT id FROM users WHERE email = 'spiderman@gehu.ac.in'");
  if (studentRes.length === 0) {
    const hashedStudent = bcrypt.hashSync('student123', 10);
    db.run("INSERT INTO users (name, email, password, role, campus, degree) VALUES (?, ?, ?, ?, ?, ?)",
      ['Peter Parker', 'spiderman@gehu.ac.in', hashedStudent, 'student', 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL', 'B.Tech CSE - 3rd Year']);
  }

  // Generic Student user
  const genericStudentRes = db.exec("SELECT id FROM users WHERE email = 'student@campus.edu'");
  if (genericStudentRes.length === 0) {
    const hashedGeneric = bcrypt.hashSync('student123', 10);
    db.run("INSERT INTO users (name, email, password, role, campus, degree) VALUES (?, ?, ?, ?, ?, ?)",
      ['Miles Morales', 'student@campus.edu', hashedGeneric, 'student', 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL', 'B.Tech AI/ML - 2nd Year']);
  }

  // Organizer user
  const orgRes = db.exec("SELECT id FROM users WHERE email = 'organizer@campus.edu'");
  if (orgRes.length === 0) {
    const hashedOrg = bcrypt.hashSync('org123', 10);
    db.run("INSERT INTO users (name, email, password, role, campus) VALUES (?, ?, ?, ?, ?)",
      ['Tony Stark', 'organizer@campus.edu', hashedOrg, 'organizer', 'GRAPHIC ERA HILL UNIVERSITY DEHRADUN']);
  }

  // Seed Default Events including Smart India Hackathon
  const eventsCountRes = db.exec("SELECT COUNT(*) FROM events");
  const eventCount = eventsCountRes[0]?.values[0]?.[0] || 0;
  if (eventCount === 0) {
    const sihPhotos = JSON.stringify([
      {
        url: "/assets/events/sih/sih_inauguration.jpg",
        title: "Grand Inauguration & Ribbon-Cutting Ceremony",
        caption: "Dignitaries, leadership, and organizing faculty inaugurating Smart India Hackathon at Graphic Era."
      },
      {
        url: "/assets/events/sih/sih_interaction.jpg",
        title: "Prime Minister & AICTE Live Interaction",
        caption: "Auditorium live address and nationwide interactive session with Prime Minister Narendra Modi and Education Minister."
      },
      {
        url: "/assets/events/sih/sih_coding.jpg",
        title: "Intense 36-Hour Non-Stop Hackathon Sprint",
        caption: "Student teams collaborating, debugging, and building innovative software and hardware prototypes."
      },
      {
        url: "/assets/events/sih/sih_presentation.jpg",
        title: "Mentoring & Jury Technical Evaluation",
        caption: "Teams demonstrating live project architectures and solving real-world challenges before the expert jury."
      },
      {
        url: "/assets/events/sih/sih_feasibility.jpg",
        title: "Pitch Deck & Feasibility Analysis",
        caption: "ByteX team showcasing project viability, scalable cloud architecture, and market implementation roadmaps."
      }
    ]);

    const sihGallery = JSON.stringify([
      "/assets/events/sih/sih_inauguration.jpg",
      "/assets/events/sih/sih_interaction.jpg",
      "/assets/events/sih/sih_coding.jpg",
      "/assets/events/sih/sih_presentation.jpg",
      "/assets/events/sih/sih_feasibility.jpg"
    ]);

    db.run(
      `INSERT INTO events (title, description, category, venue, campus, image_url, photos, gallery, event_date, event_time, organizer_id, organizer_name, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'approved')`,
      [
        "Smart India Hackathon (SIH)",
        "Memories and highlights from Smart India Hackathon (SIH) at Graphic Era Hill University, Dehradun Campus.",
        "Hackathon / Technical Event",
        "Graphic Era Hill University, Dehradun Campus",
        "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
        "/assets/events/sih/sih_inauguration.jpg",
        sihPhotos,
        sihGallery,
        "2025-12-09",
        "09:00 AM",
        1,
        "Ministry of Education & MoE's Innovation Cell • GEHU Dehradun"
      ]
    );

    const dussehraPhotos = JSON.stringify([
      {
        url: "/assets/events/dussehra/dussehra_1.jpg",
        title: "Grand Ravan Dahan Spectacle & Crowds",
        caption: "Towering 50-foot effigy ablaze amidst cheering students and faculty against the illuminated university architecture."
      },
      {
        url: "/assets/events/dussehra/dussehra_2.jpg",
        title: "Towering Blazing Effigy & Night Sky",
        caption: "Spectacular vertical shot of the effigy engulfed in celebratory flames and sparks illuminating Clement Town."
      },
      {
        url: "/assets/events/dussehra/dussehra_3.jpg",
        title: "Fiery Effigy & Festive Fireworks",
        caption: "Night pyrotechnics, crackling fireworks, and smoke billowing across the main university ground."
      },
      {
        url: "/assets/events/dussehra/dussehra_4.jpg",
        title: "Hon'ble Chairman Prof. Dr. Kamal Ghanshala with Dignitaries",
        caption: "Graphic Era Group Chairman Prof. Dr. Kamal Ghanshala and university leadership holding the sacred flame torch."
      },
      {
        url: "/assets/events/dussehra/dussehra_5.jpg",
        title: "Lighting the Sacred Flame Pyre",
        caption: "Ceremonial moment as Chairman Prof. Dr. Kamal Ghanshala lights the base of the effigy, symbolizing the victory of light over darkness."
      }
    ]);

    const dussehraGallery = JSON.stringify([
      "/assets/events/dussehra/dussehra_1.jpg",
      "/assets/events/dussehra/dussehra_2.jpg",
      "/assets/events/dussehra/dussehra_3.jpg",
      "/assets/events/dussehra/dussehra_4.jpg",
      "/assets/events/dussehra/dussehra_5.jpg"
    ]);

    db.run(
      `INSERT INTO events (title, description, category, venue, campus, image_url, photos, gallery, event_date, event_time, organizer_id, organizer_name, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'approved')`,
      [
        "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
        "Grand annual Vijyadashami celebration at Graphic Era Deemed University main ground featuring the ceremonial burning of the towering Ravan effigy, traditional sparklers & fireworks, with the sacred flame lit by Hon'ble Chairman Prof. Dr. Kamal Ghanshala amidst thousands of cheering students and faculty.",
        "Cultural",
        "Main University Ground, Graphic Era Deemed Campus",
        "GRAPHIC ERA DEEMED UNIVERSITY",
        "/assets/events/dussehra/dussehra_1.jpg",
        dussehraPhotos,
        dussehraGallery,
        "2026-10-20",
        "07:30 PM",
        1,
        "Student Activity Council (SAC) • Graphic Era Deemed University"
      ]
    );
  }

  saveDB();
  return db;
}

function getDB() {
  return db;
}

function queryAll(sql, params = []) {
  const stmt = db.prepare(sql);
  stmt.bind(params);
  const rows = [];
  while (stmt.step()) {
    rows.push(stmt.getAsObject());
  }
  stmt.free();
  return rows;
}

function queryGet(sql, params = []) {
  const rows = queryAll(sql, params);
  return rows.length > 0 ? rows[0] : null;
}

function queryRun(sql, params = []) {
  db.run(sql, params);
  const info = db.exec("SELECT last_insert_rowid() as id, changes() as changes");
  const lastInsertRowid = info[0]?.values[0]?.[0] || 0;
  const changes = info[0]?.values[0]?.[1] || 0;
  saveDB();
  return { lastInsertRowid, changes };
}

module.exports = { initDB, getDB, queryAll, queryGet, queryRun };
