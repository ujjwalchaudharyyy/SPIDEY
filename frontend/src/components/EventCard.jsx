import { useState, useEffect, useCallback, useRef } from 'react'
import EventRegistrationModal from './EventRegistrationModal'
import EventGalleryModal from './EventGalleryModal'
import EventVideoModal from './EventVideoModal'
import { createGoogleCalendarUrl } from '../utils/calendarUtils'

const categoryStyles = {
  Academic: 'bg-blue-950/60 text-blue-300 border-blue-500/40',
  Cultural: 'bg-pink-950/60 text-pink-300 border-pink-500/40',
  Sports: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/40',
  Technical: 'bg-purple-950/60 text-purple-300 border-purple-500/40',
  Workshop: 'bg-yellow-950/60 text-yellow-300 border-yellow-500/40',
  Social: 'bg-orange-950/60 text-orange-300 border-orange-500/40',
  Other: 'bg-gray-900/60 text-gray-300 border-gray-600/40',
  'Hackathon / Technical Event': 'bg-purple-950/60 text-purple-300 border-purple-500/40',
  'University Event / Cultural Celebration': 'bg-amber-950/60 text-amber-300 border-amber-500/40',
  'Student Festival / Cultural and Entertainment Event': 'bg-rose-950/60 text-rose-300 border-rose-500/40',
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
  const [showVideoModal, setShowVideoModal] = useState(false)

  // Robust gallery extraction from both event.gallery and event.photos
  const gallery = (event.gallery && event.gallery.length > 0)
    ? event.gallery
    : (event.photos && event.photos.length > 0)
    ? event.photos.map(p => (typeof p === 'string' ? p : p.url))
    : (event.image_url ? [event.image_url] : ['/assets/campuses/bhimtal.png'])
  const hasMultiplePhotos = gallery.length > 1

  // Preload all gallery photos into browser cache for zero-latency instant transitions
  useEffect(() => {
    gallery.forEach(url => {
      if (url && typeof url === 'string') {
        const img = new Image()
        img.src = url
      }
    })
  }, [gallery])

  // Separate index for in-card sliding (independent of modal)
  const [cardPhotoIdx, setCardPhotoIdx] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const cardTouchStartX = useRef(null)
  const cardTouchStartY = useRef(null)

  // Smooth auto-cycling on hover when card has multiple photos
  useEffect(() => {
    if (!hasMultiplePhotos || !isHovered) return
    const timer = setInterval(() => {
      setCardPhotoIdx(prev => (prev === gallery.length - 1 ? 0 : prev + 1))
    }, 2200)
    return () => clearInterval(timer)
  }, [hasMultiplePhotos, isHovered, gallery.length])

  const cardPrev = useCallback((e) => {
    e?.stopPropagation?.()
    setCardPhotoIdx(prev => (prev === 0 ? gallery.length - 1 : prev - 1))
  }, [gallery.length])

  const cardNext = useCallback((e) => {
    e?.stopPropagation?.()
    setCardPhotoIdx(prev => (prev === gallery.length - 1 ? 0 : prev + 1))
  }, [gallery.length])

  const handleCardTouchStart = (e) => {
    cardTouchStartX.current = e.touches[0].clientX
    cardTouchStartY.current = e.touches[0].clientY
  }

  const handleCardTouchMove = (e) => {
    if (cardTouchStartX.current === null || !hasMultiplePhotos) return
    const dx = e.touches[0].clientX - cardTouchStartX.current
    const dy = e.touches[0].clientY - (cardTouchStartY.current || 0)
    // If swipe is more horizontal than vertical, prevent page scroll
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      e.preventDefault()
    }
  }

  const handleCardTouchEnd = (e) => {
    if (cardTouchStartX.current === null) return
    const diff = cardTouchStartX.current - e.changedTouches[0].clientX
    if (diff > 35) {
      cardNext(e)
    } else if (diff < -35) {
      cardPrev(e)
    }
    cardTouchStartX.current = null
    cardTouchStartY.current = null
  }

  // Keyboard nav for modal
  useEffect(() => {
    if (!showGalleryModal) return
    const onKey = (e) => {
      if (e.key === 'Escape') setShowGalleryModal(false)
      if (e.key === 'ArrowRight') setActivePhotoIndex(p => (p === gallery.length - 1 ? 0 : p + 1))
      if (e.key === 'ArrowLeft') setActivePhotoIndex(p => (p === 0 ? gallery.length - 1 : p - 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showGalleryModal, gallery.length])

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

  // Calculate days until event
  const getDaysUntil = () => {
    if (!event.event_date) return 999
    const today = new Date('2026-10-27T00:00:00')
    const evDate = new Date(`${event.event_date}T00:00:00`)
    const diff = evDate.getTime() - today.getTime()
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }
  const daysUntil = getDaysUntil()

  // Strict deadline: Registration closes 5-6 days before the event date
  // For ongoing event today (like Graphite on 2026-10-27), daysUntil is 0 -> registration closed!
  const isRegistrationClosed = isPast || isPresent || (daysUntil >= 0 && daysUntil <= 5)
  const isRegistrationOpen = !isPast && !isRegistrationClosed
  const hasGallery = (event.gallery && event.gallery.length > 0) || (event.photos && event.photos.length > 0)
  const hasVideo = !!event.video_url

  const handleOpenGallery = () => {
    if (hasVideo && !hasGallery) {
      setShowVideoModal(true)
      return
    }
    if (hasGallery) {
      setShowGalleryModal(true)
    } else if (hasVideo) {
      setShowVideoModal(true)
    }
  }

  return (
    <>
      <div className="spider-card group flex flex-col justify-between overflow-hidden p-0 border-[#1E293B] hover:border-red-500/70 transition-all duration-300">
        {/* Event Header Photo ΓÇö In-Card Gallery Slider */}
        <div
          className="relative h-52 w-full overflow-hidden bg-black cursor-pointer select-none"
          onClick={handleOpenGallery}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleCardTouchStart}
          onTouchMove={handleCardTouchMove}
          onTouchEnd={handleCardTouchEnd}
          style={{ touchAction: hasMultiplePhotos ? 'pan-y' : 'auto' }}
        >
          {/* Pre-rendered Hardware-Accelerated Photo Layers */}
          <div className="absolute inset-0 w-full h-full bg-black">
            {gallery.map((photoUrl, idx) => (
              <img
                key={idx}
                src={photoUrl}
                alt={`${event.title} - Photo ${idx + 1}`}
                loading="eager"
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out will-change-[opacity] ${
                  idx === cardPhotoIdx
                    ? 'opacity-100 z-10 scale-100'
                    : 'opacity-0 z-0 pointer-events-none scale-105'
                }`}
                style={{
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#090D18] via-transparent to-black/50 z-10 pointer-events-none" />

          {/* Badges on top of image */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 gap-1.5 flex-wrap">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border backdrop-blur-md ${categoryStyles[event.category] || categoryStyles.Other}`}>
                {event.category}
              </span>
              {event.highlight_tag && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/60 backdrop-blur-md font-bold">
                  {event.highlight_tag}
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 flex-wrap">
              {event.date_tba && (
                <span className="text-[10px] font-chakra italic font-bold px-2 py-0.5 rounded-full bg-cyan-950/90 text-cyan-200 border border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center gap-1 animate-pulse">
                  <span>Γ¥ä∩╕Å</span> DATE TBA
                </span>
              )}
              {event.registration_deadline && (
                <span className="text-[10px] font-chakra italic font-bold px-2 py-0.5 rounded-full bg-red-950/90 text-red-200 border border-red-500 shadow-spider-glow flex items-center gap-1 animate-pulse">
                  <span>≡ƒÜ¿</span> CLOSES 5 NOV
                </span>
              )}
              {isPresent && (
                <span className="text-[10px] font-chakra italic font-bold px-2 py-0.5 rounded-full bg-red-950/90 text-red-300 border border-red-500 shadow-spider-glow flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  LIVE TODAY
                </span>
              )}
              {isPast && (
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-black/85 text-yellow-400 border border-yellow-400/80 shadow-[0_0_15px_rgba(234,179,8,0.4)] flex items-center gap-1">
                  <span>≡ƒÅå</span> MEMORIES
                </span>
              )}
              <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/80 border border-red-500/40 text-xs font-mono font-bold text-red-300">
                <span>≡ƒò╖∩╕Å</span>
                <span>{event.rsvp_count || 0}</span>
              </div>
            </div>
          </div>

          {/* In-Card Prev / Next Arrows (visible on hover, only when gallery has multiple) */}
          {hasMultiplePhotos && (
            <>
              <button
                type="button"
                onClick={cardPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/75 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center text-lg font-bold border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-lg"
              >
                ΓÇ╣
              </button>
              <button
                type="button"
                onClick={cardNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/75 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center text-lg font-bold border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer shadow-lg"
              >
                ΓÇ║
              </button>

              {/* Dot Indicators */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setCardPhotoIdx(i) }}
                    className={`rounded-full transition-all duration-200 cursor-pointer ${
                      i === cardPhotoIdx
                        ? 'w-4 h-1.5 bg-amber-400'
                        : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              {/* Photo count pill */}
              <div className="absolute bottom-3 right-3 z-20 px-2 py-0.5 rounded-full bg-black/75 border border-white/20 text-[10px] font-mono text-gray-200">
                {cardPhotoIdx + 1}/{gallery.length}
              </div>
            </>
          )}

                    {/* Video Play Banner */}
          {hasVideo && isPast && !event.winner_team && (
            <div
              className="absolute bottom-2 left-2 right-2 z-10 bg-black/85 border border-red-500/60 rounded-xl px-3 py-2 text-xs font-chakra italic font-bold text-white flex items-center justify-between shadow-[0_0_20px_rgba(239,68,68,0.5)] backdrop-blur-md cursor-pointer hover:border-red-400 hover:scale-[1.02] transition-all"
              onClick={(e) => { e.stopPropagation(); setShowVideoModal(true) }}
            >
              <span className="truncate flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>▶ WATCH DRONE FLIGHT VIDEO</span>
              </span>
              <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded-md font-bold ml-1 flex-shrink-0 font-mono not-italic">PLAY HD</span>
            </div>
          )}

{/* Winner Callout Banner */}
          {event.winner_team && (
            <div className="absolute bottom-2 left-2 right-2 z-10 bg-black/80 border border-yellow-500/40 rounded-xl px-3 py-1.5 text-[11px] font-mono text-yellow-300 flex items-center justify-between shadow-lg backdrop-blur-md">
              <span className="truncate font-medium flex items-center gap-1.5">
                <span>≡ƒÅå</span> {event.winner_team}
              </span>
              <span className="text-[10px] bg-yellow-400 text-black px-2 py-0.5 rounded-md font-bold ml-1 flex-shrink-0">
                MEMORIES
              </span>
            </div>
          )}

          {/* Date TBA Banner */}
          {event.date_tba && (
            <div className="absolute bottom-2 left-2 right-2 z-10 bg-cyan-950/90 border border-cyan-500/50 rounded-xl px-3 py-1.5 text-[11px] font-mono text-cyan-200 flex items-center justify-between shadow-lg backdrop-blur-md">
              <span className="truncate font-medium flex items-center gap-1.5">
                <span>Γ¥ä∩╕Å</span> Date Revealing Soon // Reg: Jan - Feb
              </span>
              <span className="text-[9px] bg-cyan-400 text-black px-2 py-0.5 rounded-md font-bold ml-1 flex-shrink-0">
                PRE-REG
              </span>
            </div>
          )}

          {event.registration_deadline && (
            <div className="absolute bottom-2 left-2 right-2 z-10 bg-red-950/90 border border-red-500/60 rounded-xl px-3 py-1.5 text-[11px] font-mono text-red-200 flex items-center justify-between shadow-lg backdrop-blur-md">
              <span className="truncate font-medium flex items-center gap-1.5">
                <span>ΓÜí</span> Reg Live! Strict Deadline: 5 Nov
              </span>
              <span className="text-[9px] bg-red-500 text-white px-2 py-0.5 rounded-md font-bold ml-1 flex-shrink-0 animate-pulse">
                HURRY
              </span>
            </div>
          )}

          {/* Photos Callout Banner */}
          {hasGallery && !event.winner_team && (
            <div 
              onClick={(e) => {
                e.stopPropagation()
                handleOpenGallery()
              }}
              className="absolute bottom-2 left-2 right-2 z-10 bg-black/85 hover:bg-black/95 border border-amber-500/60 hover:border-amber-400 rounded-xl px-3 py-1.5 text-[11px] font-mono text-amber-300 flex items-center justify-between shadow-lg backdrop-blur-md cursor-pointer transition-all group/banner"
            >
              <span className="truncate font-medium flex items-center gap-1.5 text-white">
                <span>≡ƒô╕</span>
                <span>{isPast ? 'EVENT MEMORIES' : 'LIVE PHOTOS'} ({gallery.length})</span>
              </span>
              <span className="text-[10px] bg-amber-500 group-hover/banner:bg-amber-400 text-black px-2 py-0.5 rounded-md font-bold ml-1 flex-shrink-0 shadow-md flex items-center gap-1">
                MEMORIES Γ₧ö
              </span>
            </div>
          )}
        </div>

        {/* Card Details Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h3 
              className="spider-heading text-base sm:text-lg text-white group-hover:text-red-400 transition-colors line-clamp-2 cursor-pointer mb-2"
              onClick={handleOpenGallery}
            >
              {event.title}
            </h3>

            <p className="text-gray-300 text-xs font-rajdhani line-clamp-2 mb-4 leading-relaxed font-medium">
              {event.description}
            </p>

            {/* Metadata Grid */}
            <div className="space-y-1.5 text-xs font-mono text-gray-300 mb-4 bg-[#0E1526]/80 p-3 rounded-2xl border border-[#1E293B]">
              <div className="flex items-center">
                <span className="text-red-400 mr-2">≡ƒôà</span>
                {event.date_tba ? (
                  <span className="text-cyan-300 font-bold">
                    {event.display_date || 'Date: Revealing Soon (TBA) Γ¥ä∩╕Å'}
                  </span>
                ) : event.display_date ? (
                  <span>{event.display_date} ΓÇó {formatTime(event.event_time)}</span>
                ) : (
                  <span>{formatDate(event.event_date)} ΓÇó {formatTime(event.event_time)}</span>
                )}
              </div>
              <div className="flex items-center">
                <span className="text-red-400 mr-2">≡ƒôì</span>
                <span className="truncate">{event.venue}</span>
              </div>
              {event.registration_window && (
                <div className="flex items-center text-cyan-300 text-[11px] font-semibold">
                  <span className="mr-2">≡ƒô¥</span>
                  <span>Reg Window: {event.registration_window}</span>
                </div>
              )}
              {event.registration_deadline && (
                <div className="flex items-center text-amber-300 text-[11px] font-semibold">
                  <span className="mr-2">ΓÅ░</span>
                  <span>Registration Off Date: 5th Nov 2026</span>
                </div>
              )}
              {event.organizer_name && (
                <div className="flex items-center text-gray-400 text-[11px]">
                  <span className="text-blue-400 mr-2">≡ƒæñ</span>
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
            {(!event.status || event.status === 'approved') && !isPast && (
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {isRegistrationOpen ? (
                    <button
                      type="button"
                      onClick={() => setShowRegisterModal(true)}
                      className="py-2.5 px-3 rounded-xl text-xs font-chakra italic font-bold tracking-wider bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white shadow-spider-glow flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>🎟️ REGISTER</span>
                    </button>
                  ) : isPresent ? (
                    <div className="py-2.5 px-2 rounded-xl text-[10px] sm:text-xs font-mono font-bold bg-amber-950/70 border border-amber-500/60 text-amber-300 text-center flex items-center justify-center gap-1 shadow-inner">
                      <span>🔴 LIVE TODAY (REG CLOSED)</span>
                    </div>
                  ) : (
                    <div className="py-2.5 px-2 rounded-xl text-[10px] sm:text-xs font-mono font-bold bg-red-950/60 border border-red-500/40 text-red-300 text-center flex items-center justify-center gap-1" title="Registrations strictly close 5 days prior to event date">
                      <span>🔒 REG CLOSED (5-DAY RULE)</span>
                    </div>
                  )}

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
                        <span>Γ£ô GOING</span>
                      </>
                    ) : (
                      <>
                        <span>RSVP</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Google Calendar Direct Link */}
                <a
                  href={createGoogleCalendarUrl(event)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 px-3 rounded-xl text-[11px] font-chakra font-semibold bg-[#0A0D15] hover:bg-[#121624] text-blue-300 hover:text-blue-200 border border-blue-900/40 flex items-center justify-center gap-1.5 transition-all"
                  title="Add this event to your Google Calendar"
                >
                  <span>📅</span>
                  <span>Add to Google Calendar</span>
                </a>

                {hasGallery && (
                  <button
                    type="button"
                    onClick={handleOpenGallery}
                    className="w-full py-2 px-3 rounded-xl text-xs font-chakra italic font-bold tracking-wider bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white hover:brightness-110 shadow-spider-glow flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 border border-red-500/50"
                  >
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    <span>≡ƒô╕ MEMORIES ({gallery.length})</span>
                  </button>
                )}
              </div>
            )}

            {isPast && (
              <div className="flex items-center gap-2">
                {hasGallery && (
                  <button
                    type="button"
                    onClick={handleOpenGallery}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-chakra italic font-bold tracking-wider bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 text-black hover:brightness-110 shadow-md flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95"
                  >
                    <span>≡ƒô╕ MEMORIES</span>
                  </button>
                )}
                <div className={`py-2.5 text-xs font-mono text-gray-400 bg-[#0E1526]/80 border border-gray-800 rounded-xl text-center ${(hasGallery || hasVideo) ? 'px-3' : 'w-full'}`}>
                  Concluded
                </div>
                {hasVideo && (
                  <button
                    type="button"
                    onClick={() => setShowVideoModal(true)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-chakra italic font-bold tracking-wider bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white hover:brightness-110 shadow-spider-glow flex items-center justify-center gap-1.5 cursor-pointer transition-all active:scale-95 border border-red-500/50"
                  >
                    <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                    <span>▶ WATCH DRONE VIDEO</span>
                  </button>
                )}
              </div>
            )}

            {onApprove && event.status === 'pending' && (
              <div className="w-full flex items-center gap-2">
                <button
                  onClick={() => onApprove(event.id)}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-2 px-3 rounded-xl text-xs font-chakra italic font-bold cursor-pointer"
                >
                  Γ£ô APPROVE
                </button>
                <button
                  onClick={() => setRejecting(true)}
                  className="flex-1 bg-rose-700 hover:bg-rose-600 text-white py-2 px-3 rounded-xl text-xs font-chakra italic font-bold cursor-pointer"
                >
                  Γ£ù REJECT
                </button>
              </div>
            )}

            {onDelete && (
              <button
                onClick={() => onDelete(event.id)}
                className="text-xs font-mono text-gray-500 hover:text-red-400 mt-2 block w-full text-right transition-colors cursor-pointer"
              >
                ≡ƒùæ∩╕Å Delete
              </button>
            )}
          </div>
        </div>
      </div>

            {/* Video Modal */}
      {showVideoModal && hasVideo && (
        <EventVideoModal
          event={event}
          videoUrl={event.video_url || '/assets/videos/web_drone.mp4'}
          title={event.video_title || event.title}
          onClose={() => setShowVideoModal(false)}
        />
      )}

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

      {/* Full Feature Event Photo Gallery & Lightbox Modal */}
      {showGalleryModal && (
        <EventGalleryModal
          event={event}
          onClose={() => setShowGalleryModal(false)}
        />
      )}
    </>
  )
}
