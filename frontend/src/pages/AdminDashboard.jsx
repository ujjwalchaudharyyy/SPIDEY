import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard'

export default function AdminDashboard() {
  const { token } = useAuth()
  const [tab, setTab] = useState('pending')
  const [pendingEvents, setPendingEvents] = useState([])
  const [allEvents, setAllEvents] = useState([])
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState(null)

  const headers = { Authorization: `Bearer ${token}` }

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const [pendingRes, allRes, statsRes] = await Promise.all([
        axios.get('/api/events/pending', { headers }),
        axios.get('/api/events/all', { headers }),
        axios.get('/api/events/stats', { headers }),
      ])
      setPendingEvents(pendingRes.data)
      setAllEvents(allRes.data)
      setStats(statsRes.data)
    } catch (err) {
      console.error('Failed to load data', err)
    }
    setLoading(false)
  }

  useEffect(() => { fetchData() }, [])

  const handleApprove = async (id) => {
    try {
      await axios.put(`/api/events/${id}/approve`, {}, { headers })
      showToast('Event approved and pushed live across Campus grid! 🕸️')
      fetchData()
    } catch (err) {
      showToast('Approval protocol failed.', 'error')
    }
  }

  const handleReject = async (id, reason) => {
    try {
      await axios.put(`/api/events/${id}/reject`, { reason }, { headers })
      showToast('Event rejected with SHIELD briefing note.', 'info')
      fetchData()
    } catch (err) {
      showToast('Rejection failed.', 'error')
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Permanent override: delete this event from the database?')) return
    try {
      await axios.delete(`/api/events/${id}`, { headers })
      showToast('Event eradicated.')
      fetchData()
    } catch (err) {
      showToast('Failed to delete event', 'error')
    }
  }

  return (
    <div className="min-h-screen bg-[#070913] text-gray-100 pb-16">
      <Navbar />

      {toast && (
        <div className={`fixed top-24 right-6 z-50 px-5 py-3 rounded-xl shadow-spider-glow border text-xs font-orbitron tracking-wider flex items-center gap-2 backdrop-blur-xl ${
          toast.type === 'error' ? 'bg-red-950/90 text-red-300 border-red-500' : 'bg-emerald-950/90 text-emerald-300 border-emerald-500'
        }`}>
          <span>🕷️</span>
          <span>{toast.msg}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-orbitron mb-2">
            <span>🛡️</span> HIGH COMMAND CLEARANCE LEVEL 10
          </div>
          <h1 className="text-3xl font-extrabold font-orbitron text-white">
            SHIELD HEADQUARTERS & APPROVAL QUEUE
          </h1>
          <p className="text-sm font-rajdhani text-gray-400 mt-1">
            Authorize or reject organizer submissions before they broadcast to student feeds across all 4 campuses.
          </p>
        </div>

        {/* Stats Matrix */}
        {stats && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <div className="spider-card text-center py-4 border-red-500/30">
              <p className="text-2xl font-black font-orbitron text-red-500">{stats.totalEvents}</p>
              <p className="text-[10px] font-orbitron text-gray-400 mt-1">TOTAL EVENTS</p>
            </div>
            <div className="spider-card text-center py-4 border-yellow-500/30">
              <p className="text-2xl font-black font-orbitron text-yellow-400">{stats.pendingEvents}</p>
              <p className="text-[10px] font-orbitron text-gray-400 mt-1">PENDING QUEUE</p>
            </div>
            <div className="spider-card text-center py-4 border-emerald-500/30">
              <p className="text-2xl font-black font-orbitron text-emerald-400">{stats.approvedEvents}</p>
              <p className="text-[10px] font-orbitron text-gray-400 mt-1">LIVE BROADCAST</p>
            </div>
            <div className="spider-card text-center py-4 border-rose-500/30">
              <p className="text-2xl font-black font-orbitron text-rose-400">{stats.rejectedEvents}</p>
              <p className="text-[10px] font-orbitron text-gray-400 mt-1">REJECTED</p>
            </div>
            <div className="spider-card text-center py-4 border-blue-500/30">
              <p className="text-2xl font-black font-orbitron text-blue-400">{stats.totalRsvps}</p>
              <p className="text-[10px] font-orbitron text-gray-400 mt-1">STUDENT RSVPS</p>
            </div>
            <div className="spider-card text-center py-4 border-purple-500/30">
              <p className="text-2xl font-black font-orbitron text-purple-400">{stats.totalUsers}</p>
              <p className="text-[10px] font-orbitron text-gray-400 mt-1">TOTAL HEROES</p>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex gap-2 bg-black/60 border border-gray-800 p-1.5 rounded-2xl w-fit mb-6 backdrop-blur-md">
          <button
            onClick={() => setTab('pending')}
            className={`px-5 py-2.5 rounded-xl text-xs font-orbitron tracking-wider transition-all flex items-center gap-2 ${
              tab === 'pending'
                ? 'bg-gradient-to-r from-yellow-600 to-amber-700 text-white shadow-spider-glow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span>⏳ PENDING REVIEW</span>
            <span className="px-2 py-0.5 rounded-full bg-black/40 text-[10px]">{pendingEvents.length}</span>
          </button>
          <button
            onClick={() => setTab('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-orbitron tracking-wider transition-all flex items-center gap-2 ${
              tab === 'all'
                ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-spider-glow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span>📋 ALL DISPATCHES</span>
            <span className="px-2 py-0.5 rounded-full bg-black/40 text-[10px]">{allEvents.length}</span>
          </button>
        </div>

        {/* Content List */}
        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : tab === 'pending' ? (
          pendingEvents.length === 0 ? (
            <div className="spider-card text-center py-16">
              <div className="text-5xl mb-3">🛡️</div>
              <h3 className="text-lg font-bold font-orbitron text-white">ALL CAUGHT UP</h3>
              <p className="text-gray-400 font-rajdhani text-sm mt-1">No pending organizer briefings in queue.</p>
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
          )
        ) : (
          allEvents.length === 0 ? (
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
          )
        )}
      </div>
    </div>
  )
}
