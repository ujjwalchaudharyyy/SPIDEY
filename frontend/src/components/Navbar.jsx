import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import WebShooterTransition from './WebShooterTransition'
import SignoutVideoModal from './SignoutVideoModal'
import { useState } from 'react'

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [transitionMsg, setTransitionMsg] = useState(null)
  const [showSignoutVideo, setShowSignoutVideo] = useState(false)

  const handleNavClick = (destName) => {
    setTransitionMsg(`WARPING TO ${destName}...`)
  }

  const handleLogout = () => {
    // Show the sign-out video first
    setShowSignoutVideo(true)
  }

  const handleSignoutComplete = () => {
    setShowSignoutVideo(false)
    logout()
    navigate('/login')
  }

  return (
    <>
      <WebShooterTransition message={transitionMsg} onDone={() => setTransitionMsg(null)} />
      {showSignoutVideo && (
        <SignoutVideoModal onComplete={handleSignoutComplete} />
      )}
      <nav className="sticky top-0 z-40 bg-[#090D18]/90 backdrop-blur-xl border-b border-red-500/30 shadow-spider-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo & Graphic Era Spider Brand */}
            <Link
              to="/"
              onClick={() => handleNavClick('HEADQUARTERS')}
              className="flex items-center space-x-3.5 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-black/90 border border-red-500/60 flex items-center justify-center shadow-spider-glow group-hover:scale-105 transition-transform overflow-hidden p-0.5 shrink-0">
                <img src="/logo.png?v=2" alt="Graphic Era Event Hub" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="spider-heading text-lg flex items-center gap-2">
                  GRAPHIC ERA <span className="text-red-500">EVENT HUB</span>
                </div>
                <p className="text-[11px] font-mono text-red-400">
                  QUAD-CAMPUS MULTIVERSE GRID
                </p>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  {user.role === 'student' && (
                    <Link
                      to="/feed"
                      onClick={() => handleNavClick('STUDENT FEED')}
                      className="text-gray-300 hover:text-red-400 font-mono text-xs sm:text-sm font-semibold transition tracking-wider flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-red-950/40"
                    >
                      <span>🕸️</span>
                      <span>EVENTS RADAR</span>
                    </Link>
                  )}

                  {user.role === 'organizer' && (
                    <Link
                      to="/organizer"
                      onClick={() => handleNavClick('ORGANIZER HQ')}
                      className="text-gray-300 hover:text-red-400 font-mono text-xs sm:text-sm font-semibold transition tracking-wider flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-red-950/40"
                    >
                      <span>⚡</span>
                      <span>ORGANIZER HQ</span>
                    </Link>
                  )}

                  {user.role === 'admin' && (
                    <Link
                      to="/admin"
                      onClick={() => handleNavClick('SANCTUM ADMIN')}
                      className="text-gray-300 hover:text-red-400 font-mono text-xs sm:text-sm font-semibold transition tracking-wider flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-red-950/40"
                    >
                      <span>🛡️</span>
                      <span>ADMIN SANCTUM</span>
                    </Link>
                  )}

                  {/* User Profile Badge */}
                  <div className="hidden md:flex items-center space-x-2 pl-3 border-l border-red-500/30">
                    <div className="text-right">
                      <p className="text-xs font-chakra font-bold text-white">{user.name}</p>
                      <p className="text-[10px] font-mono text-red-400 capitalize">{user.role} • {user.campus?.split(' ')?.[3] || 'HQ'}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="btn-spider-ghost text-xs py-1.5 px-3 cursor-pointer"
                  >
                    DISCONNECT
                  </button>
                </>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/login"
                    className="text-gray-300 hover:text-red-400 font-mono text-xs sm:text-sm font-semibold transition"
                  >
                    IDENTIFY (LOGIN)
                  </Link>
                  <Link
                    to="/register"
                    className="btn-spider-pill text-xs py-2 px-4"
                  >
                    JOIN WEB
                  </Link>
                </div>
              )}
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}
