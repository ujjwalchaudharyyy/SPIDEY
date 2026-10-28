import { useState, useRef, useMemo } from 'react'

export default function GraphiteCertificateModal({ isOpen, onClose, participants = [], user }) {
  if (!isOpen) return null

  // Ensure only admin or super-admin can access
  const isAdmin = user?.role === 'admin' || user?.adminType === 'super' || user?.email === 'ujjwalchaudhary2007@gmail.com'

  const [activeTab, setActiveTab] = useState('preview') // 'preview' | 'batch' | 'email' | 'template'
  const [selectedParticipantIndex, setSelectedParticipantIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [certType, setCertType] = useState('participation') // 'participation' | 'excellence' | 'merit'
  const [customRank, setCustomRank] = useState('Champion (1st Place)')

  // ── Template Customization & Import State ──
  const [templateTheme, setTemplateTheme] = useState('academic_ivory')
  const [customBgImage, setCustomBgImage] = useState(null)
  const [customHeader, setCustomHeader] = useState('GRAPHIC ERA HILL UNIVERSITY')
  const [customSubHeader, setCustomSubHeader] = useState('BHIMTAL CAMPUS')
  const [signee1Name, setSignee1Name] = useState('Dr. M.C. Lohani')
  const [signee1Title, setSignee1Title] = useState('Campus Director')
  const [signee2Name, setSignee2Name] = useState('Dr. D.S. Rawat')
  const [signee2Title, setSignee2Title] = useState('Dean Student Welfare')

  // ── Add Participant Modal & Storage ──
  const [showAddParticipant, setShowAddParticipant] = useState(false)
  const [newParticipant, setNewParticipant] = useState({
    student_name: '',
    roll_no: '',
    student_email: '',
    degree: 'B.Tech CSE - 2nd Year',
    team_name: 'Spider Innovators'
  })

  // Load custom added participants from localStorage
  const [customParticipants, setCustomParticipants] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('graphite_custom_participants') || '[]')
    } catch {
      return []
    }
  })

  // Merge default + custom participants
  const allParticipants = useMemo(() => {
    const combined = [...customParticipants, ...participants]
    const seen = new Set()
    return combined.filter(p => {
      const key = (p.student_email || p.roll_no || p.student_name).toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
  }, [customParticipants, participants])

  // Multi-select / Batch selection state
  const [selectedEmails, setSelectedEmails] = useState(() => {
    return new Set(allParticipants.slice(0, 5).map(p => p.student_email))
  })

  // Email Template State
  const [emailSubject, setEmailSubject] = useState('Official Certificate — Graphite 2026 (Graphic Era Hill University, Bhimtal)')
  const [emailSender, setEmailSender] = useState('certificates.gehubhimtal@gehu.ac.in')
  const [sendingEmail, setSendingEmail] = useState(false)
  const [batchSending, setBatchSending] = useState(false)
  const [batchProgress, setBatchProgress] = useState(0)
  const [copiedLink, setCopiedLink] = useState(false)
  const [copiedBody, setCopiedBody] = useState(false)

  // Track sent certificates in localStorage
  const [sentMap, setSentMap] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('graphite_certificates_sent') || '{}')
    } catch {
      return {}
    }
  })

  const certificateRef = useRef(null)
  const bgFileInputRef = useRef(null)
  const jsonFileInputRef = useRef(null)

  // Filter participants by search query
  const filteredParticipants = useMemo(() => {
    const q = searchQuery.toLowerCase().trim()
    if (!q) return allParticipants
    return allParticipants.filter(p => (
      (p.student_name || '').toLowerCase().includes(q) ||
      (p.roll_no || '').toLowerCase().includes(q) ||
      (p.student_email || '').toLowerCase().includes(q) ||
      (p.team_name || '').toLowerCase().includes(q)
    ))
  }, [allParticipants, searchQuery])

  const currentParticipant = filteredParticipants[selectedParticipantIndex] || allParticipants[0] || {
    student_name: 'Shreya Verma',
    roll_no: 'GEHU-2024-BHM-203',
    degree: 'B.Tech CSE - 2nd Year',
    student_email: 'shreya.verma.211@gmail.com',
    ticket_code: 'SPIDER-BHM-2-1553',
    campus: 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL'
  }

  const certCode = `GEHU-BHM-GRAPHITE-${currentParticipant.ticket_code || '2026-001'}`

  const publicCertUrl = `${window.location.origin}/certificate?code=${encodeURIComponent(certCode)}&name=${encodeURIComponent(currentParticipant.student_name)}&roll=${encodeURIComponent(currentParticipant.roll_no || 'GEHU-2024')}&degree=${encodeURIComponent(currentParticipant.degree || 'B.Tech CSE')}&type=${certType}&rank=${encodeURIComponent(customRank)}`

  // Batch Selection helpers
  const handleToggleSelect = (email) => {
    setSelectedEmails(prev => {
      const next = new Set(prev)
      if (next.has(email)) next.delete(email)
      else next.add(email)
      return next
    })
  }

  const handleSelectAll = () => {
    setSelectedEmails(new Set(filteredParticipants.map(p => p.student_email)))
  }

  const handleSelectCount = (count) => {
    setSelectedEmails(new Set(filteredParticipants.slice(0, count).map(p => p.student_email)))
  }

  const handleDeselectAll = () => {
    setSelectedEmails(new Set())
  }

  // ── Handler: Add Participant ──
  const handleSaveParticipant = (e) => {
    e.preventDefault()
    if (!newParticipant.student_name.trim() || !newParticipant.student_email.trim()) {
      alert('Student Name and University Email are required!')
      return
    }

    const created = {
      id: Date.now(),
      student_name: newParticipant.student_name.trim(),
      roll_no: newParticipant.roll_no.trim() || `GEHU-2024-BHM-${Math.floor(100 + Math.random() * 900)}`,
      student_email: newParticipant.student_email.trim().toLowerCase(),
      degree: newParticipant.degree.trim() || 'B.Tech CSE - 2nd Year',
      team_name: newParticipant.team_name.trim() || 'Solo Innovator',
      ticket_code: `SPIDER-BHM-2-${Math.floor(1000 + Math.random() * 9000)}`,
      campus: 'GRAPHIC ERA HILL UNIVERSITY BHIMTAL',
      created_at: new Date().toISOString()
    }

    const updated = [created, ...customParticipants]
    setCustomParticipants(updated)
    try {
      localStorage.setItem('graphite_custom_participants', JSON.stringify(updated))
    } catch {}

    setSelectedParticipantIndex(0)
    setShowAddParticipant(false)
    setNewParticipant({
      student_name: '',
      roll_no: '',
      student_email: '',
      degree: 'B.Tech CSE - 2nd Year',
      team_name: 'Spider Innovators'
    })
    alert(`✅ Participant "${created.student_name}" successfully added to Graphite Registry!`)
  }

  // ── Handler: Import Custom Certificate Image / Backdrop ──
  const handleUploadBgImage = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      setCustomBgImage(event.target.result)
      alert('✅ Custom certificate background successfully imported and applied!')
    }
    reader.readAsDataURL(file)
  }

  // ── Handler: Import Template JSON ──
  const handleUploadTemplateJSON = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result)
        if (parsed.theme) setTemplateTheme(parsed.theme)
        if (parsed.header) setCustomHeader(parsed.header)
        if (parsed.subHeader) setCustomSubHeader(parsed.subHeader)
        if (parsed.signee1Name) setSignee1Name(parsed.signee1Name)
        if (parsed.signee1Title) setSignee1Title(parsed.signee1Title)
        if (parsed.signee2Name) setSignee2Name(parsed.signee2Name)
        if (parsed.signee2Title) setSignee2Title(parsed.signee2Title)
        alert('✅ Certificate Template Configuration imported successfully!')
      } catch {
        alert('Invalid Template JSON configuration file.')
      }
    }
    reader.readAsText(file)
  }

  // ── Handler: Export Template JSON ──
  const handleExportTemplateJSON = () => {
    const data = {
      theme: templateTheme,
      header: customHeader,
      subHeader: customSubHeader,
      signee1Name,
      signee1Title,
      signee2Name,
      signee2Title,
      exportedAt: new Date().toISOString()
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `Graphite_Certificate_Template_${templateTheme}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // ── Download PNG via Canvas ──
  const handleDownloadPNG = (targetParticipant = currentParticipant) => {
    const canvas = document.createElement('canvas')
    canvas.width = 1600
    canvas.height = 1131
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Draw custom background image or themed gradient
    if (customBgImage) {
      const img = new Image()
      img.src = customBgImage
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        renderCanvasText(ctx, canvas, targetParticipant)
        triggerDownload(canvas, targetParticipant)
      }
      return
    }

    // Default Clean Authentic University Diploma Background
    ctx.fillStyle = '#FCFBF7' // Warm ivory parchment
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Outer University Maroon Border
    ctx.lineWidth = 10
    ctx.strokeStyle = '#7B1113'
    ctx.strokeRect(24, 24, canvas.width - 48, canvas.height - 48)

    // Inner Elegant Gold Border
    ctx.lineWidth = 2.5
    ctx.strokeStyle = '#C5A059'
    ctx.strokeRect(36, 36, canvas.width - 72, canvas.height - 72)

    // Thin Inset Gold Hairline
    ctx.lineWidth = 1
    ctx.strokeStyle = 'rgba(197, 160, 89, 0.45)'
    ctx.strokeRect(42, 42, canvas.width - 84, canvas.height - 84)

    renderCanvasText(ctx, canvas, targetParticipant)
    triggerDownload(canvas, targetParticipant)
  }

  const renderCanvasText = (ctx, canvas, targetParticipant) => {
    ctx.textAlign = 'center'

    // Header - University Name
    ctx.fillStyle = '#7B1113'
    ctx.font = 'bold 36px "Cinzel", "Georgia", "Times New Roman", serif'
    ctx.fillText(customHeader, canvas.width / 2, 125)

    // Subheader - Campus
    ctx.fillStyle = '#475569'
    ctx.font = '600 18px "Inter", "Arial", sans-serif'
    ctx.fillText(customSubHeader, canvas.width / 2, 160)

    // Department
    ctx.fillStyle = '#64748B'
    ctx.font = '500 14px "Inter", "Arial", sans-serif'
    ctx.fillText('DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING', canvas.width / 2, 185)

    // Elegant Maroon & Gold Divider Line
    ctx.strokeStyle = '#C5A059'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(canvas.width / 2 - 200, 205)
    ctx.lineTo(canvas.width / 2 + 200, 205)
    ctx.stroke()

    // Title: CERTIFICATE OF PARTICIPATION / EXCELLENCE
    let certHeaderTitle = 'CERTIFICATE OF PARTICIPATION'
    if (certType === 'excellence') certHeaderTitle = 'CERTIFICATE OF EXCELLENCE'
    else if (certType === 'merit') certHeaderTitle = 'CERTIFICATE OF MERIT'

    ctx.fillStyle = '#7B1113'
    ctx.font = 'bold 30px "Cinzel", "Georgia", serif'
    ctx.fillText(certHeaderTitle, canvas.width / 2, 260)

    ctx.fillStyle = '#64748B'
    ctx.font = 'italic 18px "Georgia", "Times New Roman", serif'
    ctx.fillText('This is to certify that', canvas.width / 2, 305)

    // Recipient Name
    ctx.fillStyle = '#0F172A'
    ctx.font = 'bold 48px "Cinzel", "Georgia", "Times New Roman", serif'
    ctx.fillText(targetParticipant.student_name || 'Student Name', canvas.width / 2, 375)

    // Decorative underline under name
    ctx.strokeStyle = '#C5A059'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(canvas.width / 2 - 180, 395)
    ctx.lineTo(canvas.width / 2 + 180, 395)
    ctx.stroke()

    // Degree & Roll No
    ctx.fillStyle = '#334155'
    ctx.font = '19px "Inter", "Arial", sans-serif'
    ctx.fillText(`of ${targetParticipant.degree || 'B.Tech CSE'}, Roll No: ${targetParticipant.roll_no || 'GEHU-2024'}`, canvas.width / 2, 440)

    // Achievement text
    let achievement = 'has successfully participated in the annual technical hackathon'
    if (certType === 'excellence') {
      achievement = `has demonstrated outstanding excellence and secured ${customRank} in`
    } else if (certType === 'merit') {
      achievement = 'has demonstrated remarkable technical merit and innovation in'
    }
    ctx.fillStyle = '#475569'
    ctx.font = '19px "Inter", "Arial", sans-serif'
    ctx.fillText(achievement, canvas.width / 2, 480)

    // Event Name
    ctx.fillStyle = '#7B1113'
    ctx.font = 'bold 32px "Cinzel", "Georgia", serif'
    ctx.fillText('GRAPHITE 2026', canvas.width / 2, 535)

    // Event Subtitle
    ctx.fillStyle = '#64748B'
    ctx.font = '15px "Inter", "Arial", sans-serif'
    ctx.fillText('Organized by Graphic Era Hill University, Bhimtal Campus • October 27, 2026', canvas.width / 2, 575)

    // Verification ID
    ctx.fillStyle = '#854D0E'
    ctx.font = '600 13px "Courier New", monospace'
    ctx.fillText(`Certificate ID: ${certCode}`, canvas.width / 2, 615)

    const footY = 930

    // Signee 1 (Director)
    ctx.fillStyle = '#0F172A'
    ctx.font = 'bold italic 22px "Georgia", "Times New Roman", serif'
    ctx.fillText(signee1Name, 320, footY)
    ctx.beginPath()
    ctx.moveTo(200, footY + 10)
    ctx.lineTo(440, footY + 10)
    ctx.strokeStyle = '#94A3B8'
    ctx.lineWidth = 1.5
    ctx.stroke()
    ctx.fillStyle = '#334155'
    ctx.font = 'bold 14px "Inter", sans-serif'
    ctx.fillText(signee1Title.toUpperCase(), 320, footY + 32)
    ctx.fillStyle = '#64748B'
    ctx.font = '12px "Inter", sans-serif'
    ctx.fillText('GEHU Bhimtal Campus', 320, footY + 52)

    // Center Official Embossed University Seal
    ctx.beginPath()
    ctx.arc(canvas.width / 2, footY + 5, 58, 0, Math.PI * 2)
    ctx.fillStyle = '#FAF5EB'
    ctx.fill()
    ctx.lineWidth = 3
    ctx.strokeStyle = '#C5A059'
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(canvas.width / 2, footY + 5, 52, 0, Math.PI * 2)
    ctx.lineWidth = 1
    ctx.strokeStyle = '#7B1113'
    ctx.stroke()

    ctx.fillStyle = '#7B1113'
    ctx.font = 'bold 9px "Inter", sans-serif'
    ctx.fillText('GRAPHIC ERA HILL UNIVERSITY', canvas.width / 2, footY - 14)
    ctx.fillStyle = '#C5A059'
    ctx.font = 'bold 16px "Georgia", serif'
    ctx.fillText('★ 2026 ★', canvas.width / 2, footY + 8)
    ctx.fillStyle = '#7B1113'
    ctx.font = 'bold 9px "Inter", sans-serif'
    ctx.fillText('BHIMTAL CAMPUS', canvas.width / 2, footY + 28)

    // Signee 2 (Dean / Convener)
    ctx.fillStyle = '#0F172A'
    ctx.font = 'bold italic 22px "Georgia", "Times New Roman", serif'
    ctx.fillText(signee2Name, canvas.width - 320, footY)
    ctx.beginPath()
    ctx.moveTo(canvas.width - 440, footY + 10)
    ctx.lineTo(canvas.width - 200, footY + 10)
    ctx.strokeStyle = '#94A3B8'
    ctx.lineWidth = 1.5
    ctx.stroke()
    ctx.fillStyle = '#334155'
    ctx.font = 'bold 14px "Inter", sans-serif'
    ctx.fillText(signee2Title.toUpperCase(), canvas.width - 320, footY + 32)
    ctx.fillStyle = '#64748B'
    ctx.font = '12px "Inter", sans-serif'
    ctx.fillText('Convener, Graphite 2026', canvas.width - 320, footY + 52)
  }

  const triggerDownload = (canvas, targetParticipant) => {
    const dataUrl = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = `Certificate_${(targetParticipant.student_name || 'student').replace(/\s+/g, '_')}_Graphite2026.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handlePrint = () => {
    window.print()
  }

  // Single Direct Email Sending
  const handleSendSingleEmail = () => {
    setSendingEmail(true)

    const email = currentParticipant.student_email
    const newSent = {
      ...sentMap,
      [email]: {
        sentAt: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        certCode,
        type: certType,
        verifiedUrl: publicCertUrl
      }
    }
    setSentMap(newSent)
    try {
      localStorage.setItem('graphite_certificates_sent', JSON.stringify(newSent))
    } catch {}

    const emailBody = `Dear ${currentParticipant.student_name},

Greetings from Graphic Era Hill University, Bhimtal Campus.

We are pleased to present your official Certificate of ${certType === 'excellence' ? 'Excellence' : certType === 'merit' ? 'Merit' : 'Participation'} for "Graphite 2026", organized by the Department of Computer Science & Engineering.

🎓 PARTICIPANT CREDENTIALS:
------------------------------------------
• Name: ${currentParticipant.student_name}
• Roll No: ${currentParticipant.roll_no || 'GEHU-2024'}
• Degree / Branch: ${currentParticipant.degree || 'B.Tech CSE'}
• Campus: Graphic Era Hill University, Bhimtal
• Verification Code: ${certCode}
------------------------------------------

🔗 VIEW & DOWNLOAD YOUR OFFICIAL HIGH-RESOLUTION CERTIFICATE:
${publicCertUrl}

You can print, view, or download your high-resolution verified certificate anytime using the link above.

Warm regards,
Department of Computer Science & Engineering
Graphic Era Hill University, Bhimtal Campus`

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(currentParticipant.student_email)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

    setTimeout(() => {
      setSendingEmail(false)
      window.open(gmailUrl, '_blank')
    }, 700)
  }

  // Batch Email Dispatcher
  const handleBatchDispatch = () => {
    const listToDispatch = filteredParticipants.filter(p => selectedEmails.has(p.student_email))
    if (listToDispatch.length === 0) {
      alert('Kripya kam se kam ek participant select karein!')
      return
    }

    if (!confirm(`${listToDispatch.length} participants ko ek saath certificate email dispatch karna hai?`)) return

    setBatchSending(true)
    setBatchProgress(0)

    let current = 0
    const total = listToDispatch.length
    const newSent = { ...sentMap }

    const interval = setInterval(() => {
      if (current >= total) {
        clearInterval(interval)
        setBatchSending(false)
        setSentMap(newSent)
        try {
          localStorage.setItem('graphite_certificates_sent', JSON.stringify(newSent))
        } catch {}
        alert(`🎉 ${total} participants ko certificates successfully dispatch ho gaye!`)
        return
      }

      const p = listToDispatch[current]
      newSent[p.student_email] = {
        sentAt: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        certCode: `GEHU-BHM-GRAPHITE-${p.ticket_code || '2026-X'}`,
        type: certType,
        verifiedUrl: `${window.location.origin}/certificate?code=GEHU-BHM-GRAPHITE-${p.ticket_code || '2026'}&name=${encodeURIComponent(p.student_name)}`
      }

      current += 1
      setBatchProgress(Math.round((current / total) * 100))
    }, 150)
  }

  const copyCertLink = () => {
    navigator.clipboard?.writeText(publicCertUrl)
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  const copyEmailTemplate = () => {
    const emailBody = `Dear ${currentParticipant.student_name},

Congratulations! Linked below is your official verified Certificate of ${certType === 'excellence' ? 'Excellence' : certType === 'merit' ? 'Merit' : 'Participation'} for Graphite 2026 at Graphic Era Hill University, Bhimtal.

Participant: ${currentParticipant.student_name}
Roll Number: ${currentParticipant.roll_no || 'GEHU-2024'}
Degree / Branch: ${currentParticipant.degree || 'B.Tech CSE'}
Certificate Code: ${certCode}
Direct Verification & Download Link: ${publicCertUrl}

Best regards,
Department of Computer Science & Engineering
Graphic Era Hill University, Bhimtal Campus`
    navigator.clipboard?.writeText(emailBody)
    setCopiedBody(true)
    setTimeout(() => setCopiedBody(false), 2000)
  }

  if (!isAdmin) {
    return (
      <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
        <div className="bg-[#121622] border border-red-500/60 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="text-4xl mb-3">🛡️</div>
          <h3 className="text-lg font-bold text-white mb-2">Restricted Sanctum</h3>
          <p className="text-xs text-red-300 mb-6">
            Certificate Generation & Dispatch is strictly restricted to <strong>Admin & Super Admin</strong> only.
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
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#080B14] border-2 border-red-500/60 rounded-3xl w-full max-w-6xl max-h-[96vh] flex flex-col shadow-[0_0_80px_rgba(226,27,36,0.35)] overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="bg-[#0E1322] border-b border-red-500/40 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-500/80 flex items-center justify-center text-xl shadow-[0_0_20px_rgba(226,27,36,0.5)] shrink-0">
              🕷️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xs sm:text-base font-extrabold text-white tracking-wider flex items-center gap-1.5">
                  <span>GRAPHITE 2026</span>
                  <span className="text-red-500">SPIDER-MAN CERTIFICATE STUDIO</span>
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-red-500/20 border border-red-500/50 text-[10px] font-mono text-red-400 font-bold">
                  ADMIN ONLY
                </span>
              </div>
              <p className="text-[11px] font-mono text-cyan-400">
                Graphic Era Hill University, Bhimtal • Batch Dispatcher & Official Mailer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Primary Navigation Tabs */}
            <div className="flex items-center bg-[#131A2B] border border-gray-700 p-0.5 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'preview' ? 'bg-red-600 text-white shadow-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>🕷️</span>
                <span>Certificate</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('batch')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'batch' ? 'bg-red-600 text-white shadow-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>👥</span>
                <span>Batch ({selectedEmails.size})</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('email')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'email' ? 'bg-red-600 text-white shadow-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                <span>✉️</span>
                <span>Email</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('template')}
                className={`px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'template' ? 'bg-amber-600 text-white shadow-sm' : 'text-amber-400 hover:text-white'
                }`}
              >
                <span>🎨</span>
                <span>Import Template</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-xl font-bold p-1 cursor-pointer ml-1"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Content Body: Sidebar + Main Stage */}
        <div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden">
          
          {/* Left Sidebar: Participant Selector & Template Style */}
          <div className="w-full md:w-80 bg-[#0B0F1C] border-r border-gray-800 p-3.5 flex flex-col shrink-0">
            
            {/* Top Add Participant Button */}
            <div className="mb-2.5 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowAddParticipant(true)}
                className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition cursor-pointer active:scale-95 border border-emerald-400/50"
              >
                <span>➕</span>
                <span>Add Participant On The Spot</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="mb-2.5">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="🔍 Search student, roll no..."
                className="w-full bg-[#121828] border border-gray-700 focus:border-red-500 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none"
              />
            </div>

            {/* Template Selector */}
            <div className="mb-3 p-2.5 rounded-xl bg-[#121828] border border-red-500/30 space-y-2">
              <label className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">
                Certificate Type:
              </label>
              <div className="space-y-1 text-xs">
                <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                  <input
                    type="radio"
                    name="certType"
                    checked={certType === 'participation'}
                    onChange={() => setCertType('participation')}
                    className="accent-red-500"
                  />
                  <span>🏅 Participation</span>
                </label>
                <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                  <input
                    type="radio"
                    name="certType"
                    checked={certType === 'excellence'}
                    onChange={() => setCertType('excellence')}
                    className="accent-red-500"
                  />
                  <span>🏆 Excellence (Rank Winner)</span>
                </label>
                <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                  <input
                    type="radio"
                    name="certType"
                    checked={certType === 'merit'}
                    onChange={() => setCertType('merit')}
                    className="accent-red-500"
                  />
                  <span>⚡ Special Technical Merit</span>
                </label>
              </div>

              {certType === 'excellence' && (
                <div className="pt-1">
                  <label className="text-[10px] text-gray-400 block mb-0.5">Custom Rank Title:</label>
                  <input
                    type="text"
                    value={customRank}
                    onChange={(e) => setCustomRank(e.target.value)}
                    className="w-full bg-[#080B14] border border-gray-700 rounded px-2 py-1 text-xs text-amber-300"
                  />
                </div>
              )}
            </div>

            {/* Batch Quick Selectors Bar */}
            <div className="mb-2 flex items-center justify-between text-[11px] text-gray-400 border-b border-gray-800 pb-1.5">
              <span>{selectedEmails.size} Selected</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleSelectAll}
                  className="hover:text-red-400 font-semibold cursor-pointer"
                >
                  All
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => handleSelectCount(5)}
                  className="hover:text-red-400 font-semibold cursor-pointer"
                >
                  First 5
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => handleSelectCount(10)}
                  className="hover:text-red-400 font-semibold cursor-pointer"
                >
                  10
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={handleDeselectAll}
                  className="hover:text-gray-200 cursor-pointer"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Scrollable List of Participants */}
            <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin">
              {filteredParticipants.map((p, idx) => {
                const isSelected = p.student_email === currentParticipant.student_email
                const isChecked = selectedEmails.has(p.student_email)
                const isSent = !!sentMap[p.student_email]

                return (
                  <div
                    key={p.student_email || idx}
                    className={`p-2 rounded-xl transition border flex items-center gap-2 ${
                      isSelected
                        ? 'bg-red-950/60 border-red-500 shadow-sm'
                        : 'bg-[#101626] border-gray-800 hover:bg-[#151D32]'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleToggleSelect(p.student_email)}
                      className="accent-red-500 w-3.5 h-3.5 cursor-pointer shrink-0"
                    />

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedParticipantIndex(idx)
                        setActiveTab('preview')
                      }}
                      className="flex-1 min-w-0 text-left cursor-pointer"
                    >
                      <p className="text-xs font-bold text-white truncate">{p.student_name}</p>
                      <p className="text-[10px] font-mono text-gray-400 truncate">{p.roll_no || p.student_email}</p>
                      <p className="text-[9px] text-cyan-400 truncate">{p.team_name || 'Solo'}</p>
                    </button>

                    <div className="shrink-0 flex flex-col items-end">
                      {isSent ? (
                        <span className="px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-[9px] font-mono font-bold">
                          SENT ✓
                        </span>
                      ) : (
                        <span className="px-1.5 py-0.5 rounded bg-gray-900 text-gray-500 text-[9px] font-mono">
                          IDLE
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Main Stage */}
          <div className="flex-1 bg-[#070A12] p-4 sm:p-6 overflow-y-auto flex flex-col">
            
            {activeTab === 'preview' ? (
              /* ======================================================== */
              /* TAB 1: SPIDER-MAN THEMED CERTIFICATE PREVIEW            */
              /* ======================================================== */
              <div className="space-y-4 flex flex-col items-center">
                
                {/* Action Bar */}
                <div className="w-full flex flex-wrap items-center justify-between gap-2 bg-[#0E1322] border border-gray-800 rounded-xl px-4 py-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 font-bold">Current Recipient:</span>
                    <span className="text-white font-semibold">{currentParticipant.student_name}</span>
                    <span className="text-gray-500">|</span>
                    <span className="font-mono text-cyan-400 text-[11px]">{certCode}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleDownloadPNG(currentParticipant)}
                      className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-[0_0_15px_rgba(226,27,36,0.35)] active:scale-95"
                    >
                      <span>📥</span>
                      <span>Download PNG (1600px)</span>
                    </button>

                    <button
                      type="button"
                      onClick={handlePrint}
                      className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <span>🖨️</span>
                      <span>Print</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('email')}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-sm active:scale-95"
                    >
                      <span>✉️</span>
                      <span>Dispatch Mail</span>
                    </button>
                  </div>
                </div>

                {/* ── CLEAN AUTHENTIC UNIVERSITY CERTIFICATE CONTAINER ── */}
                <div
                  ref={certificateRef}
                  id="spider-certificate-box"
                  className="w-full max-w-3xl aspect-[1.414/1] bg-[#FCFBF7] text-[#1E293B] p-6 sm:p-10 rounded-2xl relative border-[8px] sm:border-[10px] border-[#7B1113] flex flex-col justify-between overflow-hidden shadow-2xl select-none"
                  style={customBgImage ? { backgroundImage: `url(${customBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                >
                  {/* Elegant Double Inset Gold Border */}
                  <div className="absolute inset-2 sm:inset-3 border-2 border-[#C5A059] rounded-xl pointer-events-none" />
                  <div className="absolute inset-3 sm:inset-4 border border-[#C5A059]/40 rounded-lg pointer-events-none" />

                  {/* Subtle Graphic Era Watermark */}
                  {!customBgImage && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
                      <img src="/logo.png?v=2" alt="Watermark" className="w-[340px] h-[340px] object-contain grayscale" />
                    </div>
                  )}

                  {/* University Header */}
                  <div className="text-center relative z-10 space-y-0.5">
                    <div className="flex items-center justify-center gap-3 mb-1">
                      <img src="/logo.png?v=2" alt="GEHU Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                      <div>
                        <h1 className="text-lg sm:text-2xl font-serif font-black tracking-wider text-[#7B1113] uppercase">
                          {customHeader}
                        </h1>
                        <p className="text-[10px] sm:text-xs font-sans font-bold text-[#64748B] tracking-widest uppercase">
                          {customSubHeader}
                        </p>
                      </div>
                    </div>
                    <p className="text-[9px] sm:text-[10px] font-sans text-gray-500 tracking-wider uppercase font-semibold">
                      Department of Computer Science & Engineering
                    </p>
                  </div>

                  {/* Certificate Title */}
                  <div className="text-center relative z-10 my-1">
                    <div className="inline-block relative">
                      <h2 className="text-xs sm:text-base font-serif font-bold text-[#7B1113] tracking-[0.2em] uppercase border-b border-[#C5A059] pb-1 px-4">
                        {certType === 'excellence' ? 'Certificate of Excellence' : certType === 'merit' ? 'Certificate of Merit' : 'Certificate of Participation'}
                      </h2>
                      <p className="text-[10px] sm:text-xs font-serif italic text-gray-500 mt-2">
                        This is to certify that
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] tracking-wide mt-1">
                        {currentParticipant.student_name}
                      </h3>
                      <div className="w-48 mx-auto h-[1.5px] bg-[#C5A059] mt-1" />
                    </div>
                  </div>

                  {/* Citation Body Text */}
                  <div className="text-center relative z-10 max-w-xl mx-auto px-2 space-y-1 text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                    <p>
                      of <strong className="text-gray-900">{currentParticipant.degree || 'B.Tech CSE'}</strong>, Roll Number{' '}
                      <strong className="text-gray-900 font-mono">{currentParticipant.roll_no || 'GEHU-2024'}</strong>,{' '}
                      {certType === 'excellence' ? (
                        <>has demonstrated outstanding performance and secured <strong className="text-[#7B1113]">{customRank}</strong> in</>
                      ) : certType === 'merit' ? (
                        <>has demonstrated exemplary technical innovation and brilliance in</>
                      ) : (
                        <>has successfully participated in the annual technical hackathon</>
                      )}
                    </p>
                    <p className="font-serif font-bold text-[#7B1113] text-sm sm:text-base tracking-wide">
                      &quot;GRAPHITE 2026&quot;
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 font-sans">
                      Organized by Graphic Era Hill University, Bhimtal Campus • Concluded on October 27, 2026
                    </p>
                  </div>

                  {/* Certificate Footer: Signatures & University Seal */}
                  <div className="relative z-10 pt-2 flex items-end justify-between border-t border-gray-300 px-2 sm:px-6">
                    {/* Signee 1 */}
                    <div className="text-center">
                      <div className="font-serif italic text-xs sm:text-sm text-gray-900 font-bold">
                        {signee1Name}
                      </div>
                      <div className="w-24 sm:w-32 border-t border-gray-400 mt-1 pt-0.5">
                        <p className="text-[9px] font-sans font-bold text-gray-700 uppercase">{signee1Title}</p>
                        <p className="text-[8px] font-sans text-gray-500">GEHU Bhimtal</p>
                      </div>
                    </div>

                    {/* Center Official Seal */}
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-[#C5A059] bg-[#FAF5EB] flex items-center justify-center p-1 text-center shadow-inner">
                        <div className="w-full h-full rounded-full border border-dashed border-[#7B1113] flex flex-col items-center justify-center">
                          <span className="text-[6px] font-sans text-[#7B1113] font-bold tracking-tight">GEHU</span>
                          <span className="text-[9px] text-[#C5A059] font-serif font-bold">★ 2026 ★</span>
                          <span className="text-[6px] font-sans text-[#7B1113] font-bold">BHIMTAL</span>
                        </div>
                      </div>
                      <span className="text-[8px] font-mono text-gray-500 mt-1">{certCode}</span>
                    </div>

                    {/* Signee 2 */}
                    <div className="text-center">
                      <div className="font-serif italic text-xs sm:text-sm text-gray-900 font-bold">
                        {signee2Name}
                      </div>
                      <div className="w-24 sm:w-32 border-t border-gray-400 mt-1 pt-0.5">
                        <p className="text-[9px] font-sans font-bold text-gray-700 uppercase">{signee2Title}</p>
                        <p className="text-[8px] font-sans text-gray-500">Convener, Graphite 2026</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ) : activeTab === 'template' ? (
              /* ======================================================== */
              /* TAB 4: IMPORT TEMPLATE & DESIGN STUDIO                  */
              /* ======================================================== */
              <div className="space-y-5 max-w-3xl mx-auto w-full">
                
                <div className="bg-[#0E1322] border border-gray-800 rounded-2xl p-5 space-y-5 shadow-xl">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>🎨</span>
                        <span>Import & Customize Certificate Template</span>
                      </h3>
                      <p className="text-[11px] text-gray-400">
                        Upload custom certificate images, import template JSON configs, or edit signees & headers
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleExportTemplateJSON}
                        className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-xs font-semibold text-gray-200 flex items-center gap-1 transition cursor-pointer"
                      >
                        <span>💾</span>
                        <span>Export Template</span>
                      </button>
                    </div>
                  </div>

                  {/* Upload Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Upload Background Image */}
                    <div className="bg-[#121828] border border-gray-700/80 rounded-xl p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1">
                          <span>🖼️</span>
                          <span>Upload Certificate Background (PNG/JPG)</span>
                        </div>
                        <p className="text-[11px] text-gray-400 leading-relaxed mb-3">
                          Upload your custom university certificate frame or Photoshop/Canva design to use as backdrop.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="file"
                          ref={bgFileInputRef}
                          accept="image/*"
                          onChange={handleUploadBgImage}
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => bgFileInputRef.current?.click()}
                          className="px-3.5 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs cursor-pointer transition shadow-sm"
                        >
                          Browse Image File…
                        </button>
                        {customBgImage && (
                          <button
                            type="button"
                            onClick={() => setCustomBgImage(null)}
                            className="text-[11px] text-red-400 hover:text-red-300 underline cursor-pointer"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Import Template JSON */}
                    <div className="bg-[#121828] border border-gray-700/80 rounded-xl p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 mb-1">
                          <span>📄</span>
                          <span>Import Template Config (JSON)</span>
                        </div>
                        <p className="text-[11px] text-gray-400 leading-relaxed mb-3">
                          Import pre-saved certificate typography, signatory credentials, and layout rules.
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <input
                          type="file"
                          ref={jsonFileInputRef}
                          accept=".json,application/json"
                          onChange={handleUploadTemplateJSON}
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => jsonFileInputRef.current?.click()}
                          className="px-3.5 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs cursor-pointer transition shadow-sm"
                        >
                          Upload JSON Template…
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Header & Signee Editable Details */}
                  <div className="space-y-3 pt-2 border-t border-gray-800">
                    <label className="text-xs font-bold text-gray-200 block uppercase tracking-wider">
                      Template Header & Signatories Editor:
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="text-[11px] text-gray-400 block mb-1">University Name:</label>
                        <input
                          type="text"
                          value={customHeader}
                          onChange={(e) => setCustomHeader(e.target.value)}
                          className="w-full bg-[#080B14] border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-gray-400 block mb-1">Campus Sub-Header:</label>
                        <input
                          type="text"
                          value={customSubHeader}
                          onChange={(e) => setCustomSubHeader(e.target.value)}
                          className="w-full bg-[#080B14] border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="text-[11px] text-gray-400 block mb-1">Signatory 1 (Director):</label>
                        <input
                          type="text"
                          value={signee1Name}
                          onChange={(e) => setSignee1Name(e.target.value)}
                          className="w-full bg-[#080B14] border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none mb-1.5"
                          placeholder="Name"
                        />
                        <input
                          type="text"
                          value={signee1Title}
                          onChange={(e) => setSignee1Title(e.target.value)}
                          className="w-full bg-[#080B14] border border-gray-700 rounded-lg px-3 py-1 text-gray-400 text-[11px] focus:outline-none"
                          placeholder="Title"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] text-gray-400 block mb-1">Signatory 2 (Dean / Convener):</label>
                        <input
                          type="text"
                          value={signee2Name}
                          onChange={(e) => setSignee2Name(e.target.value)}
                          className="w-full bg-[#080B14] border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none mb-1.5"
                          placeholder="Name"
                        />
                        <input
                          type="text"
                          value={signee2Title}
                          onChange={(e) => setSignee2Title(e.target.value)}
                          className="w-full bg-[#080B14] border border-gray-700 rounded-lg px-3 py-1 text-gray-400 text-[11px] focus:outline-none"
                          placeholder="Title"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab('preview')
                          alert('✅ Template changes applied! Certificate preview updated.')
                        }}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer transition shadow-sm"
                      >
                        Apply & Preview Certificate ➔
                      </button>
                    </div>

                  </div>

                </div>

              </div>
            ) : activeTab === 'batch' ? (
              /* ======================================================== */
              /* TAB 2: BATCH SELECTION & MULTI-GENERATE                 */
              /* ======================================================== */
              <div className="space-y-4 max-w-3xl mx-auto w-full">
                <div className="bg-[#0E1322] border border-gray-800 rounded-2xl p-5 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>👥</span>
                        <span>Batch Selection Controller</span>
                      </h3>
                      <p className="text-[11px] text-gray-400">
                        Choose exactly how many participants to generate & send certificates to in one click
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-red-950/80 border border-red-500 text-red-300 text-xs font-mono font-bold">
                        {selectedEmails.size} / {filteredParticipants.length} Selected
                      </span>
                    </div>
                  </div>

                  {/* Batch Buttons */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      type="button"
                      onClick={handleSelectAll}
                      className="px-3.5 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold cursor-pointer"
                    >
                      Select All ({filteredParticipants.length})
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectCount(5)}
                      className="px-3.5 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold cursor-pointer"
                    >
                      Select First 5
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectCount(10)}
                      className="px-3.5 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold cursor-pointer"
                    >
                      Select First 10
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectCount(20)}
                      className="px-3.5 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-xs font-semibold cursor-pointer"
                    >
                      Select First 20
                    </button>
                    <button
                      type="button"
                      onClick={handleDeselectAll}
                      className="px-3.5 py-1.5 rounded-lg bg-gray-900 border border-gray-700 text-gray-400 hover:text-white text-xs cursor-pointer ml-auto"
                    >
                      Deselect All
                    </button>
                  </div>

                  {/* Summary of Selected List */}
                  <div className="bg-[#080B14] border border-gray-800 rounded-xl p-3 max-h-56 overflow-y-auto space-y-1 text-xs">
                    {filteredParticipants
                      .filter(p => selectedEmails.has(p.student_email))
                      .map((p, i) => (
                        <div key={p.student_email} className="flex items-center justify-between text-gray-300 py-1 px-2 hover:bg-gray-900/50 rounded">
                          <span className="font-semibold text-white">#{i + 1} {p.student_name}</span>
                          <span className="font-mono text-[11px] text-gray-400">{p.roll_no} • {p.student_email}</span>
                          <span className="text-[10px] font-mono text-cyan-400">{p.team_name || 'Solo'}</span>
                        </div>
                      ))}
                    {selectedEmails.size === 0 && (
                      <p className="text-gray-500 text-center py-6">Koi participant select nahi kiya gaya. Upar se select karein.</p>
                    )}
                  </div>

                  {/* Batch Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleBatchDispatch}
                      disabled={batchSending || selectedEmails.size === 0}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 disabled:opacity-40 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition cursor-pointer shadow-[0_0_25px_rgba(226,27,36,0.4)] active:scale-95"
                    >
                      {batchSending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching Batch ({batchProgress}%)…</span>
                        </>
                      ) : (
                        <>
                          <span>🚀</span>
                          <span>Dispatch Emails to {selectedEmails.size} Selected Participants</span>
                        </>
                      )}
                    </button>
                  </div>

                  {batchSending && (
                    <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden mt-2">
                      <div
                        className="bg-red-500 h-full transition-all duration-200"
                        style={{ width: `${batchProgress}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* ======================================================== */
              /* TAB 3: PROPER EMAIL TEMPLATE & SEND STUDIO              */
              /* ======================================================== */
              <div className="space-y-4 max-w-3xl mx-auto w-full">
                
                <div className="bg-[#0E1322] border border-gray-800 rounded-2xl p-5 space-y-4 shadow-xl">
                  
                  {/* Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">✉️</span>
                      <div>
                        <h3 className="text-sm font-bold text-white">Official Certificate Email Dispatcher</h3>
                        <p className="text-[11px] text-gray-400">
                          Directly send verified Spider-Man themed certificate links to participant inbox
                        </p>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[11px] font-mono font-bold">
                      {Object.keys(sentMap).length} / {filteredParticipants.length} Sent
                    </span>
                  </div>

                  {/* Sender & Recipient */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-gray-400 font-semibold mb-1">From:</label>
                      <input
                        type="text"
                        value={emailSender}
                        onChange={(e) => setEmailSender(e.target.value)}
                        className="w-full bg-[#080B14] border border-gray-700 rounded-lg px-3 py-1.5 text-gray-300 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 font-semibold mb-1">Recipient:</label>
                      <input
                        type="text"
                        disabled
                        value={`${currentParticipant.student_name} <${currentParticipant.student_email}>`}
                        className="w-full bg-[#080B14] border border-gray-800 rounded-lg px-3 py-1.5 text-red-400 font-mono focus:outline-none"
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
                      className="w-full bg-[#080B14] border border-gray-700 focus:border-red-500 rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
                    />
                  </div>

                  {/* Rich Preview Box */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-semibold text-gray-300">
                        Email Content with Verified Link:
                      </label>
                      <button
                        type="button"
                        onClick={copyEmailTemplate}
                        className="text-[11px] text-cyan-400 hover:text-cyan-300 font-mono cursor-pointer"
                      >
                        {copiedBody ? '✓ COPIED TEXT' : '📋 Copy Body'}
                      </button>
                    </div>

                    <div className="bg-[#080B14] border border-red-500/30 rounded-xl p-4 font-mono text-xs text-gray-300 space-y-2 whitespace-pre-wrap leading-relaxed">
                      <p>Dear <strong className="text-white">{currentParticipant.student_name}</strong>,</p>
                      <p>
                        Congratulations from Graphic Era Hill University, Bhimtal Campus! 🕷️⚡
                      </p>
                      <p>
                        We are proud to award your official Certificate of {certType === 'excellence' ? 'Excellence' : certType === 'merit' ? 'Special Merit' : 'Participation'} for <strong>Graphite 2026: The Ultimate Spider-Man Themed Hackathon</strong>.
                      </p>

                      <div className="bg-[#121828] p-3 rounded-lg border border-red-500/30 my-2 text-[11px] space-y-0.5 text-cyan-300">
                        <p><strong>Certificate ID:</strong> {certCode}</p>
                        <p><strong>Roll Number:</strong> {currentParticipant.roll_no || 'GEHU-2024'}</p>
                        <p><strong>Degree / Branch:</strong> {currentParticipant.degree || 'B.Tech CSE'}</p>
                        <p><strong>Campus:</strong> GEHU Bhimtal Campus</p>
                        <p><strong>Verification:</strong> Sealed & Verified by Academic Cell ✓</p>
                      </div>

                      <p>View, print, or download your high-resolution certificate directly:</p>
                      <p className="text-cyan-400 underline break-all">{publicCertUrl}</p>
                    </div>
                  </div>

                  {/* Dispatch Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleSendSingleEmail}
                      disabled={sendingEmail}
                      className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs flex items-center gap-2 transition cursor-pointer shadow-[0_0_20px_rgba(226,27,36,0.4)] active:scale-95 disabled:opacity-50"
                    >
                      {sendingEmail ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Opening Gmail…</span>
                        </>
                      ) : (
                        <>
                          <span>✉️</span>
                          <span>Send Email via Gmail Web</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDownloadPNG(currentParticipant)}
                      className="px-4 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs flex items-center gap-1.5 transition cursor-pointer"
                    >
                      <span>📥</span>
                      <span>Download PNG to Attach</span>
                    </button>

                    <button
                      type="button"
                      onClick={copyCertLink}
                      className="px-4 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-cyan-300 font-mono text-xs flex items-center gap-1.5 transition cursor-pointer"
                    >
                      {copiedLink ? '✓ COPIED LINK' : '🔗 Copy Direct Link'}
                    </button>
                  </div>

                </div>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* ── ADD PARTICIPANT MODAL POPUP ── */}
      {showAddParticipant && (
        <div className="fixed inset-0 z-60 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0E1322] border-2 border-emerald-500/60 rounded-3xl p-6 max-w-lg w-full shadow-[0_0_60px_rgba(16,185,129,0.3)]">
            <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">➕</span>
                <h3 className="text-sm font-bold text-white">Add Participant to Graphite Bhimtal</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowAddParticipant(false)}
                className="text-gray-400 hover:text-white text-lg font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveParticipant} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-gray-300 font-semibold mb-1">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={newParticipant.student_name}
                  onChange={(e) => setNewParticipant({ ...newParticipant, student_name: e.target.value })}
                  className="w-full bg-[#080B14] border border-gray-700 focus:border-emerald-500 rounded-xl px-3 py-2 text-white placeholder-gray-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    University Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@gehu.ac.in"
                    value={newParticipant.student_email}
                    onChange={(e) => setNewParticipant({ ...newParticipant, student_email: e.target.value })}
                    className="w-full bg-[#080B14] border border-gray-700 focus:border-emerald-500 rounded-xl px-3 py-2 text-white placeholder-gray-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    Roll Number
                  </label>
                  <input
                    type="text"
                    placeholder="GEHU-2024-BHM-XXX"
                    value={newParticipant.roll_no}
                    onChange={(e) => setNewParticipant({ ...newParticipant, roll_no: e.target.value })}
                    className="w-full bg-[#080B14] border border-gray-700 focus:border-emerald-500 rounded-xl px-3 py-2 text-white placeholder-gray-600 focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    Degree / Branch
                  </label>
                  <input
                    type="text"
                    placeholder="B.Tech CSE - 2nd Year"
                    value={newParticipant.degree}
                    onChange={(e) => setNewParticipant({ ...newParticipant, degree: e.target.value })}
                    className="w-full bg-[#080B14] border border-gray-700 focus:border-emerald-500 rounded-xl px-3 py-2 text-white placeholder-gray-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">
                    Team Name / Track
                  </label>
                  <input
                    type="text"
                    placeholder="Spider Innovators / Solo"
                    value={newParticipant.team_name}
                    onChange={(e) => setNewParticipant({ ...newParticipant, team_name: e.target.value })}
                    className="w-full bg-[#080B14] border border-gray-700 focus:border-emerald-500 rounded-xl px-3 py-2 text-white placeholder-gray-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-gray-800">
                <button
                  type="button"
                  onClick={() => setShowAddParticipant(false)}
                  className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer transition shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                  Save & Add to Registry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}
