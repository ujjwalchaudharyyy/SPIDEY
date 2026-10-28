import { useState, useRef } from 'react'

export default function GraphiteCertificateModal({ isOpen, onClose, participants = [], user }) {
  if (!isOpen) return null

  // Ensure only admin or super-admin can access
  const isAdmin = user?.role === 'admin' || user?.adminType === 'super' || user?.email === 'ujjwalchaudhary2007@gmail.com'

  const [activeTab, setActiveTab] = useState('preview') // 'preview' | 'email' | 'bulk'
  const [selectedParticipantIndex, setSelectedParticipantIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [certType, setCertType] = useState('participation') // 'participation' | 'excellence' | 'merit'
  const [customRank, setCustomRank] = useState('First Runner Up (Rank #2)')
  const [issueDate, setIssueDate] = useState('2026-10-27')

  // Email Template State
  const [emailSubject, setEmailSubject] = useState('Official Certificate of Participation — Graphite 2026 Hackathon (GEHU Bhimtal)')
  const [emailSender, setEmailSender] = useState('certificates.bhimtal@gehu.ac.in')
  const [sendingEmail, setSendingEmail] = useState(false)
  const [bulkSending, setBulkSending] = useState(false)
  const [bulkProgress, setBulkProgress] = useState(0)

  // Track sent certificates in localStorage
  const [sentMap, setSentMap] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('graphite_certificates_sent') || '{}')
    } catch {
      return {}
    }
  })

  const certificateRef = useRef(null)

  // Filter participants
  const filteredParticipants = participants.filter(p => {
    const q = searchQuery.toLowerCase().trim()
    if (!q) return true
    return (
      (p.student_name || '').toLowerCase().includes(q) ||
      (p.roll_no || '').toLowerCase().includes(q) ||
      (p.student_email || '').toLowerCase().includes(q) ||
      (p.team_name || '').toLowerCase().includes(q)
    )
  })

  const currentParticipant = filteredParticipants[selectedParticipantIndex] || participants[0] || {
    student_name: 'Shreya Verma',
    roll_no: 'GEHU-2024-BHM-203',
    degree: 'B.Tech CSE - 2nd Year',
    student_email: 'shreya.verma.211@gmail.com',
    ticket_code: 'SPIDER-BHM-2-1553',
    campus: 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL'
  }

  const certCode = `GEHU-BHM-GRAPHITE-${currentParticipant.ticket_code || '2026-001'}`

  const handlePrint = () => {
    const printContent = document.getElementById('printable-certificate')
    if (!printContent) return
    const win = window.open('', '_blank')
    win.document.write(`
      <html>
        <head>
          <title>Certificate — ${currentParticipant.student_name}</title>
          <style>
            @page { size: landscape; margin: 0; }
            body { margin: 0; padding: 20px; font-family: serif; background: #fff; }
            * { box-sizing: border-box; }
          </style>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body onload="window.print(); window.close();">
          ${printContent.outerHTML}
        </body>
      </html>
    `)
    win.document.close()
  }

  const handleSendSingleEmail = () => {
    setSendingEmail(true)
    setTimeout(() => {
      const email = currentParticipant.student_email
      const newSent = {
        ...sentMap,
        [email]: {
          sentAt: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          certCode,
          type: certType
        }
      }
      setSentMap(newSent)
      try {
        localStorage.setItem('graphite_certificates_sent', JSON.stringify(newSent))
      } catch {}
      setSendingEmail(false)

      // Also trigger native mailto for verification
      const body = encodeURIComponent(`Dear ${currentParticipant.student_name},

Congratulations! Attached is your official ${certType === 'excellence' ? 'Certificate of Excellence' : 'Certificate of Participation'} for Graphite 2026: The Ultimate Spider-Man Themed Hackathon, held at Graphic Era Hill University, Bhimtal Campus.

Certificate ID: ${certCode}
Roll No: ${currentParticipant.roll_no}
Degree: ${currentParticipant.degree}
Issued By: Department of Computer Science & Engineering, GEHU Bhimtal

Verify your certificate anytime on the SPIDEY Portal:
https://spidey.vercel.app/verify

Best regards,
Office of Academic Affairs & Student Councils
Graphic Era Hill University, Bhimtal`)

      const mailtoUrl = `mailto:${currentParticipant.student_email}?subject=${encodeURIComponent(emailSubject)}&body=${body}`
      window.open(mailtoUrl, '_blank')
    }, 900)
  }

  const handleBulkDispatch = () => {
    if (!confirm(`Are you sure you want to dispatch certificates to all ${filteredParticipants.length} participants?`)) return
    setBulkSending(true)
    setBulkProgress(0)

    let current = 0
    const total = filteredParticipants.length
    const newSent = { ...sentMap }

    const interval = setInterval(() => {
      if (current >= total) {
        clearInterval(interval)
        setBulkSending(false)
        setSentMap(newSent)
        try {
          localStorage.setItem('graphite_certificates_sent', JSON.stringify(newSent))
        } catch {}
        return
      }

      const p = filteredParticipants[current]
      newSent[p.student_email] = {
        sentAt: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        certCode: `GEHU-BHM-GRAPHITE-${p.ticket_code || '2026-X'}`,
        type: certType
      }

      current += 1
      setBulkProgress(Math.round((current / total) * 100))
    }, 180)
  }

  if (!isAdmin) {
    return (
      <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
        <div className="bg-[#121622] border border-red-500/60 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="text-4xl mb-3">🛡️</div>
          <h3 className="text-lg font-bold text-white mb-2">Restricted Sanctum</h3>
          <p className="text-xs text-red-300 mb-6">
            Certificate Generation & Official Dispatcher is exclusively restricted to <strong>Admin and Super Admin</strong> roles.
          </p>
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#0A0D15] border border-amber-500/40 rounded-3xl w-full max-w-6xl max-h-[94vh] flex flex-col shadow-[0_0_60px_rgba(245,158,11,0.25)] overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="bg-[#0F1422] border-b border-amber-500/30 px-5 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-950/70 border border-amber-500/60 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(245,158,11,0.3)] shrink-0">
              🎓
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-bold text-white tracking-wide">
                  GRAPHITE 2026 — OFFICIAL CERTIFICATE STUDIO & MAILER
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-[10px] font-mono text-amber-300 font-bold">
                  ADMIN ONLY
                </span>
              </div>
              <p className="text-[11px] font-mono text-gray-400">
                Graphic Era Hill University, Bhimtal Campus • Spider-Tech Academic Cell
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Tab Switcher */}
            <div className="flex items-center bg-[#161D2E] border border-gray-700/80 p-0.5 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === 'preview' ? 'bg-amber-600 text-white shadow-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                📜 Certificate Preview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('email')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer ${
                  activeTab === 'email' ? 'bg-amber-600 text-white shadow-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                ✉️ Mail Template & Dispatch
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-xl font-bold p-1 cursor-pointer ml-2"
              title="Close modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content Body: Left Participant Sidebar + Right Workspace */}
        <div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden">
          
          {/* Left Sidebar: Participants List */}
          <div className="w-full md:w-80 bg-[#0C101A] border-r border-gray-800 p-3.5 flex flex-col shrink-0">
            <div className="mb-2.5">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                Select Participant ({filteredParticipants.length})
              </label>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search name, roll no, team..."
                className="w-full bg-[#141B2B] border border-gray-700 focus:border-amber-500 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Template Selector in sidebar */}
            <div className="mb-3 p-2.5 rounded-xl bg-[#141B2B] border border-gray-800 space-y-2">
              <label className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                Certificate Template:
              </label>
              <div className="space-y-1">
                <label className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer">
                  <input
                    type="radio"
                    name="certType"
                    checked={certType === 'participation'}
                    onChange={() => setCertType('participation')}
                    className="accent-amber-500"
                  />
                  <span>🏅 Participation</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer">
                  <input
                    type="radio"
                    name="certType"
                    checked={certType === 'excellence'}
                    onChange={() => setCertType('excellence')}
                    className="accent-amber-500"
                  />
                  <span>🏆 Excellence (Rank Holder)</span>
                </label>
                <label className="flex items-center gap-2 text-xs text-gray-300 cursor-pointer">
                  <input
                    type="radio"
                    name="certType"
                    checked={certType === 'merit'}
                    onChange={() => setCertType('merit')}
                    className="accent-amber-500"
                  />
                  <span>🌟 Special Technical Merit</span>
                </label>
              </div>

              {certType === 'excellence' && (
                <div className="pt-1">
                  <label className="text-[10px] text-gray-400 block mb-0.5">Rank Title:</label>
                  <input
                    type="text"
                    value={customRank}
                    onChange={(e) => setCustomRank(e.target.value)}
                    className="w-full bg-[#0A0E18] border border-gray-700 rounded px-2 py-1 text-xs text-amber-300"
                  />
                </div>
              )}
            </div>

            {/* Participants Scroll List */}
            <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin">
              {filteredParticipants.map((p, idx) => {
                const isSelected = p.student_email === currentParticipant.student_email
                const isSent = !!sentMap[p.student_email]
                return (
                  <button
                    key={p.student_email || idx}
                    type="button"
                    onClick={() => setSelectedParticipantIndex(idx)}
                    className={`w-full text-left p-2.5 rounded-xl transition cursor-pointer border flex items-center justify-between gap-2 ${
                      isSelected
                        ? 'bg-amber-950/60 border-amber-500 text-white shadow-sm'
                        : 'bg-[#121826] border-gray-800 text-gray-300 hover:bg-[#182032]'
                    }`}
                  >
                    <div className="min-w-0">
                      <p className="text-xs font-bold truncate">{p.student_name}</p>
                      <p className="text-[10px] font-mono text-gray-400 truncate">{p.roll_no || p.student_email}</p>
                      <p className="text-[9px] text-amber-400/80 truncate">{p.team_name || 'Solo'}</p>
                    </div>

                    <div className="shrink-0 flex flex-col items-end">
                      {isSent ? (
                        <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[9px] font-mono font-bold">
                          SENT ✓
                        </span>
                      ) : (
                        <span className="px-1.5 py-0.5 rounded bg-gray-900 text-gray-500 text-[9px] font-mono">
                          PENDING
                        </span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Main Area */}
          <div className="flex-1 bg-[#0A0D15] p-4 sm:p-6 overflow-y-auto flex flex-col">
            
            {activeTab === 'preview' ? (
              /* ======================================================== */
              /* TAB 1: CERTIFICATE VISUAL PREVIEW & PRINT                */
              /* ======================================================== */
              <div className="space-y-4 flex flex-col items-center">
                
                {/* Top Action Toolbar */}
                <div className="w-full flex items-center justify-between bg-[#121622] border border-gray-800 rounded-xl px-4 py-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">Recipient:</span>
                    <span className="text-white font-semibold">{currentParticipant.student_name}</span>
                    <span className="text-gray-500">|</span>
                    <span className="font-mono text-gray-400 text-[11px]">{certCode}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handlePrint}
                      className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-sm active:scale-95"
                    >
                      <span>🖨️</span>
                      <span>Print / Save PDF</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('email')}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-sm active:scale-95"
                    >
                      <span>✉️</span>
                      <span>Email to Student</span>
                    </button>
                  </div>
                </div>

                {/* ── HIGH-RES OFFICIAL CERTIFICATE CONTAINER ── */}
                <div
                  id="printable-certificate"
                  ref={certificateRef}
                  className="w-full max-w-3xl aspect-[1.414/1] bg-gradient-to-br from-[#FEFAF0] via-[#FFFFFF] to-[#FBF5E6] text-gray-900 p-6 sm:p-8 rounded-2xl shadow-2xl relative border-[10px] border-[#9E1B1E] flex flex-col justify-between overflow-hidden select-none"
                  style={{
                    boxShadow: '0 0 50px rgba(158,27,30,0.25), inset 0 0 40px rgba(217,119,6,0.1)'
                  }}
                >
                  {/* Ornate Inner Double Border */}
                  <div className="absolute inset-3 border-2 border-[#D97706]/70 rounded-lg pointer-events-none" />
                  <div className="absolute inset-4 border border-[#B45309]/40 rounded pointer-events-none" />

                  {/* Watermark in background */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
                    <img src="/logo.png?v=2" alt="Watermark" className="w-[380px] h-[380px] object-contain" />
                  </div>

                  {/* Certificate Header */}
                  <div className="text-center relative z-10 space-y-1">
                    <div className="flex items-center justify-center gap-3 mb-1">
                      <img src="/logo.png?v=2" alt="GEHU Logo" className="w-12 h-12 object-contain" />
                      <div>
                        <h1 className="text-xl sm:text-2xl font-serif font-black tracking-wider text-[#781214] uppercase">
                          GRAPHIC ERA HILL UNIVERSITY
                        </h1>
                        <p className="text-[10px] sm:text-xs font-serif font-bold text-[#D97706] tracking-widest uppercase">
                          BHIMTAL CAMPUS • NAAC ACCREDITED INSTITUTION
                        </p>
                      </div>
                    </div>
                    <p className="text-[9px] sm:text-[10px] font-sans text-gray-600 tracking-wider uppercase font-semibold">
                      Department of Computer Science & Engineering • SPIDEY Multiverse Innovation Hub
                    </p>
                  </div>

                  {/* Certificate Title Banner */}
                  <div className="text-center relative z-10 my-1">
                    <div className="inline-block relative">
                      <span className="text-xs sm:text-sm font-serif font-semibold text-gray-600 tracking-widest uppercase block mb-0.5">
                        This is proudly presented to
                      </span>
                      <h2 className="text-2xl sm:text-4xl font-serif font-black text-[#9E1B1E] tracking-wide border-b-2 border-[#D97706] pb-1 px-8">
                        {currentParticipant.student_name}
                      </h2>
                    </div>
                  </div>

                  {/* Citation Body Text */}
                  <div className="text-center relative z-10 max-w-xl mx-auto px-2 space-y-1.5 text-xs sm:text-sm text-gray-800 font-serif leading-relaxed">
                    <p>
                      of <strong>{currentParticipant.degree || 'B.Tech CSE'}</strong>, Roll Number{' '}
                      <span className="font-mono font-bold text-gray-900">{currentParticipant.roll_no || 'GEHU-2024'}</span>, for{' '}
                      {certType === 'excellence' ? (
                        <>
                          securing <strong>{customRank}</strong> and demonstrating outstanding innovation in
                        </>
                      ) : certType === 'merit' ? (
                        <>
                          exemplary technical merit, architectural brilliance, and problem-solving in
                        </>
                      ) : (
                        <>
                          successful participation and invaluable contribution to
                        </>
                      )}
                    </p>
                    <p className="font-sans font-bold text-[#781214] text-sm sm:text-base tracking-wide">
                      &quot;Graphite 2026: The Ultimate Spider-Man Themed Hackathon&quot;
                    </p>
                    <p className="text-[11px] text-gray-600 italic">
                      organized at Graphic Era Hill University, Bhimtal Campus on{' '}
                      {new Date(issueDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.
                    </p>
                  </div>

                  {/* Certificate Footer: Signatures & Hologram Seal */}
                  <div className="relative z-10 pt-3 flex items-end justify-between border-t border-gray-300/80 px-2 sm:px-4">
                    
                    {/* Signature 1 */}
                    <div className="text-center">
                      <div className="font-serif italic text-sm text-[#781214] font-bold">
                        Dr. M.C. Lohani
                      </div>
                      <div className="w-28 border-t border-gray-700 mt-1 pt-0.5">
                        <p className="text-[9px] font-sans font-bold text-gray-700 uppercase">Campus Director</p>
                        <p className="text-[8px] font-sans text-gray-500">GEHU Bhimtal</p>
                      </div>
                    </div>

                    {/* Official Golden Seal / Hologram */}
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full border-2 border-[#D97706] bg-gradient-to-tr from-[#F59E0B] to-[#FDE68A] flex items-center justify-center shadow-lg p-1 text-center">
                        <div className="w-full h-full rounded-full border border-dashed border-[#781214] flex flex-col items-center justify-center">
                          <span className="text-[7px] font-black uppercase text-[#781214] tracking-tighter">OFFICIAL</span>
                          <span className="text-[10px]">⭐</span>
                          <span className="text-[6px] font-bold uppercase text-[#781214]">VERIFIED</span>
                        </div>
                      </div>
                      <span className="text-[8px] font-mono text-gray-500 mt-1">{certCode}</span>
                    </div>

                    {/* Signature 2 */}
                    <div className="text-center">
                      <div className="font-serif italic text-sm text-[#781214] font-bold">
                        Dr. D.S. Rawat
                      </div>
                      <div className="w-28 border-t border-gray-700 mt-1 pt-0.5">
                        <p className="text-[9px] font-sans font-bold text-gray-700 uppercase">Dean Student Welfare</p>
                        <p className="text-[8px] font-sans text-gray-500">Convener, Graphite 2026</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            ) : (
              /* ======================================================== */
              /* TAB 2: EMAIL TEMPLATE & DISPATCH STUDIO                  */
              /* ======================================================== */
              <div className="space-y-5 max-w-3xl mx-auto w-full">
                
                <div className="bg-[#121622] border border-gray-800 rounded-2xl p-5 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">✉️</span>
                      <div>
                        <h3 className="text-sm font-bold text-white">Automated Certificate Email Dispatcher</h3>
                        <p className="text-[11px] text-gray-400">
                          Template for sending verified certificate links directly to registered participant emails
                        </p>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[11px] font-mono font-bold">
                      {Object.keys(sentMap).length} / {filteredParticipants.length} Sent
                    </span>
                  </div>

                  {/* Sender & Recipient Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-gray-400 font-semibold mb-1">From (Official Cell):</label>
                      <input
                        type="text"
                        value={emailSender}
                        onChange={(e) => setEmailSender(e.target.value)}
                        className="w-full bg-[#090C12] border border-gray-700 rounded-lg px-3 py-1.5 text-gray-300 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 font-semibold mb-1">To (Current Recipient):</label>
                      <input
                        type="text"
                        disabled
                        value={`${currentParticipant.student_name} <${currentParticipant.student_email}>`}
                        className="w-full bg-[#090C12] border border-gray-800 rounded-lg px-3 py-1.5 text-amber-300 font-mono focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Subject Line */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Email Subject:</label>
                    <input
                      type="text"
                      value={emailSubject}
                      onChange={(e) => setEmailSubject(e.target.value)}
                      className="w-full bg-[#090C12] border border-gray-700 focus:border-amber-500 rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
                    />
                  </div>

                  {/* Email Body Preview */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Email Body Template (Variables auto-injected):
                    </label>
                    <div className="bg-[#090C12] border border-gray-800 rounded-xl p-4 font-mono text-xs text-gray-300 space-y-2 whitespace-pre-wrap leading-relaxed">
                      <p>Dear <strong className="text-amber-300">{currentParticipant.student_name}</strong>,</p>
                      <p>
                        Congratulations on your exceptional participation in <strong>Graphite 2026: The Ultimate Spider-Man Themed Hackathon</strong>, organized at Graphic Era Hill University, Bhimtal Campus.
                      </p>
                      <div className="bg-[#141B2B] p-3 rounded-lg border border-gray-700/60 my-2 text-[11px] space-y-0.5 text-amber-200">
                        <p><strong>Certificate ID:</strong> {certCode}</p>
                        <p><strong>Roll Number:</strong> {currentParticipant.roll_no || 'GEHU-2024'}</p>
                        <p><strong>Degree / Branch:</strong> {currentParticipant.degree || 'B.Tech CSE'}</p>
                        <p><strong>Campus:</strong> GEHU Bhimtal Campus</p>
                        <p><strong>Certificate Status:</strong> Verified & Sealed ✓</p>
                      </div>
                      <p>
                        Your verified digital certificate has been archived on the SPIDEY Multiverse Registry. You can view, download, or authenticate it at:
                      </p>
                      <p className="text-cyan-400 underline">
                        https://spidey.vercel.app/verify?code={currentParticipant.ticket_code}
                      </p>
                      <p className="pt-2 text-gray-500">
                        Office of Student Affairs & Technology Innovation<br />
                        Graphic Era Hill University, Bhimtal Campus
                      </p>
                    </div>
                  </div>

                  {/* Dispatch Actions */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleSendSingleEmail}
                      disabled={sendingEmail}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-lg active:scale-95 disabled:opacity-50"
                    >
                      {sendingEmail ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching Mail…</span>
                        </>
                      ) : (
                        <>
                          <span>✉️</span>
                          <span>Dispatch Email to {currentParticipant.student_name}</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleBulkDispatch}
                      disabled={bulkSending}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-lg active:scale-95 disabled:opacity-50"
                    >
                      {bulkSending ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Bulk Sending ({bulkProgress}%)…</span>
                        </>
                      ) : (
                        <>
                          <span>🚀</span>
                          <span>Bulk Dispatch to All ({filteredParticipants.length})</span>
                        </>
                      )}
                    </button>
                  </div>

                  {bulkSending && (
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden mt-2">
                      <div
                        className="bg-amber-500 h-full transition-all duration-300"
                        style={{ width: `${bulkProgress}%` }}
                      />
                    </div>
                  )}
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  )
}
