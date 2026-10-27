import React, { useRef, useState, useEffect } from 'react'

// Unique visual identity accents per campus
const CAMPUS_THEMES = {
  bhimtal: {
    border: 'border-red-500',
    ring: 'ring-red-500/60',
    glow: 'shadow-[0_0_45px_rgba(226,27,36,0.45)]',
    badgeBg: 'bg-red-950/80 text-red-300 border-red-500/60',
    btnBg: 'bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white',
    icon: '🏔️',
    colorHex: '#E21B24',
    accentText: 'text-red-400'
  },
  haldwani: {
    border: 'border-blue-500',
    ring: 'ring-blue-500/60',
    glow: 'shadow-[0_0_45px_rgba(15,82,186,0.55)]',
    badgeBg: 'bg-blue-950/80 text-blue-300 border-blue-500/60',
    btnBg: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white',
    icon: '⚡',
    colorHex: '#0F52BA',
    accentText: 'text-blue-400'
  },
  dehradun: {
    border: 'border-amber-400',
    ring: 'ring-amber-400/60',
    glow: 'shadow-[0_0_45px_rgba(255,215,0,0.45)]',
    badgeBg: 'bg-amber-950/80 text-amber-300 border-amber-400/60',
    btnBg: 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black font-extrabold',
    icon: '🏛️',
    colorHex: '#FFD700',
    accentText: 'text-amber-400'
  },
  deemed: {
    border: 'border-cyan-400',
    ring: 'ring-cyan-400/60',
    glow: 'shadow-[0_0_45px_rgba(0,240,255,0.5)]',
    badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-400/60',
    btnBg: 'bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 text-black font-extrabold',
    icon: '🎓',
    colorHex: '#00F0FF',
    accentText: 'text-cyan-400'
  }
}

export default function CurvedCampusSlider({ campuses, activeCampusIndex, onSelectCampus, events = [] }) {
  const containerRef = useRef(null)
  const [viewMode, setViewMode] = useState('curve') // 'curve' | 'grid'
  const [lightboxCampus, setLightboxCampus] = useState(null)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const handlePrev = () => {
    const nextIdx = (activeCampusIndex - 1 + campuses.length) % campuses.length
    onSelectCampus(nextIdx)
  }

  const handleNext = () => {
    const nextIdx = (activeCampusIndex + 1) % campuses.length
    onSelectCampus(nextIdx)
  }

  // Preload all campus photos into browser cache for zero-lag smooth 3D carousel
  useEffect(() => {
    campuses.forEach(c => {
      if (c.image) {
        const img = new Image()
        img.src = c.image
      }
    })
  }, [campuses])

  // Keyboard navigation for curve slider
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxCampus) {
        if (e.key === 'Escape') setLightboxCampus(null)
        return
      }
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeCampusIndex, campuses.length, lightboxCampus])

  // Touch Swipe Handlers for mobile & tablets
  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const minSwipeDistance = 50
    if (distance > minSwipeDistance) {
      handleNext()
    } else if (distance < -minSwipeDistance) {
      handlePrev()
    }
  }

  // Helper to get total events count per campus
  const getCampusEventsCount = (campusName) => {
    if (!events || events.length === 0) return 0
    return events.filter(e => e.campus === campusName).length
  }

  return (
    <div className="relative w-full py-4 select-none">
      {/* Top Controls Bar: View Mode Switcher & Quick Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-red-400 uppercase">
              Graphic Era Multiverse Network
            </span>
          </div>
          <h2 className="spider-heading text-xl sm:text-2xl text-white tracking-wide">
            EXPLORE THE 4 CAMPUSES
          </h2>
        </div>

        {/* View Mode Toggle Button (3D Panoramic vs 4-Campus Grid) */}
        <div className="flex items-center gap-1.5 p-1 bg-[#090D18] border border-gray-800 rounded-2xl backdrop-blur-md">
          <button
            type="button"
            onClick={() => setViewMode('curve')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-chakra italic font-bold tracking-wider transition-all flex items-center gap-1.5 ${
              viewMode === 'curve'
                ? 'bg-red-600 text-white shadow-spider-glow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span>🌀 3D PANORAMIC</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-chakra italic font-bold tracking-wider transition-all flex items-center gap-1.5 ${
              viewMode === 'grid'
                ? 'bg-red-600 text-white shadow-spider-glow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span>🔲 4-CAMPUS GRID</span>
          </button>
        </div>
      </div>

      {/* Campus Selector Quick Rail (Clickable campus chips with live badge) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-8">
        {campuses.map((campus, idx) => {
          const isActive = activeCampusIndex === idx
          const theme = CAMPUS_THEMES[campus.id] || CAMPUS_THEMES.bhimtal
          const eventCount = getCampusEventsCount(campus.name)

          return (
            <button
              key={campus.id}
              onClick={() => onSelectCampus(idx)}
              className={`p-3 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                isActive
                  ? `bg-[#0E1526] ${theme.border} ${theme.glow} ring-2 ${theme.ring}`
                  : 'bg-[#090D18]/80 border-[#1E293B] hover:border-gray-600 hover:bg-[#0E1526]/60'
              }`}
            >
              {/* Background ambient accent tint */}
              <div
                className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
                style={{ backgroundColor: theme.colorHex }}
              />

              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{theme.icon}</span>
                  <div>
                    <p className={`font-chakra italic font-bold text-sm ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {campus.code}
                    </p>
                    <p className="text-[11px] font-mono text-gray-400 truncate max-w-[130px]">
                      {campus.location.split(',')[0]}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${theme.badgeBg}`}>
                    {eventCount} {eventCount === 1 ? 'Event' : 'Events'}
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {/* ======================================================== */}
      {/* MODE 1: GRAND 3D PANORAMIC CAROUSEL (LARGE 4K CARDS)    */}
      {/* ======================================================== */}
      {viewMode === 'curve' && (
        <div className="relative w-full">
          {/* Main 3D Stage */}
          <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full h-[460px] sm:h-[520px] md:h-[560px] flex items-center justify-center overflow-hidden"
            style={{ perspective: '1400px' }}
          >
            {campuses.map((campus, idx) => {
              let offset = idx - activeCampusIndex
              if (offset < -2) offset += campuses.length
              if (offset > 2) offset -= campuses.length

              const isCenter = offset === 0
              const theme = CAMPUS_THEMES[campus.id] || CAMPUS_THEMES.bhimtal
              const eventCount = getCampusEventsCount(campus.name)

              // 3D Matrix Math tuned for grand widescreen cards
              // Larger cards: center card takes prominence, side cards frame it gracefully
              const translateX = offset * (typeof window !== 'undefined' && window.innerWidth < 640 ? 320 : 520)
              const translateY = Math.abs(offset) * 16
              const translateZ = -Math.abs(offset) * 110
              const rotateY = -offset * 14
              const opacity = Math.abs(offset) > 2 ? 0 : isCenter ? 1 : 0.82
              const zIndex = 25 - Math.abs(offset) * 5

              return (
                <div
                  key={campus.id}
                  onClick={() => onSelectCampus(idx)}
                  style={{
                    transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg)`,
                    opacity,
                    zIndex,
                    willChange: 'transform, opacity',
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease-out'
                  }}
                  className={`absolute w-[92vw] max-w-[800px] h-[390px] sm:h-[450px] md:h-[490px] cursor-pointer rounded-3xl overflow-hidden border backdrop-blur-2xl transition-all group ${
                    isCenter
                      ? `${theme.border} ${theme.glow} ring-2 ${theme.ring} scale-100`
                      : 'border-[#1E293B] hover:border-gray-500 hover:brightness-110 scale-[0.94]'
                  }`}
                >
                  {/* High-Resolution Campus Photo */}
                  <img
                    src={campus.image}
                    alt={campus.name}
                    loading="eager"
                    decoding="async"
                    style={{ transform: 'translateZ(0)' }}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                  />

                  {/* Elegant Vignette Overlay (Top & Bottom only so photo remains bright and clear) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-black/35 to-black/60 pointer-events-none" />

                  {/* Top Bar HUD Info */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20">
                    {/* Sector Code Pill */}
                    <div className="flex items-center gap-2">
                      <span className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border backdrop-blur-md shadow-lg flex items-center gap-2 ${theme.badgeBg}`}>
                        <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: theme.colorHex }}></span>
                        <span>{campus.code.toUpperCase()}</span>
                      </span>

                      <span className="hidden sm:inline-flex px-3 py-1.5 rounded-full text-xs font-mono bg-black/60 border border-white/20 text-gray-200 backdrop-blur-md">
                        {theme.icon} {eventCount} {eventCount === 1 ? 'Event' : 'Events'}
                      </span>
                    </div>

                    {/* Expand 4K Photo Lightbox Trigger Button */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        setLightboxCampus(campus)
                      }}
                      title="Inspect Full 4K Photo"
                      className="px-3.5 py-1.5 rounded-full text-xs font-chakra italic font-bold bg-black/70 hover:bg-black/90 text-white border border-white/30 hover:border-white transition-all backdrop-blur-md flex items-center gap-1.5 shadow-lg group/btn"
                    >
                      <span className="text-sm">🔍</span>
                      <span className="hidden xs:inline">MEMORIES OF EVENTS</span>
                    </button>
                  </div>

                  {/* Bottom Content HUD */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 z-20 bg-gradient-to-t from-[#060810] via-[#060810]/95 to-transparent">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`text-xs font-mono font-bold tracking-wider ${theme.accentText}`}>
                            📍 {campus.location}
                          </span>
                        </div>

                        <h3 className="spider-heading text-xl sm:text-2xl md:text-3xl text-white drop-shadow-lg leading-tight mb-2">
                          {campus.name}
                        </h3>

                        <p className="text-xs sm:text-sm font-rajdhani text-gray-300 font-medium line-clamp-2">
                          {campus.tagline}
                        </p>
                      </div>

                      {/* Right Action / CTA */}
                      <div className="shrink-0 flex items-center gap-3">
                        {isCenter ? (
                          <div className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-chakra italic font-bold tracking-wider shadow-lg flex items-center gap-2 ${theme.btnBg}`}>
                            <span>RADAR LOCKED</span>
                            <span>➔</span>
                          </div>
                        ) : (
                          <div className="px-4 py-2 rounded-2xl text-xs font-chakra italic font-bold text-gray-300 bg-black/60 border border-white/20 backdrop-blur-md group-hover:border-white transition-all">
                            CLICK TO LOCK 🎯
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation Controls: Arrows and Indicator Dots */}
          <div className="flex items-center justify-center space-x-6 mt-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-[#0E1526] hover:bg-red-950 border border-red-500/50 hover:border-red-500 text-white flex items-center justify-center transition-all shadow-spider-glow text-xl active:scale-95"
              title="Previous Campus (Left Arrow)"
            >
              ←
            </button>

            {/* Stepper Dots */}
            <div className="flex items-center space-x-2">
              {campuses.map((c, i) => {
                const isActive = activeCampusIndex === i
                const theme = CAMPUS_THEMES[c.id] || CAMPUS_THEMES.bhimtal
                return (
                  <button
                    key={c.id}
                    onClick={() => onSelectCampus(i)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-10 shadow-lg'
                        : 'w-2.5 bg-gray-700 hover:bg-gray-500'
                    }`}
                    style={{ backgroundColor: isActive ? theme.colorHex : undefined }}
                    title={`Select ${c.code}`}
                  />
                )
              })}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#0E1526] hover:bg-red-950 border border-red-500/50 hover:border-red-500 text-white flex items-center justify-center transition-all shadow-spider-glow text-xl active:scale-95"
              title="Next Campus (Right Arrow)"
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 2: QUAD-CAMPUS WIDESCREEN GRID VIEW (ALL 4 CAMPUSES) */}
      {/* ======================================================== */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
          {campuses.map((campus, idx) => {
            const isActive = activeCampusIndex === idx
            const theme = CAMPUS_THEMES[campus.id] || CAMPUS_THEMES.bhimtal
            const eventCount = getCampusEventsCount(campus.name)

            return (
              <div
                key={campus.id}
                onClick={() => onSelectCampus(idx)}
                className={`relative rounded-3xl overflow-hidden border cursor-pointer transition-all duration-500 group h-[340px] sm:h-[380px] flex flex-col justify-between ${
                  isActive
                    ? `${theme.border} ${theme.glow} ring-2 ${theme.ring} scale-[1.01]`
                    : 'border-[#1E293B] hover:border-gray-500 hover:scale-[1.005]'
                }`}
              >
                {/* Full HD Campus Background Photo */}
                <img
                  src={campus.image}
                  alt={campus.name}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Gradient Scrim for readable badges and text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-black/40 to-black/60 pointer-events-none" />

                {/* Top Card Bar */}
                <div className="relative z-10 p-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border backdrop-blur-md ${theme.badgeBg}`}>
                      {theme.icon} {campus.code.toUpperCase()}
                    </span>
                    {isActive && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white text-black animate-pulse">
                        ACTIVE RADAR
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setLightboxCampus(campus)
                    }}
                    className="px-3 py-1 rounded-full text-xs font-chakra italic font-bold bg-black/75 hover:bg-black text-white border border-white/20 hover:border-white transition-all backdrop-blur-md flex items-center gap-1"
                  >
                    🔍 4K PHOTO
                  </button>
                </div>

                {/* Bottom Card Content */}
                <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-[#060810] via-[#060810]/95 to-transparent">
                  <p className="text-xs font-mono text-gray-300 flex items-center gap-1 mb-1">
                    <span className={theme.accentText}>📍</span> {campus.location}
                  </p>

                  <h3 className="spider-heading text-lg sm:text-2xl text-white mb-1.5 drop-shadow-md">
                    {campus.name}
                  </h3>

                  <p className="text-xs font-rajdhani text-gray-300 mb-4 line-clamp-1">
                    {campus.tagline}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="text-xs font-mono text-gray-400">
                      📅 {eventCount} {eventCount === 1 ? 'Mission Scheduled' : 'Missions Scheduled'}
                    </span>

                    <span
                      className={`text-xs font-chakra italic font-bold px-3.5 py-1.5 rounded-full transition-all ${
                        isActive ? theme.btnBg : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {isActive ? 'RADAR SELECTED ✓' : 'SELECT RADAR ➔'}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* ======================================================== */}
      {/* 4K FULLSCREEN CAMPUS PHOTO LIGHTBOX MODAL               */}
      {/* ======================================================== */}
      {lightboxCampus && (
        <div
          onClick={() => setLightboxCampus(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-[#090D18] border border-red-500/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
          >
            {/* Lightbox Header */}
            <div className="p-4 sm:p-5 border-b border-gray-800 flex items-center justify-between bg-black/60">
              <div className="flex items-center gap-3">
                <span className="text-2xl">
                  {CAMPUS_THEMES[lightboxCampus.id]?.icon || '🏛️'}
                </span>
                <div>
                  <h3 className="spider-heading text-lg sm:text-xl text-white">
                    {lightboxCampus.name}
                  </h3>
                  <p className="text-xs font-mono text-gray-400">
                    📍 {lightboxCampus.location}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setLightboxCampus(null)}
                className="w-10 h-10 rounded-full bg-red-950/80 hover:bg-red-600 border border-red-500/50 text-white font-mono font-bold flex items-center justify-center transition-all shadow-spider-glow"
              >
                ✕
              </button>
            </div>

            {/* High-Resolution Photo Display */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={lightboxCampus.image}
                alt={lightboxCampus.name}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Lightbox Footer Details */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0E1526] via-[#090D18] to-black border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs sm:text-sm font-rajdhani text-gray-300 italic">
                "{lightboxCampus.tagline}"
              </p>

              <button
                type="button"
                onClick={() => {
                  const idx = campuses.findIndex(c => c.id === lightboxCampus.id)
                  if (idx !== -1) onSelectCampus(idx)
                  setLightboxCampus(null)
                }}
                className="btn-spider-pill px-6 py-2 text-xs shrink-0"
              >
                LOCK RADAR ON THIS CAMPUS ➔
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
