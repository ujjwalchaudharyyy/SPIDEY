import React, { useEffect, useRef } from 'react'

export default function EventVideoModal({ event, onClose }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback muted autoplay if browser blocks audio autoplay
        if (videoRef.current) {
          videoRef.current.muted = true
          videoRef.current.play().catch(() => {})
        }
      })
    }
  }, [])

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl overflow-y-auto animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl my-auto bg-[#090D18] border border-red-500/50 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(226,27,36,0.35)] flex flex-col max-h-[94vh]"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-800 bg-gradient-to-r from-red-950/60 via-[#090D18] to-black flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-600/40 via-red-950 to-black border border-red-500/60 flex items-center justify-center text-xl shadow-spider-glow flex-shrink-0">
              🚁
            </div>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-red-950 text-red-300 border border-red-500/50">
                  HD DRONE VIDEO
                </span>
                <span className="text-[10px] font-mono text-gray-400">
                  GEHU BHIMTAL
                </span>
              </div>
              <h2 className="spider-heading text-base sm:text-lg text-white truncate max-w-md sm:max-w-xl">
                {event.title}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-900/80 hover:bg-red-600 border border-gray-700 hover:border-red-500 text-gray-300 hover:text-white font-mono font-bold flex items-center justify-center transition-all cursor-pointer flex-shrink-0"
            title="Close (Esc)"
          >
            ✕
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative bg-black flex items-center justify-center max-h-[68vh] sm:max-h-[72vh] overflow-hidden">
          <video
            ref={videoRef}
            src={event.video_url}
            controls
            playsInline
            className="w-full max-h-[68vh] sm:max-h-[72vh] object-contain"
          />
        </div>

        {/* Footer info bar */}
        <div className="p-4 bg-gradient-to-r from-[#0E1526] via-[#090D18] to-black border-t border-gray-800 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-rajdhani text-gray-300 flex items-center gap-2">
            <span className="text-red-400">📍</span>
            <span>{event.venue || 'Main Oval Ground, GEHU Bhimtal'}</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-400 font-mono text-[11px]">{event.description}</span>
          </p>

          <button
            type="button"
            onClick={onClose}
            className="btn-spider-pill text-xs py-2 px-6"
          >
            CLOSE VIDEO ✕
          </button>
        </div>
      </div>
    </div>
  )
}
