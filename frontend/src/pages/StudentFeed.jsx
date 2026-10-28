import { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import EventCard from '../components/EventCard'
import CurvedCampusSlider from '../components/CurvedCampusSlider'
import CampusTimelineView from '../components/CampusTimelineView'
import CampusLeadershipSection from '../components/CampusLeadershipSection'
import WebShooterTransition from '../components/WebShooterTransition'
import { DEFAULT_CAMPUSES, DEFAULT_EVENTS } from '../data/fallbackData'

export default function StudentFeed({ initialTab = 'radar' }) {
  const { token, user } = useAuth()
  const [tab, setTab] = useState(initialTab)
  const [campuses, setCampuses] = useState(DEFAULT_CAMPUSES)
  const [activeCampusIndex, setActiveCampusIndex] = useState(0)
  const [events, setEvents] = useState(DEFAULT_EVENTS)
  const [rsvpEvents, setRsvpEvents] = useState([])
  const [rsvpedIds, setRsvpedIds] = useState(new Set())
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState(null)

  // Web-shooter animation state on tab/campus changes
  const [webShootKey, setWebShootKey] = useState(0)
  const [webShootLabel, setWebShootLabel] = useState('')

  const headers = { Authorization: `Bearer ${token}` }

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3000)
  }

  const triggerWebShoot = (label) => {
    setWebShootLabel(label)
    setWebShootKey(prev => prev + 1)
  }

  const fetchCampusesAndEvents = async () => {
    setLoading(true)
    let localCustomEvents = []
    try {
      localCustomEvents = JSON.parse(localStorage.getItem('spider_custom_events') || '[]')
    } catch (e) {
      localCustomEvents = []
    }

    let deletedIds = []
    try {
      deletedIds = JSON.parse(localStorage.getItem('spider_deleted_event_ids') || '[]')
    } catch (e) {
      deletedIds = []
    }

    try {
      const [campusesRes, eventsRes, rsvpRes] = await Promise.all([
        axios.get('/api/events/campuses'),
        axios.get('/api/events'),
        axios.get('/api/rsvp/my', { headers })
      ])
      setCampuses(campusesRes.data)
      const mergedEvents = [...localCustomEvents, ...(eventsRes.data || [])]
        .filter((v, i, a) => a.findIndex(t => String(t.id) === String(v.id)) === i)
        .filter(e => !deletedIds.includes(String(e.id)))
      setEvents(mergedEvents)
      setRsvpEvents(rsvpRes.data)
      setRsvpedIds(new Set(rsvpRes.data.map(e => e.id)))

      if (user?.campus) {
        const foundIdx = campusesRes.data.findIndex(c => c.name === user.campus)
        if (foundIdx !== -1) setActiveCampusIndex(foundIdx)
      }
    } catch (err) {
      console.warn('Backend API offline or on Vercel static deployment - using offline multiverse grid:', err.message)
      setCampuses(DEFAULT_CAMPUSES)
      const mergedEvents = [...localCustomEvents, ...DEFAULT_EVENTS]
        .filter((v, i, a) => a.findIndex(t => String(t.id) === String(v.id)) === i)
        .filter(e => !deletedIds.includes(String(e.id)))
      setEvents(mergedEvents)
    }
    setLoading(false)
  }

  const handleDeleteEvent = async (id) => {
    if (!confirm('Are you sure you want to delete this event? This will remove it from the platform.')) return

    try {
      const existing = JSON.parse(localStorage.getItem('spider_custom_events') || '[]')
      const updated = existing.filter(e => String(e.id) !== String(id))
      localStorage.setItem('spider_custom_events', JSON.stringify(updated))
    } catch (e) {}

    try {
      const deletedIds = JSON.parse(localStorage.getItem('spider_deleted_event_ids') || '[]')
      if (!deletedIds.includes(String(id))) {
        deletedIds.push(String(id))
        localStorage.setItem('spider_deleted_event_ids', JSON.stringify(deletedIds))
      }
    } catch (e) {}

    try {
      await axios.delete(`/api/events/${id}`, { headers })
    } catch (err) {}

    setEvents(prev => prev.filter(e => String(e.id) !== String(id)))
    showToast('🗑️ Event successfully removed!')
  }

  useEffect(() => {
    fetchCampusesAndEvents()
  }, [])

  useEffect(() => {
    setTab(initialTab)
  }, [initialTab])

  const handleSwitchTab = (newTab, label) => {
    triggerWebShoot(label)
    setTab(newTab)
  }

  const handleSelectCampusWithShooter = (idx) => {
    // If user is currently filling an event registration, protect active campus from accidental shift
    if (document.querySelector('[data-registration-modal="true"]')) {
      return
    }
    setActiveCampusIndex(idx)
  }

  const handleRsvp = async (eventId) => {
    triggerWebShoot('RSVP PROTOCOL LOCKED')
    try {
      const res = await axios.post(`/api/rsvp/${eventId}`, {}, { headers })
      if (res.data.rsvped) {
        setRsvpedIds(prev => new Set([...prev, eventId]))
        showToast("Spider-Sense RSVP Synced! 🕸️")
      } else {
        setRsvpedIds(prev => {
          const next = new Set(prev)
          next.delete(eventId)
          return next
        })
        showToast('RSVP removed.', 'info')
      }
      setEvents(prev => prev.map(e => e.id === eventId ? { ...e, rsvp_count: res.data.rsvp_count } : e))
      const myRes = await axios.get('/api/rsvp/my', { headers })
      setRsvpEvents(myRes.data)
    } catch (err) {
      showToast('RSVP action failed.', 'error')
    }
  }

  const activeCampus = campuses[activeCampusIndex]
  const currentCampusEvents = activeCampus
    ? events.filter(e => e.campus === activeCampus.name)
    : events

  return (
    <div className="min-h-screen bg-[#060810] text-gray-100 pb-20">
      <Navbar onTabClick={(label) => triggerWebShoot(label)} />

      {/* Spider-Man Web-Shooter Transition Blast Effect */}
      <WebShooterTransition triggerKey={webShootKey} label={webShootLabel} />

      {/* Spider-Man HUD Toast Notification */}
      {toast && (
        <div className={`fixed top-24 right-6 z-50 px-5 py-3 rounded-2xl shadow-spider-glow border text-xs font-mono tracking-wider flex items-center gap-2 backdrop-blur-xl animate-bounce ${
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
        {/* Banner Section */}
        <div className="relative rounded-3xl p-8 mb-6 overflow-hidden bg-gradient-to-r from-[#121B30] via-[#090D18] to-black border border-red-500/30 shadow-2xl">
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/40 border border-red-500/40 text-red-300 text-xs font-mono mb-3">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                GRAPHIC ERA QUAD-CAMPUS RADAR
              </div>
              <h1 className="spider-heading text-3xl sm:text-4xl text-white">
                GRAPHIC ERA <span className="text-red-500">CURVED EVENT RADAR</span>
              </h1>
              <p className="text-sm font-rajdhani text-gray-300 max-w-xl mt-2 font-medium">
                Slide across the 4 campuses in 3D curve with full 4K imagery: Bhimtal, Haldwani, Dehradun, and Deemed University.
              </p>
            </div>

            {/* Quick Tab Selector */}
            <div className="flex gap-2 bg-[#0E1526] border border-[#1E293B] p-1.5 rounded-2xl">
              <button
                onClick={() => handleSwitchTab('radar', '3D CURVED RADAR')}
                className={`px-4 py-2 rounded-xl text-xs font-chakra italic font-bold tracking-wider transition-all flex items-center gap-1.5 ${
                  tab === 'radar'
                    ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-spider-glow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>🌀 3D CURVE SLIDER</span>
              </button>

              <button
                onClick={() => handleSwitchTab('rsvps', 'MY RSVP QUEUE')}
                className={`px-4 py-2 rounded-xl text-xs font-chakra italic font-bold tracking-wider transition-all flex items-center gap-1.5 ${
                  tab === 'rsvps'
                    ? 'bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-spider-glow'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>⭐ MY RSVPs</span>
                <span className="px-1.5 py-0.5 rounded-full bg-black/40 text-[10px]">{rsvpEvents.length}</span>
              </button>
            </div>
          </div>
        </div>

        {/* LOADING STATE */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin shadow-spider-glow mb-4"></div>
            <p className="font-mono text-xs tracking-widest text-red-400">SYNCHRONIZING QUAD-CAMPUS TIMELINES...</p>
          </div>
        ) : tab === 'radar' ? (
          <div>
            {/* 3D Curved Campus Carousel with 4K Photos */}
            {campuses.length > 0 && (
              <CurvedCampusSlider
                campuses={campuses}
                activeCampusIndex={activeCampusIndex}
                onSelectCampus={handleSelectCampusWithShooter}
                events={events}
              />
            )}

            {/* Institutional Dossier & Leadership Spotlight with Interactive Light Sensor */}
            <CampusLeadershipSection activeCampus={activeCampus} />

            {/* Past, Present, Future Timeline for Selected Campus */}
            {activeCampus && (
              <CampusTimelineView
                campus={activeCampus}
                events={currentCampusEvents}
                rsvpedIds={rsvpedIds}
                onRsvp={handleRsvp}
                onDelete={user?.role === 'admin' ? handleDeleteEvent : undefined}
              />
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 pb-2 border-b border-red-500/30">
              <span className="text-2xl">⭐</span>
              <h2 className="spider-heading text-2xl text-white">YOUR CONFIRMED RSVPs & REMINDERS</h2>
            </div>

            {rsvpEvents.length === 0 ? (
              <div className="spider-card text-center py-20">
                <div className="text-6xl mb-4 animate-bounce">🕸️</div>
                <h3 className="spider-heading text-xl text-white">NO ACTIVE RSVPs IN REGISTRY</h3>
                <p className="text-gray-400 font-rajdhani text-sm mt-2 max-w-md mx-auto">
                  Slide through any campus on the 3D curve slider and click "CONFIRM INTEREST (RSVP)" to schedule your event reminders!
                </p>
                <button
                  onClick={() => handleSwitchTab('radar', '3D CURVED RADAR')}
                  className="btn-spider-pill mt-6"
                >
                  EXPLORE 4 CAMPUSES ➔
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rsvpEvents.map(event => (
                  <EventCard
                    key={event.id}
                    event={event}
                    isStudent={true}
                    isRsvped={true}
                    onRsvp={handleRsvp}
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
