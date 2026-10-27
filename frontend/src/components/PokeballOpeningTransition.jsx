import React, { useState, useEffect } from 'react'

const POKEMON_ROSTER = [
  {
    name: 'Pikachu',
    type: 'Electric Type',
    color: '#FACC15',
    glow: 'rgba(250, 204, 21, 0.7)',
    bgGradient: 'from-yellow-500/20 via-amber-600/10 to-transparent',
    img: '/assets/events/pikachu.png',
    cry: 'Pika-Pikachu! ⚡',
    title: 'THE ELECTRIC CODING PARTNER'
  },
  {
    name: 'Charizard',
    type: 'Fire / Flying Type',
    color: '#F97316',
    glow: 'rgba(249, 115, 22, 0.7)',
    bgGradient: 'from-orange-500/20 via-red-600/10 to-transparent',
    img: '/assets/events/charizard.png',
    cry: 'Roaaarr! 🔥',
    title: 'THE FLAME OF INNOVATION'
  },
  {
    name: 'Gengar',
    type: 'Ghost / Poison Type',
    color: '#A855F7',
    glow: 'rgba(168, 85, 247, 0.7)',
    bgGradient: 'from-purple-500/20 via-indigo-600/10 to-transparent',
    img: '/assets/events/gengar.png',
    cry: 'Gen-Gengar! 👻',
    title: 'THE SHADOW ALGORITHM MASTER'
  },
  {
    name: 'Lucario',
    type: 'Fighting / Steel Type',
    color: '#06B6D4',
    glow: 'rgba(6, 182, 212, 0.7)',
    bgGradient: 'from-cyan-500/20 via-blue-600/10 to-transparent',
    img: '/assets/events/lucario.png',
    cry: 'Aura Sphere! 🥋',
    title: 'THE AURA CODE DEFENDER'
  },
  {
    name: 'Eevee',
    type: 'Normal / Evolution Type',
    color: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.7)',
    bgGradient: 'from-amber-500/20 via-yellow-600/10 to-transparent',
    img: '/assets/events/eevee.png',
    cry: 'Eev-Eevee! ✨',
    title: 'THE MULTI-STACK ADAPTOR'
  }
]

export default function PokeballOpeningTransition({ onComplete, onClose }) {
  // Stages: 'wobble' (rapid shake 0-500ms) -> 'open' (burst split 500-900ms) -> 'reveal' (random pokemon 900-2000ms) -> auto-open gallery
  const [stage, setStage] = useState('wobble')
  const [wobbleCount, setWobbleCount] = useState(0)
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    // Pick random pokemon
    const randomMon = POKEMON_ROSTER[Math.floor(Math.random() * POKEMON_ROSTER.length)]
    setSelectedPokemon(randomMon)

    // Ultra-Fast 2-Second Lightning Sequence:
    // 0ms - 500ms: Rapid energetic wobble
    const wobbleTimer = setInterval(() => {
      setWobbleCount((c) => c + 1)
    }, 120)

    // At 500ms: Pokéball splits and white energy beam explodes
    const openTimeout = setTimeout(() => {
      clearInterval(wobbleTimer)
      setStage('open')
    }, 500)

    // At 900ms: Pokémon instantly appears with battle glow
    const revealTimeout = setTimeout(() => {
      setStage('reveal')
    }, 900)

    // At 2100ms (Total ~2s): Automatically transitions straight to the 4K memories gallery!
    const autoCompleteTimeout = setTimeout(() => {
      onComplete()
    }, 2100)

    return () => {
      clearInterval(wobbleTimer)
      clearTimeout(openTimeout)
      clearTimeout(revealTimeout)
      clearTimeout(autoCompleteTimeout)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 overflow-hidden select-none">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/60 to-black pointer-events-none" />

      {/* Close cross on top right */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-black/80 hover:bg-red-950 border border-red-500/50 text-gray-400 hover:text-white flex items-center justify-center text-lg cursor-pointer transition-all active:scale-95 shadow-spider-glow"
        title="Skip to Gallery"
      >
        ✕
      </button>

      {/* STAGE 1 & 2: POKÉBALL RAPID WOBBLE & BURST OPEN */}
      {(stage === 'wobble' || stage === 'open') && (
        <div className="relative flex flex-col items-center justify-center">
          {/* Holographic Arena Ring */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-red-500/30 animate-spin-slow pointer-events-none" />
          <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-yellow-400/20 animate-reverse-spin pointer-events-none" />

          {/* Pokeball Graphic */}
          <div
            className={`relative w-44 h-44 sm:w-52 sm:h-52 transition-transform duration-150 ${
              stage === 'wobble'
                ? wobbleCount % 2 === 0
                  ? '-rotate-12 translate-x-1.5 scale-105'
                  : 'rotate-12 -translate-x-1.5 scale-105'
                : 'scale-125'
            }`}
          >
            {/* Top Half (Red) */}
            <div
              className={`absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-red-500 to-red-700 rounded-t-full border-4 border-black transition-transform duration-300 origin-bottom ${
                stage === 'open' ? '-translate-y-12 -rotate-12 opacity-80' : ''
              } shadow-[0_0_35px_rgba(239,68,68,0.7)]`}
            >
              <div className="absolute top-2 left-6 w-12 h-6 bg-white/40 rounded-full rotate-[-25deg] blur-[1px]" />
            </div>

            {/* Bottom Half (White) */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-200 to-white rounded-b-full border-4 border-black transition-transform duration-300 origin-top ${
                stage === 'open' ? 'translate-y-12 rotate-12 opacity-80' : ''
              } shadow-[0_0_35px_rgba(255,255,255,0.5)]`}
            />

            {/* Middle Dividing Black Belt */}
            <div className="absolute top-1/2 left-0 right-0 h-4 bg-black -translate-y-1/2 z-10" />

            {/* Center Opening Button with Light Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full border-4 border-black z-20 flex items-center justify-center shadow-lg">
              <div
                className={`w-7 h-7 rounded-full border-2 border-black transition-all ${
                  stage === 'open'
                    ? 'bg-yellow-300 scale-150 shadow-[0_0_40px_#fde047]'
                    : 'bg-red-500 animate-ping'
                }`}
              />
            </div>

            {/* Energy Beam Burst on Open */}
            {stage === 'open' && (
              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <div className="w-6 h-6 rounded-full bg-white animate-ping scale-[18] opacity-90 shadow-[0_0_100px_#ffffff]" />
              </div>
            )}
          </div>

          <div className="mt-8 text-center space-y-1">
            <p className="text-xs font-mono text-yellow-400 font-bold uppercase tracking-widest animate-pulse">
              {stage === 'wobble' ? '⚡ OPENING POKÉBALL...' : '💥 POKÉMON APPEARING!'}
            </p>
            <p className="text-sm sm:text-base font-chakra italic font-bold text-white">
              WATCH THE CODE HACKATHON
            </p>
          </div>
        </div>
      )}

      {/* STAGE 3: FAST POKÉMON REVEAL (1s flash before auto gallery) */}
      {stage === 'reveal' && selectedPokemon && (
        <div 
          onClick={onComplete}
          className="relative flex flex-col items-center justify-center max-w-lg w-full text-center space-y-4 animate-scale-up cursor-pointer"
        >
          {/* Holographic Glowing Burst Behind Pokémon */}
          <div
            className="absolute -inset-10 rounded-full blur-3xl opacity-70 animate-pulse pointer-events-none"
            style={{ backgroundColor: selectedPokemon.glow }}
          />

          {/* Pokémon Character Graphic */}
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 flex items-center justify-center">
            <img
              src={selectedPokemon.img}
              alt={selectedPokemon.name}
              className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.8)] animate-bounce-gentle"
            />
            <span
              className="absolute -bottom-2 px-3 py-1 rounded-full text-xs font-chakra italic font-bold text-black border-2 border-black shadow-lg"
              style={{ backgroundColor: selectedPokemon.color }}
            >
              {selectedPokemon.type}
            </span>
          </div>

          {/* Pokémon Name & Title */}
          <div className="space-y-1.5 z-10">
            <span className="text-[11px] font-mono text-yellow-300 tracking-widest uppercase block font-bold">
              ⚡ WILD {selectedPokemon.name.toUpperCase()} APPEARED!
            </span>
            <h2 className="spider-heading text-3xl sm:text-4xl text-white tracking-wider">
              {selectedPokemon.name}
            </h2>
            <div className="inline-block px-4 py-1 rounded-xl bg-black/70 border border-white/20 text-xs font-mono text-white italic">
              "{selectedPokemon.cry}"
            </div>
          </div>

          {/* Quick Progress Bar (indicates auto entering gallery) */}
          <div className="w-56 h-1.5 bg-gray-800 rounded-full overflow-hidden border border-yellow-400/40 z-10">
            <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 animate-[progress_1.1s_linear_forwards]" />
          </div>
          <span className="text-[10px] font-mono text-gray-400">Opening 4K Gallery...</span>
        </div>
      )}
    </div>
  )
}
