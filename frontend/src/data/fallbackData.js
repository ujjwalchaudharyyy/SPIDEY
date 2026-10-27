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
    rsvp_count: 84
  },
  {
    id: 2,
    title: "⚡ Electro-Lake Drone Racing & Night Illumination",
    description: "High-speed night racing tournament under neon floodlights with custom-built FPV quads and Spider-Beacon telemetry.",
    category: "Technical",
    venue: "Lake Vista Arena, GEHU Bhimtal",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    image_url: "/assets/campuses/bhimtal.png",
    event_date: "2026-10-27",
    event_time: "06:30 PM",
    organizer_name: "Web-Tech Robotics Society",
    rsvp_count: 142
  },
  {
    id: 3,
    title: "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    description: "36-hour non-stop hackathon building smart campus IoT sensors, edge-AI computer vision, and emergency web beacons.",
    category: "Technical",
    venue: "Turing Computer Block, GEHU Bhimtal",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    image_url: "/assets/campuses/bhimtal.png",
    event_date: "2026-11-14",
    event_time: "09:00 AM",
    organizer_name: "Department of Computer Science & Engineering",
    rsvp_count: 215
  },

  // 2. GEHU Haldwani
  {
    id: 4,
    title: "🦾 Stark Cyber-Robotics & AI Kinematics Conclave",
    description: "Exhibition of quadruped spider-bots, automated web-line rovers, and real-time inverse kinematics controllers.",
    category: "Technical",
    venue: "Robotics Arena 3, GEHU Haldwani",
    campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    image_url: "/assets/campuses/haldwani.png",
    event_date: "2026-10-10",
    event_time: "10:30 AM",
    organizer_name: "Department of Mechanical & Robotics",
    rsvp_count: 67
  },
  {
    id: 5,
    title: "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    description: "Live 2D/3D digital sculpting, character design sprint, and cosplay parade celebrating Spider-Man variants across dimensions.",
    category: "Cultural",
    venue: "Design & Media Studios, GEHU Haldwani",
    campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    image_url: "/assets/campuses/haldwani.png",
    event_date: "2026-10-27",
    event_time: "02:00 PM",
    organizer_name: "School of Design & Visual Arts",
    rsvp_count: 98
  },
  {
    id: 6,
    title: "🔥 Spider-Man 2099 Neon EDM Carnival",
    description: "Futuristic cyberpunk music night featuring laser light shows, holographic visualizers, and student DJ performances.",
    category: "Cultural",
    venue: "Central Amphitheater, GEHU Haldwani",
    campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    image_url: "/assets/campuses/haldwani.png",
    event_date: "2026-11-18",
    event_time: "07:00 PM",
    organizer_name: "Student Activity Council (SAC)",
    rsvp_count: 310
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
    rsvp_count: 175
  },
  {
    id: 8,
    title: "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    description: "Keynotes on synthetic biology, bio-compatible web polymers, and CRISPR engineering with leading research scientists.",
    category: "Academic",
    venue: "KP Nautiyal Memorial Auditorium, GEHU Dehradun",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    image_url: "/assets/campuses/dehradun.png",
    event_date: "2026-10-27",
    event_time: "10:00 AM",
    organizer_name: "Biotechnology & Life Sciences Guild",
    rsvp_count: 120
  },
  {
    id: 9,
    title: "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    description: "The biggest annual university festival featuring celebrity concert, dance battles, battle of the bands, and food streets.",
    category: "Cultural",
    venue: "Main University Stadium, Dehradun",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    image_url: "/assets/campuses/dehradun.png",
    event_date: "2026-11-20",
    event_time: "05:00 PM",
    organizer_name: "Central Fest Directorate",
    rsvp_count: 890
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
    rsvp_count: 53
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
    rsvp_count: 165
  },
  {
    id: 12,
    title: "🏎️ Formula Web-Speed Electric Kart Championship",
    description: "Inter-collegiate ev-karting time-attack trials engineered by Graphic Era SAE racing students.",
    category: "Sports",
    venue: "North Track Grid, GEU Deemed Campus",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    image_url: "/assets/campuses/deemed.png",
    event_date: "2026-11-25",
    event_time: "02:30 PM",
    organizer_name: "Formula Student GEU Racing",
    rsvp_count: 240
  }
];
