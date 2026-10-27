export const DEFAULT_CAMPUSES = [
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

export const DEFAULT_EVENTS = [
  // 1. GEHU Bhimtal
  {
    id: 1,
    title: "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    description: "Hands-on drone navigation, obstacle course flying across the Bhimtal lake valley, and live fpv surveillance demo.",
    category: "Technical",
    venue: "Main Oval Ground, GEHU Bhimtal",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    image_url: "/assets/campuses/bhimtal.png",
    event_date: "2026-10-15",
    event_time: "11:00 AM",
    organizer_name: "Aero-Spidey Club Bhimtal",
    rsvp_count: 84,
    status: "approved"
  },
  {
    id: 2,
    title: "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    description: "Welcome to Graphite 2026 — an intense, high-energy 24-hour hackathon designed to challenge the sharpest minds across Graphic Era Campuses! Inspired by the iconic Spider-Man theme, this hackathon pushes developers, designers, and innovators to swing into action, build creative solutions, and solve complex real-world problems under the clock. Featuring 24 Hours Non-Stop Coding & Building (27th Oct – 28th Oct 2026) at an altitude of 4494.75 ft. Exclusively for innovators across Dehradun, Bhimtal, and Haldwani campuses.",
    category: "Technical",
    venue: "Main Campus & Turing Arena (Altitude 4494.75 ft), GEHU Bhimtal",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    image_url: "/assets/events/graphite_live_3.jpg",
    gallery: [
      "/assets/events/graphite_live_3.jpg",
      "/assets/events/graphite_live_1.jpg",
      "/assets/events/graphite_live_2.jpg",
      "/assets/events/graphite_live_4.jpg",
      "/assets/events/graphite_live_5.jpg"
    ],
    live_status: "🔴 Live Hackathon Underway (27-28 Oct 2026)",
    event_date: "2026-10-27",
    event_time: "10:00 AM",
    organizer_name: "@Graphite.xo • Graphic Era Hill University",
    rsvp_count: 328,
    status: "approved"
  },
  {
    id: 3,
    title: "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    description: "36-hour non-stop hackathon building smart campus IoT sensors, edge-AI computer vision, and emergency web beacons.",
    category: "Technical",
    venue: "Turing Computer Block, GEHU Bhimtal",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    image_url: "/assets/events/upcoming/hackathon_code.jpg",
    event_date: "2026-11-14",
    event_time: "09:00 AM",
    organizer_name: "Department of Computer Science & Engineering",
    rsvp_count: 215,
    status: "approved"
  },
  {
    id: 13,
    title: "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    description: "The most anticipated national winter hackathon in the snow-touched hills of Bhimtal! 36 hours of non-stop adrenaline building AI agents, Web3 protocols, Mountain IoT solutions, and Cybersecurity defenses. Grand prize pool ₹1,50,000+, internship opportunities & exclusive Spider-Hacker swags. Official date revealing soon — Pre-registration & Early Bird Access is live for Jan-Feb 2027!",
    category: "Technical",
    venue: "Turing Computing Arena & Open Lake Hub, GEHU Bhimtal",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    image_url: "/assets/events/graphite2026.jpg",
    event_date: "2027-02-20",
    event_time: "10:00 AM",
    organizer_name: "Department of CSE & Spidey Dev-Club Bhimtal",
    rsvp_count: 468,
    status: "approved",
    date_tba: true,
    display_date: "Date Revealing Soon (TBA) ❄️",
    registration_window: "Jan 15, 2027 – Feb 20, 2027",
    registration_status: "Early Bird & Pre-Registration Active",
    badge_text: "❄️ DATE TO BE ANNOUNCED // REVEALING SOON",
    highlight_tag: "HACKATHON • JAN-FEB REGISTRATION"
  },
  {
    id: 14,
    title: "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    description: "Explore the infinite cosmos from Bhimtal's high-altitude observatory (4494 ft)! Featuring deep-sky telescope stargazing, ISRO space-tech guest lectures, CubeSat & satellite telemetry workshop, planetary AI hack sprint, and high-altitude model rocketry. Expected in November 2026 — REGISTRATIONS ARE LIVE! Strictly closing on 5th November 2026 due to limited telescope time slots.",
    category: "Technical",
    venue: "Himalayan Ridge Observatory & APJ Abdul Kalam Arena, GEHU Bhimtal",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    image_url: "/assets/leadership/bhimtal_aerial.jpg",
    event_date: "2026-11-20",
    event_time: "06:00 PM",
    organizer_name: "Astronomy & Deep Space Guild GEHU Bhimtal",
    rsvp_count: 382,
    status: "approved",
    registration_deadline: "2026-11-05",
    registration_status: "LIVE NOW — CLOSING 5TH NOV 2026",
    deadline_badge: "🚨 REGISTRATION CLOSES 5 NOV",
    highlight_tag: "SPACE-TECH • CLOSING NOV 5"
  },
  {
    id: 15,
    title: "⚡ Infotsav '26: Annual Flagship Technical Fest",
    description: "Graphic Era Hill University Bhimtal's grandest annual technical festival! Featuring heavy & light combat Robowars, high-speed Drone Obstacle Racing, 24-hr Speed Web-Dev Sprint, Bug-Bounty & CTF, and Hardware IoT Expo. Cash awards over ₹2,00,000 with participants from across 50+ universities.",
    category: "Technical",
    venue: "Turing Computing Block & APJ Hall, GEHU Bhimtal",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    image_url: "/assets/events/upcoming/robotics.jpg",
    event_date: "2026-11-12",
    event_time: "09:30 AM",
    organizer_name: "Infotsav Technical Council Bhimtal",
    rsvp_count: 520,
    status: "approved",
    registration_status: "Registration Open",
    highlight_tag: "TECH FEST '26"
  },
  {
    id: 16,
    title: "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    description: "The ultimate inter-departmental athletic extravaganza! Featuring Football Championship (11v11), Box Cricket League, Badminton singles/doubles, Volleyball, Table Tennis, and 100m alpine sprint. Gear up to claim the prestigious Golden Spider Trophy!",
    category: "Sports",
    venue: "Main Oval Ground & Sports Complex, GEHU Bhimtal",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    image_url: "/assets/events/upcoming/football_sports.jpg",
    event_date: "2026-11-08",
    event_time: "08:00 AM",
    organizer_name: "Directorate of Sports & Physical Education Bhimtal",
    rsvp_count: 435,
    status: "approved",
    registration_status: "Team Entries Open",
    highlight_tag: "SPORTS MEET '26"
  },
  {
    id: 17,
    title: "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    description: "Graphic Era's landmark annual cultural fest hits Bhimtal! Star-studded Celebrity Concert Night, Battle of the Rock Bands, Inter-College Dance Battles, Multiverse Fashion Walk, and mountain food streets along the scenic Bhimtal lakeside under the Himalayan stars.",
    category: "Cultural",
    venue: "Central Amphitheater & Open Lake Arena, GEHU Bhimtal",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    image_url: "/assets/leadership/bhimtal_amphi.jpg",
    event_date: "2026-11-28",
    event_time: "05:00 PM",
    organizer_name: "Central Fest Directorate & SAC Bhimtal",
    rsvp_count: 980,
    status: "approved",
    registration_status: "All-Access VIP Passes Live",
    highlight_tag: "MEGA CULTURAL FEST"
  },
  {
    id: 18,
    title: "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    description: "A celebration of Himalayan heritage, dramatic arts, and creative expression! Features Nukkad Natak (Street Play), Traditional Chholiya & Kumaoni folk dance, Poetry & Shayari Slam, Live Canvas Painting, and Digital Photography showcase.",
    category: "Cultural",
    venue: "Rabindranath Tagore Auditorium, GEHU Bhimtal",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    image_url: "/assets/events/upcoming/theatre.jpg",
    event_date: "2026-12-05",
    event_time: "11:00 AM",
    organizer_name: "Kala-Kriti Guild & Literary Society Bhimtal",
    rsvp_count: 290,
    status: "approved",
    registration_status: "Auditions & Registration Open",
    highlight_tag: "CULTURAL ACTIVITY"
  },
  {
    id: 19,
    title: "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    description: "An innovative blend of adventure, technology, and environmental conservation! Experience FPV drone flight obstacle courses, high-altitude aerial photography, environmental IoT sensor deployment around Bhimtal lake, and clean-up trail trek.",
    category: "Workshop",
    venue: "Bhimtal High Ridge & Eco-Innovation Center, GEHU Bhimtal",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    image_url: "/assets/leadership/bhimtal_aerial.jpg",
    event_date: "2026-12-18",
    event_time: "09:00 AM",
    organizer_name: "Aero-Spidey Club & Eco-Tech Guild",
    rsvp_count: 210,
    status: "approved",
    registration_status: "Workshop Seats Open",
    highlight_tag: "WORKSHOP & ACTIVITY"
  },

  // 2. GEHU Haldwani
  {
    id: 4,
    title: "⚡ Watch The Code: National Level Hackathon",
    description: "A flagship national-level 24-hour coding marathon bringing developers together. Huge congratulations to Team TECH4ALL for winning the prestigious Consolation Prize and cash award of ₹5,000 with exceptional presentation and code execution!",
    category: "Technical",
    venue: "Main Auditorium & Computing Arena, GEHU Haldwani",
    campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    image_url: "/assets/events/watch_the_code_1.jpg",
    gallery: [
      "/assets/events/watch_the_code_1.jpg",
      "/assets/events/watch_the_code_stage.jpg",
      "/assets/events/watch_the_code_team.jpg",
      "/assets/events/watch_the_code_trophy1.jpg",
      "/assets/events/watch_the_code_trophy2.jpg"
    ],
    winner_team: "Team TECH4ALL (Consolation Prize ₹5,000 & Trophy)",
    event_date: "2026-10-10",
    event_time: "10:00 AM",
    organizer_name: "Watch The Code & Graphic Era Hill University",
    rsvp_count: 189,
    status: "approved"
  },
  {
    id: 5,
    title: "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    description: "Live 2D/3D digital sculpting, character design sprint, and cosplay parade celebrating Spider-Man variants across dimensions.",
    category: "Cultural",
    venue: "Design & Media Studios, GEHU Haldwani",
    campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    image_url: "/assets/events/upcoming/digital_art.jpg",
    event_date: "2026-10-27",
    event_time: "02:00 PM",
    organizer_name: "School of Design & Visual Arts",
    rsvp_count: 98,
    status: "approved"
  },
  {
    id: 6,
    title: "🔥 Spider-Man 2099 Neon EDM Carnival",
    description: "Futuristic cyberpunk music night featuring laser light shows, holographic visualizers, and student DJ performances.",
    category: "Cultural",
    venue: "Central Amphitheater, GEHU Haldwani",
    campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    image_url: "/assets/events/upcoming/edm_carnival.jpg",
    event_date: "2026-11-18",
    event_time: "07:00 PM",
    organizer_name: "Student Activity Council (SAC)",
    rsvp_count: 310,
    status: "approved"
  },

  // 3. GEHU Dehradun
  {
    id: 7,
    title: "🏆 Inter-Campus Spider-Athletics & Track League",
    description: "100m sprint, high-jump web obstacles, and tug-of-war championship between Hill University and Deemed branches.",
    category: "Sports",
    venue: "Hill University Sports Complex, Clement Town",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    image_url: "/assets/campuses/dehradun.png",
    event_date: "2026-10-02",
    event_time: "08:30 AM",
    organizer_name: "Directorate of Sports",
    rsvp_count: 175,
    status: "approved"
  },
  {
    id: 8,
    title: "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    description: "Keynotes on synthetic biology, bio-compatible web polymers, and CRISPR engineering with leading research scientists.",
    category: "Academic",
    venue: "KP Nautiyal Memorial Auditorium, GEHU Dehradun",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    image_url: "/assets/events/upcoming/biotech.jpg",
    event_date: "2026-10-27",
    event_time: "10:00 AM",
    organizer_name: "Biotechnology & Life Sciences Guild",
    rsvp_count: 120,
    status: "approved"
  },
  {
    id: 9,
    title: "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    description: "The biggest annual university festival featuring celebrity concert, dance battles, battle of the bands, and food streets.",
    category: "Cultural",
    venue: "Main University Stadium, Dehradun",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    image_url: "/assets/events/upcoming/cultural_fest.jpg",
    event_date: "2026-11-20",
    event_time: "05:00 PM",
    organizer_name: "Central Fest Directorate",
    rsvp_count: 890,
    status: "approved"
  },
  {
    id: 22,
    title: "Smart India Hackathon (SIH)",
    description: "Memories and highlights from Smart India Hackathon (SIH) at Graphic Era Hill University, Dehradun Campus. A nationwide collaborative initiative to provide students with a platform to solve pressing problems of society, ministries, and industries.",
    overview: "Smart India Hackathon (SIH) is a premier nationwide initiative by the Ministry of Education's Innovation Cell (MIC) and AICTE. Graphic Era Hill University, Dehradun served as a prestigious nodal center, hosting 30+ finalist teams from across India for an intense 36-hour non-stop digital product development marathon.",
    highlights: [
      "Grand Inauguration & Ribbon-Cutting Ceremony with distinguished leadership, guest dignitaries, and AICTE representatives.",
      "Live Nationwide Keynote Interaction with Hon'ble Prime Minister Narendra Modi and Union Education Minister.",
      "36-Hour Non-Stop Coding Sprint tackling mission-critical real-world problem statements.",
      "Rigorous Mentoring & Technical Jury Evaluations by industry veterans and academic experts.",
      "Final Prototype Showcase, Pitch Decks, and Scalable Cloud Feasibility Demonstrations."
    ],
    closing_message: "Empowering young Indian minds to innovate, build scalable tech, and create transformative solutions for the nation.",
    category: "Hackathon / Technical Event",
    venue: "Graphic Era Hill University, Dehradun Campus",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    image_url: "/assets/events/sih/sih_inauguration.jpg",
    gallery: [
      "/assets/events/sih/sih_inauguration.jpg",
      "/assets/events/sih/sih_interaction.jpg",
      "/assets/events/sih/sih_coding.jpg",
      "/assets/events/sih/sih_presentation.jpg",
      "/assets/events/sih/sih_feasibility.jpg"
    ],
    photos: [
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
    ],
    event_date: "2025-12-09",
    event_time: "09:00 AM",
    organizer_name: "Ministry of Education & MIC • GEHU Dehradun",
    rsvp_count: 512,
    status: "approved"
  },
  {
    id: 23,
    title: "13th Foundation Day Celebration",
    description: "Commemorating 13 years of academic brilliance, visionary leadership, and holistic student empowerment at Graphic Era Hill University, Dehradun Campus.",
    overview: "Graphic Era Hill University celebrated its 13th Foundation Day with immense pride, pomp, and grandeur at the Dehradun Campus. The milestone celebration commemorated 13 transformative years of academic excellence, world-class research, and community leadership. The campus was adorned with festive decorations, celebratory banners, and vibrant floral arrangements, bringing together leadership, faculty members, alumni, and thousands of students in an inspiring spirit of oneness.",
    highlights: [
      "Visionary Leadership Address: Keynote speeches on the university's growth from inception to premier Himalayan higher education hub.",
      "Grand Cake-Cutting Ceremony: Leadership, faculty deans, and student representatives uniting around the 13th Foundation Day celebratory cake.",
      "Folk & Classical Cultural Performances: Electrifying traditional Himalayan dance drama and classical choreographies celebrating cultural heritage.",
      "Felicitation & Bouquet Ceremony: Honoring distinguished faculty, research scholars, and exceptional student achievers.",
      "Pledge of Excellence: Assembly of faculty, staff, and students reaffirming dedication to research, innovation, and ethical leadership."
    ],
    closing_message: "Honoring our roots, celebrating our achievements, and inspiring future generations towards greater heights of knowledge, innovation, and unity.",
    category: "University Event / Cultural Celebration",
    venue: "Graphic Era Hill University, Dehradun Campus",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    image_url: "/assets/events/foundation_day/foundation_1_speech.jpg",
    gallery: [
      "/assets/events/foundation_day/foundation_1_speech.jpg",
      "/assets/events/foundation_day/foundation_2_address.jpg",
      "/assets/events/foundation_day/foundation_3_gathering.jpg",
      "/assets/events/foundation_day/foundation_4_cultural_dance.jpg",
      "/assets/events/foundation_day/foundation_5_bouquet_presentation.jpg"
    ],
    photos: [
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
    ],
    event_date: "2024-04-28",
    event_time: "10:00 AM",
    organizer_name: "Office of Student Affairs & Cultural Council • GEHU Dehradun",
    rsvp_count: 670,
    status: "approved"
  },

  // 4. Graphic Era Deemed University
  {
    id: 10,
    title: "🛠️ Parker Nano-Materials & Structural Workshop",
    description: "Advanced laboratory experiments synthesizing graphene-enhanced spider silk and impact-resistant lightweight composites.",
    category: "Workshop",
    venue: "Advanced Materials Lab, Bell Road Campus",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    image_url: "/assets/campuses/deemed.png",
    event_date: "2026-09-28",
    event_time: "01:30 PM",
    organizer_name: "Department of Civil & Aerospace Engineering",
    rsvp_count: 53,
    status: "approved"
  },
  {
    id: 11,
    title: "🌐 Spider-Net Quantum Cybersecurity CTF",
    description: "Capture the flag competition breaking zero-day exploits, defending campus network grids, and tracing rogue packets.",
    category: "Technical",
    venue: "Quantum Computing Center, GEU Deemed",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    image_url: "/assets/campuses/deemed.png",
    event_date: "2026-10-27",
    event_time: "09:30 AM",
    organizer_name: "Cyber Security & Forensics Society",
    rsvp_count: 165,
    status: "approved"
  },
  {
    id: 12,
    title: "🏎️ Formula Web-Speed Electric Kart Championship",
    description: "Inter-collegiate ev-karting time-attack trials engineered by Graphic Era SAE racing students.",
    category: "Sports",
    venue: "North Track Grid, GEU Deemed Campus",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    image_url: "/assets/events/upcoming/karting.jpg",
    event_date: "2026-11-25",
    event_time: "02:30 PM",
    organizer_name: "Formula Student GEU Racing",
    rsvp_count: 240,
    status: "approved"
  },
  {
    id: 20,
    title: "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    description: "Grand annual Vijyadashami celebration at Graphic Era Deemed University main ground featuring the ceremonial burning of the towering Ravan effigy, traditional sparklers & fireworks, with the sacred flame lit by Hon'ble Chairman Prof. Dr. Kamal Ghanshala amidst thousands of cheering students and faculty.",
    category: "Cultural",
    venue: "Main University Ground, Graphic Era Deemed Campus",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    image_url: "/assets/events/dussehra/dussehra_1.jpg",
    gallery: [
      "/assets/events/dussehra/dussehra_1.jpg",
      "/assets/events/dussehra/dussehra_2.jpg",
      "/assets/events/dussehra/dussehra_3.jpg",
      "/assets/events/dussehra/dussehra_4.jpg",
      "/assets/events/dussehra/dussehra_5.jpg"
    ],
    photos: [
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
    ],
    event_date: "2026-10-20",
    event_time: "07:30 PM",
    organizer_name: "Student Activity Council (SAC) • Graphic Era Deemed University",
    rsvp_count: 1420,
    status: "approved"
  },
  {
    id: 21,
    title: "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    description: "Grand Student Grafest cultural extravaganza celebrating breathtaking dance drama performances, mythological Tandav & Mahakali choreography, classical Kathak mudras, and energetic western freestyle dance battles by talented Graphic Era students on the main university ground stage.",
    category: "Cultural",
    venue: "Main University Ground & Open Amphitheatre, Graphic Era Deemed Campus",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    image_url: "/assets/events/grafest/grafest_1.jpg",
    gallery: [
      "/assets/events/grafest/grafest_1.jpg",
      "/assets/events/grafest/grafest_2.jpg",
      "/assets/events/grafest/grafest_3.jpg",
      "/assets/events/grafest/grafest_4.jpg",
      "/assets/events/grafest/grafest_5.jpg"
    ],
    photos: [
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
    ],
    event_date: "2026-10-20",
    event_time: "06:30 PM",
    organizer_name: "Cultural Affairs & Dance Society • Graphic Era Deemed University",
    rsvp_count: 1850,
    status: "approved"
  },

  // --- UPCOMING EVENTS: GEHU HALDWANI ---
  {
    id: 24,
    title: "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    description: "Annual high-stakes robotics challenge featuring obstacle navigation, autonomous line-trackers, and combat battle-bots engineered by tech enthusiasts across Uttarakhand.",
    category: "Technical",
    venue: "Robotics & AI Innovation Hub, GEHU Haldwani",
    campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    image_url: "/assets/events/upcoming/robotics.jpg",
    event_date: "2026-11-15",
    event_time: "10:00 AM",
    organizer_name: "Robotics & IoT Innovation Club • GEHU Haldwani",
    rsvp_count: 245,
    status: "approved",
    highlight_tag: "ROBOTICS CHALLENGE"
  },
  {
    id: 25,
    title: "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    description: "A grand confluence of creative writing, slam poetry, bilingual youth debates, Nukkad Natak street play, and live art exhibitions celebrating Kumaon's rising creators.",
    category: "Cultural",
    venue: "Main University Auditorium, GEHU Haldwani",
    campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    image_url: "/assets/events/upcoming/literary_arts.jpg",
    event_date: "2026-11-26",
    event_time: "11:30 AM",
    organizer_name: "Literary & Cultural Society • GEHU Haldwani",
    rsvp_count: 310,
    status: "approved",
    highlight_tag: "LITERARY GALA"
  },
  {
    id: 26,
    title: "⚽ Kumaon Premier Inter-College Sports Carnival",
    description: "High-octane inter-departmental athletic showdown featuring 7v7 football championship, box cricket league, badminton smash tournament, and volleyball finals.",
    category: "Sports",
    venue: "Sports Pavilion & Athletic Arena, GEHU Haldwani",
    campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    image_url: "/assets/events/upcoming/football_sports.jpg",
    event_date: "2026-12-04",
    event_time: "08:30 AM",
    organizer_name: "Directorate of Physical Education • GEHU Haldwani",
    rsvp_count: 280,
    status: "approved",
    highlight_tag: "SPORTS CARNIVAL"
  },

  // --- UPCOMING EVENTS: GEHU DEHRADUN ---
  {
    id: 27,
    title: "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    description: "30-hour national Capture The Flag (CTF) tournament, zero-day exploit defenses, cloud penetration testing drills, and cybersecurity keynotes by top industry leaders.",
    category: "Technical",
    venue: "CS & IT Supercomputing Arena, GEHU Dehradun",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    image_url: "/assets/events/upcoming/cybersecurity.jpg",
    event_date: "2026-11-18",
    event_time: "09:30 AM",
    organizer_name: "Cyber Security & Bug Bounty Cell • GEHU Dehradun",
    rsvp_count: 380,
    status: "approved",
    highlight_tag: "CYBER CTF '26"
  },
  {
    id: 28,
    title: "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    description: "An evening of dramatic stage acts, acoustic indie band face-offs, fusion instrumental jams, and contemporary solo choreography by students across departments.",
    category: "Cultural",
    venue: "KP Nautiyal Memorial Auditorium, GEHU Dehradun",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    image_url: "/assets/events/upcoming/theatre.jpg",
    event_date: "2026-12-02",
    event_time: "05:30 PM",
    organizer_name: "Cultural Council & Drama Guild • GEHU Dehradun",
    rsvp_count: 620,
    status: "approved",
    highlight_tag: "THEATRE & MUSIC"
  },
  {
    id: 29,
    title: "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    description: "State-level indoor athletic tournament featuring men's & women's singles/doubles badminton, lightning table tennis showdowns, and rapid blitz chess championships.",
    category: "Sports",
    venue: "Indoor Sports Complex, Clement Town Campus",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    image_url: "/assets/events/upcoming/badminton.jpg",
    event_date: "2026-12-12",
    event_time: "09:00 AM",
    organizer_name: "Department of Sports & Athletics • GEHU Dehradun",
    rsvp_count: 295,
    status: "approved",
    highlight_tag: "INDOOR OPEN"
  },

  // --- UPCOMING EVENTS: GRAPHIC ERA DEEMED UNIVERSITY ---
  {
    id: 30,
    title: "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    description: "Flagship national technology symposium bringing global AI researchers, deep-tech startup founders, and student builders together for AI agent demos, patent expos, and seed pitches.",
    category: "Technical",
    venue: "Convention Centre & Multiverse Research Arena, GEU Deemed",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    image_url: "/assets/events/upcoming/deeptech.jpg",
    event_date: "2026-11-16",
    event_time: "10:00 AM",
    organizer_name: "Center for Artificial Intelligence & DeepTech • GEU Deemed",
    rsvp_count: 740,
    status: "approved",
    highlight_tag: "AI & DEEPTECH"
  },
  {
    id: 31,
    title: "🏆 All-India Inter-University Cricket Championship 2026",
    description: "T20 cricket championship featuring 16 top university squads battling for the prestigious Graphic Era Chancellor's Trophy under professional floodlights with live streaming.",
    category: "Sports",
    venue: "Main University Stadium, Graphic Era Deemed Campus",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    image_url: "/assets/events/upcoming/cricket.jpg",
    event_date: "2026-11-22",
    event_time: "08:00 AM",
    organizer_name: "Sports Council • Graphic Era Deemed University",
    rsvp_count: 890,
    status: "approved",
    highlight_tag: "CHANCELLOR'S CUP"
  },
  {
    id: 32,
    title: "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    description: "Grand cultural music evening with soulful Sufi melodies, high-voltage rock fusion bands, student choir showcases, and food street stalls under the starry Dehradun skies.",
    category: "Cultural",
    venue: "Open Air Amphitheatre, Bell Road Campus, GEU Deemed",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    image_url: "/assets/events/upcoming/sufi_rock.jpg",
    event_date: "2026-12-10",
    event_time: "06:00 PM",
    organizer_name: "Music & Cultural Affairs Society • GEU Deemed",
    rsvp_count: 1150,
    status: "approved",
    highlight_tag: "MUSIC NIGHT"
  }
];


export const DEFAULT_REGISTRATIONS = [
  // 1. Hack The Winter (id: 13)
  {
    id: 101,
    event_id: 13,
    event_title: "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    event_category: "Technical",
    event_campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    student_name: "Ujjwal Chaudhary",
    student_email: "ujjwalchaudhary2007@gmail.com",
    phone: "+91 98765 89210",
    degree: "B.Tech CSE - 3rd Year",
    roll_no: "GEHU-2024-BHM-842",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    ticket_code: "HTW-2027-BHM-4821",
    team_name: "Spider-Hackers Bhimtal",
    team_size: "4",
    track_info: "AI Agents & GenAI Systems",
    github_link: "https://github.com/ujjwalchaudharyyy",
    details_json: { tshirtSize: "XL", registrationSource: "Gmail Verified Auto-Fill Portal" },
    created_at: "2026-10-27T10:15:00.000Z"
  },
  {
    id: 102,
    event_id: 13,
    event_title: "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    event_category: "Technical",
    event_campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    student_name: "Rohit Joshi",
    student_email: "rohit.gehu.bhimtal@gmail.com",
    phone: "+91 98234 56789",
    degree: "B.Tech CSE (AI & ML) - 3rd Year",
    roll_no: "GEHU-2024-BHM-714",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    ticket_code: "HTW-2027-BHM-3190",
    team_name: "Kumaon Code Raiders",
    team_size: "3",
    track_info: "Autonomous Mountain IoT",
    github_link: "https://github.com/rohit-gehu",
    details_json: { tshirtSize: "L", registrationSource: "Gmail Verified Auto-Fill Portal" },
    created_at: "2026-10-27T11:42:00.000Z"
  },
  {
    id: 103,
    event_id: 13,
    event_title: "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    event_category: "Technical",
    event_campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    student_name: "Priya Negi",
    student_email: "priya.negi.gehu@gmail.com",
    phone: "+91 97654 32190",
    degree: "B.Tech CSE - 2nd Year",
    roll_no: "GEHU-2025-BHM-632",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    ticket_code: "HTW-2027-BHM-8214",
    team_name: "Quantum Spiders",
    team_size: "4",
    track_info: "Cybersecurity & Web3",
    github_link: "https://github.com/priya-negi",
    details_json: { tshirtSize: "M", registrationSource: "Gmail Verified Auto-Fill Portal" },
    created_at: "2026-10-27T14:20:00.000Z"
  },

  // 2. AstroVerse (id: 14)
  {
    id: 104,
    event_id: 14,
    event_title: "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    event_category: "Technical",
    event_campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    student_name: "Sumit Sanwal",
    student_email: "sumitsanwal8132@gmail.com",
    phone: "+91 99123 45678",
    degree: "B.Tech CSE - 3rd Year",
    roll_no: "GEHU-2024-BHM-512",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    ticket_code: "ASTRO-26-BHM-1904",
    team_name: "Solo Stargazer",
    team_size: "1",
    track_info: "Deep-Sky Telescope Stargazing & Astrophotography",
    github_link: null,
    details_json: { telescopeSlot: "Midnight Galactic Session (10:30 PM - 02:00 AM)", registrationSource: "Gmail Verified Auto-Fill Portal" },
    created_at: "2026-10-27T16:05:00.000Z"
  },
  {
    id: 105,
    event_id: 14,
    event_title: "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    event_category: "Technical",
    event_campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    student_name: "Ananya Sharma",
    student_email: "ananya.sharma.astro@gmail.com",
    phone: "+91 98456 78912",
    degree: "B.Tech Mechanical / Aerospace - 3rd Year",
    roll_no: "GEHU-2024-BHM-321",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    ticket_code: "ASTRO-26-BHM-7412",
    team_name: "Cosmic Explorers",
    team_size: "3",
    track_info: "Planetary AI Hack Sprint & CubeSat Telemetry",
    github_link: "https://github.com/ananya-astro",
    details_json: { telescopeSlot: "Twilight Stargazing (07:00 PM - 09:30 PM)", registrationSource: "Gmail Verified Auto-Fill Portal" },
    created_at: "2026-10-27T17:30:00.000Z"
  },
  {
    id: 106,
    event_id: 14,
    event_title: "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    event_category: "Technical",
    event_campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    student_name: "Ayush Bisht",
    student_email: "ayush.bisht.space@gmail.com",
    phone: "+91 97123 89456",
    degree: "B.Tech AI & Data Science - 2nd Year",
    roll_no: "GEHU-2025-BHM-409",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    ticket_code: "ASTRO-26-BHM-5529",
    team_name: "Solo Stargazer",
    team_size: "1",
    track_info: "High-Altitude Model Rocketry Launch",
    github_link: null,
    details_json: { telescopeSlot: "Midnight Galactic Session (10:30 PM - 02:00 AM)", registrationSource: "Gmail Verified Auto-Fill Portal" },
    created_at: "2026-10-27T18:10:00.000Z"
  },

  // 3. Infotsav '26 (id: 15)
  {
    id: 107,
    event_id: 15,
    event_title: "⚡ Infotsav '26: Annual Flagship Technical Fest",
    event_category: "Technical",
    event_campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    student_name: "Aman Rawat",
    student_email: "aman.rawat.robo@gmail.com",
    phone: "+91 98987 12345",
    degree: "B.Tech Robotics & Automation - 3rd Year",
    roll_no: "GEHU-2024-BHM-188",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    ticket_code: "TECHFEST-BHM-9201",
    team_name: "Iron Spiders Combat Squad",
    team_size: "4",
    track_info: "Robowars (Heavyweight Combat Arena)",
    github_link: "https://github.com/aman-robowars",
    details_json: { registrationSource: "Gmail Verified Auto-Fill Portal" },
    created_at: "2026-10-27T12:00:00.000Z"
  },
  {
    id: 108,
    event_id: 15,
    event_title: "⚡ Infotsav '26: Annual Flagship Technical Fest",
    event_category: "Technical",
    event_campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    student_name: "Siddharth Bhatt",
    student_email: "siddharth.bhatt.dev@gmail.com",
    phone: "+91 98112 33445",
    degree: "B.Tech CSE - 4th Year",
    roll_no: "GEHU-2023-BHM-299",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    ticket_code: "TECHFEST-BHM-4318",
    team_name: "Cyber-Vipers",
    team_size: "2",
    track_info: "24-hr Speed Web-Dev Sprint",
    github_link: "https://github.com/siddharth-web",
    details_json: { registrationSource: "Gmail Verified Auto-Fill Portal" },
    created_at: "2026-10-27T13:45:00.000Z"
  },

  // 4. Spardha '26 (id: 16)
  {
    id: 109,
    event_id: 16,
    event_title: "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    event_category: "Sports",
    event_campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    student_name: "Rahul Mehra",
    student_email: "rahul.mehra.fc@gmail.com",
    phone: "+91 99887 76655",
    degree: "B.Tech Civil - 3rd Year",
    roll_no: "GEHU-2024-BHM-601",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    ticket_code: "SPARDHA-BHM-6420",
    team_name: "Bhimtal Strikers FC (11v11)",
    team_size: "11",
    track_info: "Football Championship (11v11)",
    github_link: null,
    details_json: { registrationSource: "Gmail Verified Auto-Fill Portal" },
    created_at: "2026-10-27T09:30:00.000Z"
  },
  {
    id: 110,
    event_id: 16,
    event_title: "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    event_category: "Sports",
    event_campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    student_name: "Divya Pandey",
    student_email: "divya.pandey.sports@gmail.com",
    phone: "+91 97766 55443",
    degree: "BCA - 2nd Year",
    roll_no: "GEHU-2025-BHM-450",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    ticket_code: "SPARDHA-BHM-1189",
    team_name: "Shuttle Masters Duo",
    team_size: "2",
    track_info: "Badminton Doubles Tournament",
    github_link: null,
    details_json: { registrationSource: "Gmail Verified Auto-Fill Portal" },
    created_at: "2026-10-27T10:50:00.000Z"
  },

  // 5. Grafest '26 (id: 17)
  {
    id: 111,
    event_id: 17,
    event_title: "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    event_category: "Cultural",
    event_campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    student_name: "Harshit Joshi",
    student_email: "harshit.joshi.grafest@gmail.com",
    phone: "+91 98334 45566",
    degree: "B.Tech CSE - 3rd Year",
    roll_no: "GEHU-2024-BHM-811",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    ticket_code: "GRAFEST-BHM-7788",
    team_name: "Solo VIP Entry",
    team_size: "1",
    track_info: "All-Access Student VIP Concert Pass",
    github_link: null,
    details_json: { registrationSource: "Gmail Verified Auto-Fill Portal" },
    created_at: "2026-10-27T15:15:00.000Z"
  },
  {
    id: 112,
    event_id: 17,
    event_title: "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    event_category: "Cultural",
    event_campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    student_name: "Meenakshi Bora",
    student_email: "meenakshi.bora.music@gmail.com",
    phone: "+91 98123 99887",
    degree: "B.Des - 3rd Year",
    roll_no: "GEHU-2024-BHM-340",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    ticket_code: "GRAFEST-BHM-3211",
    team_name: "Rhythm Beats Rock Band",
    team_size: "5",
    track_info: "Battle of the Rock Bands",
    github_link: null,
    details_json: { registrationSource: "Gmail Verified Auto-Fill Portal" },
    created_at: "2026-10-27T16:40:00.000Z"
  },

  // 6. Kalakriti & Goonj (id: 18)
  {
    id: 113,
    event_id: 18,
    event_title: "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    event_category: "Cultural",
    event_campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    student_name: "Saurabh Tiwari",
    student_email: "saurabh.theatre@gmail.com",
    phone: "+91 99345 67812",
    degree: "B.Sc Biotechnology - 2nd Year",
    roll_no: "GEHU-2025-BHM-215",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    ticket_code: "KALAKRITI-BHM-5412",
    team_name: "Parivartan Theatre Troupe",
    team_size: "8",
    track_info: "Nukkad Natak (Street Play Theatre)",
    github_link: null,
    details_json: { registrationSource: "Gmail Verified Auto-Fill Portal" },
    created_at: "2026-10-27T14:05:00.000Z"
  },

  // 7. AeroTrek '26 (id: 19)
  {
    id: 114,
    event_id: 19,
    event_title: "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    event_category: "Workshop",
    event_campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    student_name: "Kartik Verma",
    student_email: "kartik.verma.fpv@gmail.com",
    phone: "+91 98223 34455",
    degree: "B.Tech Aerospace - 3rd Year",
    roll_no: "GEHU-2024-BHM-103",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    ticket_code: "AEROTREK-BHM-8923",
    team_name: "Sky-Watchers Bhimtal",
    team_size: "3",
    track_info: "FPV Drone Flight Obstacle Course",
    github_link: "https://github.com/kartik-fpv",
    details_json: { registrationSource: "Gmail Verified Auto-Fill Portal" },
    created_at: "2026-10-27T17:00:00.000Z"
  }
];


export const DEFAULT_GOOGLE_SHEETS = {
  13: {
    eventId: 13,
    eventName: "Hack The Winter '27 (Himalayan Edition)",
    sheetId: "1HTW2027_Himalayan_Winter_Hackathon_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1HTW2027_Himalayan_Winter_Hackathon_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_HTW2027_AutoSync/exec",
    autoSync: true
  },
  14: {
    eventId: 14,
    eventName: "AstroVerse Space-Tech & Galactic Exploration",
    sheetId: "1ASTRO2026_SpaceTech_Stargazing_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1ASTRO2026_SpaceTech_Stargazing_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_ASTRO2026_AutoSync/exec",
    autoSync: true
  },
  15: {
    eventId: 15,
    eventName: "Infotsav '26 Flagship Technical Fest",
    sheetId: "1INFOTSAV2026_Robowars_Coding_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1INFOTSAV2026_Robowars_Coding_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_INFOTSAV_AutoSync/exec",
    autoSync: true
  },
  16: {
    eventId: 16,
    eventName: "Spardha '26 Inter-Campus Sports League",
    sheetId: "1SPARDHA2026_InterCampus_Sports_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1SPARDHA2026_InterCampus_Sports_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_SPARDHA_AutoSync/exec",
    autoSync: true
  },
  17: {
    eventId: 17,
    eventName: "Grafest '26 Bhimtal Winter Cultural Fest",
    sheetId: "1GRAFEST2026_Bhimtal_Concert_VIP_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GRAFEST2026_Bhimtal_Concert_VIP_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_GRAFEST_AutoSync/exec",
    autoSync: true
  },
  18: {
    eventId: 18,
    eventName: "Kalakriti & Goonj Youth Arts & Theatre",
    sheetId: "1KALAKRITI2026_Youth_Theatre_Arts_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1KALAKRITI2026_Youth_Theatre_Arts_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_KALAKRITI_AutoSync/exec",
    autoSync: true
  },
  19: {
    eventId: 19,
    eventName: "AeroTrek Himalayan Eco-Drone Expedition",
    sheetId: "1AEROTREK2026_Drone_AerialSurvey_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1AEROTREK2026_Drone_AerialSurvey_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_AEROTREK_AutoSync/exec",
    autoSync: true
  }
};
