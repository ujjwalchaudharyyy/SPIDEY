import { useState, useEffect } from 'react'

export default function WebShooterTransition({ triggerKey, label }) {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (!triggerKey) return
    setActive(true)

    // Play real movie THWIP sound effect
    try {
      const audio = new Audio('/assets/thwip.mp3')
      audio.volume = 0.85
      audio.play().catch(() => {})
    } catch (e) {}

    const timer = setTimeout(() => {
      setActive(false)
    }, 650) // 650ms high-velocity web-zip
    return () => clearTimeout(timer)
  }, [triggerKey])

  if (!active) return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
      {/* High-Velocity Tensile Silk Web Lines Blasting Across Screen */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 900" fill="none">
        <defs>
          <linearGradient id="webGradWhite" x1="0%" y1="100%" x2="50%" y2="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#E21B24" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="webGradBlue" x1="100%" y1="100%" x2="50%" y2="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0F52BA" stopOpacity="0.8" />
          </linearGradient>
          <filter id="webGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Primary Web Cables Fired from Left Wrist */}
        <path
          d="M -50 950 Q 300 650 600 450"
          stroke="url(#webGradWhite)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#webGlow)"
          strokeDasharray="800"
          className="animate-web-blast"
        />
        <path
          d="M -30 920 Q 320 620 580 430"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="800"
          className="animate-web-blast opacity-90"
        />
        <path
          d="M -80 980 Q 280 670 620 470"
          stroke="#E21B24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="800"
          className="animate-web-blast opacity-75"
        />

        {/* Primary Web Cables Fired from Right Wrist */}
        <path
          d="M 1250 950 Q 900 650 600 450"
          stroke="url(#webGradBlue)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#webGlow)"
          strokeDasharray="800"
          className="animate-web-blast"
        />
        <path
          d="M 1230 920 Q 880 620 620 430"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="800"
          className="animate-web-blast opacity-90"
        />

        {/* High-Tension Web Impact Splat at Target Center */}
        {[
          "M 600 450 L 520 370",
          "M 600 450 L 680 370",
          "M 600 450 L 720 450",
          "M 600 450 L 670 530",
          "M 600 450 L 530 530",
          "M 600 450 L 480 450",
          "M 600 450 L 570 330",
          "M 600 450 L 630 330",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-web-expand filter drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
          />
        ))}

        {/* Web Splat Connecting Filaments */}
        <path
          d="M 520 370 Q 600 390 680 370 Q 690 450 670 530 Q 600 510 530 530 Q 500 450 520 370 Z"
          stroke="#ffffff"
          strokeWidth="2"
          fill="rgba(255, 255, 255, 0.08)"
          strokeDasharray="4 4"
          className="animate-web-expand filter drop-shadow-[0_0_12px_rgba(226,27,36,0.6)]"
        />
      </svg>

      {/* REAL PHOTOREALISTIC SPIDER-MAN (Transparent Cutout, No Box, No Borders!) */}
      <div className="relative z-20 flex flex-col items-center justify-center pointer-events-none animate-spider-zip">
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
          <img
            src="/assets/spiderman_real.png"
            alt="Spider-Man Web-Shooter Action"
            className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(239,68,68,0.7)] drop-shadow-[0_0_80px_rgba(15,82,186,0.5)]"
          />
        </div>

        {/* Dynamic Holographic Tab Indicator */}
        {label && (
          <div className="mt-2 px-5 py-2 rounded-full bg-black/85 border border-red-500/80 shadow-[0_0_30px_rgba(239,68,68,0.7)] backdrop-blur-xl flex items-center gap-2 animate-pulse">
            <span className="text-red-500 font-bold text-sm">🕷️</span>
            <p className="font-chakra italic font-bold text-xs sm:text-sm text-white tracking-widest text-center">
              {label}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}