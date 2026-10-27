import { useState, useRef } from 'react'

// Interactive Spotlight Card with cursor-tracking lighting effect
function SpotlightCard({ children, className = '', glowColor = 'rgba(226, 27, 36, 0.22)' }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Mouse Tracking Beam / Spotlight Glow */}
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
  const isBhimtal = !activeCampus || activeCampus.id === 'bhimtal' || activeCampus.name?.includes('BHIMTAL')
  const isHaldwani = activeCampus?.id === 'haldwani' || activeCampus?.name?.includes('HALDWANI')
  const isDehradun = activeCampus?.id === 'dehradun' || activeCampus?.name?.includes('DEHRADUN')
  const isDeemed = activeCampus?.id === 'deemed' || activeCampus?.name?.includes('DEEMED')

  return (
    <section className="mt-16 mb-20 space-y-12">
      {/* Section Divider & Header */}
      <div className="relative text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-950/70 via-black to-red-950/70 border border-red-500/50 shadow-spider-glow text-xs font-mono text-red-400">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>GRAPHIC ERA INSTITUTIONAL DOSSIER & LEADERSHIP</span>
        </div>
        <h2 className="spider-heading text-2xl sm:text-4xl text-white">
          CAMPUS GENESIS & <span className="text-red-500">SUPREME LEADERSHIP</span>
        </h2>
        <p className="text-xs sm:text-sm font-rajdhani text-gray-400 font-medium max-w-2xl mx-auto">
          Hover your cursor across the dossier cards to activate the interactive Stark-Tech spotlight sensors.
        </p>
      </div>

      {/* ======================================================== */}
      {/* 1. SUPREME CHAIRMAN OF ALL 4 CAMPUSES (TOP PRIORITY)    */}
      {/* ======================================================== */}
      <SpotlightCard
        glowColor="rgba(234, 179, 8, 0.2)"
        className="bg-[#090D18]/90 border border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_rgba(234,179,8,0.15)] backdrop-blur-2xl"
      >
        <div className="relative z-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Chairman Photo with Holographic Gold/Red Web Border */}
          <div className="relative flex-shrink-0 group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-red-600 to-yellow-500 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-700 animate-pulse-glow" />
            <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-2xl bg-black">
              <img
                src="/assets/leadership/chairman.jpg"
                alt="Prof. (Dr.) Kamal Ghanshala - Chairman"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-950/90 border border-amber-400 text-amber-300 shadow-spider-glow">
                  FOUNDER & CHAIRMAN
                </span>
              </div>
            </div>
          </div>

          {/* Chairman Biography & Vision */}
          <div className="flex-1 space-y-4 text-left">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-red-600/30 border border-red-500 text-red-300 flex items-center gap-1.5">
                <span>👑</span> SUPREME CHAIR – ALL 4 CAMPUSES
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-500/20 border border-amber-500 text-amber-300">
                SINCE 1993
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-500/20 border border-blue-500 text-blue-300">
                NAAC A+ ACCREDITED
              </span>
            </div>

            <div>
              <h3 className="spider-heading text-2xl sm:text-3xl text-white">
                Prof. (Dr.) Kamal Ghanshala
              </h3>
              <p className="text-xs sm:text-sm font-mono text-amber-400 font-semibold mt-0.5">
                Founder & Chairman — Graphic Era Group of Institutions
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

            {/* Quick Metrics Bar */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-2.5 rounded-xl bg-black/60 border border-[#1E293B] text-center">
                <span className="font-chakra italic font-black text-lg text-white">1993</span>
                <span className="block text-[10px] font-mono text-gray-400">FOUNDING YEAR</span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/60 border border-[#1E293B] text-center">
                <span className="font-chakra italic font-black text-lg text-red-400">4 CAMPUSES</span>
                <span className="block text-[10px] font-mono text-gray-400">MULTIVERSE GRID</span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/60 border border-[#1E293B] text-center">
                <span className="font-chakra italic font-black text-lg text-amber-400">NAAC A+</span>
                <span className="block text-[10px] font-mono text-gray-400">ACCREDITATION</span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/60 border border-[#1E293B] text-center">
                <span className="font-chakra italic font-black text-lg text-blue-400">30,000+</span>
                <span className="block text-[10px] font-mono text-gray-400">ALUMNI NETWORK</span>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>

      {/* ======================================================== */}
      {/* 2. CAMPUS DIRECTOR & CAMPUS GENESIS (FOR ACTIVE CAMPUS) */}
      {/* ======================================================== */}
      {isBhimtal ? (
        <div className="space-y-12">
          {/* Director Card */}
          <SpotlightCard
            glowColor="rgba(226, 27, 36, 0.25)"
            className="bg-[#090D18]/90 border border-red-500/40 rounded-3xl p-6 sm:p-10 shadow-modal-glow backdrop-blur-2xl"
          >
            <div className="relative z-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Director Photo with Crimson Cyber Frame */}
              <div className="relative flex-shrink-0 group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 via-rose-700 to-red-950 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-700 animate-pulse-glow" />
                <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-red-500 shadow-2xl bg-black">
                  <img
                    src="/assets/leadership/director_bhimtal.jpg"
                    alt="Prof. (Col.) Anil Kumar Nair (Retd.) - Director"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-0 right-0 text-center">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-red-950/90 border border-red-500 text-red-300 shadow-spider-glow">
                      CAMPUS DIRECTOR
                    </span>
                  </div>
                </div>
              </div>

              {/* Director Biography */}
              <div className="flex-1 space-y-4 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-red-600/30 border border-red-500 text-red-300 flex items-center gap-1.5">
                    <span>🎖️</span> MILITARY LEADERSHIP & DISCIPLINE
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#0E1526] border border-[#1E293B] text-gray-300">
                    📍 BHIMTAL CAMPUS
                  </span>
                </div>

                <div>
                  <h3 className="spider-heading text-2xl sm:text-3xl text-white">
                    Prof. (Col.) Anil Kumar Nair (Retd.)
                  </h3>
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

          {/* ======================================================== */}
          {/* 3. ABOUT GRAPHIC ERA HILL UNIVERSITY BHIMTAL            */}
          {/* ======================================================== */}
          <SpotlightCard
            glowColor="rgba(226, 27, 36, 0.2)"
            className="bg-[#090D18]/90 border border-red-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-2xl"
          >
            <div className="relative z-20 space-y-6 text-left">
              {/* Badge & Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1E293B]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-mono mb-2">
                    <span>🏔️</span> CAMPUS FOUNDATION & PROFILE
                  </div>
                  <h3 className="spider-heading text-2xl sm:text-3xl text-white">
                    About Graphic Era Hill University, Bhimtal
                  </h3>
                  <p className="text-xs font-mono text-gray-400 mt-1">
                    Sattal Road, Kumaon Region, Uttarakhand • Official Est. 2011
                  </p>
                </div>

                {/* Date of Birth / Foundation Badge */}
                <div className="p-3.5 rounded-2xl bg-[#0E1526] border border-red-500/40 text-left sm:text-right flex-shrink-0 shadow-spider-glow">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">Official Date of Establishment</span>
                  <span className="font-chakra italic font-bold text-base sm:text-lg text-red-400">
                    🎂 28 APRIL 2011
                  </span>
                  <span className="block text-[10px] font-mono text-gray-500">Act No. 12 of 2011</span>
                </div>
              </div>

              {/* Full Detailed Description Provided by User */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs sm:text-sm font-rajdhani text-gray-300 leading-relaxed font-medium">
                <div className="space-y-3">
                  <p>
                    <strong className="text-white font-semibold">Graphic Era Hill University (GEHU), Bhimtal</strong>, is a private university campus located on Sattal Road in the picturesque Kumaon region of Uttarakhand. The university was founded by <strong className="text-amber-300 font-semibold">Prof. (Dr.) Kamal Ghanshala</strong> and officially established on <strong className="text-red-400 font-semibold">28 April 2011</strong> under the Uttarakhand State Act No. 12 of 2011, under the aegis of Graphic Era Educational Society.
                  </p>
                  <p>
                    The institution was established with the noble vision of providing quality higher education, promoting innovation, and creating better academic and career opportunities, especially for students from the hill regions.
                  </p>
                  <p>
                    Over the years, GEHU has rapidly developed its academic programmes and campus infrastructure, with state-of-the-art facilities including modern smart classrooms, advanced computer and robotics laboratories, comprehensive libraries, administrative offices, and high-performance research incubation spaces.
                  </p>
                </div>

                <div className="space-y-3">
                  <p>
                    It offers programmes across leading disciplines such as <strong className="text-white font-semibold">Computer Science and Engineering (CSE), Artificial Intelligence and Machine Learning (AI/ML), Computer Applications (BCA/MCA), Management, Commerce</strong>, and other professional fields.
                  </p>
                  <p>
                    The Bhimtal campus uniquely combines a serene, natural learning environment among the pine hills with technology-oriented education, practical learning, research, extracurricular activities and career development.
                  </p>
                  <p className="text-gray-400">
                    Its educational approach focuses on academic excellence, technical skills, critical thinking, entrepreneurship, industry readiness and the overall development of students. Today, GEHU Bhimtal prepares students for emerging professional opportunities while encouraging innovation, collaboration, responsible citizenship and lifelong learning.
                  </p>
                </div>
              </div>

              {/* Campus Highlights 4K Gallery */}
              <div className="pt-4 border-t border-[#1E293B] space-y-3">
                <h4 className="spider-heading text-sm text-gray-200 flex items-center gap-2">
                  <span>📸</span> BHIMTAL CAMPUS 4K PANORAMIC HIGHLIGHTS
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Image 1: Aerial Mountain View */}
                  <div className="group relative rounded-2xl overflow-hidden border border-red-500/40 shadow-spider-glow h-64 sm:h-72">
                    <img
                      src="/assets/leadership/bhimtal_aerial.jpg"
                      alt="GEHU Bhimtal Aerial View"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div>
                        <span className="font-chakra italic font-bold text-sm text-white block">High-Altitude Mountain Campus</span>
                        <span className="text-[11px] font-mono text-red-300">Nestled in Kumaon Pine Valley • Sattal Road</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-mono text-gray-300 border border-gray-700">4K AERIAL</span>
                    </div>
                  </div>

                  {/* Image 2: Amphitheater & Academic Block */}
                  <div className="group relative rounded-2xl overflow-hidden border border-red-500/40 shadow-spider-glow h-64 sm:h-72">
                    <img
                      src="/assets/leadership/bhimtal_amphi.jpg"
                      alt="GEHU Bhimtal Amphitheater"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div>
                        <span className="font-chakra italic font-bold text-sm text-white block">Central Open-Air Amphitheater</span>
                        <span className="text-[11px] font-mono text-red-300">Hub for Hackathons, Fests & Cultural Parades</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-md bg-black/80 text-[10px] font-mono text-gray-300 border border-gray-700">CAMPUS CORE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>
      ) : (
        /* Other Campuses (Haldwani, Dehradun, Deemed) Profile */
        <SpotlightCard
          glowColor={
            isHaldwani ? 'rgba(15, 82, 186, 0.25)' : isDehradun ? 'rgba(234, 179, 8, 0.25)' : 'rgba(0, 240, 255, 0.25)'
          }
          className="bg-[#090D18]/90 border border-gray-700 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-2xl text-left space-y-6"
        >
          <div className="relative z-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-gray-700 text-gray-300 text-xs font-mono">
              <span>🏛️</span> {activeCampus.code}
            </div>

            <h3 className="spider-heading text-2xl sm:text-3xl text-white">
              {activeCampus.name}
            </h3>

            <p className="text-sm font-rajdhani text-gray-300 max-w-2xl">
              {activeCampus.tagline}. Located at <strong className="text-white">{activeCampus.location}</strong>. 
            </p>

            <div className="p-4 rounded-2xl bg-[#0E1526] border border-[#1E293B] flex items-center justify-between max-w-xl">
              <div>
                <span className="text-xs font-mono text-gray-400 block">Leadership & Campus Profile</span>
                <span className="text-sm font-chakra italic font-bold text-gray-200">
                  Slide back to Bhimtal Campus to inspect the full Founder & Director Dossier!
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