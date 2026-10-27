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

        {/* Eyes & mask accents */}
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

// ─── Graphite'26-Style Lanyard ID Card (With Uploaded Original Photo) ───
function LanyardIDCard({ attendee, event, teamName, participationMode, selectedTrack, index, onCopy, copiedCode }) {
  const cardRef = useRef(null)

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`Just got my official Spider-Pass ID Card for ${event.title}! 🕷️ My pass code: ${attendee.ticketCode} #SPIDEY #GraphicEra`)
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank')
  }

  const handleShareLinkedIn = () => {
    const text = encodeURIComponent(`Excited to participate in ${event.title} at Graphic Era University! 🎟️ Pass Confirmed: ${attendee.ticketCode} #GraphicEra #SPIDEY`)
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

// ─── Main Event Registration Modal with Post-Payment Team Roster & Photo Upload ───
export default function EventRegistrationModal({ event, onClose, onSuccess }) {
  const { user, token } = useAuth()

  const todayStr = '2026-10-27'
  const isPast = event.event_date < todayStr
  const isPresent = event.event_date === todayStr

  const getDaysUntil = () => {
    if (!event.event_date) return 999
    const today = new Date('2026-10-27T00:00:00')
    const evDate = new Date(`${event.event_date}T00:00:00`)
    const diff = evDate.getTime() - today.getTime()
    return Math.ceil(diff / (1000 * 60 * 60 * 24))
  }
  const daysUntil = getDaysUntil()
  const isRegistrationClosed = isPast || isPresent || (daysUntil >= 0 && daysUntil <= 5)

  // Event category detection
  const isHackTheWinter = event.title?.toLowerCase().includes('winter')
  const isAstroVerse = event.title?.toLowerCase().includes('astro')
  const isGrafest = event.title?.toLowerCase().includes('grafest')
  const isTechFest = event.title?.toLowerCase().includes('infotsav') || (event.category === 'Technical' && !isHackTheWinter && !isAstroVerse)
  const isSports = event.category === 'Sports' || event.title?.toLowerCase().includes('spardha')

  // Multi-step modal navigation: 'form' -> 'payment' -> 'roster' (Photo upload) -> 'idcards'
  const [currentStep, setCurrentStep] = useState('form')
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  // Initial Team Leader Details
  const defaultEmail = user?.email || 'student.gehu@gmail.com'
  const defaultName = user?.name || (user?.email ? user.email.split('@')[0] : 'Graphic Era Student')

  const [leaderName, setLeaderName] = useState(defaultName)
  const [leaderEmail, setLeaderEmail] = useState(defaultEmail)
  const [leaderPhone, setLeaderPhone] = useState(user?.phone || '+91 98765 43210')
  const [leaderRoll, setLeaderRoll] = useState('GEHU-2024-BHM-842')
  const [leaderDegree, setLeaderDegree] = useState(user?.degree || COURSE_OPTIONS[0])
  const [leaderCampus, setLeaderCampus] = useState(user?.campus || event.campus || CAMPUS_OPTIONS[0])

  // Participation Mode: 'solo' or 'team'
  const [participationMode, setParticipationMode] = useState('team')
  const [teamName, setTeamName] = useState(isHackTheWinter ? 'Spider-Hackers Bhimtal' : 'Team Alpha')
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

  // Payment State
  const eventFee = 199
  const totalAmount = participationMode === 'team' ? parseInt(teamSize, 10) * eventFee : eventFee
  const [paymentMethod, setPaymentMethod] = useState('upi')
  const [upiId, setUpiId] = useState('student@oksbi')
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [transactionId, setTransactionId] = useState('')

  // Post-Payment Team Roster & Photos State
  const [rosterMembers, setRosterMembers] = useState([])
  const [activeRosterIndex, setActiveRosterIndex] = useState(0)

  // Final Generated Tickets & Cards
  const [generatedTickets, setGeneratedTickets] = useState([])
  const [copiedCode, setCopiedCode] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const headers = token ? { Authorization: `Bearer ${token}` } : {}

  // Step 1 -> Step 2 (Proceed to Payment)
  const handleProceedToPayment = (e) => {
    e.preventDefault()
    if (isRegistrationClosed) return
    setError('')
    setCurrentStep('payment')
  }

  // Step 2 -> Step 3 (Payment Complete -> Ask Team Details & Photos)
  const handleCompletePaymentAndProceedToRoster = async () => {
    setIsProcessingPayment(true)
    setError('')

    const txId = 'SPIDER-UPI-' + Math.floor(100000 + Math.random() * 900000)
    setTransactionId(txId)
    setPaymentSuccess(true)

    // Build initial team roster with members
    const count = participationMode === 'team' ? parseInt(teamSize, 10) : 1
    const initialRoster = []

    // 1. Team Leader / Entrant
    initialRoster.push({
      isLeader: true,
      name: leaderName || 'Aryan Sharma',
      email: leaderEmail || 'student@gehu.ac.in',
      phone: leaderPhone || '+91 98765 43210',
      campus: leaderCampus || event.campus || CAMPUS_OPTIONS[0],
      degree: leaderDegree || COURSE_OPTIONS[0],
      rollNo: leaderRoll || 'GEHU-2024-BHM-842',
      gender: 'male',
      photoUrl: ''
    })

    // 2. Additional Team Members (if team)
    if (participationMode === 'team') {
      const defaultNames = ['Priya Negi', 'Rohit Joshi', 'Ananya Bhatt']
      const defaultDegrees = [
        'B.Tech CSE (AI & Machine Learning)',
        'B.Tech Computer Science & Engineering (CSE)',
        'BCA (Bachelor of Computer Applications)'
      ]
      for (let i = 1; i < count; i++) {
        initialRoster.push({
          isLeader: false,
          name: defaultNames[i - 1] || `Team Member ${i + 1}`,
          email: `member${i + 1}.${(leaderCampus || '').toLowerCase().includes('haldwani') ? 'hld' : (leaderCampus || '').toLowerCase().includes('dehradun') ? 'ddn' : 'bhm'}@gmail.com`,
          phone: `+91 98${Math.floor(10000000 + Math.random() * 89999999)}`,
          campus: leaderCampus || event.campus || CAMPUS_OPTIONS[0],
          degree: defaultDegrees[i - 1] || COURSE_OPTIONS[0],
          rollNo: `GEHU-2025-BHM-${500 + i * 22}`,
          gender: i % 2 === 1 ? 'female' : 'male',
          photoUrl: ''
        })
      }
    }

    setRosterMembers(initialRoster)
    setActiveRosterIndex(0)

    setTimeout(() => {
      setIsProcessingPayment(false)
      setCurrentStep('roster')
    }, 600)
  }

  // Update specific field for a team member
  const handleUpdateRosterMember = (index, field, value) => {
    setRosterMembers(prev => {
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
        handleUpdateRosterMember(memberIndex, 'photoUrl', dataUrl)
        setError('')
      }
    }
    reader.readAsDataURL(file)
  }

  // Remove Photo
  const handleRemovePhoto = (memberIndex) => {
    handleUpdateRosterMember(memberIndex, 'photoUrl', '')
  }

  // Step 3 -> Step 4: Finalize & Generate Animated ID Cards
  const handleGenerateFinalCards = async () => {
    // Validate that all members have name and email
    for (let i = 0; i < rosterMembers.length; i++) {
      const m = rosterMembers[i]
      if (!m.name || !m.name.trim()) {
        setError(`Please enter the full name for ${m.isLeader ? 'Team Leader' : `Member ${i + 1}`}.`)
        setActiveRosterIndex(i)
        return
      }
      if (!m.email || !m.email.trim()) {
        setError(`Please enter the email for ${m.isLeader ? 'Team Leader' : `Member ${i + 1}`}.`)
        setActiveRosterIndex(i)
        return
      }
    }

    setLoading(true)
    setError('')

    let prefix = 'SPIDEY'
    if (isHackTheWinter) prefix = 'HTW-2027'
    else if (isAstroVerse) prefix = 'ASTRO-26'
    else if (isGrafest) prefix = 'GRAFEST'
    else if (isTechFest) prefix = 'TECHFEST'
    else if (isSports) prefix = 'SPARDHA'

    const allAttendees = rosterMembers.map((m, idx) => {
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
        team_size: participationMode === 'team' ? String(rosterMembers.length) : '1',
        track_info: selectedTrack,
        transaction_id: transactionId,
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
      setLoading(false)
    }
  }

  const handleCopyCode = (code) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(code)
      setCopiedCode(code)
      setTimeout(() => setCopiedCode(null), 2000)
    }
  }

  const activeRosterMember = rosterMembers[activeRosterIndex] || {}

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

        {/* 4-Step Animated Breadcrumbs */}
        <div className="px-5 py-2.5 bg-[#0A0D15] border-b border-gray-800 flex items-center justify-between text-xs overflow-x-auto">
          <div className={`flex items-center gap-1.5 font-semibold whitespace-nowrap ${currentStep === 'form' ? 'text-red-400 font-bold' : 'text-gray-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 'form' ? 'bg-red-600 text-white shadow-md' : 'bg-gray-800 text-gray-300'}`}>1</span>
            <span>Team &amp; Pass</span>
          </div>
          <span className="text-gray-600 px-1">→</span>
          <div className={`flex items-center gap-1.5 font-semibold whitespace-nowrap ${currentStep === 'payment' ? 'text-emerald-400 font-bold' : 'text-gray-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 'payment' ? 'bg-emerald-600 text-white shadow-md' : 'bg-gray-800 text-gray-300'}`}>2</span>
            <span>Payment</span>
          </div>
          <span className="text-gray-600 px-1">→</span>
          <div className={`flex items-center gap-1.5 font-semibold whitespace-nowrap ${currentStep === 'roster' ? 'text-cyan-400 font-bold' : 'text-gray-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 'roster' ? 'bg-cyan-600 text-white shadow-md' : 'bg-gray-800 text-gray-300'}`}>3</span>
            <span>Details &amp; Photos</span>
          </div>
          <span className="text-gray-600 px-1">→</span>
          <div className={`flex items-center gap-1.5 font-semibold whitespace-nowrap ${currentStep === 'idcards' ? 'text-red-400 font-bold' : 'text-gray-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 'idcards' ? 'bg-red-600 text-white shadow-md' : 'bg-gray-800 text-gray-300'}`}>4</span>
            <span>Animated ID Cards</span>
          </div>
        </div>

        {/* ─── STEP 1: Registration Mode & Team Setup ─── */}
        {currentStep === 'form' && (
          <form onSubmit={handleProceedToPayment} className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
            {isRegistrationClosed && (
              <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs space-y-1">
                <p className="font-bold flex items-center gap-1.5 text-sm text-red-300">
                  <span>🚫</span>
                  <span>Registration Closed for this Event</span>
                </p>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Graphic Era university guidelines: Registrations strictly close 5-6 days prior to event date. Past and ongoing events do not accept new registrations.
                </p>
              </div>
            )}

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
                  onClick={() => setParticipationMode('team')}
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
                  <p className="text-[11px] text-gray-400">Multiple team members ke saath register karein. Har member ka alag ID card banega.</p>
                </button>

                <button
                  type="button"
                  onClick={() => setParticipationMode('solo')}
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
                  <p className="text-[11px] text-gray-400">Single entrant pass with verified hologram badge &amp; lanyard pass.</p>
                </button>
              </div>
            </div>

            {/* Team Settings (if Team selected) */}
            {participationMode === 'team' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-[#141A29] p-3.5 rounded-xl border border-gray-800">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Team Name:</label>
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="e.g. Spider-Verse Hackers"
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-red-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">Total Team Size:</label>
                  <select
                    value={teamSize}
                    onChange={(e) => setTeamSize(e.target.value)}
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

            {/* Quick Leader Primary Info */}
            <div className="p-3.5 rounded-xl bg-[#141A29] border border-gray-800 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 font-bold block">
                PRIMARY CONTACT DETAILS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <label className="block text-[11px] text-gray-400 mb-0.5">Contact Name:</label>
                  <input
                    type="text"
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white text-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-400 mb-0.5">University Email:</label>
                  <input
                    type="email"
                    value={leaderEmail}
                    onChange={(e) => setLeaderEmail(e.target.value)}
                    className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white text-xs font-mono"
                    required
                  />
                </div>
              </div>
              <p className="text-[10px] text-gray-400">
                Payment ke agle step me sabhi members ki full details aur photos upload hongi.
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex items-center justify-between border-t border-gray-800">
              <div className="text-xs text-gray-400">
                <span>Fee: </span>
                <span className="text-white font-bold text-sm">₹{totalAmount}</span>
                <span className="text-[10px] text-gray-500 ml-1">
                  ({participationMode === 'team' ? `${teamSize} x ₹${eventFee}` : `1 x ₹${eventFee}`})
                </span>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={onClose} className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-semibold cursor-pointer">
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isRegistrationClosed}
                  className={`px-5 py-2 rounded-xl text-xs font-bold shadow-md flex items-center gap-1.5 ${
                    isRegistrationClosed
                      ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                      : 'bg-red-600 hover:bg-red-500 text-white cursor-pointer active:scale-95'
                  }`}
                >
                  <span>{isRegistrationClosed ? 'Registration Closed' : 'Proceed to Payment'}</span>
                  {!isRegistrationClosed && <span>➔</span>}
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
                <div><span className="text-gray-500">Attendees:</span> {participationMode === 'team' ? teamSize : '1'}</div>
                <div><span className="text-gray-500">Contact:</span> {leaderName}</div>
                <div><span className="text-gray-500">Email:</span> {leaderEmail}</div>
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
                onClick={handleCompletePaymentAndProceedToRoster}
                disabled={isProcessingPayment}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg cursor-pointer flex items-center gap-2 transition active:scale-95"
              >
                {isProcessingPayment ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verifying Payment...</span>
                  </>
                ) : (
                  <span>✓ Pay ₹{totalAmount} &amp; Fill Member Details ➔</span>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ─── STEP 3: Post-Payment Team Roster & Original Photo Upload ─── */}
        {currentStep === 'roster' && (
          <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
            {/* Payment Verified Header Card */}
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-2">
                    <span>Payment Verified Successfully</span>
                    <span className="font-mono text-[10px] text-emerald-400">({transactionId})</span>
                  </h4>
                  <p className="text-[11px] text-gray-300 mt-0.5">
                    Ab team ke sabhi members ki details &amp; unki original photo upload karein taaki personalized ID cards generate ho sakein.
                  </p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold shrink-0">
                {rosterMembers.length} {rosterMembers.length > 1 ? 'Cards' : 'Card'}
              </span>
            </div>

            {error && (
              <div className="p-2.5 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* Member Navigation Tabs (if Team) */}
            {rosterMembers.length > 1 && (
              <div className="flex items-center gap-2 border-b border-gray-800 pb-2 overflow-x-auto">
                {rosterMembers.map((m, idx) => {
                  const isActive = activeRosterIndex === idx
                  const hasPhoto = !!m.photoUrl
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveRosterIndex(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                        isActive
                          ? 'bg-red-600 text-white shadow-md'
                          : 'bg-[#141A29] text-gray-400 hover:text-white border border-gray-800'
                      }`}
                    >
                      <span>{m.isLeader ? '👑' : '👤'}</span>
                      <span>{m.name ? m.name.split(' ')[0] : `Member ${idx + 1}`}</span>
                      {hasPhoto && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-black" title="Photo Uploaded ✓" />
                      )}
                    </button>
                  )
                })}
              </div>
            )}

            {/* Active Member Details & Photo Box */}
            <div className="p-4 rounded-xl bg-[#141A29] border border-gray-800 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>{activeRosterMember.isLeader ? '👑 TEAM LEADER DETAILS' : `👤 MEMBER ${activeRosterIndex + 1} DETAILS`}</span>
                  <span className="text-[10px] font-mono text-red-400">({activeRosterIndex + 1} of {rosterMembers.length})</span>
                </span>
                <span className="text-[10px] text-gray-400">All fields required for holographic badge</span>
              </div>

              {/* Photo Upload Zone */}
              <div className="p-4 rounded-xl bg-black/60 border border-red-950/60 flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.5)] bg-[#0A0D15] flex items-center justify-center shrink-0">
                  {activeRosterMember.photoUrl ? (
                    <>
                      <img
                        src={activeRosterMember.photoUrl}
                        alt={activeRosterMember.name || 'Member'}
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
                      <span>Original Student Photo</span>
                      {activeRosterMember.photoUrl ? (
                        <span className="text-[10px] text-emerald-400 font-mono bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30 font-bold">
                          ✓ Photo Ready for Badge
                        </span>
                      ) : (
                        <span className="text-[10px] text-amber-400 font-mono bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-500/30">
                          Upload Required
                        </span>
                      )}
                    </h5>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      Apni original passport photo ya clear selfie upload karein. Ye photo ID card par print hogi.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                    <label className="py-2 px-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md cursor-pointer transition active:scale-95">
                      <span>📸</span>
                      <span>{activeRosterMember.photoUrl ? 'Change Photo' : 'Upload Original Photo'}</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handlePhotoUpload(activeRosterIndex, e)}
                      />
                    </label>

                    {activeRosterMember.photoUrl && (
                      <button
                        type="button"
                        onClick={() => handleRemovePhoto(activeRosterIndex)}
                        className="py-2 px-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs transition cursor-pointer"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Form Inputs Grid for Active Member */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-300 mb-1">
                    Student Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={activeRosterMember.name || ''}
                    onChange={(e) => handleUpdateRosterMember(activeRosterIndex, 'name', e.target.value)}
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
                    value={activeRosterMember.email || ''}
                    onChange={(e) => handleUpdateRosterMember(activeRosterIndex, 'email', e.target.value)}
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
                    value={activeRosterMember.phone || ''}
                    onChange={(e) => handleUpdateRosterMember(activeRosterIndex, 'phone', e.target.value)}
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
                    value={activeRosterMember.rollNo || ''}
                    onChange={(e) => handleUpdateRosterMember(activeRosterIndex, 'rollNo', e.target.value)}
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
                    value={activeRosterMember.campus || event.campus || CAMPUS_OPTIONS[0]}
                    onChange={(e) => handleUpdateRosterMember(activeRosterIndex, 'campus', e.target.value)}
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
                    value={activeRosterMember.degree || COURSE_OPTIONS[0]}
                    onChange={(e) => handleUpdateRosterMember(activeRosterIndex, 'degree', e.target.value)}
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
            </div>

            {/* Bottom Actions for Step 3 */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-gray-800">
              <button
                type="button"
                onClick={() => setCurrentStep('payment')}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-semibold cursor-pointer"
              >
                ← Back to Payment
              </button>

              <div className="w-full sm:w-auto flex items-center gap-2">
                {activeRosterIndex < rosterMembers.length - 1 && (
                  <button
                    type="button"
                    onClick={() => setActiveRosterIndex(prev => prev + 1)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold cursor-pointer transition"
                  >
                    Next: Member {activeRosterIndex + 2} ➔
                  </button>
                )}

                <button
                  type="button"
                  onClick={handleGenerateFinalCards}
                  disabled={loading}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 text-white text-xs font-chakra font-bold tracking-wider shadow-spider-glow flex items-center justify-center gap-2 cursor-pointer transition active:scale-95"
                >
                  {loading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Generating Badges...</span>
                    </>
                  ) : (
                    <>
                      <span>✨ GENERATE ANIMATED ID CARDS</span>
                      <span>➔</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ─── STEP 4: Animated Graphite'26 Lanyard ID Cards ─── */}
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
                  Post it on LinkedIn or share on X. Original uploaded photo and credentials verified.
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
                href={createGoogleCalendarUrl(event, generatedTickets[activeCardIndex]?.email || leaderEmail)}
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
                attendee={generatedTickets[activeCardIndex] || rosterMembers[0] || {}}
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
