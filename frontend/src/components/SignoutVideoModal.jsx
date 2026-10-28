import React, { useRef, useEffect } from 'react'

export default function SignoutVideoModal({ onComplete }) {
  const videoRef = useRef(null)

  useEffect(() => {
    // Keyboard shortcut to skip signout transition instantly
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
    video.muted = false
    video.volume = 1.0

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback to muted if browser blocks unmuted audio on redirect
        video.muted = true
        video.play().catch(() => {})
      })
    }
  }, [])

  return (
    <div
      onClick={onComplete}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden select-none cursor-pointer"
    >
      {/* Dynamic Spider Glow Background (Lightweight CSS, Zero Video Lag) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(226,27,36,0.18)_0%,_rgba(15,0,0,0.7)_55%,_#000000_100%)] pointer-events-none" />

      {/* Main Ultra-Smooth 4K Video */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-0">
        <video
          ref={videoRef}
          src="/assets/videos/signout_video.mp4"
          preload="auto"
          autoPlay
          playsInline
          webkit-playsinline="true"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
          onEnded={onComplete}
          style={{
            imageRendering: '-webkit-optimize-contrast',
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            filter: 'contrast(1.05) saturate(1.06)'
          }}
          className="w-full max-h-[88vh] sm:max-h-full sm:h-full object-contain sm:object-cover rounded-2xl sm:rounded-none border border-red-500/40 sm:border-0 shadow-[0_0_40px_rgba(226,27,36,0.5)] sm:shadow-none"
        />
      </div>

      {/* Spider-Tech Branding Top Left */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-8 flex items-center space-x-2.5 sm:space-x-3 pointer-events-none z-20">
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-red-600/40 via-red-950/80 to-black border border-red-500/60 flex items-center justify-center backdrop-blur-md shadow-spider-glow flex-shrink-0">
          <span className="text-base sm:text-xl animate-pulse">🕷️</span>
        </div>
        <div>
          <h1 className="font-chakra italic font-bold text-xs sm:text-base text-white tracking-wider flex items-center gap-1.5">
            GRAPHIC ERA <span className="text-red-500 text-[10px] px-2 py-0.5 rounded-full bg-red-950/80 border border-red-500/50 not-italic">DISCONNECTED</span>
          </h1>
          <p className="text-[9px] sm:text-[10px] font-mono text-gray-400">SIGNING OUT OF MULTIVERSE GRID...</p>
        </div>
      </div>

      {/* Quick Skip Button Top Right */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-30">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onComplete?.()
          }}
          className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-red-950/90 hover:bg-red-900 border border-red-500/80 text-white font-mono text-[10px] sm:text-xs flex items-center gap-1.5 backdrop-blur-md shadow-spider-glow cursor-pointer transition-all active:scale-95"
          title="Proceed to Login"
        >
          <span>⏭️</span>
          <span className="font-bold">PROCEED TO LOGIN</span>
          <span className="text-[10px] text-red-300">➔</span>
        </button>
      </div>

    </div>
  )
}
