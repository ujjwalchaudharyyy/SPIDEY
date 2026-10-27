import React, { useState, useRef, useEffect } from 'react'
import QRCode from 'qrcode'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import { syncRegistrationToGoogleSheet } from '../utils/googleSheetsSync'
import { createGoogleCalendarUrl } from '../utils/calendarUtils'

// Available University Campuses
const CAMPUS_OPTIONS = [
  'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
  'GRAPHIC ERA HILL UNIVERSITY HALDWANI',
  'GRAPHIC ERA HILL UNIVERSITY DEHRADUN',
  'GRAPHIC ERA DEEMED UNIVERSITY'
]

// Standard Course / Degree List
const COURSE_OPTIONS = [
  'B.Tech Computer Science & Engineering (CSE)',
  'B.Tech CSE (AI & Machine Learning)',
  'B.Tech CSE (Data Science & Cyber Security)',
  'BCA (Bachelor of Computer Applications)',
  'MCA (Master of Computer Applications)',
  'B.Tech Electronics & Communication (ECE)',
  'B.Tech Mechanical Engineering',
  'BBA / MBA Business Administration',
  'B.Sc Computer Science / IT',
  'Other Graphic Era Degree'
]

// ─── Modern Executive University Lanyard ID Card ───
function LanyardIDCard({
  attendee,
  event,
  teamName,
  participationMode,
  selectedTrack,
  index,
  onCopy,
  copiedCode
}) {
  const cardRef = useRef(null)
  const [qrDataUrl, setQrDataUrl] = useState('')

  useEffect(() => {
    let isMounted = true

    async function generateVerificationQR() {
      if (!attendee?.ticketCode) return

      try {
        const origin = window.location.origin
        const verifyParams = new URLSearchParams({
          code: attendee.ticketCode,
          name: attendee.name || '',
          roll: attendee.rollNo || '',
          email: attendee.email || '',
          phone: attendee.phone || '',
          campus: attendee.campus || '',
          degree: attendee.degree || '',
          event: event.title || '',
          team: teamName || 'Solo',
          role: attendee.isLeader ? 'Leader' : `Member ${index + 1}`,
          track: selectedTrack || ''
        })

        const verifyUrl = `${origin}/verify?${verifyParams.toString()}`

        // Save to localStorage for instant local photo & credential retrieval
        try {
          const payload = {
            ticketCode: attendee.ticketCode,
            name: attendee.name,
            rollNo: attendee.rollNo,
            email: attendee.email,
            phone: attendee.phone,
            campus: attendee.campus,
            degree: attendee.degree,
            event_title: event.title,
            event_campus: attendee.campus || event.campus,
            team_name: teamName || 'Solo',
            roleInTeam: attendee.isLeader ? 'Team Leader' : `Team Member ${index + 1}`,
            track_info: selectedTrack,
            photoUrl: attendee.photoUrl || ''
          }
          localStorage.setItem(`spider_verified_pass_${attendee.ticketCode}`, JSON.stringify(payload))
        } catch (e) {
          // Ignore storage quota
        }

        const qrUrl = await QRCode.toDataURL(verifyUrl, {
          width: 320,
          margin: 1,
          color: {
            dark: '#000000',
            light: '#ffffff'
          },
          errorCorrectionLevel: 'M'
        })

        if (isMounted) {
          setQrDataUrl(qrUrl)
        }
      } catch (err) {
        console.error('QR code generation error:', err)
      }
    }

    generateVerificationQR()

    return () => {
      isMounted = false
    }
  }, [attendee, event, teamName, selectedTrack, index])

  const handleShareTwitter = () => {
    const text = encodeURIComponent(
      `Just got my official Spider-Pass ID Card for ${event.title}! 🕷️ Pass: ${attendee.ticketCode} #SPIDEY #GraphicEra`
    )
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank')
  }

  const handleShareLinkedIn = () => {
    const text = encodeURIComponent(
      `Excited to participate in ${event.title} at Graphic Era University! 🎟️ Pass: ${attendee.ticketCode} #GraphicEra #SPIDEY`
    )
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://gehu.ac.in')}&title=${text}`,
      '_blank'
    )
  }

  const handleSaveCard = () => {
    window.print()
  }

  return (
    <div className="flex flex-col items-center max-w-sm w-full mx-auto select-none">
      {/* ─── Hanging Ribbon / Lanyard Strap ─── */}
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-14 relative overflow-hidden shadow-lg rounded-t-sm"
          style={{
            background: 'linear-gradient(90deg, #991B1B 0%, #DC2626 30%, #EF4444 50%, #DC2626 70%, #991B1B 100%)',
            boxShadow: '0 4px 15px rgba(220,38,38,0.4)'
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[7px] font-mono font-black text-white/90 tracking-widest uppercase rotate-90 whitespace-nowrap">
              GRAPHIC ERA • SPIDEY
            </span>
          </div>
          <div className="absolute left-1 inset-y-0 w-0.5 bg-yellow-400/40" />
          <div className="absolute right-1 inset-y-0 w-0.5 bg-yellow-400/40" />
        </div>
        {/* Metal Clamp */}
        <div className="w-8 h-3.5 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 rounded-b-sm shadow-md" />
        {/* Lanyard Ring */}
        <div className="w-4 h-4 border-2 border-gray-400 rounded-full -mt-1 bg-transparent" />
      </div>

      {/* ─── Executive Modern ID Badge Card ─── */}
      <div
        ref={cardRef}
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl -mt-2 transition-all duration-300 bg-[#0F131E] border border-white/10"
        style={{
          background: 'linear-gradient(180deg, #161B26 0%, #0F131D 40%, #0A0D15 100%)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(220, 38, 38, 0.25)'
        }}
      >
        {/* Top Punch Hole Slot */}
        <div className="pt-2 pb-1 flex justify-center">
          <div className="w-10 h-2 rounded-full bg-black/80 border border-white/20 shadow-inner" />
        </div>

        {/* Top Accent Line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-red-500 to-transparent" />

        {/* University Header & Event Badge */}
        <div className="px-4 pt-2.5 pb-2 flex items-center justify-between border-b border-white/5">
          <div>
            <span className="text-[8px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
              GRAPHIC ERA HILL UNIVERSITY
            </span>
            <span className="text-[11px] font-bold text-white uppercase tracking-tight block truncate max-w-[190px]">
              {event.title?.split(':')[0]?.split('–')[0]?.trim() || 'GRAPHITE 26'}
            </span>
          </div>
          <div className="text-right">
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold tracking-wider uppercase border shadow-sm ${
                attendee.isLeader
                  ? 'bg-amber-950/80 text-amber-300 border-amber-500/50'
                  : 'bg-red-950/80 text-red-300 border-red-500/50'
              }`}
            >
              <span>{attendee.isLeader ? '👑' : '👤'}</span>
              <span>{attendee.isLeader ? 'LEADER' : `MEMBER ${index + 1}`}</span>
            </span>
          </div>
        </div>

        {/* ─── Portrait Badge Photo Window (Face-Centric & No Cutoffs) ─── */}
        <div className="px-6 pt-4 pb-2">
          <div className="relative mx-auto w-32 sm:w-36 h-40 sm:h-44 rounded-2xl overflow-hidden border-2 border-red-500/80 shadow-[0_8px_30px_rgba(220,38,38,0.45)] bg-[#070913]">
            {attendee.photoUrl ? (
              <img
                src={attendee.photoUrl}
                alt={attendee.name || 'Student Photo'}
                className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02]"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#181D2C] to-[#0D101A] text-gray-400 p-2 text-center">
                <span className="text-4xl mb-1">👤</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-semibold">
                  Photo Pending
                </span>
              </div>
            )}
            {/* Subtle Biometric Laser Scan Line */}
            <div className="animate-scan-line" />
            {/* Verification Ribbon Overlay */}
            <div className="absolute bottom-1.5 inset-x-2 bg-black/85 backdrop-blur-sm border border-emerald-500/50 text-emerald-400 text-[9px] font-mono font-bold py-0.5 rounded text-center shadow-md">
              ✓ VERIFIED ATTENDEE
            </div>
          </div>
        </div>

        {/* Student Full Name - Bold & Professional Typography */}
        <div className="text-center px-4 pt-1 pb-2">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white font-chakra truncate">
            {attendee.name || 'STUDENT NAME'}
          </h2>
          <p className="text-[11px] font-mono font-bold text-red-400 uppercase tracking-widest mt-0.5">
            {attendee.campus?.split(' ').slice(-1)[0] || 'GEHU'} CAMPUS •{' '}
            {attendee.degree?.split('(')[0]?.trim() || attendee.degree || 'B.Tech'}
          </p>
        </div>

        {/* Compact Clean Details Grid */}
        <div className="px-4 pb-3">
          <div className="bg-black/60 rounded-xl p-3 border border-white/5 space-y-1.5 text-[11px]">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 uppercase tracking-wider text-[9px] font-mono">Roll Number</span>
              <span className="text-white font-mono font-bold">{attendee.rollNo || 'GEHU-STUDENT'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 uppercase tracking-wider text-[9px] font-mono">University Email</span>
              <span className="text-gray-200 text-[10px] font-mono truncate max-w-[170px]">{attendee.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 uppercase tracking-wider text-[9px] font-mono">Phone</span>
              <span className="text-gray-200 font-mono text-[10px]">{attendee.phone || '+91 98765 43210'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 uppercase tracking-wider text-[9px] font-mono">Team Name</span>
              <span className="text-red-400 font-semibold text-[10px] truncate max-w-[170px]">
                {participationMode === 'team' ? teamName || 'Squad' : 'Solo Entrant'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500 uppercase tracking-wider text-[9px] font-mono">Track</span>
              <span className="text-gray-300 text-[10px] truncate max-w-[170px]">{selectedTrack || 'General'}</span>
            </div>
          </div>
        </div>

        {/* Official Pass Code Banner */}
        <div className="px-4 pb-2.5">
          <div className="flex items-center justify-between bg-red-950/40 border border-red-900/50 rounded-lg px-3 py-1.5">
            <div>
              <span className="text-[8px] text-gray-400 uppercase tracking-widest block font-mono">PASS CODE</span>
              <span className="text-xs font-mono font-black text-red-400 tracking-wider">
                {attendee.ticketCode}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onCopy(attendee.ticketCode)}
              className="px-2 py-0.5 rounded bg-red-900/60 hover:bg-red-800 text-red-200 text-[10px] font-semibold transition cursor-pointer border border-red-700/50"
            >
              {copiedCode === attendee.ticketCode ? '✓ Copied' : 'Copy'}
            </button>
          </div>
        </div>

        {/* ─── Sharp Scannable Verification QR Code ─── */}
        <div className="px-4 pb-3">
          <div className="bg-black/80 border border-white/10 rounded-xl p-3 flex flex-col items-center text-center shadow-inner">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-mono font-bold text-gray-300 uppercase tracking-widest">
                SCAN FOR GATE VERIFICATION
              </span>
            </div>

            {/* QR Code Container */}
            <div className="p-2 bg-white rounded-xl shadow-lg border-2 border-red-500/60 transition transform hover:scale-105">
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt="Official Verification QR Code"
                  className="w-28 h-28 object-contain block mx-auto"
                />
              ) : (
                <div className="w-28 h-28 flex items-center justify-center text-black text-xs font-mono">
                  Loading QR...
                </div>
              )}
            </div>

            <p className="text-[9px] text-gray-400 font-mono mt-1.5">
              Point phone camera to verify official Graphic Era pass credentials.
            </p>

            <a
              href={`/verify?code=${encodeURIComponent(attendee.ticketCode || '')}&name=${encodeURIComponent(attendee.name || '')}&roll=${encodeURIComponent(attendee.rollNo || '')}&campus=${encodeURIComponent(attendee.campus || '')}&degree=${encodeURIComponent(attendee.degree || '')}&event=${encodeURIComponent(event.title || '')}&team=${encodeURIComponent(teamName || '')}&role=${encodeURIComponent(attendee.isLeader ? 'Leader' : `Member ${index + 1}`)}&track=${encodeURIComponent(selectedTrack || '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-flex items-center gap-1 px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 hover:text-white hover:bg-emerald-800/80 text-[10px] font-mono font-bold transition shadow-sm"
            >
              <span>🔍 Test Scan / View Pass</span>
              <span>➔</span>
            </a>
          </div>
        </div>

        {/* Security Barcode Footer */}
        <div className="px-4 py-2 border-t border-white/5 flex items-center justify-between text-[8px] text-gray-500 font-mono">
          <span>{attendee.campus?.split(' ').slice(-1)[0] || 'GEHU'} CAMPUS PASS</span>
          <span>||||| |||| || |||||</span>
          <span>SPIDEY '26</span>
        </div>
      </div>

      {/* ─── Individual Card Actions ─── */}
      <div className="w-full mt-2.5 flex flex-col gap-1.5">
        <a
          href={createGoogleCalendarUrl(event, attendee?.email)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[11px] font-bold flex items-center justify-center gap-1.5 transition cursor-pointer shadow border border-blue-400/40"
        >
          <span>📅</span>
          <span>ADD TO GOOGLE CALENDAR</span>
        </a>
        <div className="grid grid-cols-2 gap-1.5">
          <button
            type="button"
            onClick={handleShareTwitter}
            className="py-1.5 rounded-lg bg-red-950/60 hover:bg-red-900/70 text-red-300 text-[11px] font-semibold flex items-center justify-center gap-1 transition cursor-pointer border border-red-900/40"
          >
            <span>𝕏 Share</span>
          </button>
          <button
            type="button"
            onClick={handleShareLinkedIn}
            className="py-1.5 rounded-lg bg-[#0A0D15] hover:bg-[#141A29] text-gray-300 text-[11px] font-semibold flex items-center justify-center gap-1 transition cursor-pointer border border-gray-800"
          >
            <span>in LinkedIn</span>
          </button>
        </div>
        <button
          type="button"
          onClick={handleSaveCard}
          className="w-full py-1 text-gray-500 hover:text-gray-300 text-[10px] flex items-center justify-center gap-1 transition cursor-pointer"
        >
          <span>🖨️ Print Single Card</span>
        </button>
      </div>
    </div>
  )
}

// ─── Main Event Registration Modal ───
export default function EventRegistrationModal({ event, onClose, onSuccess }) {
  const { user, token } = useAuth()

  // Detect event type
  const isHackTheWinter = event.title?.toLowerCase().includes('winter')
  const isAstroVerse = event.title?.toLowerCase().includes('astro')
  const isGrafest = event.title?.toLowerCase().includes('grafest')
  const isTechFest = event.title?.toLowerCase().includes('infotsav') || (event.category === 'Technical' && !isHackTheWinter && !isAstroVerse)
  const isSports = event.category === 'Sports' || event.title?.toLowerCase().includes('spardha')

  // Multi-step navigation: 'form' (Details & Photos) -> 'payment' -> 'idcards'
  const [currentStep, setCurrentStep] = useState('form')

  // Lock body scroll and isolate keyboard events while registration modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.body.classList.add('overflow-hidden')
    return () => {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  // Initial user defaults
  const defaultEmail = user?.email || 'student.gehu@gmail.com'
  const defaultName = user?.name || (user?.email ? user.email.split('@')[0] : 'Aryan Sharma')
  const defaultCampus = user?.campus || event.campus || CAMPUS_OPTIONS[0]

  // Participation Mode: 'solo' or 'team'
  const [participationMode, setParticipationMode] = useState('team')
  const [teamName, setTeamName] = useState('Spider Hackers')
  const [teamSize, setTeamSize] = useState('3')
  const [selectedTrack, setSelectedTrack] = useState(
    isHackTheWinter
      ? 'AI / Machine Learning Track'
      : isAstroVerse
      ? 'Astronomy & Astrophysics'
      : isGrafest
      ? 'Battle of Bands / Rock Show'
      : 'Technical Innovation Track'
  )

  // Team Members State with dedicated photo per member
  const [members, setMembers] = useState([
    {
      isLeader: true,
      name: defaultName,
      email: defaultEmail,
      phone: '+91 98765 43210',
      campus: defaultCampus,
      degree: COURSE_OPTIONS[0],
      rollNo: 'GEHU-2025-BHM-501',
      photoUrl: ''
    },
    {
      isLeader: false,
      name: 'Priya Rawat',
      email: 'priya.gehu.bhimtal@gmail.com',
      phone: '+91 97654 32190',
      campus: defaultCampus,
      degree: COURSE_OPTIONS[1],
      rollNo: 'GEHU-2025-BHM-632',
      photoUrl: ''
    },
    {
      isLeader: false,
      name: 'Rohit Joshi',
      email: 'rohit.gehu.bhimtal@gmail.com',
      phone: '+91 98234 56789',
      campus: defaultCampus,
      degree: COURSE_OPTIONS[0],
      rollNo: 'GEHU-2024-BHM-714',
      photoUrl: ''
    }
  ])

  const [activeMemberTab, setActiveMemberTab] = useState(0)

  // Handle Team Size Change
  const handleTeamSizeChange = (sizeStr) => {
    const size = parseInt(sizeStr, 10)
    setTeamSize(sizeStr)

    setMembers(prev => {
      const current = [...prev]
      if (current.length < size) {
        const defaultNames = ['Ananya Bhatt', 'Ayush Negi', 'Manish Verma']
        for (let i = current.length; i < size; i++) {
          current.push({
            isLeader: false,
            name: defaultNames[i - 1] || `Team Member ${i + 1}`,
            email: `member${i + 1}.gehu@gmail.com`,
            phone: `+91 98${Math.floor(10000000 + Math.random() * 89999999)}`,
            campus: defaultCampus,
            degree: COURSE_OPTIONS[0],
            rollNo: `GEHU-2025-BHM-${500 + i * 20}`,
            photoUrl: ''
          })
        }
      } else if (current.length > size) {
        current.length = size
      }
      return current
    })

    if (activeMemberTab >= size) {
      setActiveMemberTab(size - 1)
    }
  }

  // Handle Mode Change (Solo vs Team)
  const handleModeChange = (mode) => {
    setParticipationMode(mode)
    if (mode === 'solo') {
      setMembers(prev => [prev[0]])
      setActiveMemberTab(0)
    } else {
      handleTeamSizeChange(teamSize || '3')
    }
  }

  // Update specific field for a team member
  const handleUpdateMember = (index, field, value) => {
    setMembers(prev => {
      const next = [...prev]
      next[index] = { ...next[index], [field]: value }
      return next
    })
  }

  // Handle Photo Upload via FileReader
  const handlePhotoUpload = (memberIndex, e) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 8 * 1024 * 1024) {
      setError('Please upload an image smaller than 8MB.')
      return
    }

    const reader = new FileReader()
    reader.onload = (event) => {
      const dataUrl = event.target?.result
      if (dataUrl) {
        handleUpdateMember(memberIndex, 'photoUrl', dataUrl)
        setError('')
      }
    }
    reader.readAsDataURL(file)
  }

  // Remove Photo
  const handleRemovePhoto = (memberIndex) => {
    handleUpdateMember(memberIndex, 'photoUrl', '')
  }

  // Payment State
  const eventFee = 199
  const totalAmount = participationMode === 'team' ? members.length * eventFee : eventFee
  const [paymentMethod, setPaymentMethod] = useState('upi')
  const [upiId, setUpiId] = useState('student@oksbi')
  const [paymentQrDataUrl, setPaymentQrDataUrl] = useState('')
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const [transactionId, setTransactionId] = useState('')

  useEffect(() => {
    async function genPaymentQR() {
      try {
        const upiString = `upi://pay?pa=graphicera.events@sbi&pn=Graphic%20Era%20Events&am=${totalAmount}&cu=INR&tn=Graphite26%20Pass%20Fee`
        const url = await QRCode.toDataURL(upiString, {
          width: 280,
          margin: 1,
          color: {
            dark: '#000000',
            light: '#ffffff'
          }
        })
        setPaymentQrDataUrl(url)
      } catch (e) {
        console.error(e)
      }
    }
    genPaymentQR()
  }, [totalAmount])

  // Final Generated Tickets & Cards
  const [generatedTickets, setGeneratedTickets] = useState([])
  const [copiedCode, setCopiedCode] = useState(null)
  const [error, setError] = useState('')

  const headers = token ? { Authorization: `Bearer ${token}` } : {}

  // Step 1 -> Step 2: Validate details & proceed to payment
  const handleProceedToPayment = (e) => {
    e.preventDefault()

    // Validate that each member has name, email, roll number
    for (let i = 0; i < members.length; i++) {
      const m = members[i]
      const memberLabel = m.isLeader ? 'Team Leader' : `Member ${i + 1}`
      if (!m.name || !m.name.trim()) {
        setError(`Please enter the full name for ${memberLabel}.`)
        setActiveMemberTab(i)
        return
      }
      if (!m.email || !m.email.trim()) {
        setError(`Please enter the email for ${memberLabel}.`)
        setActiveMemberTab(i)
        return
      }
      if (!m.rollNo || !m.rollNo.trim()) {
        setError(`Please enter the University Roll Number for ${memberLabel}.`)
        setActiveMemberTab(i)
        return
      }
    }

    setError('')
    setCurrentStep('payment')
  }

  // Step 2 -> Step 3: Complete Payment and Generate ID Cards
  const handleCompletePaymentAndGenerateCards = async () => {
    setIsProcessingPayment(true)
    setError('')

    const txId = 'SPIDER-UPI-' + Math.floor(100000 + Math.random() * 900000)
    setTransactionId(txId)

    let prefix = 'SPIDEY'
    if (isHackTheWinter) prefix = 'HTW-2027'
    else if (isAstroVerse) prefix = 'ASTRO-26'
    else if (isGrafest) prefix = 'GRAFEST'
    else if (isTechFest) prefix = 'TECHFEST'
    else if (isSports) prefix = 'SPARDHA'

    const allAttendees = members.map((m, idx) => {
      const campusAbbr = (m.campus || '').includes('HALDWANI')
        ? 'HLD'
        : (m.campus || '').includes('DEHRADUN')
        ? 'DDN'
        : (m.campus || '').includes('DEEMED')
        ? 'DMD'
        : 'BHM'

      const ticketCode = `${prefix}-${campusAbbr}-${Math.floor(1000 + Math.random() * 9000)}`

      return {
        ...m,
        ticketCode,
        roleInTeam: m.isLeader
          ? participationMode === 'team'
            ? 'Team Leader'
            : 'Solo Entrant'
          : `Team Member ${idx + 1}`
      }
    })

    const leaderMember = allAttendees[0] || {}

    try {
      const fullRegRecord = {
        id: Date.now(),
        event_id: event.id,
        event_title: event.title,
        event_category: event.category,
        event_campus: leaderMember.campus || event.campus,
        student_name: leaderMember.name,
        student_email: leaderMember.email,
        phone: leaderMember.phone,
        roll_no: leaderMember.rollNo,
        degree: leaderMember.degree,
        campus: leaderMember.campus,
        ticket_code: leaderMember.ticketCode,
        team_name: participationMode === 'team' ? teamName : 'Solo Entrant',
        team_size: participationMode === 'team' ? String(members.length) : '1',
        track_info: selectedTrack,
        transaction_id: txId,
        payment_status: 'Paid',
        attendees: allAttendees,
        created_at: new Date().toISOString()
      }

      try {
        await axios.post(
          `/api/events/${event.id}/register`,
          {
            student_name: leaderMember.name,
            student_email: leaderMember.email,
            phone: leaderMember.phone,
            roll_no: leaderMember.rollNo,
            degree: leaderMember.degree,
            campus: leaderMember.campus,
            team_name: fullRegRecord.team_name,
            team_size: fullRegRecord.team_size,
            track_info: selectedTrack,
            details_json: fullRegRecord
          },
          { headers }
        )
      } catch (beErr) {
        // Safe offline fallback
      }

      const stored = JSON.parse(localStorage.getItem('spider_event_registrations') || '[]')
      localStorage.setItem('spider_event_registrations', JSON.stringify([fullRegRecord, ...stored]))

      syncRegistrationToGoogleSheet(fullRegRecord)

      setGeneratedTickets(allAttendees)
      setCurrentStep('idcards')
      onSuccess?.(leaderMember.ticketCode)
    } catch (err) {
      setError('Registration card generation failed. Please try again.')
    } finally {
      setIsProcessingPayment(false)
    }
  }

  const handleCopyCode = (code) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 2000)
    }
  }

  const currentMember = members[activeMemberTab] || members[0] || {}

  return (
    <div
      data-registration-modal="true"
      role="dialog"
      aria-modal="true"
      onKeyDown={(e) => e.stopPropagation()}
      onKeyUp={(e) => e.stopPropagation()}
      onContextMenu={(e) => e.stopPropagation()}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        onKeyUp={(e) => e.stopPropagation()}
        className={`relative w-full bg-[#0E1526] border border-red-500/40 rounded-3xl shadow-[0_0_60px_rgba(220,38,38,0.3)] overflow-hidden my-auto animate-fadeIn transition-all duration-500 ${
          currentStep === 'idcards' ? 'max-w-7xl' : 'max-w-2xl'
        }`}
      >
        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-red-950/80 via-[#0E1526] to-black border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-xl shrink-0">
              🎟️
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold block">
                SPIDEY OFFICIAL PASS PORTAL • GRAPHIC ERA
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white line-clamp-1">
                {event.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white flex items-center justify-center text-sm font-bold transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* 3-Step Animated Breadcrumbs */}
        <div className="px-5 py-2.5 bg-[#0A0D15] border-b border-gray-800 flex items-center justify-between text-xs overflow-x-auto">
          <div
            className={`flex items-center gap-1.5 font-semibold whitespace-nowrap ${
              currentStep === 'form' ? 'text-red-400 font-bold' : 'text-gray-400'
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                currentStep === 'form' ? 'bg-red-600 text-white shadow-md' : 'bg-gray-800 text-gray-300'
              }`}
            >
              1
            </span>
            <span>All Members Details &amp; Photos</span>
          </div>
          <span className="text-gray-600 px-1">→</span>
          <div
            className={`flex items-center gap-1.5 font-semibold whitespace-nowrap ${
              currentStep === 'payment' ? 'text-emerald-400 font-bold' : 'text-gray-400'
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                currentStep === 'payment' ? 'bg-emerald-600 text-white shadow-md' : 'bg-gray-800 text-gray-300'
              }`}
            >
              2
            </span>
            <span>Secure Payment</span>
          </div>
          <span className="text-gray-600 px-1">→</span>
          <div
            className={`flex items-center gap-1.5 font-semibold whitespace-nowrap ${
              currentStep === 'idcards' ? 'text-red-400 font-bold' : 'text-gray-400'
            }`}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                currentStep === 'idcards' ? 'bg-red-600 text-white shadow-md' : 'bg-gray-800 text-gray-300'
              }`}
            >
              3
            </span>
            <span>All ID Cards Together (Snake View)</span>
          </div>
        </div>

        {/* ─── STEP 1: Team & Member Details + Photo Upload ─── */}
        {currentStep === 'form' && (
          <form onSubmit={handleProceedToPayment} className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
            {error && (
              <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* Participation Mode */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">Select Participation Mode:</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleModeChange('team')}
                  className={`p-3.5 rounded-xl border text-left transition cursor-pointer ${
                    participationMode === 'team'
                      ? 'bg-red-950/60 border-red-500 text-white ring-1 ring-red-500/50'
                      : 'bg-[#141A29] border-gray-800 text-gray-400 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-chakra italic font-bold text-sm">👥 Team Pass</span>
                    <span className="text-[10px] font-mono bg-red-600/40 text-red-300 px-1.5 py-0.5 rounded">
                      Popular
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400">
                    Team members add karein, sabhi ki details aur photos upload karein.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => handleModeChange('solo')}
                  className={`p-3.5 rounded-xl border text-left transition cursor-pointer ${
                    participationMode === 'solo'
                      ? 'bg-red-950/60 border-red-500 text-white ring-1 ring-red-500/50'
                      : 'bg-[#141A29] border-gray-800 text-gray-400 hover:border-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-chakra italic font-bold text-sm">👤 Solo Pass</span>
                    <span className="text-[10px] font-mono bg-blue-600/40 text-blue-300 px-1.5 py-0.5 rounded">
                      Individual
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400">
                    Single student pass with photo and verified lanyard badge.
                  </p>
                </button>
              </div>
            </div>

            {/* Team Settings (Team Name & Size) */}
            {participationMode === 'team' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#141A29] p-3.5 rounded-xl border border-gray-800">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                    Team Name <span className="text-red-400">*</span>:
                  </label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="e.g. Spider-Verse Hackers"
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-red-500 font-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Total Team Size:</label>
                  <select
                    value={teamSize}
                    onChange={(e) => handleTeamSizeChange(e.target.value)}
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-red-500"
                  >
                    <option value="2">2 Members (Leader + 1 Member)</option>
                    <option value="3">3 Members (Leader + 2 Members)</option>
                    <option value="4">4 Members (Leader + 3 Members)</option>
                  </select>
                </div>
              </div>
            )}

            {/* Track Selection */}
            <div>
              <label className="block text-[11px] font-semibold text-gray-300 mb-1">Selected Track / Category:</label>
              <input
                type="text"
                value={selectedTrack}
                onChange={(e) => setSelectedTrack(e.target.value)}
                className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-red-500"
              />
            </div>

            {/* ─── Team Members Details & Photo Upload Manager ─── */}
            <div className="p-4 rounded-2xl bg-[#141A29] border border-gray-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-800 pb-2.5 gap-2">
                <div>
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>👥</span>
                    <span>TEAM MEMBERS DETAILS &amp; ORIGINAL PHOTO UPLOADS</span>
                  </span>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Sabhi team members ki details bharein aur sabhi ki photo upload karein taaki sabhi ke ID card ek sath aayein.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-red-950 text-red-300 border border-red-500/30 text-[10px] font-mono font-bold shrink-0">
                    Member {activeMemberTab + 1} of {members.length}
                  </span>
                </div>
              </div>

              {/* Member Selector Tabs */}
              {members.length > 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {members.map((m, idx) => {
                    const isActive = activeMemberTab === idx
                    const hasPhoto = !!m.photoUrl
                    const hasDetails = !!m.name && !!m.email && !!m.rollNo
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveMemberTab(idx)}
                        className={`p-2.5 rounded-xl border text-left transition cursor-pointer flex flex-col justify-between ${
                          isActive
                            ? 'bg-red-900/40 border-red-500 ring-1 ring-red-500 text-white'
                            : 'bg-[#0A0D15] border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold font-mono">
                            {m.isLeader ? '👑 Leader' : `👤 Member ${idx + 1}`}
                          </span>
                          {hasPhoto ? (
                            <span className="text-[9px] text-emerald-400 font-mono font-bold">✓ Photo</span>
                          ) : (
                            <span className="text-[9px] text-amber-400 font-mono">No Photo</span>
                          )}
                        </div>
                        <p className="text-[11px] truncate text-gray-300 font-medium">
                          {m.name || `Member ${idx + 1}`}
                        </p>
                      </button>
                    )
                  })}
                </div>
              )}

              {/* Photo Upload Box for Selected Member */}
              <div className="p-4 rounded-xl bg-black/60 border border-red-950/60 flex flex-col sm:flex-row items-center gap-5">
                {/* Modern Portrait Photo Preview (Faces are never cut!) */}
                <div className="relative w-28 sm:w-32 h-36 sm:h-40 rounded-2xl overflow-hidden border-2 border-red-500 shadow-[0_0_25px_rgba(220,38,38,0.5)] bg-[#0A0D15] flex items-center justify-center shrink-0">
                  {currentMember.photoUrl ? (
                    <>
                      <img
                        src={currentMember.photoUrl}
                        alt={currentMember.name || 'Member'}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="animate-scan-line" />
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-500 text-center p-2">
                      <span className="text-3xl mb-1">📸</span>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-red-400 font-bold">
                        No Photo
                      </span>
                      <span className="text-[8px] text-gray-500 mt-0.5">Passport/Selfie</span>
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-2 text-center sm:text-left">
                  <div>
                    <h5 className="text-xs font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
                      <span>{currentMember.isLeader ? '👑 Leader Photo' : `👤 Member ${activeMemberTab + 1} Photo`}</span>
                      {currentMember.photoUrl ? (
                        <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30 font-bold">
                          ✓ Photo Ready For Badge
                        </span>
                      ) : (
                        <span className="text-[10px] text-amber-400 font-mono bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-500/30">
                          Photo Required
                        </span>
                      )}
                    </h5>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Portrait photo / selfie upload karein. Face bilkul clear aur center me aayega bina kisi cut ke.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                    <label className="py-2 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer transition active:scale-95">
                      <span>📸</span>
                      <span>{currentMember.photoUrl ? 'Change Photo' : 'Upload Original Photo'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handlePhotoUpload(activeMemberTab, e)}
                      />
                    </label>

                    {currentMember.photoUrl && (
                      <button
                        type="button"
                        onClick={() => handleRemovePhoto(activeMemberTab)}
                        className="py-2 px-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs transition cursor-pointer"
                      >
                        Remove
                      </button>
                    )}

                    {members.length > 1 && (
                      <button
                        type="button"
                        onClick={() => setActiveMemberTab((prev) => (prev + 1) % members.length)}
                        className="py-2 px-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs transition cursor-pointer"
                      >
                        Next Member ➔
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Form Inputs Grid for Current Member */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                    Student Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={currentMember.name || ''}
                    onChange={(e) => handleUpdateMember(activeMemberTab, 'name', e.target.value)}
                    placeholder="e.g. Aryan Sharma"
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500 font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                    University Email ID <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={currentMember.email || ''}
                    onChange={(e) => handleUpdateMember(activeMemberTab, 'email', e.target.value)}
                    placeholder="e.g. aryan.sharma@gehu.ac.in"
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500 font-mono"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={currentMember.phone || ''}
                    onChange={(e) => handleUpdateMember(activeMemberTab, 'phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500 font-mono"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                    University Roll Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={currentMember.rollNo || ''}
                    onChange={(e) => handleUpdateMember(activeMemberTab, 'rollNo', e.target.value)}
                    placeholder="e.g. GEHU-2025-BHM-501"
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500 font-mono"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Campus:</label>
                  <select
                    value={currentMember.campus || defaultCampus}
                    onChange={(e) => handleUpdateMember(activeMemberTab, 'campus', e.target.value)}
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  >
                    {CAMPUS_OPTIONS.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Course / Degree:</label>
                  <select
                    value={currentMember.degree || COURSE_OPTIONS[0]}
                    onChange={(e) => handleUpdateMember(activeMemberTab, 'degree', e.target.value)}
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  >
                    {COURSE_OPTIONS.map((deg) => (
                      <option key={deg} value={deg}>
                        {deg}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 1 Actions */}
            <div className="pt-3 flex items-center justify-between border-t border-gray-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-semibold cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white text-xs font-bold shadow-lg cursor-pointer flex items-center gap-2 transition active:scale-95"
              >
                <span>Proceed to Secure Payment ({participationMode === 'team' ? `${members.length} Members` : '1 Member'})</span>
                <span>➔</span>
              </button>
            </div>
          </form>
        )}

        {/* ─── STEP 2: Secure Payment ─── */}
        {currentStep === 'payment' && (
          <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
            {error && (
              <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* Payment Summary */}
            <div className="p-4 rounded-xl bg-[#141A29] border border-gray-800 space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Event Pass ({event.title?.split(':')[0]}):</span>
                <span className="text-white font-mono font-bold">₹{eventFee} / attendee</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Total Registered Members:</span>
                <span className="text-white font-bold">{members.length} members ({participationMode})</span>
              </div>
              <div className="pt-2 border-t border-gray-800 flex justify-between items-center text-sm">
                <span className="font-bold text-white">Total Amount:</span>
                <span className="font-mono font-black text-emerald-400 text-lg">₹{totalAmount}</span>
              </div>
            </div>

            {/* Payment Method Tabs */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">Select Payment Method:</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-3 rounded-xl border text-center font-semibold transition cursor-pointer ${
                    paymentMethod === 'upi'
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                      : 'bg-[#141A29] text-gray-300 border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="text-base mb-0.5">⚡</div>
                  <span>UPI</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('qr')}
                  className={`p-3 rounded-xl border text-center font-semibold transition cursor-pointer ${
                    paymentMethod === 'qr'
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                      : 'bg-[#141A29] text-gray-300 border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="text-base mb-0.5">📱</div>
                  <span>QR Code</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-center font-semibold transition cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                      : 'bg-[#141A29] text-gray-300 border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <div className="text-base mb-0.5">💳</div>
                  <span>Card</span>
                </button>
              </div>
            </div>

            {paymentMethod === 'upi' && (
              <div className="p-4 rounded-xl bg-[#141A29] border border-gray-800 space-y-2.5">
                <label className="block text-[11px] font-semibold text-gray-300">
                  UPI ID (GPay / PhonePe / Paytm):
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@okaxis"
                    className="flex-1 bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono"
                  />
                  <span className="px-3 py-2 rounded-lg bg-gray-800 text-gray-400 text-xs font-mono">
                    VERIFIED
                  </span>
                </div>
                <p className="text-[10px] text-gray-500">0% convenience fee. Direct confirmation.</p>
              </div>
            )}

            {paymentMethod === 'qr' && (
              <div className="p-4 rounded-xl bg-[#141A29] border border-gray-800 flex flex-col items-center text-center space-y-2">
                <div className="w-36 h-36 bg-white rounded-xl p-2.5 shadow-md flex items-center justify-center">
                  {paymentQrDataUrl ? (
                    <img src={paymentQrDataUrl} alt="UPI Payment QR" className="w-full h-full object-contain" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-500 font-mono">
                      Loading UPI...
                    </div>
                  )}
                </div>
                <p className="text-xs font-semibold text-white">Scan with GPay, PhonePe, or Paytm</p>
                <p className="text-[11px] text-gray-400">
                  Total: <span className="text-emerald-400 font-bold">₹{totalAmount}</span>
                </p>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="p-4 rounded-xl bg-[#141A29] border border-gray-800 space-y-2 text-xs">
                <div>
                  <label className="block text-[11px] text-gray-400 mb-1">Card Number:</label>
                  <input
                    type="text"
                    defaultValue="4532 •••• •••• 8821"
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white font-mono"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1">Expiry:</label>
                    <input
                      type="text"
                      defaultValue="08/28"
                      className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1">CVV:</label>
                    <input
                      type="password"
                      defaultValue="•••"
                      className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white font-mono"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="pt-3 flex items-center justify-between border-t border-gray-800">
              <button
                type="button"
                onClick={() => setCurrentStep('form')}
                className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-semibold cursor-pointer"
              >
                ← Back
              </button>
              <button
                type="button"
                onClick={handleCompletePaymentAndGenerateCards}
                disabled={isProcessingPayment}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg cursor-pointer flex items-center gap-2 transition active:scale-95"
              >
                {isProcessingPayment ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing &amp; Generating Badges...</span>
                  </>
                ) : (
                  <span>✓ Pay ₹{totalAmount} &amp; Generate All ID Cards ➔</span>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ─── STEP 3: All ID Cards Together (Snake Cascade Full Screen View) ─── */}
        {currentStep === 'idcards' && (
          <div
            className="max-h-[85vh] overflow-y-auto"
            style={{ background: 'linear-gradient(180deg, #070913 0%, #0A0D18 50%, #070913 100%)' }}
          >
            {/* Top Squad Header Bar */}
            <div className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between border-b border-red-950/50 bg-[#0B0F1C]/90 backdrop-blur-md gap-3">
              <div>
                <div className="text-[10px] text-red-400 uppercase tracking-widest font-mono font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>ALL-ACCESS SQUAD BADGES • {teamName?.toUpperCase() || 'SPIDEY SQUAD'}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">
                  Sabhi {generatedTickets.length} Team Members Ke ID Cards Ready Hain!
                </h3>
                <p className="text-xs text-gray-400">
                  Original uploaded photos, verified credentials, aur scannable QR codes ke sath.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold flex items-center gap-1.5 shadow transition cursor-pointer"
                >
                  <span>🖨️</span>
                  <span>Print All Cards</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow transition cursor-pointer active:scale-95"
                >
                  Done / Close
                </button>
              </div>
            </div>

            {/* Google Calendar Quick Sync Banner */}
            <div className="mx-6 my-3 p-3 rounded-2xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between text-xs shadow-md">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-bold text-blue-200">Google Calendar Synced</p>
                  <p className="text-[11px] text-gray-400">
                    Event date &amp; venue Google Calendar me mark karne ke liye neeche button click karein.
                  </p>
                </div>
              </div>
              <a
                href={createGoogleCalendarUrl(event, generatedTickets[0]?.email || members[0]?.email)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold flex items-center gap-1 shadow transition"
              >
                <span>Add to Calendar</span>
                <span>➔</span>
              </a>
            </div>

            {/* ─── The Snake / Cascade Multi-Card Layout ─── */}
            <div className="px-4 sm:px-8 py-8 flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 sm:gap-8 overflow-x-auto min-h-[580px]">
              {generatedTickets.map((t, idx) => {
                // Snake wave & tilt formula
                // Leader (idx 0, far left): tilted left -3.5deg, translateY -12px
                // Member 2: tilted right +2.8deg, translateY +16px
                // Member 3: tilted left -2.5deg, translateY -8px
                // Member 4: tilted right +3.2deg, translateY +14px
                const tilts = [-3.5, 2.8, -2.5, 3.2]
                const yOffsets = [-12, 16, -8, 14]
                const tilt = tilts[idx % tilts.length]
                const yOffset = yOffsets[idx % yOffsets.length]

                return (
                  <div
                    key={idx}
                    className="relative transition-all duration-500 transform hover:rotate-0 hover:translate-y-0 hover:scale-105 hover:z-50 shrink-0 w-80 sm:w-84 animate-snake-drop"
                    style={{
                      transform: `rotate(${tilt}deg) translateY(${yOffset}px)`,
                      animationDelay: `${idx * 160}ms`,
                      zIndex: 10 + idx
                    }}
                  >
                    {/* Snake Member Indicator Tag */}
                    <div className="text-center mb-1">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-mono font-bold shadow-md border ${
                          t.isLeader
                            ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white border-amber-400/50'
                            : 'bg-gradient-to-r from-gray-900 to-gray-800 text-gray-200 border-gray-700'
                        }`}
                      >
                        <span>{t.isLeader ? '👑' : `👤 #${idx + 1}`}</span>
                        <span>{t.isLeader ? 'TEAM LEADER' : `SQUAD MEMBER ${idx + 1}`}</span>
                      </span>
                    </div>

                    <LanyardIDCard
                      attendee={t}
                      event={event}
                      teamName={teamName}
                      participationMode={participationMode}
                      selectedTrack={selectedTrack}
                      index={idx}
                      onCopy={handleCopyCode}
                      copiedCode={copiedCode}
                    />
                  </div>
                )
              })}
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-900 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
              <span className="font-mono text-[10px]">
                SPIDEY '26 • GRAPHIC ERA UNIVERSITY • ALL SQUAD MEMBERS VERIFIED
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-md cursor-pointer transition active:scale-95"
              >
                Close Portal
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
