import { useRef, useState, useEffect } from 'react'

export default function IntroVideoModal({ onComplete }) {
  const videoRef = useRef(null)
  const [hasSound, setHasSound] = useState(false)
  const [mobileFitMode, setMobileFitMode] = useState('fit') // 'fit' (cinematic) or 'fill' (zoom)

  useEffect(() => {
    // Keyboard shortcut to skip intro instantly
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
    video.currentTime = 0
    video.muted = true
    video.defaultMuted = true

    const startInstantPlay = () => {
      try { video.currentTime = 0 } catch {}
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video is already rolling instantly from start!
            // Now attempt to unmute with audio in the background
            video.muted = false
            video.volume = 1.0
            setHasSound(true)
          })
          .catch(() => {
            // If unmuting triggered an error, revert to muted playback without interruption
            video.muted = true
            video.play().catch(() => {})
            setHasSound(false)
          })
      }
    }

    // Trigger immediate playback attempt
    startInstantPlay()

    // Also attach events to fire the instant first frame/metadata/canplay is available
    video.addEventListener('loadedmetadata', startInstantPlay, { once: true })
    video.addEventListener('loadeddata', startInstantPlay, { once: true })
    video.addEventListener('canplay', startInstantPlay, { once: true })

    return () => {
      video.removeEventListener('loadedmetadata', startInstantPlay)
      video.removeEventListener('loadeddata', startInstantPlay)
      video.removeEventListener('canplay', startInstantPlay)
    }
  }, [])

  const activateAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.volume = 1.0
      videoRef.current.play().catch(() => {})
      setHasSound(true)
    }
  }

  const toggleAudio = (e) => {
    if (e) e.stopPropagation()
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted
      videoRef.current.muted = nextMuted
      videoRef.current.volume = 1.0
      setHasSound(!nextMuted)
    }
  }

  const toggleMobileFit = (e) => {
    if (e) e.stopPropagation()
    setMobileFitMode(prev => prev === 'fit' ? 'fill' : 'fit')
  }

  return (
    <div
      onClick={activateAudio}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden cursor-pointer select-none"
    >
      {/* Lightweight GPU-accelerated Ambient Spider Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(226,27,36,0.22)_0%,rgba(15,82,186,0.1)_50%,transparent_75%)] pointer-events-none" />

      {/* Cyber Grid Ambient Lines */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90 pointer-events-none z-[1]" />

      {/* Main 4K Video Element */}
      <div className={`relative z-10 w-full h-full flex items-center justify-center ${
        mobileFitMode === 'fit' ? 'p-2 sm:p-0' : 'p-0'
      }`}>
        <video
          ref={videoRef}
          src="/assets/videos/before_login.mp4"
          poster="/assets/videos/before_login_poster.jpg"
          autoPlay
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
          onEnded={onComplete}
          style={{
            imageRendering: '-webkit-optimize-contrast',
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            filter: 'contrast(1.04) saturate(1.06)'
          }}
          className={`pointer-events-none transition-all duration-500 ${
            mobileFitMode === 'fit'
              ? 'w-full max-h-[82vh] sm:max-h-full sm:h-full object-contain sm:object-cover rounded-2xl sm:rounded-none border border-red-500/30 sm:border-0 shadow-[0_0_35px_rgba(239,68,68,0.35)] sm:shadow-none'
              : 'w-full h-full object-cover'
          }`}
        />
      </div>

      {/* Spider-Man Tech Branding with 4K UHD Badge */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-8 flex items-center space-x-2.5 sm:space-x-3 pointer-events-none z-20">
        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-600/40 via-red-950/80 to-black border border-red-500/60 flex items-center justify-center backdrop-blur-md shadow-spider-glow flex-shrink-0">
          <span className="text-lg sm:text-2xl animate-pulse">🕷️</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="font-chakra italic font-bold text-sm sm:text-xl text-white tracking-wider flex items-center gap-1.5 sm:gap-2">
              GRAPHIC ERA <span className="text-red-500 text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-red-950/80 border border-red-500/50 not-italic">SPIDER-VERSE</span>
            </h1>
            <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/60 text-[10px] font-mono text-cyan-300 font-bold">
              ✨ 4K ULTRA HD
            </span>
          </div>
          <p className="text-[9px] sm:text-xs font-mono text-gray-400">4-CAMPUS MULTIVERSE RADAR • 60 FPS ULTRA HD</p>
        </div>
      </div>

      {/* Top Controls: Skip Video, Sound Toggle & Aspect Ratio Switcher */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30 flex items-center gap-2">
        {/* Quick Skip Intro Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onComplete?.()
          }}
          className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-red-950/90 hover:bg-red-900 border border-red-500/80 text-white font-mono text-[10px] sm:text-xs flex items-center gap-1.5 backdrop-blur-md shadow-spider-glow cursor-pointer transition-all active:scale-95"
          title="Skip intro video"
        >
          <span>⏭️</span>
          <span className="font-bold">SKIP INTRO</span>
          <span className="text-[10px] text-red-300">➔</span>
        </button>

        {/* Mobile View Toggle (Fit vs Full) */}
        <button
          type="button"
          onClick={toggleMobileFit}
          className="sm:hidden px-2.5 py-1.5 rounded-full bg-black/80 hover:bg-red-950/70 border border-red-500/40 text-[10px] font-mono text-gray-200 flex items-center gap-1.5 backdrop-blur-md shadow-spider-glow"
          title="Toggle view mode"
        >
          <span>{mobileFitMode === 'fit' ? '🔍' : '📱'}</span>
          <span>{mobileFitMode === 'fit' ? 'FULL' : 'FIT'}</span>
        </button>

        {/* Audio Toggle Pill */}
        <button
          type="button"
          onClick={toggleAudio}
          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/80 hover:bg-red-950/70 border border-red-500/60 text-white font-mono text-[10px] sm:text-xs flex items-center gap-1.5 sm:gap-2 backdrop-blur-md shadow-spider-glow cursor-pointer transition-all active:scale-95"
        >
          <span className="text-xs sm:text-sm">{hasSound ? '🔊' : '🔇'}</span>
          <span className="font-semibold">{hasSound ? 'SOUND ON' : 'TAP AUDIO'}</span>
        </button>
      </div>
    </div>
  )
}
