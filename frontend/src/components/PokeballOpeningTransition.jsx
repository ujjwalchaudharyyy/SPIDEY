import React, { useState, useEffect } from 'react'

const POKEMON_ROSTER = [
  {
    name: 'Pikachu',
    type: 'Electric Type',
    color: '#FACC15',
    glow: 'rgba(250, 204, 21, 0.7)',
    img: '/assets/events/pikachu.png',
    cry: 'Pika-Pikachu! ⚡',
  },
  {
    name: 'Charizard',
    type: 'Fire Type',
    color: '#F97316',
    glow: 'rgba(249, 115, 22, 0.7)',
    img: '/assets/events/charizard.png',
    cry: 'Roaaarr! 🔥',
  },
  {
    name: 'Gengar',
    type: 'Ghost Type',
    color: '#A855F7',
    glow: 'rgba(168, 85, 247, 0.7)',
    img: '/assets/events/gengar.png',
    cry: 'Gen-Gengar! 👻',
  },
  {
    name: 'Lucario',
    type: 'Fighting Type',
    color: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.7)',
    img: '/assets/events/lucario.png',
    cry: 'Aura Sphere! 🥋',
  },
  {
    name: 'Eevee',
    type: 'Evolution Type',
    color: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.7)',
    img: '/assets/events/eevee.png',
    cry: 'Eev-Eevee! ✨',
  }
]

export default function PokeballOpeningTransition({ onComplete, onClose }) {
  // Clean 3-Second Fully Automated Flow:
  // 0.0s – 1.0s: Clean Pokéball appears & shakes
  // 1.0s – 1.4s: Pokéball opens & flashes
  // 1.4s – 3.0s: Random Pokémon appears
  // At 3.0s: Automatically opens 4K Gallery (no clicking needed)
  const [stage, setStage] = useState('wobble')
  const [wobbleCount, setWobbleCount] = useState(0)
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    // Select random pokemon
    const randomMon = POKEMON_ROSTER[Math.floor(Math.random() * POKEMON_ROSTER.length)]
    setSelectedPokemon(randomMon)

    // 1. Wobble interval (0 to 1000ms)
    const wobbleTimer = setInterval(() => {
      setWobbleCount((c) => c + 1)
    }, 160)

    // 2. Open pokeball at 1000ms
    const openTimeout = setTimeout(() => {
      clearInterval(wobbleTimer)
      setStage('open')
    }, 1000)

    // 3. Reveal Pokemon at 1400ms
    const revealTimeout = setTimeout(() => {
      setStage('reveal')
    }, 1400)

    // 4. Auto-complete to gallery at exactly 3000ms (3.0s total work)
    const autoCompleteTimeout = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => {
      clearInterval(wobbleTimer)
      clearTimeout(openTimeout)
      clearTimeout(revealTimeout)
      clearTimeout(autoCompleteTimeout)
    }
  }, [onComplete])

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 overflow-hidden select-none cursor-pointer"
      onClick={onComplete}
      title="Click anytime to jump to gallery"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/60 to-black pointer-events-none" />

      {/* Top indicator & skip cross */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-50 pointer-events-none">
        <span className="px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/60 text-[11px] font-mono text-yellow-300 font-bold tracking-wider">
          ⚡ POKÉMON HACKATHON ARENA
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onClose()
          }}
          className="w-10 h-10 rounded-full bg-black/80 hover:bg-red-950 border border-red-500/50 text-gray-400 hover:text-white flex items-center justify-center text-sm pointer-events-auto cursor-pointer transition-all active:scale-95 shadow-spider-glow"
          title="Close"
        >
          ✕
        </button>
      </div>

      {/* ── STAGE 1 & 2: SIMPLE CLEAN POKÉBALL (0s – 1.4s) ── */}
      {(stage === 'wobble' || stage === 'open') && (
        <div className="relative flex flex-col items-center justify-center animate-fade-in">
          {/* Subtle Ambient Glow */}
          <div className="absolute w-64 h-64 rounded-full bg-red-600/20 blur-3xl pointer-events-none animate-pulse" />

          {/* Simple Clean Pokeball */}
          <div
            className={`relative w-44 h-44 sm:w-48 sm:h-48 transition-transform duration-150 ${
              stage === 'wobble'
                ? wobbleCount % 2 === 0
                  ? '-rotate-12 translate-x-1.5'
                  : 'rotate-12 -translate-x-1.5'
                : 'scale-110'
            }`}
          >
            {/* Top Shell (Red) */}
            <div
              className={`absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-red-500 to-red-600 rounded-t-full border-4 border-black transition-transform duration-300 origin-bottom shadow-lg ${
                stage === 'open' ? '-translate-y-10 -rotate-12' : ''
              }`}
            >
              <div className="absolute top-2 left-6 w-10 h-4 bg-white/40 rounded-full rotate-[-25deg]" />
            </div>

            {/* Bottom Shell (White) */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-200 to-white rounded-b-full border-4 border-black transition-transform duration-300 origin-top shadow-lg ${
                stage === 'open' ? 'translate-y-10 rotate-12' : ''
              }`}
            />

            {/* Middle Dividing Line */}
            <div className="absolute top-1/2 left-0 right-0 h-3.5 bg-black -translate-y-1/2 z-10" />

            {/* Center Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border-4 border-black z-20 flex items-center justify-center shadow">
              <div
                className={`w-6 h-6 rounded-full border-2 border-black transition-all ${
                  stage === 'open'
                    ? 'bg-yellow-400 scale-125 shadow-[0_0_20px_#facc15]'
                    : 'bg-red-500 animate-ping'
                }`}
              />
            </div>

            {/* Energy Flash on Open */}
            {stage === 'open' && (
              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <div className="w-4 h-4 rounded-full bg-white animate-ping scale-[15] opacity-90 shadow-[0_0_80px_#ffffff]" />
              </div>
            )}
          </div>

          <div className="mt-8 text-center space-y-1">
            <p className="text-xs font-mono text-yellow-400 font-bold uppercase tracking-widest">
              {stage === 'wobble' ? '⚡ OPENING POKÉBALL...' : '💥 POKÉMON APPEARING!'}
            </p>
          </div>
        </div>
      )}

      {/* ── STAGE 3: POKÉMON REVEAL (1.4s – 3.0s) ── */}
      {stage === 'reveal' && selectedPokemon && (
        <div className="relative flex flex-col items-center justify-center max-w-md w-full text-center space-y-4 animate-scale-up">
          {/* Glowing Aura Behind Pokémon */}
          <div
            className="absolute -inset-8 rounded-full blur-3xl opacity-60 pointer-events-none"
            style={{ backgroundColor: selectedPokemon.glow }}
          />

          {/* Pokémon Character */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
            <img
              src={selectedPokemon.img}
              alt={selectedPokemon.name}
              className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.7)]"
            />
            <span
              className="absolute -bottom-2 px-3 py-1 rounded-full text-xs font-chakra italic font-bold text-black border-2 border-black shadow"
              style={{ backgroundColor: selectedPokemon.color }}
            >
              {selectedPokemon.type}
            </span>
          </div>

          {/* Pokémon Name & Cry */}
          <div className="space-y-1 z-10">
            <span className="text-[11px] font-mono text-yellow-300 font-bold uppercase tracking-wider block">
              ⚡ WILD {selectedPokemon.name.toUpperCase()} APPEARED!
            </span>
            <h2 className="spider-heading text-3xl sm:text-4xl text-white tracking-wider">
              {selectedPokemon.name}
            </h2>
            <div className="inline-block px-3.5 py-1 rounded-xl bg-black/70 border border-white/20 text-xs font-mono text-white italic">
              "{selectedPokemon.cry}"
            </div>
          </div>

          {/* 3-Second Automatic Progress Bar */}
          <div className="w-56 h-1.5 bg-gray-800 rounded-full overflow-hidden border border-yellow-400/40 z-10 mt-2">
            <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 animate-[progress_1.6s_linear_forwards]" />
          </div>
          <p className="text-[11px] font-mono text-gray-400">
            Entering 4K Memories Gallery... (tap anywhere to skip)
          </p>
        </div>
      )}
    </div>
  )
}
