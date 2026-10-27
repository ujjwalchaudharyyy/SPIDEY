import React, { useState, useRef } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import { syncRegistrationToGoogleSheet } from '../utils/googleSheetsSync'
import { createGoogleCalendarUrl } from '../utils/calendarUtils'

// ─── Graphite'26-Style Animated 3D Character Avatar ───
// Red-glowing Spider-Man inspired character with gender variants
function SpideyAvatar({ gender = 'male', avatarId = 1 }) {
  const isFemale = gender === 'female'
  // Each avatar gets unique color shifts
  const hue = (avatarId * 37) % 360

  return (
    <div className="relative w-full aspect-square flex items-center justify-center">
      {/* Animated red glow ring behind avatar */}
      <div
        className="absolute inset-0 rounded-full opacity-60"
        style={{
          background: `radial-gradient(circle, ${isFemale ? 'rgba(220,38,38,0.5)' : 'rgba(220,38,38,0.45)'} 0%, transparent 70%)`,
          animation: 'pulse-glow 2.5s ease-in-out infinite alternate'
        }}
      />
      {/* Second softer glow layer */}
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
          {/* Spider web pattern for suit */}
          <pattern id={`web_${avatarId}`} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <line x1="6" y1="0" x2="6" y2="12" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
            <line x1="0" y1="6" x2="12" y2="6" stroke="rgba(0,0,0,0.15)" strokeWidth="0.5" />
            <line x1="0" y1="0" x2="12" y2="12" stroke="rgba(0,0,0,0.08)" strokeWidth="0.3" />
            <line x1="12" y1="0" x2="0" y2="12" stroke="rgba(0,0,0,0.08)" strokeWidth="0.3" />
          </pattern>
        </defs>

        {/* Background glow */}
        <circle cx="60" cy="65" r="55" fill={`url(#glow_${avatarId})`} />

        {/* Body / Spider-themed Suit */}
        <path
          d="M 25 130 Q 60 100 95 130 L 95 140 L 25 140 Z"
          fill={`url(#suit_${gender}_${avatarId})`}
        />
        <path
          d="M 25 130 Q 60 100 95 130 L 95 140 L 25 140 Z"
          fill={`url(#web_${avatarId})`}
        />
        {/* Suit collar */}
        <path d="M 48 108 L 60 125 L 72 108 Z" fill="#0F172A" />
        {/* Spider emblem on chest */}
        <g transform="translate(52, 114) scale(0.5)" opacity="0.7">
          <path d="M 8 0 L 10 6 L 16 6 L 11 10 L 13 16 L 8 12 L 3 16 L 5 10 L 0 6 L 6 6 Z" fill="#FCA5A5" />
        </g>

        {/* Neck */}
        <rect x="51" y="85" width="18" height="22" rx="5" fill={`url(#skin_${gender}_${avatarId})`} />

        {/* Head */}
        {isFemale ? (
          <ellipse cx="60" cy="58" rx="24" ry="28" fill={`url(#skin_${gender}_${avatarId})`} />
        ) : (
          <path
            d="M 36 48 Q 36 85 60 86 Q 84 85 84 48 Q 84 30 60 30 Q 36 30 36 48 Z"
            fill={`url(#skin_${gender}_${avatarId})`}
          />
        )}

        {/* Hair (back layer) */}
        {isFemale && (
          <path
            d="M 30 48 Q 25 78 32 105 Q 40 82 42 62 Q 60 22 78 62 Q 80 82 88 105 Q 95 78 90 48 Q 88 22 60 20 Q 32 22 30 48 Z"
            fill={`url(#hair_${gender}_${avatarId})`}
          />
        )}

        {/* Hair (front) */}
        {isFemale ? (
          <path
            d="M 34 44 Q 48 26 60 36 Q 72 26 86 44 Q 78 28 60 24 Q 42 28 34 44 Z"
            fill={`url(#hair_${gender}_${avatarId})`}
          />
        ) : (
          <path
            d="M 34 46 Q 42 20 60 20 Q 78 20 86 42 Q 78 26 66 26 Q 52 24 46 34 Q 40 40 34 46 Z"
            fill={`url(#hair_${gender}_${avatarId})`}
          />
        )}

        {/* Eyes */}
        <ellipse cx="50" cy="58" rx="4.5" ry="5" fill="#0F172A" />
        <ellipse cx="70" cy="58" rx="4.5" ry="5" fill="#0F172A" />
        {/* Eye highlights */}
        <circle cx="51.5" cy="56.5" r="1.8" fill="#FFFFFF" />
        <circle cx="71.5" cy="56.5" r="1.8" fill="#FFFFFF" />
        {/* Small secondary highlight */}
        <circle cx="48.5" cy="59" r="0.8" fill="rgba(255,255,255,0.5)" />
        <circle cx="68.5" cy="59" r="0.8" fill="rgba(255,255,255,0.5)" />

        {/* Eyebrows */}
        <path d="M 44 51 Q 50 48 56 51" stroke="#1E293B" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M 64 51 Q 70 48 76 51" stroke="#1E293B" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Nose */}
        <path d="M 60 62 Q 58 66 60 67 Q 62 66 60 62" fill="rgba(0,0,0,0.1)" />

        {/* Smile */}
        <path
          d="M 52 72 Q 60 78 68 72"
          stroke="#991B1B"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Blush (female) */}
        {isFemale && (
          <>
            <circle cx="42" cy="66" r="4" fill="#FB7185" opacity="0.45" />
            <circle cx="78" cy="66" r="4" fill="#FB7185" opacity="0.45" />
          </>
        )}

        {/* Glasses for odd avatars */}
        {avatarId % 2 === 1 && (
          <g stroke="#DC2626" strokeWidth="1.5" fill="none" opacity="0.6">
            <rect x="43" y="53" width="14" height="10" rx="4" fill="rgba(220,38,38,0.08)" />
            <rect x="63" y="53" width="14" height="10" rx="4" fill="rgba(220,38,38,0.08)" />
            <line x1="57" y1="58" x2="63" y2="58" />
          </g>
        )}

        {/* Ears */}
        {!isFemale && (
          <>
            <ellipse cx="36" cy="58" rx="4" ry="6" fill={isFemale ? '#FFDFC4' : '#F0C8A0'} />
            <ellipse cx="84" cy="58" rx="4" ry="6" fill={isFemale ? '#FFDFC4' : '#F0C8A0'} />
          </>
        )}
      </svg>
    </div>
  )
}

// ─── Lanyard-Style ID Card Component (Graphite'26 Inspired) ───
function LanyardIDCard({ attendee, event, teamName, participationMode, selectedTrack, index, onCopy, copiedCode }) {
  const isFemale = attendee.gender === 'female'
  const cardRef = useRef(null)

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`Just registered for ${event.title}! 🚀 My pass code: ${attendee.ticketCode} #SPIDEY #GraphicEra`)
    window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank')
  }

  const handleShareLinkedIn = () => {
    const text = encodeURIComponent(`Excited to participate in ${event.title} at Graphic Era University! 🎯 #GraphicEra #SPIDEY`)
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://gehu.ac.in')}&title=${text}`, '_blank')
  }

  const handleSaveCard = () => {
    window.print()
  }

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto">
      {/* ─── Lanyard Ribbon ─── */}
      <div className="relative w-full flex flex-col items-center">
        {/* Ribbon going up */}
        <div
          className="w-5 rounded-t-sm"
          style={{
            height: '60px',
            background: 'linear-gradient(180deg, #DC2626 0%, #B91C1C 100%)',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.4)'
          }}
        />
        {/* Metal clip */}
        <div className="w-8 h-3 bg-gradient-to-b from-gray-300 to-gray-500 rounded-b-sm shadow-md" />
        {/* Small ring */}
        <div className="w-4 h-4 border-2 border-gray-400 rounded-full -mt-1 bg-transparent" />
      </div>

      {/* ─── The Actual Badge Card ─── */}
      <div
        ref={cardRef}
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl -mt-2"
        style={{
          background: 'linear-gradient(160deg, #1A0A0A 0%, #0D0D0D 40%, #1A0505 100%)',
          border: '1px solid rgba(220,38,38,0.25)'
        }}
      >
        {/* Red accent line at top */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />

        {/* Event Tag Badge */}
        <div className="px-4 pt-4 pb-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/80 border border-red-800/50">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] font-bold text-red-300 uppercase tracking-widest">
              {attendee.isLeader ? 'LEADER' : 'MEMBER'} AT {event.title?.split(':')[0]?.split('–')[0]?.toUpperCase().trim().slice(0, 25) || 'SPIDEY'}
            </span>
          </div>
        </div>

        {/* Avatar Area with Glow */}
        <div className="px-8 py-2">
          <div className="relative w-44 h-44 mx-auto">
            <SpideyAvatar
              gender={attendee.gender || 'male'}
              avatarId={index + 1}
            />
          </div>
        </div>

        {/* Name - Big & Bold (like Graphite'26 shows "deepak") */}
        <div className="text-center px-4 pb-2">
          <h2
            className="text-3xl font-black tracking-tight lowercase"
            style={{
              color: '#DC2626',
              textShadow: '0 0 30px rgba(220,38,38,0.4), 0 0 60px rgba(220,38,38,0.15)'
            }}
          >
            {attendee.name?.split(' ')[0]?.toLowerCase() || 'student'}
          </h2>
          {attendee.name?.split(' ').length > 1 && (
            <p className="text-sm text-red-400/70 font-medium -mt-0.5">
              {attendee.name?.split(' ').slice(1).join(' ').toLowerCase()}
            </p>
          )}
        </div>

        {/* Details Grid */}
        <div className="px-4 pb-3">
          <div className="bg-black/40 rounded-xl p-3 border border-red-950/40 space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-500 uppercase tracking-wider text-[9px]">Roll No</span>
              <span className="text-gray-300 font-mono font-semibold">{attendee.rollNo}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-500 uppercase tracking-wider text-[9px]">Email</span>
              <span className="text-gray-300 text-[10px]">{attendee.email}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-500 uppercase tracking-wider text-[9px]">Degree</span>
              <span className="text-gray-300 text-[10px]">{attendee.degree}</span>
            </div>
            {participationMode === 'team' && (
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-gray-500 uppercase tracking-wider text-[9px]">Team</span>
                <span className="text-red-400 font-semibold text-[10px]">{teamName}</span>
              </div>
            )}
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-gray-500 uppercase tracking-wider text-[9px]">Track</span>
              <span className="text-gray-300 text-[10px] truncate max-w-[180px]">{selectedTrack}</span>
            </div>
          </div>
        </div>

        {/* Pass Code Section */}
        <div className="px-4 pb-3">
          <div className="flex items-center justify-between bg-red-950/30 border border-red-900/40 rounded-lg px-3 py-2">
            <div>
              <span className="text-[8px] text-gray-500 uppercase tracking-widest block">PASS CODE</span>
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

        {/* Bottom accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-red-800/50 to-transparent" />

        {/* Campus & Event Footer */}
        <div className="px-4 py-2.5 flex items-center justify-between text-[9px] text-gray-600">
          <span className="font-mono uppercase tracking-wider">{attendee.campus?.split(' ').slice(-1)[0] || 'GEHU'} CAMPUS</span>
          <span className="font-mono">SPIDEY '26</span>
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
          <span>SAVE CARD IMAGE</span>
        </button>
      </div>
    </div>
  )
}

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

  // Detect event type
  const isHackTheWinter = event.title?.toLowerCase().includes('winter')
  const isAstroVerse = event.title?.toLowerCase().includes('astro')
  const isGrafest = event.title?.toLowerCase().includes('grafest')
  const isTechFest = event.title?.toLowerCase().includes('infotsav') || (event.category === 'Technical' && !isHackTheWinter && !isAstroVerse)
  const isSports = event.category === 'Sports' || event.title?.toLowerCase().includes('spardha')

  // Multi-step modal navigation: 'form' -> 'payment' -> 'idcards'
  const [currentStep, setCurrentStep] = useState('form')
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  // Team Leader Details
  const defaultEmail = user?.email || 'student.gehu@gmail.com'
  const defaultName = user?.name || (user?.email ? user.email.split('@')[0] : 'Graphic Era Student')

  const [leaderName, setLeaderName] = useState(defaultName)
  const [leaderEmail, setLeaderEmail] = useState(defaultEmail)
  const [leaderPhone, setLeaderPhone] = useState(user?.phone || '+91 98765 43210')
  const [leaderRoll, setLeaderRoll] = useState('GEHU-2026-SPIDEY')
  const [leaderDegree, setLeaderDegree] = useState(user?.degree || 'B.Tech CSE - 3rd Year')
  const [leaderCampus, setLeaderCampus] = useState(user?.campus || event.campus || 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL')
  const [leaderGender, setLeaderGender] = useState('male')

  // Participation Mode: 'solo' or 'team'
  const [participationMode, setParticipationMode] = useState('team')
  const [teamName, setTeamName] = useState(isHackTheWinter ? 'Spider-Hackers Bhimtal' : 'Team Alpha')
  const [teamSize, setTeamSize] = useState('3')

  // Dynamic Team Members list (excluding leader)
  const [teamMembers, setTeamMembers] = useState([
    {
      name: 'Priya Negi',
      email: 'priya.negi.gehu@gmail.com',
      rollNo: 'GEHU-2025-BHM-632',
      phone: '+91 97654 32190',
      degree: 'B.Tech CSE - 2nd Year',
      gender: 'female'
    },
    {
      name: 'Rohit Joshi',
      email: 'rohit.gehu.bhimtal@gmail.com',
      rollNo: 'GEHU-2024-BHM-714',
      phone: '+91 98234 56789',
      degree: 'B.Tech CSE (AI & ML) - 3rd Year',
      gender: 'male'
    }
  ])

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

  // Handle Team Size Change
  const handleTeamSizeChange = (newSizeStr) => {
    const size = parseInt(newSizeStr)
    setTeamSize(newSizeStr)
    const neededMembers = size - 1

    setTeamMembers(prev => {
      const current = [...prev]
      if (current.length < neededMembers) {
        for (let i = current.length; i < neededMembers; i++) {
          current.push({
            name: `Team Member ${i + 2}`,
            email: `member${i + 2}.gehu@gmail.com`,
            rollNo: `GEHU-2025-BHM-${500 + i * 15}`,
            phone: '+91 98123 45678',
            degree: 'B.Tech CSE - 2nd Year',
            gender: i % 2 === 0 ? 'female' : 'male'
          })
        }
      } else if (current.length > neededMembers) {
        current.length = neededMembers
      }
      return current
    })
  }

  // Update specific team member
  const handleUpdateMember = (index, field, value) => {
    setTeamMembers(prev => {
      const next = [...prev]
      next[index] = { ...next[index], [field]: value }
      return next
    })
  }

  // Step 1 -> Step 2
  const handleProceedToPayment = (e) => {
    e.preventDefault()
    if (!leaderName || !leaderEmail || !leaderRoll) {
      setError('Please fill in student name, email, and university roll number.')
      return
    }
    setError('')
    setCurrentStep('payment')
  }

  // Step 2 -> Step 3
  const handleCompletePaymentAndRegister = async () => {
    setIsProcessingPayment(true)
    setError('')

    const txId = 'UPI-' + Math.floor(100000 + Math.random() * 900000)
    setTransactionId(txId)

    let prefix = 'SPIDEY'
    if (isHackTheWinter) prefix = 'HTW-2027'
    else if (isAstroVerse) prefix = 'ASTRO-26'
    else if (isGrafest) prefix = 'GRAFEST'
    else if (isTechFest) prefix = 'TECHFEST'
    else if (isSports) prefix = 'SPARDHA'

    const allAttendees = []

    const leaderCode = `${prefix}-BHM-${Math.floor(1000 + Math.random() * 9000)}`
    allAttendees.push({
      isLeader: true,
      ticketCode: leaderCode,
      name: leaderName,
      email: leaderEmail,
      rollNo: leaderRoll,
      phone: leaderPhone,
      degree: leaderDegree,
      campus: leaderCampus,
      gender: leaderGender,
      roleInTeam: participationMode === 'team' ? 'Team Leader' : 'Solo Entrant'
    })

    if (participationMode === 'team') {
      teamMembers.forEach((m, idx) => {
        const mCode = `${prefix}-BHM-${Math.floor(1000 + Math.random() * 9000)}`
        allAttendees.push({
          isLeader: false,
          ticketCode: mCode,
          name: m.name,
          email: m.email,
          rollNo: m.rollNo,
          phone: m.phone,
          degree: m.degree,
          campus: leaderCampus,
          gender: m.gender || 'male',
          roleInTeam: `Team Member ${idx + 2}`
        })
      })
    }

    try {
      const fullRegRecord = {
        id: Date.now(),
        event_id: event.id,
        event_title: event.title,
        event_category: event.category,
        event_campus: leaderCampus,
        student_name: leaderName,
        student_email: leaderEmail,
        phone: leaderPhone,
        roll_no: leaderRoll,
        degree: leaderDegree,
        campus: leaderCampus,
        ticket_code: leaderCode,
        team_name: participationMode === 'team' ? teamName : 'Solo Entrant',
        team_size: participationMode === 'team' ? teamSize : '1',
        track_info: selectedTrack,
        transaction_id: txId,
        payment_status: 'Paid',
        attendees: allAttendees,
        created_at: new Date().toISOString()
      }

      try {
        await axios.post(`/api/events/${event.id}/register`, {
          student_name: leaderName,
          student_email: leaderEmail,
          phone: leaderPhone,
          roll_no: leaderRoll,
          degree: leaderDegree,
          campus: leaderCampus,
          team_name: fullRegRecord.team_name,
          team_size: fullRegRecord.team_size,
          track_info: selectedTrack,
          details_json: fullRegRecord
        }, { headers })
      } catch (beErr) {
        // Fallback
      }

      const stored = JSON.parse(localStorage.getItem('spider_event_registrations') || '[]')
      localStorage.setItem('spider_event_registrations', JSON.stringify([fullRegRecord, ...stored]))

      syncRegistrationToGoogleSheet(fullRegRecord)

      setGeneratedTickets(allAttendees)
      setPaymentSuccess(true)
      setActiveCardIndex(0)
      setCurrentStep('idcards')
      onSuccess?.(leaderCode)
    } catch (err) {
      setError('Registration processing issue. Please try again.')
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

  const totalAmount = participationMode === 'team' ? eventFee * parseInt(teamSize) : eventFee

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto font-sans">
      {/* Inject keyframe animation */}
      <style>{`
        @keyframes pulse-glow {
          0% { transform: scale(0.95); opacity: 0.4; }
          100% { transform: scale(1.05); opacity: 0.7; }
        }
      `}</style>

      <div className="relative w-full max-w-2xl my-6 bg-[#0E131F] border border-gray-700/80 rounded-2xl shadow-2xl overflow-hidden text-gray-200">

        {/* Modal Top Header */}
        <div className="bg-[#141A29] px-5 py-4 border-b border-gray-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold text-red-400 uppercase tracking-wider mb-0.5">
              <span>●</span>
              <span>OFFICIAL EVENT REGISTRATION</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">{event.campus?.split(' ')?.[3] || 'Bhimtal Campus'}</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white line-clamp-1">
              {event.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-800/80 hover:bg-gray-700 text-gray-300 hover:text-white flex items-center justify-center text-sm font-bold transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* 3-Step Breadcrumbs */}
        <div className="px-5 py-2.5 bg-[#0A0D15] border-b border-gray-800 flex items-center justify-between text-xs">
          <div className={`flex items-center gap-1.5 font-semibold ${currentStep === 'form' ? 'text-red-400' : 'text-gray-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 'form' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}>1</span>
            <span>Team &amp; Details</span>
          </div>
          <span className="text-gray-600">→</span>
          <div className={`flex items-center gap-1.5 font-semibold ${currentStep === 'payment' ? 'text-emerald-400' : 'text-gray-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 'payment' ? 'bg-emerald-600 text-white' : 'bg-gray-800 text-gray-300'}`}>2</span>
            <span>Secure Payment</span>
          </div>
          <span className="text-gray-600">→</span>
          <div className={`flex items-center gap-1.5 font-semibold ${currentStep === 'idcards' ? 'text-red-400' : 'text-gray-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${currentStep === 'idcards' ? 'bg-red-600 text-white' : 'bg-gray-800 text-gray-300'}`}>3</span>
            <span>ID Cards</span>
          </div>
        </div>

        {/* STEP 1: Registration Form */}
        {currentStep === 'form' && (
          <form onSubmit={handleProceedToPayment} className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
            {isRegistrationClosed && (
              <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs space-y-1">
                <p className="font-bold flex items-center gap-1.5 text-sm text-red-300">
                  <span>🚫</span>
                  <span>Registration Closed for this Event</span>
                </p>
                <p className="text-[11px] text-gray-300 leading-relaxed">
                  Graphic Era university guidelines: Registrations strictly close 5-6 days prior to the event date. Past and ongoing events do not accept new registrations.
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
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Participation Mode:
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setParticipationMode('team')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer ${
                    participationMode === 'team'
                      ? 'bg-red-600 text-white border-red-500 shadow-md'
                      : 'bg-[#141A29] text-gray-300 border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <span>👥</span>
                  <span>Team Entry</span>
                </button>
                <button
                  type="button"
                  onClick={() => setParticipationMode('solo')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer ${
                    participationMode === 'solo'
                      ? 'bg-red-600 text-white border-red-500 shadow-md'
                      : 'bg-[#141A29] text-gray-300 border-gray-800 hover:border-gray-700'
                  }`}
                >
                  <span>👤</span>
                  <span>Solo Entry</span>
                </button>
              </div>
            </div>

            {/* Team Settings */}
            {participationMode === 'team' && (
              <div className="p-3.5 rounded-xl bg-[#141A29] border border-gray-800 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-300 mb-1">Team Name:</label>
                    <input
                      type="text"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      placeholder="e.g. Spider-Hackers"
                      className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-gray-300 mb-1">Team Size:</label>
                    <select
                      value={teamSize}
                      onChange={(e) => handleTeamSizeChange(e.target.value)}
                      className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-red-500"
                    >
                      <option value="2">2 Members</option>
                      <option value="3">3 Members</option>
                      <option value="4">4 Members</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Leader Details */}
            <div className="p-3.5 rounded-xl bg-[#141A29] border border-gray-800 space-y-3">
              <div className="flex items-center justify-between border-b border-gray-800 pb-1.5">
                <span className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                  <span>👑</span>
                  <span>{participationMode === 'team' ? 'Team Leader' : 'Attendee Details'}</span>
                </span>
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="text-gray-400">Gender:</span>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="leaderGender" checked={leaderGender === 'male'} onChange={() => setLeaderGender('male')} />
                    <span>Male</span>
                  </label>
                  <label className="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="leaderGender" checked={leaderGender === 'female'} onChange={() => setLeaderGender('female')} />
                    <span>Female</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-[11px] text-gray-300 mb-1">Full Name:</label>
                  <input type="text" value={leaderName} onChange={(e) => setLeaderName(e.target.value)} className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-red-500" required />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-300 mb-1">Roll Number:</label>
                  <input type="text" value={leaderRoll} onChange={(e) => setLeaderRoll(e.target.value)} className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-red-500 font-mono" required />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-300 mb-1">Email:</label>
                  <input type="email" value={leaderEmail} onChange={(e) => setLeaderEmail(e.target.value)} className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-red-500" required />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-300 mb-1">Phone:</label>
                  <input type="tel" value={leaderPhone} onChange={(e) => setLeaderPhone(e.target.value)} className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-red-500" required />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-300 mb-1">Degree & Year:</label>
                  <input type="text" value={leaderDegree} onChange={(e) => setLeaderDegree(e.target.value)} className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-red-500" required />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-300 mb-1">Campus:</label>
                  <input type="text" value={leaderCampus} onChange={(e) => setLeaderCampus(e.target.value)} className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-red-500" required />
                </div>
              </div>
            </div>

            {/* Team Members */}
            {participationMode === 'team' && teamMembers.map((member, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#141A29] border border-gray-800 space-y-3">
                <div className="flex items-center justify-between border-b border-gray-800 pb-1.5">
                  <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                    <span>👤</span>
                    <span>Member #{idx + 2}</span>
                  </span>
                  <div className="flex items-center gap-2 text-[11px]">
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" name={`memberGender_${idx}`} checked={member.gender === 'male'} onChange={() => handleUpdateMember(idx, 'gender', 'male')} />
                      <span>Male</span>
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer">
                      <input type="radio" name={`memberGender_${idx}`} checked={member.gender === 'female'} onChange={() => handleUpdateMember(idx, 'gender', 'female')} />
                      <span>Female</span>
                    </label>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-[11px] text-gray-300 mb-1">Name:</label>
                    <input type="text" value={member.name} onChange={(e) => handleUpdateMember(idx, 'name', e.target.value)} className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-cyan-500" required />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-300 mb-1">Roll Number:</label>
                    <input type="text" value={member.rollNo} onChange={(e) => handleUpdateMember(idx, 'rollNo', e.target.value)} className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-cyan-500 font-mono" required />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-300 mb-1">Email:</label>
                    <input type="email" value={member.email} onChange={(e) => handleUpdateMember(idx, 'email', e.target.value)} className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-cyan-500" required />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-300 mb-1">Phone:</label>
                    <input type="tel" value={member.phone} onChange={(e) => handleUpdateMember(idx, 'phone', e.target.value)} className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-cyan-500" />
                  </div>
                </div>
              </div>
            ))}

            {/* Track */}
            <div className="p-3.5 rounded-xl bg-[#141A29] border border-gray-800">
              <label className="block text-[11px] font-semibold text-gray-300 mb-1">Track / Specialization:</label>
              <input
                type="text"
                value={selectedTrack}
                onChange={(e) => setSelectedTrack(e.target.value)}
                className="w-full bg-[#0A0D15] border border-gray-700 rounded-lg px-3 py-1.5 text-xs text-white focus:outline-none focus:border-red-500"
              />
            </div>

            {/* Bottom Actions */}
            <div className="pt-2 flex items-center justify-between border-t border-gray-800">
              <div className="text-xs text-gray-400">
                <span>Fee: </span>
                <span className="text-white font-bold text-sm">{'\u20B9'}{totalAmount}</span>
                <span className="text-[10px] text-gray-500 ml-1">
                  ({participationMode === 'team' ? `${teamSize} x ${'\u20B9'}${eventFee}` : `1 x ${'\u20B9'}${eventFee}`})
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
                      : 'bg-red-600 hover:bg-red-500 text-white cursor-pointer'
                  }`}
                >
                  <span>{isRegistrationClosed ? 'Registration Closed' : 'Proceed to Payment'}</span>
                  {!isRegistrationClosed && <span>➔</span>}
                </button>
              </div>
            </div>
          </form>
        )}

        {/* STEP 2: Payment */}
        {currentStep === 'payment' && (
          <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto">
            <div className="p-4 rounded-xl bg-[#141A29] border border-gray-800 space-y-2 text-xs">
              <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-mono">EVENT REGISTRATION PASS</span>
                  <h4 className="text-sm font-bold text-white">{event.title}</h4>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold">
                  {'\u20B9'}{totalAmount} Total
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-300">
                <div><span className="text-gray-500">Mode:</span> {participationMode === 'team' ? `Team (${teamName})` : 'Solo Entry'}</div>
                <div><span className="text-gray-500">Attendees:</span> {participationMode === 'team' ? teamSize : '1'}</div>
                <div><span className="text-gray-500">Leader:</span> {leaderName}</div>
                <div><span className="text-gray-500">Roll No:</span> {leaderRoll}</div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-2">Payment Mode:</label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button type="button" onClick={() => setPaymentMethod('upi')} className={`p-3 rounded-xl border text-center font-semibold transition cursor-pointer ${paymentMethod === 'upi' ? 'bg-emerald-600 text-white border-emerald-500 shadow-md' : 'bg-[#141A29] text-gray-300 border-gray-800 hover:border-gray-700'}`}>
                  <div className="text-base mb-0.5">{'\u26A1'}</div>
                  <span>UPI</span>
                </button>
                <button type="button" onClick={() => setPaymentMethod('qr')} className={`p-3 rounded-xl border text-center font-semibold transition cursor-pointer ${paymentMethod === 'qr' ? 'bg-emerald-600 text-white border-emerald-500 shadow-md' : 'bg-[#141A29] text-gray-300 border-gray-800 hover:border-gray-700'}`}>
                  <div className="text-base mb-0.5">{'\uD83D\uDCF1'}</div>
                  <span>QR Code</span>
                </button>
                <button type="button" onClick={() => setPaymentMethod('card')} className={`p-3 rounded-xl border text-center font-semibold transition cursor-pointer ${paymentMethod === 'card' ? 'bg-emerald-600 text-white border-emerald-500 shadow-md' : 'bg-[#141A29] text-gray-300 border-gray-800 hover:border-gray-700'}`}>
                  <div className="text-base mb-0.5">{'\uD83D\uDCB3'}</div>
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
                <p className="text-[10px] text-gray-500">0% convenience fees. Instant sync.</p>
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
                <p className="text-xs font-semibold text-white">Scan with any UPI App</p>
                <p className="text-[11px] text-gray-400">Total: <span className="text-emerald-400 font-bold">{'\u20B9'}{totalAmount}</span></p>
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
                {'\u2190'} Back
              </button>
              <button
                type="button"
                onClick={handleCompletePaymentAndRegister}
                disabled={isProcessingPayment}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg cursor-pointer flex items-center gap-2 transition"
              >
                {isProcessingPayment ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <span>{'\u2713'} Pay {'\u20B9'}{totalAmount} &amp; Get ID Cards</span>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Graphite'26-Style Lanyard ID Cards */}
        {currentStep === 'idcards' && (
          <div className="max-h-[82vh] overflow-y-auto" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #0D0505 50%, #0A0A0A 100%)' }}>
            {/* Top Header Bar */}
            <div className="px-5 py-3 flex items-center justify-between border-b border-red-950/40">
              <div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">STICKER CARD / {event.title?.split(':')[0]?.split('–')[0]?.toUpperCase().trim().slice(0, 20) || 'SPIDEY'}</div>
                <h3 className="text-sm font-bold text-white mt-0.5">Your card is ready.</h3>
                <p className="text-[11px] text-gray-400">Post it and tag <span className="text-red-400 font-semibold">SPIDEY'26</span>. The card image goes with your LinkedIn post.</p>
              </div>
              {/* Event Info */}
              <div className="hidden sm:block text-right text-[10px] text-gray-500 space-y-0.5">
                <div><span className="text-gray-600 uppercase">Dates</span> <span className="text-gray-300 ml-1">{event.display_date || event.event_date || 'TBA'}</span></div>
                <div><span className="text-gray-600 uppercase">Venue</span> <span className="text-gray-300 ml-1">{event.campus?.split(' ').slice(-1)[0] || 'GEHU'} campus</span></div>
                <div><span className="text-gray-600 uppercase">TxnID</span> <span className="text-emerald-400 ml-1 font-mono">{transactionId}</span></div>
              </div>

            {/* Google Calendar Quick Sync Banner */}
            <div className="mx-5 my-2 p-3 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-xl">📅</span>
                <div>
                  <p className="font-bold text-blue-200">Google Calendar Direct Link Ready</p>
                  <p className="text-[10px] text-gray-400">Card ke neeche &quot;ADD TO GOOGLE CALENDAR&quot; click karke date mark karein.</p>
                </div>
              </div>
              <a
                href={createGoogleCalendarUrl(event, generatedTickets[activeCardIndex]?.email || leaderEmail)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold flex items-center gap-1"
              >
                <span>Open Calendar</span>
                <span>➔</span>
              </a>
            </div>
            </div>

            {/* Card Navigation Tabs (if multiple members) */}
            {generatedTickets.length > 1 && (
              <div className="px-5 py-2 flex items-center gap-2 border-b border-gray-900 overflow-x-auto">
                {generatedTickets.map((t, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveCardIndex(i)}
                    className={`px-3 py-1 rounded-full text-[11px] font-semibold transition cursor-pointer whitespace-nowrap ${
                      activeCardIndex === i
                        ? 'bg-red-600 text-white shadow-md'
                        : 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                    }`}
                  >
                    {t.isLeader ? `👑 ${t.name?.split(' ')[0]}` : `👤 ${t.name?.split(' ')[0]}`}
                  </button>
                ))}
              </div>
            )}

            {/* The Lanyard ID Card */}
            <div className="px-5 py-6">
              <LanyardIDCard
                attendee={generatedTickets[activeCardIndex]}
                event={event}
                teamName={teamName}
                participationMode={participationMode}
                selectedTrack={selectedTrack}
                index={activeCardIndex}
                onCopy={handleCopyCode}
                copiedCode={copiedCode}
              />
            </div>

            {/* Credits & Close */}
            <div className="px-5 py-3 border-t border-gray-900 flex items-center justify-between">
              <span className="text-[10px] text-gray-600 font-mono">DESIGNED BY SPIDEY PORTAL</span>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-md cursor-pointer transition"
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
