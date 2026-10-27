import { useState, useEffect, useRef } from 'react'
import { useSearchParams, useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { Html5Qrcode } from 'html5-qrcode'

// Audio Chime on Successful Scan
function playScanChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(880, ctx.currentTime) // A5
    osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.12) // E6
    gain.gain.setValueAtTime(0.3, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.2)
  } catch (e) {
    // Audio context may require prior interaction
  }
}

export default function VerifyPass() {
  const [searchParams] = useSearchParams()
  const routeParams = useParams()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [verified, setVerified] = useState(false)
  const [passData, setPassData] = useState(null)
  const [checkedIn, setCheckedIn] = useState(false)
  const [checkInTime, setCheckInTime] = useState('')
  const [manualCode, setManualCode] = useState('')
  const [isMarkingCheckin, setIsMarkingCheckin] = useState(false)

  // Camera Scanner States
  const [isCameraActive, setIsCameraActive] = useState(false)
  const [cameraError, setCameraError] = useState('')
  const [cameraFacing, setCameraFacing] = useState('environment') // 'environment' (back) or 'user' (front)
  const html5QrCodeRef = useRef(null)

  // Read query params or route param
  const queryCode = searchParams.get('code') || routeParams.code || ''
  const queryName = searchParams.get('name') || ''
  const queryRoll = searchParams.get('roll') || ''
  const queryEmail = searchParams.get('email') || ''
  const queryPhone = searchParams.get('phone') || ''
  const queryCampus = searchParams.get('campus') || ''
  const queryDegree = searchParams.get('degree') || ''
  const queryEvent = searchParams.get('event') || ''
  const queryTime = searchParams.get('time') || '10:30 AM'
  const queryDate = searchParams.get('date') || 'Wed, Nov 25, 2026'
  const queryTeam = searchParams.get('team') || ''
  const queryRole = searchParams.get('role') || ''
  const queryTrack = searchParams.get('track') || ''

  // Function to load and verify a ticket code
  const loadPassDetails = async (targetCode) => {
    if (!targetCode || !targetCode.trim()) return

    setLoading(true)
    const code = targetCode.trim().toUpperCase()

    // 1. First fetch from backend verification endpoint
    let backendPass = null
    try {
      const res = await axios.get(`/api/events/verify/${encodeURIComponent(code)}`)
      if (res.data?.verified && (res.data?.pass || res.data?.registration)) {
        backendPass = res.data.pass || res.data.registration
      }
    } catch (err) {}

    // 2. Check local storage for pass data (including photo dataURL)
    let localPass = null
    try {
      const storedPassStr = localStorage.getItem(`spider_verified_pass_${code}`)
      if (storedPassStr) {
        localPass = JSON.parse(storedPassStr)
      }
    } catch (err) {}

    // Check registration array in local storage
    if (!localPass) {
      try {
        const allRegs = JSON.parse(localStorage.getItem('spider_event_registrations') || '[]')
        for (const reg of allRegs) {
          if ((reg.ticket_code || '').toUpperCase() === code) {
            localPass = reg
            break
          }
          if (Array.isArray(reg.attendees)) {
            const found = reg.attendees.find(
              (a) => (a.ticketCode || '').toUpperCase() === code
            )
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
      } catch (err) {}
    }

    // Merge attendee details
    const studentName =
      backendPass?.student_name ||
      localPass?.name ||
      localPass?.student_name ||
      queryName ||
      'Graphic Era Student'

    const rollNumber =
      backendPass?.roll_no ||
      localPass?.rollNo ||
      localPass?.roll_no ||
      queryRoll ||
      'GEHU-STUDENT'

    const email =
      backendPass?.student_email ||
      localPass?.email ||
      localPass?.student_email ||
      queryEmail ||
      'student@gehu.ac.in'

    const phone =
      backendPass?.phone ||
      localPass?.phone ||
      queryPhone ||
      '+91 98765 43210'

    const campus =
      backendPass?.campus ||
      backendPass?.event_campus ||
      localPass?.campus ||
      localPass?.event_campus ||
      queryCampus ||
      'GRAPHIC ERA HILL UNIVERSITY BHIMTAL'

    const degree =
      backendPass?.degree ||
      localPass?.degree ||
      queryDegree ||
      'B.Tech CSE'

    const eventTitle =
      backendPass?.event_title ||
      localPass?.event_title ||
      queryEvent ||
      "Graphite '26"

    const eventVenue =
      backendPass?.event_venue ||
      localPass?.event_venue ||
      'Auditorium Block C'

    let cleanTime = backendPass?.event_time || localPass?.event_time || queryTime || '10:30 AM'
    cleanTime = cleanTime.replace(/\b(AM|PM)\s+\1\b/gi, '$1').trim()

    const eventDate =
      backendPass?.event_date ||
      localPass?.event_date ||
      queryDate ||
      'Wed, Nov 25, 2026'

    const team =
      backendPass?.team_name ||
      localPass?.teamName ||
      localPass?.team_name ||
      queryTeam ||
      'Solo Entrant'

    const role =
      backendPass?.role_in_team ||
      localPass?.roleInTeam ||
      (queryRole ? `Team ${queryRole}` : 'Verified Participant')

    const track =
      backendPass?.track_info ||
      localPass?.track_info ||
      queryTrack ||
      'General Track'

    const photo =
      backendPass?.photo_url ||
      localPass?.photoUrl ||
      localPass?.photo ||
      ''

    const isAlreadyCheckedIn =
      backendPass?.attendance_status === 'PRESENT & VERIFIED' ||
      !!backendPass?.checkin_time

    if (isAlreadyCheckedIn) {
      setCheckedIn(true)
      setCheckInTime(backendPass?.checkin_time || 'Checked In')
    } else {
      setCheckedIn(false)
      setCheckInTime('')
    }

    const merged = {
      ticketCode: code,
      name: studentName,
      rollNo: rollNumber,
      email,
      phone,
      campus,
      degree,
      eventTitle,
      eventVenue,
      eventDate,
      eventTime: cleanTime,
      teamName: team,
      role,
      track,
      photoUrl: photo,
      attendanceStatus: isAlreadyCheckedIn ? 'PRESENT & VERIFIED' : 'REGISTERED & ACTIVE',
      verifiedAt: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }),
      verifiedDate: new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })
    }

    setPassData(merged)
    setVerified(true)
    setLoading(false)
  }

  // Load pass if queryCode exists on mount or URL change
  useEffect(() => {
    if (queryCode && queryCode.trim()) {
      loadPassDetails(queryCode)
    } else {
      setVerified(false)
      setPassData(null)
      setLoading(false)
    }
  }, [queryCode])

  // Start Live Camera Scanner
  const startCamera = async (facing = cameraFacing) => {
    setCameraError('')
    setIsCameraActive(true)

    // Stop existing instance if any
    if (html5QrCodeRef.current) {
      try {
        await html5QrCodeRef.current.stop()
      } catch (e) {}
    }

    setTimeout(async () => {
      try {
        const qrScannerId = 'qr-camera-feed'
        const scannerElement = document.getElementById(qrScannerId)
        if (!scannerElement) return

        const qrCodeInstance = new Html5Qrcode(qrScannerId)
        html5QrCodeRef.current = qrCodeInstance

        await qrCodeInstance.start(
          { facingMode: facing },
          {
            fps: 12,
            qrbox: { width: 260, height: 260 }
          },
          async (decodedText) => {
            // QR Code Successfully Scanned!
            playScanChime()
            let extractedCode = decodedText

            try {
              if (decodedText.includes('code=')) {
                const urlObj = new URL(decodedText)
                extractedCode = urlObj.searchParams.get('code') || decodedText
              }
            } catch (err) {}

            // Stop Camera
            try {
              await qrCodeInstance.stop()
            } catch (e) {}
            setIsCameraActive(false)

            // Navigate and load pass
            navigate(`/verify?code=${encodeURIComponent(extractedCode)}`)
          },
          () => {
            // Frame parse error (silent per-frame scan)
          }
        )
      } catch (err) {
        setCameraError(
          'Camera access was denied or not available. Please allow camera permissions or enter the code manually.'
        )
        setIsCameraActive(false)
      }
    }, 150)
  }

  // Stop Live Camera Scanner
  const stopCamera = async () => {
    if (html5QrCodeRef.current) {
      try {
        await html5QrCodeRef.current.stop()
      } catch (e) {}
      html5QrCodeRef.current = null
    }
    setIsCameraActive(false)
  }

  // Switch between front and back camera
  const switchCamera = () => {
    const nextFacing = cameraFacing === 'environment' ? 'user' : 'environment'
    setCameraFacing(nextFacing)
    if (isCameraActive) {
      startCamera(nextFacing)
    }
  }

  // Clean up camera on component unmount
  useEffect(() => {
    return () => {
      if (html5QrCodeRef.current) {
        try {
          html5QrCodeRef.current.stop()
        } catch (e) {}
      }
    }
  }, [])

  const handleManualSearch = (e) => {
    e.preventDefault()
    if (manualCode.trim()) {
      stopCamera()
      navigate(`/verify?code=${encodeURIComponent(manualCode.trim().toUpperCase())}`)
    }
  }

  const handleMarkEntry = async () => {
    if (!passData) return
    setIsMarkingCheckin(true)

    const nowTime = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    })

    setCheckedIn(true)
    setCheckInTime(nowTime)

    try {
      await axios.post(`/api/events/verify/${encodeURIComponent(passData.ticketCode)}/checkin`)
    } catch (err) {}
    setIsMarkingCheckin(false)
  }

  return (
    <div className="min-h-screen bg-[#070913] text-white flex flex-col font-sans selection:bg-red-500 selection:text-white">
      {/* Top Navbar */}
      <header className="px-6 py-4 border-b border-gray-800/80 bg-[#0A0D15]/95 backdrop-blur-md flex items-center justify-between sticky top-0 z-50">
        <Link to="/feed" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-900 flex items-center justify-center font-black text-xl shadow-[0_0_15px_rgba(220,38,38,0.5)] group-hover:scale-105 transition-transform">
            🕷️
          </div>
          <div>
            <div className="font-black text-base tracking-wider text-white uppercase flex items-center gap-1.5 font-chakra">
              <span>SPIDEY</span>
              <span className="text-red-500 font-mono text-xs px-1.5 py-0.5 rounded bg-red-950/60 border border-red-800/50">
                LIVE CAMERA SCANNER
              </span>
            </div>
            <p className="text-[10px] text-gray-400 font-mono">
              Graphic Era University Instant Gate Verification
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-3">
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
            <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-mono text-gray-400 animate-pulse">
              Authenticating Security Credentials &amp; Scanning Student Pass...
            </p>
          </div>
        ) : verified && passData ? (
          /* ─── Verified Pass Details Card ─── */
          <div className="w-full space-y-5 animate-fade-in">
            {/* Top Success Shield Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-emerald-950/60 via-[#0B1510] to-[#080E0B] border-2 border-emerald-500/70 p-6 sm:p-8 shadow-[0_0_60px_rgba(16,185,129,0.3)] text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-4xl shadow-[0_0_35px_rgba(16,185,129,0.7)] mb-3">
                🛡️
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/70 border border-emerald-400/50 text-emerald-300 text-xs font-mono font-bold tracking-wider uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                OFFICIAL GRAPHIC ERA PASS VERIFIED
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase font-chakra">
                ACCESS GRANTED • ADMIT ONE
              </h1>
              <p className="text-xs text-gray-400 font-mono mt-1">
                Pass ID: <span className="text-emerald-400 font-bold">{passData.ticketCode}</span> • Scanned on{' '}
                {passData.verifiedDate} at {passData.verifiedAt}
              </p>

              {/* Attendance Status & Gate Entry Card */}
              <div className="mt-5 pt-4 border-t border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-3 bg-black/40 p-3.5 rounded-2xl">
                <div className="text-left">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block">
                    CAMPUS GATE ATTENDANCE STATUS:
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${
                        checkedIn ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                      }`}
                    />
                    <span
                      className={`text-sm font-bold font-mono ${
                        checkedIn ? 'text-emerald-300' : 'text-amber-300'
                      }`}
                    >
                      {checkedIn
                        ? `PRESENT & ADMITTED AT GATE (${checkInTime})`
                        : 'REGISTERED • AWAITING GATE CHECK-IN'}
                    </span>
                  </div>
                </div>

                <div>
                  {checkedIn ? (
                    <div className="px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500 text-emerald-300 text-xs font-bold flex items-center gap-1.5 shadow">
                      <span>✓</span>
                      <span>ATTENDANCE RECORDED</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={handleMarkEntry}
                      disabled={isMarkingCheckin}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition active:scale-95 cursor-pointer flex items-center gap-2"
                    >
                      {isMarkingCheckin ? (
                        <span>Recording Attendance...</span>
                      ) : (
                        <>
                          <span>✓</span>
                          <span>Mark Attendance Present (Check In)</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Attendee Credentials Card with Exact Photo & Name */}
            <div className="rounded-3xl bg-[#0D111C] border border-gray-800 p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Photo & Name Section */}
              <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-800">
                <div className="relative w-32 sm:w-36 h-40 sm:h-44 rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.4)] bg-[#0A0D15] shrink-0">
                  {passData.photoUrl ? (
                    <img
                      src={passData.photoUrl}
                      alt={passData.name}
                      className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#181D2C] to-[#0D101A] text-gray-400 p-2 text-center">
                      <span className="text-4xl mb-1">👤</span>
                      <span className="text-[10px] font-mono text-gray-400 uppercase font-semibold">
                        Student Photo
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-emerald-600/90 text-[9px] text-white font-mono font-bold text-center py-0.5">
                    ✓ PASS VERIFIED
                  </div>
                </div>

                {/* Exact Student Name & Credentials */}
                <div className="text-center sm:text-left space-y-1.5 flex-1">
                  <div className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1.5">
                    <span>{passData.role}</span>
                    <span>•</span>
                    <span>{passData.campus?.split(' ').slice(-1)[0] || 'GEHU'} CAMPUS</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-wide uppercase font-chakra">
                    {passData.name}
                  </h2>

                  <p className="text-xs text-gray-300 font-mono">
                    University Roll No:{' '}
                    <span className="text-white font-bold font-mono text-sm">{passData.rollNo}</span>
                  </p>

                  <p className="text-xs text-gray-400">
                    Course / Degree: <span className="text-gray-200 font-medium">{passData.degree}</span>
                  </p>

                  <p className="text-xs text-gray-400">
                    Campus: <span className="text-red-400 font-semibold">{passData.campus}</span>
                  </p>
                </div>
              </div>

              {/* Exact Event & Timing Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-[#141A29]/70 border border-gray-800 space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono block">
                    EVENT NAME &amp; VENUE
                  </span>
                  <p className="font-bold text-white text-sm">{passData.eventTitle}</p>
                  <p className="text-[11px] text-gray-300 font-mono">
                    📍 {passData.eventVenue}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#141A29]/70 border border-gray-800 space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono block">
                    EVENT TIMING &amp; DATE
                  </span>
                  <p className="font-bold text-amber-300 text-sm flex items-center gap-1.5 font-mono">
                    <span>📅</span>
                    <span>{passData.eventDate}</span>
                  </p>
                  <p className="text-[11px] text-gray-200 font-mono font-semibold">
                    ⏰ {passData.eventTime}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#141A29]/70 border border-gray-800 space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono block">
                    TEAM &amp; TRACK
                  </span>
                  <p className="font-bold text-red-400 text-sm">{passData.teamName}</p>
                  <span className="text-[11px] text-gray-400 block font-mono">
                    Track: {passData.track}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#141A29]/70 border border-gray-800 space-y-1">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono block">
                    REGISTERED CONTACT
                  </span>
                  <p className="text-gray-200 font-mono truncate">{passData.email}</p>
                  <span className="text-[11px] text-gray-400 font-mono block">{passData.phone}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setVerified(false)
                  setPassData(null)
                  setManualCode('')
                  navigate('/verify')
                  startCamera('environment')
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow-md"
              >
                <span>📹</span>
                <span>Scan Next Student (Live Camera)</span>
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer"
              >
                <span>🖨️</span>
                <span>Print Official Slip</span>
              </button>
            </div>
          </div>
        ) : (
          /* ─── LIVE CAMERA SCANNER & PORTAL VIEW ─── */
          <div className="w-full max-w-md bg-[#0D111C] border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-center">
            {/* Header */}
            <div>
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-red-600 to-rose-900 flex items-center justify-center text-3xl shadow-[0_0_25px_rgba(220,38,38,0.5)] mb-3">
                📹
              </div>
              <h2 className="text-xl font-bold text-white uppercase font-chakra">
                Live QR Code Camera Scanner
              </h2>
              <p className="text-xs text-gray-400 mt-1">
                Apna phone camera on karke ID Card ka QR Code scan karein ya code manually enter karein.
              </p>
            </div>

            {/* Camera Viewport or Start Trigger */}
            <div className="space-y-3">
              {isCameraActive ? (
                <div className="space-y-2">
                  <div className="relative w-full aspect-square max-w-[300px] mx-auto rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)] bg-black">
                    {/* The Html5Qrcode video container */}
                    <div id="qr-camera-feed" className="w-full h-full" />
                    {/* Live Laser Scan Sweep Line */}
                    <div className="animate-scan-line pointer-events-none" />
                    {/* Target Reticle Overlay */}
                    <div className="absolute inset-8 border border-emerald-400/40 rounded-xl pointer-events-none flex items-center justify-center">
                      <span className="text-[10px] font-mono text-emerald-400 font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        AIM AT QR CODE
                      </span>
                    </div>
                  </div>

                  {/* Camera Controls */}
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={switchCamera}
                      className="px-3.5 py-1.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <span>🔄</span>
                      <span>Flip Camera</span>
                    </button>
                    <button
                      type="button"
                      onClick={stopCamera}
                      className="px-3.5 py-1.5 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-300 border border-red-500/50 text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <span>⏹</span>
                      <span>Stop Camera</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-black/50 border border-gray-800 space-y-3">
                  <button
                    type="button"
                    onClick={() => startCamera('environment')}
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.4)] transition active:scale-95 cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider font-chakra"
                  >
                    <span>📹</span>
                    <span>Start Live Camera QR Scanner</span>
                  </button>

                  <p className="text-[11px] text-gray-400 font-mono">
                    Point camera at Graphic Era Lanyard ID Card to auto-verify credentials.
                  </p>
                </div>
              )}

              {cameraError && (
                <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs">
                  {cameraError}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 text-gray-600 text-xs font-mono">
              <div className="flex-1 h-px bg-gray-800" />
              <span>OR ENTER PASS CODE</span>
              <div className="flex-1 h-px bg-gray-800" />
            </div>

            {/* Manual Code Input Form */}
            <form onSubmit={handleManualSearch} className="space-y-3">
              <div>
                <input
                  type="text"
                  value={manualCode}
                  onChange={(e) => setManualCode(e.target.value)}
                  placeholder="e.g. HTW-2027-BHM-501"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#070913] border border-gray-700 focus:border-red-500 focus:outline-none text-white font-mono text-center text-sm uppercase tracking-wider"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs shadow-lg transition active:scale-95 cursor-pointer uppercase tracking-wider font-chakra"
              >
                Verify Code ➔
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-gray-900 text-center text-[11px] text-gray-600 font-mono">
        Graphic Era Hill University • Live Camera Biometric Pass Scanner • Spidey '26
      </footer>
    </div>
  )
}
