import { useState, useRef } from 'react'

// Interactive Spotlight Card with cursor-tracking lighting effect
function SpotlightCard({ children, className = '', glowColor = 'rgba(226, 27, 36, 0.22)' }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 65%)`
        }}
      />
      {children}
    </div>
  )
}

export default function CampusLeadershipSection({ activeCampus }) {
  const campusId = activeCampus?.id || 'bhimtal'
  const isBhimtal  = campusId === 'bhimtal'  || activeCampus?.name?.includes('BHIMTAL')
  const isHaldwani = campusId === 'haldwani' || activeCampus?.name?.includes('HALDWANI')
  const isDehradun = campusId === 'dehradun' || activeCampus?.name?.includes('DEHRADUN')

  return (
    <section className="mt-16 mb-20 space-y-12">
      {/* ── Section Header ── */}
      <div className="relative text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-950/70 via-black to-red-950/70 border border-red-500/50 shadow-spider-glow text-xs font-mono text-red-400">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>GRAPHIC ERA INSTITUTIONAL DOSSIER &amp; LEADERSHIP</span>
        </div>
        <h2 className="spider-heading text-2xl sm:text-4xl text-white">
          CAMPUS GENESIS &amp; <span className="text-red-500">SUPREME LEADERSHIP</span>
        </h2>
        <p className="text-xs sm:text-sm font-rajdhani text-gray-400 font-medium max-w-2xl mx-auto">
          Hover your cursor across the dossier cards to activate the interactive Stark-Tech spotlight sensors.
        </p>
      </div>

      {/* ══════════════════════════════════════════════ */}
      {/* 1. SUPREME CHAIRMAN — ALL 4 CAMPUSES          */}
      {/* ══════════════════════════════════════════════ */}
      <SpotlightCard
        glowColor="rgba(234, 179, 8, 0.2)"
        className="bg-[#090D18]/90 border border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_rgba(234,179,8,0.15)] backdrop-blur-2xl"
      >
        <div className="relative z-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Chairman Photo */}
          <div className="relative flex-shrink-0 group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-red-600 to-yellow-500 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-700 animate-pulse-glow" />
            <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-2xl bg-black">
              <img src="/assets/leadership/chairman.jpg" alt="Prof. (Dr.) Kamal Ghanshala - Chairman"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-950/90 border border-amber-400 text-amber-300 shadow-spider-glow">
                  FOUNDER &amp; CHAIRMAN
                </span>
              </div>
            </div>
          </div>

          {/* Chairman Bio */}
          <div className="flex-1 space-y-4 text-left">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-red-600/30 border border-red-500 text-red-300 flex items-center gap-1.5">
                <span>👑</span> SUPREME CHAIR – ALL 4 CAMPUSES
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-500/20 border border-amber-500 text-amber-300">SINCE 1993</span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-500/20 border border-blue-500 text-blue-300">NAAC A+ ACCREDITED</span>
            </div>
            <div>
              <h3 className="spider-heading text-2xl sm:text-3xl text-white">Prof. (Dr.) Kamal Ghanshala</h3>
              <p className="text-xs sm:text-sm font-mono text-amber-400 font-semibold mt-0.5">
                Founder &amp; Chairman — Graphic Era Group of Institutions
              </p>
            </div>
            <div className="space-y-3 text-xs sm:text-sm font-rajdhani text-gray-300 leading-relaxed font-medium">
              <p>
                <strong className="text-white font-semibold">Prof. (Dr.) Kamal Ghanshala</strong> is the Founder and President of the Graphic Era Group of Institutions and is identified as Chairman on the official leadership page of Graphic Era (Deemed to be University). He began his educational journey in <strong className="text-amber-300">1993</strong> by establishing Graphic Era Computer Centre in Dehradun with a vision to make quality technical education accessible to young people.
              </p>
              <p>
                Through his dedication, entrepreneurial spirit and commitment to academic excellence, Graphic Era grew into a prestigious group of educational institutions, including Graphic Era Hill University, established in <strong className="text-amber-300">2011</strong> with campuses in Dehradun and Bhimtal. His vision focuses on combining quality education with practical skills, technological innovation, research, industry collaboration and holistic student development.
              </p>
              <p className="text-gray-400">
                He encourages students to think creatively, develop professional competence, pursue their ambitions and contribute positively to society. His visionary leadership continues to inspire the institution's commitment to academic excellence, innovation and the development of future professionals across Uttarakhand and India.
              </p>
            </div>
            {/* Metrics */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { val: '1993', label: 'FOUNDING YEAR', color: 'text-white' },
                { val: '4 CAMPUSES', label: 'MULTIVERSE GRID', color: 'text-red-400' },
                { val: 'NAAC A+', label: 'ACCREDITATION', color: 'text-amber-400' },
                { val: '30,000+', label: 'ALUMNI NETWORK', color: 'text-blue-400' },
              ].map(m => (
                <div key={m.label} className="p-2.5 rounded-xl bg-black/60 border border-[#1E293B] text-center">
                  <span className={`font-chakra italic font-black text-lg ${m.color}`}>{m.val}</span>
                  <span className="block text-[10px] font-mono text-gray-400">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SpotlightCard>

      {/* ══════════════════════════════════════════════ */}
      {/* BHIMTAL CAMPUS SECTION                        */}
      {/* ══════════════════════════════════════════════ */}
      {isBhimtal && (
        <div className="space-y-12">

          {/* ── Bhimtal Campus Photos (FIRST) ── */}
          <SpotlightCard
            glowColor="rgba(226, 27, 36, 0.18)"
            className="bg-[#090D18]/90 border border-red-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl"
          >
            <div className="relative z-20 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-red-400">📸</span>
                <h4 className="spider-heading text-base sm:text-lg text-white">BHIMTAL CAMPUS — 4K HIGHLIGHTS</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group relative rounded-2xl overflow-hidden border border-red-500/40 shadow-spider-glow h-64 sm:h-72">
                  <img src="/assets/leadership/bhimtal_aerial.jpg" alt="GEHU Bhimtal Aerial View"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <span className="font-chakra italic font-bold text-sm text-white block">High-Altitude Mountain Campus</span>
                      <span className="text-[11px] font-mono text-red-300">Nestled in Kumaon Pine Valley • Sattal Road</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-mono text-gray-300 border border-gray-700">4K AERIAL</span>
                  </div>
                </div>
                <div className="group relative rounded-2xl overflow-hidden border border-red-500/40 shadow-spider-glow h-64 sm:h-72">
                  <img src="/assets/leadership/bhimtal_amphi.jpg" alt="GEHU Bhimtal Amphitheater"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <span className="font-chakra italic font-bold text-sm text-white block">Central Open-Air Amphitheater</span>
                      <span className="text-[11px] font-mono text-red-300">Hub for Hackathons, Fests &amp; Cultural Parades</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-mono text-gray-300 border border-gray-700">CAMPUS CORE</span>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* ── Bhimtal Director (BELOW PHOTOS) ── */}
          <SpotlightCard
            glowColor="rgba(226, 27, 36, 0.25)"
            className="bg-[#090D18]/90 border border-red-500/40 rounded-3xl p-6 sm:p-10 shadow-modal-glow backdrop-blur-2xl"
          >
            <div className="relative z-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="relative flex-shrink-0 group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 via-rose-700 to-red-950 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-700 animate-pulse-glow" />
                <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-red-500 shadow-2xl bg-black">
                  <img src="/assets/leadership/director_bhimtal.jpg" alt="Prof. (Col.) Anil Kumar Nair (Retd.) - Director"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-red-950/90 border border-red-500 text-red-300 shadow-spider-glow">
                      CAMPUS DIRECTOR
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-red-600/30 border border-red-500 text-red-300 flex items-center gap-1.5">
                    <span>🎖️</span> MILITARY LEADERSHIP &amp; DISCIPLINE
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#0E1526] border border-[#1E293B] text-gray-300">
                    📍 BHIMTAL CAMPUS
                  </span>
                </div>
                <div>
                  <h3 className="spider-heading text-2xl sm:text-3xl text-white">Prof. (Col.) Anil Kumar Nair (Retd.)</h3>
                  <p className="text-xs sm:text-sm font-mono text-red-400 font-semibold mt-0.5">
                    Director — Graphic Era Hill University, Bhimtal Campus
                  </p>
                </div>
                <div className="space-y-3 text-xs sm:text-sm font-rajdhani text-gray-300 leading-relaxed font-medium">
                  <p>
                    <strong className="text-white font-semibold">Prof. (Col.) Anil Kumar Nair (Retd.)</strong> is the Director of Graphic Era Hill University, Bhimtal Campus, according to the university's official website. With an illustrious background in military leadership, administration and institutional management, he plays an important role in campus leadership, student development and the promotion of academic excellence.
                  </p>
                  <p>
                    His strategic approach encourages students to look beyond classroom learning and focus on practical knowledge, technical skills, discipline, teamwork, innovation and personal growth. He also motivates students to make effective use of campus infrastructure, specialised laboratories and extracurricular opportunities to prepare themselves for high-impact professional careers.
                  </p>
                  <p className="text-gray-400">
                    Under his dynamic leadership, GEHU Bhimtal promotes an environment that encourages responsible citizenship, cutting-edge research, startup innovation and holistic student empowerment.
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* ── Bhimtal Campus About (BELOW DIRECTOR) ── */}
          <SpotlightCard
            glowColor="rgba(226, 27, 36, 0.2)"
            className="bg-[#090D18]/90 border border-red-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-2xl"
          >
            <div className="relative z-20 space-y-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1E293B]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-mono mb-2">
                    <span>🏔️</span> CAMPUS FOUNDATION &amp; PROFILE
                  </div>
                  <h3 className="spider-heading text-2xl sm:text-3xl text-white">About Graphic Era Hill University, Bhimtal</h3>
                  <p className="text-xs font-mono text-gray-400 mt-1">Sattal Road, Kumaon Region, Uttarakhand • Official Est. 2011</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0E1526] border border-red-500/40 text-left sm:text-right flex-shrink-0 shadow-spider-glow">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Official Date of Establishment</span>
                  <span className="font-chakra italic font-bold text-base sm:text-lg text-red-400">🎂 28 APRIL 2011</span>
                  <span className="block text-[10px] font-mono text-gray-500">Act No. 12 of 2011</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs sm:text-sm font-rajdhani text-gray-300 leading-relaxed font-medium">
                <div className="space-y-3">
                  <p>
                    <strong className="text-white font-semibold">Graphic Era Hill University (GEHU), Bhimtal</strong>, is a private university campus located on Sattal Road in the picturesque Kumaon region of Uttarakhand. The university was founded by <strong className="text-amber-300 font-semibold">Prof. (Dr.) Kamal Ghanshala</strong> and officially established on <strong className="text-red-400 font-semibold">28 April 2011</strong> under the Uttarakhand State Act No. 12 of 2011, under the aegis of Graphic Era Educational Society.
                  </p>
                  <p>
                    The institution was established with the noble vision of providing quality higher education, promoting innovation, and creating better academic and career opportunities, especially for students from the hill regions.
                  </p>
                  <p>
                    Over the years, GEHU has rapidly developed its academic programmes and campus infrastructure, with state-of-the-art facilities including modern smart classrooms, advanced laboratories, comprehensive libraries, administrative offices and high-performance research incubation spaces.
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    It offers programmes across leading disciplines such as <strong className="text-white font-semibold">Computer Science and Engineering (CSE), Artificial Intelligence and Machine Learning (AI/ML), Computer Applications (BCA/MCA), Management, Commerce</strong> and other professional fields.
                  </p>
                  <p>
                    The Bhimtal campus uniquely combines a serene, natural learning environment among the pine hills with technology-oriented education, practical learning, research, extracurricular activities and career development.
                  </p>
                  <p className="text-gray-400">
                    Its educational approach focuses on academic excellence, technical skills, critical thinking, entrepreneurship, industry readiness and the overall development of students. Today, GEHU Bhimtal prepares students for emerging professional opportunities while encouraging innovation, collaboration, responsible citizenship and lifelong learning.
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      )}

      {/* ══════════════════════════════════════════════ */}
      {/* HALDWANI CAMPUS SECTION                       */}
      {/* ══════════════════════════════════════════════ */}
      {isHaldwani && (
        <div className="space-y-12">

          {/* ── Haldwani Campus Photos (FIRST) ── */}
          <SpotlightCard
            glowColor="rgba(15, 82, 186, 0.18)"
            className="bg-[#090D18]/90 border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl"
          >
            <div className="relative z-20 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">📸</span>
                <h4 className="spider-heading text-base sm:text-lg text-white">HALDWANI CAMPUS — 4K HIGHLIGHTS</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { src: '/assets/leadership/haldwani_gate.png', label: 'Campus Gate', sub: 'Main Entrance • GEHU Haldwani' },
                  { src: '/assets/leadership/haldwani_path.png', label: 'Campus Pathway', sub: 'Academic Walkway' },
                  { src: '/assets/leadership/haldwani_lawn.png', label: 'Campus Lawn', sub: 'Open Green Zone' },
                ].map(img => (
                  <div key={img.label} className="group relative rounded-2xl overflow-hidden border border-blue-500/40 h-64 sm:h-56">
                    <img src={img.src} alt={img.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="font-chakra italic font-bold text-sm text-white block">{img.label}</span>
                      <span className="text-[11px] font-mono text-blue-300">{img.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* ── Haldwani Director (BELOW PHOTOS) ── */}
          <SpotlightCard
            glowColor="rgba(15, 82, 186, 0.25)"
            className="bg-[#090D18]/90 border border-blue-500/40 rounded-3xl p-6 sm:p-10 shadow-modal-glow backdrop-blur-2xl"
          >
            <div className="relative z-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="relative flex-shrink-0 group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-800 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-700 animate-pulse-glow" />
                <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-blue-500 shadow-2xl bg-black">
                  <img src="/assets/leadership/director_haldwani.png" alt="Dr. M.C. Lohani - Director"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-950/90 border border-blue-500 text-blue-300 shadow-spider-glow">
                      CAMPUS DIRECTOR
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-600/30 border border-blue-500 text-blue-300 flex items-center gap-1.5">
                    <span>🎓</span> DIRECTOR &amp; DEAN ACADEMICS
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#0E1526] border border-[#1E293B] text-gray-300">
                    📍 HALDWANI CAMPUS
                  </span>
                </div>
                <div>
                  <h3 className="spider-heading text-2xl sm:text-3xl text-white">Dr. M.C. Lohani</h3>
                  <p className="text-xs sm:text-sm font-mono text-blue-400 font-semibold mt-0.5">
                    Director &amp; Dean Academics — Graphic Era Hill University, Haldwani Campus
                  </p>
                </div>
                <div className="space-y-3 text-xs sm:text-sm font-rajdhani text-gray-300 leading-relaxed font-medium">
                  <p>
                    <strong className="text-white font-semibold">Dr. M.C. Lohani</strong> is listed as the Director and Dean Academics of Graphic Era Hill University (GEHU), Haldwani Campus, Uttarakhand, on the university's official Officers page. His role encompasses academic administration, coordination of educational activities and support for institutional development.
                  </p>
                  <p>
                    The university under his guidance aims to foster an environment that promotes academic excellence, practical learning, research, innovation and the overall development of students. Through well-designed academic programmes and learning opportunities, GEHU Haldwani encourages students to build technical knowledge, strengthen professional skills and develop leadership qualities.
                  </p>
                  <p className="text-gray-400">
                    Under his leadership, GEHU Haldwani prepares students for future career opportunities while promoting innovation, collaboration, responsible citizenship and lifelong learning across the Kumaon region.
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* ── Haldwani Campus About (BELOW DIRECTOR) ── */}
          <SpotlightCard
            glowColor="rgba(15, 82, 186, 0.18)"
            className="bg-[#090D18]/90 border border-blue-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-2xl"
          >
            <div className="relative z-20 space-y-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1E293B]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-400 text-xs font-mono mb-2">
                    <span>🏙️</span> CAMPUS FOUNDATION &amp; PROFILE
                  </div>
                  <h3 className="spider-heading text-2xl sm:text-3xl text-white">About Graphic Era Hill University, Haldwani</h3>
                  <p className="text-xs font-mono text-gray-400 mt-1">Haldwani, Nainital District, Uttarakhand</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0E1526] border border-blue-500/40 text-left sm:text-right flex-shrink-0">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Campus Type</span>
                  <span className="font-chakra italic font-bold text-base sm:text-lg text-blue-400">GEHU HALDWANI</span>
                  <span className="block text-[10px] font-mono text-gray-500">Graphic Era Group</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs sm:text-sm font-rajdhani text-gray-300 leading-relaxed font-medium">
                <div className="space-y-3">
                  <p>
                    <strong className="text-white font-semibold">Graphic Era Hill University (GEHU), Haldwani</strong> is a vibrant campus of the Graphic Era Group, serving students of the Kumaon region with quality higher education. Founded under the visionary leadership of <strong className="text-amber-300 font-semibold">Prof. (Dr.) Kamal Ghanshala</strong>, the campus upholds the group's core values of academic excellence, innovation and student empowerment.
                  </p>
                  <p>
                    The campus offers a wide range of programmes across disciplines including Computer Science and Engineering, Artificial Intelligence, Management and Commerce, designed to meet the demands of an evolving professional landscape.
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    GEHU Haldwani is equipped with modern infrastructure — smart classrooms, computer labs, libraries, seminar halls and student activity centres — providing students with a well-rounded campus experience.
                  </p>
                  <p className="text-gray-400">
                    The campus promotes practical learning, research culture, extracurricular development and career readiness — helping students from the Kumaon hills build skills and confidence to succeed in their chosen professions and contribute positively to society.
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      )}

      {/* ══════════════════════════════════════════════ */}
      {/* DEHRADUN CAMPUS SECTION                       */}
      {/* ══════════════════════════════════════════════ */}
      {isDehradun && (
        <div className="space-y-12">

          {/* ── Dehradun Campus Photos (FIRST) ── */}
          <SpotlightCard
            glowColor="rgba(234, 179, 8, 0.18)"
            className="bg-[#090D18]/90 border border-yellow-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl"
          >
            <div className="relative z-20 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">📸</span>
                <h4 className="spider-heading text-base sm:text-lg text-white">DEHRADUN CAMPUS — 4K HIGHLIGHTS</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { src: '/assets/leadership/dehradun_main.jpg',       label: 'Main Campus Building',    sub: 'Clement Town, Doon Valley • Dehradun' },
                  { src: '/assets/leadership/dehradun_flagday.jpg',    label: 'Independence Day',         sub: 'Flag Hoisting Ceremony' },
                  { src: '/assets/leadership/dehradun_faculty.jpg',    label: 'Faculty & Staff',          sub: 'Republic Day Celebrations' },
                  { src: '/assets/leadership/dehradun_foundation.jpg', label: '13th Foundation Day',      sub: 'Annual Celebration' },
                ].map(img => (
                  <div key={img.label} className="group relative rounded-2xl overflow-hidden border border-yellow-500/40 h-64 sm:h-60">
                    <img src={img.src} alt={img.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div>
                        <span className="font-chakra italic font-bold text-sm text-white block">{img.label}</span>
                        <span className="text-[11px] font-mono text-yellow-300">{img.sub}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-mono text-gray-300 border border-gray-700">4K</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* ── Dehradun Director Placeholder (BELOW PHOTOS) ── */}
          <SpotlightCard
            glowColor="rgba(234, 179, 8, 0.2)"
            className="bg-[#090D18]/90 border border-yellow-500/30 rounded-3xl p-6 sm:p-10 shadow-modal-glow backdrop-blur-2xl"
          >
            <div className="relative z-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <div className="relative flex-shrink-0 group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 rounded-3xl blur-md opacity-40 group-hover:opacity-80 transition duration-700" />
                <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-yellow-500/60 shadow-2xl bg-[#0E1526] flex items-center justify-center">
                  <div className="text-center space-y-3 p-6">
                    <span className="text-6xl">🕷️</span>
                    <p className="text-xs font-mono text-yellow-400 font-bold">DIRECTOR PHOTO</p>
                    <p className="text-[10px] font-mono text-gray-500">Coming Soon</p>
                  </div>
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-yellow-950/90 border border-yellow-500 text-yellow-300">
                      CAMPUS DIRECTOR
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-yellow-600/20 border border-yellow-500 text-yellow-300 flex items-center gap-1.5">
                    <span>🏛️</span> CAMPUS DIRECTOR — DEHRADUN
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#0E1526] border border-[#1E293B] text-gray-300">
                    📍 DEHRADUN CAMPUS
                  </span>
                </div>
                <div>
                  <h3 className="spider-heading text-2xl sm:text-3xl text-white">Director — GEHU Dehradun</h3>
                  <p className="text-xs sm:text-sm font-mono text-yellow-400 font-semibold mt-0.5">
                    Director — Graphic Era Hill University, Dehradun Campus
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0E1526] border border-yellow-500/20 flex items-center gap-3">
                  <span className="text-2xl animate-pulse">🕷️</span>
                  <p className="text-sm font-rajdhani text-gray-300 font-medium">
                    Director profile and photo will be updated soon. Stay tuned for the full Dehradun leadership dossier!
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* ── Dehradun Campus About (BELOW DIRECTOR) ── */}
          <SpotlightCard
            glowColor="rgba(234, 179, 8, 0.18)"
            className="bg-[#090D18]/90 border border-yellow-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-2xl"
          >
            <div className="relative z-20 space-y-6 text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1E293B]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-950/60 border border-yellow-500/40 text-yellow-400 text-xs font-mono mb-2">
                    <span>🏙️</span> CAMPUS FOUNDATION &amp; PROFILE
                  </div>
                  <h3 className="spider-heading text-2xl sm:text-3xl text-white">About Graphic Era Hill University, Dehradun</h3>
                  <p className="text-xs font-mono text-gray-400 mt-1">Clement Town, Near Rajaji National Park, Doon Valley, Uttarakhand</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0E1526] border border-yellow-500/40 text-left sm:text-right flex-shrink-0 shadow-spider-glow">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Official Date of Establishment</span>
                  <span className="font-chakra italic font-bold text-base sm:text-lg text-yellow-400">🎂 28 APRIL 2011</span>
                  <span className="block text-[10px] font-mono text-gray-500">Act No. 12 of 2011</span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs sm:text-sm font-rajdhani text-gray-300 leading-relaxed font-medium">
                <div className="space-y-3">
                  <p>
                    <strong className="text-white font-semibold">Graphic Era Hill University (GEHU), Dehradun</strong> is a private university in Uttarakhand, established on <strong className="text-yellow-400 font-semibold">28 April 2011</strong> under Uttarakhand Act No. 12 of 2011. The university was founded by <strong className="text-amber-300 font-semibold">Prof. (Dr.) Kamal Ghanshala</strong>, whose vision was to provide quality higher education and create opportunities for young people to build successful careers.
                  </p>
                  <p>
                    Its roots trace back to <strong className="text-yellow-400">1993</strong>, when Graphic Era began as a small computer training centre in Dehradun. Since then, the institution has expanded its educational programmes, infrastructure and academic activities across the Doon Valley.
                  </p>
                  <p>
                    The Dehradun campus offers programmes across various fields, including <strong className="text-white font-semibold">Engineering, Computer Science, Artificial Intelligence &amp; Machine Learning, Management, Law, Computer Applications, Humanities</strong> and Applied Sciences.
                  </p>
                </div>
                <div className="space-y-3">
                  <p>
                    Located in the scenic Doon Valley, near <strong className="text-white font-semibold">Rajaji National Park</strong> and Clement Town Cantonment, the campus provides an inspiring environment for academic learning, practical training, research, innovation and extracurricular activities.
                  </p>
                  <p>
                    GEHU Dehradun encourages students to develop technical expertise, critical thinking, leadership, teamwork and industry-relevant skills essential for a rapidly evolving professional world.
                  </p>
                  <p className="text-gray-400">
                    Its broader educational vision focuses on academic excellence, professional development, entrepreneurship and the holistic growth of students — preparing them to contribute meaningfully to society and the nation.
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      )}

      {/* Placeholder for Deemed only */}
      {!isBhimtal && !isHaldwani && !isDehradun && (
        <SpotlightCard
          glowColor="rgba(0, 240, 255, 0.15)"
          className="bg-[#090D18]/90 border border-gray-700 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-2xl text-left space-y-6"
        >
          <div className="relative z-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-gray-700 text-gray-300 text-xs font-mono">
              <span>🏛️</span> {activeCampus?.code}
            </div>
            <h3 className="spider-heading text-2xl sm:text-3xl text-white">{activeCampus?.name}</h3>
            <p className="text-sm font-rajdhani text-gray-300 max-w-2xl">
              {activeCampus?.tagline}. Located at <strong className="text-white">{activeCampus?.location}</strong>.
            </p>
            <div className="p-4 rounded-2xl bg-[#0E1526] border border-[#1E293B] flex items-center justify-between max-w-xl">
              <div>
                <span className="text-xs font-mono text-gray-400 block">Leadership &amp; Campus Profile</span>
                <span className="text-sm font-chakra italic font-bold text-gray-200">
                  Director profile coming soon — stay tuned! 🕷️
                </span>
              </div>
              <span className="text-2xl animate-pulse">🕷️</span>
            </div>
          </div>
        </SpotlightCard>
      )}
    </section>
  )
}
