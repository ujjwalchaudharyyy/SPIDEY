import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import axios from 'axios'

export default function Register() {
  const [step, setStep] = useState(1) // 1. Web-Warrior Details, 2. Choose Arenas, 3. Allied Squad & Pass
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [degree, setDegree] = useState('B.Tech CSE - 3rd Year')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')
  const [campus, setCampus] = useState('Graphic Era Hill University, Bhimtal')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isVideoMuted, setIsVideoMuted] = useState(false)
  const [isVideoHidden, setIsVideoHidden] = useState(false)
  const videoRef = useRef(null)

  const { login } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.muted = false
      videoRef.current.play().catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true
          setIsVideoMuted(true)
          videoRef.current.play()
        }
      })
    }
  }, [])

  const campuses = [
    { name: 'Graphic Era Hill University, Bhimtal', code: 'GEHU Bhimtal' },
    { name: 'Graphic Era, Haldwani', code: 'GEU Haldwani' },
    { name: 'Graphic Era, Dehradun', code: 'GEU Dehradun' },
    { name: 'Graphic Era, Roorkee', code: 'GEU Roorkee' }
  ]

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsVideoMuted(videoRef.current.muted)
    }
  }

  const toggleSkipVideo = () => {
    setIsVideoHidden(prev => {
      const next = !prev
      if (videoRef.current) {
        if (next) videoRef.current.pause()
        else videoRef.current.play().catch(() => {})
      }
      return next
    })
  }

  const handleNextStep = (e) => {
    e.preventDefault()
    setError('')
    if (step === 1) {
      if (!name || !email || !phone) {
        setError('Please enter your full name, student email, and phone number.')
        return
      }
      setStep(2)
    } else if (step === 2) {
      setStep(3)
    } else {
      handleFinalRegister()
    }
  }

  const handleFinalRegister = async () => {
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    setLoading(true)
    try {
      const res = await axios.post('/api/auth/register', {
        name,
        email,
        phone,
        degree,
        password,
        role,
        campus
      })
      // Save to localStorage registered users
      try {
        const saved = JSON.parse(localStorage.getItem('registered_users') || '[]')
        saved.push({ name, email: email.toLowerCase(), phone, degree, password, role, campus })
        localStorage.setItem('registered_users', JSON.stringify(saved))
      } catch (e) {}

      login(res.data.token)
      if (role === 'organizer') navigate('/organizer')
      else navigate('/feed')
    } catch (err) {
      // Vercel / Offline Mode Fallback
      try {
        const saved = JSON.parse(localStorage.getItem('registered_users') || '[]')
        saved.push({ name, email: email.toLowerCase(), phone, degree, password, role, campus })
        localStorage.setItem('registered_users', JSON.stringify(saved))
      } catch (e) {}

      const fakeToken = `header.${btoa(JSON.stringify({
        id: Math.floor(100 + Math.random() * 900),
        name: name || 'Peter Parker',
        email,
        role: role || 'student',
        campus: campus || 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
        phone,
        degree,
        exp: Math.floor(Date.now() / 1000) + 86400 * 7
      }))}.signature`
      login(fakeToken)
      if (role === 'organizer') navigate('/organizer')
      else navigate('/feed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-4 bg-black">
      {/* 4K Video Background with sign.mp4 & fallback */}
      {!isVideoHidden ? (
        <video
          ref={videoRef}
          src="/assets/videos/sign.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
          onError={(e) => {
            if (!e.target.dataset.fallback) {
              e.target.dataset.fallback = '1'
              e.target.src = '/assets/videos/login_bg.mp4'
              e.target.play().catch(() => {})
            }
          }}
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none scale-105 transition-opacity duration-700"
          style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)', imageRendering: '-webkit-optimize-contrast', filter: 'contrast(1.04) saturate(1.05)' }}
        />
      ) : (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0B1021] via-black to-[#130713]" />
      )}

      {/* Cyber Overlay Gradients */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b sm:bg-gradient-to-r from-black/85 via-black/40 to-black/85 pointer-events-none" />

      {/* Top Floating Controls: Skip Video & Sound Toggle */}
      <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-30 flex items-center gap-2">
        {/* Skip / Hide Video Button */}
        <button
          type="button"
          onClick={toggleSkipVideo}
          className="bg-black/80 hover:bg-red-950/80 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full sm:rounded-xl border border-red-500/60 text-[10px] sm:text-xs font-mono flex items-center gap-1.5 backdrop-blur-md transition-all shadow-spider-glow cursor-pointer active:scale-95"
          title="Skip or pause background video"
        >
          <span>{isVideoHidden ? '▶️' : '⏭️'}</span>
          <span className="font-semibold">{isVideoHidden ? 'PLAY VIDEO' : 'SKIP VIDEO'}</span>
        </button>

        {/* Sound Toggle */}
        <button
          type="button"
          onClick={toggleSound}
          className="bg-black/80 hover:bg-red-950/80 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full sm:rounded-xl border border-red-500/60 text-[10px] sm:text-xs font-mono flex items-center gap-1.5 sm:gap-2 backdrop-blur-md transition-all shadow-spider-glow cursor-pointer active:scale-95"
        >
          <span className="text-xs sm:text-sm">{isVideoMuted ? '🔇' : '🔊'}</span>
          <span className="font-semibold">{isVideoMuted ? 'TAP AUDIO' : 'SOUND ON'}</span>
        </button>
      </div>

      {/* Central Modal Card Exactly Matching User Screenshot */}
      <div className="relative z-20 w-full max-w-3xl my-8">
        <div className="spider-modal-box">
          {/* Header Title & Spider Icon */}
          <div className="flex items-start justify-between pb-4 border-b border-[#1E293B]">
            <div className="flex items-center space-x-3.5">
              <div className="w-14 h-14 rounded-2xl bg-black/90 border border-red-500/60 flex items-center justify-center shadow-spider-glow overflow-hidden p-0.5 shrink-0">
                <img src="/logo.png?v=2" alt="Graphic Era Event Hub Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="spider-heading text-xl sm:text-2xl">
                  SPIDER-MAN '26 RECRUITMENT PROTOCOL
                </h1>
                <p className="text-xs font-rajdhani font-semibold text-red-400/90 tracking-wide mt-0.5">
                  Graphic Era Hill University • Midtown Tech Hub
                </p>
              </div>
            </div>

            <Link
              to="/login"
              className="text-gray-400 hover:text-white text-xl p-1 rounded-lg hover:bg-white/5 transition-colors"
              title="Return to Login"
            >
              ✕
            </Link>
          </div>

          {/* Stepper Tabs Bar */}
          <div className="grid grid-cols-3 text-center border-b border-[#1E293B] text-xs font-mono font-medium py-3 text-gray-400">
            <button
              onClick={() => setStep(1)}
              className={`transition-colors py-1 ${
                step === 1 ? 'text-red-400 border-b-2 border-red-500 font-bold' : 'hover:text-gray-300'
              }`}
            >
              1. Web-Warrior Details
            </button>
            <button
              onClick={() => step > 1 && setStep(2)}
              className={`transition-colors py-1 ${
                step === 2 ? 'text-red-400 border-b-2 border-red-500 font-bold' : 'hover:text-gray-300'
              }`}
            >
              2. Choose Campus / Arenas
            </button>
            <button
              onClick={() => step > 2 && setStep(3)}
              className={`transition-colors py-1 ${
                step === 3 ? 'text-red-400 border-b-2 border-red-500 font-bold' : 'hover:text-gray-300'
              }`}
            >
              3. Allied Squad & Pass
            </button>
          </div>

          {/* Error Notice */}
          {error && (
            <div className="mt-4 bg-red-950/70 border border-red-500 text-red-200 px-4 py-2.5 rounded-xl text-xs font-mono flex items-center gap-2">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleNextStep} className="mt-6 space-y-5">
            {/* STEP 1: Web-Warrior Details */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="spider-label-modern">
                      <span>👤</span> Hero Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Peter Parker / Ujjwal Chaudhary"
                      className="spider-input-modern"
                      required
                    />
                  </div>

                  <div>
                    <label className="spider-label-modern">
                      <span>✉️</span> Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="spiderman@gehu.ac.in"
                      className="spider-input-modern"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="spider-label-modern">
                      <span>📞</span> Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="spider-input-modern"
                      required
                    />
                  </div>

                  <div>
                    <label className="spider-label-modern">
                      <span>🏛️</span> College / Dimension *
                    </label>
                    <select
                      value={campus}
                      onChange={(e) => setCampus(e.target.value)}
                      className="spider-input-modern bg-[#0E1526]"
                    >
                      {campuses.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="spider-label-modern">
                    Degree / Department & Current Year
                  </label>
                  <input
                    type="text"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    placeholder="B.Tech CSE - 3rd Year"
                    className="spider-input-modern"
                  />
                </div>
              </div>
            )}

            {/* STEP 2: Choose Campus Sector */}
            {step === 2 && (
              <div className="space-y-4">
                <p className="text-xs font-mono text-gray-300">
                  Select your Primary Graphic Era Campus Base from the 4-Campus Network:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {campuses.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setCampus(c.name)}
                      className={`p-4 rounded-2xl border text-left transition-all ${
                        campus === c.name
                          ? 'bg-red-950/60 border-red-500 shadow-spider-glow'
                          : 'bg-[#0E1526]/80 border-[#1E293B] hover:border-gray-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-chakra italic font-bold text-white text-base">
                          {c.code}
                        </span>
                        {campus === c.name && <span className="text-red-400 text-lg">🕸️</span>}
                      </div>
                      <p className="text-xs font-rajdhani text-gray-400 leading-snug">{c.name}</p>
                    </button>
                  ))}
                </div>

                <div className="pt-2">
                  <label className="spider-label-modern">
                    <span>⚡</span> System Responsibilities (Role)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setRole('student')}
                      className={`py-3 rounded-xl font-chakra italic font-bold text-xs tracking-wider border transition-all ${
                        role === 'student'
                          ? 'bg-red-600 text-white border-red-400 shadow-spider-glow'
                          : 'bg-[#0E1526]/60 border-[#1E293B] text-gray-400'
                      }`}
                    >
                      🎒 STUDENT (BROWSE & RSVP)
                    </button>

                    <button
                      type="button"
                      onClick={() => setRole('organizer')}
                      className={`py-3 rounded-xl font-chakra italic font-bold text-xs tracking-wider border transition-all ${
                        role === 'organizer'
                          ? 'bg-blue-600 text-white border-blue-400 shadow-spider-glow-blue'
                          : 'bg-[#0E1526]/60 border-[#1E293B] text-gray-400'
                      }`}
                    >
                      📋 ORGANIZER (DISPATCH EVENTS)
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Passcode & Final Confirmation */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className="spider-label-modern">
                    <span>🔒</span> Create Stark Security Passcode *
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Minimum 6 characters"
                    className="spider-input-modern"
                    required
                    minLength={6}
                  />
                </div>

                <div className="bg-[#0E1526]/70 border border-[#1E293B] rounded-2xl p-4 text-xs font-rajdhani space-y-1.5 text-gray-300">
                  <p className="font-chakra italic font-bold text-red-400">HERO IDENTITY SUMMARY:</p>
                  <p><span className="text-gray-400">Name:</span> {name}</p>
                  <p><span className="text-gray-400">Email:</span> {email}</p>
                  <p><span className="text-gray-400">Target Campus:</span> {campus}</p>
                  <p><span className="text-gray-400">Role:</span> {role.toUpperCase()}</p>
                </div>
              </div>
            )}

            {/* Stark Security Desk Badge matching screenshot */}
            <div className="bg-[#0E1526]/60 border border-red-950/80 rounded-2xl p-4 flex items-center space-x-3 text-xs font-mono text-gray-400">
              <div className="w-6 h-6 rounded-full border border-red-500/60 flex items-center justify-center text-red-400 shrink-0">
                ✓
              </div>
              <span>
                Valid student ID will be authenticated upon arrival at the Stark registration desk.
              </span>
            </div>

            {/* Footer Buttons Bar */}
            <div className="flex items-center justify-between pt-2">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="btn-spider-ghost text-xs"
                >
                  ← PREVIOUS STEP
                </button>
              ) : (
                <Link to="/login" className="text-xs font-mono text-gray-400 hover:text-red-400">
                  Already have a Spider-ID? Log in ➔
                </Link>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-spider-pill ml-auto"
              >
                <span>{loading ? 'INITIALIZING...' : step === 3 ? 'FINALIZE PROTOCOL' : 'CONTINUE'}</span>
                <span>➔</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
