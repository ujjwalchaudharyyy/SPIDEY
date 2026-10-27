import { useState, useEffect } from 'react'

export default function WebShooterTransition({ triggerKey, label }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!triggerKey) return
    setActive(true)

    // Play real cinematic THWIP sound effect
    try {
      const audio = new Audio('/assets/thwip.mp3')
      audio.volume = 0.8
      audio.play().catch(() => {})
    } catch (e) {}

    const timer = setTimeout(() => {
      setActive(false)
    }, 750) // 750ms ultra fast & realistic web-shooter snap
    return () => clearTimeout(timer)
  }, [triggerKey])

  if (!active) return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
      {/* High-speed Realistic 3D Web Lines Blasting from Wrist Shooter */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" fill="none">
        {/* Core High-Velocity Web Cable Left */}
        <line
          x1="-80"
          y1="1080"
          x2="500"
          y2="480"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          className="animate-web-left filter drop-shadow-[0_0_20px_#ffffff]"
        />
        {/* Sub-threads */}
        <line
          x1="-40"
          y1="1020"
          x2="480"
          y2="460"
          stroke="#E21B24"
          strokeWidth="3"
          className="animate-web-left"
        />

        {/* Core High-Velocity Web Cable Right */}
        <line
          x1="1080"
          y1="1080"
          x2="500"
          y2="480"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          className="animate-web-right filter drop-shadow-[0_0_20px_#ffffff]"
        />
        {/* Sub-threads */}
        <line
          x1="1040"
          y1="1020"
          x2="520"
          y2="460"
          stroke="#0F52BA"
          strokeWidth="3"
          className="animate-web-right"
        />

        {/* Realistic Web Webbing Structure radiating from target center */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <line
            key={i}
            x1="500"
            y1="480"
            x2={500 + Math.cos((angle * Math.PI) / 180) * 550}
            y2={480 + Math.sin((angle * Math.PI) / 180) * 550}
            stroke="rgba(255, 255, 255, 0.85)"
            strokeWidth="2.5"
            strokeDasharray="4 6"
            className="animate-web-expand"
          />
        ))}

        {/* Spider Web Rings (Tensile Silk Strands) */}
        <circle cx="500" cy="480" r="80" stroke="#ffffff" strokeWidth="3" fill="none" opacity="0.9" className="animate-web-expand" />
        <circle cx="500" cy="480" r="180" stroke="#E21B24" strokeWidth="2.5" fill="none" opacity="0.8" className="animate-web-expand" />
        <circle cx="500" cy="480" r="320" stroke="#00F0FF" strokeWidth="2" fill="none" opacity="0.7" className="animate-web-expand" />
        <circle cx="500" cy="480" r="480" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="6 6" fill="none" opacity="0.5" className="animate-web-expand" />
      </svg>

      {/* Realistic Cinematic Spider-Man Photo / Pose in Center (Extracted from 4K Video) */}
      <div className="relative z-10 flex flex-col items-center justify-center animate-spider-swing">
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden border-2 border-red-500 shadow-modal-glow bg-black/80 backdrop-blur-xl">
          <img
            src="/assets/spiderman_action.png"
            alt="Spider-Man Web-Shooter"
            className="w-full h-full object-cover object-center scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-red-950/30" />
          
          {/* Glowing Web Shooter Crosshair */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 rounded-full border border-red-400/80 animate-ping" />
            <div className="w-8 h-8 rounded-full border border-white/90 shadow-spider-glow" />
          </div>
        </div>

        {/* Modern Comic *THWIP!!* HUD Pill */}
        <div className="mt-3 px-6 py-2.5 rounded-full bg-[#090D18]/95 border border-red-500 shadow-spider-glow flex items-center gap-3 backdrop-blur-xl">
          <span className="font-chakra italic font-black text-red-500 text-lg tracking-widest drop-shadow-[0_0_10px_#E21B24]">
            *THWIP!!*
          </span>
          {label && (
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider border-l border-red-500/40 pl-3">
              {label}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
