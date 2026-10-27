import { useRef, useEffect, useState } from 'react'

export default function SigninVideoModal({ onComplete }) {
  const videoRef = useRef(null)
  const [hasSound, setHasSound] = useState(false)

  useEffect(() => {
    // Keyboard shortcut to skip transition video instantly
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        onComplete?.()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onComplete])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Start with muted to guarantee instant 0-second play across all browsers/mobile
    video.muted = true
    video.defaultMuted = true

    const startInstantPlay = () => {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Attempt to unmute with audio
            video.muted = false
            video.volume = 1.0
            setHasSound(true)
          })
          .catch(() => {
            // Browser restricted unmuted autoplay — keep smooth muted playback
            video.muted = true
            video.play().catch(() => {})
            setHasSound(false)
          })
      }
    }

    startInstantPlay()
    video.addEventListener('canplay', startInstantPlay, { once: true })
    video.addEventListener('loadeddata', startInstantPlay, { once: true })

    return () => {
      video.removeEventListener('canplay', startInstantPlay)
      video.removeEventListener('loadeddata', startInstantPlay)
    }
  }, [])

  const toggleSound = (e) => {
    if (e) e.stopPropagation()
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted
      videoRef.current.muted = nextMuted
      videoRef.current.volume = 1.0
      setHasSound(!nextMuted)
    }
  }

  return (
    <div
      onClick={onComplete}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden cursor-pointer select-none"
    >
      {/* Dynamic Spider Radial Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(226,27,36,0.22)_0%,_rgba(10,13,24,0.75)_55%,_#060810_100%)] pointer-events-none" />

      {/* Main 4K Transition Video Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-0">
        <video
          ref={videoRef}
          src="/assets/videos/sign.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
          onEnded={onComplete}
          onError={(e) => {
            if (!e.target.dataset.triedFallback) {
              e.target.dataset.triedFallback = '1'
              e.target.src = '/assets/videos/login_bg.mp4'
              e.target.play().catch(() => {})
            }
          }}
          className="w-full max-h-[88vh] sm:max-h-full sm:h-full object-contain sm:object-cover rounded-2xl sm:rounded-none border border-red-500/40 sm:border-0 shadow-[0_0_45px_rgba(239,68,68,0.5)] sm:shadow-none transition-all duration-300"
          style={{ willChange: 'transform', transform: 'translateZ(0)' }}
        />
      </div>

      {/* Spider-Man Tech Top-Left HUD */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-8 flex items-center space-x-2.5 sm:space-x-3 pointer-events-none z-20">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-600/40 via-red-950/80 to-black border border-red-500/60 flex items-center justify-center backdrop-blur-md shadow-spider-glow flex-shrink-0">
          <span className="text-lg sm:text-2xl animate-pulse">🕷️</span>
        </div>
        <div>
          <h1 className="font-chakra italic font-bold text-xs sm:text-lg text-white tracking-wider flex items-center gap-1.5 sm:gap-2">
            GRAPHIC ERA <span className="text-emerald-400 text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/60 not-italic">ACCESS GRANTED</span>
          </h1>
          <p className="text-[9px] sm:text-xs font-mono text-gray-300">WARPING TO CAMPUS DASHBOARD...</p>
        </div>
      </div>

      {/* Top Controls: Skip Video & Audio Toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30 flex items-center gap-2">
        {/* Quick Skip Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onComplete()
          }}
          className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-red-950/90 hover:bg-red-900 border border-red-500/80 text-white font-mono text-[10px] sm:text-xs flex items-center gap-1.5 backdrop-blur-md shadow-spider-glow cursor-pointer transition-all active:scale-95"
          title="Skip transition to dashboard"
        >
          <span>⏭️</span>
          <span className="font-bold">SKIP TO DASHBOARD</span>
        </button>

        {/* Audio Toggle */}
        <button
          type="button"
          onClick={toggleSound}
          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/80 hover:bg-red-950/70 border border-red-500/60 text-white font-mono text-[10px] sm:text-xs flex items-center gap-1.5 backdrop-blur-md shadow-spider-glow cursor-pointer transition-all active:scale-95"
        >
          <span className="text-xs sm:text-sm">{hasSound ? '🔊' : '🔇'}</span>
          <span className="font-semibold">{hasSound ? 'SOUND ON' : 'TAP AUDIO'}</span>
        </button>
      </div>

      {/* Bottom Skip / Enter Button */}
      <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-8 z-30">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onComplete()
          }}
          className="btn-spider-pill py-2.5 px-6 sm:py-3 sm:px-8 text-xs sm:text-sm shadow-[0_0_25px_rgba(239,68,68,0.6)] active:scale-95 flex items-center gap-2 cursor-pointer"
        >
          <span>ENTER DASHBOARD</span>
          <span>➔</span>
        </button>
      </div>
    </div>
  )
}
