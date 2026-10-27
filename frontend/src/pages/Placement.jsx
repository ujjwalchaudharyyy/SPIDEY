import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CompanyLogo from '../components/CompanyLogo'
import { DEFAULT_PLACED_STUDENTS, DEFAULT_COMPANIES } from '../data/fallbackData'

export default function Placement() {
  const [activeTab, setActiveTab] = useState('students') // 'students', 'companies', 'analytics'
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCampus, setSelectedCampus] = useState('ALL')
  const [selectedTier, setSelectedTier] = useState('ALL')
  const [copiedCode, setCopiedCode] = useState(null)
  const [toast, setToast] = useState(null)

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 3000)
  }

  const copyToClipboard = (text, msg) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(text)
    showToast(msg || `Copied ${text}!`)
    setTimeout(() => setCopiedCode(null), 2500)
  }

  // Filtered Students
  const filteredStudents = useMemo(() => {
    return DEFAULT_PLACED_STUDENTS.filter(st => {
      // Campus filter
      if (selectedCampus !== 'ALL') {
        const normCamp = selectedCampus.toLowerCase()
        const stCamp = (st.campus || '').toLowerCase()
        if (!stCamp.includes(normCamp)) return false
      }

      // Package Tier filter
      if (selectedTier === 'super_dream' && st.tier !== 'Super Dream') return false
      if (selectedTier === 'dream' && st.tier !== 'Dream') return false

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchName = st.studentName.toLowerCase().includes(q)
        const matchRoll = st.rollNo.toLowerCase().includes(q)
        const matchCompany = st.company.toLowerCase().includes(q)
        const matchRole = (st.role || '').toLowerCase().includes(q)
        const matchDegree = (st.degree || '').toLowerCase().includes(q)
        if (!matchName && !matchRoll && !matchCompany && !matchRole && !matchDegree) return false
      }

      return true
    })
  }, [searchQuery, selectedCampus, selectedTier])

  // Filtered Companies
  const filteredCompanies = useMemo(() => {
    return DEFAULT_COMPANIES.filter(comp => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchName = comp.name.toLowerCase().includes(q)
        const matchCat = comp.category.toLowerCase().includes(q)
        const matchRole = comp.role.toLowerCase().includes(q)
        if (!matchName && !matchCat && !matchRole) return false
      }
      return true
    })
  }, [searchQuery])

  // Export to CSV
  const handleExportCSV = () => {
    const headers = ['Roll No', 'Student Name', 'Degree', 'Campus', 'Company', 'Role', 'Package (CTC)', 'Tier', 'Batch']
    const rows = filteredStudents.map(s => [
      `"${s.rollNo}"`,
      `"${s.studentName}"`,
      `"${s.degree}"`,
      `"${s.campus}"`,
      `"${s.company}"`,
      `"${s.role}"`,
      `"${s.package}"`,
      `"${s.tier}"`,
      `"${s.batch}"`
    ])
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `Graphic_Era_Placements_${Date.now()}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    showToast(`Downloaded placement records for ${filteredStudents.length} students! 📥`)
  }

  return (
    <div className="min-h-screen bg-[#070913] text-gray-100 flex flex-col font-sans selection:bg-red-500 selection:text-white">
      <Navbar />

      {/* Floating Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0E1526] border border-emerald-500/80 text-emerald-300 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-semibold animate-bounce">
          <span>✓</span>
          <span>{toast}</span>
        </div>
      )}

      {/* Hero Header */}
      <div className="relative border-b border-gray-800 bg-gradient-to-b from-[#0F1424] via-[#090D18] to-[#070913] overflow-hidden">
        {/* Background Spider Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-[300px] h-[200px] bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-red-950/80 text-red-400 border border-red-500/40 text-[11px] font-mono font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                  <span>🕷️</span>
                  <span>GRAPHIC ERA MULTIVERSE PLACEMENT CELL</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-500/40 text-[11px] font-mono font-bold">
                  ● 2026 Batch Active
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Placement <span className="text-red-500">Hall of Fame</span> &amp; Drives
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 max-w-2xl leading-relaxed">
                Celebrating our student innovators across Dehradun, Bhimtal, Haldwani, and Deemed University campuses hired by the world&apos;s leading tech giants and enterprises.
              </p>
            </div>

            {/* Quick Action Button */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleExportCSV}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white text-xs font-bold shadow-lg shadow-emerald-900/30 flex items-center gap-2 transition cursor-pointer active:scale-95 border border-emerald-500/40"
              >
                <span>📥</span>
                <span>Download Report (CSV)</span>
              </button>
            </div>
          </div>

          {/* Key Placement Highlights Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-8">
            <div className="bg-[#121622]/90 border border-emerald-500/40 p-4 rounded-2xl shadow-sm hover:border-emerald-500/70 transition">
              <div className="flex items-center justify-between text-emerald-400 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider">Highest Package</span>
                <span className="text-lg">🌟</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white font-mono">₹54.03 <span className="text-xs text-emerald-400 font-sans">LPA</span></p>
              <p className="text-[10px] text-gray-400 mt-0.5 truncate">Atlassian • Palo Alto Networks</p>
            </div>

            <div className="bg-[#121622]/90 border border-gray-800 p-4 rounded-2xl shadow-sm hover:border-gray-700 transition">
              <div className="flex items-center justify-between text-cyan-400 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider">Average Package</span>
                <span className="text-lg">📈</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white font-mono">₹12.80 <span className="text-xs text-cyan-400 font-sans">LPA</span></p>
              <p className="text-[10px] text-gray-400 mt-0.5 truncate">Top 25% Batch: ₹21.5 LPA</p>
            </div>

            <div className="bg-[#121622]/90 border border-gray-800 p-4 rounded-2xl shadow-sm hover:border-gray-700 transition">
              <div className="flex items-center justify-between text-purple-400 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider">Hiring Companies</span>
                <span className="text-lg">🏢</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white font-mono">380+ <span className="text-xs text-purple-400 font-sans">Giants</span></p>
              <p className="text-[10px] text-gray-400 mt-0.5 truncate">Google, Microsoft, Amazon</p>
            </div>

            <div className="bg-[#121622]/90 border border-gray-800 p-4 rounded-2xl shadow-sm hover:border-gray-700 transition">
              <div className="flex items-center justify-between text-amber-400 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider">Offers Extended</span>
                <span className="text-lg">🎓</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white font-mono">2,860+ <span className="text-xs text-amber-400 font-sans">Offers</span></p>
              <p className="text-[10px] text-gray-400 mt-0.5 truncate">Across 4 Campuses</p>
            </div>

            <div className="col-span-2 sm:col-span-1 bg-[#121622]/90 border border-red-500/40 p-4 rounded-2xl shadow-sm hover:border-red-500/70 transition">
              <div className="flex items-center justify-between text-red-400 mb-1">
                <span className="text-xs font-semibold uppercase tracking-wider">Super Dream (&gt;30 LPA)</span>
                <span className="text-lg">⚡</span>
              </div>
              <p className="text-xl sm:text-2xl font-black text-white font-mono">84+ <span className="text-xs text-red-400 font-sans">Students</span></p>
              <p className="text-[10px] text-gray-400 mt-0.5 truncate">Record High in Uttarakhand</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('students')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-2 ${
                activeTab === 'students'
                  ? 'bg-red-600 text-white shadow-spider-glow'
                  : 'bg-[#121622] text-gray-400 hover:text-white hover:bg-gray-800/60'
              }`}
            >
              <span>🎓</span>
              <span>Placed Superstars</span>
              <span className="px-2 py-0.5 rounded-full bg-black/40 text-[10px] font-mono">
                {DEFAULT_PLACED_STUDENTS.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('companies')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-2 ${
                activeTab === 'companies'
                  ? 'bg-red-600 text-white shadow-spider-glow'
                  : 'bg-[#121622] text-gray-400 hover:text-white hover:bg-gray-800/60'
              }`}
            >
              <span>🏢</span>
              <span>Recruiting Companies &amp; Drives</span>
              <span className="px-2 py-0.5 rounded-full bg-black/40 text-[10px] font-mono">
                {DEFAULT_COMPANIES.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-2 ${
                activeTab === 'analytics'
                  ? 'bg-red-600 text-white shadow-spider-glow'
                  : 'bg-[#121622] text-gray-400 hover:text-white hover:bg-gray-800/60'
              }`}
            >
              <span>📊</span>
              <span>Campus Highlights</span>
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search student, roll no, company, role..."
              className="w-full bg-[#121622] border border-gray-800 focus:border-red-500 rounded-xl pl-8 pr-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Tab 1: Placed Students Directory */}
        {activeTab === 'students' && (
          <div className="space-y-6">
            {/* Filter Pill Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[#121622] border border-gray-800 p-3 rounded-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mr-1">Campus:</span>
                {[
                  { key: 'ALL', label: 'All Campuses' },
                  { key: 'bhimtal', label: '🏔️ Bhimtal' },
                  { key: 'haldwani', label: '🌊 Haldwani' },
                  { key: 'dehradun', label: '🌲 Dehradun' },
                  { key: 'deemed', label: '🎓 GEU Deemed' }
                ].map(c => (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setSelectedCampus(c.key)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                      selectedCampus === c.key
                        ? 'bg-emerald-600 text-white font-bold shadow-sm'
                        : 'bg-[#0A0D14] text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mr-1">Tier:</span>
                <button
                  type="button"
                  onClick={() => setSelectedTier('ALL')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                    selectedTier === 'ALL' ? 'bg-red-600 text-white font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  All Offers
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTier('super_dream')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                    selectedTier === 'super_dream' ? 'bg-red-600 text-white font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  ⚡ Super Dream (&gt;30 LPA)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedTier('dream')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                    selectedTier === 'dream' ? 'bg-red-600 text-white font-bold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  💼 Dream (&gt;15 LPA)
                </button>
              </div>
            </div>

            {/* Students Grid */}
            {filteredStudents.length === 0 ? (
              <div className="bg-[#121622] border border-gray-800 rounded-2xl p-12 text-center text-gray-400 text-xs">
                No placed student matched your filter criteria. Try clearing search or campus filter.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredStudents.map(st => {
                  const isSuperDream = st.tier === 'Super Dream'
                  return (
                    <div
                      key={st.id}
                      className={`bg-[#121622] border rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl ${
                        isSuperDream
                          ? 'border-emerald-500/50 hover:border-emerald-500 shadow-emerald-950/20 shadow-lg'
                          : 'border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      <div>
                        {/* Top Badge Row */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${
                            isSuperDream
                              ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/40 shadow-sm'
                              : 'bg-blue-950/90 text-blue-300 border-blue-500/40'
                          }`}>
                            {st.tier}
                          </span>

                          <span className="px-2 py-0.5 rounded-full bg-gray-900 border border-gray-800 text-[10px] font-mono text-gray-400">
                            Batch {st.batch}
                          </span>
                        </div>

                        {/* Student Profile Info */}
                        <div className="flex items-start gap-3.5 mb-3.5">
                          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-red-600/30 via-[#0E1526] to-emerald-600/30 border border-gray-700/80 p-0.5 shrink-0 overflow-hidden shadow-md flex items-center justify-center">
                            <div className="w-full h-full rounded-xl bg-[#090D15] flex items-center justify-center font-chakra font-bold text-base text-white">
                              {st.studentName.split(' ').map(n => n[0]).slice(0, 2).join('')}
                            </div>
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="text-base font-bold text-white truncate" title={st.studentName}>
                              {st.studentName}
                            </h3>
                            <div className="flex items-center gap-2 mt-0.5">
                              <button
                                type="button"
                                onClick={() => copyToClipboard(st.rollNo, `Roll number ${st.rollNo} copied!`)}
                                className="text-[11px] font-mono text-cyan-300 hover:underline flex items-center gap-1 cursor-pointer"
                                title="Click to copy roll number"
                              >
                                <span>{st.rollNo}</span>
                                <span className="text-[9px] text-gray-500">{copiedCode === st.rollNo ? '✓' : '📋'}</span>
                              </button>
                            </div>
                            <p className="text-[11px] text-gray-400 truncate mt-0.5">{st.degree}</p>
                          </div>
                        </div>

                        {/* Company & Package Banner */}
                        <div className="bg-[#090D15] border border-gray-800/90 rounded-xl p-3 mb-3">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-8 h-8 rounded-lg bg-[#121622] border border-gray-700/60 p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                                <CompanyLogo name={st.company} className="w-5 h-5 object-contain" size={20} />
                              </div>
                              <div className="min-w-0">
                                <h4 className="text-xs font-bold text-white truncate">{st.company}</h4>
                                <p className="text-[10px] text-gray-400 truncate">{st.role}</p>
                              </div>
                            </div>

                            <div className="text-right shrink-0">
                              <p className="text-base font-black text-emerald-400 font-mono tracking-tight">{st.package}</p>
                              <p className="text-[9px] text-gray-500 font-medium uppercase">Annual CTC</p>
                            </div>
                          </div>
                        </div>

                        {/* Student Testimonial Quote */}
                        {st.quote && (
                          <div className="bg-[#101420] border-l-2 border-red-500/70 p-2.5 rounded-r-lg mb-3">
                            <p className="text-[11px] text-gray-300 italic line-clamp-3">
                              &ldquo;{st.quote}&rdquo;
                            </p>
                          </div>
                        )}

                        {/* Skills Tags */}
                        {st.skills && st.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {st.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded-md bg-gray-900 border border-gray-800 text-[10px] text-gray-300 font-mono"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Card Footer: Campus badge & verified check */}
                      <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between text-[11px]">
                        <span className="text-gray-400 truncate flex items-center gap-1">
                          <span>🏛️</span>
                          <span>{st.campus?.split(' ')?.[3] || 'Dehradun'} Campus</span>
                        </span>
                        <span className="text-emerald-400 font-mono font-semibold text-[10px] flex items-center gap-1 shrink-0">
                          <span>✓ Verified Offer</span>
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Recruiting Companies */}
        {activeTab === 'companies' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">Premier Corporate Partners &amp; Hiring Drives</h3>
                <p className="text-xs text-gray-400">Companies hiring across all Graphic Era campuses this placement season.</p>
              </div>
              <span className="text-xs font-mono text-emerald-400">
                ● 100% On-Campus &amp; Super Pool Drives
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCompanies.map(comp => (
                <div
                  key={comp.id}
                  className="bg-[#121622] border border-gray-800 rounded-2xl p-5 flex flex-col justify-between hover:border-gray-700 transition"
                >
                  <div>
                    {/* Header: Logo, Name, Tier */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-13 h-13 rounded-2xl bg-[#090D15] border border-gray-700/80 p-2.5 flex items-center justify-center shrink-0 shadow-inner">
                          <CompanyLogo name={comp.name} className="w-8 h-8 object-contain" size={32} />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white">{comp.name}</h4>
                          <p className="text-[11px] text-gray-400">{comp.category}</p>
                        </div>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full bg-red-950/80 text-red-300 border border-red-500/30 text-[10px] font-mono font-bold shrink-0">
                        {comp.tier}
                      </span>
                    </div>

                    {/* Role & Package Summary */}
                    <div className="bg-[#090D15] border border-gray-800/80 rounded-xl p-3 space-y-1.5 mb-3.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Highest CTC:</span>
                        <span className="text-emerald-400 font-bold font-mono text-sm">{comp.highestPackage}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Average CTC:</span>
                        <span className="text-white font-medium font-mono">{comp.averagePackage}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Role:</span>
                        <span className="text-cyan-300 font-medium truncate max-w-[180px]">{comp.role}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400">Location:</span>
                        <span className="text-gray-300">{comp.location}</span>
                      </div>
                    </div>

                    {/* Status & Hires */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold border ${comp.statusColor}`}>
                        {comp.status}
                      </span>
                      <span className="text-xs font-mono font-bold text-white">
                        {comp.hiresCount} Hired
                      </span>
                    </div>

                    {/* Selection Rounds */}
                    {comp.selectionRounds && (
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Evaluation Process:</p>
                        <div className="flex flex-wrap gap-1">
                          {comp.selectionRounds.map((round, rIdx) => (
                            <span
                              key={rIdx}
                              className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800 text-[10px] text-gray-300"
                            >
                              {rIdx + 1}. {round}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer: Eligible Campuses */}
                  <div className="pt-3 mt-4 border-t border-gray-800/80 flex items-center justify-between text-[11px] text-gray-400">
                    <span>Drive Date: {comp.driveDate}</span>
                    <span className="text-emerald-400 font-mono">All 4 Campuses Pool</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Campus Highlights & Placement Analytics */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Campus Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#121622] border border-blue-500/40 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🏔️</span>
                  <div>
                    <h4 className="text-sm font-bold text-white">GEHU Bhimtal</h4>
                    <p className="text-[10px] text-gray-400">Lake Valley Tech Innovation</p>
                  </div>
                </div>
                <div className="space-y-2 mt-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Highest Package:</span>
                    <span className="text-emerald-400 font-mono font-bold">₹54.03 LPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Average CTC:</span>
                    <span className="text-white font-mono font-bold">₹11.90 LPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Key Recruiters:</span>
                    <span className="text-cyan-300">Atlassian, Microsoft</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#121622] border border-cyan-500/40 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🌊</span>
                  <div>
                    <h4 className="text-sm font-bold text-white">GEHU Haldwani</h4>
                    <p className="text-[10px] text-gray-400">Gateway to Kumaon Hub</p>
                  </div>
                </div>
                <div className="space-y-2 mt-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Highest Package:</span>
                    <span className="text-emerald-400 font-mono font-bold">₹45.00 LPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Average CTC:</span>
                    <span className="text-white font-mono font-bold">₹10.50 LPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Key Recruiters:</span>
                    <span className="text-cyan-300">Uber, NVIDIA, Cisco</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#121622] border border-emerald-500/40 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🌲</span>
                  <div>
                    <h4 className="text-sm font-bold text-white">GEHU Dehradun</h4>
                    <p className="text-[10px] text-gray-400">Hill University Central</p>
                  </div>
                </div>
                <div className="space-y-2 mt-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Highest Package:</span>
                    <span className="text-emerald-400 font-mono font-bold">₹51.20 LPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Average CTC:</span>
                    <span className="text-white font-mono font-bold">₹13.20 LPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Key Recruiters:</span>
                    <span className="text-cyan-300">Google, Adobe, Zomato</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#121622] border border-purple-500/40 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <h4 className="text-sm font-bold text-white">GEU Deemed</h4>
                    <p className="text-[10px] text-gray-400">NAAC A+ Flagship Campus</p>
                  </div>
                </div>
                <div className="space-y-2 mt-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Highest Package:</span>
                    <span className="text-emerald-400 font-mono font-bold">₹54.03 LPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Average CTC:</span>
                    <span className="text-white font-mono font-bold">₹14.10 LPA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Key Recruiters:</span>
                    <span className="text-cyan-300">Amazon, Goldman Sachs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Placement Policy & Preparation Blueprint */}
            <div className="bg-[#121622] border border-gray-800 rounded-2xl p-6">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <span>⚡</span>
                <span>Graphic Era Placement Training &amp; Hackathon Edge</span>
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                At Graphic Era, our 24-hour hackathons, competitive programming leagues (Graphite 2026, Multiverse Hackathon), AWS cloud labs, and alumni mentorship programs prepare students from day one for elite global engineering bars.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="bg-[#090D15] p-3 rounded-xl border border-gray-800">
                  <p className="font-bold text-emerald-400 mb-1">DSA &amp; System Design</p>
                  <p className="text-[11px] text-gray-400">700+ problem repository with daily LeetCode mock contests.</p>
                </div>
                <div className="bg-[#090D15] p-3 rounded-xl border border-gray-800">
                  <p className="font-bold text-cyan-400 mb-1">Full-Stack Cloud Projects</p>
                  <p className="text-[11px] text-gray-400">Production deployments on AWS, Docker, and Kubernetes clusters.</p>
                </div>
                <div className="bg-[#090D15] p-3 rounded-xl border border-gray-800">
                  <p className="font-bold text-red-400 mb-1">Alumni Mock Interviews</p>
                  <p className="text-[11px] text-gray-400">1-on-1 technical and behavioral guidance from Google &amp; Microsoft engineers.</p>
                </div>
              </div>
            </div>

            {/* Top Recruiters Logos Wall */}
            <div className="bg-[#121622] border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span>🏢</span>
                    <span>Top Corporate Partners &amp; Hiring Giants</span>
                  </h4>
                  <p className="text-[11px] text-gray-400">Regular campus recruiters offering Super Dream &amp; Dream career opportunities.</p>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">● 380+ Annual Partners</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {DEFAULT_COMPANIES.map(c => (
                  <div
                    key={c.id}
                    className="bg-[#090D15] border border-gray-800/80 hover:border-emerald-500/50 rounded-xl p-3 flex flex-col items-center justify-center gap-2 transition group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#121622] p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CompanyLogo name={c.name} className="w-6 h-6 object-contain" size={24} />
                    </div>
                    <span className="text-xs font-bold text-gray-200 truncate">{c.name}</span>
                    <span className="text-[10px] font-mono text-emerald-400">{c.highestPackage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
