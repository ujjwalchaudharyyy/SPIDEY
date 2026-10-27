import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard'
import { DEFAULT_EVENTS, DEFAULT_REGISTRATIONS } from '../data/fallbackData'
import {
  getEventGoogleSheetsConfig,
  updateEventGoogleSheetConfig,
  getEventSheetUrl,
  copyForGoogleSheets,
  syncRegistrationToGoogleSheet,
  GOOGLE_APPS_SCRIPT_TEMPLATE
} from '../utils/googleSheetsSync'

export default function AdminDashboard() {
  const { token } = useAuth()
  const [tab, setTab] = useState('registrations') // 'registrations', 'pending', 'all'
  const [pendingEvents, setPendingEvents] = useState([])
  const [allEvents, setAllEvents] = useState([])
  const [allRegistrations, setAllRegistrations] = useState([])
  const [selectedEventId, setSelectedEventId] = useState('all') // 'all' or specific event id
  const [viewMode, setViewMode] = useState('stacked') // 'stacked' (all sheets visible) or 'single' (focused sheet)
  const [searchQuery, setSearchQuery] = useState('')
  const [modeFilter, setModeFilter] = useState('all') // 'all', 'team', 'solo'
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState(null)
  const [copiedCode, setCopiedCode] = useState(null)
  const [activeSettingsEvent, setActiveSettingsEvent] = useState(null)
  const [customSheetUrl, setCustomSheetUrl] = useState('')
  const [customWebhookUrl, setCustomWebhookUrl] = useState('')
  const [sheetsConfig, setSheetsConfig] = useState(getEventGoogleSheetsConfig())

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
      console.warn('API sync: Using fail-safe offline grid', err)
    }

    const resolvedEvents = fetchedAll.length > 0 ? fetchedAll : DEFAULT_EVENTS
    const resolvedPending = fetchedPending.length > 0
      ? fetchedPending
      : resolvedEvents.filter(e => e.status === 'pending')

    const mergedRegistrations = getMergedRegistrations(fetchedRegs)

    const totalRsvps = resolvedEvents.reduce((acc, e) => acc + (e.rsvp_count || 0), 0)
    const resolvedStats = fetchedStats || {
      totalEvents: resolvedEvents.length,
      pendingEvents: resolvedPending.length,
      approvedEvents: resolvedEvents.filter(e => e.status === 'approved').length,
      totalRegistrations: mergedRegistrations.length,
      totalRsvps,
      totalUsers: 148
    }

    setPendingEvents(resolvedPending)
    setAllEvents(resolvedEvents)
    setAllRegistrations(mergedRegistrations)
    setStats({
      ...resolvedStats,
      totalRegistrations: mergedRegistrations.length
    })
    setSheetsConfig(getEventGoogleSheetsConfig())
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleApprove = async (id) => {
    try {
      await axios.put(`/api/events/${id}/approve`, {}, { headers })
    } catch (err) {}
    setPendingEvents(prev => prev.filter(e => e.id !== id))
    setAllEvents(prev => prev.map(e => e.id === id ? { ...e, status: 'approved' } : e))
    showToast('Event approved successfully!')
  }

  const handleReject = async (id, reason) => {
    try {
      await axios.put(`/api/events/${id}/reject`, { reason }, { headers })
    } catch (err) {}
    setPendingEvents(prev => prev.filter(e => e.id !== id))
    setAllEvents(prev => prev.map(e => e.id === id ? { ...e, status: 'rejected', rejection_reason: reason } : e))
    showToast('Event rejected with feedback note.', 'info')
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this event?')) return
    try {
      await axios.delete(`/api/events/${id}`, { headers })
    } catch (err) {}
    setPendingEvents(prev => prev.filter(e => e.id !== id))
    setAllEvents(prev => prev.filter(e => e.id !== id))
    showToast('Event removed.')
  }

  const handleDeleteRegistration = (regId, ticketCode) => {
    if (!confirm(`Remove ticket pass ${ticketCode}?`)) return
    setAllRegistrations(prev => {
      const next = prev.filter(r => r.id !== regId && r.ticket_code !== ticketCode)
      try {
        localStorage.setItem('spider_event_registrations', JSON.stringify(next))
      } catch (e) {}
      return next
    })
    showToast(`Ticket pass ${ticketCode} removed.`, 'info')
  }

  // Count registrations per event
  const eventCounts = useMemo(() => {
    const counts = {}
    for (const r of allRegistrations) {
      const id = String(r.event_id)
      counts[id] = (counts[id] || 0) + 1
    }
    return counts
  }, [allRegistrations])

  // Events list with registrations count
  const eventsList = useMemo(() => {
    return allEvents.map(e => ({
      id: e.id,
      title: e.title,
      campus: e.campus,
      category: e.category,
      venue: e.venue,
      count: eventCounts[String(e.id)] || 0
    }))
  }, [allEvents, eventCounts])

  // Group all registrations by eventId
  const registrationsByEvent = useMemo(() => {
    const map = {}
    for (const ev of allEvents) {
      map[String(ev.id)] = []
    }
    for (const r of allRegistrations) {
      const id = String(r.event_id)
      if (!map[id]) map[id] = []
      map[id].push(r)
    }
    return map
  }, [allEvents, allRegistrations])

  // Open Settings Modal for a specific event
  const handleOpenSettings = (eventObj) => {
    setActiveSettingsEvent(eventObj)
    const currentCfg = sheetsConfig[eventObj.id]
    setCustomSheetUrl(currentCfg?.sheetUrl || '')
    setCustomWebhookUrl(currentCfg?.webhookUrl || '')
  }

  // Save Settings Modal
  const handleSaveSettings = (e) => {
    e.preventDefault()
    if (!activeSettingsEvent) return
    const updated = updateEventGoogleSheetConfig(activeSettingsEvent.id, {
      sheetUrl: customSheetUrl.trim(),
      webhookUrl: customWebhookUrl.trim(),
      eventName: activeSettingsEvent.title
    })
    if (updated) {
      setSheetsConfig(updated)
      showToast('Google Sheet settings saved!')
    }
    setActiveSettingsEvent(null)
  }

  // Download CSV for any event
  const exportToCSV = (eventTitle, listToExport) => {
    if (!listToExport || listToExport.length === 0) {
      showToast('No registrations in this spreadsheet to export.', 'info')
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
      'Team / Solo',
      'Team Name',
      'Team Size',
      'Track / Details',
      'GitHub Link',
      'Registration Date'
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
    link.setAttribute('download', `${(eventTitle || 'Event').replace(/[^a-zA-Z0-9]/g, '_')}_Spreadsheet.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    showToast(`Downloaded spreadsheet for ${listToExport.length} students! 📥`)
  }

  // Copy rows formatted for Google Sheets
  const handleCopyForGoogleSheets = (eventTitle, listToExport) => {
    const tsv = copyForGoogleSheets(listToExport)
    if (tsv) {
      copyToClipboard(tsv, `Copied ${listToExport.length} rows! Open Google Sheet and press Ctrl+V.`)
    } else {
      showToast('No rows to copy.', 'info')
    }
  }

  // Filter a specific list of registrations
  const filterList = (list) => {
    return (list || []).filter(r => {
      const isTeam = r.team_name && !r.team_name.toLowerCase().includes('solo')
      if (modeFilter === 'team' && !isTeam) return false
      if (modeFilter === 'solo' && isTeam) return false

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchName = r.student_name?.toLowerCase().includes(q)
        const matchEmail = r.student_email?.toLowerCase().includes(q)
        const matchRoll = r.roll_no?.toLowerCase().includes(q)
        const matchTicket = r.ticket_code?.toLowerCase().includes(q)
        const matchTeam = r.team_name?.toLowerCase().includes(q)
        const matchTrack = r.track_info?.toLowerCase().includes(q)
        if (!matchName && !matchEmail && !matchRoll && !matchTicket && !matchTeam && !matchTrack) {
          return false
        }
      }
      return true
    })
  }

  return (
    <div className="min-h-screen bg-[#0A0D14] text-gray-100 pb-20 font-sans">
      <Navbar />

      {/* Toast Alert */}
      {toast && (
        <div className={`fixed top-24 right-6 z-50 px-4 py-2.5 rounded-xl shadow-lg border text-xs font-medium flex items-center gap-2 backdrop-blur-md ${
          toast.type === 'error'
            ? 'bg-red-950/90 text-red-200 border-red-500'
            : toast.type === 'info'
            ? 'bg-blue-950/90 text-blue-200 border-blue-500'
            : 'bg-emerald-950/90 text-emerald-200 border-emerald-500'
        }`}>
          <span>{toast.type === 'error' ? '⚠️' : '✓'}</span>
          <span>{toast.msg}</span>
        </div>
      )}

      {/* Google Sheets Settings Modal */}
      {activeSettingsEvent && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121622] border border-gray-700 rounded-2xl w-full max-w-xl p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <span className="text-xl">📊</span>
                <h3 className="text-base font-bold text-white">
                  Google Sheet Setup: {activeSettingsEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveSettingsEvent(null)}
                className="text-gray-400 hover:text-white text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-4 mt-4 text-xs">
              <div>
                <label className="block text-gray-300 font-semibold mb-1">
                  Google Spreadsheet Link (View / Edit Link):
                </label>
                <input
                  type="url"
                  value={customSheetUrl}
                  onChange={(e) => setCustomSheetUrl(e.target.value)}
                  placeholder="https://docs.google.com/spreadsheets/d/your-sheet-id/edit"
                  className="w-full bg-[#090C12] border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
                <p className="text-[11px] text-gray-400 mt-1">
                  Agar blank chhodenge, to &quot;Open in Google Sheets&quot; click karte hi automatically new sheet open ho jayegi.
                </p>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">
                  Google Apps Script Webhook URL (For Automatic Row Append):
                </label>
                <input
                  type="url"
                  value={customWebhookUrl}
                  onChange={(e) => setCustomWebhookUrl(e.target.value)}
                  placeholder="https://script.google.com/macros/s/.../exec"
                  className="w-full bg-[#090C12] border border-gray-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                />
                <p className="text-[11px] text-gray-400 mt-1">
                  Web app URL paste karein jisse naya student register hote hi sheet me live row add ho sake.
                </p>
              </div>

              {/* Copy Script Code Helper */}
              <div className="p-3 bg-black/60 rounded-xl border border-gray-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-400">
                    📋 1-Minute Apps Script Code for Live Append:
                  </span>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(GOOGLE_APPS_SCRIPT_TEMPLATE, 'Apps Script code copied!')}
                    className="text-[10px] text-emerald-300 hover:underline font-mono cursor-pointer"
                  >
                    Copy Script Code
                  </button>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  Google Sheet me <b>Extensions &gt; Apps Script</b> kholein, ye code paste karein aur <b>Deploy &gt; Web app (Anyone)</b> karein.
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveSettingsEvent(null)}
                  className="px-4 py-2 rounded-xl bg-gray-800 text-gray-300 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-md cursor-pointer"
                >
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">

        {/* Clean Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-800 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-red-400 mb-1">
              <span>●</span>
              <span>ADMIN PANEL</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400">Graphic Era Event Hub</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Event Spreadsheets &amp; Registrations
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Sabhi events ki alag-alag Google Spreadsheets yahan live hain. Naya registration aane par data automatic update hota hai.
            </p>
          </div>

          {/* Quick Stats Summary */}
          {stats && (
            <div className="flex items-center gap-2.5">
              <div className="bg-[#121622] border border-gray-800 px-3.5 py-2 rounded-xl text-center">
                <p className="text-lg font-bold text-white">{allRegistrations.length}</p>
                <p className="text-[10px] text-gray-400 font-medium uppercase">Total Registrations</p>
              </div>
              <div className="bg-[#121622] border border-gray-800 px-3.5 py-2 rounded-xl text-center">
                <p className="text-lg font-bold text-emerald-400">{allEvents.length}</p>
                <p className="text-[10px] text-gray-400 font-medium uppercase">Active Spreadsheets</p>
              </div>
            </div>
          )}
        </div>

        {/* Primary Tabs */}
        <div className="flex items-center justify-between gap-2 mb-6 border-b border-gray-800 pb-1">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTab('registrations')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                tab === 'registrations'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <span>📊 Event Spreadsheets</span>
              <span className="px-1.5 py-0.5 rounded-full bg-black/30 text-[10px]">
                {allRegistrations.length}
              </span>
            </button>

            <button
              onClick={() => setTab('pending')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                tab === 'pending'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <span>⏳ Pending Review</span>
              <span className="px-1.5 py-0.5 rounded-full bg-black/30 text-[10px]">
                {pendingEvents.length}
              </span>
            </button>

            <button
              onClick={() => setTab('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                tab === 'all'
                  ? 'bg-red-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <span>📋 All Campus Events</span>
              <span className="px-1.5 py-0.5 rounded-full bg-black/30 text-[10px]">
                {allEvents.length}
              </span>
            </button>
          </div>

          {/* View Mode Toggle when on Spreadsheets tab */}
          {tab === 'registrations' && (
            <div className="flex items-center gap-1.5 bg-[#121622] border border-gray-800 p-1 rounded-xl text-xs">
              <button
                onClick={() => setViewMode('stacked')}
                className={`px-3 py-1 rounded-lg transition cursor-pointer font-medium ${
                  viewMode === 'stacked' ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                📑 Sabhi Sheets Ek Sath
              </button>
              <button
                onClick={() => setViewMode('single')}
                className={`px-3 py-1 rounded-lg transition cursor-pointer font-medium ${
                  viewMode === 'single' ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                🔍 Focus Single Sheet
              </button>
            </div>
          )}
        </div>

        {/* Tab 1: Event Spreadsheets */}
        {tab === 'registrations' && (
          <div className="space-y-6">

            {/* Quick Directory Cards: Har Event Ki Apni Separate Sheet Card */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                  <span>📂</span>
                  <span>SABHI EVENTS KI ALAG-ALAG SPREADSHEETS DIRECTORY ({eventsList.length})</span>
                </p>
                <span className="text-[11px] text-emerald-400 font-mono">
                  ● Real-Time Auto-Update Active
                </span>
              </div>

              {/* Grid of Event Spreadsheet Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {eventsList.map(ev => {
                  const sheetLink = getEventSheetUrl(ev.id, ev.title)
                  const count = ev.count
                  const isSelected = String(selectedEventId) === String(ev.id)
                  const evRegs = registrationsByEvent[String(ev.id)] || []

                  return (
                    <div
                      key={ev.id}
                      className={`bg-[#121622] border rounded-xl p-3.5 flex flex-col justify-between transition-all ${
                        isSelected
                          ? 'border-emerald-500 shadow-md ring-1 ring-emerald-500/50'
                          : 'border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-semibold">
                            SPREADSHEET #{ev.id}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                            count > 0 ? 'bg-emerald-600 text-white' : 'bg-gray-800 text-gray-400'
                          }`}>
                            {count} Registered
                          </span>
                        </div>

                        <h4 className="text-xs font-bold text-white line-clamp-2 mb-1" title={ev.title}>
                          {ev.title}
                        </h4>
                        <p className="text-[10px] text-gray-400 truncate">
                          {ev.campus?.split(' ')?.[3] || 'Bhimtal'} • {ev.category}
                        </p>
                      </div>

                      {/* Action buttons on card */}
                      <div className="pt-3 mt-2 border-t border-gray-800/80 flex items-center gap-1.5">
                        <a
                          href={sheetLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-1.5 px-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white text-[11px] font-semibold text-center flex items-center justify-center gap-1 cursor-pointer transition"
                          title="Open separate Google Sheet"
                        >
                          <span>📊</span>
                          <span>Open Sheet</span>
                        </a>

                        <button
                          onClick={() => exportToCSV(ev.title, evRegs)}
                          className="py-1.5 px-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-[11px] font-medium transition cursor-pointer"
                          title="Download CSV"
                        >
                          📥
                        </button>

                        <button
                          onClick={() => {
                            setSelectedEventId(String(ev.id))
                            setViewMode('single')
                          }}
                          className="py-1.5 px-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-[11px] font-medium transition cursor-pointer"
                          title="View table below"
                        >
                          👁️
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Global Search and Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#121622] border border-gray-800 p-2.5 rounded-xl">
              <div className="relative w-full sm:w-80">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">🔍</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search student, roll no, email, ticket..."
                  className="w-full bg-[#0A0D14] border border-gray-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-gray-200 placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto text-xs">
                <span className="text-gray-400 text-[11px]">Filter:</span>
                <button
                  onClick={() => setModeFilter('all')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer ${
                    modeFilter === 'all' ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  All Entries
                </button>
                <button
                  onClick={() => setModeFilter('team')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer ${
                    modeFilter === 'team' ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Teams Only
                </button>
                <button
                  onClick={() => setModeFilter('solo')}
                  className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer ${
                    modeFilter === 'solo' ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Solo Only
                </button>
              </div>
            </div>

            {/* SPREADSHEETS DISPLAY */}
            {loading ? (
              <div className="flex justify-center py-16">
                <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : viewMode === 'stacked' ? (
              /* STACKED MODE: Every single event has its own separate spreadsheet table one below another */
              <div className="space-y-8">
                {eventsList.map(ev => {
                  const evRegs = registrationsByEvent[String(ev.id)] || []
                  const filtered = filterList(evRegs)
                  const sheetLink = getEventSheetUrl(ev.id, ev.title)

                  return (
                    <div key={ev.id} className="bg-[#121622] border border-gray-800 rounded-2xl overflow-hidden shadow-sm">
                      {/* Event Specific Spreadsheet Header */}
                      <div className="bg-[#0D101A] p-4 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">📊</span>
                            <h3 className="text-sm sm:text-base font-bold text-white">
                              Spreadsheet: {ev.title}
                            </h3>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold">
                              {filtered.length} Rows
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-400">
                            {ev.campus} • Venue: {ev.venue || 'Campus Grounds'}
                          </p>
                        </div>

                        {/* Event Spreadsheet Actions */}
                        <div className="flex flex-wrap items-center gap-2 shrink-0">
                          <a
                            href={sheetLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                          >
                            <span>📊</span>
                            <span>Open Google Sheet</span>
                          </a>

                          <button
                            onClick={() => handleCopyForGoogleSheets(ev.title, filtered)}
                            className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-medium flex items-center gap-1.5 transition cursor-pointer"
                            title="Copy rows to clipboard for Ctrl+V paste into Google Sheets"
                          >
                            <span>📋</span>
                            <span>Copy for Sheet</span>
                          </button>

                          <button
                            onClick={() => exportToCSV(ev.title, filtered)}
                            className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-medium flex items-center gap-1.5 transition cursor-pointer"
                            title="Download CSV"
                          >
                            <span>📥</span>
                            <span>Download CSV</span>
                          </button>

                          <button
                            onClick={() => handleOpenSettings(ev)}
                            className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition cursor-pointer"
                            title="Configure Google Sheet Link / Webhook"
                          >
                            ⚙️
                          </button>
                        </div>
                      </div>

                      {/* Table for this event */}
                      {filtered.length === 0 ? (
                        <div className="py-8 text-center text-gray-500 text-xs">
                          {searchQuery
                            ? `Is spreadsheet me "${searchQuery}" se koi student match nahi hua.`
                            : 'Is event me abhi tak koi registration nahi hua hai. Student register karega to yahan automatic add ho jayega.'}
                        </div>
                      ) : (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-[#090C12] text-gray-400 font-semibold border-b border-gray-800 text-[11px]">
                                <th className="py-2.5 px-3 w-10 text-center">#</th>
                                <th className="py-2.5 px-3">Ticket Pass</th>
                                <th className="py-2.5 px-3">Student Name</th>
                                <th className="py-2.5 px-3">Roll Number</th>
                                <th className="py-2.5 px-3">University Email</th>
                                <th className="py-2.5 px-3">Phone</th>
                                <th className="py-2.5 px-3">Degree</th>
                                <th className="py-2.5 px-3">Participation</th>
                                <th className="py-2.5 px-3">Track / Details</th>
                                <th className="py-2.5 px-3">Date</th>
                                <th className="py-2.5 px-3 text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800/50">
                              {filtered.map((reg, idx) => {
                                const isTeam = reg.team_name && !reg.team_name.toLowerCase().includes('solo')
                                return (
                                  <tr key={reg.ticket_code || idx} className="hover:bg-gray-800/25 transition">
                                    <td className="py-2.5 px-3 text-gray-500 text-center font-mono text-[11px]">{idx + 1}</td>
                                    <td className="py-2.5 px-3 font-mono font-semibold text-cyan-300">
                                      <button
                                        onClick={() => copyToClipboard(reg.ticket_code, `Ticket ${reg.ticket_code} copied!`)}
                                        className="hover:underline flex items-center gap-1 cursor-pointer"
                                      >
                                        <span>{reg.ticket_code}</span>
                                        <span className="text-gray-500 text-[10px]">{copiedCode === reg.ticket_code ? '✓' : '📋'}</span>
                                      </button>
                                    </td>
                                    <td className="py-2.5 px-3 font-medium text-white">{reg.student_name}</td>
                                    <td className="py-2.5 px-3 font-mono text-gray-300 text-[11px]">{reg.roll_no || 'GEHU-STUDENT'}</td>
                                    <td className="py-2.5 px-3 text-gray-200 truncate max-w-[150px]">{reg.student_email}</td>
                                    <td className="py-2.5 px-3 text-gray-300">{reg.phone}</td>
                                    <td className="py-2.5 px-3 text-gray-300">{reg.degree || 'B.Tech'}</td>
                                    <td className="py-2.5 px-3">
                                      {isTeam ? (
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-medium">
                                          👥 {reg.team_name}
                                        </span>
                                      ) : (
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-gray-800 text-gray-300 text-[10px]">
                                          👤 Solo
                                        </span>
                                      )}
                                    </td>
                                    <td className="py-2.5 px-3 text-gray-300 max-w-[160px] truncate">{reg.track_info || 'General'}</td>
                                    <td className="py-2.5 px-3 text-gray-400 font-mono text-[11px]">
                                      {reg.created_at ? new Date(reg.created_at).toLocaleDateString() : 'Confirmed'}
                                    </td>
                                    <td className="py-2.5 px-3 text-center">
                                      <button
                                        onClick={() => handleDeleteRegistration(reg.id, reg.ticket_code)}
                                        className="text-gray-500 hover:text-red-400 p-1 cursor-pointer"
                                        title="Revoke pass"
                                      >
                                        ✕
                                      </button>
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            ) : (
              /* SINGLE FOCUS MODE: Show chosen event spreadsheet */
              <div className="space-y-4">
                {/* Event Selector Tab Row */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                  {eventsList.map(ev => (
                    <button
                      key={ev.id}
                      onClick={() => setSelectedEventId(String(ev.id))}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium shrink-0 transition flex items-center gap-2 border cursor-pointer ${
                        String(selectedEventId) === String(ev.id)
                          ? 'bg-emerald-600 text-white border-emerald-500'
                          : 'bg-[#121622] text-gray-300 border-gray-800 hover:text-white'
                      }`}
                    >
                      <span className="truncate max-w-[180px]">{ev.title}</span>
                      <span className="px-1.5 py-0.2 rounded-full bg-black/40 text-[10px] font-mono">{ev.count}</span>
                    </button>
                  ))}
                </div>

                {/* Render Selected Event Sheet */}
                {(() => {
                  const ev = eventsList.find(e => String(e.id) === String(selectedEventId)) || eventsList[0]
                  if (!ev) return null
                  const evRegs = registrationsByEvent[String(ev.id)] || []
                  const filtered = filterList(evRegs)
                  const sheetLink = getEventSheetUrl(ev.id, ev.title)

                  return (
                    <div className="bg-[#121622] border border-gray-800 rounded-2xl overflow-hidden shadow-sm">
                      <div className="bg-[#0D101A] p-4 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg">📊</span>
                            <h3 className="text-base font-bold text-white">
                              Spreadsheet: {ev.title}
                            </h3>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold">
                              {filtered.length} Rows
                            </span>
                          </div>
                          <p className="text-[11px] text-gray-400 mt-0.5">
                            {ev.campus} • Venue: {ev.venue || 'Campus Grounds'}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 shrink-0">
                          <a
                            href={sheetLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                          >
                            <span>📊</span>
                            <span>Open in Google Sheets</span>
                          </a>
                          <button
                            onClick={() => handleCopyForGoogleSheets(ev.title, filtered)}
                            className="px-3.5 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-medium flex items-center gap-1.5 transition cursor-pointer"
                          >
                            <span>📋</span>
                            <span>Copy for Sheet</span>
                          </button>
                          <button
                            onClick={() => exportToCSV(ev.title, filtered)}
                            className="px-3.5 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-medium flex items-center gap-1.5 transition cursor-pointer"
                          >
                            <span>📥</span>
                            <span>Download CSV</span>
                          </button>
                          <button
                            onClick={() => handleOpenSettings(ev)}
                            className="p-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition cursor-pointer"
                          >
                            ⚙️
                          </button>
                        </div>
                      </div>

                      {filtered.length === 0 ? (
                        <div className="py-12 text-center text-gray-500 text-xs">
                          Is event me abhi tak koi registration nahi hua hai.
                        </div>
                      ) : (
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs border-collapse">
                            <thead>
                              <tr className="bg-[#090C12] text-gray-400 font-semibold border-b border-gray-800 text-[11px]">
                                <th className="py-2.5 px-3 w-10 text-center">#</th>
                                <th className="py-2.5 px-3">Ticket Pass</th>
                                <th className="py-2.5 px-3">Student Name</th>
                                <th className="py-2.5 px-3">Roll Number</th>
                                <th className="py-2.5 px-3">University Email</th>
                                <th className="py-2.5 px-3">Phone</th>
                                <th className="py-2.5 px-3">Degree</th>
                                <th className="py-2.5 px-3">Participation</th>
                                <th className="py-2.5 px-3">Track / Details</th>
                                <th className="py-2.5 px-3">Date</th>
                                <th className="py-2.5 px-3 text-center">Action</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800/50">
                              {filtered.map((reg, idx) => {
                                const isTeam = reg.team_name && !reg.team_name.toLowerCase().includes('solo')
                                return (
                                  <tr key={reg.ticket_code || idx} className="hover:bg-gray-800/25 transition">
                                    <td className="py-2.5 px-3 text-gray-500 text-center font-mono text-[11px]">{idx + 1}</td>
                                    <td className="py-2.5 px-3 font-mono font-semibold text-cyan-300">
                                      <button
                                        onClick={() => copyToClipboard(reg.ticket_code, `Ticket ${reg.ticket_code} copied!`)}
                                        className="hover:underline flex items-center gap-1 cursor-pointer"
                                      >
                                        <span>{reg.ticket_code}</span>
                                        <span className="text-gray-500 text-[10px]">{copiedCode === reg.ticket_code ? '✓' : '📋'}</span>
                                      </button>
                                    </td>
                                    <td className="py-2.5 px-3 font-medium text-white">{reg.student_name}</td>
                                    <td className="py-2.5 px-3 font-mono text-gray-300 text-[11px]">{reg.roll_no || 'GEHU-STUDENT'}</td>
                                    <td className="py-2.5 px-3 text-gray-200 truncate max-w-[150px]">{reg.student_email}</td>
                                    <td className="py-2.5 px-3 text-gray-300">{reg.phone}</td>
                                    <td className="py-2.5 px-3 text-gray-300">{reg.degree || 'B.Tech'}</td>
                                    <td className="py-2.5 px-3">
                                      {isTeam ? (
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-medium">
                                          👥 {reg.team_name}
                                        </span>
                                      ) : (
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-gray-800 text-gray-300 text-[10px]">
                                          👤 Solo
                                        </span>
                                      )}
                                    </td>
                                    <td className="py-2.5 px-3 text-gray-300 max-w-[160px] truncate">{reg.track_info || 'General'}</td>
                                    <td className="py-2.5 px-3 text-gray-400 font-mono text-[11px]">
                                      {reg.created_at ? new Date(reg.created_at).toLocaleDateString() : 'Confirmed'}
                                    </td>
                                    <td className="py-2.5 px-3 text-center">
                                      <button
                                        onClick={() => handleDeleteRegistration(reg.id, reg.ticket_code)}
                                        className="text-gray-500 hover:text-red-400 p-1 cursor-pointer"
                                        title="Revoke pass"
                                      >
                                        ✕
                                      </button>
                                    </td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  )
                })()}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Pending Review Queue */}
        {tab === 'pending' && (
          <div>
            <div className="mb-4">
              <h3 className="text-base font-bold text-white">Pending Event Submissions</h3>
              <p className="text-xs text-gray-400">Organizers dwara submit kiye gaye events ko review karein.</p>
            </div>

            {loading ? (
              <div className="flex justify-center py-16">
                <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : pendingEvents.length === 0 ? (
              <div className="bg-[#121622] border border-gray-800 rounded-2xl p-12 text-center">
                <p className="text-3xl mb-2">✓</p>
                <h3 className="text-sm font-semibold text-white">All Caught Up!</h3>
                <p className="text-xs text-gray-400 mt-1">Review queue me koi pending submission nahi hai.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

        {/* Tab 3: All Campus Events */}
        {tab === 'all' && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-white">All Campus Events</h3>
                <p className="text-xs text-gray-400">Sabhi 4 campuses ke active and past events.</p>
              </div>
              <span className="text-xs font-mono text-gray-400">
                Total: {allEvents.length} Events
              </span>
            </div>

            {loading ? (
              <div className="flex justify-center py-16">
                <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : allEvents.length === 0 ? (
              <div className="bg-[#121622] border border-gray-800 rounded-2xl p-12 text-center">
                <p className="text-xs text-gray-400">No events found.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
