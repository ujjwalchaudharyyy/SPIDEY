import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function CertificateView() {
  const [searchParams] = useSearchParams()

  const code = searchParams.get('code') || 'GEHU-BHM-GRAPHITE-2026-001'
  const name = searchParams.get('name') || 'Shreya Verma'
  const roll = searchParams.get('roll') || 'GEHU-2024-BHM-203'
  const degree = searchParams.get('degree') || 'B.Tech CSE - 2nd Year'
  const type = searchParams.get('type') || 'participation' // 'participation' | 'excellence' | 'merit'
  const rank = searchParams.get('rank') || 'Champion (Rank #1)'

  const [copied, setCopied] = useState(false)

  const certTitle = useMemo(() => {
    if (type === 'excellence') return 'Certificate of Excellence'
    if (type === 'merit') return 'Certificate of Merit'
    return 'Certificate of Participation'
  }, [type])

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 1600
    canvas.height = 1131
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clean Authentic University Diploma Background
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

    // University Header
    ctx.textAlign = 'center'
    ctx.fillStyle = '#7B1113'
    ctx.font = 'bold 36px "Cinzel", "Georgia", "Times New Roman", serif'
    ctx.fillText('GRAPHIC ERA HILL UNIVERSITY', canvas.width / 2, 125)

    ctx.fillStyle = '#475569'
    ctx.font = '600 18px "Inter", "Arial", sans-serif'
    ctx.fillText('BHIMTAL CAMPUS', canvas.width / 2, 160)

    ctx.fillStyle = '#64748B'
    ctx.font = '500 14px "Inter", "Arial", sans-serif'
    ctx.fillText('DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING', canvas.width / 2, 185)

    // Elegant Divider Line
    ctx.strokeStyle = '#C5A059'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(canvas.width / 2 - 200, 205)
    ctx.lineTo(canvas.width / 2 + 200, 205)
    ctx.stroke()

    // Title: CERTIFICATE OF PARTICIPATION / EXCELLENCE
    ctx.fillStyle = '#7B1113'
    ctx.font = 'bold 30px "Cinzel", "Georgia", serif'
    ctx.fillText(certTitle.toUpperCase(), canvas.width / 2, 260)

    ctx.fillStyle = '#64748B'
    ctx.font = 'italic 18px "Georgia", "Times New Roman", serif'
    ctx.fillText('This is to certify that', canvas.width / 2, 305)

    // Recipient Name
    ctx.fillStyle = '#0F172A'
    ctx.font = 'bold 48px "Cinzel", "Georgia", "Times New Roman", serif'
    ctx.fillText(name || 'Student Name', canvas.width / 2, 375)

    // Underline
    ctx.strokeStyle = '#C5A059'
    ctx.lineWidth = 1.5
    ctx.beginPath()
    ctx.moveTo(canvas.width / 2 - 180, 395)
    ctx.lineTo(canvas.width / 2 + 180, 395)
    ctx.stroke()

    // Degree & Roll
    ctx.fillStyle = '#334155'
    ctx.font = '19px "Inter", "Arial", sans-serif'
    ctx.fillText(`of ${degree}, Roll No: ${roll}`, canvas.width / 2, 440)

    // Achievement text
    let achievement = 'has successfully participated in the annual technical hackathon'
    if (type === 'excellence') {
      achievement = `has demonstrated outstanding excellence and secured ${rank} in`
    } else if (type === 'merit') {
      achievement = 'has demonstrated remarkable technical merit and innovation in'
    }
    ctx.fillStyle = '#475569'
    ctx.font = '19px "Inter", "Arial", sans-serif'
    ctx.fillText(achievement, canvas.width / 2, 480)

    // Event Title
    ctx.fillStyle = '#7B1113'
    ctx.font = 'bold 32px "Cinzel", "Georgia", serif'
    ctx.fillText('GRAPHITE 2026', canvas.width / 2, 535)

    ctx.fillStyle = '#64748B'
    ctx.font = '15px "Inter", "Arial", sans-serif'
    ctx.fillText('Organized by Graphic Era Hill University, Bhimtal Campus • October 27, 2026', canvas.width / 2, 575)

    // Verification ID
    ctx.fillStyle = '#854D0E'
    ctx.font = '600 13px "Courier New", monospace'
    ctx.fillText(`Certificate ID: ${code}`, canvas.width / 2, 615)

    // Footer Signatures
    const footY = 930

    // Campus Director
    ctx.fillStyle = '#0F172A'
    ctx.font = 'bold italic 22px "Georgia", "Times New Roman", serif'
    ctx.fillText('Dr. M.C. Lohani', 320, footY)
    ctx.beginPath()
    ctx.moveTo(200, footY + 10)
    ctx.lineTo(440, footY + 10)
    ctx.strokeStyle = '#94A3B8'
    ctx.lineWidth = 1.5
    ctx.stroke()
    ctx.fillStyle = '#334155'
    ctx.font = 'bold 14px "Inter", sans-serif'
    ctx.fillText('CAMPUS DIRECTOR', 320, footY + 32)
    ctx.fillStyle = '#64748B'
    ctx.font = '12px "Inter", sans-serif'
    ctx.fillText('GEHU Bhimtal Campus', 320, footY + 52)

    // Center: Embossed University Seal
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

    // Dean Student Welfare
    ctx.fillStyle = '#0F172A'
    ctx.font = 'bold italic 22px "Georgia", "Times New Roman", serif'
    ctx.fillText('Dr. D.S. Rawat', canvas.width - 320, footY)
    ctx.beginPath()
    ctx.moveTo(canvas.width - 440, footY + 10)
    ctx.lineTo(canvas.width - 200, footY + 10)
    ctx.strokeStyle = '#94A3B8'
    ctx.lineWidth = 1.5
    ctx.stroke()
    ctx.fillStyle = '#334155'
    ctx.font = 'bold 14px "Inter", sans-serif'
    ctx.fillText('DEAN STUDENT WELFARE', canvas.width - 320, footY + 32)
    ctx.fillStyle = '#64748B'
    ctx.font = '12px "Inter", sans-serif'
    ctx.fillText('Convener, Graphite 2026', canvas.width - 320, footY + 52)

    // Download PNG
    const dataUrl = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = `Certificate_${name.replace(/\s+/g, '_')}_Graphite2026.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#070913] text-gray-100 font-sans pb-16 print:bg-white print:p-0">
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        
        {/* Verification Banner */}
        <div className="mb-6 bg-[#0E1322] border border-gray-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-red-950/80 border border-red-500/40 flex items-center justify-center text-xl shrink-0">
              🎓
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-extrabold text-sm tracking-wide">
                  OFFICIAL UNIVERSITY CERTIFICATE
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 text-[10px] font-mono font-bold">
                  VERIFIED & AUTHENTIC ✓
                </span>
              </div>
              <p className="text-[11px] font-mono text-gray-400">
                Graphic Era Hill University, Bhimtal Campus • Code: <strong className="text-white">{code}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-700 to-rose-700 hover:from-red-600 hover:to-rose-600 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-sm cursor-pointer active:scale-95"
            >
              <span>📥</span>
              <span>Download PNG (1600px)</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs flex items-center gap-1.5 transition cursor-pointer"
            >
              <span>🖨️</span>
              <span>Print</span>
            </button>
            <button
              onClick={handleCopyLink}
              className="px-3 py-1.5 rounded-xl bg-gray-800 hover:bg-gray-700 text-cyan-300 text-xs font-mono transition cursor-pointer"
            >
              {copied ? '✓ COPIED' : '🔗 SHARE'}
            </button>
          </div>
        </div>

        {/* ── CLEAN AUTHENTIC DIGITAL CERTIFICATE CONTAINER ── */}
        <div
          id="official-certificate-container"
          className="w-full aspect-[1.414/1] bg-[#FCFBF7] text-[#1E293B] p-6 sm:p-12 rounded-2xl shadow-2xl relative border-[8px] sm:border-[12px] border-[#7B1113] flex flex-col justify-between overflow-hidden select-none print:shadow-none print:border-[8px] print:rounded-none"
        >
          {/* Elegant Double Inset Gold Border */}
          <div className="absolute inset-3 sm:inset-5 border-2 border-[#C5A059] rounded-xl pointer-events-none" />
          <div className="absolute inset-4 sm:inset-6 border border-[#C5A059]/40 rounded-lg pointer-events-none" />

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
            <img src="/logo.png?v=2" alt="University Crest" className="w-[400px] h-[400px] object-contain grayscale" />
          </div>

          {/* Header */}
          <div className="text-center relative z-10 space-y-0.5">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-1">
              <img src="/logo.png?v=2" alt="GEHU Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
              <div>
                <h1 className="text-lg sm:text-3xl font-serif font-black tracking-wider text-[#7B1113] uppercase">
                  GRAPHIC ERA HILL UNIVERSITY
                </h1>
                <p className="text-[10px] sm:text-sm font-sans font-bold text-[#64748B] tracking-widest uppercase">
                  BHIMTAL CAMPUS
                </p>
              </div>
            </div>
            <p className="text-[9px] sm:text-xs font-sans text-gray-500 tracking-wider uppercase font-semibold">
              Department of Computer Science & Engineering
            </p>
          </div>

          {/* Certificate Title */}
          <div className="text-center relative z-10 my-1">
            <div className="inline-block relative">
              <h2 className="text-xs sm:text-lg font-serif font-bold text-[#7B1113] tracking-[0.2em] uppercase border-b border-[#C5A059] pb-1 px-6">
                {certTitle}
              </h2>
              <p className="text-[11px] sm:text-xs font-serif italic text-gray-500 mt-2">
                This is to certify that
              </p>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#0F172A] tracking-wide mt-1">
                {name}
              </h3>
              <div className="w-56 mx-auto h-[1.5px] bg-[#C5A059] mt-1" />
            </div>
          </div>

          {/* Body Citation */}
          <div className="text-center relative z-10 max-w-2xl mx-auto px-2 space-y-1 text-xs sm:text-base text-gray-700 leading-relaxed font-sans">
            <p>
              of <strong className="text-gray-900">{degree}</strong>, Roll Number{' '}
              <strong className="text-gray-900 font-mono">{roll}</strong>,{' '}
              {type === 'excellence' ? (
                <>has demonstrated outstanding performance and secured <strong className="text-[#7B1113]">{rank}</strong> in</>
              ) : type === 'merit' ? (
                <>has demonstrated exemplary technical innovation and brilliance in</>
              ) : (
                <>has successfully participated in the annual technical hackathon</>
              )}
            </p>
            <p className="font-serif font-bold text-[#7B1113] text-sm sm:text-xl tracking-wide">
              &quot;GRAPHITE 2026&quot;
            </p>
            <p className="text-[11px] sm:text-xs text-gray-500 font-sans">
              Organized by Graphic Era Hill University, Bhimtal Campus • Concluded on October 27, 2026
            </p>
          </div>

          {/* Signatures & Seal Footer */}
          <div className="relative z-10 pt-3 flex items-end justify-between border-t border-gray-300 px-2 sm:px-8">
            
            {/* Signature 1 */}
            <div className="text-center">
              <div className="font-serif italic text-sm sm:text-base text-gray-900 font-bold">
                Dr. M.C. Lohani
              </div>
              <div className="w-28 sm:w-36 border-t border-gray-400 mt-1 pt-0.5">
                <p className="text-[10px] sm:text-xs font-sans font-bold text-gray-700 uppercase">Campus Director</p>
                <p className="text-[9px] sm:text-[10px] font-sans text-gray-500">GEHU Bhimtal</p>
              </div>
            </div>

            {/* Official University Seal */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#C5A059] bg-[#FAF5EB] flex items-center justify-center p-1 text-center shadow-inner">
                <div className="w-full h-full rounded-full border border-dashed border-[#7B1113] flex flex-col items-center justify-center">
                  <span className="text-[7px] sm:text-[8px] font-sans text-[#7B1113] font-bold tracking-tight">GEHU</span>
                  <span className="text-[10px] sm:text-xs text-[#C5A059] font-serif font-bold">★ 2026 ★</span>
                  <span className="text-[7px] sm:text-[8px] font-sans text-[#7B1113] font-bold">BHIMTAL</span>
                </div>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-gray-500 mt-1">{code}</span>
            </div>

            {/* Signature 2 */}
            <div className="text-center">
              <div className="font-serif italic text-sm sm:text-base text-gray-900 font-bold">
                Dr. D.S. Rawat
              </div>
              <div className="w-28 sm:w-36 border-t border-gray-400 mt-1 pt-0.5">
                <p className="text-[10px] sm:text-xs font-sans font-bold text-gray-700 uppercase">Dean Student Welfare</p>
                <p className="text-[9px] sm:text-[10px] font-sans text-gray-500">Convener, Graphite 2026</p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 text-center print:hidden">
          <Link
            to="/feed"
            className="text-xs font-mono text-gray-400 hover:text-red-400 transition"
          >
            ← Back to Graphic Era Event Hub
          </Link>
        </div>

      </main>
    </div>
  )
}
