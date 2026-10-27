import { useRef, useState, useEffect } from 'react'

export default function IntroVideoModal({ onComplete }) {
  const videoRef = useRef(null)
  const bgVideoRef = useRef(null)
  const [hasSound, setHasSound] = useState(false)
  const [mobileFitMode, setMobileFitMode] = useState('fit') // 'fit' (cinematic) or 'fill' (zoom)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Start playing immediately — muted first (browser policy), then try unmuted
    video.muted = true
    video.currentTime = 0

    const tryPlay = () => {
      // First try with sound
      video.muted = false
      video.volume = 1.0
      video.play()
        .then(() => setHasSound(true))
        .catch(() => {
          // Browser blocked sound — play muted (autoplay policy)
          video.muted = true
          video.play().catch(() => {})
          setHasSound(false)
        })
    }

    // Play as soon as enough data is loaded
    if (video.readyState >= 2) {
      // Already has enough data — play right now
      tryPlay()
    } else {
      video.addEventListener('canplay', tryPlay, { once: true })
    }

    return () => {
      video.removeEventListener('canplay', tryPlay)
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
      {/* Dynamic Ambient Glow Layer for Mobile Portrait */}
      <video
        ref={bgVideoRef}
        src="/assets/videos/before_login.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        webkit-playsinline="true"
        x5-playsinline="true"
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-45 scale-125 pointer-events-none sm:hidden"
      />

      {/* Cyber Grid Ambient Lines */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90 pointer-events-none z-[1]" />

      {/* Main 4K Video Element */}
      <div className={`relative z-10 w-full h-full flex items-center justify-center ${
        mobileFitMode === 'fit' ? 'p-2 sm:p-0' : 'p-0'
      }`}>
        <video
          ref={videoRef}
          src="/assets/videos/before_login.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
          onEnded={onComplete}
          className={`pointer-events-none transition-all duration-500 ${
            mobileFitMode === 'fit'
              ? 'w-full max-h-[82vh] sm:max-h-full sm:h-full object-contain sm:object-cover rounded-2xl sm:rounded-none border border-red-500/30 sm:border-0 shadow-[0_0_35px_rgba(239,68,68,0.35)] sm:shadow-none'
              : 'w-full h-full object-cover'
          }`}
        />
      </div>

      {/* Spider-Man Tech Branding */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-8 flex items-center space-x-2.5 sm:space-x-3 pointer-events-none z-20">
        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-red-600/40 via-red-950/80 to-black border border-red-500/60 flex items-center justify-center backdrop-blur-md shadow-spider-glow flex-shrink-0">
          <span className="text-lg sm:text-2xl animate-pulse">🕷️</span>
        </div>
        <div>
          <h1 className="font-chakra italic font-bold text-sm sm:text-xl text-white tracking-wider flex items-center gap-1.5 sm:gap-2">
            GRAPHIC ERA <span className="text-red-500 text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-red-950/80 border border-red-500/50 not-italic">SPIDER-VERSE</span>
          </h1>
          <p className="text-[9px] sm:text-xs font-mono text-gray-400">4-CAMPUS MULTIVERSE RADAR</p>
        </div>
      </div>

      {/* Mobile Top Controls: Sound Toggle & Aspect Ratio Switcher */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30 flex items-center gap-2">
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

      {/* Bottom Skip / Enter Button */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 z-30">
        <button
          onClick={(e) => {
            e.stopPropagation()
            onComplete()
          }}
          className="btn-spider-pill py-2 px-5 sm:py-2.5 sm:px-7 text-xs sm:text-sm shadow-[0_0_20px_rgba(239,68,68,0.5)] active:scale-95"
        >
          <span>ENTER PORTAL</span>
          <span>➔</span>
        </button>
      </div>
    </div>
  )
}
