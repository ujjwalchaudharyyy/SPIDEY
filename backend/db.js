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

  // Schema upgrades for extended event metadata
  const eventColumns = [
    "ALTER TABLE events ADD COLUMN date_tba INTEGER DEFAULT 0",
    "ALTER TABLE events ADD COLUMN display_date TEXT",
    "ALTER TABLE events ADD COLUMN registration_window TEXT",
    "ALTER TABLE events ADD COLUMN registration_deadline TEXT",
    "ALTER TABLE events ADD COLUMN registration_status TEXT",
    "ALTER TABLE events ADD COLUMN badge_text TEXT",
    "ALTER TABLE events ADD COLUMN highlight_tag TEXT"
  ];
  for (const colSql of eventColumns) {
    try { db.run(colSql); } catch (e) {}
  }

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

  // Schema upgrades for event_registrations
  const regColumns = [
    "ALTER TABLE event_registrations ADD COLUMN team_name TEXT",
    "ALTER TABLE event_registrations ADD COLUMN team_size TEXT",
    "ALTER TABLE event_registrations ADD COLUMN track_info TEXT",
    "ALTER TABLE event_registrations ADD COLUMN github_link TEXT",
    "ALTER TABLE event_registrations ADD COLUMN details_json TEXT"
  ];
  for (const colSql of regColumns) {
    try { db.run(colSql); } catch (e) {}
  }

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
  let orgId = 1;
  if (orgRes.length === 0) {
    const hashedOrg = bcrypt.hashSync('org123', 10);
    db.run("INSERT INTO users (name, email, password, role, campus) VALUES (?, ?, ?, ?, ?)",
      ['Tony Stark', 'organizer@campus.edu', hashedOrg, 'organizer', 'GRAPHIC ERA HILL UNIVERSITY DEHRADUN']);
  } else if (orgRes[0].values.length > 0) {
    orgId = orgRes[0].values[0][0];
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

    const grafestPhotos = JSON.stringify([
      {
        url: "/assets/events/grafest/grafest_1.jpg",
        title: "Mahakali & Shiva Group Classical Dance",
        caption: "Spellbinding classical dance drama enactment featuring Lord Shiva and Mahakali in fierce divine choreography on the Student Grafest stage."
      },
      {
        url: "/assets/events/grafest/grafest_2.jpg",
        title: "Classical Indian Mudra & Veil Performance",
        caption: "Graceful performer portraying timeless Indian classical traditions with intricate facial expressions and authentic festive attire."
      },
      {
        url: "/assets/events/grafest/grafest_3.jpg",
        title: "Tandav Drama & Western Freestyle Solo Battle",
        caption: "Vibrant fusion featuring the fierce Mahakali roop alongside electrifying western solo freestyle choreography under the Grafest spotlight."
      },
      {
        url: "/assets/events/grafest/grafest_4.jpg",
        title: "Kathak Mid-Air Leap & Natraj Trishul Posture",
        caption: "Incredible athletic classical leap and divine Natraj pose holding the sacred Trishul, met with deafening applause from thousands of students."
      },
      {
        url: "/assets/events/grafest/grafest_5.jpg",
        title: "Lord Shiva Rudra Tandav & Grand Stage Smoke Finale",
        caption: "Grand ensemble finale with Lord Shiva raising the Damru amidst atmospheric stage smoke and rhythmic beats filling the university ground."
      }
    ]);

    const grafestGallery = JSON.stringify([
      "/assets/events/grafest/grafest_1.jpg",
      "/assets/events/grafest/grafest_2.jpg",
      "/assets/events/grafest/grafest_3.jpg",
      "/assets/events/grafest/grafest_4.jpg",
      "/assets/events/grafest/grafest_5.jpg"
    ]);

    db.run(
      `INSERT INTO events (title, description, category, venue, campus, image_url, photos, gallery, event_date, event_time, organizer_id, organizer_name, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'approved')`,
      [
        "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
        "Grand Student Grafest cultural extravaganza celebrating breathtaking dance drama performances, mythological Tandav & Mahakali choreography, classical Kathak mudras, and energetic western freestyle dance battles by talented Graphic Era students on the main university ground stage.",
        "Cultural",
        "Main University Ground & Open Amphitheatre, Graphic Era Deemed Campus",
        "GRAPHIC ERA DEEMED UNIVERSITY",
        "/assets/events/grafest/grafest_1.jpg",
        grafestPhotos,
        grafestGallery,
        "2026-10-20",
        "06:30 PM",
        1,
        "Cultural Affairs & Dance Society • Graphic Era Deemed University"
      ]
    );
  }

  // Seed Bhimtal Upcoming & Flagship Events
  const additionalEvents = [
    {
      title: "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
      description: "The most anticipated national winter hackathon in the snow-touched hills of Bhimtal! 36 hours of non-stop adrenaline building AI agents, Web3 protocols, Mountain IoT solutions, and Cybersecurity defenses. Grand prize pool ₹1,50,000+, internship opportunities & exclusive Spider-Hacker swags. Official date revealing soon — Pre-registration & Early Bird Access is live for Jan-Feb 2027!",
      category: "Technical",
      venue: "Turing Computing Arena & Open Lake Hub, GEHU Bhimtal",
      campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
      image_url: "/assets/events/graphite2026.jpg",
      event_date: "2027-02-20",
      event_time: "10:00 AM",
      organizer_name: "Department of CSE & Spidey Dev-Club Bhimtal",
      date_tba: 1,
      display_date: "Date Revealing Soon (TBA) ❄️",
      registration_window: "Jan 15, 2027 – Feb 20, 2027",
      registration_status: "Early Bird & Pre-Registration Active",
      badge_text: "❄️ DATE TO BE ANNOUNCED // REVEALING SOON",
      highlight_tag: "HACKATHON • JAN-FEB REGISTRATION"
    },
    {
      title: "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
      description: "Explore the infinite cosmos from Bhimtal's high-altitude observatory (4494 ft)! Featuring deep-sky telescope stargazing, ISRO space-tech guest lectures, CubeSat & satellite telemetry workshop, planetary AI hack sprint, and high-altitude model rocketry. Expected in November 2026 — REGISTRATIONS ARE LIVE! Strictly closing on 5th November 2026 due to limited telescope time slots.",
      category: "Technical",
      venue: "Himalayan Ridge Observatory & APJ Abdul Kalam Arena, GEHU Bhimtal",
      campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
      image_url: "/assets/leadership/bhimtal_aerial.jpg",
      event_date: "2026-11-20",
      event_time: "06:00 PM",
      organizer_name: "Astronomy & Deep Space Guild GEHU Bhimtal",
      registration_deadline: "2026-11-05",
      registration_status: "LIVE NOW — CLOSING 5TH NOV 2026",
      badge_text: "🚨 REGISTRATION CLOSES 5 NOV",
      highlight_tag: "SPACE-TECH • CLOSING NOV 5"
    },
    {
      title: "⚡ Infotsav '26: Annual Flagship Technical Fest",
      description: "Graphic Era Hill University Bhimtal's grandest annual technical festival! Featuring Robowars, Line-Follower Bots, Drone Obstacle Racing, 24-hr Speed Web-Dev Sprint, Bug-Bounty & CTF, and Hardware IoT Expo.",
      category: "Technical",
      venue: "Turing Computing Block & APJ Hall, GEHU Bhimtal",
      campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
      image_url: "/assets/campuses/bhimtal.png",
      event_date: "2026-11-12",
      event_time: "09:30 AM",
      organizer_name: "Infotsav Technical Council Bhimtal",
      registration_status: "Registration Open",
      highlight_tag: "TECH FEST '26"
    },
    {
      title: "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
      description: "The ultimate inter-departmental athletic extravaganza! Featuring Football Championship (11v11), Box Cricket League, Badminton singles/doubles, Volleyball, Table Tennis, and 100m alpine sprint.",
      category: "Sports",
      venue: "Main Oval Ground & Sports Complex, GEHU Bhimtal",
      campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
      image_url: "/assets/campuses/bhimtal.png",
      event_date: "2026-11-08",
      event_time: "08:00 AM",
      organizer_name: "Directorate of Sports & Physical Education Bhimtal",
      registration_status: "Team Entries Open",
      highlight_tag: "SPORTS MEET '26"
    },
    {
      title: "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
      description: "Graphic Era's landmark annual cultural fest hits Bhimtal! Star-studded Celebrity Concert Night, Battle of the Rock Bands, Inter-College Dance Battles, Multiverse Fashion Walk, and mountain food streets.",
      category: "Cultural",
      venue: "Central Amphitheater & Open Lake Arena, GEHU Bhimtal",
      campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
      image_url: "/assets/leadership/bhimtal_amphi.jpg",
      event_date: "2026-11-28",
      event_time: "05:00 PM",
      organizer_name: "Central Fest Directorate & SAC Bhimtal",
      registration_status: "All-Access VIP Passes Live",
      highlight_tag: "MEGA CULTURAL FEST"
    },
    {
      title: "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
      description: "A celebration of Himalayan heritage, dramatic arts, and creative expression! Features Nukkad Natak, Traditional Chholiya folk dance, Poetry Slam, Live Canvas Painting, and Digital Photography.",
      category: "Cultural",
      venue: "Rabindranath Tagore Auditorium, GEHU Bhimtal",
      campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
      image_url: "/assets/campuses/bhimtal.png",
      event_date: "2026-12-05",
      event_time: "11:00 AM",
      organizer_name: "Kala-Kriti Guild & Literary Society Bhimtal",
      registration_status: "Auditions & Registration Open",
      highlight_tag: "CULTURAL ACTIVITY"
    },
    {
      title: "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
      description: "An innovative blend of adventure, technology, and environmental conservation! Experience FPV drone flight obstacle courses, high-altitude aerial photography, environmental IoT sensors, and lake ecosystem preservation.",
      category: "Workshop",
      venue: "Bhimtal High Ridge & Eco-Innovation Center, GEHU Bhimtal",
      campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
      image_url: "/assets/leadership/bhimtal_aerial.jpg",
      event_date: "2026-12-18",
      event_time: "09:00 AM",
      organizer_name: "Aero-Spidey Club & Eco-Tech Guild",
      registration_status: "Workshop Seats Open",
      highlight_tag: "WORKSHOP & ACTIVITY"
    }
  ];

  for (const ev of additionalEvents) {
    const existing = db.exec(`SELECT id FROM events WHERE title = '${ev.title.replace(/'/g, "''")}'`);
    if (existing.length === 0 || existing[0].values.length === 0) {
      db.run(`
        INSERT INTO events (title, description, category, venue, campus, image_url, event_date, event_time, organizer_id, organizer_name, status, date_tba, display_date, registration_window, registration_deadline, registration_status, badge_text, highlight_tag)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'approved', ?, ?, ?, ?, ?, ?, ?)
      `, [
        ev.title,
        ev.description,
        ev.category,
        ev.venue,
        ev.campus,
        ev.image_url,
        ev.event_date,
        ev.event_time,
        orgId,
        ev.organizer_name,
        ev.date_tba || 0,
        ev.display_date || null,
        ev.registration_window || null,
        ev.registration_deadline || null,
        ev.registration_status || null,
        ev.badge_text || null,
        ev.highlight_tag || null
      ]);
    }
  }


  // Seed sample event registrations if table is empty
  const regsCountRes = db.exec("SELECT COUNT(*) FROM event_registrations");
  const regCount = regsCountRes[0]?.values[0]?.[0] || 0;
  if (regCount === 0) {
    const sampleRegs = [
      {
        event_id: 13,
        user_id: 2,
        name: 'Ujjwal Chaudhary',
        email: 'ujjwalchaudhary2007@gmail.com',
        phone: '+91 98765 89210',
        degree: 'B.Tech CSE - 3rd Year',
        roll: 'GEHU-2024-BHM-842',
        campus: 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
        ticket: 'HTW-2027-BHM-4821',
        team: 'Spider-Hackers Bhimtal',
        team_size: '4',
        track: 'AI Agents & GenAI Systems',
        github: 'https://github.com/ujjwalchaudharyyy'
      },
      {
        event_id: 13,
        user_id: 1,
        name: 'Rohit Joshi',
        email: 'rohit.gehu.bhimtal@gmail.com',
        phone: '+91 98234 56789',
        degree: 'B.Tech CSE (AI & ML) - 3rd Year',
        roll: 'GEHU-2024-BHM-714',
        campus: 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
        ticket: 'HTW-2027-BHM-3190',
        team: 'Kumaon Code Raiders',
        team_size: '3',
        track: 'Autonomous Mountain IoT',
        github: 'https://github.com/rohit-gehu'
      },
      {
        event_id: 14,
        user_id: 3,
        name: 'Sumit Sanwal',
        email: 'sumitsanwal8132@gmail.com',
        phone: '+91 99123 45678',
        degree: 'B.Tech CSE - 3rd Year',
        roll: 'GEHU-2024-BHM-512',
        campus: 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
        ticket: 'ASTRO-26-BHM-1904',
        team: 'Solo Stargazer',
        team_size: '1',
        track: 'Deep-Sky Telescope Stargazing & Astrophotography',
        github: null
      },
      {
        event_id: 14,
        user_id: 1,
        name: 'Ananya Sharma',
        email: 'ananya.sharma.astro@gmail.com',
        phone: '+91 98456 78912',
        degree: 'B.Tech Aerospace - 3rd Year',
        roll: 'GEHU-2024-BHM-321',
        campus: 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
        ticket: 'ASTRO-26-BHM-7412',
        team: 'Cosmic Explorers',
        team_size: '3',
        track: 'Planetary AI Hack Sprint & CubeSat Telemetry',
        github: 'https://github.com/ananya-astro'
      },
      {
        event_id: 15,
        user_id: 1,
        name: 'Aman Rawat',
        email: 'aman.rawat.robo@gmail.com',
        phone: '+91 98987 12345',
        degree: 'B.Tech Robotics - 3rd Year',
        roll: 'GEHU-2024-BHM-188',
        campus: 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
        ticket: 'TECHFEST-BHM-9201',
        team: 'Iron Spiders Combat Squad',
        team_size: '4',
        track: 'Robowars (Heavyweight Combat Arena)',
        github: 'https://github.com/aman-robowars'
      },
      {
        event_id: 16,
        user_id: 1,
        name: 'Rahul Mehra',
        email: 'rahul.mehra.fc@gmail.com',
        phone: '+91 99887 76655',
        degree: 'B.Tech Civil - 3rd Year',
        roll: 'GEHU-2024-BHM-601',
        campus: 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
        ticket: 'SPARDHA-BHM-6420',
        team: 'Bhimtal Strikers FC (11v11)',
        team_size: '11',
        track: 'Football Championship (11v11)',
        github: null
      },
      {
        event_id: 17,
        user_id: 1,
        name: 'Harshit Joshi',
        email: 'harshit.joshi.grafest@gmail.com',
        phone: '+91 98334 45566',
        degree: 'B.Tech CSE - 3rd Year',
        roll: 'GEHU-2024-BHM-811',
        campus: 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
        ticket: 'GRAFEST-BHM-7788',
        team: 'Solo VIP Entry',
        team_size: '1',
        track: 'All-Access Student VIP Concert Pass',
        github: null
      }
    ];

    for (const r of sampleRegs) {
      db.run(`
        INSERT INTO event_registrations (event_id, user_id, student_name, student_email, phone, degree, roll_no, campus, ticket_code, team_name, team_size, track_info, github_link)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `, [
        r.event_id, r.user_id, r.name, r.email, r.phone, r.degree, r.roll, r.campus, r.ticket, r.team, r.team_size, r.track, r.github
      ]);
    }
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
