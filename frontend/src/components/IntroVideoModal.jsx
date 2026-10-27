import { useRef, useState, useEffect } from 'react'

export default function IntroVideoModal({ onComplete }) {
  const videoRef = useRef(null)
  const [hasStartedWithSound, setHasStartedWithSound] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = false
    video.volume = 1.0

    video.play()
      .then(() => {
        setHasStartedWithSound(true)
      })
      .catch(() => {
        video.muted = true
        video.play()
      })
  }, [])

  const handleAnyClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.volume = 1.0
      videoRef.current.play()
      setHasStartedWithSound(true)
    }
  }

  return (
    <div
      onClick={handleAnyClick}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden cursor-pointer select-none"
    >
      {/* 4K Video Element with disablePictureInPicture attribute */}
      <video
        ref={videoRef}
        src="/assets/videos/before_login.mp4"
        className="w-full h-full object-cover pointer-events-none"
        onEnded={onComplete}
        playsInline
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
      />

      {/* Spider-Man Tech Branding */}
      <div className="absolute top-6 left-8 flex items-center space-x-3 pointer-events-none z-10">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600/40 via-red-950/80 to-black border border-red-500/60 flex items-center justify-center backdrop-blur-md shadow-spider-glow">
          <span className="text-2xl animate-pulse">🕷️</span>
        </div>
        <div>
          <h1 className="font-chakra italic font-bold text-xl text-white tracking-wider flex items-center gap-2">
            GRAPHIC ERA <span className="text-red-500 text-xs px-2.5 py-0.5 rounded-full bg-red-950/80 border border-red-500/50 not-italic">SPIDER-VERSE</span>
          </h1>
          <p className="text-xs font-mono text-gray-400">4-CAMPUS MULTIVERSE RADAR INITIALIZING...</p>
        </div>
      </div>

      {/* Audio Indicator Overlay (Only if browser initially muted) */}
      {!hasStartedWithSound && (
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none bg-black/30">
          <div className="bg-black/80 border border-red-500/60 text-white px-8 py-4 rounded-full font-chakra italic font-bold text-sm tracking-wider flex items-center gap-3 shadow-modal-glow backdrop-blur-xl animate-pulse">
            <span className="text-2xl">🔊</span>
            <span>CLICK ANYWHERE TO ACTIVATE AUDIO</span>
            <span className="text-red-400">🕷️</span>
          </div>
        </div>
      )}

      {/* Enter / Skip Button */}
      <div className="absolute bottom-6 right-8 z-30">
        <button
          onClick={(e) => {
            e.stopPropagation()
            onComplete()
          }}
          className="btn-spider-pill py-2.5 px-7 text-xs"
        >
          <span>ENTER PORTAL</span>
          <span>➔</span>
        </button>
      </div>
    </div>
  )
}
