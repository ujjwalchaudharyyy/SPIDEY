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
    <div
      className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden"
      style={{
        contain: 'paint',
        willChange: 'transform, opacity',
        transform: 'translate3d(0, 0, 0)'
      }}
    >
      {/* Native 4K UHD High-Velocity Tensile Silk Web Lines Blasting Across Screen */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 3840 2160"
        fill="none"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
      >
        <defs>
          <linearGradient id="webGradWhite4K" x1="0%" y1="100%" x2="50%" y2="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#E21B24" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="webGradBlue4K" x1="100%" y1="100%" x2="50%" y2="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.98" />
            <stop offset="60%" stopColor="#ffffff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0F52BA" stopOpacity="0.85" />
          </linearGradient>
          <filter id="webGlow4K" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Primary 4K Web Cables Fired from Left Wrist */}
        <path
          d="M -160 2280 Q 960 1560 1920 1080"
          stroke="url(#webGradWhite4K)"
          strokeWidth="16"
          strokeLinecap="round"
          filter="url(#webGlow4K)"
          strokeDasharray="2500"
          className="animate-web-blast"
        />
        <path
          d="M -100 2200 Q 1020 1480 1860 1030"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="2500"
          className="animate-web-blast opacity-95"
        />
        <path
          d="M -250 2350 Q 890 1600 1980 1130"
          stroke="#E21B24"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="2500"
          className="animate-web-blast opacity-80"
        />

        {/* Primary 4K Web Cables Fired from Right Wrist */}
        <path
          d="M 4000 2280 Q 2880 1560 1920 1080"
          stroke="url(#webGradBlue4K)"
          strokeWidth="16"
          strokeLinecap="round"
          filter="url(#webGlow4K)"
          strokeDasharray="2500"
          className="animate-web-blast"
        />
        <path
          d="M 3940 2200 Q 2820 1480 1980 1030"
          stroke="#ffffff"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="2500"
          className="animate-web-blast opacity-95"
        />

        {/* High-Tension 4K Web Impact Splat at Target Center (1920, 1080) */}
        {[
          "M 1920 1080 L 1660 880",
          "M 1920 1080 L 2180 880",
          "M 1920 1080 L 2300 1080",
          "M 1920 1080 L 2140 1270",
          "M 1920 1080 L 1700 1270",
          "M 1920 1080 L 1540 1080",
          "M 1920 1080 L 1820 790",
          "M 1920 1080 L 2020 790",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="#ffffff"
            strokeWidth="8"
            strokeLinecap="round"
            className="animate-web-expand filter drop-shadow-[0_0_18px_rgba(255,255,255,0.95)]"
          />
        ))}

        {/* Web Splat Connecting Filaments in 4K */}
        <path
          d="M 1660 880 Q 1920 930 2180 880 Q 2210 1080 2140 1270 Q 1920 1220 1700 1270 Q 1600 1080 1660 880 Z"
          stroke="#ffffff"
          strokeWidth="5"
          fill="rgba(255, 255, 255, 0.12)"
          strokeDasharray="10 10"
          className="animate-web-expand filter drop-shadow-[0_0_25px_rgba(226,27,36,0.7)]"
        />
      </svg>

      {/* REAL PHOTOREALISTIC SPIDER-MAN (4K Composited with High-DPI Crisp Shadows) */}
      <div
        className="relative z-20 flex flex-col items-center justify-center pointer-events-none animate-spider-zip"
        style={{
          willChange: 'transform, opacity',
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
          <img
            src="/assets/spiderman_real.png"
            alt="Spider-Man Web-Shooter Action"
            className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(239,68,68,0.7)] drop-shadow-[0_0_80px_rgba(15,82,186,0.5)]"
            style={{
              imageRendering: '-webkit-optimize-contrast',
              willChange: 'transform'
            }}
          />
        </div>

        {/* Dynamic Holographic Tab Indicator in 4K */}
        {label && (
          <div className="mt-2 px-5 py-2 rounded-full bg-black/85 border border-red-500/80 shadow-[0_0_35px_rgba(239,68,68,0.75)] backdrop-blur-xl flex items-center gap-2 animate-pulse">
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
