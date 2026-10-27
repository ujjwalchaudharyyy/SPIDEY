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
