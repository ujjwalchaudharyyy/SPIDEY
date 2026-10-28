import { useRef, useEffect, useState } from 'react'

export default function SigninVideoModal({ onComplete }) {
  const videoRef = useRef(null)
  const [hasSound, setHasSound] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.volume = 1.0
    video.currentTime = 0

    // User just clicked the login button (valid user gesture), so audio is pre-authorized!
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setHasSound(!video.muted)
        })
        .catch(() => {
          // If browser restricted sound, continue muted playback instantly without pausing
          video.muted = true
          video.play().catch(() => {})
          setHasSound(false)
        })
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
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden cursor-pointer select-none animate-fadeIn"
      style={{
        contain: 'paint',
        willChange: 'transform, opacity',
        transform: 'translate3d(0, 0, 0)'
      }}
    >
      {/* Dynamic Spider Radial Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(226,27,36,0.22)_0%,_rgba(10,13,24,0.75)_55%,_#060810_100%)] pointer-events-none" />

      {/* Main 4K Transition Video Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-0">
        <video
          ref={videoRef}
          src="/assets/videos/sign.mp4"
          autoPlay
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
          className="w-full max-h-[88vh] sm:max-h-full sm:h-full object-contain sm:object-cover rounded-2xl sm:rounded-none border border-red-500/40 sm:border-0 shadow-[0_0_45px_rgba(239,68,68,0.5)] sm:shadow-none"
          style={{
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
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

      {/* Top Controls: Audio Toggle */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30 flex items-center gap-2">
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
    </div>
  )
}
