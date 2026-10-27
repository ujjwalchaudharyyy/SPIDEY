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
    video_url: "/assets/videos/web_drone.mp4",
    video_title: "Himalayan Web-Drone Flight Demo & Aerial Surveillance",
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
      "/assets/events/graphite_live_5.jpg",
      "/assets/events/graphite_live_6.jpg",
      "/assets/events/graphite_live_7.jpg",
      "/assets/events/graphite_live_8.jpg"
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
  {
    id: 33,
    title: "INNOVATE 1.0 – AWS Ideathon",
    description: "INNOVATE 1.0 was a technology and innovation-focused ideathon organized at Graphic Era Hill University, Bhimtal Campus. The event brought together students passionate about cloud computing, technology, and innovation. It provided an engaging platform for students to explore ideas, interact with fellow innovators, and showcase their interest in building technology-driven solutions.",
    overview: "INNOVATE 1.0 was a technology and innovation-focused ideathon organized at Graphic Era Hill University, Bhimtal Campus. The event brought together students passionate about cloud computing, technology, and innovation. It provided an engaging platform for students to explore ideas, interact with fellow innovators, and showcase their interest in building technology-driven solutions.",
    highlights_title: "IDEATHON & CLOUD HIGHLIGHTS",
    highlights: [
      "Hands-on learning and innovation challenge for bright minds passionate about cloud and technology",
      "Organized jointly by AWS Cloud Club (GEHU BTL) and IEEE Student Branch, GEHU Bhimtal",
      "Interactive AWS Cloud Club stall with live guidance, registration support, and technology discussions",
      "Active student participation exploring cloud computing, architecture, and technology-driven ideas",
      "Collaborative platform connecting aspiring innovators and student developers across campus"
    ],
    closing_message: "Empowering bright student minds to innovate, build, and scale transformative technology solutions in the Himalayan hills of Bhimtal.",
    category: "Technology / Innovation / Ideathon",
    venue: "Graphic Era Hill University, Bhimtal Campus",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    theme: "Innovate • Build • Scale",
    image_url: "/assets/events/aws_ideathon/aws_ideathon_poster.jpg",
    gallery: [
      "/assets/events/aws_ideathon/aws_ideathon_poster.jpg",
      "/assets/events/aws_ideathon/aws_ideathon_team.jpg",
      "/assets/events/aws_ideathon/aws_ideathon_venue_crowd.jpg",
      "/assets/events/aws_ideathon/aws_ideathon_stall_interaction.jpg",
      "/assets/events/aws_ideathon/aws_ideathon_discussions.jpg"
    ],
    photos: [
      {
        url: "/assets/events/aws_ideathon/aws_ideathon_poster.jpg",
        title: "Official INNOVATE 1.0 Event Poster",
        caption: "The official INNOVATE 1.0 event poster featuring Graphic Era Hill University Bhimtal Campus against the Himalayan hills, AWS Cloud Club GEHU BTL, and IEEE Student Branch."
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
    ],
    event_date: "2026-08-19",
    display_date: "August 19, 2026",
    event_time: "10:00 AM",
    organizer_name: "AWS Cloud Club (GEHU BTL) & IEEE Student Branch, GEHU Bhimtal",
    rsvp_count: 165,
    status: "approved"
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
  {
    id: 24,
    title: "Student GRAFEST 2026",
    description: "Student GRAFEST 2026 at Graphic Era Hill University, Dehradun Campus, was a vibrant celebration of student talent, music, dance, creativity, and campus life. The festival brought together students to enjoy live performances, cultural showcases, music, and memorable moments with friends. From energetic stage performances to beautiful artistic expressions, GRAFEST captures the excitement and spirit of student life.",
    overview: "Student GRAFEST 2026 at Graphic Era Hill University, Dehradun Campus, was a vibrant celebration of student talent, music, dance, creativity, and campus life. The festival brought together students to enjoy live performances, cultural showcases, music, and memorable moments with friends. From energetic stage performances to beautiful artistic expressions, GRAFEST captures the excitement and spirit of student life.",
    highlights_title: "FESTIVAL HIGHLIGHTS",
    highlights: [
      "Live vocal and instrumental performances on the main festival stage",
      "Classical, folk, and contemporary solo dance showcases",
      "Colorful Student GRAFEST interactive photo backdrops capturing lasting campus memories",
      "Diverse showcase of artistic talent, cultural traditions, and student creativity",
      "Musical sets featuring acoustic guitarists and student performers"
    ],
    closing_message: "Celebrating student creativity, music, culture, and campus memories that define the vibrant spirit of Graphic Era.",
    category: "Student Festival / Cultural and Entertainment Event",
    venue: "Graphic Era Hill University, Dehradun Campus",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    image_url: "/assets/events/student_grafest/student_grafest_1.jpg",
    gallery: [
      "/assets/events/student_grafest/student_grafest_1.jpg",
      "/assets/events/student_grafest/student_grafest_2.jpg",
      "/assets/events/student_grafest/student_grafest_3.jpg",
      "/assets/events/student_grafest/student_grafest_4.jpg",
      "/assets/events/student_grafest/student_grafest_5.jpg"
    ],
    photos: [
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
    ],
    event_date: "2026-10-26",
    display_date: "October 26-27, 2026",
    event_time: "05:00 PM",
    organizer_name: "Student Activity Council (SAC) • GEHU Dehradun",
    rsvp_count: 1540,
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
    id: 34,
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
  {
    "id": 1001,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aarav Sharma",
    "student_email": "aarav.sharma.10@gehu.ac.in",
    "phone": "+91 94100 10031",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-113",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1073",
    "team_name": "Cyber Spiders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/aarav-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1002,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Priyanshu Negi",
    "student_email": "priyanshu.negi.11@gmail.com",
    "phone": "+91 94117 10090",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-120",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1110",
    "team_name": "Web Slingers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/priyanshu-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1003,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ayush Joshi",
    "student_email": "ayush.joshi.12@gmail.com",
    "phone": "+91 94134 10149",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-127",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1147",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1004,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ananya Bhatt",
    "student_email": "ananya.bhatt.13@gehu.ac.in",
    "phone": "+91 94151 10208",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-134",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1184",
    "team_name": "Quantum Net 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/ananya-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1005,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Megha Mehra",
    "student_email": "megha.mehra.14@gmail.com",
    "phone": "+91 94168 10267",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-141",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1221",
    "team_name": "Volt Dynamics 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/megha-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1006,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Simran Chauhan",
    "student_email": "simran.chauhan.15@gmail.com",
    "phone": "+91 94185 10326",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-148",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1258",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1007,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Nikhil Singh",
    "student_email": "nikhil.singh.16@gehu.ac.in",
    "phone": "+91 94202 10385",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-155",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1295",
    "team_name": "Neural Squad 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/nikhil-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1008,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kunal Gairola",
    "student_email": "kunal.gairola.17@gmail.com",
    "phone": "+91 94219 10444",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-162",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1332",
    "team_name": "Byte Force 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/kunal-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1009,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Pooja Pandey",
    "student_email": "pooja.pandey.18@gmail.com",
    "phone": "+91 94236 10503",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-169",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1369",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1010,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Prerna Dhyani",
    "student_email": "prerna.dhyani.19@gehu.ac.in",
    "phone": "+91 94253 10562",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-176",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1406",
    "team_name": "Code Crafters 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/prerna-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1011,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Sakshi Kandpal",
    "student_email": "sakshi.kandpal.110@gmail.com",
    "phone": "+91 94270 10621",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-183",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1443",
    "team_name": "Stark Innovators 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/sakshi-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1012,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Rohan Gusain",
    "student_email": "rohan.gusain.111@gmail.com",
    "phone": "+91 94287 10680",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-190",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1480",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1013,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kartik Sharma",
    "student_email": "kartik.sharma.112@gehu.ac.in",
    "phone": "+91 94304 10739",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-197",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1517",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/kartik-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1014,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Harsh Negi",
    "student_email": "harsh.negi.113@gmail.com",
    "phone": "+91 94321 10798",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-204",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1554",
    "team_name": "Spider Byte Team 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/harsh-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1015,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Divya Joshi",
    "student_email": "divya.joshi.114@gmail.com",
    "phone": "+91 94338 10857",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-211",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1591",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1016,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Riya Bhatt",
    "student_email": "riya.bhatt.115@gehu.ac.in",
    "phone": "+91 94355 10916",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-218",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1628",
    "team_name": "Web Slingers 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/riya-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1017,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aman Mehra",
    "student_email": "aman.mehra.116@gmail.com",
    "phone": "+91 94372 10975",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-225",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1665",
    "team_name": "Himalayan Gliders 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/aman-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1018,
    "event_id": 1,
    "event_title": "🏔️ Himalayan Web-Drone Flight & Aerial Photography",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Gaurav Chauhan",
    "student_email": "gaurav.chauhan.117@gmail.com",
    "phone": "+91 94389 11034",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-232",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-1-1702",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1019,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Harsh Rawat",
    "student_email": "harsh.rawat.20@gehu.ac.in",
    "phone": "+91 94200 10062",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-126",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1146",
    "team_name": "Web Slingers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/harsh-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1020,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Divya Pant",
    "student_email": "divya.pant.21@gmail.com",
    "phone": "+91 94217 10121",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-133",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1183",
    "team_name": "Himalayan Gliders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/divya-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1021,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Riya Semwal",
    "student_email": "riya.semwal.22@gmail.com",
    "phone": "+91 94234 10180",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-140",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1220",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1022,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aman Upadhyay",
    "student_email": "aman.upadhyay.23@gehu.ac.in",
    "phone": "+91 94251 10239",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-147",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1257",
    "team_name": "Volt Dynamics 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/aman-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1023,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Gaurav Kargeti",
    "student_email": "gaurav.kargeti.24@gmail.com",
    "phone": "+91 94268 10298",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-154",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1294",
    "team_name": "Aero Hawks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/gaurav-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1024,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Deepak Kaur",
    "student_email": "deepak.kaur.25@gmail.com",
    "phone": "+91 94285 10357",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-161",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1331",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1025,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kavita Tiwari",
    "student_email": "kavita.tiwari.26@gehu.ac.in",
    "phone": "+91 94302 10416",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-168",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1368",
    "team_name": "Byte Force 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/kavita-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1026,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ishita Bhandari",
    "student_email": "ishita.bhandari.27@gmail.com",
    "phone": "+91 94319 10475",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-175",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1405",
    "team_name": "Apex Predators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/ishita-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1027,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Anjali Arya",
    "student_email": "anjali.arya.28@gmail.com",
    "phone": "+91 94336 10534",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-182",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1442",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1028,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aditya Uniyal",
    "student_email": "aditya.uniyal.29@gehu.ac.in",
    "phone": "+91 94353 10593",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-189",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1479",
    "team_name": "Stark Innovators 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/aditya-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1029,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Siddharth Bisht",
    "student_email": "siddharth.bisht.210@gmail.com",
    "phone": "+91 94370 10652",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-196",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1516",
    "team_name": "Mountain Hackers 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/siddharth-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1030,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Shreya Verma",
    "student_email": "shreya.verma.211@gmail.com",
    "phone": "+91 94387 10711",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-203",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1553",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1031,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Sneha Rawat",
    "student_email": "sneha.rawat.212@gehu.ac.in",
    "phone": "+91 94404 10770",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-210",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1590",
    "team_name": "Spider Byte Team 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/sneha-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1032,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Tanya Pant",
    "student_email": "tanya.pant.213@gmail.com",
    "phone": "+91 94421 10829",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-217",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1627",
    "team_name": "Cyber Spiders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/tanya-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1033,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Vansh Semwal",
    "student_email": "vansh.semwal.214@gmail.com",
    "phone": "+91 94438 10888",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-224",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1664",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1034,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Manish Upadhyay",
    "student_email": "manish.upadhyay.215@gehu.ac.in",
    "phone": "+91 94455 10947",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-231",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1701",
    "team_name": "Himalayan Gliders 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/manish-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1035,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Abhishek Kargeti",
    "student_email": "abhishek.kargeti.216@gmail.com",
    "phone": "+91 94472 11006",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-238",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1738",
    "team_name": "Quantum Net 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/abhishek-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1036,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Neha Kaur",
    "student_email": "neha.kaur.217@gmail.com",
    "phone": "+91 94489 11065",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-245",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1775",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1037,
    "event_id": 2,
    "event_title": "Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Komal Tiwari",
    "student_email": "komal.tiwari.218@gehu.ac.in",
    "phone": "+91 94506 11124",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-252",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-2-1812",
    "team_name": "Aero Hawks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/komal-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1038,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Tanya Chauhan",
    "student_email": "tanya.chauhan.30@gehu.ac.in",
    "phone": "+91 94300 10093",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-139",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1219",
    "team_name": "Himalayan Gliders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/tanya-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1039,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Vansh Singh",
    "student_email": "vansh.singh.31@gmail.com",
    "phone": "+91 94317 10152",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-146",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1256",
    "team_name": "Quantum Net 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/vansh-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1040,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Manish Gairola",
    "student_email": "manish.gairola.32@gmail.com",
    "phone": "+91 94334 10211",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-153",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1293",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1041,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Abhishek Pandey",
    "student_email": "abhishek.pandey.33@gehu.ac.in",
    "phone": "+91 94351 10270",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-160",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1330",
    "team_name": "Aero Hawks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/abhishek-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1042,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Neha Dhyani",
    "student_email": "neha.dhyani.34@gmail.com",
    "phone": "+91 94368 10329",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-167",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1367",
    "team_name": "Neural Squad 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/neha-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1043,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Komal Kandpal",
    "student_email": "komal.kandpal.35@gmail.com",
    "phone": "+91 94385 10388",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-174",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1404",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1044,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aarav Gusain",
    "student_email": "aarav.gusain.36@gehu.ac.in",
    "phone": "+91 94402 10447",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-181",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1441",
    "team_name": "Apex Predators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/aarav-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1045,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Priyanshu Sharma",
    "student_email": "priyanshu.sharma.37@gmail.com",
    "phone": "+91 94419 10506",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-188",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1478",
    "team_name": "Code Crafters 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/priyanshu-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1046,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ayush Negi",
    "student_email": "ayush.negi.38@gmail.com",
    "phone": "+91 94436 10565",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-195",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1515",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1047,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ananya Joshi",
    "student_email": "ananya.joshi.39@gehu.ac.in",
    "phone": "+91 94453 10624",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-202",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1552",
    "team_name": "Mountain Hackers 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/ananya-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1048,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Megha Bhatt",
    "student_email": "megha.bhatt.310@gmail.com",
    "phone": "+91 94470 10683",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-209",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1589",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/megha-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1049,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Simran Mehra",
    "student_email": "simran.mehra.311@gmail.com",
    "phone": "+91 94487 10742",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-216",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1626",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1050,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Nikhil Chauhan",
    "student_email": "nikhil.chauhan.312@gehu.ac.in",
    "phone": "+91 94504 10801",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-223",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1663",
    "team_name": "Cyber Spiders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/nikhil-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1051,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kunal Singh",
    "student_email": "kunal.singh.313@gmail.com",
    "phone": "+91 94521 10860",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-230",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1700",
    "team_name": "Web Slingers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/kunal-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1052,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Pooja Gairola",
    "student_email": "pooja.gairola.314@gmail.com",
    "phone": "+91 94538 10919",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-237",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1737",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1053,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Prerna Pandey",
    "student_email": "prerna.pandey.315@gehu.ac.in",
    "phone": "+91 94555 10978",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-244",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1774",
    "team_name": "Quantum Net 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/prerna-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1054,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Sakshi Dhyani",
    "student_email": "sakshi.dhyani.316@gmail.com",
    "phone": "+91 94572 11037",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-251",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1811",
    "team_name": "Volt Dynamics 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/sakshi-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1055,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Rohan Kandpal",
    "student_email": "rohan.kandpal.317@gmail.com",
    "phone": "+91 94589 11096",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-258",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1848",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1056,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kartik Gusain",
    "student_email": "kartik.gusain.318@gehu.ac.in",
    "phone": "+91 94606 11155",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-265",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1885",
    "team_name": "Neural Squad 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/kartik-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1057,
    "event_id": 3,
    "event_title": "🕷️ Multiverse Hackathon '26 (Bhimtal Chapter)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Harsh Sharma",
    "student_email": "harsh.sharma.319@gmail.com",
    "phone": "+91 94623 11214",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-272",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-3-1922",
    "team_name": "Byte Force 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/harsh-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T11:30:00.000Z"
  },

  {
    "id": 1058,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kunal Kaur",
    "student_email": "kunal.kaur.130@gehu.ac.in",
    "phone": "+91 95300 10403",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-269",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-1949",
    "team_name": "Quantum Net 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/kunal-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1059,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Pooja Tiwari",
    "student_email": "pooja.tiwari.131@gmail.com",
    "phone": "+91 95317 10462",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-276",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-1986",
    "team_name": "Volt Dynamics 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/pooja-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1060,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Prerna Bhandari",
    "student_email": "prerna.bhandari.132@gmail.com",
    "phone": "+91 95334 10521",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-283",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2023",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1061,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Sakshi Arya",
    "student_email": "sakshi.arya.133@gehu.ac.in",
    "phone": "+91 95351 10580",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-290",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2060",
    "team_name": "Neural Squad 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/sakshi-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1062,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Rohan Uniyal",
    "student_email": "rohan.uniyal.134@gmail.com",
    "phone": "+91 95368 10639",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-297",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2097",
    "team_name": "Byte Force 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/rohan-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1063,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kartik Bisht",
    "student_email": "kartik.bisht.135@gmail.com",
    "phone": "+91 95385 10698",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-304",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2134",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1064,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Harsh Verma",
    "student_email": "harsh.verma.136@gehu.ac.in",
    "phone": "+91 95402 10757",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-311",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2171",
    "team_name": "Code Crafters 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/harsh-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1065,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Divya Rawat",
    "student_email": "divya.rawat.137@gmail.com",
    "phone": "+91 95419 10816",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-318",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2208",
    "team_name": "Stark Innovators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/divya-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1066,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Riya Pant",
    "student_email": "riya.pant.138@gmail.com",
    "phone": "+91 95436 10875",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-325",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2245",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1067,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aman Semwal",
    "student_email": "aman.semwal.139@gehu.ac.in",
    "phone": "+91 95453 10934",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-332",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2282",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/aman-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1068,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Gaurav Upadhyay",
    "student_email": "gaurav.upadhyay.1310@gmail.com",
    "phone": "+91 95470 10993",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-339",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2319",
    "team_name": "Spider Byte Team 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/gaurav-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1069,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Deepak Kargeti",
    "student_email": "deepak.kargeti.1311@gmail.com",
    "phone": "+91 95487 11052",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-346",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2356",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1070,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kavita Kaur",
    "student_email": "kavita.kaur.1312@gehu.ac.in",
    "phone": "+91 95504 11111",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-353",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2393",
    "team_name": "Web Slingers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/kavita-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1071,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ishita Tiwari",
    "student_email": "ishita.tiwari.1313@gmail.com",
    "phone": "+91 95521 11170",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-360",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2430",
    "team_name": "Himalayan Gliders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/ishita-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1072,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Anjali Bhandari",
    "student_email": "anjali.bhandari.1314@gmail.com",
    "phone": "+91 95538 11229",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-367",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2467",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1073,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aditya Arya",
    "student_email": "aditya.arya.1315@gehu.ac.in",
    "phone": "+91 95555 11288",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-374",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2504",
    "team_name": "Volt Dynamics 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/aditya-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1074,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Siddharth Uniyal",
    "student_email": "siddharth.uniyal.1316@gmail.com",
    "phone": "+91 95572 11347",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-381",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2541",
    "team_name": "Aero Hawks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/siddharth-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1075,
    "event_id": 13,
    "event_title": "❄️ Hack The Winter Hackathon '27 (Himalayan Edition)",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Shreya Bisht",
    "student_email": "shreya.bisht.1317@gmail.com",
    "phone": "+91 95589 11406",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-388",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-13-2578",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1076,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ishita Kandpal",
    "student_email": "ishita.kandpal.140@gehu.ac.in",
    "phone": "+91 95400 10434",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-282",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2022",
    "team_name": "Volt Dynamics 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/ishita-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1077,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Anjali Gusain",
    "student_email": "anjali.gusain.141@gmail.com",
    "phone": "+91 95417 10493",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-289",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2059",
    "team_name": "Aero Hawks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/anjali-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1078,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aditya Sharma",
    "student_email": "aditya.sharma.142@gmail.com",
    "phone": "+91 95434 10552",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-296",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2096",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1079,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Siddharth Negi",
    "student_email": "siddharth.negi.143@gehu.ac.in",
    "phone": "+91 95451 10611",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-303",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2133",
    "team_name": "Byte Force 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/siddharth-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1080,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Shreya Joshi",
    "student_email": "shreya.joshi.144@gmail.com",
    "phone": "+91 95468 10670",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-310",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2170",
    "team_name": "Apex Predators 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/shreya-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1081,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Sneha Bhatt",
    "student_email": "sneha.bhatt.145@gmail.com",
    "phone": "+91 95485 10729",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-317",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2207",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1082,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Tanya Mehra",
    "student_email": "tanya.mehra.146@gehu.ac.in",
    "phone": "+91 95502 10788",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-324",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2244",
    "team_name": "Stark Innovators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/tanya-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1083,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Vansh Chauhan",
    "student_email": "vansh.chauhan.147@gmail.com",
    "phone": "+91 95519 10847",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-331",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2281",
    "team_name": "Mountain Hackers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/vansh-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1084,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Manish Singh",
    "student_email": "manish.singh.148@gmail.com",
    "phone": "+91 95536 10906",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-338",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2318",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1085,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Abhishek Gairola",
    "student_email": "abhishek.gairola.149@gehu.ac.in",
    "phone": "+91 95553 10965",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-345",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2355",
    "team_name": "Spider Byte Team 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/abhishek-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1086,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Neha Pandey",
    "student_email": "neha.pandey.1410@gmail.com",
    "phone": "+91 95570 11024",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-352",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2392",
    "team_name": "Cyber Spiders 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/neha-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1087,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Komal Dhyani",
    "student_email": "komal.dhyani.1411@gmail.com",
    "phone": "+91 95587 11083",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-359",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2429",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1088,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aarav Kandpal",
    "student_email": "aarav.kandpal.1412@gehu.ac.in",
    "phone": "+91 95604 11142",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-366",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2466",
    "team_name": "Himalayan Gliders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/aarav-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1089,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Priyanshu Gusain",
    "student_email": "priyanshu.gusain.1413@gmail.com",
    "phone": "+91 95621 11201",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-373",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2503",
    "team_name": "Quantum Net 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/priyanshu-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1090,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ayush Sharma",
    "student_email": "ayush.sharma.1414@gmail.com",
    "phone": "+91 95638 11260",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-380",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2540",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1091,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ananya Negi",
    "student_email": "ananya.negi.1415@gehu.ac.in",
    "phone": "+91 95655 11319",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-387",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2577",
    "team_name": "Aero Hawks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/ananya-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1092,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Megha Joshi",
    "student_email": "megha.joshi.1416@gmail.com",
    "phone": "+91 95672 11378",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-394",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2614",
    "team_name": "Neural Squad 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/megha-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1093,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Simran Bhatt",
    "student_email": "simran.bhatt.1417@gmail.com",
    "phone": "+91 95689 11437",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-401",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2651",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1094,
    "event_id": 14,
    "event_title": "🌌 AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Nikhil Mehra",
    "student_email": "nikhil.mehra.1418@gehu.ac.in",
    "phone": "+91 95706 11496",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-408",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-14-2688",
    "team_name": "Apex Predators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/nikhil-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1095,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Priyanshu Bisht",
    "student_email": "priyanshu.bisht.150@gehu.ac.in",
    "phone": "+91 95500 10465",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-295",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2095",
    "team_name": "Aero Hawks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/priyanshu-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1096,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ayush Verma",
    "student_email": "ayush.verma.151@gmail.com",
    "phone": "+91 95517 10524",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-302",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2132",
    "team_name": "Neural Squad 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/ayush-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1097,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ananya Rawat",
    "student_email": "ananya.rawat.152@gmail.com",
    "phone": "+91 95534 10583",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-309",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2169",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1098,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Megha Pant",
    "student_email": "megha.pant.153@gehu.ac.in",
    "phone": "+91 95551 10642",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-316",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2206",
    "team_name": "Apex Predators 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/megha-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1099,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Simran Semwal",
    "student_email": "simran.semwal.154@gmail.com",
    "phone": "+91 95568 10701",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-323",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2243",
    "team_name": "Code Crafters 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/simran-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1100,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Nikhil Upadhyay",
    "student_email": "nikhil.upadhyay.155@gmail.com",
    "phone": "+91 95585 10760",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-330",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2280",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1101,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kunal Kargeti",
    "student_email": "kunal.kargeti.156@gehu.ac.in",
    "phone": "+91 95602 10819",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-337",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2317",
    "team_name": "Mountain Hackers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/kunal-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1102,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Pooja Kaur",
    "student_email": "pooja.kaur.157@gmail.com",
    "phone": "+91 95619 10878",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-344",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2354",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/pooja-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1103,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Prerna Tiwari",
    "student_email": "prerna.tiwari.158@gmail.com",
    "phone": "+91 95636 10937",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-351",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2391",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1104,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Sakshi Bhandari",
    "student_email": "sakshi.bhandari.159@gehu.ac.in",
    "phone": "+91 95653 10996",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-358",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2428",
    "team_name": "Cyber Spiders 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/sakshi-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1105,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Rohan Arya",
    "student_email": "rohan.arya.1510@gmail.com",
    "phone": "+91 95670 11055",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-365",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2465",
    "team_name": "Web Slingers 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/rohan-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1106,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kartik Uniyal",
    "student_email": "kartik.uniyal.1511@gmail.com",
    "phone": "+91 95687 11114",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-372",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2502",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1107,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Harsh Bisht",
    "student_email": "harsh.bisht.1512@gehu.ac.in",
    "phone": "+91 95704 11173",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-379",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2539",
    "team_name": "Quantum Net 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/harsh-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1108,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Divya Verma",
    "student_email": "divya.verma.1513@gmail.com",
    "phone": "+91 95721 11232",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-386",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2576",
    "team_name": "Volt Dynamics 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/divya-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1109,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Riya Rawat",
    "student_email": "riya.rawat.1514@gmail.com",
    "phone": "+91 95738 11291",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-393",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2613",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1110,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aman Pant",
    "student_email": "aman.pant.1515@gehu.ac.in",
    "phone": "+91 95755 11350",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-400",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2650",
    "team_name": "Neural Squad 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/aman-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1111,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Gaurav Semwal",
    "student_email": "gaurav.semwal.1516@gmail.com",
    "phone": "+91 95772 11409",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-407",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2687",
    "team_name": "Byte Force 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/gaurav-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1112,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Deepak Upadhyay",
    "student_email": "deepak.upadhyay.1517@gmail.com",
    "phone": "+91 95789 11468",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-414",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2724",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1113,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kavita Kargeti",
    "student_email": "kavita.kargeti.1518@gehu.ac.in",
    "phone": "+91 95806 11527",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-421",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2761",
    "team_name": "Code Crafters 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/kavita-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1114,
    "event_id": 15,
    "event_title": "⚡ Infotsav '26: Annual Flagship Technical Fest",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ishita Kaur",
    "student_email": "ishita.kaur.1519@gmail.com",
    "phone": "+91 95823 11586",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-428",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-15-2798",
    "team_name": "Stark Innovators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/ishita-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T11:30:00.000Z"
  },

  {
    "id": 1115,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Divya Bhatt",
    "student_email": "divya.bhatt.160@gehu.ac.in",
    "phone": "+91 95600 10496",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-308",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2168",
    "team_name": "Neural Squad 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/divya-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1116,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Riya Mehra",
    "student_email": "riya.mehra.161@gmail.com",
    "phone": "+91 95617 10555",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-315",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2205",
    "team_name": "Byte Force 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/riya-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1117,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aman Chauhan",
    "student_email": "aman.chauhan.162@gmail.com",
    "phone": "+91 95634 10614",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-322",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2242",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1118,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Gaurav Singh",
    "student_email": "gaurav.singh.163@gehu.ac.in",
    "phone": "+91 95651 10673",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-329",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2279",
    "team_name": "Code Crafters 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/gaurav-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1119,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Deepak Gairola",
    "student_email": "deepak.gairola.164@gmail.com",
    "phone": "+91 95668 10732",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-336",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2316",
    "team_name": "Stark Innovators 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/deepak-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1120,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kavita Pandey",
    "student_email": "kavita.pandey.165@gmail.com",
    "phone": "+91 95685 10791",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-343",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2353",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1121,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ishita Dhyani",
    "student_email": "ishita.dhyani.166@gehu.ac.in",
    "phone": "+91 95702 10850",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-350",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2390",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/ishita-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1122,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Anjali Kandpal",
    "student_email": "anjali.kandpal.167@gmail.com",
    "phone": "+91 95719 10909",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-357",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2427",
    "team_name": "Spider Byte Team 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/anjali-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1123,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aditya Gusain",
    "student_email": "aditya.gusain.168@gmail.com",
    "phone": "+91 95736 10968",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-364",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2464",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1124,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Siddharth Sharma",
    "student_email": "siddharth.sharma.169@gehu.ac.in",
    "phone": "+91 95753 11027",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-371",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2501",
    "team_name": "Web Slingers 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/siddharth-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1125,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Shreya Negi",
    "student_email": "shreya.negi.1610@gmail.com",
    "phone": "+91 95770 11086",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-378",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2538",
    "team_name": "Himalayan Gliders 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/shreya-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1126,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Sneha Joshi",
    "student_email": "sneha.joshi.1611@gmail.com",
    "phone": "+91 95787 11145",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-385",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2575",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1127,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Tanya Bhatt",
    "student_email": "tanya.bhatt.1612@gehu.ac.in",
    "phone": "+91 95804 11204",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-392",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2612",
    "team_name": "Volt Dynamics 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/tanya-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1128,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Vansh Mehra",
    "student_email": "vansh.mehra.1613@gmail.com",
    "phone": "+91 95821 11263",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-399",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2649",
    "team_name": "Aero Hawks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/vansh-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1129,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Manish Chauhan",
    "student_email": "manish.chauhan.1614@gmail.com",
    "phone": "+91 95838 11322",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-406",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2686",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1130,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Abhishek Singh",
    "student_email": "abhishek.singh.1615@gehu.ac.in",
    "phone": "+91 95855 11381",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-413",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2723",
    "team_name": "Byte Force 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/abhishek-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1131,
    "event_id": 16,
    "event_title": "🏆 Spardha '26: Annual Himalayan Inter-Campus Sports League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Neha Gairola",
    "student_email": "neha.gairola.1616@gmail.com",
    "phone": "+91 95872 11440",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-420",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-16-2760",
    "team_name": "Apex Predators 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/neha-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1132,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Vansh Upadhyay",
    "student_email": "vansh.upadhyay.170@gehu.ac.in",
    "phone": "+91 95700 10527",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-321",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2241",
    "team_name": "Byte Force 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/vansh-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1133,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Manish Kargeti",
    "student_email": "manish.kargeti.171@gmail.com",
    "phone": "+91 95717 10586",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-328",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2278",
    "team_name": "Apex Predators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/manish-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1134,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Abhishek Kaur",
    "student_email": "abhishek.kaur.172@gmail.com",
    "phone": "+91 95734 10645",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-335",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2315",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1135,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Neha Tiwari",
    "student_email": "neha.tiwari.173@gehu.ac.in",
    "phone": "+91 95751 10704",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-342",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2352",
    "team_name": "Stark Innovators 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/neha-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1136,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Komal Bhandari",
    "student_email": "komal.bhandari.174@gmail.com",
    "phone": "+91 95768 10763",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-349",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2389",
    "team_name": "Mountain Hackers 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/komal-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1137,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aarav Arya",
    "student_email": "aarav.arya.175@gmail.com",
    "phone": "+91 95785 10822",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-356",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2426",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1138,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Priyanshu Uniyal",
    "student_email": "priyanshu.uniyal.176@gehu.ac.in",
    "phone": "+91 95802 10881",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-363",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2463",
    "team_name": "Spider Byte Team 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/priyanshu-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1139,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ayush Bisht",
    "student_email": "ayush.bisht.177@gmail.com",
    "phone": "+91 95819 10940",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-370",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2500",
    "team_name": "Cyber Spiders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/ayush-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1140,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ananya Verma",
    "student_email": "ananya.verma.178@gmail.com",
    "phone": "+91 95836 10999",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-377",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2537",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1141,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Megha Rawat",
    "student_email": "megha.rawat.179@gehu.ac.in",
    "phone": "+91 95853 11058",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-384",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2574",
    "team_name": "Himalayan Gliders 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/megha-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1142,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Simran Pant",
    "student_email": "simran.pant.1710@gmail.com",
    "phone": "+91 95870 11117",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-391",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2611",
    "team_name": "Quantum Net 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/simran-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1143,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Nikhil Semwal",
    "student_email": "nikhil.semwal.1711@gmail.com",
    "phone": "+91 95887 11176",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-398",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2648",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1144,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kunal Upadhyay",
    "student_email": "kunal.upadhyay.1712@gehu.ac.in",
    "phone": "+91 95904 11235",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-405",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2685",
    "team_name": "Aero Hawks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/kunal-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1145,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Pooja Kargeti",
    "student_email": "pooja.kargeti.1713@gmail.com",
    "phone": "+91 95921 11294",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-412",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2722",
    "team_name": "Neural Squad 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/pooja-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1146,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Prerna Kaur",
    "student_email": "prerna.kaur.1714@gmail.com",
    "phone": "+91 95938 11353",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-419",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2759",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1147,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Sakshi Tiwari",
    "student_email": "sakshi.tiwari.1715@gehu.ac.in",
    "phone": "+91 95955 11412",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-426",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2796",
    "team_name": "Apex Predators 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/sakshi-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1148,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Rohan Bhandari",
    "student_email": "rohan.bhandari.1716@gmail.com",
    "phone": "+91 95972 11471",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-433",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2833",
    "team_name": "Code Crafters 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/rohan-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1149,
    "event_id": 17,
    "event_title": "🎭 Grafest '26: Bhimtal Winter Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kartik Arya",
    "student_email": "kartik.arya.1717@gmail.com",
    "phone": "+91 95989 11530",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-440",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-17-2870",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1150,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Pooja Pandey",
    "student_email": "pooja.pandey.180@gehu.ac.in",
    "phone": "+91 95800 10558",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-334",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2314",
    "team_name": "Apex Predators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/pooja-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1151,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Prerna Dhyani",
    "student_email": "prerna.dhyani.181@gmail.com",
    "phone": "+91 95817 10617",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-341",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2351",
    "team_name": "Code Crafters 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/prerna-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1152,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Sakshi Kandpal",
    "student_email": "sakshi.kandpal.182@gmail.com",
    "phone": "+91 95834 10676",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-348",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2388",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1153,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Rohan Gusain",
    "student_email": "rohan.gusain.183@gehu.ac.in",
    "phone": "+91 95851 10735",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-355",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2425",
    "team_name": "Mountain Hackers 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/rohan-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1154,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kartik Sharma",
    "student_email": "kartik.sharma.184@gmail.com",
    "phone": "+91 95868 10794",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-362",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2462",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/kartik-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1155,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Harsh Negi",
    "student_email": "harsh.negi.185@gmail.com",
    "phone": "+91 95885 10853",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-369",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2499",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1156,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Divya Joshi",
    "student_email": "divya.joshi.186@gehu.ac.in",
    "phone": "+91 95902 10912",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-376",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2536",
    "team_name": "Cyber Spiders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/divya-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1157,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Riya Bhatt",
    "student_email": "riya.bhatt.187@gmail.com",
    "phone": "+91 95919 10971",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-383",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2573",
    "team_name": "Web Slingers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/riya-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1158,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aman Mehra",
    "student_email": "aman.mehra.188@gmail.com",
    "phone": "+91 95936 11030",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-390",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2610",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1159,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Gaurav Chauhan",
    "student_email": "gaurav.chauhan.189@gehu.ac.in",
    "phone": "+91 95953 11089",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-397",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2647",
    "team_name": "Quantum Net 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/gaurav-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1160,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Deepak Singh",
    "student_email": "deepak.singh.1810@gmail.com",
    "phone": "+91 95970 11148",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-404",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2684",
    "team_name": "Volt Dynamics 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/deepak-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1161,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kavita Gairola",
    "student_email": "kavita.gairola.1811@gmail.com",
    "phone": "+91 95987 11207",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-411",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2721",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1162,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ishita Pandey",
    "student_email": "ishita.pandey.1812@gehu.ac.in",
    "phone": "+91 96004 11266",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-418",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2758",
    "team_name": "Neural Squad 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/ishita-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1163,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Anjali Dhyani",
    "student_email": "anjali.dhyani.1813@gmail.com",
    "phone": "+91 96021 11325",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-425",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2795",
    "team_name": "Byte Force 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/anjali-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1164,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aditya Kandpal",
    "student_email": "aditya.kandpal.1814@gmail.com",
    "phone": "+91 96038 11384",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-432",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2832",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1165,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Siddharth Gusain",
    "student_email": "siddharth.gusain.1815@gehu.ac.in",
    "phone": "+91 96055 11443",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-439",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2869",
    "team_name": "Code Crafters 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/siddharth-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1166,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Shreya Sharma",
    "student_email": "shreya.sharma.1816@gmail.com",
    "phone": "+91 96072 11502",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-446",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2906",
    "team_name": "Stark Innovators 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/shreya-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1167,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Sneha Negi",
    "student_email": "sneha.negi.1817@gmail.com",
    "phone": "+91 96089 11561",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-453",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2943",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1168,
    "event_id": 18,
    "event_title": "🎨 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Tanya Joshi",
    "student_email": "tanya.joshi.1818@gehu.ac.in",
    "phone": "+91 96106 11620",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-460",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-18-2980",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/tanya-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1169,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Anjali Arya",
    "student_email": "anjali.arya.190@gehu.ac.in",
    "phone": "+91 95900 10589",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-347",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2387",
    "team_name": "Code Crafters 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/anjali-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1170,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aditya Uniyal",
    "student_email": "aditya.uniyal.191@gmail.com",
    "phone": "+91 95917 10648",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-354",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2424",
    "team_name": "Stark Innovators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/aditya-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1171,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Siddharth Bisht",
    "student_email": "siddharth.bisht.192@gmail.com",
    "phone": "+91 95934 10707",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-361",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2461",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1172,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Shreya Verma",
    "student_email": "shreya.verma.193@gehu.ac.in",
    "phone": "+91 95951 10766",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-368",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2498",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/shreya-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1173,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Sneha Rawat",
    "student_email": "sneha.rawat.194@gmail.com",
    "phone": "+91 95968 10825",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-375",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2535",
    "team_name": "Spider Byte Team 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/sneha-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1174,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Tanya Pant",
    "student_email": "tanya.pant.195@gmail.com",
    "phone": "+91 95985 10884",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-382",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2572",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1175,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Vansh Semwal",
    "student_email": "vansh.semwal.196@gehu.ac.in",
    "phone": "+91 96002 10943",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-389",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2609",
    "team_name": "Web Slingers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/vansh-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1176,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Manish Upadhyay",
    "student_email": "manish.upadhyay.197@gmail.com",
    "phone": "+91 96019 11002",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-396",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2646",
    "team_name": "Himalayan Gliders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/manish-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1177,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Abhishek Kargeti",
    "student_email": "abhishek.kargeti.198@gmail.com",
    "phone": "+91 96036 11061",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-403",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2683",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1178,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Neha Kaur",
    "student_email": "neha.kaur.199@gehu.ac.in",
    "phone": "+91 96053 11120",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-410",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2720",
    "team_name": "Volt Dynamics 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/neha-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1179,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Komal Tiwari",
    "student_email": "komal.tiwari.1910@gmail.com",
    "phone": "+91 96070 11179",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-417",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2757",
    "team_name": "Aero Hawks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/komal-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1180,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aarav Bhandari",
    "student_email": "aarav.bhandari.1911@gmail.com",
    "phone": "+91 96087 11238",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-424",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2794",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1181,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Priyanshu Arya",
    "student_email": "priyanshu.arya.1912@gehu.ac.in",
    "phone": "+91 96104 11297",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-431",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2831",
    "team_name": "Byte Force 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/priyanshu-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1182,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ayush Uniyal",
    "student_email": "ayush.uniyal.1913@gmail.com",
    "phone": "+91 96121 11356",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-438",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2868",
    "team_name": "Apex Predators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/ayush-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1183,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ananya Bisht",
    "student_email": "ananya.bisht.1914@gmail.com",
    "phone": "+91 96138 11415",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-445",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2905",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1184,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Megha Verma",
    "student_email": "megha.verma.1915@gehu.ac.in",
    "phone": "+91 96155 11474",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-452",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2942",
    "team_name": "Stark Innovators 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/megha-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1185,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Simran Rawat",
    "student_email": "simran.rawat.1916@gmail.com",
    "phone": "+91 96172 11533",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-459",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-2979",
    "team_name": "Mountain Hackers 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/simran-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1186,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Nikhil Pant",
    "student_email": "nikhil.pant.1917@gmail.com",
    "phone": "+91 96189 11592",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-466",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-3016",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1187,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kunal Semwal",
    "student_email": "kunal.semwal.1918@gehu.ac.in",
    "phone": "+91 96206 11651",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-473",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-3053",
    "team_name": "Spider Byte Team 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/kunal-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1188,
    "event_id": 19,
    "event_title": "🚁 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Pooja Upadhyay",
    "student_email": "pooja.upadhyay.1919@gmail.com",
    "phone": "+91 96223 11710",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-480",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-19-3090",
    "team_name": "Cyber Spiders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/pooja-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T11:30:00.000Z"
  },

  {
    "id": 1189,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ayush Negi",
    "student_email": "ayush.negi.330@gehu.ac.in",
    "phone": "+91 97300 11023",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-529",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3409",
    "team_name": "Stark Innovators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/ayush-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1190,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Ananya Joshi",
    "student_email": "ananya.joshi.331@gmail.com",
    "phone": "+91 97317 11082",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-536",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3446",
    "team_name": "Mountain Hackers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/ananya-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1191,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Megha Bhatt",
    "student_email": "megha.bhatt.332@gmail.com",
    "phone": "+91 97334 11141",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-543",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3483",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1192,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Simran Mehra",
    "student_email": "simran.mehra.333@gehu.ac.in",
    "phone": "+91 97351 11200",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-550",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3520",
    "team_name": "Spider Byte Team 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/simran-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1193,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Nikhil Chauhan",
    "student_email": "nikhil.chauhan.334@gmail.com",
    "phone": "+91 97368 11259",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-557",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3557",
    "team_name": "Cyber Spiders 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/nikhil-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1194,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kunal Singh",
    "student_email": "kunal.singh.335@gmail.com",
    "phone": "+91 97385 11318",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-564",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3594",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1195,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Pooja Gairola",
    "student_email": "pooja.gairola.336@gehu.ac.in",
    "phone": "+91 97402 11377",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-571",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3631",
    "team_name": "Himalayan Gliders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/pooja-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1196,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Prerna Pandey",
    "student_email": "prerna.pandey.337@gmail.com",
    "phone": "+91 97419 11436",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-BHM-578",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3668",
    "team_name": "Quantum Net 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/prerna-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1197,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Sakshi Dhyani",
    "student_email": "sakshi.dhyani.338@gmail.com",
    "phone": "+91 97436 11495",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-585",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3705",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1198,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Rohan Kandpal",
    "student_email": "rohan.kandpal.339@gehu.ac.in",
    "phone": "+91 97453 11554",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-BHM-592",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3742",
    "team_name": "Aero Hawks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/rohan-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1199,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kartik Gusain",
    "student_email": "kartik.gusain.3310@gmail.com",
    "phone": "+91 97470 11613",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-599",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3779",
    "team_name": "Neural Squad 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/kartik-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1200,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Harsh Sharma",
    "student_email": "harsh.sharma.3311@gmail.com",
    "phone": "+91 97487 11672",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-BHM-606",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3816",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1201,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Divya Negi",
    "student_email": "divya.negi.3312@gehu.ac.in",
    "phone": "+91 97504 11731",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-BHM-613",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3853",
    "team_name": "Apex Predators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/divya-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1202,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Riya Joshi",
    "student_email": "riya.joshi.3313@gmail.com",
    "phone": "+91 97521 11790",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-BHM-620",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3890",
    "team_name": "Code Crafters 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/riya-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1203,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Aman Bhatt",
    "student_email": "aman.bhatt.3314@gmail.com",
    "phone": "+91 97538 11849",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-BHM-627",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3927",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1204,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Gaurav Mehra",
    "student_email": "gaurav.mehra.3315@gehu.ac.in",
    "phone": "+91 97555 11908",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-BHM-634",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-3964",
    "team_name": "Mountain Hackers 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/gaurav-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1205,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Deepak Chauhan",
    "student_email": "deepak.chauhan.3316@gmail.com",
    "phone": "+91 97572 11967",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-BHM-641",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-4001",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/deepak-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1206,
    "event_id": 33,
    "event_title": "INNOVATE 1.0 – AWS Ideathon",
    "event_category": "Technology / Innovation / Ideathon",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "student_name": "Kavita Singh",
    "student_email": "kavita.singh.3317@gmail.com",
    "phone": "+91 97589 12026",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-BHM-648",
    "campus": "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    "ticket_code": "SPIDER-BHM-33-4038",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1207,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Riya Pant",
    "student_email": "riya.pant.40@gehu.ac.in",
    "phone": "+91 94400 10124",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-152",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1292",
    "team_name": "Mountain Hackers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/riya-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1208,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Aman Semwal",
    "student_email": "aman.semwal.41@gmail.com",
    "phone": "+91 94417 10183",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-HAL-159",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1329",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/aman-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1209,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Gaurav Upadhyay",
    "student_email": "gaurav.upadhyay.42@gmail.com",
    "phone": "+91 94434 10242",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-HAL-166",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1366",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1210,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Deepak Kargeti",
    "student_email": "deepak.kargeti.43@gehu.ac.in",
    "phone": "+91 94451 10301",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-HAL-173",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1403",
    "team_name": "Cyber Spiders 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/deepak-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1211,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Kavita Kaur",
    "student_email": "kavita.kaur.44@gmail.com",
    "phone": "+91 94468 10360",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-HAL-180",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1440",
    "team_name": "Web Slingers 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/kavita-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1212,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Ishita Tiwari",
    "student_email": "ishita.tiwari.45@gmail.com",
    "phone": "+91 94485 10419",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-187",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1477",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1213,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Anjali Bhandari",
    "student_email": "anjali.bhandari.46@gehu.ac.in",
    "phone": "+91 94502 10478",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-HAL-194",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1514",
    "team_name": "Quantum Net 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/anjali-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1214,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Aditya Arya",
    "student_email": "aditya.arya.47@gmail.com",
    "phone": "+91 94519 10537",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-201",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1551",
    "team_name": "Volt Dynamics 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/aditya-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1215,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Siddharth Uniyal",
    "student_email": "siddharth.uniyal.48@gmail.com",
    "phone": "+91 94536 10596",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-HAL-208",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1588",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1216,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Shreya Bisht",
    "student_email": "shreya.bisht.49@gehu.ac.in",
    "phone": "+91 94553 10655",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-215",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1625",
    "team_name": "Neural Squad 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/shreya-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1217,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Sneha Verma",
    "student_email": "sneha.verma.410@gmail.com",
    "phone": "+91 94570 10714",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-HAL-222",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1662",
    "team_name": "Byte Force 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/sneha-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1218,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Tanya Rawat",
    "student_email": "tanya.rawat.411@gmail.com",
    "phone": "+91 94587 10773",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-229",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1699",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1219,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Vansh Pant",
    "student_email": "vansh.pant.412@gehu.ac.in",
    "phone": "+91 94604 10832",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-HAL-236",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1736",
    "team_name": "Code Crafters 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/vansh-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1220,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Manish Semwal",
    "student_email": "manish.semwal.413@gmail.com",
    "phone": "+91 94621 10891",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-HAL-243",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1773",
    "team_name": "Stark Innovators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/manish-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1221,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Abhishek Upadhyay",
    "student_email": "abhishek.upadhyay.414@gmail.com",
    "phone": "+91 94638 10950",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-HAL-250",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1810",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1222,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Neha Kargeti",
    "student_email": "neha.kargeti.415@gehu.ac.in",
    "phone": "+91 94655 11009",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-HAL-257",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1847",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/neha-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1223,
    "event_id": 4,
    "event_title": "⚡ Watch The Code: National Level Hackathon",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Komal Kaur",
    "student_email": "komal.kaur.416@gmail.com",
    "phone": "+91 94672 11068",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-264",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-4-1884",
    "team_name": "Spider Byte Team 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/komal-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1224,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Manish Singh",
    "student_email": "manish.singh.50@gehu.ac.in",
    "phone": "+91 94500 10155",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-HAL-165",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1365",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/manish-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1225,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Abhishek Gairola",
    "student_email": "abhishek.gairola.51@gmail.com",
    "phone": "+91 94517 10214",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-HAL-172",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1402",
    "team_name": "Spider Byte Team 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/abhishek-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1226,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Neha Pandey",
    "student_email": "neha.pandey.52@gmail.com",
    "phone": "+91 94534 10273",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-HAL-179",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1439",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1227,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Komal Dhyani",
    "student_email": "komal.dhyani.53@gehu.ac.in",
    "phone": "+91 94551 10332",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-HAL-186",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1476",
    "team_name": "Web Slingers 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/komal-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1228,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Aarav Kandpal",
    "student_email": "aarav.kandpal.54@gmail.com",
    "phone": "+91 94568 10391",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-193",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1513",
    "team_name": "Himalayan Gliders 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/aarav-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1229,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Priyanshu Gusain",
    "student_email": "priyanshu.gusain.55@gmail.com",
    "phone": "+91 94585 10450",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-HAL-200",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1550",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1230,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Ayush Sharma",
    "student_email": "ayush.sharma.56@gehu.ac.in",
    "phone": "+91 94602 10509",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-207",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1587",
    "team_name": "Volt Dynamics 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/ayush-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1231,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Ananya Negi",
    "student_email": "ananya.negi.57@gmail.com",
    "phone": "+91 94619 10568",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-HAL-214",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1624",
    "team_name": "Aero Hawks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/ananya-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1232,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Megha Joshi",
    "student_email": "megha.joshi.58@gmail.com",
    "phone": "+91 94636 10627",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-221",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1661",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1233,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Simran Bhatt",
    "student_email": "simran.bhatt.59@gehu.ac.in",
    "phone": "+91 94653 10686",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-HAL-228",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1698",
    "team_name": "Byte Force 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/simran-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1234,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Nikhil Mehra",
    "student_email": "nikhil.mehra.510@gmail.com",
    "phone": "+91 94670 10745",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-235",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1735",
    "team_name": "Apex Predators 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/nikhil-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1235,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Kunal Chauhan",
    "student_email": "kunal.chauhan.511@gmail.com",
    "phone": "+91 94687 10804",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-HAL-242",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1772",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1236,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Pooja Singh",
    "student_email": "pooja.singh.512@gehu.ac.in",
    "phone": "+91 94704 10863",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-HAL-249",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1809",
    "team_name": "Stark Innovators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/pooja-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1237,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Prerna Gairola",
    "student_email": "prerna.gairola.513@gmail.com",
    "phone": "+91 94721 10922",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-HAL-256",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1846",
    "team_name": "Mountain Hackers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/prerna-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1238,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Sakshi Pandey",
    "student_email": "sakshi.pandey.514@gmail.com",
    "phone": "+91 94738 10981",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-HAL-263",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1883",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1239,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Rohan Dhyani",
    "student_email": "rohan.dhyani.515@gehu.ac.in",
    "phone": "+91 94755 11040",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-270",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1920",
    "team_name": "Spider Byte Team 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/rohan-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1240,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Kartik Kandpal",
    "student_email": "kartik.kandpal.516@gmail.com",
    "phone": "+91 94772 11099",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-HAL-277",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1957",
    "team_name": "Cyber Spiders 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/kartik-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1241,
    "event_id": 5,
    "event_title": "🎭 Web-Head Comic, Animation & Graphic Arts Battle",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Harsh Gusain",
    "student_email": "harsh.gusain.517@gmail.com",
    "phone": "+91 94789 11158",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-284",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-5-1994",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1242,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Prerna Tiwari",
    "student_email": "prerna.tiwari.60@gehu.ac.in",
    "phone": "+91 94600 10186",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-HAL-178",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1438",
    "team_name": "Spider Byte Team 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/prerna-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1243,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Sakshi Bhandari",
    "student_email": "sakshi.bhandari.61@gmail.com",
    "phone": "+91 94617 10245",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-HAL-185",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1475",
    "team_name": "Cyber Spiders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/sakshi-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1244,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Rohan Arya",
    "student_email": "rohan.arya.62@gmail.com",
    "phone": "+91 94634 10304",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-HAL-192",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1512",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1245,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Kartik Uniyal",
    "student_email": "kartik.uniyal.63@gehu.ac.in",
    "phone": "+91 94651 10363",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-199",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1549",
    "team_name": "Himalayan Gliders 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/kartik-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1246,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Harsh Bisht",
    "student_email": "harsh.bisht.64@gmail.com",
    "phone": "+91 94668 10422",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-HAL-206",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1586",
    "team_name": "Quantum Net 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/harsh-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1247,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Divya Verma",
    "student_email": "divya.verma.65@gmail.com",
    "phone": "+91 94685 10481",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-213",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1623",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1248,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Riya Rawat",
    "student_email": "riya.rawat.66@gehu.ac.in",
    "phone": "+91 94702 10540",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-HAL-220",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1660",
    "team_name": "Aero Hawks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/riya-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1249,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Aman Pant",
    "student_email": "aman.pant.67@gmail.com",
    "phone": "+91 94719 10599",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-227",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1697",
    "team_name": "Neural Squad 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/aman-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1250,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Gaurav Semwal",
    "student_email": "gaurav.semwal.68@gmail.com",
    "phone": "+91 94736 10658",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-HAL-234",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1734",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1251,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Deepak Upadhyay",
    "student_email": "deepak.upadhyay.69@gehu.ac.in",
    "phone": "+91 94753 10717",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-241",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1771",
    "team_name": "Apex Predators 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/deepak-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1252,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Kavita Kargeti",
    "student_email": "kavita.kargeti.610@gmail.com",
    "phone": "+91 94770 10776",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-HAL-248",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1808",
    "team_name": "Code Crafters 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/kavita-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1253,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Ishita Kaur",
    "student_email": "ishita.kaur.611@gmail.com",
    "phone": "+91 94787 10835",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-HAL-255",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1845",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1254,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Anjali Tiwari",
    "student_email": "anjali.tiwari.612@gehu.ac.in",
    "phone": "+91 94804 10894",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-HAL-262",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1882",
    "team_name": "Mountain Hackers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/anjali-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1255,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Aditya Bhandari",
    "student_email": "aditya.bhandari.613@gmail.com",
    "phone": "+91 94821 10953",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-HAL-269",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1919",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/aditya-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1256,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Siddharth Arya",
    "student_email": "siddharth.arya.614@gmail.com",
    "phone": "+91 94838 11012",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-276",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1956",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1257,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Shreya Uniyal",
    "student_email": "shreya.uniyal.615@gehu.ac.in",
    "phone": "+91 94855 11071",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-HAL-283",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-1993",
    "team_name": "Cyber Spiders 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/shreya-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1258,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Sneha Bisht",
    "student_email": "sneha.bisht.616@gmail.com",
    "phone": "+91 94872 11130",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-290",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-2030",
    "team_name": "Web Slingers 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/sneha-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1259,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Tanya Verma",
    "student_email": "tanya.verma.617@gmail.com",
    "phone": "+91 94889 11189",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-HAL-297",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-2067",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1260,
    "event_id": 6,
    "event_title": "🔥 Spider-Man 2099 Neon EDM Carnival",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Vansh Rawat",
    "student_email": "vansh.rawat.618@gehu.ac.in",
    "phone": "+91 94906 11248",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-304",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-6-2104",
    "team_name": "Quantum Net 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/vansh-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1261,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aditya Gusain",
    "student_email": "aditya.gusain.70@gehu.ac.in",
    "phone": "+91 94700 10217",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DDN-191",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-1511",
    "team_name": "Cyber Spiders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/aditya-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1262,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Siddharth Sharma",
    "student_email": "siddharth.sharma.71@gmail.com",
    "phone": "+91 94717 10276",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DDN-198",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-1548",
    "team_name": "Web Slingers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/siddharth-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1263,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Shreya Negi",
    "student_email": "shreya.negi.72@gmail.com",
    "phone": "+91 94734 10335",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-205",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-1585",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1264,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Sneha Joshi",
    "student_email": "sneha.joshi.73@gehu.ac.in",
    "phone": "+91 94751 10394",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DDN-212",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-1622",
    "team_name": "Quantum Net 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/sneha-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1265,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Tanya Bhatt",
    "student_email": "tanya.bhatt.74@gmail.com",
    "phone": "+91 94768 10453",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-219",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-1659",
    "team_name": "Volt Dynamics 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/tanya-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1266,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Vansh Mehra",
    "student_email": "vansh.mehra.75@gmail.com",
    "phone": "+91 94785 10512",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-226",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-1696",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1267,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Manish Chauhan",
    "student_email": "manish.chauhan.76@gehu.ac.in",
    "phone": "+91 94802 10571",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-233",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-1733",
    "team_name": "Neural Squad 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/manish-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1268,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Abhishek Singh",
    "student_email": "abhishek.singh.77@gmail.com",
    "phone": "+91 94819 10630",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-240",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-1770",
    "team_name": "Byte Force 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/abhishek-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1269,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Neha Gairola",
    "student_email": "neha.gairola.78@gmail.com",
    "phone": "+91 94836 10689",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-247",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-1807",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1270,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Komal Pandey",
    "student_email": "komal.pandey.79@gehu.ac.in",
    "phone": "+91 94853 10748",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-254",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-1844",
    "team_name": "Code Crafters 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/komal-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1271,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aarav Dhyani",
    "student_email": "aarav.dhyani.710@gmail.com",
    "phone": "+91 94870 10807",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DDN-261",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-1881",
    "team_name": "Stark Innovators 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/aarav-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1272,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Priyanshu Kandpal",
    "student_email": "priyanshu.kandpal.711@gmail.com",
    "phone": "+91 94887 10866",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DDN-268",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-1918",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1273,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Ayush Gusain",
    "student_email": "ayush.gusain.712@gehu.ac.in",
    "phone": "+91 94904 10925",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DDN-275",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-1955",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/ayush-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1274,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Ananya Sharma",
    "student_email": "ananya.sharma.713@gmail.com",
    "phone": "+91 94921 10984",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-282",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-1992",
    "team_name": "Spider Byte Team 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/ananya-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1275,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Megha Negi",
    "student_email": "megha.negi.714@gmail.com",
    "phone": "+91 94938 11043",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DDN-289",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-2029",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1276,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Simran Joshi",
    "student_email": "simran.joshi.715@gehu.ac.in",
    "phone": "+91 94955 11102",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-296",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-2066",
    "team_name": "Web Slingers 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/simran-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1277,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Nikhil Bhatt",
    "student_email": "nikhil.bhatt.716@gmail.com",
    "phone": "+91 94972 11161",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-303",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-2103",
    "team_name": "Himalayan Gliders 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/nikhil-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1278,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kunal Mehra",
    "student_email": "kunal.mehra.717@gmail.com",
    "phone": "+91 94989 11220",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-310",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-2140",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1279,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Pooja Chauhan",
    "student_email": "pooja.chauhan.718@gehu.ac.in",
    "phone": "+91 95006 11279",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-317",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-2177",
    "team_name": "Volt Dynamics 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/pooja-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1280,
    "event_id": 7,
    "event_title": "🏆 Inter-Campus Spider-Athletics & Track League",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Prerna Singh",
    "student_email": "prerna.singh.719@gmail.com",
    "phone": "+91 95023 11338",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-324",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-7-2214",
    "team_name": "Aero Hawks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/prerna-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T11:30:00.000Z"
  },

  {
    "id": 1281,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Ananya Verma",
    "student_email": "ananya.verma.80@gehu.ac.in",
    "phone": "+91 94800 10248",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DDN-204",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-1584",
    "team_name": "Web Slingers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/ananya-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1282,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Megha Rawat",
    "student_email": "megha.rawat.81@gmail.com",
    "phone": "+91 94817 10307",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-211",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-1621",
    "team_name": "Himalayan Gliders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/megha-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1283,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Simran Pant",
    "student_email": "simran.pant.82@gmail.com",
    "phone": "+91 94834 10366",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DDN-218",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-1658",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1284,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Nikhil Semwal",
    "student_email": "nikhil.semwal.83@gehu.ac.in",
    "phone": "+91 94851 10425",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-225",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-1695",
    "team_name": "Volt Dynamics 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/nikhil-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1285,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kunal Upadhyay",
    "student_email": "kunal.upadhyay.84@gmail.com",
    "phone": "+91 94868 10484",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-232",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-1732",
    "team_name": "Aero Hawks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/kunal-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1286,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Pooja Kargeti",
    "student_email": "pooja.kargeti.85@gmail.com",
    "phone": "+91 94885 10543",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-239",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-1769",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1287,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Prerna Kaur",
    "student_email": "prerna.kaur.86@gehu.ac.in",
    "phone": "+91 94902 10602",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-246",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-1806",
    "team_name": "Byte Force 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/prerna-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1288,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Sakshi Tiwari",
    "student_email": "sakshi.tiwari.87@gmail.com",
    "phone": "+91 94919 10661",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-253",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-1843",
    "team_name": "Apex Predators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/sakshi-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1289,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Rohan Bhandari",
    "student_email": "rohan.bhandari.88@gmail.com",
    "phone": "+91 94936 10720",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-260",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-1880",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1290,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kartik Arya",
    "student_email": "kartik.arya.89@gehu.ac.in",
    "phone": "+91 94953 10779",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DDN-267",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-1917",
    "team_name": "Stark Innovators 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/kartik-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1291,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Harsh Uniyal",
    "student_email": "harsh.uniyal.810@gmail.com",
    "phone": "+91 94970 10838",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DDN-274",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-1954",
    "team_name": "Mountain Hackers 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/harsh-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1292,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Divya Bisht",
    "student_email": "divya.bisht.811@gmail.com",
    "phone": "+91 94987 10897",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DDN-281",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-1991",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1293,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Riya Verma",
    "student_email": "riya.verma.812@gehu.ac.in",
    "phone": "+91 95004 10956",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-288",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-2028",
    "team_name": "Spider Byte Team 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/riya-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1294,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aman Rawat",
    "student_email": "aman.rawat.813@gmail.com",
    "phone": "+91 95021 11015",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DDN-295",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-2065",
    "team_name": "Cyber Spiders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/aman-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1295,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Gaurav Pant",
    "student_email": "gaurav.pant.814@gmail.com",
    "phone": "+91 95038 11074",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-302",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-2102",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1296,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Deepak Semwal",
    "student_email": "deepak.semwal.815@gehu.ac.in",
    "phone": "+91 95055 11133",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-309",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-2139",
    "team_name": "Himalayan Gliders 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/deepak-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1297,
    "event_id": 8,
    "event_title": "🧬 Oscorp Genetics & Bio-Tech Summit 2026",
    "event_category": "Academic",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kavita Upadhyay",
    "student_email": "kavita.upadhyay.816@gmail.com",
    "phone": "+91 95072 11192",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-316",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-8-2176",
    "team_name": "Quantum Net 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/kavita-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1298,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aman Mehra",
    "student_email": "aman.mehra.90@gehu.ac.in",
    "phone": "+91 94900 10279",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-217",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-1657",
    "team_name": "Himalayan Gliders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/aman-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1299,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Gaurav Chauhan",
    "student_email": "gaurav.chauhan.91@gmail.com",
    "phone": "+91 94917 10338",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DDN-224",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-1694",
    "team_name": "Quantum Net 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/gaurav-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1300,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Deepak Singh",
    "student_email": "deepak.singh.92@gmail.com",
    "phone": "+91 94934 10397",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-231",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-1731",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1301,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kavita Gairola",
    "student_email": "kavita.gairola.93@gehu.ac.in",
    "phone": "+91 94951 10456",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-238",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-1768",
    "team_name": "Aero Hawks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/kavita-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1302,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Ishita Pandey",
    "student_email": "ishita.pandey.94@gmail.com",
    "phone": "+91 94968 10515",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-245",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-1805",
    "team_name": "Neural Squad 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/ishita-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1303,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Anjali Dhyani",
    "student_email": "anjali.dhyani.95@gmail.com",
    "phone": "+91 94985 10574",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-252",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-1842",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1304,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aditya Kandpal",
    "student_email": "aditya.kandpal.96@gehu.ac.in",
    "phone": "+91 95002 10633",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-259",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-1879",
    "team_name": "Apex Predators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/aditya-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1305,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Siddharth Gusain",
    "student_email": "siddharth.gusain.97@gmail.com",
    "phone": "+91 95019 10692",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-266",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-1916",
    "team_name": "Code Crafters 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/siddharth-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1306,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Shreya Sharma",
    "student_email": "shreya.sharma.98@gmail.com",
    "phone": "+91 95036 10751",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DDN-273",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-1953",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1307,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Sneha Negi",
    "student_email": "sneha.negi.99@gehu.ac.in",
    "phone": "+91 95053 10810",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DDN-280",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-1990",
    "team_name": "Mountain Hackers 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/sneha-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1308,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Tanya Joshi",
    "student_email": "tanya.joshi.910@gmail.com",
    "phone": "+91 95070 10869",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DDN-287",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-2027",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/tanya-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1309,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Vansh Bhatt",
    "student_email": "vansh.bhatt.911@gmail.com",
    "phone": "+91 95087 10928",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-294",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-2064",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1310,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Manish Mehra",
    "student_email": "manish.mehra.912@gehu.ac.in",
    "phone": "+91 95104 10987",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DDN-301",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-2101",
    "team_name": "Cyber Spiders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/manish-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1311,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Abhishek Chauhan",
    "student_email": "abhishek.chauhan.913@gmail.com",
    "phone": "+91 95121 11046",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-308",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-2138",
    "team_name": "Web Slingers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/abhishek-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1312,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Neha Singh",
    "student_email": "neha.singh.914@gmail.com",
    "phone": "+91 95138 11105",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-315",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-2175",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1313,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Komal Gairola",
    "student_email": "komal.gairola.915@gehu.ac.in",
    "phone": "+91 95155 11164",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-322",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-2212",
    "team_name": "Quantum Net 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/komal-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1314,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aarav Pandey",
    "student_email": "aarav.pandey.916@gmail.com",
    "phone": "+91 95172 11223",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-329",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-2249",
    "team_name": "Volt Dynamics 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/aarav-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1315,
    "event_id": 9,
    "event_title": "🚀 Grafest '26: The Web-Verse Mega Cultural Fest",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Priyanshu Dhyani",
    "student_email": "priyanshu.dhyani.917@gmail.com",
    "phone": "+91 95189 11282",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-336",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-9-2286",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1316,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Abhishek Kargeti",
    "student_email": "abhishek.kargeti.220@gehu.ac.in",
    "phone": "+91 96200 10682",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DDN-386",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-2606",
    "team_name": "Quantum Net 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/abhishek-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1317,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Neha Kaur",
    "student_email": "neha.kaur.221@gmail.com",
    "phone": "+91 96217 10741",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-393",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-2643",
    "team_name": "Volt Dynamics 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/neha-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1318,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Komal Tiwari",
    "student_email": "komal.tiwari.222@gmail.com",
    "phone": "+91 96234 10800",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-400",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-2680",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1319,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aarav Bhandari",
    "student_email": "aarav.bhandari.223@gehu.ac.in",
    "phone": "+91 96251 10859",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-407",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-2717",
    "team_name": "Neural Squad 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/aarav-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1320,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Priyanshu Arya",
    "student_email": "priyanshu.arya.224@gmail.com",
    "phone": "+91 96268 10918",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-414",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-2754",
    "team_name": "Byte Force 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/priyanshu-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1321,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Ayush Uniyal",
    "student_email": "ayush.uniyal.225@gmail.com",
    "phone": "+91 96285 10977",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-421",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-2791",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1322,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Ananya Bisht",
    "student_email": "ananya.bisht.226@gehu.ac.in",
    "phone": "+91 96302 11036",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-428",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-2828",
    "team_name": "Code Crafters 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/ananya-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1323,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Megha Verma",
    "student_email": "megha.verma.227@gmail.com",
    "phone": "+91 96319 11095",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DDN-435",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-2865",
    "team_name": "Stark Innovators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/megha-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1324,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Simran Rawat",
    "student_email": "simran.rawat.228@gmail.com",
    "phone": "+91 96336 11154",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DDN-442",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-2902",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1325,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Nikhil Pant",
    "student_email": "nikhil.pant.229@gehu.ac.in",
    "phone": "+91 96353 11213",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DDN-449",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-2939",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/nikhil-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1326,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kunal Semwal",
    "student_email": "kunal.semwal.2210@gmail.com",
    "phone": "+91 96370 11272",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-456",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-2976",
    "team_name": "Spider Byte Team 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/kunal-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1327,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Pooja Upadhyay",
    "student_email": "pooja.upadhyay.2211@gmail.com",
    "phone": "+91 96387 11331",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DDN-463",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-3013",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1328,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Prerna Kargeti",
    "student_email": "prerna.kargeti.2212@gehu.ac.in",
    "phone": "+91 96404 11390",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-470",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-3050",
    "team_name": "Web Slingers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/prerna-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1329,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Sakshi Kaur",
    "student_email": "sakshi.kaur.2213@gmail.com",
    "phone": "+91 96421 11449",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-477",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-3087",
    "team_name": "Himalayan Gliders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/sakshi-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1330,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Rohan Tiwari",
    "student_email": "rohan.tiwari.2214@gmail.com",
    "phone": "+91 96438 11508",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-484",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-3124",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1331,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kartik Bhandari",
    "student_email": "kartik.bhandari.2215@gehu.ac.in",
    "phone": "+91 96455 11567",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-491",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-3161",
    "team_name": "Volt Dynamics 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/kartik-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1332,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Harsh Arya",
    "student_email": "harsh.arya.2216@gmail.com",
    "phone": "+91 96472 11626",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-498",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-3198",
    "team_name": "Aero Hawks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/harsh-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1333,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Divya Uniyal",
    "student_email": "divya.uniyal.2217@gmail.com",
    "phone": "+91 96489 11685",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-505",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-3235",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1334,
    "event_id": 22,
    "event_title": "Smart India Hackathon (SIH)",
    "event_category": "Hackathon / Technical Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Riya Bisht",
    "student_email": "riya.bisht.2218@gehu.ac.in",
    "phone": "+91 96506 11744",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DDN-512",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-22-3272",
    "team_name": "Byte Force 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/riya-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1335,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Sakshi Dhyani",
    "student_email": "sakshi.dhyani.230@gehu.ac.in",
    "phone": "+91 96300 10713",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-399",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-2679",
    "team_name": "Volt Dynamics 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/sakshi-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1336,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Rohan Kandpal",
    "student_email": "rohan.kandpal.231@gmail.com",
    "phone": "+91 96317 10772",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-406",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-2716",
    "team_name": "Aero Hawks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/rohan-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1337,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kartik Gusain",
    "student_email": "kartik.gusain.232@gmail.com",
    "phone": "+91 96334 10831",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-413",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-2753",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1338,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Harsh Sharma",
    "student_email": "harsh.sharma.233@gehu.ac.in",
    "phone": "+91 96351 10890",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-420",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-2790",
    "team_name": "Byte Force 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/harsh-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1339,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Divya Negi",
    "student_email": "divya.negi.234@gmail.com",
    "phone": "+91 96368 10949",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-427",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-2827",
    "team_name": "Apex Predators 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/divya-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1340,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Riya Joshi",
    "student_email": "riya.joshi.235@gmail.com",
    "phone": "+91 96385 11008",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-434",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-2864",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1341,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aman Bhatt",
    "student_email": "aman.bhatt.236@gehu.ac.in",
    "phone": "+91 96402 11067",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DDN-441",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-2901",
    "team_name": "Stark Innovators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/aman-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1342,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Gaurav Mehra",
    "student_email": "gaurav.mehra.237@gmail.com",
    "phone": "+91 96419 11126",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DDN-448",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-2938",
    "team_name": "Mountain Hackers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/gaurav-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1343,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Deepak Chauhan",
    "student_email": "deepak.chauhan.238@gmail.com",
    "phone": "+91 96436 11185",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DDN-455",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-2975",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1344,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kavita Singh",
    "student_email": "kavita.singh.239@gehu.ac.in",
    "phone": "+91 96453 11244",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-462",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-3012",
    "team_name": "Spider Byte Team 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/kavita-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1345,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Ishita Gairola",
    "student_email": "ishita.gairola.2310@gmail.com",
    "phone": "+91 96470 11303",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DDN-469",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-3049",
    "team_name": "Cyber Spiders 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/ishita-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1346,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Anjali Pandey",
    "student_email": "anjali.pandey.2311@gmail.com",
    "phone": "+91 96487 11362",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-476",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-3086",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1347,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aditya Dhyani",
    "student_email": "aditya.dhyani.2312@gehu.ac.in",
    "phone": "+91 96504 11421",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-483",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-3123",
    "team_name": "Himalayan Gliders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/aditya-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1348,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Siddharth Kandpal",
    "student_email": "siddharth.kandpal.2313@gmail.com",
    "phone": "+91 96521 11480",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-490",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-3160",
    "team_name": "Quantum Net 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/siddharth-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1349,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Shreya Gusain",
    "student_email": "shreya.gusain.2314@gmail.com",
    "phone": "+91 96538 11539",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-497",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-3197",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1350,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Sneha Sharma",
    "student_email": "sneha.sharma.2315@gehu.ac.in",
    "phone": "+91 96555 11598",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-504",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-3234",
    "team_name": "Aero Hawks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/sneha-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1351,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Tanya Negi",
    "student_email": "tanya.negi.2316@gmail.com",
    "phone": "+91 96572 11657",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-511",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-3271",
    "team_name": "Neural Squad 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/tanya-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1352,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Vansh Joshi",
    "student_email": "vansh.joshi.2317@gmail.com",
    "phone": "+91 96589 11716",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DDN-518",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-3308",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1353,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Manish Bhatt",
    "student_email": "manish.bhatt.2318@gehu.ac.in",
    "phone": "+91 96606 11775",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DDN-525",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-3345",
    "team_name": "Apex Predators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/manish-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1354,
    "event_id": 23,
    "event_title": "13th Foundation Day Celebration",
    "event_category": "University Event / Cultural Celebration",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Abhishek Mehra",
    "student_email": "abhishek.mehra.2319@gmail.com",
    "phone": "+91 96623 11834",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DDN-532",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-23-3382",
    "team_name": "Code Crafters 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/abhishek-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T11:30:00.000Z"
  },

  {
    "id": 1355,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Siddharth Uniyal",
    "student_email": "siddharth.uniyal.240@gehu.ac.in",
    "phone": "+91 96400 10744",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-412",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-2752",
    "team_name": "Aero Hawks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/siddharth-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1356,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Shreya Bisht",
    "student_email": "shreya.bisht.241@gmail.com",
    "phone": "+91 96417 10803",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-419",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-2789",
    "team_name": "Neural Squad 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/shreya-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1357,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Sneha Verma",
    "student_email": "sneha.verma.242@gmail.com",
    "phone": "+91 96434 10862",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-426",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-2826",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1358,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Tanya Rawat",
    "student_email": "tanya.rawat.243@gehu.ac.in",
    "phone": "+91 96451 10921",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-433",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-2863",
    "team_name": "Apex Predators 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/tanya-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1359,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Vansh Pant",
    "student_email": "vansh.pant.244@gmail.com",
    "phone": "+91 96468 10980",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-440",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-2900",
    "team_name": "Code Crafters 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/vansh-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1360,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Manish Semwal",
    "student_email": "manish.semwal.245@gmail.com",
    "phone": "+91 96485 11039",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DDN-447",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-2937",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1361,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Abhishek Upadhyay",
    "student_email": "abhishek.upadhyay.246@gehu.ac.in",
    "phone": "+91 96502 11098",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DDN-454",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-2974",
    "team_name": "Mountain Hackers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/abhishek-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1362,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Neha Kargeti",
    "student_email": "neha.kargeti.247@gmail.com",
    "phone": "+91 96519 11157",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DDN-461",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-3011",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/neha-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1363,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Komal Kaur",
    "student_email": "komal.kaur.248@gmail.com",
    "phone": "+91 96536 11216",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-468",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-3048",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1364,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aarav Tiwari",
    "student_email": "aarav.tiwari.249@gehu.ac.in",
    "phone": "+91 96553 11275",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DDN-475",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-3085",
    "team_name": "Cyber Spiders 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/aarav-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1365,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Priyanshu Bhandari",
    "student_email": "priyanshu.bhandari.2410@gmail.com",
    "phone": "+91 96570 11334",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-482",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-3122",
    "team_name": "Web Slingers 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/priyanshu-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1366,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Ayush Arya",
    "student_email": "ayush.arya.2411@gmail.com",
    "phone": "+91 96587 11393",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-489",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-3159",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1367,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Ananya Uniyal",
    "student_email": "ananya.uniyal.2412@gehu.ac.in",
    "phone": "+91 96604 11452",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-496",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-3196",
    "team_name": "Quantum Net 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/ananya-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1368,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Megha Bisht",
    "student_email": "megha.bisht.2413@gmail.com",
    "phone": "+91 96621 11511",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-503",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-3233",
    "team_name": "Volt Dynamics 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/megha-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1369,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Simran Verma",
    "student_email": "simran.verma.2414@gmail.com",
    "phone": "+91 96638 11570",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-510",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-3270",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1370,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Nikhil Rawat",
    "student_email": "nikhil.rawat.2415@gehu.ac.in",
    "phone": "+91 96655 11629",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-517",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-3307",
    "team_name": "Neural Squad 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/nikhil-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1371,
    "event_id": 24,
    "event_title": "Student GRAFEST 2026",
    "event_category": "Student Festival / Cultural and Entertainment Event",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kunal Pant",
    "student_email": "kunal.pant.2416@gmail.com",
    "phone": "+91 96672 11688",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DDN-524",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-24-3344",
    "team_name": "Byte Force 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/kunal-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1372,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Megha Joshi",
    "student_email": "megha.joshi.100@gehu.ac.in",
    "phone": "+91 95000 10310",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-230",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-1730",
    "team_name": "Neural Squad 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/megha-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1373,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Simran Bhatt",
    "student_email": "simran.bhatt.101@gmail.com",
    "phone": "+91 95017 10369",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DMD-237",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-1767",
    "team_name": "Byte Force 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/simran-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1374,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Nikhil Mehra",
    "student_email": "nikhil.mehra.102@gmail.com",
    "phone": "+91 95034 10428",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-244",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-1804",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1375,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Kunal Chauhan",
    "student_email": "kunal.chauhan.103@gehu.ac.in",
    "phone": "+91 95051 10487",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-251",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-1841",
    "team_name": "Code Crafters 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/kunal-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1376,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Pooja Singh",
    "student_email": "pooja.singh.104@gmail.com",
    "phone": "+91 95068 10546",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-258",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-1878",
    "team_name": "Stark Innovators 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/pooja-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1377,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Prerna Gairola",
    "student_email": "prerna.gairola.105@gmail.com",
    "phone": "+91 95085 10605",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-265",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-1915",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1378,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Sakshi Pandey",
    "student_email": "sakshi.pandey.106@gehu.ac.in",
    "phone": "+91 95102 10664",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-272",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-1952",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/sakshi-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1379,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Rohan Dhyani",
    "student_email": "rohan.dhyani.107@gmail.com",
    "phone": "+91 95119 10723",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-279",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-1989",
    "team_name": "Spider Byte Team 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/rohan-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1380,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Kartik Kandpal",
    "student_email": "kartik.kandpal.108@gmail.com",
    "phone": "+91 95136 10782",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DMD-286",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-2026",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1381,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Harsh Gusain",
    "student_email": "harsh.gusain.109@gehu.ac.in",
    "phone": "+91 95153 10841",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-293",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-2063",
    "team_name": "Web Slingers 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/harsh-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1382,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Divya Sharma",
    "student_email": "divya.sharma.1010@gmail.com",
    "phone": "+91 95170 10900",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DMD-300",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-2100",
    "team_name": "Himalayan Gliders 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/divya-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1383,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Riya Negi",
    "student_email": "riya.negi.1011@gmail.com",
    "phone": "+91 95187 10959",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-307",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-2137",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1384,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Aman Joshi",
    "student_email": "aman.joshi.1012@gehu.ac.in",
    "phone": "+91 95204 11018",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DMD-314",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-2174",
    "team_name": "Volt Dynamics 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/aman-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1385,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Gaurav Bhatt",
    "student_email": "gaurav.bhatt.1013@gmail.com",
    "phone": "+91 95221 11077",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-321",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-2211",
    "team_name": "Aero Hawks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/gaurav-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1386,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Deepak Mehra",
    "student_email": "deepak.mehra.1014@gmail.com",
    "phone": "+91 95238 11136",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-328",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-2248",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1387,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Kavita Chauhan",
    "student_email": "kavita.chauhan.1015@gehu.ac.in",
    "phone": "+91 95255 11195",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-335",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-2285",
    "team_name": "Byte Force 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/kavita-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1388,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ishita Singh",
    "student_email": "ishita.singh.1016@gmail.com",
    "phone": "+91 95272 11254",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-342",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-2322",
    "team_name": "Apex Predators 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/ishita-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1389,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Anjali Gairola",
    "student_email": "anjali.gairola.1017@gmail.com",
    "phone": "+91 95289 11313",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-349",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-2359",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1390,
    "event_id": 10,
    "event_title": "🛠️ Parker Nano-Materials & Structural Workshop",
    "event_category": "Workshop",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Aditya Pandey",
    "student_email": "aditya.pandey.1018@gehu.ac.in",
    "phone": "+91 95306 11372",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-356",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-10-2396",
    "team_name": "Stark Innovators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/aditya-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1391,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Gaurav Semwal",
    "student_email": "gaurav.semwal.110@gehu.ac.in",
    "phone": "+91 95100 10341",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DMD-243",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-1803",
    "team_name": "Byte Force 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/gaurav-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1392,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Deepak Upadhyay",
    "student_email": "deepak.upadhyay.111@gmail.com",
    "phone": "+91 95117 10400",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-250",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-1840",
    "team_name": "Apex Predators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/deepak-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1393,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Kavita Kargeti",
    "student_email": "kavita.kargeti.112@gmail.com",
    "phone": "+91 95134 10459",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-257",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-1877",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1394,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ishita Kaur",
    "student_email": "ishita.kaur.113@gehu.ac.in",
    "phone": "+91 95151 10518",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-264",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-1914",
    "team_name": "Stark Innovators 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/ishita-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1395,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Anjali Tiwari",
    "student_email": "anjali.tiwari.114@gmail.com",
    "phone": "+91 95168 10577",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-271",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-1951",
    "team_name": "Mountain Hackers 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/anjali-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1396,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Aditya Bhandari",
    "student_email": "aditya.bhandari.115@gmail.com",
    "phone": "+91 95185 10636",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-278",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-1988",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1397,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Siddharth Arya",
    "student_email": "siddharth.arya.116@gehu.ac.in",
    "phone": "+91 95202 10695",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-285",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-2025",
    "team_name": "Spider Byte Team 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/siddharth-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1398,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Shreya Uniyal",
    "student_email": "shreya.uniyal.117@gmail.com",
    "phone": "+91 95219 10754",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DMD-292",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-2062",
    "team_name": "Cyber Spiders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/shreya-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1399,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Sneha Bisht",
    "student_email": "sneha.bisht.118@gmail.com",
    "phone": "+91 95236 10813",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-299",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-2099",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1400,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Tanya Verma",
    "student_email": "tanya.verma.119@gehu.ac.in",
    "phone": "+91 95253 10872",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DMD-306",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-2136",
    "team_name": "Himalayan Gliders 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/tanya-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1401,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Vansh Rawat",
    "student_email": "vansh.rawat.1110@gmail.com",
    "phone": "+91 95270 10931",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-313",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-2173",
    "team_name": "Quantum Net 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/vansh-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1402,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Manish Pant",
    "student_email": "manish.pant.1111@gmail.com",
    "phone": "+91 95287 10990",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DMD-320",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-2210",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1403,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Abhishek Semwal",
    "student_email": "abhishek.semwal.1112@gehu.ac.in",
    "phone": "+91 95304 11049",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-327",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-2247",
    "team_name": "Aero Hawks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/abhishek-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1404,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Neha Upadhyay",
    "student_email": "neha.upadhyay.1113@gmail.com",
    "phone": "+91 95321 11108",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-334",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-2284",
    "team_name": "Neural Squad 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/neha-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1405,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Komal Kargeti",
    "student_email": "komal.kargeti.1114@gmail.com",
    "phone": "+91 95338 11167",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-341",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-2321",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1406,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Aarav Kaur",
    "student_email": "aarav.kaur.1115@gehu.ac.in",
    "phone": "+91 95355 11226",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-348",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-2358",
    "team_name": "Apex Predators 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/aarav-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1407,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Priyanshu Tiwari",
    "student_email": "priyanshu.tiwari.1116@gmail.com",
    "phone": "+91 95372 11285",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-355",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-2395",
    "team_name": "Code Crafters 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/priyanshu-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1408,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ayush Bhandari",
    "student_email": "ayush.bhandari.1117@gmail.com",
    "phone": "+91 95389 11344",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-362",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-2432",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1409,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ananya Arya",
    "student_email": "ananya.arya.1118@gehu.ac.in",
    "phone": "+91 95406 11403",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DMD-369",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-2469",
    "team_name": "Mountain Hackers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/ananya-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1410,
    "event_id": 11,
    "event_title": "🌐 Spider-Net Quantum Cybersecurity CTF",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Megha Uniyal",
    "student_email": "megha.uniyal.1119@gmail.com",
    "phone": "+91 95423 11462",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-376",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-11-2506",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/megha-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T11:30:00.000Z"
  },

  {
    "id": 1411,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Neha Gairola",
    "student_email": "neha.gairola.120@gehu.ac.in",
    "phone": "+91 95200 10372",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-256",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-1876",
    "team_name": "Apex Predators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/neha-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1412,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Komal Pandey",
    "student_email": "komal.pandey.121@gmail.com",
    "phone": "+91 95217 10431",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-263",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-1913",
    "team_name": "Code Crafters 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/komal-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1413,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Aarav Dhyani",
    "student_email": "aarav.dhyani.122@gmail.com",
    "phone": "+91 95234 10490",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-270",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-1950",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1414,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Priyanshu Kandpal",
    "student_email": "priyanshu.kandpal.123@gehu.ac.in",
    "phone": "+91 95251 10549",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-277",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-1987",
    "team_name": "Mountain Hackers 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/priyanshu-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1415,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ayush Gusain",
    "student_email": "ayush.gusain.124@gmail.com",
    "phone": "+91 95268 10608",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-284",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-2024",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/ayush-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1416,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ananya Sharma",
    "student_email": "ananya.sharma.125@gmail.com",
    "phone": "+91 95285 10667",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-291",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-2061",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1417,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Megha Negi",
    "student_email": "megha.negi.126@gehu.ac.in",
    "phone": "+91 95302 10726",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DMD-298",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-2098",
    "team_name": "Cyber Spiders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/megha-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1418,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Simran Joshi",
    "student_email": "simran.joshi.127@gmail.com",
    "phone": "+91 95319 10785",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-305",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-2135",
    "team_name": "Web Slingers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/simran-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1419,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Nikhil Bhatt",
    "student_email": "nikhil.bhatt.128@gmail.com",
    "phone": "+91 95336 10844",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DMD-312",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-2172",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1420,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Kunal Mehra",
    "student_email": "kunal.mehra.129@gehu.ac.in",
    "phone": "+91 95353 10903",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-319",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-2209",
    "team_name": "Quantum Net 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/kunal-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1421,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Pooja Chauhan",
    "student_email": "pooja.chauhan.1210@gmail.com",
    "phone": "+91 95370 10962",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DMD-326",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-2246",
    "team_name": "Volt Dynamics 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/pooja-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1422,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Prerna Singh",
    "student_email": "prerna.singh.1211@gmail.com",
    "phone": "+91 95387 11021",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-333",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-2283",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1423,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Sakshi Gairola",
    "student_email": "sakshi.gairola.1212@gehu.ac.in",
    "phone": "+91 95404 11080",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-340",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-2320",
    "team_name": "Neural Squad 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/sakshi-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1424,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Rohan Pandey",
    "student_email": "rohan.pandey.1213@gmail.com",
    "phone": "+91 95421 11139",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-347",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-2357",
    "team_name": "Byte Force 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/rohan-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1425,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Kartik Dhyani",
    "student_email": "kartik.dhyani.1214@gmail.com",
    "phone": "+91 95438 11198",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-354",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-2394",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1426,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Harsh Kandpal",
    "student_email": "harsh.kandpal.1215@gehu.ac.in",
    "phone": "+91 95455 11257",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-361",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-2431",
    "team_name": "Code Crafters 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/harsh-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1427,
    "event_id": 12,
    "event_title": "🏎️ Formula Web-Speed Electric Kart Championship",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Divya Gusain",
    "student_email": "divya.gusain.1216@gmail.com",
    "phone": "+91 95472 11316",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-368",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-12-2468",
    "team_name": "Stark Innovators 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/divya-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1428,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Rohan Bhandari",
    "student_email": "rohan.bhandari.200@gehu.ac.in",
    "phone": "+91 96000 10620",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-360",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2460",
    "team_name": "Code Crafters 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/rohan-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1429,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Kartik Arya",
    "student_email": "kartik.arya.201@gmail.com",
    "phone": "+91 96017 10679",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-367",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2497",
    "team_name": "Stark Innovators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/kartik-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1430,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Harsh Uniyal",
    "student_email": "harsh.uniyal.202@gmail.com",
    "phone": "+91 96034 10738",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-374",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2534",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1431,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Divya Bisht",
    "student_email": "divya.bisht.203@gehu.ac.in",
    "phone": "+91 96051 10797",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-381",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2571",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/divya-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1432,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Riya Verma",
    "student_email": "riya.verma.204@gmail.com",
    "phone": "+91 96068 10856",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-388",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2608",
    "team_name": "Spider Byte Team 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/riya-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1433,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Aman Rawat",
    "student_email": "aman.rawat.205@gmail.com",
    "phone": "+91 96085 10915",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DMD-395",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2645",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1434,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Gaurav Pant",
    "student_email": "gaurav.pant.206@gehu.ac.in",
    "phone": "+91 96102 10974",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-402",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2682",
    "team_name": "Web Slingers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/gaurav-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1435,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Deepak Semwal",
    "student_email": "deepak.semwal.207@gmail.com",
    "phone": "+91 96119 11033",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DMD-409",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2719",
    "team_name": "Himalayan Gliders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/deepak-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1436,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Kavita Upadhyay",
    "student_email": "kavita.upadhyay.208@gmail.com",
    "phone": "+91 96136 11092",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-416",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2756",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1437,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ishita Kargeti",
    "student_email": "ishita.kargeti.209@gehu.ac.in",
    "phone": "+91 96153 11151",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DMD-423",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2793",
    "team_name": "Volt Dynamics 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/ishita-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1438,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Anjali Kaur",
    "student_email": "anjali.kaur.2010@gmail.com",
    "phone": "+91 96170 11210",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-430",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2830",
    "team_name": "Aero Hawks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/anjali-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1439,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Aditya Tiwari",
    "student_email": "aditya.tiwari.2011@gmail.com",
    "phone": "+91 96187 11269",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-437",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2867",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1440,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Siddharth Bhandari",
    "student_email": "siddharth.bhandari.2012@gehu.ac.in",
    "phone": "+91 96204 11328",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-444",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2904",
    "team_name": "Byte Force 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/siddharth-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1441,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Shreya Arya",
    "student_email": "shreya.arya.2013@gmail.com",
    "phone": "+91 96221 11387",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-451",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2941",
    "team_name": "Apex Predators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/shreya-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1442,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Sneha Uniyal",
    "student_email": "sneha.uniyal.2014@gmail.com",
    "phone": "+91 96238 11446",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-458",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-2978",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1443,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Tanya Bisht",
    "student_email": "tanya.bisht.2015@gehu.ac.in",
    "phone": "+91 96255 11505",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-465",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-3015",
    "team_name": "Stark Innovators 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/tanya-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1444,
    "event_id": 20,
    "event_title": "🔥 Dussehra Mahotsav & Ravan Dahan 2026 — Victory of Light",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Vansh Verma",
    "student_email": "vansh.verma.2016@gmail.com",
    "phone": "+91 96272 11564",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DMD-472",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-20-3052",
    "team_name": "Mountain Hackers 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/vansh-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1445,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Shreya Sharma",
    "student_email": "shreya.sharma.210@gehu.ac.in",
    "phone": "+91 96100 10651",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-373",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-2533",
    "team_name": "Stark Innovators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/shreya-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1446,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Sneha Negi",
    "student_email": "sneha.negi.211@gmail.com",
    "phone": "+91 96117 10710",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-380",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-2570",
    "team_name": "Mountain Hackers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/sneha-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1447,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Tanya Joshi",
    "student_email": "tanya.joshi.212@gmail.com",
    "phone": "+91 96134 10769",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-387",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-2607",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1448,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Vansh Bhatt",
    "student_email": "vansh.bhatt.213@gehu.ac.in",
    "phone": "+91 96151 10828",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-394",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-2644",
    "team_name": "Spider Byte Team 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/vansh-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1449,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Manish Mehra",
    "student_email": "manish.mehra.214@gmail.com",
    "phone": "+91 96168 10887",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DMD-401",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-2681",
    "team_name": "Cyber Spiders 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/manish-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1450,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Abhishek Chauhan",
    "student_email": "abhishek.chauhan.215@gmail.com",
    "phone": "+91 96185 10946",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-408",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-2718",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1451,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Neha Singh",
    "student_email": "neha.singh.216@gehu.ac.in",
    "phone": "+91 96202 11005",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DMD-415",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-2755",
    "team_name": "Himalayan Gliders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/neha-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1452,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Komal Gairola",
    "student_email": "komal.gairola.217@gmail.com",
    "phone": "+91 96219 11064",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-422",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-2792",
    "team_name": "Quantum Net 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/komal-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1453,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Aarav Pandey",
    "student_email": "aarav.pandey.218@gmail.com",
    "phone": "+91 96236 11123",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DMD-429",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-2829",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1454,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Priyanshu Dhyani",
    "student_email": "priyanshu.dhyani.219@gehu.ac.in",
    "phone": "+91 96253 11182",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-436",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-2866",
    "team_name": "Aero Hawks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/priyanshu-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1455,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ayush Kandpal",
    "student_email": "ayush.kandpal.2110@gmail.com",
    "phone": "+91 96270 11241",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-443",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-2903",
    "team_name": "Neural Squad 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/ayush-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1456,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ananya Gusain",
    "student_email": "ananya.gusain.2111@gmail.com",
    "phone": "+91 96287 11300",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-450",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-2940",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1457,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Megha Sharma",
    "student_email": "megha.sharma.2112@gehu.ac.in",
    "phone": "+91 96304 11359",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-457",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-2977",
    "team_name": "Apex Predators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/megha-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1458,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Simran Negi",
    "student_email": "simran.negi.2113@gmail.com",
    "phone": "+91 96321 11418",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-464",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-3014",
    "team_name": "Code Crafters 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/simran-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1459,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Nikhil Joshi",
    "student_email": "nikhil.joshi.2114@gmail.com",
    "phone": "+91 96338 11477",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-471",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-3051",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1460,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Kunal Bhatt",
    "student_email": "kunal.bhatt.2115@gehu.ac.in",
    "phone": "+91 96355 11536",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DMD-478",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-3088",
    "team_name": "Mountain Hackers 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/kunal-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1461,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Pooja Mehra",
    "student_email": "pooja.mehra.2116@gmail.com",
    "phone": "+91 96372 11595",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-485",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-3125",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/pooja-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1462,
    "event_id": 21,
    "event_title": "🎭 Student Grafest 2026 — Classical & Modern Dance Showcase",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Prerna Chauhan",
    "student_email": "prerna.chauhan.2117@gmail.com",
    "phone": "+91 96389 11654",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DMD-492",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-21-3162",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1463,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Simran Rawat",
    "student_email": "simran.rawat.240@gehu.ac.in",
    "phone": "+91 96400 10744",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-HAL-412",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-2752",
    "team_name": "Mountain Hackers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/simran-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1464,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Nikhil Pant",
    "student_email": "nikhil.pant.241@gmail.com",
    "phone": "+91 96417 10803",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-HAL-419",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-2789",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/nikhil-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1465,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Kunal Semwal",
    "student_email": "kunal.semwal.242@gmail.com",
    "phone": "+91 96434 10862",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-426",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-2826",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1466,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Pooja Upadhyay",
    "student_email": "pooja.upadhyay.243@gehu.ac.in",
    "phone": "+91 96451 10921",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-HAL-433",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-2863",
    "team_name": "Cyber Spiders 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/pooja-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1467,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Prerna Kargeti",
    "student_email": "prerna.kargeti.244@gmail.com",
    "phone": "+91 96468 10980",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-440",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-2900",
    "team_name": "Web Slingers 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/prerna-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1468,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Sakshi Kaur",
    "student_email": "sakshi.kaur.245@gmail.com",
    "phone": "+91 96485 11039",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-HAL-447",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-2937",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1469,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Rohan Tiwari",
    "student_email": "rohan.tiwari.246@gehu.ac.in",
    "phone": "+91 96502 11098",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-454",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-2974",
    "team_name": "Quantum Net 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/rohan-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1470,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Kartik Bhandari",
    "student_email": "kartik.bhandari.247@gmail.com",
    "phone": "+91 96519 11157",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-HAL-461",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-3011",
    "team_name": "Volt Dynamics 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/kartik-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1471,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Harsh Arya",
    "student_email": "harsh.arya.248@gmail.com",
    "phone": "+91 96536 11216",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-468",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-3048",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1472,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Divya Uniyal",
    "student_email": "divya.uniyal.249@gehu.ac.in",
    "phone": "+91 96553 11275",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-HAL-475",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-3085",
    "team_name": "Neural Squad 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/divya-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1473,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Riya Bisht",
    "student_email": "riya.bisht.2410@gmail.com",
    "phone": "+91 96570 11334",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-HAL-482",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-3122",
    "team_name": "Byte Force 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/riya-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1474,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Aman Verma",
    "student_email": "aman.verma.2411@gmail.com",
    "phone": "+91 96587 11393",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-HAL-489",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-3159",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1475,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Gaurav Rawat",
    "student_email": "gaurav.rawat.2412@gehu.ac.in",
    "phone": "+91 96604 11452",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-HAL-496",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-3196",
    "team_name": "Code Crafters 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/gaurav-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1476,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Deepak Pant",
    "student_email": "deepak.pant.2413@gmail.com",
    "phone": "+91 96621 11511",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-503",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-3233",
    "team_name": "Stark Innovators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/deepak-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1477,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Kavita Semwal",
    "student_email": "kavita.semwal.2414@gmail.com",
    "phone": "+91 96638 11570",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-HAL-510",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-3270",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1478,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Ishita Upadhyay",
    "student_email": "ishita.upadhyay.2415@gehu.ac.in",
    "phone": "+91 96655 11629",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-517",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-3307",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/ishita-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1479,
    "event_id": 34,
    "event_title": "🤖 RoboKriti 2026: Foothills Autonomous Robotics Challenge",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Anjali Kargeti",
    "student_email": "anjali.kargeti.2416@gmail.com",
    "phone": "+91 96672 11688",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-HAL-524",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-24-3344",
    "team_name": "Spider Byte Team 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/anjali-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1480,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Deepak Chauhan",
    "student_email": "deepak.chauhan.250@gehu.ac.in",
    "phone": "+91 96500 10775",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-HAL-425",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-2825",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/deepak-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1481,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Kavita Singh",
    "student_email": "kavita.singh.251@gmail.com",
    "phone": "+91 96517 10834",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-432",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-2862",
    "team_name": "Spider Byte Team 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/kavita-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1482,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Ishita Gairola",
    "student_email": "ishita.gairola.252@gmail.com",
    "phone": "+91 96534 10893",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-HAL-439",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-2899",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1483,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Anjali Pandey",
    "student_email": "anjali.pandey.253@gehu.ac.in",
    "phone": "+91 96551 10952",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-446",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-2936",
    "team_name": "Web Slingers 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/anjali-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1484,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Aditya Dhyani",
    "student_email": "aditya.dhyani.254@gmail.com",
    "phone": "+91 96568 11011",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-HAL-453",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-2973",
    "team_name": "Himalayan Gliders 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/aditya-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1485,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Siddharth Kandpal",
    "student_email": "siddharth.kandpal.255@gmail.com",
    "phone": "+91 96585 11070",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-460",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-3010",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1486,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Shreya Gusain",
    "student_email": "shreya.gusain.256@gehu.ac.in",
    "phone": "+91 96602 11129",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-HAL-467",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-3047",
    "team_name": "Volt Dynamics 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/shreya-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1487,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Sneha Sharma",
    "student_email": "sneha.sharma.257@gmail.com",
    "phone": "+91 96619 11188",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-474",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-3084",
    "team_name": "Aero Hawks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/sneha-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1488,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Tanya Negi",
    "student_email": "tanya.negi.258@gmail.com",
    "phone": "+91 96636 11247",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-HAL-481",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-3121",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1489,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Vansh Joshi",
    "student_email": "vansh.joshi.259@gehu.ac.in",
    "phone": "+91 96653 11306",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-HAL-488",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-3158",
    "team_name": "Byte Force 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/vansh-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1490,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Manish Bhatt",
    "student_email": "manish.bhatt.2510@gmail.com",
    "phone": "+91 96670 11365",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-HAL-495",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-3195",
    "team_name": "Apex Predators 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/manish-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1491,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Abhishek Mehra",
    "student_email": "abhishek.mehra.2511@gmail.com",
    "phone": "+91 96687 11424",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-HAL-502",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-3232",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1492,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Neha Chauhan",
    "student_email": "neha.chauhan.2512@gehu.ac.in",
    "phone": "+91 96704 11483",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-509",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-3269",
    "team_name": "Stark Innovators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/neha-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1493,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Komal Singh",
    "student_email": "komal.singh.2513@gmail.com",
    "phone": "+91 96721 11542",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-HAL-516",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-3306",
    "team_name": "Mountain Hackers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/komal-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1494,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Aarav Gairola",
    "student_email": "aarav.gairola.2514@gmail.com",
    "phone": "+91 96738 11601",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-523",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-3343",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1495,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Priyanshu Pandey",
    "student_email": "priyanshu.pandey.2515@gehu.ac.in",
    "phone": "+91 96755 11660",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-HAL-530",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-3380",
    "team_name": "Spider Byte Team 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/priyanshu-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1496,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Ayush Dhyani",
    "student_email": "ayush.dhyani.2516@gmail.com",
    "phone": "+91 96772 11719",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-537",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-3417",
    "team_name": "Cyber Spiders 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/ayush-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1497,
    "event_id": 25,
    "event_title": "🎨 Terai Youth Conclave & Literary Arts Gala '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Ananya Kandpal",
    "student_email": "ananya.kandpal.2517@gmail.com",
    "phone": "+91 96789 11778",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-HAL-544",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-25-3454",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1498,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Komal Kaur",
    "student_email": "komal.kaur.260@gehu.ac.in",
    "phone": "+91 96600 10806",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-438",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-2898",
    "team_name": "Spider Byte Team 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/komal-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1499,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Aarav Tiwari",
    "student_email": "aarav.tiwari.261@gmail.com",
    "phone": "+91 96617 10865",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-HAL-445",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-2935",
    "team_name": "Cyber Spiders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/aarav-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1500,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Priyanshu Bhandari",
    "student_email": "priyanshu.bhandari.262@gmail.com",
    "phone": "+91 96634 10924",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-452",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-2972",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1501,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Ayush Arya",
    "student_email": "ayush.arya.263@gehu.ac.in",
    "phone": "+91 96651 10983",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-HAL-459",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3009",
    "team_name": "Himalayan Gliders 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/ayush-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1502,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Ananya Uniyal",
    "student_email": "ananya.uniyal.264@gmail.com",
    "phone": "+91 96668 11042",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-466",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3046",
    "team_name": "Quantum Net 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/ananya-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1503,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Megha Bisht",
    "student_email": "megha.bisht.265@gmail.com",
    "phone": "+91 96685 11101",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-HAL-473",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3083",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1504,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Simran Verma",
    "student_email": "simran.verma.266@gehu.ac.in",
    "phone": "+91 96702 11160",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-480",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3120",
    "team_name": "Aero Hawks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/simran-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1505,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Nikhil Rawat",
    "student_email": "nikhil.rawat.267@gmail.com",
    "phone": "+91 96719 11219",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-HAL-487",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3157",
    "team_name": "Neural Squad 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/nikhil-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1506,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Kunal Pant",
    "student_email": "kunal.pant.268@gmail.com",
    "phone": "+91 96736 11278",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-HAL-494",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3194",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1507,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Pooja Semwal",
    "student_email": "pooja.semwal.269@gehu.ac.in",
    "phone": "+91 96753 11337",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-HAL-501",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3231",
    "team_name": "Apex Predators 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/pooja-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1508,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Prerna Upadhyay",
    "student_email": "prerna.upadhyay.2610@gmail.com",
    "phone": "+91 96770 11396",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-HAL-508",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3268",
    "team_name": "Code Crafters 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/prerna-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1509,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Sakshi Kargeti",
    "student_email": "sakshi.kargeti.2611@gmail.com",
    "phone": "+91 96787 11455",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-515",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3305",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1510,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Rohan Kaur",
    "student_email": "rohan.kaur.2612@gehu.ac.in",
    "phone": "+91 96804 11514",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-HAL-522",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3342",
    "team_name": "Mountain Hackers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/rohan-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1511,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Kartik Tiwari",
    "student_email": "kartik.tiwari.2613@gmail.com",
    "phone": "+91 96821 11573",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-HAL-529",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3379",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/kartik-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1512,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Harsh Bhandari",
    "student_email": "harsh.bhandari.2614@gmail.com",
    "phone": "+91 96838 11632",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-HAL-536",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3416",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1513,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Divya Arya",
    "student_email": "divya.arya.2615@gehu.ac.in",
    "phone": "+91 96855 11691",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-543",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3453",
    "team_name": "Cyber Spiders 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/divya-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1514,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Riya Uniyal",
    "student_email": "riya.uniyal.2616@gmail.com",
    "phone": "+91 96872 11750",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-HAL-550",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3490",
    "team_name": "Web Slingers 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/riya-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1515,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Aman Bisht",
    "student_email": "aman.bisht.2617@gmail.com",
    "phone": "+91 96889 11809",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-HAL-557",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3527",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1516,
    "event_id": 26,
    "event_title": "⚽ Kumaon Premier Inter-College Sports Carnival",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "student_name": "Gaurav Verma",
    "student_email": "gaurav.verma.2618@gehu.ac.in",
    "phone": "+91 96906 11868",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-HAL-564",
    "campus": "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    "ticket_code": "SPIDER-HAL-26-3564",
    "team_name": "Quantum Net 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/gaurav-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1517,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kartik Kandpal",
    "student_email": "kartik.kandpal.270@gehu.ac.in",
    "phone": "+91 96700 10837",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DDN-451",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-2971",
    "team_name": "Cyber Spiders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/kartik-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1518,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Harsh Gusain",
    "student_email": "harsh.gusain.271@gmail.com",
    "phone": "+91 96717 10896",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-458",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3008",
    "team_name": "Web Slingers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/harsh-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1519,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Divya Sharma",
    "student_email": "divya.sharma.272@gmail.com",
    "phone": "+91 96734 10955",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-465",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3045",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1520,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Riya Negi",
    "student_email": "riya.negi.273@gehu.ac.in",
    "phone": "+91 96751 11014",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-472",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3082",
    "team_name": "Quantum Net 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/riya-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1521,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aman Joshi",
    "student_email": "aman.joshi.274@gmail.com",
    "phone": "+91 96768 11073",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-479",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3119",
    "team_name": "Volt Dynamics 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/aman-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1522,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Gaurav Bhatt",
    "student_email": "gaurav.bhatt.275@gmail.com",
    "phone": "+91 96785 11132",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-486",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3156",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1523,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Deepak Mehra",
    "student_email": "deepak.mehra.276@gehu.ac.in",
    "phone": "+91 96802 11191",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-493",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3193",
    "team_name": "Neural Squad 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/deepak-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1524,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kavita Chauhan",
    "student_email": "kavita.chauhan.277@gmail.com",
    "phone": "+91 96819 11250",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DDN-500",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3230",
    "team_name": "Byte Force 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/kavita-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1525,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Ishita Singh",
    "student_email": "ishita.singh.278@gmail.com",
    "phone": "+91 96836 11309",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DDN-507",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3267",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1526,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Anjali Gairola",
    "student_email": "anjali.gairola.279@gehu.ac.in",
    "phone": "+91 96853 11368",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DDN-514",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3304",
    "team_name": "Code Crafters 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/anjali-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1527,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aditya Pandey",
    "student_email": "aditya.pandey.2710@gmail.com",
    "phone": "+91 96870 11427",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-521",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3341",
    "team_name": "Stark Innovators 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/aditya-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1528,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Siddharth Dhyani",
    "student_email": "siddharth.dhyani.2711@gmail.com",
    "phone": "+91 96887 11486",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DDN-528",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3378",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1529,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Shreya Kandpal",
    "student_email": "shreya.kandpal.2712@gehu.ac.in",
    "phone": "+91 96904 11545",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-535",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3415",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/shreya-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1530,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Sneha Gusain",
    "student_email": "sneha.gusain.2713@gmail.com",
    "phone": "+91 96921 11604",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-542",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3452",
    "team_name": "Spider Byte Team 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/sneha-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1531,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Tanya Sharma",
    "student_email": "tanya.sharma.2714@gmail.com",
    "phone": "+91 96938 11663",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-549",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3489",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1532,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Vansh Negi",
    "student_email": "vansh.negi.2715@gehu.ac.in",
    "phone": "+91 96955 11722",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-556",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3526",
    "team_name": "Web Slingers 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/vansh-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1533,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Manish Joshi",
    "student_email": "manish.joshi.2716@gmail.com",
    "phone": "+91 96972 11781",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-563",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3563",
    "team_name": "Himalayan Gliders 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/manish-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1534,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Abhishek Bhatt",
    "student_email": "abhishek.bhatt.2717@gmail.com",
    "phone": "+91 96989 11840",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-570",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3600",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1535,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Neha Mehra",
    "student_email": "neha.mehra.2718@gehu.ac.in",
    "phone": "+91 97006 11899",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DDN-577",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3637",
    "team_name": "Volt Dynamics 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/neha-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1536,
    "event_id": 27,
    "event_title": "🌐 Doon CyberShield '26: National CTF & Ethical Hacking Sprint",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Komal Chauhan",
    "student_email": "komal.chauhan.2719@gmail.com",
    "phone": "+91 97023 11958",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DDN-584",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-27-3674",
    "team_name": "Aero Hawks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/komal-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T11:30:00.000Z"
  },

  {
    "id": 1537,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Sneha Bisht",
    "student_email": "sneha.bisht.280@gehu.ac.in",
    "phone": "+91 96800 10868",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-464",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3044",
    "team_name": "Web Slingers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/sneha-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1538,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Tanya Verma",
    "student_email": "tanya.verma.281@gmail.com",
    "phone": "+91 96817 10927",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-471",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3081",
    "team_name": "Himalayan Gliders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/tanya-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1539,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Vansh Rawat",
    "student_email": "vansh.rawat.282@gmail.com",
    "phone": "+91 96834 10986",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-478",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3118",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1540,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Manish Pant",
    "student_email": "manish.pant.283@gehu.ac.in",
    "phone": "+91 96851 11045",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-485",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3155",
    "team_name": "Volt Dynamics 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/manish-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1541,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Abhishek Semwal",
    "student_email": "abhishek.semwal.284@gmail.com",
    "phone": "+91 96868 11104",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-492",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3192",
    "team_name": "Aero Hawks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/abhishek-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1542,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Neha Upadhyay",
    "student_email": "neha.upadhyay.285@gmail.com",
    "phone": "+91 96885 11163",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-499",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3229",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1543,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Komal Kargeti",
    "student_email": "komal.kargeti.286@gehu.ac.in",
    "phone": "+91 96902 11222",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DDN-506",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3266",
    "team_name": "Byte Force 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/komal-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1544,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aarav Kaur",
    "student_email": "aarav.kaur.287@gmail.com",
    "phone": "+91 96919 11281",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DDN-513",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3303",
    "team_name": "Apex Predators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/aarav-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1545,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Priyanshu Tiwari",
    "student_email": "priyanshu.tiwari.288@gmail.com",
    "phone": "+91 96936 11340",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DDN-520",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3340",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1546,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Ayush Bhandari",
    "student_email": "ayush.bhandari.289@gehu.ac.in",
    "phone": "+91 96953 11399",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-527",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3377",
    "team_name": "Stark Innovators 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/ayush-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1547,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Ananya Arya",
    "student_email": "ananya.arya.2810@gmail.com",
    "phone": "+91 96970 11458",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DDN-534",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3414",
    "team_name": "Mountain Hackers 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/ananya-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1548,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Megha Uniyal",
    "student_email": "megha.uniyal.2811@gmail.com",
    "phone": "+91 96987 11517",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-541",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3451",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1549,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Simran Bisht",
    "student_email": "simran.bisht.2812@gehu.ac.in",
    "phone": "+91 97004 11576",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-548",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3488",
    "team_name": "Spider Byte Team 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/simran-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1550,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Nikhil Verma",
    "student_email": "nikhil.verma.2813@gmail.com",
    "phone": "+91 97021 11635",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-555",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3525",
    "team_name": "Cyber Spiders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/nikhil-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1551,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kunal Rawat",
    "student_email": "kunal.rawat.2814@gmail.com",
    "phone": "+91 97038 11694",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-562",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3562",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1552,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Pooja Pant",
    "student_email": "pooja.pant.2815@gehu.ac.in",
    "phone": "+91 97055 11753",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-569",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3599",
    "team_name": "Himalayan Gliders 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/pooja-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1553,
    "event_id": 28,
    "event_title": "🎭 Doon Valley Youth Theatre & Acoustic Music Fest '26",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Prerna Semwal",
    "student_email": "prerna.semwal.2816@gmail.com",
    "phone": "+91 97072 11812",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-576",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-28-3636",
    "team_name": "Quantum Net 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/prerna-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1554,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Nikhil Bhatt",
    "student_email": "nikhil.bhatt.290@gehu.ac.in",
    "phone": "+91 96900 10899",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-477",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3117",
    "team_name": "Himalayan Gliders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/nikhil-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1555,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kunal Mehra",
    "student_email": "kunal.mehra.291@gmail.com",
    "phone": "+91 96917 10958",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-484",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3154",
    "team_name": "Quantum Net 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/kunal-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1556,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Pooja Chauhan",
    "student_email": "pooja.chauhan.292@gmail.com",
    "phone": "+91 96934 11017",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-491",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3191",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1557,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Prerna Singh",
    "student_email": "prerna.singh.293@gehu.ac.in",
    "phone": "+91 96951 11076",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-498",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3228",
    "team_name": "Aero Hawks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/prerna-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1558,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Sakshi Gairola",
    "student_email": "sakshi.gairola.294@gmail.com",
    "phone": "+91 96968 11135",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-505",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3265",
    "team_name": "Neural Squad 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/sakshi-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1559,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Rohan Pandey",
    "student_email": "rohan.pandey.295@gmail.com",
    "phone": "+91 96985 11194",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DDN-512",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3302",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1560,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kartik Dhyani",
    "student_email": "kartik.dhyani.296@gehu.ac.in",
    "phone": "+91 97002 11253",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DDN-519",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3339",
    "team_name": "Apex Predators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/kartik-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1561,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Harsh Kandpal",
    "student_email": "harsh.kandpal.297@gmail.com",
    "phone": "+91 97019 11312",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DDN-526",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3376",
    "team_name": "Code Crafters 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/harsh-kandpal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1562,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Divya Gusain",
    "student_email": "divya.gusain.298@gmail.com",
    "phone": "+91 97036 11371",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-533",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3413",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1563,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Riya Sharma",
    "student_email": "riya.sharma.299@gehu.ac.in",
    "phone": "+91 97053 11430",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DDN-540",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3450",
    "team_name": "Mountain Hackers 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/riya-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1564,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aman Negi",
    "student_email": "aman.negi.2910@gmail.com",
    "phone": "+91 97070 11489",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DDN-547",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3487",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/aman-negi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1565,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Gaurav Joshi",
    "student_email": "gaurav.joshi.2911@gmail.com",
    "phone": "+91 97087 11548",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DDN-554",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3524",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1566,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Deepak Bhatt",
    "student_email": "deepak.bhatt.2912@gehu.ac.in",
    "phone": "+91 97104 11607",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-561",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3561",
    "team_name": "Cyber Spiders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/deepak-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1567,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Kavita Mehra",
    "student_email": "kavita.mehra.2913@gmail.com",
    "phone": "+91 97121 11666",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DDN-568",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3598",
    "team_name": "Web Slingers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/kavita-mehra-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1568,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Ishita Chauhan",
    "student_email": "ishita.chauhan.2914@gmail.com",
    "phone": "+91 97138 11725",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DDN-575",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3635",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1569,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Anjali Singh",
    "student_email": "anjali.singh.2915@gehu.ac.in",
    "phone": "+91 97155 11784",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DDN-582",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3672",
    "team_name": "Quantum Net 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/anjali-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1570,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Aditya Gairola",
    "student_email": "aditya.gairola.2916@gmail.com",
    "phone": "+91 97172 11843",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DDN-589",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3709",
    "team_name": "Volt Dynamics 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/aditya-gairola-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1571,
    "event_id": 29,
    "event_title": "🏸 Spardha Inter-University Badminton & Table Tennis Open",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "student_name": "Siddharth Pandey",
    "student_email": "siddharth.pandey.2917@gmail.com",
    "phone": "+91 97189 11902",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DDN-596",
    "campus": "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    "ticket_code": "SPIDER-DDN-29-3746",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1572,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Kavita Upadhyay",
    "student_email": "kavita.upadhyay.300@gehu.ac.in",
    "phone": "+91 97000 10930",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-490",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3190",
    "team_name": "Quantum Net 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/kavita-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1573,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ishita Kargeti",
    "student_email": "ishita.kargeti.301@gmail.com",
    "phone": "+91 97017 10989",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DMD-497",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3227",
    "team_name": "Volt Dynamics 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/ishita-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1574,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Anjali Kaur",
    "student_email": "anjali.kaur.302@gmail.com",
    "phone": "+91 97034 11048",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-504",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3264",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1575,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Aditya Tiwari",
    "student_email": "aditya.tiwari.303@gehu.ac.in",
    "phone": "+91 97051 11107",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-511",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3301",
    "team_name": "Neural Squad 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/aditya-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1576,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Siddharth Bhandari",
    "student_email": "siddharth.bhandari.304@gmail.com",
    "phone": "+91 97068 11166",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-518",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3338",
    "team_name": "Byte Force 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/siddharth-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1577,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Shreya Arya",
    "student_email": "shreya.arya.305@gmail.com",
    "phone": "+91 97085 11225",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-525",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3375",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1578,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Sneha Uniyal",
    "student_email": "sneha.uniyal.306@gehu.ac.in",
    "phone": "+91 97102 11284",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-532",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3412",
    "team_name": "Code Crafters 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/sneha-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1579,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Tanya Bisht",
    "student_email": "tanya.bisht.307@gmail.com",
    "phone": "+91 97119 11343",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-539",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3449",
    "team_name": "Stark Innovators 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/tanya-bisht-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1580,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Vansh Verma",
    "student_email": "vansh.verma.308@gmail.com",
    "phone": "+91 97136 11402",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DMD-546",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3486",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1581,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Manish Rawat",
    "student_email": "manish.rawat.309@gehu.ac.in",
    "phone": "+91 97153 11461",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-553",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3523",
    "team_name": "Silicon Valley Geeks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/manish-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1582,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Abhishek Pant",
    "student_email": "abhishek.pant.3010@gmail.com",
    "phone": "+91 97170 11520",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DMD-560",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3560",
    "team_name": "Spider Byte Team 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/abhishek-pant-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1583,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Neha Semwal",
    "student_email": "neha.semwal.3011@gmail.com",
    "phone": "+91 97187 11579",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-567",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3597",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1584,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Komal Upadhyay",
    "student_email": "komal.upadhyay.3012@gehu.ac.in",
    "phone": "+91 97204 11638",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DMD-574",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3634",
    "team_name": "Web Slingers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/komal-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1585,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Aarav Kargeti",
    "student_email": "aarav.kargeti.3013@gmail.com",
    "phone": "+91 97221 11697",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-581",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3671",
    "team_name": "Himalayan Gliders 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/aarav-kargeti-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1586,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Priyanshu Kaur",
    "student_email": "priyanshu.kaur.3014@gmail.com",
    "phone": "+91 97238 11756",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-588",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3708",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1587,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ayush Tiwari",
    "student_email": "ayush.tiwari.3015@gehu.ac.in",
    "phone": "+91 97255 11815",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-595",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3745",
    "team_name": "Volt Dynamics 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/ayush-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1588,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ananya Bhandari",
    "student_email": "ananya.bhandari.3016@gmail.com",
    "phone": "+91 97272 11874",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-602",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3782",
    "team_name": "Aero Hawks 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/ananya-bhandari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1589,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Megha Arya",
    "student_email": "megha.arya.3017@gmail.com",
    "phone": "+91 97289 11933",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-609",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3819",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1590,
    "event_id": 30,
    "event_title": "⚡ InnovateGEU '26: Grand AI & DeepTech Conclave",
    "event_category": "Technical",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Simran Uniyal",
    "student_email": "simran.uniyal.3018@gehu.ac.in",
    "phone": "+91 97306 11992",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-616",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-30-3856",
    "team_name": "Byte Force 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/simran-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1591,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Aarav Pandey",
    "student_email": "aarav.pandey.310@gehu.ac.in",
    "phone": "+91 97100 10961",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DMD-503",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3263",
    "team_name": "Volt Dynamics 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/aarav-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1592,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Priyanshu Dhyani",
    "student_email": "priyanshu.dhyani.311@gmail.com",
    "phone": "+91 97117 11020",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-510",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3300",
    "team_name": "Aero Hawks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/priyanshu-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1593,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ayush Kandpal",
    "student_email": "ayush.kandpal.312@gmail.com",
    "phone": "+91 97134 11079",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-517",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3337",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1594,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ananya Gusain",
    "student_email": "ananya.gusain.313@gehu.ac.in",
    "phone": "+91 97151 11138",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-524",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3374",
    "team_name": "Byte Force 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/ananya-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1595,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Megha Sharma",
    "student_email": "megha.sharma.314@gmail.com",
    "phone": "+91 97168 11197",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-531",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3411",
    "team_name": "Apex Predators 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/megha-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1596,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Simran Negi",
    "student_email": "simran.negi.315@gmail.com",
    "phone": "+91 97185 11256",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-538",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3448",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1597,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Nikhil Joshi",
    "student_email": "nikhil.joshi.316@gehu.ac.in",
    "phone": "+91 97202 11315",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-545",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3485",
    "team_name": "Stark Innovators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/nikhil-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1598,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Kunal Bhatt",
    "student_email": "kunal.bhatt.317@gmail.com",
    "phone": "+91 97219 11374",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DMD-552",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3522",
    "team_name": "Mountain Hackers 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/kunal-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1599,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Pooja Mehra",
    "student_email": "pooja.mehra.318@gmail.com",
    "phone": "+91 97236 11433",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-559",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3559",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1600,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Prerna Chauhan",
    "student_email": "prerna.chauhan.319@gehu.ac.in",
    "phone": "+91 97253 11492",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DMD-566",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3596",
    "team_name": "Spider Byte Team 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/prerna-chauhan-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1601,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Sakshi Singh",
    "student_email": "sakshi.singh.3110@gmail.com",
    "phone": "+91 97270 11551",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-573",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3633",
    "team_name": "Cyber Spiders 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/sakshi-singh-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1602,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Rohan Gairola",
    "student_email": "rohan.gairola.3111@gmail.com",
    "phone": "+91 97287 11610",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DMD-580",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3670",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1603,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Kartik Pandey",
    "student_email": "kartik.pandey.3112@gehu.ac.in",
    "phone": "+91 97304 11669",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-587",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3707",
    "team_name": "Himalayan Gliders 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/kartik-pandey-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1604,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Harsh Dhyani",
    "student_email": "harsh.dhyani.3113@gmail.com",
    "phone": "+91 97321 11728",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-594",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3744",
    "team_name": "Quantum Net 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/harsh-dhyani-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1605,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Divya Kandpal",
    "student_email": "divya.kandpal.3114@gmail.com",
    "phone": "+91 97338 11787",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-601",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3781",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1606,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Riya Gusain",
    "student_email": "riya.gusain.3115@gehu.ac.in",
    "phone": "+91 97355 11846",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-608",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3818",
    "team_name": "Aero Hawks 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/riya-gusain-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1607,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Aman Sharma",
    "student_email": "aman.sharma.3116@gmail.com",
    "phone": "+91 97372 11905",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-615",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3855",
    "team_name": "Neural Squad 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/aman-sharma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  },

  {
    "id": 1608,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Gaurav Negi",
    "student_email": "gaurav.negi.3117@gmail.com",
    "phone": "+91 97389 11964",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-622",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3892",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T18:30:00.000Z"
  },

  {
    "id": 1609,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Deepak Joshi",
    "student_email": "deepak.joshi.3118@gehu.ac.in",
    "phone": "+91 97406 12023",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DMD-629",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3929",
    "team_name": "Apex Predators 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/deepak-joshi-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T10:30:00.000Z"
  },

  {
    "id": 1610,
    "event_id": 31,
    "event_title": "🏆 All-India Inter-University Cricket Championship 2026",
    "event_category": "Sports",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Kavita Bhatt",
    "student_email": "kavita.bhatt.3119@gmail.com",
    "phone": "+91 97423 12082",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-636",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-31-3966",
    "team_name": "Code Crafters 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/kavita-bhatt-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T11:30:00.000Z"
  },

  {
    "id": 1611,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Harsh Arya",
    "student_email": "harsh.arya.320@gehu.ac.in",
    "phone": "+91 97200 10992",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-516",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3336",
    "team_name": "Aero Hawks 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/harsh-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T10:30:00.000Z"
  },

  {
    "id": 1612,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Divya Uniyal",
    "student_email": "divya.uniyal.321@gmail.com",
    "phone": "+91 97217 11051",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-523",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3373",
    "team_name": "Neural Squad 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/divya-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T11:30:00.000Z"
  },

  {
    "id": 1613,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Riya Bisht",
    "student_email": "riya.bisht.322@gmail.com",
    "phone": "+91 97234 11110",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-530",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3410",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-12T12:30:00.000Z"
  },

  {
    "id": 1614,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Aman Verma",
    "student_email": "aman.verma.323@gehu.ac.in",
    "phone": "+91 97251 11169",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-537",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3447",
    "team_name": "Apex Predators 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/aman-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-13T13:30:00.000Z"
  },

  {
    "id": 1615,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Gaurav Rawat",
    "student_email": "gaurav.rawat.324@gmail.com",
    "phone": "+91 97268 11228",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-544",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3484",
    "team_name": "Code Crafters 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/gaurav-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-14T14:30:00.000Z"
  },

  {
    "id": 1616,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Deepak Pant",
    "student_email": "deepak.pant.325@gmail.com",
    "phone": "+91 97285 11287",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-551",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3521",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-15T15:30:00.000Z"
  },

  {
    "id": 1617,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Kavita Semwal",
    "student_email": "kavita.semwal.326@gehu.ac.in",
    "phone": "+91 97302 11346",
    "degree": "MCA - 1st Year",
    "roll_no": "GEHU-2024-DMD-558",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3558",
    "team_name": "Mountain Hackers 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/kavita-semwal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-16T16:30:00.000Z"
  },

  {
    "id": 1618,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Ishita Upadhyay",
    "student_email": "ishita.upadhyay.327@gmail.com",
    "phone": "+91 97319 11405",
    "degree": "BBA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-565",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3595",
    "team_name": "Silicon Valley Geeks 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/ishita-upadhyay-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-17T17:30:00.000Z"
  },

  {
    "id": 1619,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Anjali Kargeti",
    "student_email": "anjali.kargeti.328@gmail.com",
    "phone": "+91 97336 11464",
    "degree": "MBA - 1st Year",
    "roll_no": "GEHU-2024-DMD-572",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3632",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-18T18:30:00.000Z"
  },

  {
    "id": 1620,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Aditya Kaur",
    "student_email": "aditya.kaur.329@gehu.ac.in",
    "phone": "+91 97353 11523",
    "degree": "B.Tech ECE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-579",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3669",
    "team_name": "Cyber Spiders 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/aditya-kaur-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-19T10:30:00.000Z"
  },

  {
    "id": 1621,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Siddharth Tiwari",
    "student_email": "siddharth.tiwari.3210@gmail.com",
    "phone": "+91 97370 11582",
    "degree": "B.Tech Cyber Security - 2nd Year",
    "roll_no": "GEHU-2024-DMD-586",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3706",
    "team_name": "Web Slingers 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": "https://github.com/siddharth-tiwari-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-20T11:30:00.000Z"
  },

  {
    "id": 1622,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Shreya Bhandari",
    "student_email": "shreya.bhandari.3211@gmail.com",
    "phone": "+91 97387 11641",
    "degree": "B.Tech CSE - 3rd Year",
    "roll_no": "GEHU-2024-DMD-593",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3743",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-21T12:30:00.000Z"
  },

  {
    "id": 1623,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Sneha Arya",
    "student_email": "sneha.arya.3212@gehu.ac.in",
    "phone": "+91 97404 11700",
    "degree": "B.Tech CSE - 2nd Year",
    "roll_no": "GEHU-2024-DMD-600",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3780",
    "team_name": "Quantum Net 1",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/sneha-arya-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-22T13:30:00.000Z"
  },

  {
    "id": 1624,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Tanya Uniyal",
    "student_email": "tanya.uniyal.3213@gmail.com",
    "phone": "+91 97421 11759",
    "degree": "B.Tech AI & Data Science - 3rd Year",
    "roll_no": "GEHU-2024-DMD-607",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3817",
    "team_name": "Volt Dynamics 2",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 2",
    "github_link": "https://github.com/tanya-uniyal-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-23T14:30:00.000Z"
  },

  {
    "id": 1625,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Vansh Bisht",
    "student_email": "vansh.bisht.3214@gmail.com",
    "phone": "+91 97438 11818",
    "degree": "B.Tech AI/ML - 2nd Year",
    "roll_no": "GEHU-2024-DMD-614",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3854",
    "team_name": "Solo Innovator",
    "team_size": "1",
    "track_info": "Standard Track / Team Batch 3",
    "github_link": null,
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-24T15:30:00.000Z"
  },

  {
    "id": 1626,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Manish Verma",
    "student_email": "manish.verma.3215@gehu.ac.in",
    "phone": "+91 97455 11877",
    "degree": "BCA - 3rd Year",
    "roll_no": "GEHU-2024-DMD-621",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3891",
    "team_name": "Neural Squad 1",
    "team_size": "4",
    "track_info": "Standard Track / Team Batch 4",
    "github_link": "https://github.com/manish-verma-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-10T16:30:00.000Z"
  },

  {
    "id": 1627,
    "event_id": 32,
    "event_title": "🎶 Swarotsav '26: Annual Sufi & Rock Fusion Night",
    "event_category": "Cultural",
    "event_campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "student_name": "Abhishek Rawat",
    "student_email": "abhishek.rawat.3216@gmail.com",
    "phone": "+91 97472 11936",
    "degree": "BCA - 2nd Year",
    "roll_no": "GEHU-2024-DMD-628",
    "campus": "GRAPHIC ERA DEEMED UNIVERSITY",
    "ticket_code": "SPIDER-DMD-32-3928",
    "team_name": "Byte Force 2",
    "team_size": "3",
    "track_info": "Standard Track / Team Batch 1",
    "github_link": "https://github.com/abhishek-rawat-spider",
    "details_json": {
      "registrationSource": "Spider-Pass Verified Portal"
    },
    "created_at": "2026-10-11T17:30:00.000Z"
  }
]

export const DEFAULT_GOOGLE_SHEETS = {
  // --- 4 Campus Master Spreadsheets ---
  campus_bhimtal: {
    campusKey: 'campus_bhimtal',
    campusName: 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
    sheetName: 'GEHU Bhimtal Campus Master Sheet',
    sheetUrl: 'https://docs.google.com/spreadsheets/d/1GEHU_Bhimtal_Campus_Master_Registry/edit?usp=sharing',
    autoSync: true
  },
  campus_haldwani: {
    campusKey: 'campus_haldwani',
    campusName: 'GRAPHIC ERA HILL UNIVERSITY HALDWANI',
    sheetName: 'GEHU Haldwani Campus Master Sheet',
    sheetUrl: 'https://docs.google.com/spreadsheets/d/1GEHU_Haldwani_Campus_Master_Registry/edit?usp=sharing',
    autoSync: true
  },
  campus_dehradun: {
    campusKey: 'campus_dehradun',
    campusName: 'GRAPHIC ERA HILL UNIVERSITY DEHRADUN',
    sheetName: 'GEHU Dehradun Campus Master Sheet',
    sheetUrl: 'https://docs.google.com/spreadsheets/d/1GEHU_Dehradun_Campus_Master_Registry/edit?usp=sharing',
    autoSync: true
  },
  campus_deemed: {
    campusKey: 'campus_deemed',
    campusName: 'GRAPHIC ERA DEEMED UNIVERSITY',
    sheetName: 'GEU Deemed University Master Sheet',
    sheetUrl: 'https://docs.google.com/spreadsheets/d/1GEU_Deemed_Campus_Master_Registry/edit?usp=sharing',
    autoSync: true
  },

  // --- Individual Event Spreadsheets (All Events) ---
  1: {
    eventId: 1,
    eventName: "\ud83c\udfd4\ufe0f Himalayan Web-Drone Flight & Aerial Photography",
    sheetId: "1GEHU_1_Himalayan_Web_Drone_Flight_Aerial_Photog_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_1_Himalayan_Web_Drone_Flight_Aerial_Photog_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_1_AutoSync/exec",
    autoSync: true
  },
  2: {
    eventId: 2,
    eventName: "Graphite 2026: The Ultimate Spider-Man Themed Hackathon \ud83d\udd78\ufe0f\u26a1",
    sheetId: "1GEHU_2_Graphite_2026_The_Ultimate_Spider_Man_Th_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_2_Graphite_2026_The_Ultimate_Spider_Man_Th_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_2_AutoSync/exec",
    autoSync: true
  },
  3: {
    eventId: 3,
    eventName: "\ud83d\udd77\ufe0f Multiverse Hackathon ",
    sheetId: "1GEHU_3_Multiverse_Hackathon_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_3_Multiverse_Hackathon_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_3_AutoSync/exec",
    autoSync: true
  },
  4: {
    eventId: 4,
    eventName: "\u26a1 Watch The Code: National Level Hackathon",
    sheetId: "1GEHU_4_Watch_The_Code_National_Level_Hackathon_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_4_Watch_The_Code_National_Level_Hackathon_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_4_AutoSync/exec",
    autoSync: true
  },
  5: {
    eventId: 5,
    eventName: "\ud83c\udfad Web-Head Comic, Animation & Graphic Arts Battle",
    sheetId: "1GEHU_5_Web_Head_Comic_Animation_Graphic_Arts_Ba_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_5_Web_Head_Comic_Animation_Graphic_Arts_Ba_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_5_AutoSync/exec",
    autoSync: true
  },
  6: {
    eventId: 6,
    eventName: "\ud83d\udd25 Spider-Man 2099 Neon EDM Carnival",
    sheetId: "1GEHU_6_Spider_Man_2099_Neon_EDM_Carnival_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_6_Spider_Man_2099_Neon_EDM_Carnival_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_6_AutoSync/exec",
    autoSync: true
  },
  7: {
    eventId: 7,
    eventName: "\ud83c\udfc6 Inter-Campus Spider-Athletics & Track League",
    sheetId: "1GEHU_7_Inter_Campus_Spider_Athletics_Track_Leag_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_7_Inter_Campus_Spider_Athletics_Track_Leag_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_7_AutoSync/exec",
    autoSync: true
  },
  8: {
    eventId: 8,
    eventName: "\ud83e\uddec Oscorp Genetics & Bio-Tech Summit 2026",
    sheetId: "1GEHU_8_Oscorp_Genetics_Bio_Tech_Summit_2026_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_8_Oscorp_Genetics_Bio_Tech_Summit_2026_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_8_AutoSync/exec",
    autoSync: true
  },
  9: {
    eventId: 9,
    eventName: "\ud83d\ude80 Grafest ",
    sheetId: "1GEHU_9_Grafest_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_9_Grafest_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_9_AutoSync/exec",
    autoSync: true
  },
  10: {
    eventId: 10,
    eventName: "\ud83d\udee0\ufe0f Parker Nano-Materials & Structural Workshop",
    sheetId: "1GEHU_10_Parker_Nano_Materials_Structural_Worksho_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_10_Parker_Nano_Materials_Structural_Worksho_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_10_AutoSync/exec",
    autoSync: true
  },
  11: {
    eventId: 11,
    eventName: "\ud83c\udf10 Spider-Net Quantum Cybersecurity CTF",
    sheetId: "1GEHU_11_Spider_Net_Quantum_Cybersecurity_CTF_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_11_Spider_Net_Quantum_Cybersecurity_CTF_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_11_AutoSync/exec",
    autoSync: true
  },
  12: {
    eventId: 12,
    eventName: "\ud83c\udfce\ufe0f Formula Web-Speed Electric Kart Championship",
    sheetId: "1GEHU_12_Formula_Web_Speed_Electric_Kart_Champion_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_12_Formula_Web_Speed_Electric_Kart_Champion_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_12_AutoSync/exec",
    autoSync: true
  },
  13: {
    eventId: 13,
    eventName: "\u2744\ufe0f Hack The Winter Hackathon ",
    sheetId: "1GEHU_13_Hack_The_Winter_Hackathon_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_13_Hack_The_Winter_Hackathon_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_13_AutoSync/exec",
    autoSync: true
  },
  14: {
    eventId: 14,
    eventName: "\ud83c\udf0c AstroVerse: Himalayan Space-Tech & Galactic Exploration Fest",
    sheetId: "1GEHU_14_AstroVerse_Himalayan_Space_Tech_Galactic_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_14_AstroVerse_Himalayan_Space_Tech_Galactic_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_14_AutoSync/exec",
    autoSync: true
  },
  15: {
    eventId: 15,
    eventName: "\u26a1 Infotsav ",
    sheetId: "1GEHU_15_Infotsav_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_15_Infotsav_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_15_AutoSync/exec",
    autoSync: true
  },
  16: {
    eventId: 16,
    eventName: "\ud83c\udfc6 Spardha ",
    sheetId: "1GEHU_16_Spardha_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_16_Spardha_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_16_AutoSync/exec",
    autoSync: true
  },
  17: {
    eventId: 17,
    eventName: "\ud83c\udfad Grafest ",
    sheetId: "1GEHU_17_Grafest_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_17_Grafest_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_17_AutoSync/exec",
    autoSync: true
  },
  18: {
    eventId: 18,
    eventName: "\ud83c\udfa8 Kalakriti & Goonj: Youth Arts, Theatre & Folk Conclave",
    sheetId: "1GEHU_18_Kalakriti_Goonj_Youth_Arts_Theatre_Folk__Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_18_Kalakriti_Goonj_Youth_Arts_Theatre_Folk__Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_18_AutoSync/exec",
    autoSync: true
  },
  19: {
    eventId: 19,
    eventName: "\ud83d\ude81 AeroTrek: Himalayan Eco-Drone & Aerial Survey Expedition",
    sheetId: "1GEHU_19_AeroTrek_Himalayan_Eco_Drone_Aerial_Surv_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_19_AeroTrek_Himalayan_Eco_Drone_Aerial_Surv_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_19_AutoSync/exec",
    autoSync: true
  },
  20: {
    eventId: 20,
    eventName: "\ud83d\udd25 Dussehra Mahotsav & Ravan Dahan 2026 \u2014 Victory of Light",
    sheetId: "1GEHU_20_Dussehra_Mahotsav_Ravan_Dahan_2026_Victo_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_20_Dussehra_Mahotsav_Ravan_Dahan_2026_Victo_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_20_AutoSync/exec",
    autoSync: true
  },
  21: {
    eventId: 21,
    eventName: "\ud83c\udfad Student Grafest 2026 \u2014 Classical & Modern Dance Showcase",
    sheetId: "1GEHU_21_Student_Grafest_2026_Classical_Modern_Da_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_21_Student_Grafest_2026_Classical_Modern_Da_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_21_AutoSync/exec",
    autoSync: true
  },
  22: {
    eventId: 22,
    eventName: "Smart India Hackathon (SIH)",
    sheetId: "1GEHU_22_Smart_India_Hackathon_SIH_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_22_Smart_India_Hackathon_SIH_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_22_AutoSync/exec",
    autoSync: true
  },
  23: {
    eventId: 23,
    eventName: "13th Foundation Day Celebration",
    sheetId: "1GEHU_23_13th_Foundation_Day_Celebration_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_23_13th_Foundation_Day_Celebration_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_23_AutoSync/exec",
    autoSync: true
  },
  24: {
    eventId: 24,
    eventName: "Student GRAFEST 2026",
    sheetId: "1GEHU_24_Student_GRAFEST_2026_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_24_Student_GRAFEST_2026_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_24_AutoSync/exec",
    autoSync: true
  },
  25: {
    eventId: 25,
    eventName: "\ud83c\udfa8 Terai Youth Conclave & Literary Arts Gala ",
    sheetId: "1GEHU_25_Terai_Youth_Conclave_Literary_Arts_Gala_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_25_Terai_Youth_Conclave_Literary_Arts_Gala_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_25_AutoSync/exec",
    autoSync: true
  },
  26: {
    eventId: 26,
    eventName: "\u26bd Kumaon Premier Inter-College Sports Carnival",
    sheetId: "1GEHU_26_Kumaon_Premier_Inter_College_Sports_Carn_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_26_Kumaon_Premier_Inter_College_Sports_Carn_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_26_AutoSync/exec",
    autoSync: true
  },
  27: {
    eventId: 27,
    eventName: "\ud83c\udf10 Doon CyberShield ",
    sheetId: "1GEHU_27_Doon_CyberShield_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_27_Doon_CyberShield_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_27_AutoSync/exec",
    autoSync: true
  },
  28: {
    eventId: 28,
    eventName: "\ud83c\udfad Doon Valley Youth Theatre & Acoustic Music Fest ",
    sheetId: "1GEHU_28_Doon_Valley_Youth_Theatre_Acoustic_Music_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_28_Doon_Valley_Youth_Theatre_Acoustic_Music_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_28_AutoSync/exec",
    autoSync: true
  },
  29: {
    eventId: 29,
    eventName: "\ud83c\udff8 Spardha Inter-University Badminton & Table Tennis Open",
    sheetId: "1GEHU_29_Spardha_Inter_University_Badminton_Table_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_29_Spardha_Inter_University_Badminton_Table_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_29_AutoSync/exec",
    autoSync: true
  },
  30: {
    eventId: 30,
    eventName: "\u26a1 InnovateGEU ",
    sheetId: "1GEHU_30_InnovateGEU_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_30_InnovateGEU_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_30_AutoSync/exec",
    autoSync: true
  },
  31: {
    eventId: 31,
    eventName: "\ud83c\udfc6 All-India Inter-University Cricket Championship 2026",
    sheetId: "1GEHU_31_All_India_Inter_University_Cricket_Champ_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_31_All_India_Inter_University_Cricket_Champ_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_31_AutoSync/exec",
    autoSync: true
  },
  32: {
    eventId: 32,
    eventName: "\ud83c\udfb6 Swarotsav ",
    sheetId: "1GEHU_32_Swarotsav_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_32_Swarotsav_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_32_AutoSync/exec",
    autoSync: true
  },
  33: {
    eventId: 33,
    eventName: "INNOVATE 1.0 \u2013 AWS Ideathon",
    sheetId: "1GEHU_33_INNOVATE_10_AWS_Ideathon_Registry",
    sheetUrl: "https://docs.google.com/spreadsheets/d/1GEHU_33_INNOVATE_10_AWS_Ideathon_Registry/edit?usp=sharing",
    webhookUrl: "https://script.google.com/macros/s/AKfycbz_EVENT_33_AutoSync/exec",
    autoSync: true
  },
};

export const DEFAULT_PENDING_EVENTS = [
  {
    id: 101,
    title: "⚡ RoboWars 2026: Himalayan Combat Robotics Arena",
    description: "Annual inter-campus combat robotics tournament featuring 15kg & 30kg remote-controlled bot battles, spinning kinetic weapons, obstacle arenas, and live telemetry scoring. Safety protocols & drone coverage planned.",
    category: "Technical",
    venue: "Mechanical Workshop & Outer Ground, GEHU Bhimtal",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    image_url: "/assets/campuses/bhimtal.png",
    event_date: "2026-11-14",
    event_time: "10:00 AM",
    organizer_name: "Praveen Singh (Robotics Club Bhimtal)",
    rsvp_count: 0,
    status: "pending"
  },
  {
    id: 102,
    title: "🎙️ TEDx GraphicEra: Multiverse of Ideas & Tech Frontiers",
    description: "Official TEDx event hosted by Graphic Era University featuring 8 national keynote speakers covering quantum computing, neurotechnology, climate engineering, and startup scale-up.",
    category: "Academic",
    venue: "Silver Jubilee Convention Center, Clement Town Dehradun",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    image_url: "/assets/campuses/dehradun.png",
    event_date: "2026-11-20",
    event_time: "09:30 AM",
    organizer_name: "Ananya Rawat (TEDx Student Council Lead)",
    rsvp_count: 0,
    status: "pending"
  },
  {
    id: 103,
    title: "🎸 Nights of Kumaon: Acoustic Folk-Rock & Mountain Jam Fest",
    description: "Live musical extravaganza spotlighting indigenous Kumaoni folk instruments fused with modern indie-rock band performances, food carnival stalls, and student battle of the bands.",
    category: "Cultural",
    venue: "Open Amphitheatre, Haldwani Campus",
    campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    image_url: "/assets/campuses/haldwani.png",
    event_date: "2026-11-18",
    event_time: "05:00 PM",
    organizer_name: "Aarav Joshi (Swara Cultural Society Haldwani)",
    rsvp_count: 0,
    status: "pending"
  },
  {
    id: 104,
    title: "🧠 Quantum AI & Deep Learning Summit 2026",
    description: "Two-day national conference with industry researchers from Google & NVIDIA exploring Large Action Models, autonomous agent architectures, and hands-on PyTorch workshop.",
    category: "Technical",
    venue: "Auditorium Block C, GEHU Dehradun",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    image_url: "/assets/campuses/dehradun.png",
    event_date: "2026-11-25",
    event_time: "10:30 AM",
    organizer_name: "Aditya Verma (ACM Student Chapter)",
    rsvp_count: 0,
    status: "pending"
  },
  {
    id: 105,
    title: "🏎️ Formula Electric Kart Championship 2.0",
    description: "Student-engineered EV go-kart grand prix testing battery endurance, regenerative braking, torque management, and high-altitude hairpin turns on campus perimeter.",
    category: "Sports",
    venue: "Lake Circuit & East Perimeter, Bhimtal",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    image_url: "/assets/campuses/bhimtal.png",
    event_date: "2026-12-02",
    event_time: "11:00 AM",
    organizer_name: "Motorsport & SAE Collegiate Club",
    rsvp_count: 0,
    status: "pending"
  },
  {
    id: 106,
    title: "🎨 DesignSphere 2026: UI/UX & Web Animation Sprint",
    description: "Interactive design hackathon with Figma and Three.js masterclasses, micro-interaction critiques, and student portfolio design jams judged by industry product leads.",
    category: "Workshop",
    venue: "Creative Computing Lab 4, GEU Deemed",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    image_url: "/assets/campuses/dehradun.png",
    event_date: "2026-11-28",
    event_time: "01:00 PM",
    organizer_name: "Isha Bhandari (Graphic Era Design Guild)",
    rsvp_count: 0,
    status: "pending"
  }
];

export const DEFAULT_COMPANIES = [
  {
    id: "comp_1",
    name: "Atlassian",
    logo: "🔷",
    tier: "Super Dream",
    category: "Product & Enterprise Software",
    highestPackage: "₹54.03 LPA",
    averagePackage: "₹42.50 LPA",
    role: "Software Development Engineer (SDE-1)",
    location: "Bengaluru / Remote",
    hiresCount: 8,
    driveDate: "14 Oct 2026",
    status: "Completed (8 Selected)",
    statusColor: "bg-emerald-950 text-emerald-400 border-emerald-500/40",
    eligibleCampuses: ["GEHU Dehradun", "GEHU Bhimtal", "GEHU Haldwani", "GEU Deemed"],
    selectionRounds: ["Online Coding Test (DSA)", "Technical Interview 1 (System Design)", "Technical Interview 2 (Data Structures)", "Values & Culture Fit"]
  },
  {
    id: "comp_2",
    name: "Google",
    logo: "🌐",
    tier: "Super Dream",
    category: "Global Tech Giant",
    highestPackage: "₹51.20 LPA",
    averagePackage: "₹38.00 LPA",
    role: "Software Engineer (SWE / Cloud)",
    location: "Bengaluru / Hyderabad",
    hiresCount: 14,
    driveDate: "22 Oct 2026",
    status: "Completed (14 Selected)",
    statusColor: "bg-emerald-950 text-emerald-400 border-emerald-500/40",
    eligibleCampuses: ["GEHU Dehradun", "GEHU Bhimtal", "GEHU Haldwani", "GEU Deemed"],
    selectionRounds: ["Google Online Challenge", "Technical Round 1 (Algorithms)", "Technical Round 2 (Systems)", "Googlyness & Leadership"]
  },
  {
    id: "comp_3",
    name: "Microsoft",
    logo: "🪟",
    tier: "Super Dream",
    category: "Cloud & Enterprise Computing",
    highestPackage: "₹48.50 LPA",
    averagePackage: "₹34.00 LPA",
    role: "Software Engineer & AI Intern",
    location: "Noida / Hyderabad / Bengaluru",
    hiresCount: 26,
    driveDate: "18 Oct 2026",
    status: "Completed (26 Selected)",
    statusColor: "bg-emerald-950 text-emerald-400 border-emerald-500/40",
    eligibleCampuses: ["GEHU Dehradun", "GEHU Bhimtal", "GEHU Haldwani", "GEU Deemed"],
    selectionRounds: ["Codility Online Assessment", "Technical 1 (DSA & Problem Solving)", "Technical 2 (OS & Networks)", "AA Interview"]
  },
  {
    id: "comp_4",
    name: "Amazon",
    logo: "📦",
    tier: "Super Dream",
    category: "E-Commerce & AWS Cloud",
    highestPackage: "₹44.00 LPA",
    averagePackage: "₹28.50 LPA",
    role: "SDE-1 & AWS Cloud Support",
    location: "Gurugram / Bengaluru / Hyderabad",
    hiresCount: 38,
    driveDate: "26 Oct 2026",
    status: "Completed (38 Selected)",
    statusColor: "bg-emerald-950 text-emerald-400 border-emerald-500/40",
    eligibleCampuses: ["GEHU Dehradun", "GEHU Bhimtal", "GEHU Haldwani", "GEU Deemed"],
    selectionRounds: ["Online Assessment (DSA + Work Style)", "Technical Round 1", "Technical Round 2", "Bar Raiser Interview"]
  },
  {
    id: "comp_5",
    name: "NVIDIA",
    logo: "🟩",
    tier: "Super Dream",
    category: "AI, Hardware & GPU Computing",
    highestPackage: "₹42.00 LPA",
    averagePackage: "₹32.00 LPA",
    role: "System Software Engineer (CUDA & AI)",
    location: "Pune / Bengaluru",
    hiresCount: 11,
    driveDate: "02 Nov 2026",
    status: "Ongoing Shortlist",
    statusColor: "bg-cyan-950 text-cyan-400 border-cyan-500/40",
    eligibleCampuses: ["GEHU Dehradun", "GEHU Bhimtal", "GEU Deemed"],
    selectionRounds: ["HackerRank Coding Test", "C++ & Computer Architecture Round", "Deep Learning / Parallel Computing", "Managerial Interview"]
  },
  {
    id: "comp_6",
    name: "Adobe",
    logo: "🅰️",
    tier: "Super Dream",
    category: "Creative Cloud & Digital Media",
    highestPackage: "₹41.50 LPA",
    averagePackage: "₹30.00 LPA",
    role: "Member of Technical Staff (MTS-1)",
    location: "Noida / Bengaluru",
    hiresCount: 16,
    driveDate: "08 Nov 2026",
    status: "Registrations Open",
    statusColor: "bg-purple-950 text-purple-400 border-purple-500/40",
    eligibleCampuses: ["GEHU Dehradun", "GEHU Bhimtal", "GEHU Haldwani", "GEU Deemed"],
    selectionRounds: ["Adobe Analytics / DSA Test", "Tech Round 1", "Tech Round 2", "Director Round"]
  },
  {
    id: "comp_7",
    name: "Goldman Sachs",
    logo: "🪙",
    tier: "Super Dream",
    category: "FinTech & Investment Banking",
    highestPackage: "₹36.00 LPA",
    averagePackage: "₹26.00 LPA",
    role: "Quantitative Technology Analyst",
    location: "Bengaluru",
    hiresCount: 12,
    driveDate: "12 Nov 2026",
    status: "Upcoming Drive",
    statusColor: "bg-amber-950 text-amber-400 border-amber-500/40",
    eligibleCampuses: ["GEHU Dehradun", "GEHU Bhimtal", "GEHU Haldwani", "GEU Deemed"],
    selectionRounds: ["Aptitude & DSA Assessment", "Technical Interview (Data Structures & Maths)", "Systems & DB", "HR Round"]
  },
  {
    id: "comp_8",
    name: "Cisco Systems",
    logo: "🌐",
    tier: "Dream",
    category: "Cybersecurity & Networking",
    highestPackage: "₹28.50 LPA",
    averagePackage: "₹18.00 LPA",
    role: "Network Security Engineer",
    location: "Bengaluru / Chennai",
    hiresCount: 24,
    driveDate: "16 Nov 2026",
    status: "Upcoming Drive",
    statusColor: "bg-blue-950 text-blue-400 border-blue-500/40",
    eligibleCampuses: ["GEHU Dehradun", "GEHU Bhimtal", "GEHU Haldwani", "GEU Deemed"],
    selectionRounds: ["Cisco Ideathon / Aptitude + Coding", "Technical Round (TCP/IP & Linux)", "Managerial", "HR"]
  },
  {
    id: "comp_9",
    name: "Oracle",
    logo: "🔴",
    tier: "Dream",
    category: "Database & Cloud Infrastructure",
    highestPackage: "₹24.00 LPA",
    averagePackage: "₹16.50 LPA",
    role: "Cloud Applications Engineer",
    location: "Noida / Hyderabad",
    hiresCount: 32,
    driveDate: "20 Nov 2026",
    status: "Upcoming Drive",
    statusColor: "bg-rose-950 text-rose-400 border-rose-500/40",
    eligibleCampuses: ["GEHU Dehradun", "GEHU Bhimtal", "GEHU Haldwani", "GEU Deemed"],
    selectionRounds: ["Online Coding & SQL Test", "Technical 1", "Technical 2", "HR Interview"]
  },
  {
    id: "comp_10",
    name: "Zomato / Blinkit",
    logo: "🛵",
    tier: "Dream",
    category: "High-Scale Consumer Tech",
    highestPackage: "₹26.00 LPA",
    averagePackage: "₹19.00 LPA",
    role: "Full-Stack Software Engineer",
    location: "Gurugram",
    hiresCount: 15,
    driveDate: "24 Nov 2026",
    status: "Upcoming Drive",
    statusColor: "bg-red-950 text-red-400 border-red-500/40",
    eligibleCampuses: ["GEHU Dehradun", "GEHU Bhimtal", "GEHU Haldwani", "GEU Deemed"],
    selectionRounds: ["Machine Coding Round", "DSA & Scalability Interview", "Engineering Culture Fit"]
  },
  {
    id: "comp_11",
    name: "Salesforce",
    logo: "☁️",
    tier: "Super Dream",
    category: "Enterprise CRM & AI",
    highestPackage: "₹38.00 LPA",
    averagePackage: "₹27.00 LPA",
    role: "Associate Software Engineer",
    location: "Hyderabad / Bengaluru",
    hiresCount: 10,
    driveDate: "28 Nov 2026",
    status: "Upcoming Drive",
    statusColor: "bg-sky-950 text-sky-400 border-sky-500/40",
    eligibleCampuses: ["GEHU Dehradun", "GEHU Bhimtal", "GEU Deemed"],
    selectionRounds: ["HackerRank Coding Assessment", "Technical 1", "Technical 2", "Hiring Manager Round"]
  },
  {
    id: "comp_12",
    name: "Qualcomm",
    logo: "📶",
    tier: "Super Dream",
    category: "Wireless & Embedded Systems",
    highestPackage: "₹32.00 LPA",
    averagePackage: "₹22.00 LPA",
    role: "Embedded Software Engineer (5G / SoC)",
    location: "Hyderabad / Bengaluru",
    hiresCount: 14,
    driveDate: "05 Dec 2026",
    status: "Upcoming Drive",
    statusColor: "bg-indigo-950 text-indigo-400 border-indigo-500/40",
    eligibleCampuses: ["GEHU Dehradun", "GEHU Bhimtal", "GEU Deemed"],
    selectionRounds: ["C/C++ & DSA Assessment", "OS & Embedded Systems Round", "System Architecture", "HR"]
  }
];

export const DEFAULT_PLACED_STUDENTS = [
  {
    id: "pl_1",
    studentName: "Ujjwal Chaudhary",
    rollNo: "22GEHU-CSE-001",
    degree: "B.Tech Computer Science & Engineering",
    batch: "2026",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    company: "Atlassian",
    companyLogo: "🔷",
    package: "₹54.03 LPA",
    tier: "Super Dream",
    role: "Software Development Engineer (SDE-1)",
    skills: ["Distributed Systems", "C++", "Java", "Kubernetes", "AWS"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=UjjwalChaudhary&backgroundColor=b6e3f4",
    quote: "Building full-stack projects and winning 24-hour hackathons like Graphite at Bhimtal gave me the algorithmic confidence to crack the Atlassian SDE role.",
    linkedin: "https://linkedin.com/in/ujjwalchaudhary",
    offerType: "Highest Package (Campus Record)"
  },
  {
    id: "pl_2",
    studentName: "Aaradhya Sharma",
    rollNo: "22GEHU-AIML-014",
    degree: "B.Tech AI & Machine Learning",
    batch: "2026",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    company: "Google",
    companyLogo: "🌐",
    package: "₹51.20 LPA",
    tier: "Super Dream",
    role: "Software Engineer (Cloud & AI)",
    skills: ["Python", "PyTorch", "TensorFlow", "Go", "Docker"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=AaradhyaSharma&backgroundColor=c0aede",
    quote: "The rigorous coding tests, faculty guidance, and research papers published during college helped me excel through all 4 Google technical rounds.",
    linkedin: "https://linkedin.com",
    offerType: "Super Dream Offer"
  },
  {
    id: "pl_3",
    studentName: "Tushar Singh Rawat",
    rollNo: "22GEHU-CSE-089",
    degree: "B.Tech Computer Science & Engineering",
    batch: "2026",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    company: "Microsoft",
    companyLogo: "🪟",
    package: "₹48.50 LPA",
    tier: "Super Dream",
    role: "Software Engineer — Azure Core",
    skills: ["C#", "C++", "Azure", "Distributed Storage", "Microservices"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=TusharSingh&backgroundColor=d1d4f9",
    quote: "Solving 600+ LeetCode problems and practicing system design mock interviews with the university placement cell made Microsoft interviews smooth.",
    linkedin: "https://linkedin.com",
    offerType: "Super Dream Offer"
  },
  {
    id: "pl_4",
    studentName: "Ishita Bhatt",
    rollNo: "22GEU-CSE-112",
    degree: "B.Tech Computer Science & Engineering",
    batch: "2026",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    company: "Amazon",
    companyLogo: "📦",
    package: "₹44.00 LPA",
    tier: "Super Dream",
    role: "Software Development Engineer (AWS Cloud)",
    skills: ["Java", "AWS Lambda", "DynamoDB", "Spring Boot", "React"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=IshitaBhatt&backgroundColor=ffd5dc",
    quote: "Graphic Era's industrial AWS lab training and live cloud deployments gave me an immense edge during the Bar Raiser round at Amazon.",
    linkedin: "https://linkedin.com",
    offerType: "Super Dream Offer"
  },
  {
    id: "pl_5",
    studentName: "Rohan Pant",
    rollNo: "22GEHU-HLD-045",
    degree: "B.Tech Computer Science & Engineering",
    batch: "2026",
    campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    company: "NVIDIA",
    companyLogo: "🟩",
    package: "₹42.00 LPA",
    tier: "Super Dream",
    role: "System Software Engineer (CUDA & Parallel AI)",
    skills: ["C++20", "CUDA", "Computer Architecture", "Linux Kernel", "OpenMP"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=RohanPant&backgroundColor=ffdfbf",
    quote: "Focusing deeply on low-level OS fundamentals and GPU computing at Haldwani campus helped me clear NVIDIA's technical tests.",
    linkedin: "https://linkedin.com",
    offerType: "Super Dream Offer"
  },
  {
    id: "pl_6",
    studentName: "Sneha Joshi",
    rollNo: "22GEHU-CSE-134",
    degree: "B.Tech Computer Science (Data Science)",
    batch: "2026",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    company: "Adobe",
    companyLogo: "🅰️",
    package: "₹41.50 LPA",
    tier: "Super Dream",
    role: "Member of Technical Staff (Creative Cloud)",
    skills: ["TypeScript", "WebAssembly", "C++", "Graphics Shaders", "Node.js"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=SnehaJoshi&backgroundColor=c0aede",
    quote: "Adobe values strong problem solving and engineering precision. Graphic Era's hackathons pushed my limits in modern web architecture.",
    linkedin: "https://linkedin.com",
    offerType: "Super Dream Offer"
  },
  {
    id: "pl_7",
    studentName: "Vikramaditya Bisht",
    rollNo: "22GEHU-BHT-078",
    degree: "B.Tech Computer Science & Engineering",
    batch: "2026",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    company: "Salesforce",
    companyLogo: "☁️",
    package: "₹38.00 LPA",
    tier: "Super Dream",
    role: "Associate Software Engineer",
    skills: ["Apex", "Java", "Salesforce Core", "REST APIs", "PostgreSQL"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=VikramBisht&backgroundColor=b6e3f4",
    quote: "Consistent mentoring by university faculty and continuous competitive programming led me directly to the Salesforce dream offer.",
    linkedin: "https://linkedin.com",
    offerType: "Super Dream Offer"
  },
  {
    id: "pl_8",
    studentName: "Ananya Joshi",
    rollNo: "22GEU-CSE-210",
    degree: "B.Tech Computer Science (Cybersecurity)",
    batch: "2026",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    company: "Goldman Sachs",
    companyLogo: "🪙",
    package: "₹36.00 LPA",
    tier: "Super Dream",
    role: "Quantitative Technology Analyst",
    skills: ["Python", "Financial Modelling", "C++", "Time Series", "Redis"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=AnanyaJoshi&backgroundColor=ffd5dc",
    quote: "The combination of strong mathematical foundations and data structures taught in classes was critical for Goldman Sachs quantitative rounds.",
    linkedin: "https://linkedin.com",
    offerType: "Super Dream Offer"
  },
  {
    id: "pl_9",
    studentName: "Shivam Gairola",
    rollNo: "22GEHU-BHT-092",
    degree: "B.Tech Computer Science & Engineering",
    batch: "2026",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    company: "Qualcomm",
    companyLogo: "📶",
    package: "₹32.00 LPA",
    tier: "Super Dream",
    role: "Embedded Software Engineer (SoC Modem)",
    skills: ["Embedded C", "RTOS", "ARM Cortex", "Linux Driver", "Peripherals"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=ShivamGairola&backgroundColor=d1d4f9",
    quote: "Building drone flight controllers and IoT bots during campus hackathons prepared me practically for Qualcomm's hardware-software co-design rounds.",
    linkedin: "https://linkedin.com",
    offerType: "Super Dream Offer"
  },
  {
    id: "pl_10",
    studentName: "Priya Negi",
    rollNo: "22GEHU-HLD-061",
    degree: "B.Tech Computer Science & Engineering",
    batch: "2026",
    campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    company: "Cisco Systems",
    companyLogo: "🌐",
    package: "₹28.50 LPA",
    tier: "Dream",
    role: "Network Security Engineer",
    skills: ["Network Security", "Wireshark", "Python", "BGP / OSPF", "Firewalls"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=PriyaNegi&backgroundColor=c0aede",
    quote: "Cisco Ideathon conducted on campus provided direct interview fast-tracking. Grateful to the placement coordinators for the relentless support.",
    linkedin: "https://linkedin.com",
    offerType: "Dream Offer"
  },
  {
    id: "pl_11",
    studentName: "Kartik Bisht",
    rollNo: "22GEHU-DDO-188",
    degree: "B.Tech Computer Science (Cloud Computing)",
    batch: "2026",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    company: "Zomato",
    companyLogo: "🛵",
    package: "₹26.00 LPA",
    tier: "Dream",
    role: "Full-Stack SDE (High Scale Microservices)",
    skills: ["Go", "React", "Kafka", "PostgreSQL", "Redis", "Docker"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=KartikBisht&backgroundColor=b6e3f4",
    quote: "The machine coding round required building an in-memory caching engine from scratch in 90 minutes. College projects made it second nature.",
    linkedin: "https://linkedin.com",
    offerType: "Dream Offer"
  },
  {
    id: "pl_12",
    studentName: "Riya Mehta",
    rollNo: "22GEU-CSE-299",
    degree: "B.Tech Computer Science & Engineering",
    batch: "2026",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    company: "Oracle",
    companyLogo: "🔴",
    package: "₹24.00 LPA",
    tier: "Dream",
    role: "Cloud Applications Engineer",
    skills: ["Java", "PL/SQL", "Oracle Cloud", "Microservices", "REST"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=RiyaMehta&backgroundColor=ffd5dc",
    quote: "Cracked Oracle Cloud Systems campus drive. The mock assessment portal and alumni mentorship sessions arranged by Graphic Era were invaluable.",
    linkedin: "https://linkedin.com",
    offerType: "Dream Offer"
  },
  {
    id: "pl_13",
    studentName: "Harshit Upadhyay",
    rollNo: "22GEHU-BHT-105",
    degree: "B.Tech Computer Science & Engineering",
    batch: "2026",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    company: "Morgan Stanley",
    companyLogo: "💼",
    package: "₹29.00 LPA",
    tier: "Dream",
    role: "Technology Associate — Algorithmic Trading",
    skills: ["C++", "Low Latency", "Linux", "Multithreading", "Algorithms"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=HarshitUpadhyay&backgroundColor=ffdfbf",
    quote: "The emphasis on data structures and object-oriented design in our curriculum laid the strongest bedrock for clearing Morgan Stanley.",
    linkedin: "https://linkedin.com",
    offerType: "Dream Offer"
  },
  {
    id: "pl_14",
    studentName: "Deepika Arya",
    rollNo: "22GEHU-HLD-092",
    degree: "B.Tech Computer Science & Engineering",
    batch: "2026",
    campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    company: "Walmart Global Tech",
    companyLogo: "🏬",
    package: "₹25.50 LPA",
    tier: "Dream",
    role: "Software Engineer — Supply Chain Tech",
    skills: ["Java", "Kafka", "Cassandra", "Spring Cloud", "Kubernetes"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=DeepikaArya&backgroundColor=c0aede",
    quote: "Securing a dream placement right from our Haldwani campus proves that dedication combined with Graphic Era's centralized hiring pool yields top results.",
    linkedin: "https://linkedin.com",
    offerType: "Dream Offer"
  },
  {
    id: "pl_15",
    studentName: "Ayush Tiwari",
    rollNo: "22GEHU-DDO-219",
    degree: "B.Tech AI & Data Science",
    batch: "2026",
    campus: "GRAPHIC ERA HILL UNIVERSITY DEHRADUN",
    company: "JPMorgan Chase & Co.",
    companyLogo: "🏛️",
    package: "₹22.00 LPA",
    tier: "Dream",
    role: "Software Engineer — Corporate Technology",
    skills: ["Python", "React", "AWS", "SQL", "Cybersecurity"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=AyushTiwari&backgroundColor=d1d4f9",
    quote: "The Code for Good hackathon hosted in collaboration with the university helped me directly convert the internship into a full-time SDE offer.",
    linkedin: "https://linkedin.com",
    offerType: "Dream Offer"
  },
  {
    id: "pl_16",
    studentName: "Divyanshi Chauhan",
    rollNo: "22GEU-CSE-340",
    degree: "B.Tech Computer Science & Engineering",
    batch: "2026",
    campus: "GRAPHIC ERA DEEMED UNIVERSITY",
    company: "Intuit",
    companyLogo: "📊",
    package: "₹34.00 LPA",
    tier: "Super Dream",
    role: "Software Engineer — TurboTax Platform",
    skills: ["Java", "React", "GraphQL", "AWS", "Microservices"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=DivyanshiChauhan&backgroundColor=ffd5dc",
    quote: "Intuit's culture of customer empathy and clean architecture aligned with our university capstone project standards.",
    linkedin: "https://linkedin.com",
    offerType: "Super Dream Offer"
  },
  {
    id: "pl_17",
    studentName: "Kunal Bora",
    rollNo: "22GEHU-BHT-142",
    degree: "B.Tech Computer Science (Cybersecurity)",
    batch: "2026",
    campus: "GRAPHIC ERA HILL UNIVERSITY BHIMTAL",
    company: "Palo Alto Networks",
    companyLogo: "🛡️",
    package: "₹53.50 LPA",
    tier: "Super Dream",
    role: "Security Software Engineer (Cloud Security)",
    skills: ["Golang", "Kubernetes", "Linux eBPF", "Network Security", "Docker"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=KunalBora&backgroundColor=b6e3f4",
    quote: "Participating in CTF competitions organized by Graphic Era's cybersecurity chapter gave me deep practical knowledge of threat detection.",
    linkedin: "https://linkedin.com",
    offerType: "Super Dream Offer (International Track)"
  },
  {
    id: "pl_18",
    studentName: "Bhavna Pande",
    rollNo: "22GEHU-HLD-115",
    degree: "B.Tech Computer Science & Engineering",
    batch: "2026",
    campus: "GRAPHIC ERA HILL UNIVERSITY HALDWANI",
    company: "Uber",
    companyLogo: "🚗",
    package: "₹45.00 LPA",
    tier: "Super Dream",
    role: "Software Engineer — Mobility Systems",
    skills: ["Go", "Distributed Systems", "Geospatial Indexing", "Kafka", "MySQL"],
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=BhavnaPande&backgroundColor=c0aede",
    quote: "System design discussions in campus coding clubs helped me tackle Uber's high-throughput real-time routing design problem in the final round.",
    linkedin: "https://linkedin.com",
    offerType: "Super Dream Offer"
  }
];

