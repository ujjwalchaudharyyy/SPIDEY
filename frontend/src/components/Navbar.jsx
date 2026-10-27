import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar({ onTabClick }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const isActive = (path) => location.pathname === path

  const handleNavClick = (label) => {
    if (onTabClick) {
      onTabClick(label)
    }
  }

  return (
    <nav className="sticky top-0 z-40 bg-[#060810]/90 backdrop-blur-xl border-b border-red-500/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Graphic Era Spider Brand */}
          <Link
            to="/"
            onClick={() => handleNavClick('HEADQUARTERS')}
            className="flex items-center space-x-3.5 group cursor-pointer"
            <div className="w-12 h-12 rounded-2xl bg-black/80 border border-red-500/60 flex items-center justify-center shadow-spider-glow group-hover:scale-105 transition-transform overflow-hidden p-0.5">
              <img src="/assets/logo.png" alt="Graphic Era Event Hub" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="spider-heading text-lg flex items-center gap-2">
                GRAPHIC ERA <span className="text-red-500">SPIDER-HUB</span>
              </div>
              <p className="text-[11px] font-mono text-red-400">
                QUAD-CAMPUS MULTIVERSE GRID
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-2">
            {user?.role === 'student' && (
              <>
                <Link
                  to="/feed"
                  onClick={() => handleNavClick('CURVED RADAR')}
                  className={`px-4 py-2 rounded-xl text-xs font-chakra italic font-bold tracking-wider transition-all ${
                    isActive('/feed')
                      ? 'bg-red-600/30 text-red-300 border border-red-500 shadow-spider-glow'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  🕸️ CURVED RADAR
                </Link>
                <Link
                  to="/my-rsvps"
                  onClick={() => handleNavClick('MY RSVPs')}
                  className={`px-4 py-2 rounded-xl text-xs font-chakra italic font-bold tracking-wider transition-all ${
                    isActive('/my-rsvps')
                      ? 'bg-red-600/30 text-red-300 border border-red-500 shadow-spider-glow'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  ⭐ MY RSVPs
                </Link>
              </>
            )}

            {user?.role === 'organizer' && (
              <Link
                to="/organizer"
                onClick={() => handleNavClick('MISSION DISPATCH')}
                className={`px-4 py-2 rounded-xl text-xs font-chakra italic font-bold tracking-wider transition-all ${
                  isActive('/organizer')
                    ? 'bg-blue-600/30 text-blue-300 border border-blue-500 shadow-spider-glow-blue'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                📋 MISSION DISPATCH
              </Link>
            )}

            {user?.role === 'admin' && (
              <Link
                to="/admin"
                onClick={() => handleNavClick('SHIELD HQ')}
                className={`px-4 py-2 rounded-xl text-xs font-chakra italic font-bold tracking-wider transition-all ${
                  isActive('/admin')
                    ? 'bg-yellow-600/30 text-yellow-300 border border-yellow-500'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                ⚙️ SHIELD HQ
              </Link>
            )}

            <div className="h-6 w-px bg-gray-800 mx-2"></div>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="text-right hidden sm:block">
                <p className="text-white text-xs font-chakra italic font-bold">{user?.name}</p>
                <p className="text-[11px] font-mono text-gray-400 capitalize">{user?.role} • {user?.campus?.split(' ')[3] || 'GEU'}</p>
              </div>
              <button
                onClick={handleLogout}
                className="bg-[#0E1526] hover:bg-red-950 text-red-400 hover:text-white border border-red-500/40 hover:border-red-500 px-3.5 py-2 rounded-xl text-xs font-chakra italic font-bold transition-all cursor-pointer"
              >
                EJECT ➔
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
