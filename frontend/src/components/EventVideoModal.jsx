import React, { useEffect, useRef, useState } from 'react'

export default function EventVideoModal({ event, videoUrl, title, onClose, defaultRotation = -90 }) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const [rotation, setRotation] = useState(defaultRotation)

  const resolvedVideoUrl = videoUrl || event?.video_url || '/assets/videos/web_drone.mp4'
  const resolvedTitle = title || event?.video_title || event?.title || '🏔️ Himalayan Web-Drone Flight & Aerial Photography'
  const resolvedVenue = event?.venue || 'Main Oval Ground, GEHU Bhimtal'
  const resolvedDescription = event?.description || 'Hands-on drone navigation, obstacle course flying across the Bhimtal lake valley, and live fpv surveillance demo.'

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
    // Attempt auto-playback on modal mount
    const vid = videoRef.current
    if (!vid) return

    const tryPlay = async () => {
      try {
        await vid.play()
        setIsPlaying(true)
        setHasStarted(true)
      } catch (err) {
        // Autoplay with sound was blocked by browser policy -> try muted autoplay
        console.warn('Unmuted autoplay blocked, attempting muted autoplay:', err)
        try {
          vid.muted = true
          setIsMuted(true)
          await vid.play()
          setIsPlaying(true)
          setHasStarted(true)
        } catch (mutedErr) {
          console.warn('Muted autoplay also blocked, user tap required:', mutedErr)
          setIsPlaying(false)
        }
      }
    }

    tryPlay()
  }, [resolvedVideoUrl])

  const togglePlay = () => {
    const vid = videoRef.current
    if (!vid) return

    if (vid.paused) {
      vid.play()
        .then(() => {
          setIsPlaying(true)
          setHasStarted(true)
        })
        .catch(err => {
          console.warn('Play error:', err)
        })
    } else {
      vid.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const vid = videoRef.current
    if (!vid) return
    vid.muted = !vid.muted
    setIsMuted(vid.muted)
  }

  const restartVideo = () => {
    const vid = videoRef.current
    if (!vid) return
    vid.currentTime = 0
    vid.play().catch(() => {})
    setIsPlaying(true)
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-2xl overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl my-auto bg-[#090D18] border border-red-500/60 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(226,27,36,0.4)] flex flex-col max-h-[96vh]"
      >
        {/* Header */}
        <div className="p-3.5 sm:p-4 border-b border-gray-800 bg-gradient-to-r from-red-950/70 via-[#090D18] to-black flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-red-600 via-red-900 to-black border border-red-500/60 flex items-center justify-center text-xl shadow-spider-glow flex-shrink-0 animate-pulse">
              🚁
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-red-950 text-red-300 border border-red-500/50 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                  HD WEB-DRONE VIDEO
                </span>
                <span className="text-[10px] font-mono text-cyan-400 hidden sm:inline">
                  GEHU BHIMTAL
                </span>
              </div>
              <h2 className="spider-heading text-sm sm:text-base text-white truncate">
                {resolvedTitle}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-900 hover:bg-red-600 border border-gray-700 hover:border-red-500 text-gray-300 hover:text-white font-mono font-bold flex items-center justify-center transition-all cursor-pointer flex-shrink-0 shadow-md active:scale-95"
            title="Close (Esc)"
          >
            ✕
          </button>
        </div>

        {/* Video Player Display */}
        <div className="relative bg-black flex items-center justify-center w-full min-h-[340px] sm:min-h-[440px] md:min-h-[480px] max-h-[70vh] overflow-hidden group">
          <div
            className="flex items-center justify-center transition-transform duration-300 ease-out"
            style={{
              transform: `rotate(${rotation}deg)`,
              width: Math.abs(rotation) % 180 !== 0 ? '56.25vh' : '100%',
              height: Math.abs(rotation) % 180 !== 0 ? '100%' : 'auto',
              maxWidth: Math.abs(rotation) % 180 !== 0 ? '420px' : '100%',
              maxHeight: Math.abs(rotation) % 180 !== 0 ? '750px' : '70vh',
            }}
          >
            <video
              ref={videoRef}
              src={resolvedVideoUrl}
              playsInline
              controls
              autoPlay
              preload="auto"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={(e) => {
                console.error('Video error:', e)
                setLoadError(true)
              }}
              className="w-full h-full object-contain cursor-pointer"
              onClick={togglePlay}
            />
          </div>

          {/* Fallback Tap to Play Overlay if blocked by browser */}
          {!isPlaying && !loadError && (
            <div
              onClick={togglePlay}
              className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-black/50"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600/90 hover:bg-red-500 text-white flex items-center justify-center text-2xl sm:text-3xl pl-1 shadow-[0_0_40px_rgba(239,68,68,0.8)] border-2 border-white/80 transition-transform active:scale-90 animate-bounce">
                ▶
              </div>
              <p className="mt-3 text-xs sm:text-sm font-chakra italic font-bold tracking-wider text-white shadow-md">
                TAP TO PLAY DRONE VIDEO
              </p>
            </div>
          )}

          {/* Quick Floating Controls on top-right of player */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10 opacity-80 hover:opacity-100 transition-opacity flex-wrap justify-end">
            <button
              type="button"
              onClick={() => setRotation(r => r - 90)}
              className="px-2 py-1 rounded-lg bg-black/85 hover:bg-red-950 text-cyan-300 hover:text-cyan-200 text-[11px] font-mono border border-cyan-500/50 backdrop-blur-md flex items-center gap-1 cursor-pointer transition shadow-sm"
              title="Rotate Left 90°"
            >
              <span>↺</span>
              <span>Rotate 90°</span>
            </button>
            <button
              type="button"
              onClick={() => setRotation(0)}
              className="px-2 py-1 rounded-lg bg-black/85 hover:bg-gray-800 text-gray-300 text-[11px] font-mono border border-gray-700 backdrop-blur-md flex items-center gap-1 cursor-pointer transition"
              title="Reset to 0°"
            >
              <span>0°</span>
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="px-2.5 py-1 rounded-lg bg-black/80 hover:bg-black text-white text-[11px] font-mono border border-gray-700 backdrop-blur-md flex items-center gap-1 cursor-pointer transition"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              <span>{isMuted ? '🔇 MUTED' : '🔊 SOUND ON'}</span>
            </button>
            <button
              type="button"
              onClick={restartVideo}
              className="px-2.5 py-1 rounded-lg bg-black/80 hover:bg-black text-white text-[11px] font-mono border border-gray-700 backdrop-blur-md flex items-center gap-1 cursor-pointer transition"
              title="Restart Video"
            >
              <span>🔄 REPLAY</span>
            </button>
          </div>

          {/* Error Message if file cannot be loaded */}
          {loadError && (
            <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-3xl mb-2">⚠️</span>
              <p className="text-sm font-mono text-red-400 font-bold">Video stream loading issue</p>
              <p className="text-xs text-gray-400 mt-1 max-w-sm">
                Tap below to open or download the direct video stream.
              </p>
              <a
                href={resolvedVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-4 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold"
              >
                Open Direct Video ➔
              </a>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-3.5 sm:p-4 bg-gradient-to-r from-[#0E1526] via-[#090D18] to-black border-t border-gray-800 flex flex-wrap items-center justify-between gap-2.5">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-rajdhani text-gray-300 flex items-center gap-1.5 truncate">
              <span className="text-red-400 flex-shrink-0">📍</span>
              <span className="font-semibold text-white truncate">{resolvedVenue}</span>
            </p>
            <p className="text-[11px] text-gray-400 font-mono line-clamp-1 mt-0.5">
              {resolvedDescription}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={resolvedVideoUrl}
              download="web_drone.mp4"
              className="px-3 py-1.5 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 hover:text-white text-[11px] font-mono font-bold transition flex items-center gap-1"
              title="Download Drone Video MP4"
            >
              <span>📥</span>
              <span className="hidden sm:inline">DOWNLOAD</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              className="btn-spider-pill text-xs py-1.5 px-4"
            >
              CLOSE ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
