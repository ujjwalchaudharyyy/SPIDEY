import React, { useState } from 'react'
import EventCard from './EventCard'

const THEME_ACCENTS = {
  bhimtal: {
    border: 'border-red-500/60',
    glow: 'shadow-[0_0_40px_rgba(226,27,36,0.4)]',
    badge: 'bg-red-950/80 text-red-300 border-red-500/60',
    ping: 'bg-red-500',
    highlight: 'text-red-400'
  },
  haldwani: {
    border: 'border-blue-500/60',
    glow: 'shadow-[0_0_40px_rgba(15,82,186,0.45)]',
    badge: 'bg-blue-950/80 text-blue-300 border-blue-500/60',
    ping: 'bg-blue-500',
    highlight: 'text-blue-400'
  },
  dehradun: {
    border: 'border-amber-400/60',
    glow: 'shadow-[0_0_40px_rgba(255,215,0,0.4)]',
    badge: 'bg-amber-950/80 text-amber-300 border-amber-400/60',
    ping: 'bg-amber-400',
    highlight: 'text-amber-400'
  },
  deemed: {
    border: 'border-cyan-400/60',
    glow: 'shadow-[0_0_40px_rgba(0,240,255,0.45)]',
    badge: 'bg-cyan-950/80 text-cyan-300 border-cyan-400/60',
    ping: 'bg-cyan-400',
    highlight: 'text-cyan-400'
  }
}

export default function CampusTimelineView({ campus, events, rsvpedIds, onRsvp }) {
  const [showPhotoModal, setShowPhotoModal] = useState(false)
  const todayStr = '2026-10-27'

  const pastEvents = events.filter(e => e.event_date < todayStr)
  const presentEvents = events.filter(e => e.event_date === todayStr)
  const futureEvents = events.filter(e => e.event_date > todayStr)

  const theme = THEME_ACCENTS[campus.id] || THEME_ACCENTS.bhimtal

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="w-full mt-8 space-y-12">
      {/* ======================================================== */}
      {/* GRAND ACTIVE CAMPUS HERO BANNER (ENLARGED 4K SHOWCASE)  */}
      {/* ======================================================== */}
      <div className={`relative rounded-3xl overflow-hidden border ${theme.border} ${theme.glow} min-h-[340px] sm:min-h-[420px] flex flex-col justify-between transition-all group`}>
        {/* Full 4K Campus Photo Background */}
        <img
          src={campus.image}
          alt={campus.name}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Lighter, balanced gradient overlay so photo architecture remains bright and clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-black/45 to-black/60 pointer-events-none" />

        {/* Top Floating HUD Status Bar */}
        <div className="relative z-10 p-5 sm:p-7 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold backdrop-blur-md border shadow-lg ${theme.badge}`}>
              <span className={`w-2 h-2 rounded-full animate-ping ${theme.ping}`}></span>
              RADAR ACTIVE // {campus.code.toUpperCase()}
            </span>

            <span className="px-3 py-1.5 rounded-full text-xs font-mono bg-black/60 border border-white/20 text-gray-200 backdrop-blur-md">
              ⚡ LIVE TIMELINE
            </span>
          </div>

          {/* Quick 4K Lightbox Inspection Button */}
          <button
            type="button"
            onClick={() => setShowPhotoModal(true)}
            className="px-4 py-2 rounded-full text-xs font-chakra italic font-bold bg-black/75 hover:bg-black text-white border border-white/30 hover:border-white transition-all backdrop-blur-md flex items-center gap-1.5 shadow-lg"
          >
            <span>🔍</span>
            <span>EXPAND 4K PHOTO</span>
          </button>
        </div>

        {/* Bottom Banner Content & Metrics */}
        <div className="relative z-10 p-6 sm:p-8 bg-gradient-to-t from-[#060810] via-[#060810]/95 to-transparent">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-mono text-gray-300 flex items-center gap-1 mb-2">
                <span className={theme.highlight}>📍</span> {campus.location}
              </p>

              <h2 className="spider-heading text-2xl sm:text-4xl lg:text-5xl text-white drop-shadow-xl leading-tight">
                {campus.name}
              </h2>

              <p className="text-sm sm:text-base font-rajdhani text-gray-200 mt-2 font-medium">
                {campus.tagline}
              </p>

              {/* Quick Jump Links to Timeline Sub-Sections */}
              <div className="flex flex-wrap items-center gap-2.5 mt-4 pt-3 border-t border-white/10">
                <span className="text-[11px] font-mono text-gray-400">JUMP TO:</span>
                <button
                  type="button"
                  onClick={() => scrollToSection('present-events')}
                  className="px-3 py-1 rounded-xl text-xs font-chakra italic font-bold bg-red-950/80 hover:bg-red-900 border border-red-500/60 text-red-300 flex items-center gap-1.5 transition-all shadow-spider-glow"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  LIVE TODAY ({presentEvents.length})
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('future-events')}
                  className="px-3 py-1 rounded-xl text-xs font-chakra italic font-bold bg-blue-950/80 hover:bg-blue-900 border border-blue-500/60 text-blue-300 flex items-center gap-1.5 transition-all shadow-spider-glow-blue"
                >
                  <span>🚀</span>
                  UPCOMING ({futureEvents.length})
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('past-events')}
                  className="px-3 py-1 rounded-xl text-xs font-chakra italic font-bold bg-gray-900/80 hover:bg-gray-800 border border-gray-700 text-gray-300 flex items-center gap-1.5 transition-all"
                >
                  <span>📜</span>
                  ARCHIVES ({pastEvents.length})
                </button>
              </div>
            </div>

            {/* Past, Present, Future Metrics HUD */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="bg-[#090D18]/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-gray-700/80 text-center min-w-[85px]">
                <p className="text-[10px] font-mono text-gray-400">PAST</p>
                <p className="text-xl font-chakra italic font-bold text-gray-300">{pastEvents.length}</p>
              </div>
              <div className="bg-red-950/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-red-500/60 text-center shadow-spider-glow min-w-[85px]">
                <p className="text-[10px] font-mono text-red-300">PRESENT</p>
                <p className="text-xl font-chakra italic font-bold text-white">{presentEvents.length}</p>
              </div>
              <div className="bg-blue-950/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-blue-500/60 text-center shadow-spider-glow-blue min-w-[85px]">
                <p className="text-[10px] font-mono text-blue-300">FUTURE</p>
                <p className="text-xl font-chakra italic font-bold text-white">{futureEvents.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. PRESENT EVENTS (HAPPENING TODAY)                      */}
      {/* ======================================================== */}
      <section id="present-events" className="space-y-4 pt-2">
        <div className="flex items-center space-x-3 pb-2 border-b border-red-500/30">
          <div className="w-3.5 h-3.5 rounded-full bg-red-500 animate-ping" />
          <h3 className="spider-heading text-xl sm:text-2xl text-red-400 flex items-center gap-2">
            <span>🔴 PRESENT EVENTS (LIVE TODAY)</span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-red-950/80 border border-red-500 text-red-300 normal-case">
              {presentEvents.length} Active Today
            </span>
          </h3>
        </div>

        {presentEvents.length === 0 ? (
          <div className="spider-card text-center py-10 border-dashed border-gray-800">
            <span className="text-3xl block mb-2">📡</span>
            <p className="text-gray-400 font-mono text-xs">
              No live missions scheduled for today at {campus.code}. Check out upcoming future missions below!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {presentEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                isStudent={true}
                isRsvped={rsvpedIds.has(event.id)}
                onRsvp={onRsvp}
              />
            ))}
          </div>
        )}
      </section>

      {/* ======================================================== */}
      {/* 2. FUTURE EVENTS (UPCOMING)                              */}
      {/* ======================================================== */}
      <section id="future-events" className="space-y-4 pt-2">
        <div className="flex items-center space-x-3 pb-2 border-b border-blue-500/30">
          <span className="text-xl">🚀</span>
          <h3 className="spider-heading text-xl sm:text-2xl text-blue-400 flex items-center gap-2">
            <span>UPCOMING & FUTURE MISSIONS</span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-500 text-blue-300 normal-case">
              {futureEvents.length} Scheduled
            </span>
          </h3>
        </div>

        {futureEvents.length === 0 ? (
          <div className="spider-card text-center py-10 border-dashed border-gray-800">
            <span className="text-3xl block mb-2">🌌</span>
            <p className="text-gray-400 font-mono text-xs">No upcoming future events announced yet for this campus.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                isStudent={true}
                isRsvped={rsvpedIds.has(event.id)}
                onRsvp={onRsvp}
              />
            ))}
          </div>
        )}
      </section>

      {/* ======================================================== */}
      {/* 3. PAST EVENTS (ARCHIVED)                                */}
      {/* ======================================================== */}
      <section id="past-events" className="space-y-4 opacity-90 pt-2">
        <div className="flex items-center space-x-3 pb-2 border-b border-gray-800">
          <span className="text-xl">📜</span>
          <h3 className="spider-heading text-xl sm:text-2xl text-gray-400 flex items-center gap-2">
            <span>PAST EVENTS & ARCHIVES</span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-gray-900 border border-gray-700 text-gray-400 normal-case">
              {pastEvents.length} Concluded
            </span>
          </h3>
        </div>

        {pastEvents.length === 0 ? (
          <div className="spider-card text-center py-10 border-dashed border-gray-800">
            <span className="text-3xl block mb-2">📁</span>
            <p className="text-gray-400 font-mono text-xs">No past archives found on record for {campus.code}.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                isStudent={false}
                showStatus={false}
              />
            ))}
          </div>
        )}
      </section>

      {/* ======================================================== */}
      {/* 4K FULLSCREEN CAMPUS PHOTO LIGHTBOX MODAL               */}
      {/* ======================================================== */}
      {showPhotoModal && (
        <div
          onClick={() => setShowPhotoModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-[#090D18] border border-red-500/60 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
          >
            {/* Lightbox Header */}
            <div className="p-4 sm:p-5 border-b border-gray-800 flex items-center justify-between bg-black/60">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🏛️</span>
                <div>
                  <h3 className="spider-heading text-lg sm:text-xl text-white">
                    {campus.name}
                  </h3>
                  <p className="text-xs font-mono text-gray-400">
                    📍 {campus.location}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowPhotoModal(false)}
                className="w-10 h-10 rounded-full bg-red-950/80 hover:bg-red-600 border border-red-500/50 text-white font-mono font-bold flex items-center justify-center transition-all shadow-spider-glow"
              >
                ✕
              </button>
            </div>

            {/* High-Resolution Photo Display */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[460px] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={campus.image}
                alt={campus.name}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Lightbox Footer */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0E1526] via-[#090D18] to-black border-t border-gray-800 flex items-center justify-between gap-3">
              <p className="text-xs sm:text-sm font-rajdhani text-gray-300 italic">
                "{campus.tagline}"
              </p>

              <button
                type="button"
                onClick={() => setShowPhotoModal(false)}
                className="px-5 py-2 rounded-xl text-xs font-chakra italic font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
              >
                CLOSE PREVIEW ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
