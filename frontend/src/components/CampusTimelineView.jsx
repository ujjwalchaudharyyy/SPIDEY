import React from 'react'
import EventCard from './EventCard'

export default function CampusTimelineView({ campus, events, rsvpedIds, onRsvp }) {
  const todayStr = '2026-10-27'

  const pastEvents = events.filter(e => e.event_date < todayStr)
  const presentEvents = events.filter(e => e.event_date === todayStr)
  const futureEvents = events.filter(e => e.event_date > todayStr)

  return (
    <div className="w-full mt-6 space-y-12">
      {/* Active Campus Header Banner with Full 4K Photo Background */}
      <div className="relative rounded-3xl overflow-hidden border border-red-500/40 shadow-modal-glow min-h-[220px] flex items-end">
        {/* Full 4K Campus Photo Background */}
        <img
          src={campus.image}
          alt={campus.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient dark scrim for contrast & readable text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-[#060810]/75 to-transparent" />
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />

        {/* Header Content */}
        <div className="relative z-10 p-6 sm:p-8 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/60 text-red-300 text-xs font-mono mb-2 backdrop-blur-md shadow-spider-glow">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              CURVED RADAR LOCKED // {campus.code.toUpperCase()}
            </div>
            <h2 className="spider-heading text-2xl sm:text-4xl text-white drop-shadow-lg">
              {campus.name}
            </h2>
            <p className="text-sm font-rajdhani text-gray-200 mt-1 font-semibold flex items-center gap-2">
              <span>{campus.tagline}</span> • <span className="text-red-400 font-mono">📍 {campus.location}</span>
            </p>
          </div>

          {/* Past, Present, Future Metrics */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="bg-[#090D18]/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-gray-700/80 text-center">
              <p className="text-[10px] font-mono text-gray-400">PAST</p>
              <p className="text-base font-chakra italic font-bold text-gray-300">{pastEvents.length}</p>
            </div>
            <div className="bg-red-950/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-red-500/60 text-center shadow-spider-glow">
              <p className="text-[10px] font-mono text-red-300">PRESENT</p>
              <p className="text-base font-chakra italic font-bold text-white">{presentEvents.length}</p>
            </div>
            <div className="bg-blue-950/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-blue-500/60 text-center shadow-spider-glow-blue">
              <p className="text-[10px] font-mono text-blue-300">FUTURE</p>
              <p className="text-base font-chakra italic font-bold text-white">{futureEvents.length}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 1. PRESENT EVENTS (HAPPENING TODAY) */}
      <section className="space-y-4">
        <div className="flex items-center space-x-3 pb-2 border-b border-red-500/30">
          <div className="w-3.5 h-3.5 rounded-full bg-red-500 animate-ping" />
          <h3 className="spider-heading text-xl sm:text-2xl text-red-400 flex items-center gap-2">
            <span>🔴 PRESENT EVENTS (LIVE TODAY)</span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-red-950/80 border border-red-500 text-red-300 normal-case">
              {presentEvents.length} Active
            </span>
          </h3>
        </div>

        {presentEvents.length === 0 ? (
          <div className="spider-card text-center py-8 border-dashed border-gray-800">
            <p className="text-gray-400 font-mono text-xs">No live events scheduled for today at {campus.code}. Explore upcoming future missions!</p>
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

      {/* 2. FUTURE EVENTS (UPCOMING) */}
      <section className="space-y-4">
        <div className="flex items-center space-x-3 pb-2 border-b border-blue-500/30">
          <span className="text-xl">🚀</span>
          <h3 className="spider-heading text-xl sm:text-2xl text-blue-400 flex items-center gap-2">
            <span>UPCOMING & FUTURE EVENTS</span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-500 text-blue-300 normal-case">
              {futureEvents.length} Scheduled
            </span>
          </h3>
        </div>

        {futureEvents.length === 0 ? (
          <div className="spider-card text-center py-8 border-dashed border-gray-800">
            <p className="text-gray-400 font-mono text-xs">No upcoming future events announced yet.</p>
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

      {/* 3. PAST EVENTS (ARCHIVED) */}
      <section className="space-y-4 opacity-90">
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
          <div className="spider-card text-center py-8 border-dashed border-gray-800">
            <p className="text-gray-400 font-mono text-xs">No past archives found on record.</p>
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
    </div>
  )
}
