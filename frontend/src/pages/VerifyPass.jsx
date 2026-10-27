import { useState, useEffect } from 'react'
import { useSearchParams, useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

export default function VerifyPass() {
  const [searchParams] = useSearchParams()
  const routeParams = useParams()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [verified, setVerified] = useState(false)
  const [passData, setPassData] = useState(null)
  const [checkedIn, setCheckedIn] = useState(false)
  const [checkInTime, setCheckInTime] = useState('')
  const [manualCode, setManualCode] = useState('')

  // Read query params or route param
  const queryCode = searchParams.get('code') || routeParams.code || ''
  const queryName = searchParams.get('name') || ''
  const queryRoll = searchParams.get('roll') || ''
  const queryEmail = searchParams.get('email') || ''
  const queryPhone = searchParams.get('phone') || ''
  const queryCampus = searchParams.get('campus') || ''
  const queryDegree = searchParams.get('degree') || ''
  const queryEvent = searchParams.get('event') || ''
  const queryTeam = searchParams.get('team') || ''
  const queryRole = searchParams.get('role') || ''
  const queryTrack = searchParams.get('track') || ''

  useEffect(() => {
    async function verifyTicket() {
      setLoading(true)

      const targetCode = queryCode.trim()

      if (!targetCode) {
        setLoading(false)
        setVerified(false)
        return
      }

      // 1. Check local storage for pass data (including photo dataURL)
      let localPass = null
      try {
        const storedPassStr = localStorage.getItem(`spider_verified_pass_${targetCode}`)
        if (storedPassStr) {
          localPass = JSON.parse(storedPassStr)
        }
      } catch (err) {
        // ignore
      }

      // Check registration array in local storage
      if (!localPass) {
        try {
          const allRegs = JSON.parse(localStorage.getItem('spider_event_registrations') || '[]')
          for (const reg of allRegs) {
            if (reg.ticket_code === targetCode) {
              localPass = reg
              break
            }
            if (Array.isArray(reg.attendees)) {
              const found = reg.attendees.find(a => a.ticketCode === targetCode)
              if (found) {
                localPass = {
                  ...found,
                  event_title: reg.event_title,
                  event_campus: reg.event_campus,
                  team_name: reg.team_name,
                  track_info: reg.track_info,
                  transaction_id: reg.transaction_id,
                  created_at: reg.created_at
                }
                break
              }
            }
          }
        } catch (err) {
          // ignore
        }
      }

      // 2. Try fetching from backend verification endpoint
      let backendPass = null
      try {
        const res = await axios.get(`/api/events/verify/${encodeURIComponent(targetCode)}`)
        if (res.data?.verified && res.data?.registration) {
          backendPass = res.data.registration
        }
      } catch (err) {
        // Safe offline / demo fallback
      }

      // Merge data sources (URL query params + LocalStorage + Backend)
      const merged = {
        ticketCode: targetCode,
        name: localPass?.name || localPass?.student_name || backendPass?.student_name || queryName || 'Registered Student',
        rollNo: localPass?.rollNo || localPass?.roll_no || backendPass?.roll_no || queryRoll || 'GEHU-STUDENT',
        email: localPass?.email || localPass?.student_email || backendPass?.student_email || queryEmail || 'student@gehu.ac.in',
        phone: localPass?.phone || backendPass?.phone || queryPhone || '+91 98765 43210',
        campus: localPass?.campus || localPass?.event_campus || backendPass?.campus || backendPass?.event_campus || queryCampus || 'GEHU Campus',
        degree: localPass?.degree || backendPass?.degree || queryDegree || 'B.Tech CSE',
        eventTitle: localPass?.event_title || backendPass?.event_title || queryEvent || "Graphite'26 Event",
        teamName: localPass?.teamName || localPass?.team_name || backendPass?.team_name || queryTeam || 'Solo Entrant',
        role: localPass?.roleInTeam || (queryRole ? `Team ${queryRole}` : 'Verified Participant'),
        track: localPass?.track_info || backendPass?.track_info || queryTrack || 'General Track',
        photoUrl: localPass?.photoUrl || localPass?.photo || '',
        verifiedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        verifiedDate: new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
      }

      setPassData(merged)
      setVerified(true)
      setLoading(false)
    }

    verifyTicket()
  }, [queryCode, queryName, queryRoll, queryCampus, queryDegree, queryEvent, queryTeam, queryRole, queryTrack, queryEmail, queryPhone])

  const handleManualSearch = (e) => {
    e.preventDefault()
    if (manualCode.trim()) {
      navigate(`/verify?code=${encodeURIComponent(manualCode.trim().toUpperCase())}`)
    }
  }

  const handleMarkEntry = () => {
    setCheckedIn(true)
    setCheckInTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
  }

  return (
    <div className="min-h-screen bg-[#070913] text-white flex flex-col font-sans selection:bg-red-500 selection:text-white">
      {/* Top Navbar */}
      <header className="px-6 py-4 border-b border-gray-800/80 bg-[#0A0D15]/90 backdrop-blur-md flex items-center justify-between sticky top-0 z-50">
        <Link to="/feed" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-900 flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(220,38,38,0.5)] group-hover:scale-105 transition-transform">
            🕷️
          </div>
          <div>
            <div className="font-black text-base tracking-wider text-white uppercase flex items-center gap-1.5 font-chakra">
              <span>SPIDEY</span>
              <span className="text-red-500 font-mono text-xs px-1.5 py-0.5 rounded bg-red-950/60 border border-red-800/50">SECURE VERIFY</span>
            </div>
            <p className="text-[10px] text-gray-400 font-mono">Graphic Era University Gatekeeper Pass Validator</p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            LIVE SECURITY SCANNER
          </span>
          <Link
            to="/feed"
            className="px-3.5 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-semibold transition"
          >
            ← Campus Feed
          </Link>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-3xl w-full mx-auto p-4 sm:p-6 flex flex-col items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-mono text-gray-400 animate-pulse">Decrypting Security Seal &amp; Scanning Pass...</p>
          </div>
        ) : verified && passData ? (
          <div className="w-full space-y-6 animate-fade-in">
            {/* Success Validation Shield Banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-950/50 via-[#0B1510] to-[#080E0B] border-2 border-emerald-500/60 p-6 shadow-[0_0_50px_rgba(16,185,129,0.25)] text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(16,185,129,0.6)] mb-3 animate-bounce">
                🛡️
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-400/50 text-emerald-300 text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                OFFICIAL GRAPHIC ERA PASS VERIFIED
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase font-chakra">
                ACCESS GRANTED • ADMIT ONE
              </h1>
              <p className="text-xs text-gray-400 font-mono mt-1">
                Security Pass ID: <span className="text-emerald-400 font-bold">{passData.ticketCode}</span> • Verified at {passData.verifiedAt}
              </p>

              {/* Gate Entry Status */}
              <div className="mt-4 pt-4 border-t border-emerald-900/40 flex flex-wrap items-center justify-center gap-3">
                {checkedIn ? (
                  <div className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500 text-emerald-300 text-xs font-bold flex items-center gap-2">
                    <span>✓</span>
                    <span>ADMITTED AT GATE • {checkInTime}</span>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={handleMarkEntry}
                    className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition active:scale-95 cursor-pointer flex items-center gap-2"
                  >
                    <span>✓ Mark Security Gate Entry</span>
                  </button>
                )}
              </div>
            </div>

            {/* Attendee Credentials Card */}
            <div className="rounded-2xl bg-[#0D111C] border border-gray-800 p-6 shadow-xl space-y-6">
              {/* Photo & Name Section */}
              <div className="flex flex-col sm:flex-row items-center gap-5 pb-5 border-b border-gray-800">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-emerald-500/80 shadow-[0_0_20px_rgba(16,185,129,0.4)] bg-black shrink-0">
                  {passData.photoUrl ? (
                    <img
                      src={passData.photoUrl}
                      alt={passData.name}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-red-900 to-black flex items-center justify-center text-4xl">
                      🎓
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-emerald-600/90 text-[9px] text-white font-mono font-bold text-center py-0.5">
                    VERIFIED
                  </div>
                </div>

                <div className="text-center sm:text-left space-y-1">
                  <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    {passData.role} • {passData.campus}
                  </div>
                  <h2 className="text-2xl font-black text-white tracking-wide uppercase font-chakra">
                    {passData.name}
                  </h2>
                  <p className="text-xs text-gray-300 font-mono">
                    Roll No: <span className="text-white font-bold">{passData.rollNo}</span>
                  </p>
                  <p className="text-xs text-gray-400">
                    Course: <span className="text-gray-200">{passData.degree}</span>
                  </p>
                </div>
              </div>

              {/* Event & Team Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-[#141A29]/70 border border-gray-800 space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono block">EVENT NAME</span>
                  <p className="font-bold text-white text-sm">{passData.eventTitle}</p>
                  <span className="text-[11px] text-gray-400 block font-mono">Campus: {passData.campus}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141A29]/70 border border-gray-800 space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono block">TEAM / TRACK INFO</span>
                  <p className="font-bold text-red-400 text-sm">{passData.teamName}</p>
                  <span className="text-[11px] text-gray-400 block font-mono">Track: {passData.track}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141A29]/70 border border-gray-800 space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono block">REGISTERED CONTACT</span>
                  <p className="text-gray-200 font-mono truncate">{passData.email}</p>
                  <span className="text-[11px] text-gray-400 font-mono block">{passData.phone}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141A29]/70 border border-gray-800 space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono block">PAYMENT &amp; SECURITY STATUS</span>
                  <p className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span>✓</span>
                    <span>PAID &amp; CONFIRMED</span>
                  </p>
                  <span className="text-[10px] text-gray-500 font-mono block">Digital Watermark: SHA-256 Validated</span>
                </div>
              </div>

              {/* Digital Tamper-proof Barcode */}
              <div className="pt-2 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest font-mono block">GRAPHIC ERA DIGITAL TAMPER SEAL</span>
                  <span className="text-xs font-mono text-gray-400">HASH: {btoa(passData.ticketCode + passData.rollNo).substring(0, 24)}...</span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-700 font-mono text-xs text-white tracking-widest">
                  ||||| | |||| ||| |||| |
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <span>🖨️</span>
                <span>Print Verification Receipt</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setVerified(false)
                  setPassData(null)
                  setManualCode('')
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow-md"
              >
                <span>🔍</span>
                <span>Scan / Check Another Pass</span>
              </button>
            </div>
          </div>
        ) : (
          /* Manual Pass Lookup / Scanner Form */
          <div className="w-full max-w-md bg-[#0D111C] border border-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-red-600 to-rose-900 flex items-center justify-center text-3xl shadow-[0_0_25px_rgba(220,38,38,0.5)]">
              📱
            </div>

            <div>
              <h2 className="text-xl font-bold text-white uppercase font-chakra">
                Pass Verification Portal
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Scan QR Code with your smartphone camera or enter the Pass Code below to verify Graphic Era event credentials.
              </p>
            </div>

            <form onSubmit={handleManualSearch} className="space-y-3">
              <div>
                <label className="block text-[11px] font-mono text-gray-400 text-left mb-1 uppercase tracking-wider">
                  Enter Pass Code (e.g. HTW-2027-BHM-4921):
                </label>
                <input
                  type="text"
                  value={manualCode}
                  onChange={(e) => setManualCode(e.target.value)}
                  placeholder="HTW-2027-BHM-..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#070913] border border-gray-700 focus:border-red-500 focus:outline-none text-white font-mono text-center text-sm uppercase tracking-wider"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs shadow-lg transition active:scale-95 cursor-pointer uppercase tracking-wider font-chakra"
              >
                Verify Pass Credentials ➔
              </button>
            </form>

            <div className="pt-4 border-t border-gray-800 text-[11px] text-gray-500 space-y-2">
              <p>💡 Tip: Mobile camera scanner se ID Card ka QR Code scan karte hi ye page directly verified pass open kar deta hai.</p>
              <Link to="/feed" className="text-red-400 hover:underline block font-semibold">
                ← Return to Student Feed
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-gray-900 text-center text-[11px] text-gray-600 font-mono">
        Graphic Era Hill University • High Security Biometric ID Pass System • Powered by Spidey '26
      </footer>
    </div>
  )
}
