import { useState, useRef } from 'react'

function SpotlightCard({ children, className = '', glowColor = 'rgba(226, 27, 36, 0.2)' }) {
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
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 65%)`
        }}
      />
      {children}
    </div>
  )
}

/* ── Reusable: Leader card (photo + name + bio) ── */
function LeaderCard({ photo, alt, badge, badgeColor, name, title, titleColor, bio }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
      {/* Photo */}
      <div className="relative flex-shrink-0 group">
        <div className={`absolute -inset-1 rounded-2xl blur-md opacity-50 group-hover:opacity-90 transition duration-500 ${badgeColor}`} />
        <div className="relative w-40 h-48 sm:w-48 sm:h-56 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-black">
          <img src={photo} alt={alt} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-black/80 border border-white/20 text-gray-200">
              {badge}
            </span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="flex-1 space-y-2 text-left">
        <h3 className="spider-heading text-xl sm:text-2xl text-white leading-tight">{name}</h3>
        <p className={`text-xs font-mono font-semibold ${titleColor}`}>{title}</p>
        <p className="text-xs sm:text-sm font-rajdhani text-gray-300 leading-relaxed font-medium">{bio}</p>
      </div>
    </div>
  )
}

/* ── Reusable: Campus photo grid ── */
function CampusGallery({ photos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
      {photos.map((p, i) => (
        <div key={i} className="group relative rounded-xl overflow-hidden border border-white/10 h-44 sm:h-48">
          <img src={p.src} alt={p.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <span className="absolute bottom-2 left-3 text-[11px] font-mono text-gray-200">{p.label}</span>
        </div>
      ))}
    </div>
  )
}

/* ── Main Component ── */
export default function CampusLeadershipSection({ activeCampus }) {
  const campusId = activeCampus?.id || 'bhimtal'
  const isBhimtal  = campusId === 'bhimtal'  || activeCampus?.name?.includes('BHIMTAL')
  const isHaldwani = campusId === 'haldwani' || activeCampus?.name?.includes('HALDWANI')

  return (
    <section className="mt-10 mb-16 space-y-8 max-w-5xl mx-auto px-4">

      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/50 border border-red-500/40 text-[11px] font-mono text-red-400">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
          CAMPUS LEADERSHIP DOSSIER
        </div>
        <h2 className="spider-heading text-2xl sm:text-3xl text-white">
          MEET THE <span className="text-red-500">LEADERS</span>
        </h2>
      </div>

      {/* ── Chairman (same for all campuses) ── */}
      <SpotlightCard
        glowColor="rgba(234,179,8,0.18)"
        className="bg-[#090D18]/90 border border-amber-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-lg"
      >
        <div className="relative z-20">
          <p className="text-[10px] font-mono text-amber-400 mb-4 uppercase tracking-widest">👑 Supreme Chairman — All Campuses</p>
          <LeaderCard
            photo="/assets/leadership/chairman.jpg"
            alt="Prof. (Dr.) Kamal Ghanshala"
            badge="FOUNDER & CHAIRMAN"
            badgeColor="bg-gradient-to-r from-amber-500 to-yellow-400"
            name="Prof. (Dr.) Kamal Ghanshala"
            title="Founder & Chairman — Graphic Era Group of Institutions"
            titleColor="text-amber-400"
            bio="Prof. (Dr.) Kamal Ghanshala founded Graphic Era Computer Centre in Dehradun in 1993 with a vision to make quality technical education accessible. Under his visionary leadership, the group grew into a prestigious university with 4 campuses — pioneering academic excellence, research, innovation and holistic student development across Uttarakhand."
          />
        </div>
      </SpotlightCard>

      {/* ── Campus-specific Director & Gallery ── */}
      {isBhimtal && (
        <>
          <SpotlightCard
            glowColor="rgba(226,27,36,0.2)"
            className="bg-[#090D18]/90 border border-red-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-lg"
          >
            <div className="relative z-20">
              <p className="text-[10px] font-mono text-red-400 mb-4 uppercase tracking-widest">🎖️ Campus Director — Bhimtal</p>
              <LeaderCard
                photo="/assets/leadership/director_bhimtal.jpg"
                alt="Prof. (Col.) Anil Kumar Nair (Retd.)"
                badge="CAMPUS DIRECTOR"
                badgeColor="bg-gradient-to-r from-red-600 to-rose-700"
                name="Prof. (Col.) Anil Kumar Nair (Retd.)"
                title="Director — Graphic Era Hill University, Bhimtal Campus"
                titleColor="text-red-400"
                bio="With an illustrious military background in leadership and institutional management, Prof. (Col.) Anil Kumar Nair leads GEHU Bhimtal with a focus on discipline, practical learning and student empowerment. He drives research, innovation and career readiness while promoting a holistic campus culture."
              />
            </div>
          </SpotlightCard>

          <SpotlightCard
            glowColor="rgba(226,27,36,0.15)"
            className="bg-[#090D18]/90 border border-red-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-lg"
          >
            <div className="relative z-20">
              <div className="flex items-center justify-between mb-1">
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">🏔️ About the Campus</p>
                <span className="px-2 py-0.5 rounded-md bg-black/60 text-[10px] font-mono text-red-400 border border-red-500/30">Est. 28 April 2011</span>
              </div>
              <h3 className="spider-heading text-lg sm:text-xl text-white mb-2">Graphic Era Hill University, Bhimtal</h3>
              <p className="text-xs sm:text-sm font-rajdhani text-gray-300 leading-relaxed font-medium">
                Located on Sattal Road in the scenic Kumaon region of Uttarakhand, GEHU Bhimtal was founded by Prof. (Dr.) Kamal Ghanshala and established under Uttarakhand State Act No. 12 of 2011. The campus offers programmes in CSE, AI/ML, BCA/MCA, Management and Commerce — blending a serene mountain environment with technology-driven education, research and career development.
              </p>
              <CampusGallery photos={[
                { src: '/assets/leadership/bhimtal_aerial.jpg', label: 'Aerial View' },
                { src: '/assets/leadership/bhimtal_amphi.jpg', label: 'Amphitheater' },
              ]} />
            </div>
          </SpotlightCard>
        </>
      )}

      {isHaldwani && (
        <>
          <SpotlightCard
            glowColor="rgba(15,82,186,0.2)"
            className="bg-[#090D18]/90 border border-blue-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-lg"
          >
            <div className="relative z-20">
              <p className="text-[10px] font-mono text-blue-400 mb-4 uppercase tracking-widest">🎓 Campus Director — Haldwani</p>
              <LeaderCard
                photo="/assets/leadership/director_haldwani.png"
                alt="Dr. M.C. Lohani"
                badge="DIRECTOR & DEAN ACADEMICS"
                badgeColor="bg-gradient-to-r from-blue-600 to-blue-500"
                name="Dr. M.C. Lohani"
                title="Director & Dean Academics — Graphic Era Hill University, Haldwani Campus"
                titleColor="text-blue-400"
                bio="Dr. M.C. Lohani oversees academic administration, educational coordination and institutional development at GEHU Haldwani. He fosters an environment of academic excellence, practical learning, research and innovation — guiding students to build technical knowledge, professional skills and leadership qualities for future career success."
              />
            </div>
          </SpotlightCard>

          <SpotlightCard
            glowColor="rgba(15,82,186,0.15)"
            className="bg-[#090D18]/90 border border-blue-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-lg"
          >
            <div className="relative z-20">
              <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">🏙️ About the Campus</p>
              <h3 className="spider-heading text-lg sm:text-xl text-white mb-2">Graphic Era Hill University, Haldwani</h3>
              <p className="text-xs sm:text-sm font-rajdhani text-gray-300 leading-relaxed font-medium">
                GEHU Haldwani is a vibrant campus serving the Kumaon region with quality higher education. It promotes academic excellence, practical learning, research and student development — preparing graduates for emerging professional and technical career opportunities.
              </p>
              <CampusGallery photos={[
                { src: '/assets/leadership/haldwani_gate.png',  label: 'Campus Gate' },
                { src: '/assets/leadership/haldwani_path.png',  label: 'Campus Path' },
                { src: '/assets/leadership/haldwani_lawn.png',  label: 'Campus Lawn' },
              ]} />
            </div>
          </SpotlightCard>
        </>
      )}

      {/* Placeholder for Dehradun / Deemed */}
      {!isBhimtal && !isHaldwani && (
        <SpotlightCard
          glowColor="rgba(234,179,8,0.15)"
          className="bg-[#090D18]/90 border border-gray-700 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-lg"
        >
          <div className="relative z-20 text-center space-y-2 py-4">
            <span className="text-3xl">🕷️</span>
            <h3 className="spider-heading text-xl text-white">{activeCampus?.name || 'CAMPUS'}</h3>
            <p className="text-sm font-rajdhani text-gray-400">{activeCampus?.location}</p>
            <p className="text-xs font-mono text-gray-500 mt-2">Director profile coming soon...</p>
          </div>
        </SpotlightCard>
      )}

    </section>
  )
}
