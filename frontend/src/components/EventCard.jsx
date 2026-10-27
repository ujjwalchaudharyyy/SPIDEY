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
  const [showGalleryModal, setShowGalleryModal] = useState(false)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)

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
  const hasGallery = event.gallery && event.gallery.length > 0
  const isWatchTheCode = event.id === 4 || event.title?.includes('Watch The Code')

  return (
    <>
      <div className={`spider-card group flex flex-col justify-between overflow-hidden p-0 transition-all duration-300 ${
        isWatchTheCode 
          ? 'border-yellow-500/50 hover:border-yellow-400 shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:shadow-[0_0_40px_rgba(234,179,8,0.4)]'
          : 'border-[#1E293B] hover:border-red-500/70'
      }`}>
        {/* Event Header Photo */}
        <div 
          className="relative h-52 w-full overflow-hidden bg-black cursor-pointer"
          onClick={() => {
            if (hasGallery) {
              setShowGalleryModal(true)
            }
          }}
        >
          <img
            src={event.image_url || '/assets/campuses/bhimtal.png'}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090D18] via-transparent to-black/50" />

          {/* Badges on top of image */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
            <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border backdrop-blur-md ${
              isWatchTheCode ? 'bg-yellow-950/80 text-yellow-300 border-yellow-400/60' : (categoryStyles[event.category] || categoryStyles.Other)
            }`}>
              {isWatchTheCode ? '⚡ POKÉMON HACKATHON' : event.category}
            </span>

            <div className="flex items-center gap-1.5">
              {isPresent && (
                <span className="text-[10px] font-chakra italic font-bold px-2 py-0.5 rounded-full bg-red-950/90 text-red-300 border border-red-500 shadow-spider-glow flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  LIVE TODAY
                </span>
              )}
              {isPast && (
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-black/85 text-yellow-400 border border-yellow-400/80 shadow-[0_0_15px_rgba(234,179,8,0.4)] flex items-center gap-1">
                  <span>🏆</span> MEMORIES
                </span>
              )}
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/80 border border-red-500/40 text-xs font-mono font-bold text-red-300">
                <span>🕷️</span>
                <span>{event.rsvp_count || 0}</span>
              </div>
            </div>
          </div>

          {/* Watch The Code Pokémon Special Banner */}
          {isWatchTheCode && (
            <div className="absolute top-12 right-2 z-10 pointer-events-none group-hover:scale-110 transition-transform">
              <img src="/assets/events/pikachu.png" alt="Pikachu Mascot" className="w-14 h-14 drop-shadow-[0_0_15px_rgba(250,204,21,0.8)] animate-bounce" />
            </div>
          )}

          {/* Winner Banner if applicable */}
          {event.winner_team && (
            <div className="absolute bottom-2 left-2 right-2 z-10 bg-gradient-to-r from-amber-950/95 via-black/95 to-yellow-950/95 border border-yellow-400/80 rounded-xl px-3 py-1.5 text-[11px] font-mono text-yellow-300 flex items-center justify-between shadow-[0_0_20px_rgba(234,179,8,0.35)] backdrop-blur-md">
              <span className="truncate font-semibold flex items-center gap-1.5">
                <span>⚡</span> {event.winner_team}
              </span>
              <span className="text-[10px] bg-yellow-400 text-black px-2 py-0.5 rounded-md font-bold ml-1 flex-shrink-0 shadow">
                4K MEMORIES
              </span>
            </div>
          )}
        </div>

        {/* Card Details Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              {isWatchTheCode && (
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-yellow-500/20 border border-yellow-400/60 text-yellow-300">
                  POKÉMON × CODE
                </span>
              )}
              <h3 className="spider-heading text-base sm:text-lg text-white group-hover:text-yellow-400 transition-colors line-clamp-2">
                {event.title}
              </h3>
            </div>

            <p className="text-gray-300 text-xs font-rajdhani line-clamp-2 mb-4 leading-relaxed font-medium">
              {event.description}
            </p>

            {/* Metadata Grid */}
            <div className="space-y-1.5 text-xs font-mono text-gray-300 mb-4 bg-[#0E1526]/80 p-3 rounded-2xl border border-[#1E293B]">
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">📅</span>
                <span>{formatDate(event.event_date)} • {formatTime(event.event_time)}</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-400 mr-2">📍</span>
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

          {/* Footer Action Buttons */}
          <div className="pt-2 border-t border-[#1E293B] space-y-2">
            {isStudent && event.status === 'approved' && !isPast && (
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setShowRegisterModal(true)}
                  className="py-2.5 px-3 rounded-xl text-xs font-chakra italic font-bold tracking-wider bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white shadow-spider-glow flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>🎟️ REGISTER</span>
                </button>

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
              <div className="flex items-center gap-2">
                {hasGallery && (
                  <button
                    type="button"
                    onClick={() => setShowGalleryModal(true)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-chakra italic font-bold tracking-wider bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-500 text-black hover:brightness-110 shadow-[0_0_20px_rgba(234,179,8,0.5)] flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95"
                  >
                    <span>⚡ VIEW 4K MEMORIES</span>
                  </button>
                )}
                <div className={`py-2.5 text-xs font-mono text-gray-400 bg-[#0E1526]/80 border border-gray-800 rounded-xl text-center ${hasGallery ? 'px-3' : 'w-full'}`}>
                  Concluded
                </div>
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

      {/* Modern Pokémon-Themed 4K Memories Lightbox Modal */}
      {showGalleryModal && hasGallery && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6"
          onClick={() => setShowGalleryModal(false)}
        >
          <div 
            className="relative bg-gradient-to-b from-[#0e1628] to-[#070b14] border border-yellow-400/60 rounded-3xl max-w-4xl w-full p-5 sm:p-8 shadow-[0_0_70px_rgba(234,179,8,0.3)] space-y-5 max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Pokémon Mascot & Modern Title */}
            <div className="flex items-center justify-between pb-4 border-b border-[#1E293B]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 p-0.5 shadow-[0_0_20px_rgba(234,179,8,0.6)] flex items-center justify-center">
                  <img src="/assets/events/pikachu.png" alt="Pikachu" className="w-10 h-10 object-contain drop-shadow" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-yellow-400/20 border border-yellow-400/60 text-yellow-300 font-bold uppercase tracking-wider">
                      ⚡ POKÉMON HACKATHON MEMORIES
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/60 text-blue-300 font-bold">
                      4K ULTRA-HD
                    </span>
                  </div>
                  <h3 className="spider-heading text-lg sm:text-2xl text-white mt-1">{event.title}</h3>
                </div>
              </div>

              <button
                onClick={() => setShowGalleryModal(false)}
                className="w-10 h-10 rounded-full bg-black/80 border border-gray-700 text-gray-400 hover:text-white hover:border-yellow-400 flex items-center justify-center text-base cursor-pointer transition-all"
              >
                ✕
              </button>
            </div>

            {/* Winner Ceremony Card - Ultra Modern UI */}
            {event.winner_team && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-950/60 via-[#0e1628] to-amber-950/60 border border-yellow-400/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[0_0_25px_rgba(234,179,8,0.2)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/20 border border-yellow-400 flex items-center justify-center text-xl flex-shrink-0">
                    🏆
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-yellow-400 uppercase font-bold tracking-widest block">Official Winner</span>
                    <p className="text-sm sm:text-base font-chakra italic font-bold text-white tracking-wide">{event.winner_team}</p>
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-black/70 border border-yellow-400/40 text-[11px] font-mono text-yellow-300 self-start sm:self-auto flex items-center gap-1.5">
                  <span>💰</span> CASH PRIZE ₹5,000 + TROPHY
                </div>
              </div>
            )}

            {/* Big Active 4K Image with Glassmorphism Overlays */}
            <div className="relative rounded-2xl overflow-hidden border border-yellow-400/30 h-72 sm:h-[420px] bg-black group/view flex items-center justify-center">
              <img
                src={event.gallery[activePhotoIndex]}
                alt="Event Winner 4K Photo"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Prev / Next Controls */}
              <button
                type="button"
                onClick={() => setActivePhotoIndex((prev) => (prev === 0 ? event.gallery.length - 1 : prev - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-yellow-500 hover:text-black border border-gray-700 text-white flex items-center justify-center text-lg transition-all cursor-pointer shadow-lg active:scale-95"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => setActivePhotoIndex((prev) => (prev === event.gallery.length - 1 ? 0 : prev + 1))}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-yellow-500 hover:text-black border border-gray-700 text-white flex items-center justify-center text-lg transition-all cursor-pointer shadow-lg active:scale-95"
              >
                ›
              </button>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/85 border border-yellow-400/50 text-xs font-mono text-yellow-300 backdrop-blur-md">
                  📸 Memory {activePhotoIndex + 1} of {event.gallery.length} • 4K UHD
                </span>
                <span className="text-xs font-mono text-gray-400 hidden sm:inline-block">
                  Click thumbnails below to switch
                </span>
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3 pt-1">
              {event.gallery.map((photo, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`relative rounded-xl overflow-hidden h-16 sm:h-24 border-2 transition-all cursor-pointer group/thumb ${
                    activePhotoIndex === idx
                      ? 'border-yellow-400 scale-105 shadow-[0_0_20px_rgba(234,179,8,0.6)]'
                      : 'border-transparent opacity-60 hover:opacity-100 hover:border-gray-600'
                  }`}
                >
                  <img src={photo} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute bottom-1 right-1 text-[9px] font-mono px-1 rounded bg-black/80 text-yellow-300">
                    #{idx + 1}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={() => setShowGalleryModal(false)}
                className="btn-spider-pill text-xs py-2.5 px-8 shadow-[0_0_25px_rgba(234,179,8,0.4)]"
              >
                CLOSE MEMORIES ➔
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
