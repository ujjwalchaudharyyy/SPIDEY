import React, { useState, useRef } from 'react'
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
  'B.Tech Mechanical & Automation Engineering',
  'B.Tech Aerospace / Drone Engineering',
  'BBA (Bachelor of Business Administration)',
  'MBA (Master of Business Administration)',
  'B.Sc Computer Science / Information Tech',
  'Other University Course'
]

// ─── Graphite'26-Style Animated 3D Character Avatar (Fallback when no photo uploaded) ───
function SpideyAvatar({ gender = 'male', avatarId = 1 }) {
  const isFemale = gender === 'female'

  return (
    <div className="relative w-full aspect-square flex items-center justify-center">
      {/* Animated red glow ring */}
      <div
        className="absolute inset-0 rounded-full opacity-60"
        style={{
          background: `radial-gradient(circle, ${isFemale ? 'rgba(220,38,38,0.5)' : 'rgba(220,38,38,0.45)'} 0%, transparent 70%)`,
          animation: 'pulse-glow 2.5s ease-in-out infinite alternate'
        }}
      />
      <div
        className="absolute inset-2 rounded-full opacity-40"
        style={{
          background: `radial-gradient(circle, ${isFemale ? 'rgba(244,63,94,0.6)' : 'rgba(239,68,68,0.5)'} 0%, transparent 65%)`,
          animation: 'pulse-glow 3s ease-in-out 0.5s infinite alternate'
        }}
      />

      <svg viewBox="0 0 120 140" className="w-full h-full relative z-10 drop-shadow-2xl select-none">
        <defs>
          <linearGradient id={`skin_${gender}_${avatarId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isFemale ? '#FFDFC4' : '#F0C8A0'} />
            <stop offset="100%" stopColor={isFemale ? '#F5B895' : '#DCA876'} />
          </linearGradient>
          <linearGradient id={`hair_${gender}_${avatarId}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={isFemale ? (avatarId % 3 === 0 ? '#7C2D12' : avatarId % 3 === 1 ? '#1E1B4B' : '#312E81') : (avatarId % 3 === 0 ? '#1C1917' : avatarId % 3 === 1 ? '#1E293B' : '#18181B')} />
            <stop offset="100%" stopColor={isFemale ? '#9333EA' : '#1E293B'} />
          </linearGradient>
          <linearGradient id={`suit_${gender}_${avatarId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DC2626" />
            <stop offset="50%" stopColor="#991B1B" />
            <stop offset="100%" stopColor="#7F1D1D" />
          </linearGradient>
          <radialGradient id={`glow_${avatarId}`} cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="rgba(220,38,38,0.3)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <pattern id={`web_${avatarId}`} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <line x1="6" y1="0" x2="6" y2="12" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
            <line x1="0" y1="6" x2="12" y2="6" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
            <line x1="0" y1="0" x2="12" y2="12" stroke="rgba(0,0,0,0.08)" strokeWidth="0.3" />
            <line x1="12" y1="0" x2="0" y2="12" stroke="rgba(0,0,0,0.08)" strokeWidth="0.3" />
          </pattern>
        </defs>

        <circle cx="60" cy="65" r="55" fill={`url(#glow_${avatarId})`} />
        <path d="M 25 130 Q 60 100 95 130 L 95 140 L 25 140 Z" fill={`url(#suit_${gender}_${avatarId})`} />
        <path d="M 25 130 Q 60 100 95 130 L 95 140 L 25 140 Z" fill={`url(#web_${avatarId})`} />
        <path d="M 48 108 L 60 125 L 72 108 Z" fill="#0F172A" />
        <g transform="translate(52, 114) scale(0.5)" opacity="0.7">
          <path d="M 8 0 L 10 6 L 16 6 L 11 10 L 13 16 L 8 12 L 3 16 L 5 10 L 0 6 L 6 6 Z" fill="#FCA5A5" />
        </g>
        <rect x="51" y="85" width="18" height="22" rx="5" fill={`url(#skin_${gender}_${avatarId})`} />

        {isFemale ? (
          <path d="M 32 35 Q 26 65 34 85 Q 38 88 42 75 Q 40 50 48 38 Z M 88 35 Q 94 65 86 85 Q 82 88 78 75 Q 80 50 72 38 Z" fill={`url(#hair_${gender}_${avatarId})`} />
        ) : null}

        <ellipse cx="60" cy="58" rx="28" ry="32" fill={`url(#skin_${gender}_${avatarId})`} />

        <g>
          <path d="M 40 54 Q 48 48 56 55 Q 52 64 42 61 Z" fill="#0F172A" />
          <path d="M 43 55 Q 49 51 54 55 Q 50 61 44 59 Z" fill="#FFFFFF" />
          <path d="M 80 54 Q 72 48 64 55 Q 68 64 78 61 Z" fill="#0F172A" />
          <path d="M 77 55 Q 71 51 66 55 Q 70 61 76 59 Z" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  )
}

// ─── Graphite'26-Style Lanyard ID Card (With Original Uploaded Photo & Name) ───
function LanyardIDCard({ attendee, event, teamName, participationMode, selectedTrack, index, onCopy, copiedCode }) {
  const cardRef = useRef(null)

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`Just got my official Spider-Pass ID Card for ${event.title}! 🕷️ Pass: ${attendee.ticketCode} #SPIDEY #GraphicEra`)
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank')
  }

  const handleShareLinkedIn = () => {
    const text = encodeURIComponent(`Excited to participate in ${event.title} at Graphic Era University! 🎟️ Pass: ${attendee.ticketCode} #GraphicEra #SPIDEY`)
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://gehu.ac.in')}&title=${text}`, '_blank')
  }

  const handleSaveCard = () => {
    window.print()
  }

  return (
    <div className="flex flex-col items-center max-w-sm mx-auto select-none">
      {/* ─── Hanging Ribbon / Lanyard Strap ─── */}
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-14 relative overflow-hidden shadow-lg"
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
        <div className="w-8 h-3 bg-gradient-to-b from-gray-300 to-gray-500 rounded-b-sm shadow-md" />
        <div className="w-4 h-4 border-2 border-gray-400 rounded-full -mt-1 bg-transparent" />
      </div>

      {/* ─── The Actual Holographic Badge Card ─── */}
      <div
        ref={cardRef}
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl -mt-2 transition-all duration-300 hover:shadow-[0_0_40px_rgba(220,38,38,0.35)]"
        style={{
          background: 'linear-gradient(160deg, #1A0A0A 0%, #0D0D0D 40%, #1A0505 100%)',
          border: '1px solid rgba(220,38,38,0.3)'
        }}
      >
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />

        {/* Event Tag Badge */}
        <div className="px-4 pt-4 pb-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-bold text-red-300 uppercase tracking-widest">
              {attendee.isLeader ? '👑 TEAM LEADER' : '👤 TEAM MEMBER'} • {event.title?.split(':')[0]?.split('–')[0]?.toUpperCase().trim().slice(0, 22) || 'SPIDEY'}
            </span>
          </div>
        </div>

        {/* ─── Original Uploaded Photo / Avatar Area ─── */}
        <div className="px-8 py-3">
          <div className="relative w-44 h-44 mx-auto flex items-center justify-center">
            {attendee.photoUrl ? (
              <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Red Neon Glow Aura */}
                <div
                  className="absolute inset-0 rounded-full opacity-70 blur-md pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(220,38,38,0.7) 0%, rgba(185,28,28,0.3) 60%, transparent 80%)',
                    animation: 'pulse-glow 2.5s ease-in-out infinite alternate'
                  }}
                />
                {/* Cyber Rotating Ring */}
                <div className="absolute -inset-1 rounded-full border border-red-500/50 border-dashed animate-spin-slow opacity-60 pointer-events-none" />
                
                {/* Real Uploaded Photo */}
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-red-500 shadow-[0_0_25px_rgba(220,38,38,0.6)] bg-black z-10 group">
                  <img
                    src={attendee.photoUrl}
                    alt={attendee.name}
                    className="w-full h-full object-cover object-center filter contrast-105 brightness-105"
                  />
                  {/* Subtle Biometric Scan Line */}
                  <div className="animate-scan-line" />
                  {/* Verified Badge Overlay */}
                  <div className="absolute bottom-1 right-2 bg-red-600/90 text-[8px] font-mono text-white px-1.5 py-0.5 rounded-full font-bold shadow-md">
                    ✓ PASS
                  </div>
                </div>
              </div>
            ) : (
              <SpideyAvatar
                gender={attendee.gender || 'male'}
                avatarId={index + 1}
              />
            )}
          </div>
        </div>

        {/* Student Name - Big & Bold Typography */}
        <div className="text-center px-4 pb-2">
          <h2
            className="text-2xl sm:text-3xl font-black tracking-tight uppercase font-chakra"
            style={{
              color: '#FFFFFF',
              textShadow: '0 0 20px rgba(220,38,38,0.8), 0 0 40px rgba(220,38,38,0.4)'
            }}
          >
            {attendee.name || 'STUDENT'}
          </h2>
          <p className="text-xs text-red-400 font-mono font-bold tracking-widest uppercase mt-0.5">
            {attendee.campus?.split(' ').slice(-1)[0] || 'GEHU'} • {attendee.degree?.split('(')[0]?.trim() || attendee.degree || 'B.Tech'}
          </p>
        </div>

        {/* Details Grid */}
        <div className="px-4 pb-3">
          <div className="bg-black/50 rounded-xl p-3 border border-red-950/40 space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-500 uppercase tracking-wider text-[9px]">Roll Number</span>
              <span className="text-gray-200 font-mono font-semibold">{attendee.rollNo || 'GEHU-STUDENT'}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-500 uppercase tracking-wider text-[9px]">Email ID</span>
              <span className="text-gray-200 text-[10px] truncate max-w-[190px]">{attendee.email}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-500 uppercase tracking-wider text-[9px]">Phone</span>
              <span className="text-gray-200 font-mono text-[10px]">{attendee.phone || '+91 98765 43210'}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-500 uppercase tracking-wider text-[9px]">Campus</span>
              <span className="text-cyan-300 text-[10px] truncate max-w-[190px] font-semibold">{attendee.campus}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-500 uppercase tracking-wider text-[9px]">Course / Degree</span>
              <span className="text-gray-200 text-[10px] truncate max-w-[190px]">{attendee.degree}</span>
            </div>
            {participationMode === 'team' && (
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-gray-500 uppercase tracking-wider text-[9px]">Team</span>
                <span className="text-red-400 font-semibold text-[10px]">{teamName}</span>
              </div>
            )}
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-500 uppercase tracking-wider text-[9px]">Track</span>
              <span className="text-gray-300 text-[10px] truncate max-w-[190px]">{selectedTrack}</span>
            </div>
          </div>
        </div>

        {/* Pass Code Section */}
        <div className="px-4 pb-3">
          <div className="flex items-center justify-between bg-red-950/30 border border-red-900/40 rounded-lg px-3 py-2">
            <div>
              <span className="text-[8px] text-gray-500 uppercase tracking-widest block font-mono">OFFICIAL PASS CODE</span>
              <span className="text-sm font-mono font-black text-red-400 tracking-wider">
                {attendee.ticketCode}
              </span>
            </div>
            <button
              type="button"
              onClick={() => onCopy(attendee.ticketCode)}
              className="px-2.5 py-1 rounded-md bg-red-900/50 hover:bg-red-800/60 text-red-300 text-[10px] font-semibold transition cursor-pointer border border-red-800/40"
            >
              {copiedCode === attendee.ticketCode ? '✓ Copied!' : '📋 Copy'}
            </button>
          </div>
        </div>

        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-red-800/50 to-transparent" />

        {/* Campus & Event Footer */}
        <div className="px-4 py-2.5 flex items-center justify-between text-[9px] text-gray-600">
          <span className="font-mono uppercase tracking-wider">{attendee.campus?.split(' ').slice(-1)[0] || 'GEHU'} CAMPUS</span>
          <span className="font-mono">SPIDEY '26 • OFFICIAL PASS</span>
        </div>
      </div>

      {/* ─── Action Buttons Below Card ─── */}
      <div className="w-full mt-3 flex flex-col gap-1.5">
        <a
          href={createGoogleCalendarUrl(event, attendee?.email)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer shadow-md border border-blue-400/40"
        >
          <span className="text-base">📅</span>
          <span>ADD TO GOOGLE CALENDAR</span>
        </a>
        <button
          type="button"
          onClick={handleShareTwitter}
          className="w-full py-2 rounded-lg bg-red-950/60 hover:bg-red-900/70 text-red-300 text-xs font-bold flex items-center justify-center gap-2 transition cursor-pointer border border-red-900/40"
        >
          <span>𝕏</span>
          <span>SHARE ON X</span>
        </button>
        <button
          type="button"
          onClick={handleShareLinkedIn}
          className="w-full py-2 rounded-lg bg-[#0A0D15] hover:bg-[#141A29] text-gray-300 text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer border border-gray-800"
        >
          <span>in</span>
          <span>POST ON LINKEDIN</span>
        </button>
        <button
          type="button"
          onClick={handleSaveCard}
          className="w-full py-1.5 rounded-lg text-gray-500 hover:text-gray-300 text-[11px] flex items-center justify-center gap-1.5 transition cursor-pointer"
        >
          <span>↓</span>
          <span>SAVE CARD IMAGE (PRINT)</span>
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
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  // Initial user defaults
  const defaultEmail = user?.email || 'student.gehu@gmail.com'
  const defaultName = user?.name || (user?.email ? user.email.split('@')[0] : 'Aryan Sharma')
  const defaultCampus = user?.campus || event.campus || CAMPUS_OPTIONS[0]

  // Participation Mode: 'solo' or 'team'
  const [participationMode, setParticipationMode] = useState('team')
  const [teamName, setTeamName] = useState(isHackTheWinter ? 'Spider-Hackers Bhimtal' : 'Team Spider-Verse')
  const [teamSize, setTeamSize] = useState('3')

  // Track selection
  const [selectedTrack, setSelectedTrack] = useState(() => {
    if (isHackTheWinter) return 'AI Agents & GenAI Systems'
    if (isAstroVerse) return 'Deep-Sky Telescope Stargazing & Astrophotography'
    if (isGrafest) return 'All-Access Student VIP Concert Pass'
    if (isTechFest) return 'Robowars (Heavyweight Combat Arena)'
    if (isSports) return 'Football Championship (11v11)'
    return 'General Participation Track'
  })

  // ─── Team Members State (With Photo Upload For Each Member) ───
  const [members, setMembers] = useState([
    {
      isLeader: true,
      name: defaultName,
      email: defaultEmail,
      phone: user?.phone || '+91 98765 43210',
      campus: defaultCampus,
      degree: user?.degree || COURSE_OPTIONS[0],
      rollNo: 'GEHU-2024-BHM-842',
      gender: 'male',
      photoUrl: ''
    },
    {
      isLeader: false,
      name: 'Priya Negi',
      email: 'priya.negi.gehu@gmail.com',
      phone: '+91 97654 32190',
      campus: defaultCampus,
      degree: COURSE_OPTIONS[1],
      rollNo: 'GEHU-2025-BHM-632',
      gender: 'female',
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
      gender: 'male',
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
            gender: i % 2 === 1 ? 'female' : 'male',
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

    if (file.size > 5 * 1024 * 1024) {
      setError('Please upload a photo smaller than 5MB.')
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
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [transactionId, setTransactionId] = useState('')

  // Final Generated Tickets & Cards
  const [generatedTickets, setGeneratedTickets] = useState([])
  const [copiedCode, setCopiedCode] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const headers = token ? { Authorization: `Bearer ${token}` } : {}

  // Step 1 -> Step 2: Validate details & proceed to payment
  const handleProceedToPayment = (e) => {
    e.preventDefault()

    // Validate that each member has name and email
    for (let i = 0; i < members.length; i++) {
      const m = members[i]
      if (!m.name || !m.name.trim()) {
        setError(`Please enter the full name for ${m.isLeader ? 'Team Leader' : `Member ${i + 1}`}.`)
        setActiveMemberTab(i)
        return
      }
      if (!m.email || !m.email.trim()) {
        setError(`Please enter the email for ${m.isLeader ? 'Team Leader' : `Member ${i + 1}`}.`)
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
    setPaymentSuccess(true)

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
        roleInTeam: m.isLeader ? (participationMode === 'team' ? 'Team Leader' : 'Solo Entrant') : `Team Member ${idx + 1}`
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
        await axios.post(`/api/events/${event.id}/register`, {
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
        }, { headers })
      } catch (beErr) {
        // Safe offline fallback
      }

      const stored = JSON.parse(localStorage.getItem('spider_event_registrations') || '[]')
      localStorage.setItem('spider_event_registrations', JSON.stringify([fullRegRecord, ...stored]))

      syncRegistrationToGoogleSheet(fullRegRecord)

      setGeneratedTickets(allAttendees)
      setActiveCardIndex(0)
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0E1526] border border-red-500/40 rounded-2xl shadow-[0_0_50px_rgba(220,38,38,0.3)] overflow-hidden my-auto animate-fadeIn">

        {/* Modal Top Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-red-950/80 via-[#0E1526] to-black border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-xl shrink-0">
              🎟️
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-bold block">
                SPIDEY OFFICIAL PASS PORTAL
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
          <div className={`flex items-center gap-1.5 font-semibold whitespace-nowrap ${currentStep === 'form' ? 'text-red-400 font-bold' : 'text-gray-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 'form' ? 'bg-red-600 text-white shadow-md' : 'bg-gray-800 text-gray-300'}`}>1</span>
            <span>Team Details &amp; Photos</span>
          </div>
          <span className="text-gray-600 px-1">→</span>
          <div className={`flex items-center gap-1.5 font-semibold whitespace-nowrap ${currentStep === 'payment' ? 'text-emerald-400 font-bold' : 'text-gray-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 'payment' ? 'bg-emerald-600 text-white shadow-md' : 'bg-gray-800 text-gray-300'}`}>2</span>
            <span>Secure Payment</span>
          </div>
          <span className="text-gray-600 px-1">→</span>
          <div className={`flex items-center gap-1.5 font-semibold whitespace-nowrap ${currentStep === 'idcards' ? 'text-red-400 font-bold' : 'text-gray-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 'idcards' ? 'bg-red-600 text-white shadow-md' : 'bg-gray-800 text-gray-300'}`}>3</span>
            <span>Holographic ID Cards</span>
          </div>
        </div>

        {/* ─── STEP 1: Team & Member Details + Photo Upload (All in Step 1) ─── */}
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
                    <span className="text-[10px] font-mono bg-red-600/40 text-red-300 px-1.5 py-0.5 rounded">Popular</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Team members add karein, details aur photos upload karein.</p>
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
                    <span className="text-[10px] font-mono bg-blue-600/40 text-blue-300 px-1.5 py-0.5 rounded">Individual</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Single student pass with photo and verified lanyard badge.</p>
                </button>
              </div>
            </div>

            {/* Team Settings (Team Name & Size) */}
            {participationMode === 'team' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#141A29] p-3.5 rounded-xl border border-gray-800">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Team Name <span className="text-red-400">*</span>:</label>
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

            {/* ─── TEAM MEMBERS & PHOTO UPLOADS (TABS) ─── */}
            <div className="p-4 rounded-xl bg-[#141A29] border border-gray-800 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                <div>
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>📸</span>
                    <span>TEAM MEMBERS DETAILS &amp; ORIGINAL PHOTO UPLOAD</span>
                  </span>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    Har member ki details bharein aur original photo upload karein taaki personalized ID card generate ho.
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-red-950 text-red-300 border border-red-500/30 text-[10px] font-mono font-bold shrink-0">
                  {members.length} {members.length > 1 ? 'Members' : 'Entrant'}
                </span>
              </div>

              {/* Member Navigation Tabs */}
              {members.length > 1 && (
                <div className="flex items-center gap-2 border-b border-gray-800 pb-2 overflow-x-auto">
                  {members.map((m, idx) => {
                    const isActive = activeMemberTab === idx
                    const hasPhoto = !!m.photoUrl
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveMemberTab(idx)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                          isActive
                            ? 'bg-red-600 text-white shadow-md'
                            : 'bg-[#0A0D15] text-gray-400 hover:text-white border border-gray-800'
                        }`}
                      >
                        <span>{m.isLeader ? '👑' : '👤'}</span>
                        <span>{m.name ? m.name.split(' ')[0] : `Member ${idx + 1}`}</span>
                        {hasPhoto ? (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-black" title="Photo Uploaded ✓" />
                        ) : (
                          <span className="text-[9px] text-red-400 font-mono">(Upload Photo)</span>
                        )}
                      </button>
                    )
                  })}
                </div>
              )}

              {/* Photo Upload Box for Current Member */}
              <div className="p-4 rounded-xl bg-black/60 border border-red-950/60 flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.5)] bg-[#0A0D15] flex items-center justify-center shrink-0">
                  {currentMember.photoUrl ? (
                    <>
                      <img
                        src={currentMember.photoUrl}
                        alt={currentMember.name || 'Member'}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="animate-scan-line" />
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-gray-500 text-center p-2">
                      <span className="text-3xl mb-1">📸</span>
                      <span className="text-[9px] font-mono uppercase tracking-wider text-red-400 font-bold">No Photo</span>
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-2 text-center sm:text-left">
                  <div>
                    <h5 className="text-xs font-bold text-white flex items-center justify-center sm:justify-start gap-1.5">
                      <span>{currentMember.isLeader ? 'Leader Photo' : `Member ${activeMemberTab + 1} Photo`}</span>
                      {currentMember.photoUrl ? (
                        <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30 font-bold">
                          ✓ Photo Ready for Badge
                        </span>
                      ) : (
                        <span className="text-[10px] text-amber-400 font-mono bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-500/30">
                          Photo Upload Pending
                        </span>
                      )}
                    </h5>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Apni original selfie ya passport photo upload karein. Ye photo ID card par original display hogi.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                    <label className="py-2 px-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer transition active:scale-95">
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
                    placeholder="e.g. GEHU-2024-BHM-842"
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500 font-mono"
                    required
                  />
                </div>

                {/* Campus Dropdown */}
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                    Campus <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={currentMember.campus || defaultCampus}
                    onChange={(e) => handleUpdateMember(activeMemberTab, 'campus', e.target.value)}
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  >
                    {CAMPUS_OPTIONS.map((c) => (
                      <option key={c} value={c} className="bg-black text-white">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Course / Degree Dropdown */}
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                    Course / Degree <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={currentMember.degree || COURSE_OPTIONS[0]}
                    onChange={(e) => handleUpdateMember(activeMemberTab, 'degree', e.target.value)}
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  >
                    {COURSE_OPTIONS.map((c) => (
                      <option key={c} value={c} className="bg-black text-white">
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Quick switch to next member */}
              {activeMemberTab < members.length - 1 && (
                <div className="pt-2 text-right">
                  <button
                    type="button"
                    onClick={() => setActiveMemberTab(prev => prev + 1)}
                    className="text-xs font-semibold text-red-400 hover:text-red-300 transition cursor-pointer"
                  >
                    Fill Next Member Details ({activeMemberTab + 2}) ➔
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Actions for Step 1 */}
            <div className="pt-2 flex items-center justify-between border-t border-gray-800">
              <div className="text-xs text-gray-400">
                <span>Total Fee: </span>
                <span className="text-white font-bold text-sm">₹{totalAmount}</span>
                <span className="text-[10px] text-gray-500 ml-1">
                  ({members.length} {members.length > 1 ? 'passes' : 'pass'} x ₹{eventFee})
                </span>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-semibold cursor-pointer">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white text-xs font-chakra font-bold tracking-wider shadow-spider-glow flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <span>Proceed to Payment</span>
                  <span>➔</span>
                </button>
              </div>
            </div>
          </form>
        )}

        {/* ─── STEP 2: Secure Payment ─── */}
        {currentStep === 'payment' && (
          <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
            <div className="p-4 rounded-xl bg-[#141A29] border border-gray-800 space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-mono">PASS SUMMARY</span>
                  <h4 className="text-sm font-bold text-white">{event.title}</h4>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold">
                  ₹{totalAmount} Total
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-300">
                <div><span className="text-gray-500">Mode:</span> {participationMode === 'team' ? `Team (${teamName})` : 'Solo Entry'}</div>
                <div><span className="text-gray-500">Attendees:</span> {members.length} Members</div>
                <div><span className="text-gray-500">Leader:</span> {members[0]?.name}</div>
                <div><span className="text-gray-500">Email:</span> {members[0]?.email}</div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">Payment Mode:</label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button type="button" onClick={() => setPaymentMethod('upi')} className={`p-3 rounded-xl border text-center font-semibold transition cursor-pointer ${paymentMethod === 'upi' ? 'bg-emerald-600 text-white border-emerald-500 shadow-md' : 'bg-[#141A29] text-gray-300 border-gray-800 hover:border-gray-700'}`}>
                  <div className="text-base mb-0.5">⚡</div>
                  <span>UPI</span>
                </button>
                <button type="button" onClick={() => setPaymentMethod('qr')} className={`p-3 rounded-xl border text-center font-semibold transition cursor-pointer ${paymentMethod === 'qr' ? 'bg-emerald-600 text-white border-emerald-500 shadow-md' : 'bg-[#141A29] text-gray-300 border-gray-800 hover:border-gray-700'}`}>
                  <div className="text-base mb-0.5">📱</div>
                  <span>QR Code</span>
                </button>
                <button type="button" onClick={() => setPaymentMethod('card')} className={`p-3 rounded-xl border text-center font-semibold transition cursor-pointer ${paymentMethod === 'card' ? 'bg-emerald-600 text-white border-emerald-500 shadow-md' : 'bg-[#141A29] text-gray-300 border-gray-800 hover:border-gray-700'}`}>
                  <div className="text-base mb-0.5">💳</div>
                  <span>Card</span>
                </button>
              </div>
            </div>

            {paymentMethod === 'upi' && (
              <div className="p-4 rounded-xl bg-[#141A29] border border-gray-800 space-y-2.5">
                <label className="block text-[11px] font-semibold text-gray-300">UPI ID (GPay / PhonePe / Paytm):</label>
                <div className="flex gap-2">
                  <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} placeholder="yourname@okaxis" className="flex-1 bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-500 font-mono" />
                  <span className="px-3 py-2 rounded-lg bg-gray-800 text-gray-400 text-xs font-mono">VERIFIED</span>
                </div>
                <p className="text-[10px] text-gray-500">0% convenience fee. Direct confirmation.</p>
              </div>
            )}

            {paymentMethod === 'qr' && (
              <div className="p-4 rounded-xl bg-[#141A29] border border-gray-800 flex flex-col items-center text-center space-y-2">
                <div className="w-36 h-36 bg-white rounded-xl p-2.5 shadow-md flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-black">
                    <rect x="5" y="5" width="30" height="30" fill="black" />
                    <rect x="10" y="10" width="20" height="20" fill="white" />
                    <rect x="15" y="15" width="10" height="10" fill="black" />
                    <rect x="65" y="5" width="30" height="30" fill="black" />
                    <rect x="70" y="10" width="20" height="20" fill="white" />
                    <rect x="75" y="15" width="10" height="10" fill="black" />
                    <rect x="5" y="65" width="30" height="30" fill="black" />
                    <rect x="10" y="70" width="20" height="20" fill="white" />
                    <rect x="15" y="75" width="10" height="10" fill="black" />
                    <rect x="45" y="20" width="10" height="20" fill="black" />
                    <rect x="45" y="50" width="20" height="10" fill="black" />
                    <rect x="70" y="50" width="15" height="15" fill="black" />
                    <rect x="45" y="70" width="15" height="25" fill="black" />
                    <circle cx="50" cy="50" r="6" fill="#DC2626" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-white">Scan with GPay, PhonePe, or Paytm</p>
                <p className="text-[11px] text-gray-400">Total: <span className="text-emerald-400 font-bold">₹{totalAmount}</span></p>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="p-4 rounded-xl bg-[#141A29] border border-gray-800 space-y-2 text-xs">
                <div>
                  <label className="block text-[11px] text-gray-400 mb-1">Card Number:</label>
                  <input type="text" defaultValue="4532 •••• •••• 8821" className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white font-mono" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1">Expiry:</label>
                    <input type="text" defaultValue="08/28" className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white font-mono" />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-400 mb-1">CVV:</label>
                    <input type="password" defaultValue="•••" className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white font-mono" />
                  </div>
                </div>
              </div>
            )}

            <div className="pt-3 flex items-center justify-between border-t border-gray-800">
              <button type="button" onClick={() => setCurrentStep('form')} className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-semibold cursor-pointer">
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
                  <span>✓ Pay ₹{totalAmount} &amp; Generate ID Cards ➔</span>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ─── STEP 3: Animated Graphite'26 Lanyard ID Cards ─── */}
        {currentStep === 'idcards' && (
          <div className="max-h-[82vh] overflow-y-auto" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #0D0505 50%, #0A0A0A 100%)' }}>
            {/* Top Header Bar */}
            <div className="px-5 py-3 flex items-center justify-between border-b border-red-950/40">
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">
                  ANIMATED LANYARD CARD • {event.title?.split(':')[0]?.split('–')[0]?.toUpperCase().trim().slice(0, 20) || 'SPIDEY'}
                </div>
                <h3 className="text-sm font-bold text-white mt-0.5">Your ID Card is ready with original photo!</h3>
                <p className="text-[11px] text-gray-400">
                  Original uploaded photo and credentials verified for Graphic Era campus entry.
                </p>
              </div>
              <div className="hidden sm:block text-right text-[10px] text-gray-500 space-y-0.5">
                <div><span className="text-gray-600 uppercase">Dates</span> <span className="text-gray-300 ml-1">{event.display_date || event.event_date || 'TBA'}</span></div>
                <div><span className="text-gray-600 uppercase">Venue</span> <span className="text-gray-300 ml-1">{event.campus?.split(' ').slice(-1)[0] || 'GEHU'} campus</span></div>
                <div><span className="text-gray-600 uppercase">TxnID</span> <span className="text-emerald-400 ml-1 font-mono">{transactionId}</span></div>
              </div>
            </div>

            {/* Google Calendar Quick Sync Banner */}
            <div className="mx-5 my-3 p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between text-xs shadow-md">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-bold text-blue-200">Google Calendar Synced with your Gmail</p>
                  <p className="text-[11px] text-gray-400">Card ke neeche &quot;ADD TO GOOGLE CALENDAR&quot; click karke date direct mark karein.</p>
                </div>
              </div>
              <a
                href={createGoogleCalendarUrl(event, generatedTickets[activeCardIndex]?.email || members[0]?.email)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold flex items-center gap-1 shadow transition"
              >
                <span>Open Calendar</span>
                <span>➔</span>
              </a>
            </div>

            {/* Card Navigation Tabs (if multiple team members) */}
            {generatedTickets.length > 1 && (
              <div className="px-5 py-2 flex items-center gap-2 border-b border-gray-900 overflow-x-auto">
                {generatedTickets.map((t, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveCardIndex(i)}
                    className={`px-3.5 py-1 rounded-full text-[11px] font-semibold transition cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                      activeCardIndex === i
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                    }`}
                  >
                    <span>{t.isLeader ? '👑' : '👤'}</span>
                    <span>{t.name ? t.name.split(' ')[0] : `Member ${i + 1}`}</span>
                  </button>
                ))}
              </div>
            )}

            {/* The Lanyard ID Card */}
            <div className="px-5 py-6">
              <LanyardIDCard
                attendee={generatedTickets[activeCardIndex] || members[0] || {}}
                event={event}
                teamName={teamName}
                participationMode={participationMode}
                selectedTrack={selectedTrack}
                index={activeCardIndex}
                onCopy={handleCopyCode}
                copiedCode={copiedCode}
              />
            </div>

            {/* Footer Close */}
            <div className="px-5 py-3 border-t border-gray-900 flex items-center justify-between">
              <span className="text-[10px] text-gray-600 font-mono">SPIDEY '26 • GRAPHIC ERA UNIVERSITY</span>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-md cursor-pointer transition active:scale-95"
              >
                Done / Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
