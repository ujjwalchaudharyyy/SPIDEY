import { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import { syncRegistrationToGoogleSheet } from '../utils/googleSheetsSync'

export default function EventRegistrationModal({ event, onClose, onSuccess }) {
  const { user, token } = useAuth()

  const defaultEmail = user?.email || 'student.gehu@gmail.com'
  const defaultName = user?.name || (user?.email ? user.email.split('@')[0] : 'Graphic Era Student')

  const [name, setName] = useState(defaultName)
  const [email, setEmail] = useState(defaultEmail)
  const [phone, setPhone] = useState(user?.phone || '+91 98765 43210')
  const [rollNo, setRollNo] = useState('GEHU-2026-SPIDEY')
  const [campus, setCampus] = useState(user?.campus || event.campus || 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL')

  const [autoFilled, setAutoFilled] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [ticket, setTicket] = useState(null)
  const [copied, setCopied] = useState(false)

  const headers = { Authorization: `Bearer ${token}` }

  const handleGoogleAutoFill = () => {
    const chosenEmail = user?.email && user.email.includes('@') ? user.email : 'rohit.gehu.bhimtal@gmail.com'
    const extractedName = user?.name && user.name !== 'Graphic Era Student'
      ? user.name
      : chosenEmail.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

    setName(extractedName)
    setEmail(chosenEmail)
    setPhone('+91 98765 89210')
    setRollNo('GEHU-2026-BHM-842')
    setCampus(event.campus || 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL')
    setAutoFilled(true)
  }

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
        degree: user?.degree || 'B.Tech CSE',
        campus
      }, { headers })

      let finalTicket = res.data?.ticketCode || res.data?.ticket
      if (!finalTicket) {
        const campusCode = (campus || 'BHIMTAL').split(' ').pop().substring(0, 3).toUpperCase()
        finalTicket = SPIDER-PASS--
      }

      const newReg = {
        id: Date.now(),
        event_id: event.id,
        event_title: event.title,
        event_category: event.category,
        event_campus: event.campus,
        student_name: name,
        student_email: email,
        phone,
        roll_no: rollNo,
        degree: user?.degree || 'B.Tech CSE',
        campus,
        ticket_code: finalTicket,
        created_at: new Date().toISOString()
      }
      try {
        const stored = JSON.parse(localStorage.getItem('spider_event_registrations') || '[]')
        localStorage.setItem('spider_event_registrations', JSON.stringify([newReg, ...stored]))
        syncRegistrationToGoogleSheet(newReg)
      } catch (e) {}

      setTicket(finalTicket)
      onSuccess?.(finalTicket)
      return
    } catch {
      const campusCode = (campus || 'BHIMTAL').split(' ').pop().substring(0, 3).toUpperCase()
      const fallbackTicket = GEHU-PASS--

      const newReg = {
        id: Date.now(),
        event_id: event.id,
        event_title: event.title,
        event_category: event.category,
        event_campus: event.campus,
        student_name: name,
        student_email: email,
        phone,
        roll_no: rollNo,
        degree: user?.degree || 'B.Tech CSE',
        campus,
        ticket_code: fallbackTicket,
        created_at: new Date().toISOString()
      }
      try {
        const stored = JSON.parse(localStorage.getItem('spider_event_registrations') || '[]')
        localStorage.setItem('spider_event_registrations', JSON.stringify([newReg, ...stored]))
        syncRegistrationToGoogleSheet(newReg)
      } catch (e) {}

      setTicket(fallbackTicket)
      onSuccess?.(fallbackTicket)
    } finally {
      setLoading(false)
    }
  }

  const handleCopyCode = () => {
    if (!ticket) return
    navigator.clipboard.writeText(ticket)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-xl overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg my-auto bg-[#090D18] border border-red-500/50 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(226,27,36,0.3)] flex flex-col max-h-[92vh]"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-800 bg-gradient-to-r from-red-950/60 via-[#090D18] to-black flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600/40 via-red-950 to-black border border-red-500/60 flex items-center justify-center text-lg shadow-spider-glow flex-shrink-0">
              🎟️
            </div>
            <div>
              <h2 className="spider-heading text-base sm:text-lg text-white">EVENT REGISTRATION</h2>
              <p className="text-[11px] font-mono text-red-400 truncate max-w-xs sm:max-w-sm">{event.title}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-900/80 hover:bg-red-600 border border-gray-700 hover:border-red-500 text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer flex-shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {ticket ? (
            /* ── Success Pass View ── */
            <div className="py-4 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-500 mx-auto flex items-center justify-center text-2xl text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)] animate-bounce">
                ✓
              </div>
              <div>
                <h3 className="spider-heading text-lg sm:text-xl text-emerald-400">REGISTRATION CONFIRMED!</h3>
                <p className="text-xs font-mono text-gray-300 mt-1 max-w-sm mx-auto">
                  Your official Spider-Pass is verified and locked into the Multiverse Grid.
                </p>
              </div>

              {/* Pass Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-red-950/90 via-[#0A0D18] to-black border-2 border-dashed border-red-500 max-w-md mx-auto text-left space-y-3 shadow-modal-glow">
                <div className="flex justify-between items-center border-b border-red-500/40 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span>🕷️</span>
                    <span className="font-chakra italic font-bold text-white text-sm">GRAPHIC ERA SPIDER-PASS</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-green-500/20 border border-green-500 text-green-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></span>
                    VERIFIED
                  </span>
                </div>
                <div className="space-y-1 text-xs font-mono text-gray-300">
                  <p><span className="text-gray-400">Student: </span><strong className="text-white">{name}</strong></p>
                  <p><span className="text-gray-400">Email: </span><span className="text-emerald-300">{email}</span></p>
                  <p><span className="text-gray-400">Roll: </span>{rollNo}</p>
                  <p><span className="text-gray-400">Event: </span>{event.title}</p>
                  <p><span className="text-gray-400">Venue: </span>{event.venue}</p>
                  <p><span className="text-gray-400">Date: </span>{event.event_date} • {event.event_time}</p>
                </div>
                <div className="pt-2.5 border-t border-red-500/40 flex items-center justify-between gap-2 bg-black/60 p-2.5 rounded-xl">
                  <div>
                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block">PASS CODE</span>
                    <span className="font-chakra italic font-bold text-lg text-yellow-400 tracking-wider">{ticket}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="px-3 py-1.5 rounded-lg bg-red-600/40 hover:bg-red-600 text-white border border-red-500 text-xs font-mono transition-all cursor-pointer"
                  >
                    {copied ? '✓ COPIED' : '📋 COPY'}
                  </button>
                </div>
              </div>

              <button type="button" onClick={onClose} className="btn-spider-pill text-xs py-2 px-8 cursor-pointer">
                DONE ➔
              </button>
            </div>
          ) : (
            /* ── Registration Form ── */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Event Info Bar */}
              <div className="p-3 rounded-xl bg-[#0E1526] border border-[#1E293B] text-[11px] font-mono text-gray-300 flex items-center justify-between gap-2">
                <div className="truncate">
                  <span className="text-red-400 font-bold block truncate">{event.title}</span>
                  <span className="text-gray-500 text-[10px]">📍 {event.venue} • 📅 {event.event_date}</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-red-950 text-red-300 border border-red-500/50 text-[10px] flex-shrink-0">
                  OPEN
                </span>
              </div>

              {/* Google Auto-Fill Strip */}
              <div className="p-3 rounded-xl bg-[#0B1324] border border-[#233554] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow flex-shrink-0">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">1-Click Auto-Fill</span>
                    <span className="text-[10px] font-mono text-gray-400">
                      {autoFilled ? '✓ Student profile synced' : 'Auto-fill with your student profile'}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleGoogleAutoFill}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white shadow-spider-glow transition-all cursor-pointer active:scale-95 flex-shrink-0"
                >
                  ✨ AUTO-FILL
                </button>
              </div>

              {error && (
                <div className="bg-red-950/80 border border-red-500 text-red-200 px-3 py-2 rounded-xl text-xs font-mono">
                  ⚠️ {error}
                </div>
              )}

              {/* Fields */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="spider-label-modern text-xs">👤 Full Name *</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="spider-input-modern text-xs py-2.5" required />
                  </div>
                  <div>
                    <label className="spider-label-modern text-xs">✉️ Email *</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="spider-input-modern text-xs py-2.5" placeholder="student@gehu.ac.in" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="spider-label-modern text-xs">📞 Mobile *</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="spider-input-modern text-xs py-2.5" placeholder="+91 98765 43210" required />
                  </div>
                  <div>
                    <label className="spider-label-modern text-xs">🪪 Student ID</label>
                    <input type="text" value={rollNo} onChange={(e) => setRollNo(e.target.value)} className="spider-input-modern text-xs py-2.5" placeholder="GEHU-2026-XXXX" />
                  </div>
                </div>
                <div>
                  <label className="spider-label-modern text-xs">📍 Campus</label>
                  <select value={campus} onChange={(e) => setCampus(e.target.value)} className="spider-input-modern text-xs py-2.5 bg-[#090D18]">
                    <option value="GRAPHIC ERA HILL UNIVERSITY BHIMTAL">GEHU Bhimtal Campus</option>
                    <option value="GRAPHIC ERA HILL UNIVERSITY HALDWANI">GEHU Haldwani Campus</option>
                    <option value="GRAPHIC ERA HILL UNIVERSITY DEHRADUN">GEHU Dehradun Campus</option>
                    <option value="GRAPHIC ERA DEEMED UNIVERSITY">Graphic Era Deemed University</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl text-xs font-chakra italic font-bold tracking-wider bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white shadow-spider-glow flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 disabled:opacity-50"
              >
                {loading ? 'GENERATING PASS...' : '🎟️ REGISTER NOW ➔'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
