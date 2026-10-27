import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import QRCode from 'qrcode'
import axios from 'axios'

// Lanyard Badge Mini Component for Dashboard
function DashboardIDCard({ attendee, eventTitle, eventDate, eventVenue, teamName, trackInfo }) {
  const [qrUrl, setQrUrl] = useState('')

  useEffect(() => {
    async function genQR() {
      if (!attendee?.ticketCode) return
      try {
        const origin = window.location.origin
        const verifyUrl = `${origin}/verify?code=${encodeURIComponent(attendee.ticketCode)}&name=${encodeURIComponent(attendee.name || '')}&roll=${encodeURIComponent(attendee.rollNo || '')}&campus=${encodeURIComponent(attendee.campus || '')}&degree=${encodeURIComponent(attendee.degree || '')}&event=${encodeURIComponent(eventTitle || '')}&team=${encodeURIComponent(teamName || '')}&role=${encodeURIComponent(attendee.isLeader ? 'Leader' : 'Member')}`
        const q = await QRCode.toDataURL(verifyUrl, {
          width: 200,
          margin: 1,
          color: { dark: '#000000', light: '#ffffff' }
        })
        setQrUrl(q)
      } catch (e) {}
    }
    genQR()
  }, [attendee, eventTitle])

  return (
    <div className="relative w-full max-w-[280px] bg-[#0E1526] border border-red-500/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:border-red-400 group">
      {/* Top Lanyard Tag & Slot */}
      <div className="pt-2 pb-1 flex justify-center bg-black/60 border-b border-white/5">
        <div className="w-8 h-1.5 rounded-full bg-white/20" />
      </div>

      <div className="p-3.5 space-y-3">
        {/* Header Badge */}
        <div className="flex items-center justify-between text-[9px] font-mono">
          <span className="text-amber-400 font-bold tracking-wider">GRAPHIC ERA</span>
          <span className={`px-2 py-0.5 rounded-full font-bold ${attendee.isLeader ? 'bg-amber-950 text-amber-300 border border-amber-500/50' : 'bg-red-950 text-red-300 border border-red-500/50'}`}>
            {attendee.isLeader ? '👑 LEADER' : '👤 MEMBER'}
          </span>
        </div>

        {/* Photo Container */}
        <div className="relative w-24 h-28 mx-auto rounded-xl overflow-hidden border-2 border-red-500/70 bg-[#070913] shadow-[0_0_15px_rgba(220,38,38,0.4)]">
          {attendee.photoUrl ? (
            <img src={attendee.photoUrl} alt={attendee.name} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-500 text-xs">
              <span className="text-2xl mb-1">👤</span>
              <span className="text-[8px] font-mono">Photo</span>
            </div>
          )}
          <div className="absolute bottom-0 inset-x-0 bg-red-600/90 text-[8px] text-white font-mono font-bold text-center py-0.5">
            VERIFIED PASS
          </div>
        </div>

        {/* Name & Credentials */}
        <div className="text-center space-y-0.5">
          <h4 className="font-chakra italic font-bold text-sm text-white truncate uppercase">
            {attendee.name || 'Student Name'}
          </h4>
          <p className="text-[10px] font-mono text-red-400 truncate">
            {attendee.rollNo || 'GEHU-STUDENT'}
          </p>
          <p className="text-[9px] text-gray-400 truncate">
            {attendee.degree?.split('(')[0] || attendee.degree || 'B.Tech'}
          </p>
        </div>

        {/* Pass Code Bar */}
        <div className="bg-black/80 rounded-lg p-1.5 text-center border border-white/5">
          <span className="text-[8px] font-mono text-gray-400 block">PASS CODE</span>
          <span className="text-xs font-mono font-black text-red-400">{attendee.ticketCode}</span>
        </div>

        {/* QR Code Container */}
        <div className="flex flex-col items-center justify-center bg-white p-2 rounded-xl">
          {qrUrl ? (
            <img src={qrUrl} alt="QR" className="w-20 h-20 object-contain" />
          ) : (
            <div className="w-20 h-20 flex items-center justify-center text-black text-[9px] font-mono">QR...</div>
          )}
          <span className="text-[8px] text-black font-mono font-bold mt-1">SCAN AT GATE</span>
        </div>
      </div>

      {/* Footer Link */}
      <div className="p-2 bg-[#0A0D18] border-t border-white/5 text-center">
        <Link
          to={`/verify?code=${encodeURIComponent(attendee.ticketCode)}`}
          className="text-[10px] font-mono text-emerald-400 hover:text-emerald-300 font-bold block"
        >
          🔍 View Live Verification ➔
        </Link>
      </div>
    </div>
  )
}

export default function StudentDashboard() {
  const { user, token } = useAuth()
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedEventId, setSelectedEventId] = useState(null)

  useEffect(() => {
    async function loadDashboardData() {
      setLoading(true)

      // 1. Load from localStorage
      let localRegs = []
      try {
        localRegs = JSON.parse(localStorage.getItem('spider_event_registrations') || '[]')
      } catch (e) {}

      // 2. Fetch from backend
      let backendRegs = []
      if (token) {
        try {
          const res = await axios.get('/api/events/registrations/my', {
            headers: { Authorization: `Bearer ${token}` }
          })
          if (Array.isArray(res.data)) {
            backendRegs = res.data
          }
        } catch (e) {}
      }

      // Merge backend and local registrations without duplicates
      const mergedMap = new Map()

      // Put local first (they have attendees array and full photos)
      localRegs.forEach(reg => {
        const key = reg.event_id || reg.event_title
        if (key) mergedMap.set(key, reg)
      })

      // Merge backend
      backendRegs.forEach(reg => {
        const key = reg.event_id || reg.event_title
        if (key && !mergedMap.has(key)) {
          let parsedDetails = null
          try {
            if (reg.details_json) parsedDetails = JSON.parse(reg.details_json)
          } catch (e) {}

          mergedMap.set(key, {
            ...reg,
            attendees: parsedDetails?.attendees || [
              {
                ticketCode: reg.ticket_code,
                name: reg.student_name,
                email: reg.student_email,
                phone: reg.phone,
                rollNo: reg.roll_no,
                degree: reg.degree,
                campus: reg.campus,
                isLeader: true,
                photoUrl: ''
              }
            ],
            team_name: reg.team_name || 'Solo'
          })
        }
      })

      const finalRegs = Array.from(mergedMap.values())
      setRegistrations(finalRegs)
      if (finalRegs.length > 0) {
        setSelectedEventId(finalRegs[0].event_id || finalRegs[0].id)
      }
      setLoading(false)
    }

    loadDashboardData()
  }, [token])

  const selectedRegistration = registrations.find(
    r => (r.event_id || r.id) === selectedEventId
  ) || registrations[0]

  return (
    <div className="min-h-screen bg-[#060810] text-white flex flex-col font-sans selection:bg-red-500 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        {/* Top Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-950/80 via-[#0B0F1C] to-black border border-red-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(220,38,38,0.3)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/50 text-red-300 text-xs font-mono font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
              STUDENT PARTICIPATION PORTAL • QUAD-CAMPUS
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white uppercase font-chakra tracking-wide">
              MY EVENT PASSES &amp; TEAM ID CARDS
            </h1>
            <p className="text-xs sm:text-sm font-rajdhani text-gray-300 max-w-xl">
              Aapne jitne bhi Graphic Era events me register kiya hai, unke confirmed tickets aur sabhi team members ke scannable ID cards yahan live dekhein.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex items-center gap-3 bg-black/60 p-4 rounded-2xl border border-white/10 shrink-0">
            <div className="text-center px-4 border-r border-gray-800">
              <span className="text-2xl sm:text-3xl font-black text-red-400 font-mono">
                {registrations.length}
              </span>
              <span className="text-[10px] text-gray-400 block font-mono uppercase mt-0.5">
                REGISTERED EVENTS
              </span>
            </div>
            <div className="text-center px-4">
              <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                {registrations.reduce((acc, r) => acc + (r.attendees?.length || 1), 0)}
              </span>
              <span className="text-[10px] text-gray-400 block font-mono uppercase mt-0.5">
                TOTAL TEAM BADGES
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="w-14 h-14 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-mono text-gray-400">Loading your registered events and team passes...</p>
          </div>
        ) : registrations.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20 bg-[#0E1526]/60 border border-gray-800 rounded-3xl p-8 space-y-4">
            <div className="text-6xl mb-2">🎟️</div>
            <h3 className="text-xl font-bold font-chakra uppercase text-white">Abhi Tak Koi Event Register Nahi Kiya</h3>
            <p className="text-xs text-gray-400 font-rajdhani max-w-md mx-auto">
              Graphic Era Multiverse Radar par jakar kisi bhi event me register karein. Aapke sabhi team members ke ID card yahan show honge.
            </p>
            <div className="pt-2">
              <Link to="/feed" className="btn-spider-pill text-xs py-2.5 px-6">
                <span>EXPLORE EVENTS RADAR ➔</span>
              </Link>
            </div>
          </div>
        ) : (
          /* Registered Events & Cards */
          <div className="space-y-6">
            {/* Event Tabs Switcher */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-800">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest shrink-0 mr-2">
                MY EVENTS:
              </span>
              {registrations.map((reg, idx) => {
                const regKey = reg.event_id || reg.id
                const isSelected = regKey === selectedEventId
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedEventId(regKey)}
                    className={`px-4 py-2 rounded-xl text-xs font-chakra italic font-bold tracking-wider transition whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-red-600 text-white shadow-spider-glow'
                        : 'bg-[#141A29] text-gray-400 hover:text-white border border-gray-800'
                    }`}
                  >
                    <span>🎟️</span>
                    <span>{reg.event_title || `Event #${idx + 1}`}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-black/40">
                      {reg.attendees?.length || 1} Cards
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Selected Event Details & Cards View */}
            {selectedRegistration && (
              <div className="space-y-6">
                {/* Event Overview Banner */}
                <div className="p-5 rounded-2xl bg-[#0F1424] border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-red-400 uppercase font-bold tracking-wider">
                      CONFIRMED REGISTRATION • {selectedRegistration.campus || 'GEHU'}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-white uppercase font-chakra">
                      {selectedRegistration.event_title}
                    </h2>
                    <p className="text-xs text-gray-400 font-mono">
                      Team: <span className="text-white font-bold">{selectedRegistration.team_name || 'Solo'}</span> • Track: <span className="text-red-400">{selectedRegistration.track_info || 'General'}</span> • Transaction ID: <span className="text-emerald-400 font-mono">{selectedRegistration.transaction_id || 'VERIFIED'}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => window.print()}
                      className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>🖨️</span>
                      <span>Print Team Cards</span>
                    </button>
                    <Link
                      to={`/verify?code=${encodeURIComponent(selectedRegistration.ticket_code || selectedRegistration.attendees?.[0]?.ticketCode)}`}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow"
                    >
                      <span>📹</span>
                      <span>Gate Verification View</span>
                    </Link>
                  </div>
                </div>

                {/* Team ID Cards Showcase */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                      <span>👥</span>
                      <span>ALL TEAM MEMBERS ID BADGES ({selectedRegistration.attendees?.length || 1} CARDS)</span>
                    </h3>
                    <span className="text-xs text-gray-500 font-mono">
                      Scannable at Campus Entry Gate
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                    {(selectedRegistration.attendees || [selectedRegistration]).map((att, attIdx) => (
                      <DashboardIDCard
                        key={attIdx}
                        attendee={att}
                        eventTitle={selectedRegistration.event_title}
                        eventDate={selectedRegistration.event_date}
                        eventVenue={selectedRegistration.event_venue || selectedRegistration.venue}
                        teamName={selectedRegistration.team_name}
                        trackInfo={selectedRegistration.track_info}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="py-4 border-t border-gray-900 text-center text-[11px] text-gray-600 font-mono">
        Graphic Era Hill University • Student Event Hub &amp; Passes Dashboard • Spidey '26
      </footer>
    </div>
  )
}
