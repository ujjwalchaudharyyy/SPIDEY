import React, { useState, useEffect, useRef } from 'react'

export default function EventGalleryModal({ event, onClose }) {
  const rawList = (event.photos && event.photos.length > 0)
    ? event.photos
    : (event.gallery && event.gallery.length > 0)
    ? event.gallery
    : [
        {
          url: event.image_url || '/assets/campuses/dehradun.png',
          title: event.title,
          caption: event.description
        }
      ]

  const initialPhotos = rawList.map((item, idx) => {
    if (typeof item === 'string') {
      return {
        url: item,
        title: `${event.title} - Photo #${idx + 1}`,
        caption: `Captured highlight #${idx + 1} from ${event.title}`
      }
    }
    return item
  })

  const [photos, setPhotos] = useState(initialPhotos)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [uploadNotice, setUploadNotice] = useState('')
  const fileInputRef = useRef(null)

  // Close modal on Escape if lightbox is closed; otherwise close lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) {
          setLightboxIndex(null)
        } else {
          onClose()
        }
      } else if (lightboxIndex !== null) {
        if (e.key === 'ArrowLeft') {
          setLightboxIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1))
        } else if (e.key === 'ArrowRight') {
          setLightboxIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0))
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, photos.length, onClose])

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handlePrev = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0))
  }

  // Handle client-side file upload for immediate interactive preview
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return

    const newPhotoItems = files.map((file, i) => ({
      url: URL.createObjectURL(file),
      title: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ').toUpperCase(),
      caption: `Uploaded image from ${file.name} (${(file.size / 1024).toFixed(1)} KB)`
    }))

    setPhotos((prev) => [...prev, ...newPhotoItems])
    setUploadNotice(`${files.length} photo(s) added to live preview!`)
    setTimeout(() => setUploadNotice(''), 5000)

    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl my-auto bg-[#090D18] border border-amber-500/40 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,215,0,0.2)] flex flex-col max-h-[92vh]"
      >
        {/* ======================================================== */}
        {/* MODAL HEADER                                             */}
        {/* ======================================================== */}
        <div className="p-5 sm:p-6 border-b border-gray-800 bg-gradient-to-r from-[#121B30] via-[#090D18] to-black flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/30 via-red-950 to-black border border-amber-500/60 flex items-center justify-center text-2xl shadow-spider-glow flex-shrink-0">
              ⚡
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-500/50 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                  {event.category || 'Hackathon / Technical Event'}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-500/50">
                  📸 {photos.length} PHOTOS
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/70 text-gray-400 border border-gray-700">
                  CONCLUDED ARCHIVE
                </span>
              </div>
              <h2 className="spider-heading text-xl sm:text-2xl text-white">
                {event.title}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-900/80 hover:bg-red-600 border border-gray-700 hover:border-red-500 text-gray-300 hover:text-white font-mono font-bold flex items-center justify-center transition-all cursor-pointer flex-shrink-0"
            title="Close (Esc)"
          >
            ✕
          </button>
        </div>

        {/* ======================================================== */}
        {/* MODAL SCROLLABLE CONTENT BODY                            */}
        {/* ======================================================== */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6">
          {/* Event Context & Location Bar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0E1526]/90 border border-[#1E293B] shadow-inner space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-sm">📍</span>
                <span className="font-semibold text-white">
                  {event.venue || 'Graphic Era Hill University, Dehradun Campus'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span className="text-red-400">📅</span>
                <span>December 9, 2025</span>
                <span>•</span>
                <span className="text-blue-400">🏛️</span>
                <span>{event.campus || 'GRAPHIC ERA HILL UNIVERSITY DEHRADUN'}</span>
              </div>
            </div>

            <p className="text-sm font-rajdhani text-gray-200 leading-relaxed italic border-l-2 border-amber-500/60 pl-3">
              "{event.description || 'Memories and highlights from Smart India Hackathon (SIH) at Graphic Era Hill University, Dehradun Campus.'}"
            </p>

            {event.organizer_name && (
              <div className="text-[11px] font-mono text-gray-400 flex items-center gap-1.5 pt-1 border-t border-gray-800/80">
                <span className="text-amber-400">👤</span>
                <span>Organized by: <strong className="text-gray-300">{event.organizer_name}</strong></span>
              </div>
            )}

            {/* Winner Ceremony Badge if present */}
            {event.winner_team && (
              <div className="p-3.5 rounded-2xl bg-[#0E1526] border border-yellow-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">🏆</span>
                  <div>
                    <span className="text-[10px] font-mono text-yellow-400 uppercase font-bold block">Winner Ceremony</span>
                    <p className="text-xs sm:text-sm font-rajdhani font-semibold text-white">{event.winner_team}</p>
                  </div>
                </div>
                <div className="text-[11px] font-mono text-yellow-300">
                  Consolation Prize & Trophy
                </div>
              </div>
            )}
          </div>

          {/* Gallery Section Header & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div>
              <h3 className="spider-heading text-lg text-white flex items-center gap-2">
                <span>📸 HACKATHON PHOTO HIGHLIGHTS</span>
                <span className="text-xs font-mono text-amber-400 normal-case">
                  ({photos.length} Real Event Photos)
                </span>
              </h3>
              <p className="text-xs font-rajdhani text-gray-400 mt-0.5">
                Click any photo to view in high-resolution full-screen lightbox.
              </p>
            </div>

            {/* Quick Upload / Add Photos Trigger */}
            <div className="flex items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="sih-gallery-file-input"
              />
              <label
                htmlFor="sih-gallery-file-input"
                className="px-4 py-2 rounded-xl text-xs font-chakra italic font-bold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:border-amber-400 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>➕</span>
                <span>UPLOAD / ADD PHOTOS</span>
              </label>
            </div>
          </div>

          {/* Upload Notification Toast */}
          {uploadNotice && (
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 text-xs font-mono flex items-center justify-between animate-fade-in">
              <span className="flex items-center gap-2">
                <span>✓</span> {uploadNotice}
              </span>
              <span className="text-[10px] text-gray-400">
                To persist permanently, save into <code>/frontend/public/assets/events/sih/</code>
              </span>
            </div>
          )}

          {/* ======================================================== */}
          {/* RESPONSIVE PHOTO GALLERY GRID                            */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {photos.map((photo, index) => (
              <div
                key={index}
                onClick={() => setLightboxIndex(index)}
                className="group relative bg-[#0E1526]/80 hover:bg-[#121B30] border border-[#1E293B] hover:border-amber-400/80 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,215,0,0.25)] flex flex-col cursor-pointer"
              >
                {/* Photo Preview Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <img
                    src={photo.url}
                    alt={photo.title || `Hackathon Photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Photo Index Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/80 border border-white/20 text-gray-200 backdrop-blur-md">
                      #{index + 1}
                    </span>
                  </div>

                  {/* Hover Expand Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <span className="px-3 py-1.5 rounded-full text-xs font-chakra italic font-bold bg-amber-500 text-black shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <span>🔍</span>
                      <span>EXPAND 4K</span>
                    </span>
                  </div>
                </div>

                {/* Caption / Details Footer */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="spider-heading text-sm text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                      {photo.title || `Highlight #${index + 1}`}
                    </h4>
                    {photo.caption && (
                      <p className="text-xs font-rajdhani text-gray-400 mt-1 line-clamp-2 leading-relaxed">
                        {photo.caption}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 mt-2 border-t border-gray-800/60 flex items-center justify-between text-[11px] font-mono text-gray-400">
                    <span className="text-amber-400/80">Click to enlarge</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* MODAL FOOTER BAR                                         */}
        {/* ======================================================== */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0E1526] via-[#090D18] to-black border-t border-gray-800 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
            <span className="text-amber-400">📍</span>
            <span>Graphic Era Hill University, Dehradun Campus • Smart India Hackathon</span>
          </p>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-chakra italic font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
          >
            CLOSE GALLERY ✕
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* FULLSCREEN LIGHTBOX POPUP                                */}
      {/* ======================================================== */}
      {lightboxIndex !== null && photos[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-60 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-6 animate-fade-in"
        >
          {/* Lightbox Top Control Bar */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl mx-auto flex items-center justify-between gap-4 pb-3 border-b border-gray-800"
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">📸</span>
              <div>
                <h3 className="spider-heading text-base sm:text-lg text-white">
                  {photos[lightboxIndex].title || event.title}
                </h3>
                <p className="text-xs font-mono text-amber-400">
                  PHOTO {lightboxIndex + 1} OF {photos.length}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={photos[lightboxIndex].url}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-xl text-xs font-mono bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-700 transition-colors"
                title="Open original image"
              >
                ↗ Full Image
              </a>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-red-950/80 hover:bg-red-600 border border-red-500/50 text-white font-mono font-bold flex items-center justify-center transition-all shadow-spider-glow cursor-pointer"
                title="Close Lightbox (Esc)"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Lightbox Center Image Showcase with Navigation Arrows */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 flex items-center justify-center my-3 overflow-hidden select-none"
          >
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-10 w-12 h-12 rounded-full bg-black/80 hover:bg-amber-500 hover:text-black border border-white/20 text-white flex items-center justify-center text-xl transition-all shadow-xl backdrop-blur-md cursor-pointer"
              title="Previous photo (Left Arrow)"
            >
              ❮
            </button>

            {/* Main High-Res Image Display */}
            <div className="max-w-5xl max-h-[72vh] flex items-center justify-center p-2">
              <img
                src={photos[lightboxIndex].url}
                alt={photos[lightboxIndex].title || 'Hackathon Photo'}
                className="max-h-[68vh] sm:max-h-[72vh] max-w-full object-contain rounded-2xl border border-white/10 shadow-2xl transition-all duration-300"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-10 w-12 h-12 rounded-full bg-black/80 hover:bg-amber-500 hover:text-black border border-white/20 text-white flex items-center justify-center text-xl transition-all shadow-xl backdrop-blur-md cursor-pointer"
              title="Next photo (Right Arrow)"
            >
              ❯
            </button>
          </div>

          {/* Lightbox Bottom Info Bar & Thumbnail Strip */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl mx-auto space-y-3 pt-2 border-t border-gray-800/80"
          >
            {photos[lightboxIndex].caption && (
              <p className="text-center text-xs sm:text-sm font-rajdhani text-gray-300 max-w-2xl mx-auto">
                {photos[lightboxIndex].caption}
              </p>
            )}

            {/* Interactive Thumbnail Strip */}
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-1">
              {photos.map((thumb, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative w-14 h-11 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                    idx === lightboxIndex
                      ? 'border-amber-400 ring-2 ring-amber-400/50 scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={thumb.url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
