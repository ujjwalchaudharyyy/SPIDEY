import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard'

export default function OrganizerDashboard() {
  const { token, user } = useAuth()
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState(null)
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: 'Technical',
    venue: '',
    campus: user?.campus || 'North Campus',
    event_date: '',
    event_time: ''
  })

  const categories = ['Academic', 'Cultural', 'Sports', 'Technical', 'Workshop', 'Social', 'Other']
  const campuses = ['North Campus', 'South Campus', 'East Campus', 'West Campus']
  const headers = { Authorization: `Bearer ${token}` }

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  const fetchMyEvents = async () => {
    setLoading(true)
    try {
      const res = await axios.get('/api/events/my', { headers })
      setEvents(res.data)
    } catch (err) {
      console.error('Failed to load events', err)
    }
    setLoading(false)
  }

  useEffect(() => { fetchMyEvents() }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await axios.post('/api/events/submit', form, { headers })
      showToast('Event dispatched to SHIELD HQ for approval! 🕷️')
      setForm({
        title: '',
        description: '',
        category: 'Technical',
        venue: '',
        campus: user?.campus || 'North Campus',
        event_date: '',
        event_time: ''
      })
      fetchMyEvents()
    } catch (err) {
      showToast(err.response?.data?.error || 'Failed to dispatch event', 'error')
    }
    setSubmitting(false)
  }

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to retract this event briefing?')) return
    try {
      await axios.delete(`/api/events/${id}`, { headers })
      showToast('Mission briefing retracted.')
      fetchMyEvents()
    } catch (err) {
      showToast('Failed to delete event', 'error')
    }
  }

  const pendingCount = events.filter(e => e.status === 'pending').length
  const approvedCount = events.filter(e => e.status === 'approved').length
  const rejectedCount = events.filter(e => e.status === 'rejected').length

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-300 text-xs font-orbitron mb-2">
            <span>📋</span> ORGANIZER DISPATCH CONTROL
          </div>
          <h1 className="text-3xl font-extrabold font-orbitron text-white">
            MISSION DISPATCH & EVENT MANAGEMENT
          </h1>
          <p className="text-sm font-rajdhani text-gray-400 mt-1">
            Dispatch events across the 4-Campus Grid for Admin verification before broadcasting to students.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="spider-card text-center border-yellow-500/30">
            <p className="text-3xl font-black font-orbitron text-yellow-400">{pendingCount}</p>
            <p className="text-xs font-orbitron text-gray-400 uppercase tracking-widest mt-1">UNDER REVIEW</p>
          </div>
          <div className="spider-card text-center border-emerald-500/30">
            <p className="text-3xl font-black font-orbitron text-emerald-400">{approvedCount}</p>
            <p className="text-xs font-orbitron text-gray-400 uppercase tracking-widest mt-1">LIVE IN MULTIVERSE</p>
          </div>
          <div className="spider-card text-center border-rose-500/30">
            <p className="text-3xl font-black font-orbitron text-rose-400">{rejectedCount}</p>
            <p className="text-xs font-orbitron text-gray-400 uppercase tracking-widest mt-1">DISAPPROVED</p>
          </div>
        </div>

        {/* Dispatch New Event Form */}
        <div className="spider-card mb-10 border-red-500/40">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/50 flex items-center justify-center">
              <span className="text-xl">✨</span>
            </div>
            <div>
              <h2 className="text-xl font-bold font-orbitron text-white">SUBMIT EVENT FOR APPROVAL</h2>
              <p className="text-xs font-rajdhani text-gray-400">Fill in the event parameters for review</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="spider-label">Event Title</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="spider-input"
                  placeholder="e.g. Spider-Man Web Coding Challenge 2026"
                  required
                />
              </div>

              <div>
                <label className="spider-label">Category</label>
                <select name="category" value={form.category} onChange={handleChange} className="spider-input bg-black">
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div>
              <label className="spider-label">Event Description & Briefing</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="spider-input"
                rows={3}
                placeholder="Details about eligibility, rules, prizes, or guest speakers..."
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="spider-label">Target Campus (4-Campus Grid)</label>
                <select name="campus" value={form.campus} onChange={handleChange} className="spider-input bg-black">
                  {campuses.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="spider-label">Venue / Hall</label>
                <input
                  name="venue"
                  value={form.venue}
                  onChange={handleChange}
                  className="spider-input"
                  placeholder="e.g. Oscorp Hall A"
                  required
                />
              </div>

              <div>
                <label className="spider-label">Event Date</label>
                <input
                  type="date"
                  name="event_date"
                  value={form.event_date}
                  onChange={handleChange}
                  className="spider-input"
                  required
                />
              </div>

              <div>
                <label className="spider-label">Start Time</label>
                <input
                  type="time"
                  name="event_time"
                  value={form.event_time}
                  onChange={handleChange}
                  className="spider-input"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="btn-spider-primary w-full sm:w-auto mt-2 text-xs flex items-center justify-center gap-2"
            >
              {submitting ? 'DISPATCHING BRIEFING...' : '🚀 DISPATCH EVENT FOR APPROVAL'}
            </button>
          </form>
        </div>

        {/* My Events */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold font-orbitron text-white">YOUR DISPATCHED EVENTS</h2>
          <span className="text-xs font-rajdhani text-gray-400">{events.length} Total Submissions</span>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : events.length === 0 ? (
          <div className="spider-card text-center py-14">
            <p className="text-gray-400 font-rajdhani text-sm">No events dispatched yet. Fill out the mission form above!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map(event => (
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
    </div>
  )
}
