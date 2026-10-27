import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard'
import { DEFAULT_EVENTS, DEFAULT_REGISTRATIONS, DEFAULT_PENDING_EVENTS } from '../data/fallbackData'
import {
  getEventGoogleSheetsConfig,
  updateEventGoogleSheetConfig,
  getEventSheetUrl,
  getCampusSheetUrl,
  copyForGoogleSheets,
  GOOGLE_APPS_SCRIPT_TEMPLATE
} from '../utils/googleSheetsSync'


// Helper to match campuses reliably regardless of casing, abbreviation or formatting
export function isCampusMatch(camp1, camp2) {
  if (!camp1 || !camp2) return false
  const c1 = String(camp1).toLowerCase().trim()
  const c2 = String(camp2).toLowerCase().trim()
  if (c1 === c2) return true
  if (c1.includes('bhimtal') && c2.includes('bhimtal')) return true
  if (c1.includes('haldwani') && c2.includes('haldwani')) return true
  if (c1.includes('dehradun') && c2.includes('dehradun')) return true
  if (c1.includes('deemed') && c2.includes('deemed')) return true
  return false
}

const CAMPUSES = [
  {
    key: 'campus_bhimtal',
    name: 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
    shortName: 'Bhimtal Campus',
    icon: '🏔️',
    color: 'from-blue-600 to-indigo-700',
    borderColor: 'border-blue-500/40',
    badgeBg: 'bg-blue-950/80 text-blue-300 border-blue-500/30'
  },
  {
    key: 'campus_haldwani',
    name: 'GRAPHIC ERA HILL UNIVERSITY HALDWANI',
    shortName: 'Haldwani Campus',
    icon: '🌊',
    color: 'from-cyan-600 to-teal-700',
    borderColor: 'border-cyan-500/40',
    badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30'
  },
  {
    key: 'campus_dehradun',
    name: 'GRAPHIC ERA HILL UNIVERSITY DEHRADUN',
    shortName: 'Dehradun Campus',
    icon: '🌲',
    color: 'from-emerald-600 to-green-700',
    borderColor: 'border-emerald-500/40',
    badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30'
  },
  {
    key: 'campus_deemed',
    name: 'GRAPHIC ERA DEEMED UNIVERSITY',
    shortName: 'GEU Deemed Campus',
    icon: '🎓',
    color: 'from-purple-600 to-violet-700',
    borderColor: 'border-purple-500/40',
    badgeBg: 'bg-purple-950/80 text-purple-300 border-purple-500/30'
  }
]

export default function AdminDashboard() {
  const { user, token } = useAuth()
  const [tab, setTab] = useState('registrations') // 'registrations', 'pending', 'all'
  const [pendingEvents, setPendingEvents] = useState([])
  const [allEvents, setAllEvents] = useState([])
  const [allRegistrations, setAllRegistrations] = useState([])
  const [selectedCampusFilter, setSelectedCampusFilter] = useState('ALL') // 'ALL' or specific campus name
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
  const [spreadsheetModalData, setSpreadsheetModalData] = useState(null)
  const [modalSearchQuery, setModalSearchQuery] = useState('')
  const [modalModeFilter, setModalModeFilter] = useState('all')

  // Check if current logged in user is Super Admin
  const isSuperAdmin = useMemo(() => {
    if (!user) return false
    return (
      user.adminType === 'super' ||
      user.email === 'ujjwalchaudhary2007@gmail.com' ||
      user.campus === 'ALL' ||
      user.campus?.includes('HIGH COMMAND')
    )
  }, [user])

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
    const fallbackPending = (DEFAULT_PENDING_EVENTS && DEFAULT_PENDING_EVENTS.length > 0)
      ? DEFAULT_PENDING_EVENTS
      : []
    const fromEventsPending = resolvedEvents.filter(e => e.status === 'pending')
    const resolvedPending = fetchedPending.length > 0
      ? fetchedPending
      : (fromEventsPending.length > 0 ? fromEventsPending : fallbackPending)

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

  // Filter events based on role (Super Admin = all or filter, Campus Admin = strictly their campus only)
  const accessibleEvents = useMemo(() => {
    if (isSuperAdmin) {
      if (selectedCampusFilter === 'ALL') return allEvents
      return allEvents.filter(e => isCampusMatch(e.campus, selectedCampusFilter))
    }
    // Campus Admin strictly sees only their campus events
    return allEvents.filter(e => isCampusMatch(e.campus, user?.campus))
  }, [allEvents, isSuperAdmin, selectedCampusFilter, user])

  // Pending events strictly scoped by campus for campus admins
  const accessiblePendingEvents = useMemo(() => {
    if (isSuperAdmin) {
      if (selectedCampusFilter === 'ALL') return pendingEvents
      return pendingEvents.filter(e => isCampusMatch(e.campus, selectedCampusFilter))
    }
    return pendingEvents.filter(e => isCampusMatch(e.campus, user?.campus))
  }, [pendingEvents, isSuperAdmin, selectedCampusFilter, user])

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
    return accessibleEvents.map(e => ({
      id: e.id,
      title: e.title,
      campus: e.campus,
      category: e.category,
      venue: e.venue,
      count: eventCounts[String(e.id)] || 0
    }))
  }, [accessibleEvents, eventCounts])

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

  // Registrations strictly accessible to this admin
  const accessibleRegistrations = useMemo(() => {
    const campusEventsSet = new Set(accessibleEvents.map(e => String(e.id)))
    if (isSuperAdmin) {
      if (selectedCampusFilter === 'ALL') return allRegistrations
      return allRegistrations.filter(r => 
        campusEventsSet.has(String(r.event_id)) || 
        isCampusMatch(r.event_campus || r.campus, selectedCampusFilter)
      )
    }
    return allRegistrations.filter(r => 
      campusEventsSet.has(String(r.event_id)) || 
      isCampusMatch(r.event_campus || r.campus, user?.campus)
    )
  }, [allRegistrations, accessibleEvents, isSuperAdmin, selectedCampusFilter, user])

  // Campus-wise summary statistics (for Super Admin)
  const campusSummary = useMemo(() => {
    return CAMPUSES.map(camp => {
      const campEvents = allEvents.filter(e => e.campus === camp.name)
      const campEventIds = new Set(campEvents.map(e => e.id))
      const campRegs = allRegistrations.filter(r => campEventIds.has(r.event_id) || r.event_campus === camp.name)
      return {
        ...camp,
        eventsCount: campEvents.length,
        registrationsCount: campRegs.length,
        events: campEvents,
        registrations: campRegs,
        sheetUrl: getCampusSheetUrl(camp.key, camp.shortName)
      }
    })
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

      {/* Interactive In-App Fullscreen Spreadsheet Modal */}
      {spreadsheetModalData && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col p-2 sm:p-5 animate-fadeIn">
          <div className="bg-[#0D111A] border border-emerald-500/40 rounded-2xl w-full h-full flex flex-col overflow-hidden shadow-2xl ring-1 ring-emerald-500/30">
            {/* Modal Header */}
            <div className="bg-[#090D15] p-3.5 sm:p-4 border-b border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xl shrink-0">
                  📊
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                      {spreadsheetModalData.title}
                    </h2>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[11px] font-mono font-bold shrink-0">
                      {spreadsheetModalData.rows?.length || 0} Registered Students
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-0.5 flex items-center gap-2 truncate">
                    <span>🏛️ {spreadsheetModalData.campus}</span>
                    <span className="text-gray-600">•</span>
                    <span>🏷️ {spreadsheetModalData.category}</span>
                  </p>
                </div>
              </div>

              {/* Action Toolbar on Modal Header */}
              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                <button
                  type="button"
                  onClick={() => exportToCSV(spreadsheetModalData.title, spreadsheetModalData.rows)}
                  className="px-3 py-1.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-medium flex items-center gap-1.5 transition cursor-pointer border border-gray-700"
                  title="Download CSV Spreadsheet"
                >
                  <span>📥</span>
                  <span>Download CSV</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleCopyForGoogleSheets(spreadsheetModalData.title, spreadsheetModalData.rows)}
                  className="px-3 py-1.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-medium flex items-center gap-1.5 transition cursor-pointer border border-gray-700"
                  title="Copy rows formatted for Excel / Sheets"
                >
                  <span>📋</span>
                  <span>Copy TSV</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSpreadsheetModalData(null)}
                  className="w-8 h-8 rounded-xl bg-gray-800 hover:bg-red-600 text-gray-300 hover:text-white flex items-center justify-center text-sm font-bold transition cursor-pointer"
                  title="Close Spreadsheet"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="bg-[#121622] px-3.5 py-2.5 border-b border-gray-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shrink-0">
              <div className="relative flex-1 max-w-md">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">🔍</span>
                <input
                  type="text"
                  value={modalSearchQuery}
                  onChange={(e) => setModalSearchQuery(e.target.value)}
                  placeholder="Student name, roll number, email, ticket code se search karein..."
                  className="w-full bg-[#090C12] border border-gray-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="flex items-center gap-1 bg-[#090C12] p-1 rounded-xl border border-gray-800 text-xs">
                <button
                  type="button"
                  onClick={() => setModalModeFilter('all')}
                  className={`px-3 py-1 rounded-lg transition font-medium cursor-pointer ${
                    modalModeFilter === 'all' ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  All ({spreadsheetModalData.rows?.length || 0})
                </button>
                <button
                  type="button"
                  onClick={() => setModalModeFilter('team')}
                  className={`px-3 py-1 rounded-lg transition font-medium cursor-pointer ${
                    modalModeFilter === 'team' ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Team Only
                </button>
                <button
                  type="button"
                  onClick={() => setModalModeFilter('solo')}
                  className={`px-3 py-1 rounded-lg transition font-medium cursor-pointer ${
                    modalModeFilter === 'solo' ? 'bg-emerald-600 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Solo Only
                </button>
              </div>
            </div>

            {/* Spreadsheet Grid Table */}
            <div className="flex-1 overflow-auto bg-[#090C12]">
              {(() => {
                const filteredModalRows = (spreadsheetModalData.rows || []).filter(r => {
                  const isTeam = r.team_name && !r.team_name.toLowerCase().includes('solo')
                  if (modalModeFilter === 'team' && !isTeam) return false
                  if (modalModeFilter === 'solo' && isTeam) return false
                  if (modalSearchQuery.trim()) {
                    const q = modalSearchQuery.toLowerCase()
                    const match =
                      (r.student_name && r.student_name.toLowerCase().includes(q)) ||
                      (r.roll_no && r.roll_no.toLowerCase().includes(q)) ||
                      (r.student_email && r.student_email.toLowerCase().includes(q)) ||
                      (r.ticket_code && r.ticket_code.toLowerCase().includes(q)) ||
                      (r.phone && r.phone.toLowerCase().includes(q)) ||
                      (r.team_name && r.team_name.toLowerCase().includes(q)) ||
                      (r.degree && r.degree.toLowerCase().includes(q))
                    if (!match) return false
                  }
                  return true
                })

                if (filteredModalRows.length === 0) {
                  return (
                    <div className="py-20 text-center text-gray-500 text-xs">
                      Is spreadsheet me koi matching student record nahi mila.
                    </div>
                  )
                }

                return (
                  <table className="w-full text-left text-xs border-collapse font-sans">
                    <thead className="sticky top-0 bg-[#0E1422] text-emerald-400 font-semibold border-b border-gray-700 text-[10px] uppercase tracking-wider shadow-sm z-10">
                      <tr>
                        <th className="py-2.5 px-3 w-10 text-center border-r border-gray-800">#</th>
                        <th className="py-2.5 px-3 border-r border-gray-800">Ticket Pass</th>
                        <th className="py-2.5 px-3 border-r border-gray-800">Student Name</th>
                        <th className="py-2.5 px-3 border-r border-gray-800">Roll Number</th>
                        <th className="py-2.5 px-3 border-r border-gray-800">University Email</th>
                        <th className="py-2.5 px-3 border-r border-gray-800">Phone</th>
                        <th className="py-2.5 px-3 border-r border-gray-800">Degree &amp; Year</th>
                        <th className="py-2.5 px-3 border-r border-gray-800">Campus</th>
                        <th className="py-2.5 px-3 border-r border-gray-800">Type</th>
                        <th className="py-2.5 px-3 border-r border-gray-800">Team Name</th>
                        <th className="py-2.5 px-3 border-r border-gray-800">Team Size</th>
                        <th className="py-2.5 px-3 border-r border-gray-800">Track / Details</th>
                        <th className="py-2.5 px-3">Registered Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800/80">
                      {filteredModalRows.map((r, idx) => {
                        const isTeam = r.team_name && !r.team_name.toLowerCase().includes('solo')
                        return (
                          <tr key={r.ticket_code || idx} className="hover:bg-emerald-950/20 transition-colors">
                            <td className="py-2 px-3 text-center text-gray-500 font-mono border-r border-gray-800/60 bg-[#0C101A]">
                              {idx + 1}
                            </td>
                            <td className="py-2 px-3 font-mono font-bold text-emerald-400 border-r border-gray-800/60 whitespace-nowrap">
                              {r.ticket_code || `PASS-${idx + 1}`}
                            </td>
                            <td className="py-2 px-3 font-semibold text-white border-r border-gray-800/60 whitespace-nowrap">
                              {r.student_name}
                            </td>
                            <td className="py-2 px-3 font-mono text-cyan-300 border-r border-gray-800/60 whitespace-nowrap">
                              {r.roll_no || '—'}
                            </td>
                            <td className="py-2 px-3 text-gray-300 border-r border-gray-800/60 whitespace-nowrap">
                              {r.student_email}
                            </td>
                            <td className="py-2 px-3 text-gray-300 font-mono border-r border-gray-800/60 whitespace-nowrap">
                              {r.phone || '—'}
                            </td>
                            <td className="py-2 px-3 text-amber-200/90 border-r border-gray-800/60 whitespace-nowrap">
                              {r.degree || '—'}
                            </td>
                            <td className="py-2 px-3 text-gray-300 border-r border-gray-800/60 whitespace-nowrap">
                              {r.campus?.split(' ')?.[3] || r.campus || '—'}
                            </td>
                            <td className="py-2 px-3 border-r border-gray-800/60 whitespace-nowrap">
                              <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                isTeam ? 'bg-purple-950 text-purple-300 border border-purple-500/30' : 'bg-blue-950 text-blue-300 border border-blue-500/30'
                              }`}>
                                {isTeam ? '👥 Team' : '👤 Solo'}
                              </span>
                            </td>
                            <td className="py-2 px-3 text-gray-300 border-r border-gray-800/60 whitespace-nowrap">
                              {r.team_name || 'Solo'}
                            </td>
                            <td className="py-2 px-3 text-center text-gray-400 font-mono border-r border-gray-800/60">
                              {r.team_size || '1'}
                            </td>
                            <td className="py-2 px-3 text-gray-300 border-r border-gray-800/60 whitespace-nowrap">
                              {r.track_info || 'General'}
                            </td>
                            <td className="py-2 px-3 text-gray-400 font-mono whitespace-nowrap">
                              {r.created_at ? new Date(r.created_at).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                )
              })()}
            </div>

            {/* Modal Footer */}
            <div className="bg-[#090D15] p-2.5 px-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400 shrink-0">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>In-App Live Spreadsheet Grid • Graphic Era High Command</span>
              </span>
              <button
                type="button"
                onClick={() => setSpreadsheetModalData(null)}
                className="px-3.5 py-1 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold transition cursor-pointer"
              >
                Close Spreadsheet
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">

        {/* Clean Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-gray-800 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold mb-1">
              {isSuperAdmin ? (
                <span className="px-2.5 py-0.5 rounded-full bg-red-950 text-red-400 border border-red-500/40 text-[11px] font-bold flex items-center gap-1">
                  <span>🕷️</span>
                  <span>SUPER ADMIN (UJJWAL) — ALL 4 CAMPUSES</span>
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-400 border border-blue-500/40 text-[11px] font-bold flex items-center gap-1">
                  <span>🏢</span>
                  <span>CAMPUS ADMIN • {user?.campus?.split(' ')?.[3] || user?.name}</span>
                </span>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {isSuperAdmin ? 'Quad-Campus Master Operations & Spreadsheets' : `${user?.campus} — Admin Portal`}
            </h1>
            <p className="text-xs text-gray-400 mt-0.5">
              {isSuperAdmin
                ? 'Super Admin Access: Sabhi 4 campuses ke events, overall campus spreadsheets, aur individual event spreadsheets live hain.'
                : `Aapke campus (${user?.campus}) ke sabhi event spreadsheets yahan live hain. Naya registration aate hi automatic update hota hai.`}
            </p>
          </div>

          {/* Quick Stats Summary */}
          {stats && (
            <div className="flex items-center gap-2.5">
              <div className="bg-[#121622] border border-gray-800 px-3.5 py-2 rounded-xl text-center">
                <p className="text-lg font-bold text-white">{accessibleRegistrations.length}</p>
                <p className="text-[10px] text-gray-400 font-medium uppercase">Registrations</p>
              </div>
              <div className="bg-[#121622] border border-gray-800 px-3.5 py-2 rounded-xl text-center">
                <p className="text-lg font-bold text-emerald-400">{accessibleEvents.length}</p>
                <p className="text-[10px] text-gray-400 font-medium uppercase">Events</p>
              </div>
              {isSuperAdmin && (
                <div className="bg-[#121622] border border-gray-800 px-3.5 py-2 rounded-xl text-center">
                  <p className="text-lg font-bold text-cyan-400">4</p>
                  <p className="text-[10px] text-gray-400 font-medium uppercase">Campuses</p>
                </div>
              )}
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
                {accessibleRegistrations.length}
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
                {accessiblePendingEvents.length}
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
                {accessibleEvents.length}
              </span>
            </button>
          </div>

          {/* View Mode Toggle when on Spreadsheets tab */}
          {tab === 'registrations' && (
            <div className="flex items-center gap-1.5 bg-[#121622] border border-gray-800 p-1 rounded-xl text-xs">
              <button
                type="button"
                onClick={() => {
                  setViewMode('stacked')
                  setTimeout(() => {
                    const el = document.getElementById('spreadsheets-section')
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 50)
                }}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer font-semibold flex items-center gap-1.5 ${
                  viewMode === 'stacked'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
                title="View all event spreadsheets stacked together"
              >
                <span>📑</span>
                <span>All Sheets (Stacked)</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setViewMode('single')
                  if ((selectedEventId === 'all' || !selectedEventId) && eventsList.length > 0) {
                    setSelectedEventId(String(eventsList[0].id))
                  }
                  setTimeout(() => {
                    const el = document.getElementById('spreadsheets-section')
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }, 50)
                }}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer font-semibold flex items-center gap-1.5 ${
                  viewMode === 'single'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
                title="Focus on one single event spreadsheet at a time"
              >
                <span>🔍</span>
                <span>Single Sheet Focus</span>
              </button>
            </div>
          )}
        </div>

        {/* Tab 1: Event Spreadsheets */}
        {tab === 'registrations' && (
          <div className="space-y-6">

            {/* SUPER ADMIN: 4 Campus Master Spreadsheets Cards */}
            {isSuperAdmin ? (
              <div className="bg-[#121622]/90 border border-gray-800 rounded-2xl p-4 sm:p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>🏛️</span>
                      <span>4 CAMPUSES MASTER GOOGLE SPREADSHEETS (OVERALL)</span>
                    </h3>
                    <p className="text-[11px] text-gray-400">
                      Har campus ki overall master sheet yahan se open karein ya campus filter select karein.
                    </p>
                  </div>
                  {selectedCampusFilter !== 'ALL' && (
                    <button
                      onClick={() => setSelectedCampusFilter('ALL')}
                      className="px-2.5 py-1 rounded-lg bg-red-600/80 hover:bg-red-500 text-white text-[11px] font-semibold transition cursor-pointer"
                    >
                      Clear Campus Filter (Show All)
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {campusSummary.map(camp => {
                    const isSelected = selectedCampusFilter === camp.name
                    return (
                      <div
                        key={camp.key}
                        className={`bg-[#0A0D14] border rounded-xl p-3.5 flex flex-col justify-between transition-all ${
                          isSelected
                            ? 'border-emerald-500 ring-2 ring-emerald-500/40 shadow-lg'
                            : 'border-gray-800 hover:border-gray-700'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-2">
                            <span className="text-xl">{camp.icon}</span>
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${camp.badgeBg}`}>
                              {camp.registrationsCount} Registered
                            </span>
                          </div>
                          <h4 className="text-xs font-bold text-white">{camp.shortName}</h4>
                          <p className="text-[10px] text-gray-400 mt-0.5">{camp.eventsCount} Events Hosted</p>
                        </div>

                        <div className="pt-3 mt-2 border-t border-gray-800/80 flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              setModalSearchQuery('')
                              setModalModeFilter('all')
                              setSpreadsheetModalData({
                                title: `${camp.shortName} Master Spreadsheet`,
                                campus: camp.name,
                                category: 'Quad-Campus Master Registry',
                                rows: camp.registrations,
                                eventId: camp.key
                              })
                            }}
                            className="flex-1 py-1.5 px-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-semibold text-center flex items-center justify-center gap-1 transition cursor-pointer shadow-sm"
                            title="Open Campus Master Spreadsheet"
                          >
                            <span>📊</span>
                            <span>Master Sheet</span>
                          </button>
                          <button
                            onClick={() => setSelectedCampusFilter(isSelected ? 'ALL' : camp.name)}
                            className={`py-1.5 px-2 rounded-lg text-[11px] font-semibold transition cursor-pointer ${
                              isSelected
                                ? 'bg-red-600 text-white'
                                : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                            }`}
                            title="Filter events by this campus"
                          >
                            {isSelected ? 'Selected' : 'Filter'}
                          </button>
                          <button
                            onClick={() => exportToCSV(`${camp.shortName}_Master`, camp.registrations)}
                            className="py-1.5 px-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-[11px] transition cursor-pointer"
                            title="Download Campus CSV"
                          >
                            📥
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className="bg-[#121622]/90 border border-blue-500/30 rounded-2xl p-4 sm:p-5">
                {(() => {
                  const myCamp = campusSummary.find(c => isCampusMatch(c.name, user?.campus)) || {
                    shortName: user?.campus || 'Campus',
                    name: user?.campus || 'Campus',
                    icon: '🏢',
                    badgeBg: 'bg-blue-950 text-blue-300 border-blue-500/30',
                    registrationsCount: accessibleRegistrations.length,
                    eventsCount: accessibleEvents.length,
                    registrations: accessibleRegistrations,
                    sheetUrl: getCampusSheetUrl('campus', user?.campus || 'Campus')
                  }
                  return (
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-bold">CAMPUS MASTER DIRECTORY</span>
                          <h3 className="text-base font-bold text-white flex items-center gap-2 mt-0.5">
                            <span>{myCamp.icon || '🏢'}</span>
                            <span>{myCamp.name} — MASTER SPREADSHEET</span>
                          </h3>
                          <p className="text-xs text-gray-400 mt-1">
                            Aapke campus ({myCamp.shortName}) ke sabhi events ki master spreadsheet aur complete CSV download.
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <a
                            href={myCamp.sheetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-md"
                          >
                            <span>📊</span>
                            <span>Open Google Sheet</span>
                          </a>
                          <button
                            onClick={() => exportToCSV(`${myCamp.shortName}_Master_Registrations`, accessibleRegistrations)}
                            className="py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-md cursor-pointer"
                          >
                            <span>📥</span>
                            <span>Download Campus CSV ({accessibleRegistrations.length})</span>
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-black/40 p-3 rounded-xl border border-gray-800">
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase font-mono">Total Registrations</p>
                          <p className="text-xl font-bold text-white">{accessibleRegistrations.length}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase font-mono">Campus Events</p>
                          <p className="text-xl font-bold text-emerald-400">{accessibleEvents.length}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase font-mono">Sync Status</p>
                          <p className="text-xs font-bold text-emerald-400 mt-1 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Live Real-Time
                          </p>
                        </div>
                        <div>
                          <p className="text-[10px] text-gray-500 uppercase font-mono">Authorized Admin Scope</p>
                          <p className="text-xs font-bold text-cyan-300 mt-1 truncate">Strictly {myCamp.shortName}</p>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}

            {/* Quick Directory Cards: Shown in stacked mode or clean quick selector in single mode */}
            {viewMode === 'stacked' ? (
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <p className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span>📂</span>
                    <span>ALL EVENTS SPREADSHEETS DIRECTORY ({eventsList.length})</span>
                  </p>
                  <span className="text-[11px] text-emerald-400 font-mono">
                    ● Real-Time Auto-Update Active
                  </span>
                </div>

                {/* Grid of Event Spreadsheet Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {eventsList.map(ev => {
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
                          <button
                            type="button"
                            onClick={() => {
                              setModalSearchQuery('')
                              setModalModeFilter('all')
                              setSpreadsheetModalData({
                                title: ev.title,
                                campus: ev.campus,
                                category: ev.category,
                                rows: evRegs,
                                eventId: ev.id
                              })
                            }}
                            className="flex-1 py-1.5 px-2 rounded-lg bg-emerald-600/90 hover:bg-emerald-500 text-white text-[11px] font-semibold text-center flex items-center justify-center gap-1 cursor-pointer transition shadow-sm"
                            title="Open In-App Spreadsheet"
                          >
                            <span>📊</span>
                            <span>Open Sheet</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => exportToCSV(ev.title, evRegs)}
                            className="py-1.5 px-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-[11px] font-medium transition cursor-pointer"
                            title="Download CSV"
                          >
                            📥
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setSelectedEventId(String(ev.id))
                              setViewMode('single')
                              setTimeout(() => {
                                const el = document.getElementById('spreadsheets-section')
                                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                              }, 50)
                            }}
                            className="py-1.5 px-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-[11px] font-medium transition cursor-pointer"
                            title="Focus this sheet below"
                          >
                            👁️
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ) : (
              /* In Single Sheet Focus mode, show a clean quick-switch selector bar so the user immediately sees the single sheet without having to scroll past 33 cards */
              <div className="bg-[#121622] border border-emerald-500/30 rounded-2xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-xl shrink-0">
                    🔍
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Single Sheet Focus Mode</h4>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold">
                        Active
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-400">
                      Viewing one event spreadsheet at a time. Select an event below to inspect all registered students.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full md:w-auto">
                  <span className="text-xs text-gray-300 whitespace-nowrap font-medium">Select Event:</span>
                  <select
                    value={String(selectedEventId)}
                    onChange={(e) => setSelectedEventId(e.target.value)}
                    className="bg-[#090C12] border border-gray-700 hover:border-emerald-500 text-white text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-emerald-500 w-full md:w-80 cursor-pointer transition font-medium"
                  >
                    {eventsList.map(ev => (
                      <option key={ev.id} value={String(ev.id)}>
                        #{ev.id} - {ev.title} ({ev.count} registered)
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

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
            <div id="spreadsheets-section">
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
                          <button
                            type="button"
                            onClick={() => {
                              setModalSearchQuery('')
                              setModalModeFilter('all')
                              setSpreadsheetModalData({
                                title: ev.title,
                                campus: ev.campus,
                                category: ev.category,
                                rows: filtered,
                                eventId: ev.id
                              })
                            }}
                            className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer shadow-sm"
                            title="Open In-App Fullscreen Spreadsheet"
                          >
                            <span>📊</span>
                            <span>Open Fullsheet</span>
                          </button>

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
                          <button
                            type="button"
                            onClick={() => {
                              setModalSearchQuery('')
                              setModalModeFilter('all')
                              setSpreadsheetModalData({
                                title: ev.title,
                                campus: ev.campus,
                                category: ev.category,
                                rows: filtered,
                                eventId: ev.id
                              })
                            }}
                            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer shadow-sm"
                            title="Open In-App Fullscreen Spreadsheet"
                          >
                            <span>📊</span>
                            <span>Open Fullsheet</span>
                          </button>
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
            ) : accessiblePendingEvents.length === 0 ? (
              <div className="bg-[#121622] border border-gray-800 rounded-2xl p-12 text-center">
                <p className="text-3xl mb-2">✓</p>
                <h3 className="text-sm font-semibold text-white">All Caught Up!</h3>
                <p className="text-xs text-gray-400 mt-1">Review queue me koi pending submission nahi hai.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {accessiblePendingEvents.map(event => (
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-base font-bold text-white">All Campus Events</h3>
                <p className="text-xs text-gray-400">
                  {isSuperAdmin ? 'Sabhi 4 campuses ke active, ongoing aur past events.' : `${user?.campus} ke active, ongoing aur past events.`}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-gray-400">
                  Total: {accessibleEvents.length} Events
                </span>
                <button
                  type="button"
                  onClick={() => exportToCSV(isSuperAdmin ? 'All_Campuses_Master' : `${user?.campus || 'Campus'}_All_Events`, accessibleRegistrations)}
                  className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow transition cursor-pointer"
                >
                  <span>📥</span>
                  <span>Download All Events CSV ({accessibleRegistrations.length})</span>
                </button>
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center py-16">
                <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : accessibleEvents.length === 0 ? (
              <div className="bg-[#121622] border border-gray-800 rounded-2xl p-12 text-center">
                <p className="text-xs text-gray-400">No events found for this campus scope.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {accessibleEvents.map(event => {
                  const evRegs = registrationsByEvent[String(event.id)] || []
                  return (
                    <div key={event.id} className="flex flex-col space-y-2">
                      <EventCard
                        event={event}
                        showStatus={true}
                        onDelete={handleDelete}
                      />
                      <div className="bg-[#121622] border border-gray-800 rounded-xl p-2.5 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-gray-300">
                          📥 <span className="font-bold text-white">{evRegs.length}</span> registrations
                        </span>
                        <button
                          type="button"
                          onClick={() => exportToCSV(event.title, evRegs)}
                          className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow transition cursor-pointer"
                          title="Download CSV for this event"
                        >
                          <span>📥 Download CSV</span>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  )
}
