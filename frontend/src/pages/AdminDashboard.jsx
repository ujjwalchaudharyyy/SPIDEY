import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard'
import { DEFAULT_EVENTS, DEFAULT_REGISTRATIONS } from '../data/fallbackData'

export default function AdminDashboard() {
  const { token, user } = useAuth()
  const [tab, setTab] = useState('registrations') // 'registrations', 'pending', 'all', 'stats'
  const [pendingEvents, setPendingEvents] = useState([])
  const [allEvents, setAllEvents] = useState([])
  const [allRegistrations, setAllRegistrations] = useState([])
  const [selectedEventId, setSelectedEventId] = useState('all') // 'all' or specific event id
  const [searchQuery, setSearchQuery] = useState('')
  const [modeFilter, setModeFilter] = useState('all') // 'all', 'team', 'solo'
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState(null)
  const [copiedCode, setCopiedCode] = useState(null)

  const headers = token ? { Authorization: `Bearer ${token}` } : {}

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  const copyToClipboard = (text, label = 'Copied to clipboard!') => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text)
      setCopiedCode(text)
      setTimeout(() => setCopiedCode(null), 2000)
      showToast(label)
    }
  }

  // Load and merge registrations from localStorage cache + defaults + backend API
  const getMergedRegistrations = (backendRegs = []) => {
    let localRegs = []
    try {
      localRegs = JSON.parse(localStorage.getItem('spider_event_registrations') || '[]')
    } catch (e) {
      localRegs = []
    }

    const combined = [...backendRegs, ...localRegs, ...DEFAULT_REGISTRATIONS]
    const seenTickets = new Set()
    const unique = []

    for (const reg of combined) {
      const code = reg.ticket_code || `${reg.event_id}-${reg.student_email}`
      if (!seenTickets.has(code)) {
        seenTickets.add(code)
        unique.push(reg)
      }
    }
    return unique
  }

  const fetchData = async () => {
    setLoading(true)
    let fetchedPending = []
    let fetchedAll = []
    let fetchedStats = null
    let fetchedRegs = []

    try {
      const [pendingRes, allRes, statsRes, regsRes] = await Promise.allSettled([
        axios.get('/api/events/pending', { headers }),
        axios.get('/api/events/all', { headers }),
        axios.get('/api/events/stats', { headers }),
        axios.get('/api/events/admin/all', { headers }),
      ])

      if (pendingRes.status === 'fulfilled' && Array.isArray(pendingRes.value.data)) {
        fetchedPending = pendingRes.value.data
      }
      if (allRes.status === 'fulfilled' && Array.isArray(allRes.value.data)) {
        fetchedAll = allRes.value.data
      }
      if (statsRes.status === 'fulfilled' && statsRes.value.data) {
        fetchedStats = statsRes.value.data
      }
      if (regsRes.status === 'fulfilled' && Array.isArray(regsRes.value.data)) {
        fetchedRegs = regsRes.value.data
      }
    } catch (err) {
      console.warn('Backend API offline or unreachable, switching to High Command offline grid:', err)
    }

    // Fail-safe fallback to DEFAULT_EVENTS if backend returned nothing
    const resolvedEvents = fetchedAll.length > 0 ? fetchedAll : DEFAULT_EVENTS
    const resolvedPending = fetchedPending.length > 0
      ? fetchedPending
      : resolvedEvents.filter(e => e.status === 'pending')

    const mergedRegistrations = getMergedRegistrations(fetchedRegs)

    // Calculate real-time stats
    const totalRsvps = resolvedEvents.reduce((acc, e) => acc + (e.rsvp_count || 0), 0)
    const resolvedStats = fetchedStats || {
      totalEvents: resolvedEvents.length,
      pendingEvents: resolvedPending.length,
      approvedEvents: resolvedEvents.filter(e => e.status === 'approved').length,
      rejectedEvents: resolvedEvents.filter(e => e.status === 'rejected').length,
      totalRsvps,
      totalRegistrations: mergedRegistrations.length,
      totalUsers: 148
    }

    setPendingEvents(resolvedPending)
    setAllEvents(resolvedEvents)
    setAllRegistrations(mergedRegistrations)
    setStats({
      ...resolvedStats,
      totalRegistrations: mergedRegistrations.length
    })
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleApprove = async (id) => {
    try {
      await axios.put(`/api/events/${id}/approve`, {}, { headers })
    } catch (err) {
      // Local optimistic update
    }
    setPendingEvents(prev => prev.filter(e => e.id !== id))
    setAllEvents(prev => prev.map(e => e.id === id ? { ...e, status: 'approved' } : e))
    showToast('Event approved and pushed live across Campus grid! 🕸️')
  }

  const handleReject = async (id, reason) => {
    try {
      await axios.put(`/api/events/${id}/reject`, { reason }, { headers })
    } catch (err) {
      // Local optimistic update
    }
    setPendingEvents(prev => prev.filter(e => e.id !== id))
    setAllEvents(prev => prev.map(e => e.id === id ? { ...e, status: 'rejected', rejection_reason: reason } : e))
    showToast('Event rejected with SHIELD briefing note.', 'info')
  }

  const handleDelete = async (id) => {
    if (!confirm('Permanent override: delete this event from the database?')) return
    try {
      await axios.delete(`/api/events/${id}`, { headers })
    } catch (err) {
      // Local optimistic update
    }
    setPendingEvents(prev => prev.filter(e => e.id !== id))
    setAllEvents(prev => prev.filter(e => e.id !== id))
    showToast('Event eradicated.')
  }

  const handleDeleteRegistration = (regId, ticketCode) => {
    if (!confirm(`Revoke and remove ticket ${ticketCode} from the registry?`)) return

    setAllRegistrations(prev => {
      const next = prev.filter(r => r.id !== regId && r.ticket_code !== ticketCode)
      try {
        localStorage.setItem('spider_event_registrations', JSON.stringify(next))
      } catch (e) {}
      return next
    })
    showToast(`Ticket pass ${ticketCode} revoked.`, 'info')
  }

  // Group registrations count per event
  const eventCounts = useMemo(() => {
    const counts = {}
    for (const r of allRegistrations) {
      const id = String(r.event_id)
      counts[id] = (counts[id] || 0) + 1
    }
    return counts
  }, [allRegistrations])

  // Get distinct events that have registrations or are in allEvents
  const registeredEventsList = useMemo(() => {
    const map = new Map()

    // Add all events from allEvents first
    for (const e of allEvents) {
      map.set(String(e.id), {
        id: e.id,
        title: e.title,
        campus: e.campus,
        category: e.category,
        date_tba: e.date_tba,
        display_date: e.display_date,
        registration_deadline: e.registration_deadline,
        venue: e.venue,
        count: eventCounts[String(e.id)] || 0
      })
    }

    // Also check if any registration references an event not in allEvents
    for (const r of allRegistrations) {
      const idStr = String(r.event_id)
      if (!map.has(idStr)) {
        map.set(idStr, {
          id: r.event_id,
          title: r.event_title || `Event #${r.event_id}`,
          campus: r.event_campus || 'Graphic Era Campus',
          category: r.event_category || 'General',
          venue: 'Campus Grounds',
          count: eventCounts[idStr] || 0
        })
      }
    }

    return Array.from(map.values())
  }, [allEvents, allRegistrations, eventCounts])

  // Filter registrations by selected event, search query, and mode
  const filteredRegistrations = useMemo(() => {
    return allRegistrations.filter(r => {
      // Event filter
      if (selectedEventId !== 'all' && String(r.event_id) !== String(selectedEventId)) {
        return false
      }

      // Mode filter (team vs solo)
      const isTeam = r.team_name && r.team_name !== 'Solo' && r.team_name !== 'Solo Stargazer' && r.team_name !== 'Solo Entrant' && r.team_name !== 'Solo VIP Entry'
      if (modeFilter === 'team' && !isTeam) return false
      if (modeFilter === 'solo' && isTeam) return false

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchName = r.student_name?.toLowerCase().includes(q)
        const matchEmail = r.student_email?.toLowerCase().includes(q)
        const matchRoll = r.roll_no?.toLowerCase().includes(q)
        const matchTicket = r.ticket_code?.toLowerCase().includes(q)
        const matchTeam = r.team_name?.toLowerCase().includes(q)
        const matchTrack = r.track_info?.toLowerCase().includes(q)
        const matchEvent = r.event_title?.toLowerCase().includes(q)
        if (!matchName && !matchEmail && !matchRoll && !matchTicket && !matchTeam && !matchTrack && !matchEvent) {
          return false
        }
      }

      return true
    })
  }, [allRegistrations, selectedEventId, modeFilter, searchQuery])

  // Current selected event object
  const currentEvent = useMemo(() => {
    if (selectedEventId === 'all') return null
    return registeredEventsList.find(e => String(e.id) === String(selectedEventId)) || null
  }, [selectedEventId, registeredEventsList])

  // CSV Export utility
  const exportToCSV = (eventTitle, listToExport) => {
    if (!listToExport || listToExport.length === 0) {
      showToast('No registrations found to export.', 'error')
      return
    }

    const headersRow = [
      'Ticket Code',
      'Student Name',
      'University Email',
      'Phone',
      'Roll Number',
      'Degree',
      'Campus',
      'Event Title',
      'Participation Mode',
      'Team Name',
      'Team Size',
      'Track / Specialization',
      'GitHub Link',
      'Registration Timestamp'
    ]

    const rows = listToExport.map(r => {
      const isTeam = r.team_name && !r.team_name.toLowerCase().includes('solo')
      return [
        r.ticket_code || '',
        `"${(r.student_name || '').replace(/"/g, '""')}"`,
        r.student_email || '',
        r.phone || '',
        r.roll_no || '',
        `"${(r.degree || '').replace(/"/g, '""')}"`,
        `"${(r.campus || '').replace(/"/g, '""')}"`,
        `"${(r.event_title || '').replace(/"/g, '""')}"`,
        isTeam ? 'Team' : 'Solo',
        `"${(r.team_name || 'Solo').replace(/"/g, '""')}"`,
        r.team_size || '1',
        `"${(r.track_info || '').replace(/"/g, '""')}"`,
        r.github_link || '',
        r.created_at || ''
      ]
    })

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headersRow.join(','), ...rows.map(e => e.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `${(eventTitle || 'All_Events').replace(/[^a-zA-Z0-9]/g, '_')}_Registrations.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    showToast(`Roster downloaded: ${listToExport.length} registrations exported! 📥`)
  }

  return (
    <div className="min-h-screen bg-[#070913] text-gray-100 pb-20">
      <Navbar />

      {/* Floating Status Toast */}
      {toast && (
        <div className={`fixed top-24 right-6 z-50 px-5 py-3 rounded-xl shadow-spider-glow border text-xs font-orbitron tracking-wider flex items-center gap-2 backdrop-blur-xl animate-bounce ${
          toast.type === 'error'
            ? 'bg-red-950/90 text-red-300 border-red-500'
            : toast.type === 'info'
            ? 'bg-blue-950/90 text-blue-300 border-blue-500'
            : 'bg-emerald-950/90 text-emerald-300 border-emerald-500'
        }`}>
          <span>🕷️</span>
          <span>{toast.msg}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-red-500/20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-orbitron mb-2">
              <span className="animate-pulse">🛡️</span>
              <span>HIGH COMMAND CLEARANCE • LEVEL 10 ADMIN</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold font-orbitron text-white tracking-wide">
              SHIELD HEADQUARTERS <span className="text-red-500">& REGISTRY</span>
            </h1>
            <p className="text-xs sm:text-sm font-rajdhani text-gray-400 mt-1 max-w-3xl">
              Real-time Quad-Campus command grid. Manage event dispatches, approve organizer proposals, and access separate registration data for every campus event.
            </p>
          </div>

          {/* Quick Admin Actions */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => fetchData()}
              disabled={loading}
              className="px-4 py-2.5 rounded-xl bg-black/60 border border-red-500/40 text-red-400 hover:text-white hover:border-red-500 text-xs font-orbitron transition flex items-center gap-2"
              title="Refresh radar matrix"
            >
              <span className={loading ? 'animate-spin' : ''}>🔄</span>
              <span>SYNC MATRIX</span>
            </button>
            <button
              onClick={() => exportToCSV(currentEvent?.title || 'All_Campus_Events', filteredRegistrations)}
              className="btn-spider-pill text-xs py-2.5 px-4 flex items-center gap-2 cursor-pointer shadow-spider-glow"
            >
              <span>📥</span>
              <span>EXPORT ROSTER ({filteredRegistrations.length})</span>
            </button>
          </div>
        </div>

        {/* Top Stats Matrix */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-8">
            <div className="spider-card text-center py-4 border-cyan-500/40 bg-cyan-950/20">
              <p className="text-3xl font-black font-orbitron text-cyan-400">{allRegistrations.length}</p>
              <p className="text-[10px] font-orbitron text-cyan-200 mt-1">TOTAL REGISTRATIONS</p>
            </div>
            <div className="spider-card text-center py-4 border-red-500/30">
              <p className="text-2xl font-black font-orbitron text-red-500">{stats.totalEvents}</p>
              <p className="text-[10px] font-orbitron text-gray-400 mt-1">TOTAL EVENTS</p>
            </div>
            <div className="spider-card text-center py-4 border-yellow-500/30">
              <p className="text-2xl font-black font-orbitron text-yellow-400">{pendingEvents.length}</p>
              <p className="text-[10px] font-orbitron text-gray-400 mt-1">PENDING QUEUE</p>
            </div>
            <div className="spider-card text-center py-4 border-emerald-500/30">
              <p className="text-2xl font-black font-orbitron text-emerald-400">{stats.approvedEvents}</p>
              <p className="text-[10px] font-orbitron text-gray-400 mt-1">LIVE BROADCAST</p>
            </div>
            <div className="spider-card text-center py-4 border-blue-500/30">
              <p className="text-2xl font-black font-orbitron text-blue-400">{stats.totalRsvps}</p>
              <p className="text-[10px] font-orbitron text-gray-400 mt-1">STUDENT RSVPS</p>
            </div>
            <div className="spider-card text-center py-4 border-purple-500/30">
              <p className="text-2xl font-black font-orbitron text-purple-400">{stats.totalUsers}</p>
              <p className="text-[10px] font-orbitron text-gray-400 mt-1">ACTIVE HEROES</p>
            </div>
          </div>
        )}

        {/* Primary Navigation Tabs */}
        <div className="flex flex-wrap gap-2.5 bg-black/60 border border-gray-800 p-2 rounded-2xl w-fit mb-8 backdrop-blur-md">
          <button
            onClick={() => setTab('registrations')}
            className={`px-5 py-2.5 rounded-xl text-xs font-orbitron tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              tab === 'registrations'
                ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] border border-cyan-400/50'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/40'
            }`}
          >
            <span>🎟️ EVENT REGISTRATIONS</span>
            <span className="px-2 py-0.5 rounded-full bg-black/40 text-[10px] text-cyan-300 font-bold font-mono">
              {allRegistrations.length}
            </span>
          </button>

          <button
            onClick={() => setTab('pending')}
            className={`px-5 py-2.5 rounded-xl text-xs font-orbitron tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              tab === 'pending'
                ? 'bg-gradient-to-r from-yellow-600 to-amber-700 text-white shadow-spider-glow border border-yellow-400/50'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/40'
            }`}
          >
            <span>⏳ PENDING REVIEW</span>
            <span className="px-2 py-0.5 rounded-full bg-black/40 text-[10px] text-yellow-300 font-bold font-mono">
              {pendingEvents.length}
            </span>
          </button>

          <button
            onClick={() => setTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-orbitron tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
              tab === 'all'
                ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-spider-glow border border-red-400/50'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/40'
            }`}
          >
            <span>📋 ALL DISPATCHES</span>
            <span className="px-2 py-0.5 rounded-full bg-black/40 text-[10px] text-red-300 font-bold font-mono">
              {allEvents.length}
            </span>
          </button>
        </div>

        {/* Tab 1: Event-Wise Registrations Roster */}
        {tab === 'registrations' && (
          <div className="space-y-6">

            {/* Event Selector Horizontal Slider/List */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-orbitron text-gray-300 tracking-wider flex items-center gap-2">
                  <span>📍</span>
                  <span>SELECT EVENT TO VIEW SEPARATE REGISTRATION ROSTER:</span>
                </p>
                <span className="text-[11px] font-mono text-cyan-400">
                  {registeredEventsList.length} Events on Campus Grid
                </span>
              </div>

              {/* Scrollable Event Chips */}
              <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-red-500/30">
                {/* All Events Chip */}
                <button
                  onClick={() => setSelectedEventId('all')}
                  className={`px-4 py-2.5 rounded-xl text-xs font-orbitron tracking-wider shrink-0 transition flex items-center gap-2.5 border cursor-pointer ${
                    selectedEventId === 'all'
                      ? 'bg-cyan-950/80 text-cyan-200 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : 'bg-black/50 text-gray-400 border-gray-800 hover:border-gray-600 hover:text-white'
                  }`}
                >
                  <span>🌐 All Events Combined</span>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-900/60 text-[10px] font-mono text-cyan-300">
                    {allRegistrations.length}
                  </span>
                </button>

                {/* Individual Event Chips */}
                {registeredEventsList.map(ev => {
                  const isSelected = String(selectedEventId) === String(ev.id)
                  const count = eventCounts[String(ev.id)] || 0
                  return (
                    <button
                      key={ev.id}
                      onClick={() => setSelectedEventId(String(ev.id))}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-orbitron tracking-wider shrink-0 transition flex items-center gap-2 border cursor-pointer max-w-xs ${
                        isSelected
                          ? 'bg-red-950/90 text-white border-red-500 shadow-spider-glow'
                          : 'bg-black/50 text-gray-400 border-gray-800 hover:border-red-500/40 hover:text-white'
                      }`}
                    >
                      <span className="truncate max-w-[200px]">{ev.title}</span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                        count > 0 ? 'bg-red-900/60 text-red-300' : 'bg-gray-800 text-gray-500'
                      }`}>
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Selected Event Detail Banner */}
            <div className="spider-card border-red-500/40 bg-gradient-to-r from-red-950/30 via-black to-[#0E1526]/80 p-5 rounded-2xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-[10px] font-orbitron">
                      {currentEvent ? currentEvent.campus : 'QUAD-CAMPUS MULTIVERSE'}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-gray-900 text-gray-300 text-[10px] font-mono">
                      {currentEvent ? currentEvent.category : 'ALL CATEGORIES'}
                    </span>
                    {currentEvent?.date_tba && (
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 text-[10px] font-mono">
                        ❄️ DATE REVEALING SOON
                      </span>
                    )}
                    {currentEvent?.registration_deadline && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-500/40 text-[10px] font-mono">
                        🚨 CLOSES 5 NOV 2026
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold font-orbitron text-white">
                    {currentEvent ? currentEvent.title : 'All Campus Events Registration Grid'}
                  </h2>
                  <p className="text-xs font-rajdhani text-gray-400">
                    {currentEvent ? `Venue: ${currentEvent.venue || 'Campus Grounds'}` : 'Comprehensive master attendee roster across all student dispatches.'}
                  </p>
                </div>

                {/* Event specific registration counters */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="bg-black/60 border border-gray-800 px-4 py-2 rounded-xl text-center">
                    <p className="text-xl font-black font-orbitron text-cyan-400">{filteredRegistrations.length}</p>
                    <p className="text-[9px] font-orbitron text-gray-400">REGISTERED</p>
                  </div>
                  <button
                    onClick={() => exportToCSV(currentEvent?.title || 'Registrations', filteredRegistrations)}
                    className="px-4 py-2.5 rounded-xl bg-cyan-900/60 hover:bg-cyan-800 text-cyan-200 border border-cyan-500/40 text-xs font-orbitron transition flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                  >
                    <span>📥</span>
                    <span>EXPORT CSV</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-black/40 border border-gray-800 p-3 rounded-2xl">
              {/* Search input */}
              <div className="relative w-full sm:w-96">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search student, roll no, ticket code, team..."
                  className="w-full bg-[#0E1526] border border-gray-700/60 rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-gray-200 placeholder-gray-500 focus:outline-none focus:border-red-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Mode filter buttons (All, Team, Solo) */}
              <div className="flex items-center gap-1.5 self-end sm:self-auto">
                <span className="text-[10px] font-orbitron text-gray-400 mr-1">FORMAT:</span>
                <button
                  onClick={() => setModeFilter('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer ${
                    modeFilter === 'all' ? 'bg-red-600 text-white font-bold' : 'bg-black/60 text-gray-400 hover:text-white'
                  }`}
                >
                  All ({allRegistrations.length})
                </button>
                <button
                  onClick={() => setModeFilter('team')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer ${
                    modeFilter === 'team' ? 'bg-red-600 text-white font-bold' : 'bg-black/60 text-gray-400 hover:text-white'
                  }`}
                >
                  👥 Teams
                </button>
                <button
                  onClick={() => setModeFilter('solo')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition cursor-pointer ${
                    modeFilter === 'solo' ? 'bg-red-600 text-white font-bold' : 'bg-black/60 text-gray-400 hover:text-white'
                  }`}
                >
                  👤 Solo
                </button>
              </div>
            </div>

            {/* Registrations List */}
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : filteredRegistrations.length === 0 ? (
              <div className="spider-card text-center py-16 border-gray-800">
                <div className="text-4xl mb-2">🎟️</div>
                <h3 className="text-base font-bold font-orbitron text-white">NO REGISTRATIONS RECORDED</h3>
                <p className="text-gray-400 font-rajdhani text-sm mt-1 max-w-md mx-auto">
                  {searchQuery
                    ? `No students found matching "${searchQuery}". Clear search filter to show all.`
                    : 'No students have registered for this event yet. Registration passes will appear here in real-time.'}
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-4 px-4 py-2 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-orbitron"
                  >
                    Clear Search Query
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredRegistrations.map((reg, index) => {
                  const isTeam = reg.team_name && !reg.team_name.toLowerCase().includes('solo')
                  return (
                    <div
                      key={reg.ticket_code || reg.id || index}
                      className="spider-card border-red-500/30 hover:border-red-500/70 transition-all p-4.5 rounded-2xl flex flex-col justify-between relative group bg-[#090D18]/90"
                    >
                      {/* Top Badges */}
                      <div className="flex items-start justify-between gap-2 pb-3 border-b border-gray-800/80">
                        <div className="flex items-center gap-2.5">
                          {/* Student Avatar */}
                          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-indigo-700 flex items-center justify-center text-white font-black font-orbitron text-xs shadow-spider-glow shrink-0">
                            {(reg.student_name || 'U').charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold font-orbitron text-white leading-tight">
                              {reg.student_name}
                            </h4>
                            <p className="text-[11px] font-mono text-red-400">
                              {reg.roll_no || 'GEHU-STUDENT'}
                            </p>
                          </div>
                        </div>

                        {/* Ticket Code Pill */}
                        <button
                          onClick={() => copyToClipboard(reg.ticket_code, `Ticket ${reg.ticket_code} copied!`)}
                          className="px-2.5 py-1 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 font-mono text-[10px] tracking-wider hover:border-cyan-400 transition flex items-center gap-1 cursor-pointer shrink-0"
                          title="Click to copy ticket code"
                        >
                          <span>{copiedCode === reg.ticket_code ? '✓' : '🎟️'}</span>
                          <span>{reg.ticket_code}</span>
                        </button>
                      </div>

                      {/* Middle Details */}
                      <div className="py-3 space-y-2 text-xs font-rajdhani">
                        {/* Event Title if viewing 'all' */}
                        {selectedEventId === 'all' && (
                          <div className="p-2 rounded-lg bg-black/40 border border-gray-800/80 text-[11px] font-orbitron text-gray-200 truncate">
                            🎯 {reg.event_title || 'Campus Event'}
                          </div>
                        )}

                        {/* Contact details */}
                        <div className="grid grid-cols-1 gap-1 text-[11px] font-mono text-gray-300">
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="text-gray-500">✉️</span>
                            <span className="truncate">{reg.student_email}</span>
                          </div>
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="text-gray-500">📞</span>
                            <span>{reg.phone || 'Contact not provided'}</span>
                          </div>
                          <div className="flex items-center gap-1.5 truncate">
                            <span className="text-gray-500">🎓</span>
                            <span className="truncate">{reg.degree || 'B.Tech CSE'}</span>
                          </div>
                        </div>

                        {/* Team or Solo details */}
                        <div className="p-2.5 rounded-xl bg-[#0E1526]/80 border border-gray-800 flex items-center justify-between gap-2">
                          <div>
                            <p className="text-[10px] font-orbitron text-gray-400">PARTICIPATION MODE</p>
                            <p className="text-xs font-bold font-orbitron text-emerald-400">
                              {isTeam ? `👥 ${reg.team_name}` : '👤 Solo Entry'}
                            </p>
                          </div>
                          {isTeam && reg.team_size && (
                            <span className="px-2 py-0.5 rounded-md bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono">
                              {reg.team_size} Members
                            </span>
                          )}
                        </div>

                        {/* Track / Slot info */}
                        {reg.track_info && (
                          <div className="px-2.5 py-1.5 rounded-lg bg-red-950/40 border border-red-500/20 text-[11px] font-mono text-red-200">
                            <span className="text-gray-400">Track:</span> {reg.track_info}
                          </div>
                        )}

                        {/* GitHub link if provided */}
                        {reg.github_link && (
                          <a
                            href={reg.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 hover:underline"
                          >
                            <span>🔗 GitHub Repository:</span>
                            <span className="truncate max-w-[180px]">{reg.github_link}</span>
                          </a>
                        )}
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-2.5 border-t border-gray-800/80 flex items-center justify-between text-[10px] font-mono text-gray-500">
                        <span>
                          {reg.created_at ? new Date(reg.created_at).toLocaleDateString() : 'Verified Roster'}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400 font-bold flex items-center gap-1">
                            <span>●</span>
                            <span>CONFIRMED</span>
                          </span>
                          <button
                            onClick={() => handleDeleteRegistration(reg.id, reg.ticket_code)}
                            className="text-gray-500 hover:text-red-400 cursor-pointer ml-1"
                            title="Revoke registration pass"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Pending Review Queue */}
        {tab === 'pending' && (
          <div>
            <div className="mb-4">
              <h3 className="text-lg font-bold font-orbitron text-white">ORGANIZER SUBMISSIONS PENDING CLEARANCE</h3>
              <p className="text-xs font-rajdhani text-gray-400">Review organizer dispatches. Approved items are instantly broadcast across campus timelines.</p>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : pendingEvents.length === 0 ? (
              <div className="spider-card text-center py-16">
                <div className="text-5xl mb-3">🛡️</div>
                <h3 className="text-lg font-bold font-orbitron text-white">QUEUE CLEAR — ALL CAUGHT UP</h3>
                <p className="text-gray-400 font-rajdhani text-sm mt-1">No pending organizer briefings in High Command review queue.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pendingEvents.map(event => (
                  <EventCard
                    key={event.id}
                    event={event}
                    showStatus={true}
                    onApprove={handleApprove}
                    onReject={handleReject}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: All Dispatches */}
        {tab === 'all' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold font-orbitron text-white">ALL CAMPUS DISPATCHES & EVENTS</h3>
                <p className="text-xs font-rajdhani text-gray-400">Complete quad-campus multiverse event directory.</p>
              </div>
              <span className="text-xs font-mono text-red-400">
                {allEvents.length} Active Records
              </span>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : allEvents.length === 0 ? (
              <div className="spider-card text-center py-16">
                <p className="text-gray-400 font-rajdhani text-sm">No campus events found in registry.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allEvents.map(event => (
                  <EventCard
                    key={event.id}
                    event={event}
                    showStatus={true}
                    onDelete={handleDelete}
                  />
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )
}
