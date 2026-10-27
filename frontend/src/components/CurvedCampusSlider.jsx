import React, { useRef, useState, useEffect } from 'react'

export default function CurvedCampusSlider({ campuses, activeCampusIndex, onSelectCampus }) {
  const containerRef = useRef(null)
  const touchStartX = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext()
      else handlePrev()
    }
    touchStartX.current = null
  }

  const handlePrev = () => {
    const nextIdx = (activeCampusIndex - 1 + campuses.length) % campuses.length
    onSelectCampus(nextIdx)
  }

  const handleNext = () => {
    const nextIdx = (activeCampusIndex + 1) % campuses.length
    onSelectCampus(nextIdx)
  }

  return (
    <div className="relative w-full py-6 overflow-hidden select-none">
      {/* 3D Curved Carousel Container */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative max-w-6xl mx-auto h-[380px] sm:h-[420px] flex items-center justify-center touch-pan-y"
        style={{ perspective: '1200px' }}
      >
        {campuses.map((campus, idx) => {
          let offset = idx - activeCampusIndex
          if (offset < -2) offset += campuses.length
          if (offset > 2) offset -= campuses.length

          const isCenter = offset === 0
          const stepX = isMobile ? 180 : 280
          const translateX = offset * stepX
          const translateY = Math.abs(offset) * (isMobile ? 20 : 32)
          const translateZ = -Math.abs(offset) * (isMobile ? 140 : 180)
          const rotateY = -offset * (isMobile ? 22 : 28)
          const opacity = Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3
          const zIndex = 20 - Math.abs(offset)

          return (
            <div
              key={campus.id}
              onClick={() => onSelectCampus(idx)}
              style={{
                transform: `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                opacity,
                zIndex,
                transition: 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
              className={`absolute w-[270px] sm:w-[350px] h-[330px] sm:h-[370px] cursor-pointer rounded-3xl overflow-hidden border backdrop-blur-2xl transition-all group ${
                isCenter
                  ? 'border-red-500 shadow-modal-glow scale-105 ring-2 ring-red-500/50'
                  : 'border-[#1E293B] hover:border-gray-600'
              }`}
            >
              {/* Full Background Campus Photo */}
              <img
                src={campus.image}
                alt={campus.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Spider Cyber Gradient Overlay over photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-black/40 to-black/30" />

              {/* Top Campus Sector Pill */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-black/75 border border-red-500/60 text-white backdrop-blur-md shadow-spider-glow flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  {campus.code.toUpperCase()}
                </span>
                <span className="text-xl">
                  {idx === 0 ? '🏔️' : idx === 1 ? '⚡' : idx === 2 ? '🏛️' : '🎓'}
                </span>
              </div>

              {/* Bottom Card Content Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 bg-gradient-to-t from-[#060810] via-[#060810]/90 to-transparent">
                <h3 className="spider-heading text-lg sm:text-xl text-white mb-1 drop-shadow-md">
                  {campus.name}
                </h3>
                <p className="text-xs font-mono text-gray-300 flex items-center gap-1 mb-3 truncate">
                  <span className="text-red-400">📍</span> {campus.location}
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-red-300 font-semibold">
                    {isCenter ? '● ACTIVE RADAR' : 'CLICK TO SLIDE'}
                  </span>
                  {isCenter && (
                    <span className="text-xs font-chakra italic font-bold text-white bg-red-600/90 hover:bg-red-500 px-3 py-1 rounded-full flex items-center gap-1 shadow-spider-glow">
                      VIEW EVENTS ➔
                    </span>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Slide Navigation Controls */}
      <div className="flex items-center justify-center space-x-6 mt-2">
        <button
          onClick={handlePrev}
          className="w-11 h-11 rounded-full bg-[#0E1526] hover:bg-red-950 border border-red-500/40 hover:border-red-500 text-white flex items-center justify-center transition-all shadow-spider-glow"
          title="Slide Previous Campus"
        >
          <span className="text-lg">←</span>
        </button>

        <div className="flex items-center space-x-2">
          {campuses.map((c, i) => (
            <button
              key={c.id}
              onClick={() => onSelectCampus(i)}
              className={`h-2 rounded-full transition-all ${
                activeCampusIndex === i
                  ? 'w-8 bg-red-500 shadow-spider-glow'
                  : 'w-2 bg-gray-700 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-11 h-11 rounded-full bg-[#0E1526] hover:bg-red-950 border border-red-500/40 hover:border-red-500 text-white flex items-center justify-center transition-all shadow-spider-glow"
          title="Slide Next Campus"
        >
          <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  )
}
