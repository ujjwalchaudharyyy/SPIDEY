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
    if (type === 'excellence') return 'SPIDER-VERSE CITATION OF EXCELLENCE'
    if (type === 'merit') return 'SPIDER-VERSE CITATION OF TECHNICAL MERIT'
    return 'SPIDER-VERSE CITATION OF PARTICIPATION'
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

    // Spider-Verse Dark Cyber Background
    const bgGrad = ctx.createRadialGradient(
      canvas.width / 2, canvas.height / 2, 80,
      canvas.width / 2, canvas.height / 2, 900
    )
    bgGrad.addColorStop(0, '#10172A')
    bgGrad.addColorStop(0.6, '#080B14')
    bgGrad.addColorStop(1, '#020307')
    ctx.fillStyle = bgGrad
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Outer Glowing Crimson Border
    ctx.lineWidth = 14
    ctx.strokeStyle = '#E21B24'
    ctx.strokeRect(16, 16, canvas.width - 32, canvas.height - 32)

    // Cyber-Blue Inner Border
    ctx.lineWidth = 4
    ctx.strokeStyle = '#00F0FF'
    ctx.strokeRect(34, 34, canvas.width - 68, canvas.height - 68)

    // Gold Inner Inset
    ctx.lineWidth = 1.5
    ctx.strokeStyle = '#F59E0B'
    ctx.strokeRect(44, 44, canvas.width - 88, canvas.height - 88)

    // University Header
    ctx.textAlign = 'center'
    ctx.fillStyle = '#FFFFFF'
    ctx.font = '900 40px "Cinzel", "Arial Black", serif'
    ctx.fillText('GRAPHIC ERA HILL UNIVERSITY', canvas.width / 2, 120)

    ctx.fillStyle = '#00F0FF'
    ctx.font = 'bold 20px "Courier New", monospace'
    ctx.fillText('BHIMTAL CAMPUS • HIGH-ALTITUDE SPIDER-TECH HEADQUARTERS', canvas.width / 2, 155)

    ctx.fillStyle = '#9CA3AF'
    ctx.font = 'bold 15px "Inter", sans-serif'
    ctx.fillText('DEPARTMENT OF COMPUTER SCIENCE & ENGINEERING • SPIDEY MULTIVERSE NETWORK', canvas.width / 2, 185)

    // Cyber Red Divider
    const gradLine = ctx.createLinearGradient(300, 205, canvas.width - 300, 205)
    gradLine.addColorStop(0, 'rgba(226, 27, 36, 0)')
    gradLine.addColorStop(0.5, '#E21B24')
    gradLine.addColorStop(1, 'rgba(226, 27, 36, 0)')
    ctx.strokeStyle = gradLine
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(300, 205)
    ctx.lineTo(canvas.width - 300, 205)
    ctx.stroke()

    // Spider-Man Badge Tagline
    ctx.fillStyle = '#F59E0B'
    ctx.font = 'bold 18px "Courier New", monospace'
    ctx.fillText('🕷️ SPIDER-VERSE OFFICIAL CITATION 🕷️', canvas.width / 2, 255)

    ctx.fillStyle = '#9CA3AF'
    ctx.font = 'italic 20px "Times New Roman", serif'
    ctx.fillText('This citation of honor is officially bestowed upon', canvas.width / 2, 290)

    // Recipient Name
    ctx.fillStyle = '#FFFFFF'
    ctx.font = '900 62px "Cinzel", "Arial Black", serif'
    ctx.fillText(name || 'Web Warrior', canvas.width / 2, 375)

    // Underline
    ctx.fillStyle = '#E21B24'
    ctx.fillRect(canvas.width / 2 - 250, 395, 500, 4)

    // Degree & Roll
    ctx.fillStyle = '#E2E8F0'
    ctx.font = '22px "Inter", sans-serif'
    ctx.fillText(`of ${degree}, Roll No: ${roll}`, canvas.width / 2, 450)

    // Achievement text
    let achievement = 'for outstanding participation and web-slinging algorithmic excellence in'
    if (type === 'excellence') {
      achievement = `for conquering ${rank} and demonstrating elite engineering mastery in`
    } else if (type === 'merit') {
      achievement = 'for architectural brilliance, speed, and supreme innovation in'
    }
    ctx.fillStyle = '#38BDF8'
    ctx.font = 'bold 22px "Inter", sans-serif'
    ctx.fillText(achievement, canvas.width / 2, 490)

    // Event Title
    ctx.fillStyle = '#E21B24'
    ctx.font = '900 36px "Cinzel", "Arial Black", sans-serif'
    ctx.fillText('GRAPHITE 2026: THE ULTIMATE SPIDER-MAN HACKATHON 🕸️⚡', canvas.width / 2, 550)

    ctx.fillStyle = '#94A3B8'
    ctx.font = '16px "Inter", sans-serif'
    ctx.fillText('Organized at Graphic Era Hill University, Bhimtal Campus • Concluded on October 27, 2026', canvas.width / 2, 590)

    // Verification ID
    ctx.fillStyle = '#F59E0B'
    ctx.font = 'bold 15px "Courier New", monospace'
    ctx.fillText(`OFFICIAL VERIFICATION CODE: ${code}`, canvas.width / 2, 630)

    // Footer Signatures
    const footY = 920

    // Campus Director
    ctx.fillStyle = '#FFFFFF'
    ctx.font = 'bold italic 26px "Times New Roman", serif'
    ctx.fillText('Dr. M.C. Lohani', 320, footY)
    ctx.beginPath()
    ctx.moveTo(180, footY + 12)
    ctx.lineTo(460, footY + 12)
    ctx.strokeStyle = '#475569'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.fillStyle = '#E2E8F0'
    ctx.font = 'bold 15px "Inter", sans-serif'
    ctx.fillText('CAMPUS DIRECTOR', 320, footY + 36)
    ctx.fillStyle = '#94A3B8'
    ctx.font = '13px "Inter", sans-serif'
    ctx.fillText('GEHU Bhimtal Campus', 320, footY + 56)

    // Center: Spider Hologram Seal
    ctx.beginPath()
    ctx.arc(canvas.width / 2, footY + 10, 65, 0, Math.PI * 2)
    ctx.fillStyle = '#7F1D1D'
    ctx.fill()
    ctx.lineWidth = 4
    ctx.strokeStyle = '#F59E0B'
    ctx.stroke()

    ctx.fillStyle = '#F59E0B'
    ctx.font = 'bold 12px "Courier New", monospace'
    ctx.fillText('SPIDER-TECH', canvas.width / 2, footY - 8)
    ctx.font = '28px "Inter", sans-serif'
    ctx.fillText('🕷️', canvas.width / 2, footY + 20)
    ctx.font = 'bold 10px "Courier New", monospace'
    ctx.fillText('VERIFIED 2026', canvas.width / 2, footY + 42)

    // Dean Student Welfare
    ctx.fillStyle = '#FFFFFF'
    ctx.font = 'bold italic 26px "Times New Roman", serif'
    ctx.fillText('Dr. D.S. Rawat', canvas.width - 320, footY)
    ctx.beginPath()
    ctx.moveTo(canvas.width - 460, footY + 12)
    ctx.lineTo(canvas.width - 180, footY + 12)
    ctx.strokeStyle = '#475569'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.fillStyle = '#E2E8F0'
    ctx.font = 'bold 15px "Inter", sans-serif'
    ctx.fillText('DEAN STUDENT WELFARE', canvas.width - 320, footY + 36)
    ctx.fillStyle = '#94A3B8'
    ctx.font = '13px "Inter", sans-serif'
    ctx.fillText('Convener, Graphite 2026', canvas.width - 320, footY + 56)

    // Download PNG
    const dataUrl = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = `SpiderMan_Certificate_${name.replace(/\s+/g, '_')}_Graphite2026.png`
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
    <div className="min-h-screen bg-[#070913] text-gray-100 font-sans pb-16 print:bg-black print:p-0">
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        
        {/* Verification Banner */}
        <div className="mb-6 bg-gradient-to-r from-red-950/80 via-[#0E1528] to-red-950/80 border border-red-500/50 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xl print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-red-500/20 border border-red-500/60 flex items-center justify-center text-2xl shrink-0 shadow-[0_0_15px_rgba(226,27,36,0.5)]">
              🕷️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-extrabold text-sm tracking-wide">
                  SPIDER-MAN THEMED OFFICIAL CERTIFICATE
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 text-[10px] font-mono font-bold">
                  SEALED & AUTHENTIC ✓
                </span>
              </div>
              <p className="text-[11px] font-mono text-cyan-400">
                Graphic Era Hill University, Bhimtal Campus • Code: <strong className="text-white">{code}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs flex items-center gap-1.5 transition shadow-[0_0_15px_rgba(226,27,36,0.4)] cursor-pointer active:scale-95"
            >
              <span>📥</span>
              <span>Download PNG</span>
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

        {/* ── SPIDER-MAN THEMED DIGITAL CERTIFICATE CONTAINER ── */}
        <div
          id="official-certificate-container"
          className="w-full aspect-[1.414/1] bg-gradient-to-br from-[#0B0F1E] via-[#070912] to-[#04050A] text-white p-6 sm:p-12 rounded-3xl shadow-[0_0_90px_rgba(226,27,36,0.45)] relative border-[10px] sm:border-[14px] border-[#E21B24] flex flex-col justify-between overflow-hidden select-none print:shadow-none print:border-[10px] print:rounded-none"
        >
          {/* Neon Cyber-Cyan Inner Double Border */}
          <div className="absolute inset-3 sm:inset-5 border-2 border-[#00F0FF]/60 rounded-2xl pointer-events-none shadow-[0_0_15px_rgba(0,240,255,0.2)]" />
          <div className="absolute inset-4 sm:inset-6 border border-[#F59E0B]/30 rounded-xl pointer-events-none" />

          {/* Spider-Web Corner Decals */}
          <div className="absolute top-0 left-0 w-36 h-36 pointer-events-none opacity-40">
            <svg viewBox="0 0 100 100" width="100%" height="100%">
              <path d="M0,0 L100,0 M0,0 L0,100 M0,0 L80,80 M0,0 L40,90 M0,0 L90,40" stroke="#E21B24" strokeWidth="1" fill="none" />
              <circle cx="0" cy="0" r="30" stroke="#00F0FF" strokeWidth="0.8" fill="none" />
              <circle cx="0" cy="0" r="60" stroke="#E21B24" strokeWidth="0.8" fill="none" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-36 h-36 pointer-events-none opacity-40 rotate-90">
            <svg viewBox="0 0 100 100" width="100%" height="100%">
              <path d="M0,0 L100,0 M0,0 L0,100 M0,0 L80,80" stroke="#E21B24" strokeWidth="1" fill="none" />
              <circle cx="0" cy="0" r="40" stroke="#00F0FF" strokeWidth="0.8" fill="none" />
            </svg>
          </div>

          {/* Giant Central Spider Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.055]">
            <img src="/logo.png?v=2" alt="Spider Watermark" className="w-[450px] h-[450px] object-contain" />
          </div>

          {/* Header */}
          <div className="text-center relative z-10 space-y-1">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
              <img src="/logo.png?v=2" alt="GEHU Logo" className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-[0_0_15px_rgba(226,27,36,0.8)]" />
              <div>
                <h1 className="text-lg sm:text-3xl font-serif font-black tracking-widest text-white uppercase drop-shadow">
                  GRAPHIC ERA HILL UNIVERSITY
                </h1>
                <p className="text-[10px] sm:text-sm font-mono font-bold text-[#00F0FF] tracking-widest uppercase">
                  BHIMTAL CAMPUS • SPIDER-TECH HEADQUARTERS
                </p>
              </div>
            </div>
            <p className="text-[9px] sm:text-xs font-sans text-gray-400 tracking-wider uppercase font-semibold">
              Department of Computer Science & Engineering • SPIDEY Multiverse Innovation Grid
            </p>
          </div>

          {/* Banner */}
          <div className="text-center relative z-10 my-2">
            <span className="text-xs sm:text-sm font-mono font-bold text-[#F59E0B] tracking-widest uppercase block mb-1">
              🕷️ {certTitle} 🕷️
            </span>
            <span className="text-[11px] sm:text-xs font-serif italic text-gray-400 block mb-1">
              This citation of honor is officially bestowed upon
            </span>
            <h2 className="text-2xl sm:text-5xl font-serif font-black text-white tracking-wide border-b-2 border-[#E21B24] pb-2 px-8 inline-block drop-shadow-[0_0_20px_rgba(226,27,36,0.7)]">
              {name}
            </h2>
          </div>

          {/* Body Citation */}
          <div className="text-center relative z-10 max-w-2xl mx-auto px-2 space-y-2 text-xs sm:text-base text-gray-200 leading-relaxed font-sans">
            <p>
              of <strong className="text-white">{degree}</strong>, Roll Number{' '}
              <span className="font-mono font-bold text-[#00F0FF]">{roll}</span>, for{' '}
              {type === 'excellence' ? (
                <>
                  conquering <strong className="text-[#F59E0B]">{rank}</strong> and demonstrating supreme technical brilliance in
                </>
              ) : type === 'merit' ? (
                <>
                  exemplary algorithmic mastery and architectural innovation in
                </>
              ) : (
                <>
                  outstanding participation and web-slinging engineering dedication in
                </>
              )}
            </p>
            <p className="font-extrabold text-[#E21B24] text-sm sm:text-2xl tracking-wide drop-shadow-[0_0_12px_rgba(226,27,36,0.8)]">
              &quot;Graphite 2026: The Ultimate Spider-Man Themed Hackathon 🕸️⚡&quot;
            </p>
            <p className="text-[11px] sm:text-xs text-gray-400 italic font-serif">
              Organized at Graphic Era Hill University, Bhimtal Campus • Concluded on October 27, 2026.
            </p>
          </div>

          {/* Signatures & Seal Footer */}
          <div className="relative z-10 pt-4 flex items-end justify-between border-t border-gray-800 px-2 sm:px-8">
            
            {/* Signature 1 */}
            <div className="text-center">
              <div className="font-serif italic text-base sm:text-xl text-white font-bold">
                Dr. M.C. Lohani
              </div>
              <div className="w-28 sm:w-36 border-t border-gray-700 mt-1 pt-1">
                <p className="text-[10px] sm:text-xs font-sans font-bold text-gray-300 uppercase">Campus Director</p>
                <p className="text-[9px] sm:text-[10px] font-sans text-gray-500">GEHU Bhimtal</p>
              </div>
            </div>

            {/* Official Hologram Stamp */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#F59E0B] bg-gradient-to-tr from-[#7F1D1D] to-[#1E1B4B] flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.5)] p-1 text-center">
                <div className="w-full h-full rounded-full border border-dashed border-[#E21B24] flex flex-col items-center justify-center">
                  <span className="text-[8px] sm:text-[9px] font-mono text-[#00F0FF] font-bold">SPIDER</span>
                  <span className="text-[14px] sm:text-lg">🕷️</span>
                  <span className="text-[7px] sm:text-[8px] font-mono text-[#F59E0B] font-bold">VERIFIED</span>
                </div>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-cyan-400 mt-1">{code}</span>
            </div>

            {/* Signature 2 */}
            <div className="text-center">
              <div className="font-serif italic text-base sm:text-xl text-white font-bold">
                Dr. D.S. Rawat
              </div>
              <div className="w-28 sm:w-36 border-t border-gray-700 mt-1 pt-1">
                <p className="text-[10px] sm:text-xs font-sans font-bold text-gray-300 uppercase">Dean Student Welfare</p>
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
