import { useState } from 'react'
import EventRegistrationModal from './EventRegistrationModal'

const categoryStyles = {
  Academic: 'bg-blue-950/60 text-blue-300 border-blue-500/40',
  Cultural: 'bg-pink-950/60 text-pink-300 border-pink-500/40',
  Sports: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40',
  Technical: 'bg-purple-950/60 text-purple-300 border-purple-500/40',
  Workshop: 'bg-yellow-950/60 text-yellow-300 border-yellow-500/40',
  Social: 'bg-orange-950/60 text-orange-300 border-orange-500/40',
  Other: 'bg-gray-900/60 text-gray-300 border-gray-600/40',
}

const statusStyles = {
  pending: 'bg-yellow-950/80 text-yellow-300 border-yellow-500/60',
  approved: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60',
  rejected: 'bg-rose-950/80 text-rose-300 border-rose-500/60',
}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
}

function formatTime(timeStr) {
  if (!timeStr) return ''
  const [h, m] = timeStr.split(':')
  const hour = parseInt(h)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const h12 = hour % 12 || 12
  return `${h12}:${m} ${ampm}`
}

export default function EventCard({ event, onRsvp, isStudent, isRsvped, showStatus, onApprove, onReject, onDelete }) {
  const [rejecting, setRejecting] = useState(false)
  const [rejectReason, setRejectReason] = useState('')
  const [rsvpLoading, setRsvpLoading] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [registeredTicket, setRegisteredTicket] = useState(null)

  const handleRsvp = async () => {
    setRsvpLoading(true)
    await onRsvp?.(event.id)
    setRsvpLoading(false)
  }

  const handleReject = () => {
    onReject?.(event.id, rejectReason)
    setRejecting(false)
    setRejectReason('')
  }

  const todayStr = '2026-10-27'
  const isPast = event.event_date < todayStr
  const isPresent = event.event_date === todayStr

  return (
    <>
      <div className="spider-card group flex flex-col justify-between overflow-hidden p-0 border-[#1E293B] hover:border-red-500/70">
        {/* Event Header Photo */}
        <div className="relative h-44 w-full overflow-hidden bg-black">
          <img
            src={event.image_url || '/assets/campuses/bhimtal.png'}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090D18] via-transparent to-black/40" />

          {/* Badges on top of image */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border backdrop-blur-md ${categoryStyles[event.category] || categoryStyles.Other}`}>
              {event.category}
            </span>

            <div className="flex items-center gap-1.5">
              {isPresent && (
                <span className="text-[10px] font-chakra italic font-bold px-2 py-0.5 rounded-full bg-red-950/90 text-red-300 border border-red-500 shadow-spider-glow flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  LIVE TODAY
                </span>
              )}
              {isPast && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/80 text-gray-400 border border-gray-700">
                  ARCHIVED
                </span>
              )}
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/80 border border-red-500/40 text-xs font-mono font-bold text-red-300">
                <span>🕷️</span>
                <span>{event.rsvp_count || 0}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card Details Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="spider-heading text-base sm:text-lg text-white group-hover:text-red-400 transition-colors line-clamp-2 mb-2">
              {event.title}
            </h3>

            <p className="text-gray-400 text-xs font-rajdhani line-clamp-2 mb-4 leading-relaxed">
              {event.description}
            </p>

            {/* Metadata Grid */}
            <div className="space-y-1.5 text-xs font-mono text-gray-300 mb-4 bg-[#0E1526]/80 p-3 rounded-2xl border border-[#1E293B]">
              <div className="flex items-center">
                <span className="text-red-400 mr-2">📅</span>
                <span>{formatDate(event.event_date)} • {formatTime(event.event_time)}</span>
              </div>
              <div className="flex items-center">
                <span className="text-red-400 mr-2">📍</span>
                <span className="truncate">{event.venue}</span>
              </div>
              {event.organizer_name && (
                <div className="flex items-center text-gray-400 text-[11px]">
                  <span className="text-blue-400 mr-2">👤</span>
                  <span>By {event.organizer_name}</span>
                </div>
              )}
            </div>

            {registeredTicket && (
              <div className="p-2 mb-3 rounded-xl bg-emerald-950/60 border border-emerald-500 text-emerald-300 text-xs font-mono text-center">
                PASS CONFIRMED: <span className="font-bold text-white">{registeredTicket}</span>
              </div>
            )}
          </div>

          {/* Footer Action Buttons (REGISTER FOR EVENT + RSVP) */}
          <div className="pt-2 border-t border-[#1E293B] space-y-2">
            {isStudent && event.status === 'approved' && !isPast && (
              <div className="grid grid-cols-2 gap-2">
                {/* 1. Official Event Registration Button */}
                <button
                  type="button"
                  onClick={() => setShowRegisterModal(true)}
                  className="py-2.5 px-3 rounded-xl text-xs font-chakra italic font-bold tracking-wider bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white shadow-spider-glow flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>🎟️ REGISTER</span>
                </button>

                {/* 2. RSVP Quick Toggle */}
                <button
                  type="button"
                  onClick={handleRsvp}
                  disabled={rsvpLoading}
                  className={`py-2.5 px-3 rounded-xl text-xs font-chakra italic font-bold tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    isRsvped
                      ? 'bg-blue-600 text-white shadow-spider-glow-blue border border-blue-400'
                      : 'bg-[#0E1526] hover:bg-white/5 text-gray-300 border border-gray-700'
                  }`}
                >
                  {rsvpLoading ? (
                    <span>...</span>
                  ) : isRsvped ? (
                    <>
                      <span>✓ GOING</span>
                    </>
                  ) : (
                    <>
                      <span>RSVP</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {isPast && (
              <div className="w-full text-center py-2 text-xs font-mono text-gray-500 bg-[#0E1526]/40 rounded-xl">
                Event concluded
              </div>
            )}

            {onApprove && event.status === 'pending' && (
              <div className="w-full flex items-center gap-2">
                <button
                  onClick={() => onApprove(event.id)}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-3 rounded-xl text-xs font-chakra italic font-bold cursor-pointer"
                >
                  ✓ APPROVE
                </button>
                <button
                  onClick={() => setRejecting(true)}
                  className="flex-1 bg-rose-700 hover:bg-rose-600 text-white py-2 px-3 rounded-xl text-xs font-chakra italic font-bold cursor-pointer"
                >
                  ✗ REJECT
                </button>
              </div>
            )}

            {onDelete && (
              <button
                onClick={() => onDelete(event.id)}
                className="text-xs font-mono text-gray-500 hover:text-red-400 mt-2 block w-full text-right transition-colors cursor-pointer"
              >
                🗑️ Delete
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Event Registration Modal Popup */}
      {showRegisterModal && (
        <EventRegistrationModal
          event={event}
          onClose={() => setShowRegisterModal(false)}
          onSuccess={(ticket) => {
            setRegisteredTicket(ticket)
            onRsvp?.(event.id)
          }}
        />
      )}
    </>
  )
}
