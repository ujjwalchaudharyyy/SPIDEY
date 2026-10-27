import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'

export default function EventRegistrationModal({ event, onClose, onSuccess }) {
  const { user, token } = useAuth()
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [phone, setPhone] = useState(user?.phone || '')
  const [rollNo, setRollNo] = useState('')
  const [degree, setDegree] = useState(user?.degree || 'B.Tech CSE - 3rd Year')
  const [campus, setCampus] = useState(user?.campus || event.campus)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [ticket, setTicket] = useState(null)

  const headers = { Authorization: `Bearer ${token}` }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await axios.post(`/api/events/${event.id}/register`, {
        student_name: name,
        student_email: email,
        phone,
        roll_no: rollNo,
        degree,
        campus
      }, { headers })

      setTicket(res.data.ticketCode)
      onSuccess?.(res.data.ticketCode)
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-xl my-8">
        <div className="spider-modal-box">
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-[#1E293B]">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600/40 via-red-950/80 to-black border border-red-500/60 flex items-center justify-center shadow-spider-glow">
                <span className="text-2xl animate-pulse">🎟️</span>
              </div>
              <div>
                <h2 className="spider-heading text-xl text-white">EVENT REGISTRATION PROTOCOL</h2>
                <p className="text-xs font-mono text-red-400 truncate max-w-sm">{event.title}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-xl p-1 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Ticket Generated Success View */}
          {ticket ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 mx-auto flex items-center justify-center text-3xl animate-bounce">
                ✓
              </div>
              <h3 className="spider-heading text-2xl text-emerald-400">MISSION REGISTRATION CONFIRMED!</h3>
              <p className="text-xs font-mono text-gray-300">
                Your entry ticket has been authenticated and locked into the Graphic Era Multiverse Grid.
              </p>

              {/* Spider Hologram Pass Ticket */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950/70 via-black to-blue-950/70 border-2 border-dashed border-red-500 max-w-md mx-auto shadow-modal-glow text-left space-y-2">
                <div className="flex justify-between items-center border-b border-red-500/30 pb-2">
                  <span className="font-chakra italic font-bold text-white text-sm">SPIDER-PASS TICKET</span>
                  <span className="font-mono text-xs text-red-400 font-bold">VERIFIED</span>
                </div>
                <p className="text-xs font-mono text-gray-400"><span className="text-gray-200 font-bold">Event:</span> {event.title}</p>
                <p className="text-xs font-mono text-gray-400"><span className="text-gray-200 font-bold">Venue:</span> {event.venue}</p>
                <p className="text-xs font-mono text-gray-400"><span className="text-gray-200 font-bold">Date:</span> {event.event_date} at {event.event_time}</p>
                <div className="pt-2 border-t border-red-500/30 flex justify-between items-center">
                  <span className="text-xs font-mono text-gray-400">Ticket Code:</span>
                  <span className="font-chakra italic font-black text-lg text-yellow-400 tracking-wider">{ticket}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="btn-spider-pill py-2.5 px-8 text-xs mt-4"
              >
                DONE ➔
              </button>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {error && (
                <div className="bg-red-950/80 border border-red-500 text-red-200 px-4 py-2.5 rounded-xl text-xs font-mono flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="spider-label-modern"><span>👤</span> Student Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="spider-input-modern text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="spider-label-modern"><span>✉️</span> University Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="spider-input-modern text-xs"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="spider-label-modern"><span>📞</span> Contact Phone *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="spider-input-modern text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="spider-label-modern"><span>🆔</span> University Roll No *</label>
                  <input
                    type="text"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    placeholder="e.g. 21151044 / GEHU2024"
                    className="spider-input-modern text-xs"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="spider-label-modern">Branch / Department</label>
                  <input
                    type="text"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="spider-input-modern text-xs"
                  />
                </div>
                <div>
                  <label className="spider-label-modern">Registered Campus</label>
                  <input
                    type="text"
                    value={campus}
                    readOnly
                    className="spider-input-modern text-xs bg-[#0E1526]/50 cursor-not-allowed opacity-80"
                  />
                </div>
              </div>

              {/* Stark Notice */}
              <div className="bg-[#0E1526]/60 border border-red-950/80 rounded-xl p-3 flex items-center space-x-2 text-xs font-mono text-gray-400">
                <span className="text-red-400 font-bold">✓</span>
                <span>An authentic Spider-Pass QR & Ticket Code will be assigned upon submission.</span>
              </div>

              <div className="flex items-center justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-spider-ghost text-xs"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-spider-pill text-xs py-2.5 px-7"
                >
                  <span>{loading ? 'REGISTERING...' : 'CONFIRM REGISTRATION'}</span>
                  <span>➔</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
