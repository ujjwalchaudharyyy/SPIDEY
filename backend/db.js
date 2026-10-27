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
    "ALTER TABLE events ADD COLUMN highlight_tag TEXT",
    "ALTER TABLE events ADD COLUMN overview TEXT",
    "ALTER TABLE events ADD COLUMN highlights TEXT",
    "ALTER TABLE events ADD COLUMN highlights_title TEXT",
    "ALTER TABLE events ADD COLUMN closing_message TEXT"
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

  // Verified Passes Table (High Security Public QR Verification & Attendance)
  db.run(
    CREATE TABLE IF NOT EXISTS verified_passes (
      ticket_code TEXT PRIMARY KEY,
      event_id INTEGER,
      event_title TEXT,
      event_venue TEXT,
      event_date TEXT,
      event_time TEXT,
      event_campus TEXT,
      student_name TEXT NOT NULL,
      student_email TEXT NOT NULL,
      phone TEXT,
      roll_no TEXT,
      campus TEXT,
      degree TEXT,
      team_name TEXT,
      role_in_team TEXT,
      track_info TEXT,
      photo_url TEXT,
      attendance_status TEXT DEFAULT 'REGISTERED & VERIFIED',
      checkin_time TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  );

  // Admin user
  const adminRes = db.exec("SELECT id FROM users WHERE email = 'admin@campus.edu'");
  if (adminRes.length === 0) {
    const hashed = bcrypt.hashSync('admin123', 10);
    db.run("INSERT INTO users (name, email, password, role, campus) VALUES (?, ?, ?, ?, ?)",
      ['Peter Parker (Head Admin)', 'admin@campus.edu', hashed, 'admin', 'GRAPHIC ERA HILL UNIVERSITY DEHRADUN']);
  }

  // Super Admin (Ujjwal)
  const ujjwalRes = db.exec("SELECT id FROM users WHERE email = 'ujjwalchaudhary2007@gmail.com'");
  if (ujjwalRes.length === 0) {
    const hashedUjjwal = bcrypt.hashSync('ujjwal123', 10);
    db.run("INSERT INTO users (name, email, password, role, campus, degree) VALUES (?, ?, ?, ?, ?, ?)",
      ['Ujjwal Chaudhary', 'ujjwalchaudhary2007@gmail.com', hashedUjjwal, 'admin', 'ALL', 'B.Tech CSE - 3rd Year (Super Admin)']);
  }

  // 4 Campus Admins
  const campusAdmins = [
    { name: 'Admin Bhimtal', email: 'admin.bhimtal@gehu.ac.in', pass: 'bhimtal123', campus: 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL' },
    { name: 'Admin Haldwani', email: 'admin.haldwani@gehu.ac.in', pass: 'haldwani123', campus: 'GRAPHIC ERA HILL UNIVERSITY HALDWANI' },
    { name: 'Admin Dehradun', email: 'admin.dehradun@gehu.ac.in', pass: 'dehradun123', campus: 'GRAPHIC ERA HILL UNIVERSITY DEHRADUN' },
    { name: 'Admin GEU Deemed', email: 'admin.deemed@gehu.ac.in', pass: 'deemed123', campus: 'GRAPHIC ERA DEEMED UNIVERSITY' }
  ];
  for (const cadm of campusAdmins) {
    const cres = db.exec("SELECT id FROM users WHERE email = '" + cadm.email + "'");
    if (cres.length === 0) {
      const chash = bcrypt.hashSync(cadm.pass, 10);
      db.run("INSERT INTO users (name, email, password, role, campus, degree) VALUES (?, ?, ?, ?, ?, ?)",
        [cadm.name, cadm.email, chash, 'admin', cadm.campus, 'Campus Administrator']);
    }
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
        "Hackathon",
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
      image_url: "/assets/events/aws_ideathon/aws_ideathon_team.jpg",
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
      image_url: "/assets/leadership/bhimtal_aerial.jpg",
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
      image_url: "/assets/events/foundation_day/foundation_4_cultural_dance.jpg",
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
    },
    {
      title: "Smart India Hackathon (SIH)",
      description: "Memories and highlights from Smart India Hackathon (SIH) at Graphic Era Hill University, Dehradun Campus. A nationwide collaborative initiative to provide students with a platform to solve pressing problems of society, ministries, and industries.",
      overview: "Smart India Hackathon (SIH) is a premier nationwide initiative by the Ministry of Education's Innovation Cell (MIC) and AICTE. Graphic Era Hill University, Dehradun served as a prestigious nodal center, hosting 30+ finalist teams from across India for an intense 36-hour non-stop digital product development marathon.",
      highlights: JSON.stringify([
        "Grand Inauguration & Ribbon-Cutting Ceremony with distinguished leadership, guest dignitaries, and AICTE representatives.",
        "Live Nationwide Keynote Interaction with Hon'ble Prime Minister Narendra Modi and Union Education Minister.",
        "36-Hour Non-Stop Coding Sprint tackling mission-critical real-world problem statements.",
        "Rigorous Mentoring & Technical Jury Evaluations by industry veterans and academic experts.",
        "Final Prototype Showcase, Pitch Decks, and Scalable Cloud Feasibility Demonstrations."
      ]),
      closing_message: "Empowering young Indian minds to innovate, build scalable tech, and create transformative solutions for the nation.",
      category: "Hackathon",
      venue: "Graphic Era Hill University, Dehradun Campus",
      campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
      image_url: "/assets/events/sih/sih_inauguration.jpg",
      gallery: JSON.stringify([
        "/assets/events/sih/sih_inauguration.jpg",
        "/assets/events/sih/sih_interaction.jpg",
        "/assets/events/sih/sih_coding.jpg",
        "/assets/events/sih/sih_presentation.jpg",
        "/assets/events/sih/sih_feasibility.jpg"
      ]),
      photos: JSON.stringify([
        {
          url: "/assets/events/sih/sih_inauguration.jpg",
          title: "Grand Inauguration & Ribbon-Cutting Ceremony",
          caption: "Dignitaries, university leadership, and organizing faculty inaugurating Smart India Hackathon at Graphic Era."
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
      ]),
      event_date: "2025-12-09",
      event_time: "09:00 AM",
      organizer_name: "Ministry of Education & MIC • GEHU Dehradun"
    },
    {
      title: "13th Foundation Day Celebration",
      description: "Commemorating 13 years of academic brilliance, visionary leadership, and holistic student empowerment at Graphic Era Hill University, Dehradun Campus.",
      overview: "Graphic Era Hill University celebrated its 13th Foundation Day with immense pride, pomp, and grandeur at the Dehradun Campus. The milestone celebration commemorated 13 transformative years of academic excellence, world-class research, and community leadership. The campus was adorned with festive decorations, celebratory banners, and vibrant floral arrangements, bringing together leadership, faculty members, alumni, and thousands of students in an inspiring spirit of oneness.",
      highlights: JSON.stringify([
        "Visionary Leadership Address: Keynote speeches on the university's growth from inception to premier Himalayan higher education hub.",
        "Grand Cake-Cutting Ceremony: Leadership, faculty deans, and student representatives uniting around the 13th Foundation Day celebratory cake.",
        "Folk & Classical Cultural Performances: Electrifying traditional Himalayan dance drama and classical choreographies celebrating cultural heritage.",
        "Felicitation & Bouquet Ceremony: Honoring distinguished faculty, research scholars, and exceptional student achievers.",
        "Pledge of Excellence: Assembly of faculty, staff, and students reaffirming dedication to research, innovation, and ethical leadership."
      ]),
      closing_message: "Honoring our roots, celebrating our achievements, and inspiring future generations towards greater heights of knowledge, innovation, and unity.",
      category: "Cultural Fest",
      venue: "Graphic Era Hill University, Dehradun Campus",
      campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
      image_url: "/assets/events/foundation_day/foundation_1_speech.jpg",
      gallery: JSON.stringify([
        "/assets/events/foundation_day/foundation_1_speech.jpg",
        "/assets/events/foundation_day/foundation_2_address.jpg",
        "/assets/events/foundation_day/foundation_3_gathering.jpg",
        "/assets/events/foundation_day/foundation_4_cultural_dance.jpg",
        "/assets/events/foundation_day/foundation_5_bouquet_presentation.jpg"
      ]),
      photos: JSON.stringify([
        {
          url: "/assets/events/foundation_day/foundation_1_speech.jpg",
          title: "Keynote Address & Foundation Day Ceremonial Cake",
          caption: "University representative speaking at the podium with the grand 13th Foundation Day celebration cake and festive decorations in the foreground."
        },
        {
          url: "/assets/events/foundation_day/foundation_2_address.jpg",
          title: "Faculty Address to Assembly",
          caption: "Distinguished faculty member addressing the attentive audience of students, faculty, and invited guests from the university podium."
        },
        {
          url: "/assets/events/foundation_day/foundation_3_gathering.jpg",
          title: "Grand Gathering & Cake-Cutting Celebration",
          caption: "A large gathering of faculty leadership, teachers, and student attendees celebrating together around the ceremonial Foundation Day cake."
        },
        {
          url: "/assets/events/foundation_day/foundation_4_cultural_dance.jpg",
          title: "Traditional Folk Dance Performance",
          caption: "Students performing a vibrant traditional cultural folk dance in authentic regional attire on stage with the 13th Foundation Day backdrop."
        },
        {
          url: "/assets/events/foundation_day/foundation_5_bouquet_presentation.jpg",
          title: "Bouquet Felicitation Ceremony",
          caption: "University leadership and organizers presenting ceremonial bouquets to guests and distinguished achievers during the felicitation ceremony."
        }
      ]),
      event_date: "2024-04-28",
      event_time: "10:00 AM",
      organizer_name: "Office of Student Affairs & Cultural Council • GEHU Dehradun"
    },
    // --- UPCOMING EVENTS: GEHU HALDWANI ---
    {
      title: "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
      description: "Annual high-stakes robotics challenge featuring obstacle navigation, autonomous line-trackers, and combat battle-bots engineered by tech enthusiasts across Uttarakhand.",
      category: "Technical",
      venue: "Robotics & AI Innovation Hub, GEHU Haldwani",
      campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
      image_url: "/assets/events/sih/sih_presentation.jpg",
      event_date: "2026-11-15",
      event_time: "10:00 AM",
      organizer_name: "Robotics & IoT Innovation Club • GEHU Haldwani",
      highlight_tag: "ROBOTICS CHALLENGE"
    },
    {
      title: "🎨 Terai Youth Conclave & Literary Arts Gala '26",
      description: "A grand confluence of creative writing, slam poetry, bilingual youth debates, Nukkad Natak street play, and live art exhibitions celebrating Kumaon's rising creators.",
      category: "Cultural",
      venue: "Main University Auditorium, GEHU Haldwani",
      campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
      image_url: "/assets/leadership/haldwani_lawn.png",
      event_date: "2026-11-26",
      event_time: "11:30 AM",
      organizer_name: "Literary & Cultural Society • GEHU Haldwani",
      highlight_tag: "LITERARY GALA"
    },
    {
      title: "⚽ Kumaon Premier Inter-College Sports Carnival",
      description: "High-octane inter-departmental athletic showdown featuring 7v7 football championship, box cricket league, badminton smash tournament, and volleyball finals.",
      category: "Sports",
      venue: "Sports Pavilion & Athletic Arena, GEHU Haldwani",
      campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
      image_url: "/assets/leadership/haldwani_path.png",
      event_date: "2026-12-04",
      event_time: "08:30 AM",
      organizer_name: "Directorate of Physical Education • GEHU Haldwani",
      highlight_tag: "SPORTS CARNIVAL"
    },
    // --- UPCOMING EVENTS: GEHU DEHRADUN ---
    {
      title: "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
      description: "30-hour national Capture The Flag (CTF) tournament, zero-day exploit defenses, cloud penetration testing drills, and cybersecurity keynotes by top industry leaders.",
      category: "Technical",
      venue: "CS & IT Supercomputing Arena, GEHU Dehradun",
      campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
      image_url: "/assets/events/sih/sih_coding.jpg",
      event_date: "2026-11-18",
      event_time: "09:30 AM",
      organizer_name: "Cyber Security & Bug Bounty Cell • GEHU Dehradun",
      highlight_tag: "CYBER CTF '26"
    },
    {
      title: "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
      description: "An evening of dramatic stage acts, acoustic indie band face-offs, fusion instrumental jams, and contemporary solo choreography by students across departments.",
      category: "Cultural",
      venue: "KP Nautiyal Memorial Auditorium, GEHU Dehradun",
      campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
      image_url: "/assets/events/student_grafest/student_grafest_1.jpg",
      event_date: "2026-12-02",
      event_time: "05:30 PM",
      organizer_name: "Cultural Council & Drama Guild • GEHU Dehradun",
      highlight_tag: "THEATRE & MUSIC"
    },
    {
      title: "🏸 Spardha Inter-University Badminton & Table Tennis Open",
      description: "State-level indoor athletic tournament featuring men's & women's singles/doubles badminton, lightning table tennis showdowns, and rapid blitz chess championships.",
      category: "Sports",
      venue: "Indoor Sports Complex, Clement Town Campus",
      campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
      image_url: "/assets/leadership/dehradun_foundation.jpg",
      event_date: "2026-12-12",
      event_time: "09:00 AM",
      organizer_name: "Department of Sports & Athletics • GEHU Dehradun",
      highlight_tag: "INDOOR OPEN"
    },
    // --- UPCOMING EVENTS: GRAPHIC ERA DEEMED UNIVERSITY ---
    {
      title: "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
      description: "Flagship national technology symposium bringing global AI researchers, deep-tech startup founders, and student builders together for AI agent demos, patent expos, and seed pitches.",
      category: "Technical",
      venue: "Convention Centre & Multiverse Research Arena, GEU Deemed",
      campus: "GRAPHIC ERA DEEMED UNIVERSITY",
      image_url: "/assets/events/aws_ideathon/aws_ideathon_stall_interaction.jpg",
      event_date: "2026-11-16",
      event_time: "10:00 AM",
      organizer_name: "Center for Artificial Intelligence & DeepTech • GEU Deemed",
      highlight_tag: "AI & DEEPTECH"
    },
    {
      title: "🏆 All-India Inter-University Cricket Championship 2026",
      description: "T20 cricket championship featuring 16 top university squads battling for the prestigious Graphic Era Chancellor's Trophy under professional floodlights with live streaming.",
      category: "Sports",
      venue: "Main University Stadium, Graphic Era Deemed Campus",
      campus: "GRAPHIC ERA DEEMED UNIVERSITY",
      image_url: "/assets/leadership/deemed_flag.png",
      event_date: "2026-11-22",
      event_time: "08:00 AM",
      organizer_name: "Sports Council • Graphic Era Deemed University",
      highlight_tag: "CHANCELLOR'S CUP"
    },
    {
      title: "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
      description: "Grand cultural music evening with soulful Sufi melodies, high-voltage rock fusion bands, student choir showcases, and food street stalls under the starry Dehradun skies.",
      category: "Cultural",
      venue: "Open Air Amphitheatre, Bell Road Campus, GEU Deemed",
      campus: "GRAPHIC ERA DEEMED UNIVERSITY",
      image_url: "/assets/events/grafest/grafest_1.jpg",
      event_date: "2026-12-10",
      event_time: "06:00 PM",
      organizer_name: "Music & Cultural Affairs Society • GEU Deemed",
      highlight_tag: "MUSIC NIGHT"
    },
    {
      title: "Student GRAFEST 2026",
      description: "Student GRAFEST 2026 at Graphic Era Hill University, Dehradun Campus, was a vibrant celebration of student talent, music, dance, creativity, and campus life. The festival brought together students to enjoy live performances, cultural showcases, music, and memorable moments with friends. From energetic stage performances to beautiful artistic expressions, GRAFEST captures the excitement and spirit of student life.",
      overview: "Student GRAFEST 2026 at Graphic Era Hill University, Dehradun Campus, was a vibrant celebration of student talent, music, dance, creativity, and campus life. The festival brought together students to enjoy live performances, cultural showcases, music, and memorable moments with friends. From energetic stage performances to beautiful artistic expressions, GRAFEST captures the excitement and spirit of student life.",
      highlights_title: "FESTIVAL HIGHLIGHTS",
      highlights: JSON.stringify([
        "Live vocal and instrumental performances on the main festival stage",
        "Classical, folk, and contemporary solo dance showcases",
        "Colorful Student GRAFEST interactive photo backdrops capturing lasting campus memories",
        "Diverse showcase of artistic talent, cultural traditions, and student creativity",
        "Musical sets featuring acoustic guitarists and student performers"
      ]),
      closing_message: "Celebrating student creativity, music, culture, and campus memories that define the vibrant spirit of Graphic Era.",
      category: "Cultural Fest",
      venue: "Graphic Era Hill University, Dehradun Campus",
      campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
      image_url: "/assets/events/student_grafest/student_grafest_1.jpg",
      gallery: JSON.stringify([
        "/assets/events/student_grafest/student_grafest_1.jpg",
        "/assets/events/student_grafest/student_grafest_2.jpg",
        "/assets/events/student_grafest/student_grafest_3.jpg",
        "/assets/events/student_grafest/student_grafest_4.jpg",
        "/assets/events/student_grafest/student_grafest_5.jpg"
      ]),
      photos: JSON.stringify([
        {
          url: "/assets/events/student_grafest/student_grafest_1.jpg",
          title: "Photo Backdrop Memories with Friends",
          caption: "Students posing together at the colorful Student GRAFEST photo backdrop, capturing memories with friends."
        },
        {
          url: "/assets/events/student_grafest/student_grafest_2.jpg",
          title: "Live Stage Vocal Performance",
          caption: "A live stage performance featuring a vocalist under vibrant festival lighting, with the GRAFEST stage visible below."
        },
        {
          url: "/assets/events/student_grafest/student_grafest_3.jpg",
          title: "Solo Dance Cultural Expression",
          caption: "A solo dance performance on stage, showcasing expression, movement, and cultural talent."
        },
        {
          url: "/assets/events/student_grafest/student_grafest_4.jpg",
          title: "Stage Performances & Acoustic Sets",
          caption: "A series of stage performances featuring dance, music, and a live singer with a guitar."
        },
        {
          url: "/assets/events/student_grafest/student_grafest_5.jpg",
          title: "Traditional Dance & Solo Singing Highlights",
          caption: "More highlights from the festival, including a dynamic traditional-style dance performance and a solo singing performance."
        }
      ]),
      event_date: "2026-10-26",
      display_date: "October 26-27, 2026",
      event_time: "05:00 PM",
      organizer_name: "Student Activity Council (SAC) • GEHU Dehradun"
    },
    {
      title: "INNOVATE 1.0 – AWS Ideathon",
      description: "INNOVATE 1.0 was a technology and innovation-focused ideathon organized at Graphic Era Hill University, Bhimtal Campus. The event brought together students passionate about cloud computing, technology, and innovation. It provided an engaging platform for students to explore ideas, interact with fellow innovators, and showcase their interest in building technology-driven solutions.",
      overview: "INNOVATE 1.0 was a technology and innovation-focused ideathon organized at Graphic Era Hill University, Bhimtal Campus. The event brought together students passionate about cloud computing, technology, and innovation. It provided an engaging platform for students to explore ideas, interact with fellow innovators, and showcase their interest in building technology-driven solutions.",
      highlights_title: "IDEATHON & CLOUD HIGHLIGHTS",
      highlights: JSON.stringify([
        "Hands-on learning and innovation challenge for bright minds passionate about cloud and technology",
        "Organized jointly by AWS Cloud Club (GEHU BTL) and IEEE Student Branch, GEHU Bhimtal",
        "Interactive AWS Cloud Club stall with live guidance, registration support, and technology discussions",
        "Active student participation exploring cloud computing, architecture, and technology-driven ideas",
        "Collaborative platform connecting aspiring innovators and student developers across campus"
      ]),
      closing_message: "Empowering bright student minds to innovate, build, and scale transformative technology solutions in the Himalayan hills of Bhimtal.",
      category: "Innovation & AI",
      venue: "Graphic Era Hill University, Bhimtal Campus",
      campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
      image_url: "/assets/events/aws_ideathon/aws_ideathon_poster.jpg",
      gallery: JSON.stringify([
        "/assets/events/aws_ideathon/aws_ideathon_poster.jpg",
        "/assets/events/aws_ideathon/aws_ideathon_bhimtal_team.jpg",
        "/assets/events/aws_ideathon/aws_ideathon_team.jpg",
        "/assets/events/aws_ideathon/aws_ideathon_venue_crowd.jpg",
        "/assets/events/aws_ideathon/aws_ideathon_stall_interaction.jpg",
        "/assets/events/aws_ideathon/aws_ideathon_discussions.jpg"
      ]),
      photos: JSON.stringify([
        {
          url: "/assets/events/aws_ideathon/aws_ideathon_poster.jpg",
          title: "Official INNOVATE 1.0 Event Poster",
          caption: "The official INNOVATE 1.0 event poster featuring Graphic Era Hill University Bhimtal Campus against the Himalayan hills, AWS Cloud Club GEHU BTL, and IEEE Student Branch."
        },
        {
          url: "/assets/events/aws_ideathon/aws_ideathon_bhimtal_team.jpg",
          title: "Organizing Team Under GEHU Bhimtal Campus Emblem",
          caption: "AWS Cloud Club and IEEE Student Branch student coordinators gathered under the Graphic Era Hill University emblem with the official AWS branded desk."
        },
        {
          url: "/assets/events/aws_ideathon/aws_ideathon_team.jpg",
          title: "Organizing Team & Student Coordinators",
          caption: "Student coordinators and organizing team from AWS Cloud Club and IEEE Student Branch gathered behind the registration desk with the INNOVATE 1.0 display."
        },
        {
          url: "/assets/events/aws_ideathon/aws_ideathon_venue_crowd.jpg",
          title: "Campus Venue & Student Gathering",
          caption: "High-angle view of the bustling campus venue showing enthusiastic students gathered around the AWS Cloud Club information and registration desk."
        },
        {
          url: "/assets/events/aws_ideathon/aws_ideathon_stall_interaction.jpg",
          title: "Interactive AWS Cloud Club Stall",
          caption: "Students interacting closely at the AWS Cloud Club stall, exploring ideathon tracks, and scanning registration details on mobile devices."
        },
        {
          url: "/assets/events/aws_ideathon/aws_ideathon_discussions.jpg",
          title: "Event Discussions & Tech Exchange",
          caption: "Students and organizers engaged in active discussions about cloud computing ideas and event participation with the scenic campus courtyard in view."
        }
      ]),
      event_date: "2026-08-19",
      display_date: "August 19, 2026",
      event_time: "10:00 AM",
      organizer_name: "AWS Cloud Club (GEHU BTL) & IEEE Student Branch, GEHU Bhimtal",
      highlight_tag: "AWS IDEATHON • BHIMTAL"
    },
    {
      title: "Ganesh Chaturthi Celebration",
      description: "Ganesh Chaturthi at Graphic Era Hill University, Bhimtal Campus, was an opportunity for the campus community to come together and celebrate the spirit of devotion, culture, and togetherness. The celebration highlighted the beauty of Indian traditions and created meaningful campus memories through festive moments and shared participation.",
      overview: "Ganesh Chaturthi at Graphic Era Hill University, Bhimtal Campus, was an opportunity for the campus community to come together and celebrate the spirit of devotion, culture, and togetherness. The celebration highlighted the beauty of Indian traditions and created meaningful campus memories through festive moments and shared participation.",
      highlights_title: "CELEBRATION HIGHLIGHTS",
      highlights: JSON.stringify([
        "Traditional ceremonial sthapana and darshan of the exquisitely adorned Lord Ganesha idol",
        "Active participation by university leadership, faculty members, staff, and students in festive ethnic attire",
        "Devotional campus procession with rhythmic clapping, singing, and joyous chanting through the scenic hill campus",
        "Sacred aarti and prayer offerings in the temple pavilion amidst brass bells and floral torans",
        "Spirit of devotion, cultural unity, and shared blessings uniting the entire campus family"
      ]),
      closing_message: "Celebrating Indian culture, devotional traditions, and the enduring spirit of togetherness and joy across Graphic Era Hill University, Bhimtal.",
      category: "Cultural Fest",
      venue: "Graphic Era Hill University, Bhimtal Campus",
      campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
      image_url: "/assets/events/ganesh_chaturthi/ganesh_chaturthi_1.jpg",
      gallery: JSON.stringify([
        "/assets/events/ganesh_chaturthi/ganesh_chaturthi_1.jpg",
        "/assets/events/ganesh_chaturthi/ganesh_chaturthi_2.jpg",
        "/assets/events/ganesh_chaturthi/ganesh_chaturthi_3.jpg",
        "/assets/events/ganesh_chaturthi/ganesh_chaturthi_4.jpg",
        "/assets/events/ganesh_chaturthi/ganesh_chaturthi_5.jpg"
      ]),
      photos: JSON.stringify([
        {
          url: "/assets/events/ganesh_chaturthi/ganesh_chaturthi_1.jpg",
          title: "Consecrated Idol & University Faculty Gathering",
          caption: "University faculty and staff members holding the beautifully adorned idol of Lord Ganesha on a ceremonial chowki during the auspicious festivities."
        },
        {
          url: "/assets/events/ganesh_chaturthi/ganesh_chaturthi_2.jpg",
          title: "Adorned Lord Ganesha Idol & Devotees",
          caption: "Close-up of the intricately crafted Lord Ganesha idol adorned in yellow and red silk garments, fresh marigold garlands, and an ornate mukut."
        },
        {
          url: "/assets/events/ganesh_chaturthi/ganesh_chaturthi_3.jpg",
          title: "Joyous Devotional Campus Procession",
          caption: "Students and faculty joyfully clapping, singing bhajans, and raising hands in devotion during the vibrant campus procession."
        },
        {
          url: "/assets/events/ganesh_chaturthi/ganesh_chaturthi_4.jpg",
          title: "Temple Darshan & Aarti with Students and Faculty",
          caption: "Faculty members and students offering prayers with folded hands before Lord Ganesha inside the temple pavilion beneath sacred brass bells."
        },
        {
          url: "/assets/events/ganesh_chaturthi/ganesh_chaturthi_5.jpg",
          title: "Grand Festive Procession Across Campus",
          caption: "A large gathering of university students and faculty dancing and celebrating together along the hill campus pathway amidst pine trees."
        }
      ]),
      event_date: "2026-09-14",
      display_date: "September 14, 2026",
      event_time: "10:30 AM",
      organizer_name: "Cultural Council & Campus Community • GEHU Bhimtal",
      highlight_tag: "GANESH UTSAV • BHIMTAL"
    },
    {
      title: "PRAYUKTI 2.0 – Tech Fest 2026",
      description: "PRAYUKTI 2.0 at Graphic Era Hill University, Bhimtal Campus, was a grand technical and cultural festival celebrating student innovation, robotics, creativity, and talent under the theme 'Tech Today, Transform Tomorrow'. The festival brought together students from across departments to compete in high-octane Robowars, RC vehicle racing, strategic chess championships, classical musical performances, and vibrant cultural showcases.",
      overview: "PRAYUKTI 2.0 was Graphic Era Hill University Bhimtal Campus's signature annual tech festival, uniting brilliant student minds under the inspiring motto 'Tech Today, Transform Tomorrow'. Organized by the IEEE Student Branch and the university's technical societies, the festival featured high-adrenaline engineering competitions, strategic mental showdowns, traditional performing arts, and a bustling campus carnival.",
      highlights_title: "FESTIVAL & TECH HIGHLIGHTS",
      highlights: JSON.stringify([
        "High-stakes Robowars battle bots combat and custom remote-controlled RC vehicle track races",
        "Official keynote addresses and festival inauguration on the main outdoor stage under 'Tech Today, Transform Tomorrow'",
        "Strategic chess tournament matchups with digital timers and classical Indian solo Tabla performances",
        "International and regional cultural showcases featuring Nepalese folk presentations and traditional ethnic dance",
        "Creative 'PRAYUKTI 2026 TECH FEST' photo booth with student memories and campus food street carnival"
      ]),
      closing_message: "Empowering student creators to innovate, compete, and celebrate the transformative power of technology, engineering, and culture at Graphic Era Hill University, Bhimtal.",
      category: "Technical Fest",
      venue: "Main Ground & Computing Arena, GEHU Bhimtal",
      campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
      image_url: "/assets/events/prayukti/prayukti_1_keynote_stage.jpg",
      gallery: JSON.stringify([
        "/assets/events/prayukti/prayukti_1_keynote_stage.jpg",
        "/assets/events/prayukti/prayukti_2_robowars_combat.jpg",
        "/assets/events/prayukti/prayukti_3_chess_and_tabla.jpg",
        "/assets/events/prayukti/prayukti_4_cultural_showcase.jpg",
        "/assets/events/prayukti/prayukti_5_photobooth.jpg"
      ]),
      photos: JSON.stringify([
        {
          url: "/assets/events/prayukti/prayukti_1_keynote_stage.jpg",
          title: "Keynote Address & Main Stage Gathering",
          caption: "University dignitaries and faculty addressing the large student assembly on the main stage under the official PRAYUKTI 2.0 banner with campus food stalls."
        },
        {
          url: "/assets/events/prayukti/prayukti_2_robowars_combat.jpg",
          title: "Robowars Combat & RC Vehicle Lineup",
          caption: "Student roboticists lined up with transmitters controlling custom-engineered combat battle bots and RC cars in the arena."
        },
        {
          url: "/assets/events/prayukti/prayukti_3_chess_and_tabla.jpg",
          title: "Strategic Chess Match & Classical Tabla Recital",
          caption: "Students competing in intense chess matches with digital timers alongside captivating solo classical Tabla performances."
        },
        {
          url: "/assets/events/prayukti/prayukti_4_cultural_showcase.jpg",
          title: "Nepalese Folk & Ethnic Cultural Dance Showcase",
          caption: "Students proudly presenting their cultural heritage with the Nepal national flag followed by traditional folk dance in elaborate attire."
        },
        {
          url: "/assets/events/prayukti/prayukti_5_photobooth.jpg",
          title: "PRAYUKTI 2026 Tech Fest Photo Booth",
          caption: "Students capturing festival memories at the creative PRAYUKTI 2026 photo booth decorated with AI, robotics, and gear illustrations."
        }
      ]),
      event_date: "2026-04-22",
      display_date: "April 22-23, 2026",
      event_time: "10:00 AM",
      organizer_name: "IEEE Student Branch & Prayukti Tech Cell • GEHU Bhimtal",
      highlight_tag: "PRAYUKTI 2.0 • BHIMTAL"
    },
    {
      title: "Student Grafest",
      description: "Student Grafest was a vibrant celebration of talent, creativity, music, dance, and student life. The event brought students together to showcase their artistic skills, enjoy live performances, celebrate culture, and create unforgettable campus memories.",
      overview: "Student Grafest at Graphic Era Hill University, Haldwani Campus, was a spectacular celebration uniting students, faculty, and celebrated artists. Featuring dazzling pyrotechnic fireworks, an electrifying live concert, mesmerizing solo vocal recitals, and high-energy dance choreographies, Grafest stands as Haldwani's signature campus festival.",
      highlights_title: "FESTIVAL HIGHLIGHTS",
      highlights: JSON.stringify([
        "Spectacular night sky firework displays and pyrotechnic stage effects illuminating the Haldwani campus",
        "High-voltage live musical concert and soulful vocal performances by renowned artists",
        "Dynamic student dance troupe choreographies and traditional-fusion stage showcases",
        "Thousands of students uniting with flashlight waves creating an electric festival atmosphere",
        "Vibrant celebration of student creativity, music, culture, and unforgettable campus memories"
      ]),
      closing_message: "Celebrating student talent, musical brilliance, and unforgettable campus memories that define the vibrant spirit of Graphic Era Hill University, Haldwani.",
      category: "Cultural Fest / Student Festival",
      venue: "Graphic Era Hill University, Haldwani Campus",
      campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
      image_url: "/assets/events/haldwani_grafest/haldwani_grafest_1.jpg",
      gallery: JSON.stringify([
        "/assets/events/haldwani_grafest/haldwani_grafest_1.jpg",
        "/assets/events/haldwani_grafest/haldwani_grafest_2.jpg",
        "/assets/events/haldwani_grafest/haldwani_grafest_3.jpg",
        "/assets/events/haldwani_grafest/haldwani_grafest_4.jpg",
        "/assets/events/haldwani_grafest/haldwani_grafest_5.jpg"
      ]),
      photos: JSON.stringify([
        {
          url: "/assets/events/haldwani_grafest/haldwani_grafest_1.jpg",
          title: "Main Stage Spectacular & Night Fireworks",
          caption: "Dazzling pyrotechnic fireworks illuminate the night sky over the Haldwani campus main stage as students and faculty gather for the grand festival opening."
        },
        {
          url: "/assets/events/haldwani_grafest/haldwani_grafest_2.jpg",
          title: "Ocean of Flashlights & Crimson Pyrotechnics",
          caption: "Thousands of students creating an electric sea of glowing phone lights amidst bursts of red aerial fireworks during the live musical concert."
        },
        {
          url: "/assets/events/haldwani_grafest/haldwani_grafest_3.jpg",
          title: "Celebrity Live Vocal Performance",
          caption: "Renowned vocalist holding red roses delivering an emotional, high-energy live performance on stage beneath the concert lighting."
        },
        {
          url: "/assets/events/haldwani_grafest/haldwani_grafest_4.jpg",
          title: "Dynamic Student Bollywood Dance Showcase",
          caption: "Student dance crew performing vibrant, synchronized choreography in traditional-fusion costumes, capturing the spirited energy of campus youth."
        },
        {
          url: "/assets/events/haldwani_grafest/haldwani_grafest_5.jpg",
          title: "Grand Stage Finale with Flame Effects",
          caption: "Spectacular concert finale featuring massive vertical flame jets and high-voltage production lighting bringing Grafest to an unforgettable crescendo."
        }
      ]),
      event_date: "2026-10-20",
      display_date: "October 20-21, 2026",
      event_time: "06:00 PM",
      organizer_name: "Student Activity Council (SAC) • GEHU Haldwani",
      highlight_tag: "STUDENT GRAFEST • HALDWANI"
    }
  ];

  for (const ev of additionalEvents) {
    const existing = db.exec(`SELECT id FROM events WHERE title = '${ev.title.replace(/'/g, "''")}'`);
    if (existing.length === 0 || existing[0].values.length === 0) {
      db.run(`
        INSERT INTO events (title, description, category, venue, campus, image_url, photos, gallery, overview, highlights, highlights_title, closing_message, event_date, event_time, organizer_id, organizer_name, status, date_tba, display_date, registration_window, registration_deadline, registration_status, badge_text, highlight_tag)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'approved', ?, ?, ?, ?, ?, ?, ?)
      `, [
        ev.title,
        ev.description,
        ev.category,
        ev.venue,
        ev.campus,
        ev.image_url,
        ev.photos || null,
        ev.gallery || null,
        ev.overview || null,
        ev.highlights || null,
        ev.highlights_title || null,
        ev.closing_message || null,
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
