import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isAudioActive, setIsAudioActive] = useState(false)
  const videoRef = useRef(null)

  const { login, isAuthenticated, user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = false
    video.volume = 1.0

    video.play()
      .then(() => {
        setIsAudioActive(true)
      })
      .catch(() => {
        video.muted = true
        video.play().catch(() => {})
        setIsAudioActive(false)
      })
  }, [])

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      videoRef.current.volume = 1.0
      setIsAudioActive(!videoRef.current.muted)
    }
  }

  const ensureSoundOnInteraction = () => {
    if (videoRef.current && videoRef.current.muted) {
      videoRef.current.muted = false
      videoRef.current.volume = 1.0
      videoRef.current.play().catch(() => {})
      setIsAudioActive(true)
    }
  }

  if (isAuthenticated) {
    if (user.role === 'admin') navigate('/admin', { replace: true })
    else if (user.role === 'organizer') navigate('/organizer', { replace: true })
    else navigate('/feed', { replace: true })
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await axios.post('/api/auth/login', { email, password })
      login(res.data.token)
      const role = res.data.user.role
      if (role === 'admin') navigate('/admin')
      else if (role === 'organizer') navigate('/organizer')
      else navigate('/feed')
    } catch (err) {
      setError(err.response?.data?.error || 'Spider-ID validation failed.')
    } finally {
      setLoading(false)
    }
  }

  const handleQuickLogin = (demoEmail, demoPass) => {
    ensureSoundOnInteraction()
    setEmail(demoEmail)
    setPassword(demoPass)
  }

  return (
    <div
      onClick={ensureSoundOnInteraction}
      className="relative min-h-[100dvh] w-full overflow-x-hidden overflow-y-auto flex flex-col sm:flex-row items-center justify-end p-4 sm:p-6 bg-black"
    >
      {/* 4K Background Video optimized for both Phone & Desktop */}
      <video
        ref={videoRef}
        src="/assets/videos/login_bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        x5-playsinline="true"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none scale-105"
      />

      {/* Cyber Gradient Overlays: responsive so phone video shines through */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b sm:bg-gradient-to-r from-black/85 via-black/40 to-black/85 pointer-events-none" />

      {/* Sound Toggle (Thumb-friendly on phone) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          toggleSound()
        }}
        className="absolute top-3 right-3 sm:top-6 sm:right-6 z-30 bg-black/80 hover:bg-red-950/80 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full sm:rounded-xl border border-red-500/60 text-[10px] sm:text-xs font-mono flex items-center gap-1.5 sm:gap-2 backdrop-blur-md transition-all shadow-spider-glow cursor-pointer active:scale-95"
      >
        <span className="text-xs sm:text-sm">{isAudioActive ? '🔊' : '🔇'}</span>
        <span className="font-semibold">{isAudioActive ? 'SOUND ON' : 'TAP FOR AUDIO'}</span>
      </button>

      {/* Left Branding (Desktop) */}
      <div className="absolute top-8 left-10 z-20 hidden lg:block">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600/40 via-red-950/80 to-black border border-red-500/60 flex items-center justify-center shadow-spider-glow">
            <span className="text-2xl animate-pulse">🕷️</span>
          </div>
          <div>
            <h1 className="spider-heading text-2xl">
              GRAPHIC ERA <span className="text-red-500">SPIDER-HUB</span>
            </h1>
            <p className="text-xs font-mono text-red-300">
              Bhimtal • Haldwani • Dehradun • Deemed University
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Top Header (Visible on phone to anchor the video look) */}
      <div className="sm:hidden relative z-20 w-full max-w-sm mt-8 mb-4 text-center">
        <div className="inline-flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-red-500/40">
          <span className="text-base animate-pulse">🕷️</span>
          <span className="font-chakra italic font-bold text-sm text-white">
            GRAPHIC ERA <span className="text-red-500 not-italic font-mono text-xs">SPIDER-HUB</span>
          </span>
        </div>
      </div>

      {/* Right Side Compact & Attractive Glass Card */}
      <div className="relative z-20 w-full sm:w-[420px] md:w-[440px] max-w-md mx-auto sm:mx-0 sm:mr-8 md:mr-12 my-auto">
        <div className="bg-[#090D18]/85 backdrop-blur-xl border border-red-500/40 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-modal-glow">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E293B]">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">🕷️</span>
              <div>
                <h2 className="spider-heading text-base sm:text-lg text-white">SPIDER-ID LOGIN</h2>
                <p className="text-[10px] sm:text-[11px] font-mono text-red-400">GRAPHIC ERA CAMPUS GRID</p>
              </div>
            </div>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" title="Radar Live"></span>
          </div>

          {error && (
            <div className="bg-red-950/80 border border-red-500 text-red-200 px-3 py-2 rounded-xl mb-3 text-xs font-mono flex items-center gap-2">
              <span>⚠️</span>
              <span className="truncate">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="spider-label-modern text-[11px]">
                <span>✉️</span> University Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="spider-input-modern text-xs py-2.5"
                placeholder="spiderman@gehu.ac.in"
                required
              />
            </div>

            <div>
              <label className="spider-label-modern text-[11px]">
                <span>🔒</span> Passcode
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="spider-input-modern text-xs py-2.5"
                placeholder="••••••••••••"
                required
              />
            </div>

            {/* Quick Fill Demo Credentials */}
            <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#0E1526]/70 border border-[#1E293B] text-[10px] sm:text-[11px] font-mono">
              <span className="text-gray-400">Admin: admin@campus.edu</span>
              <button
                type="button"
                onClick={() => handleQuickLogin('admin@campus.edu', 'admin123')}
                className="text-red-400 hover:text-red-300 font-bold underline ml-2 cursor-pointer active:scale-95"
              >
                Auto-Fill
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-spider-pill w-full py-2.5 text-xs justify-center mt-1 active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
            >
              <span>{loading ? 'AUTHENTICATING...' : 'ACCESS PORTAL'}</span>
              <span>➔</span>
            </button>
          </form>

          {/* Footer Recruitment Link */}
          <div className="mt-4 pt-3 border-t border-[#1E293B] text-center">
            <p className="text-xs font-rajdhani text-gray-400">
              New Recruit?{' '}
              <Link
                to="/register"
                className="font-chakra italic font-bold text-xs text-red-400 hover:text-red-300 underline underline-offset-4 ml-1 active:scale-95 inline-block"
              >
                CREATE SPIDER-ID ➔
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}