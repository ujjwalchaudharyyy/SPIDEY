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
  // Stages: 'wobble' (pokeball shakes) -> 'open' (ball splits & white flash) -> 'reveal' (random pokemon emerges)
  const [stage, setStage] = useState('wobble')
  const [wobbleCount, setWobbleCount] = useState(0)
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  useEffect(() => {
    // Pick random pokemon
    const randomMon = POKEMON_ROSTER[Math.floor(Math.random() * POKEMON_ROSTER.length)]
    setSelectedPokemon(randomMon)

    // Sequence:
    // 0s - 1.2s: Pokeball shakes/wobbles with red button flashing
    const wobbleTimer = setInterval(() => {
      setWobbleCount((c) => c + 1)
    }, 350)

    // At 1.2s: Open pokeball & trigger flash beam
    const openTimeout = setTimeout(() => {
      clearInterval(wobbleTimer)
      setStage('open')
    }, 1200)

    // At 1.8s: Pokemon emerges with battle aura & title
    const revealTimeout = setTimeout(() => {
      setStage('reveal')
    }, 1800)

    return () => {
      clearInterval(wobbleTimer)
      clearTimeout(openTimeout)
      clearTimeout(revealTimeout)
    }
  }, [])

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

      {/* STAGE 1 & 2: POKÉBALL WOBBLE & OPEN */}
      {(stage === 'wobble' || stage === 'open') && (
        <div className="relative flex flex-col items-center justify-center">
          {/* Holographic Arena Ring */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-red-500/30 animate-spin-slow pointer-events-none" />
          <div className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-yellow-400/20 animate-reverse-spin pointer-events-none" />

          {/* Pokeball Graphic */}
          <div
            className={`relative w-44 h-44 sm:w-52 sm:h-52 transition-transform duration-300 ${
              stage === 'wobble'
                ? wobbleCount % 2 === 0
                  ? '-rotate-12 translate-x-1'
                  : 'rotate-12 -translate-x-1'
                : 'scale-110'
            }`}
          >
            {/* Top Half (Red) */}
            <div
              className={`absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-red-500 to-red-700 rounded-t-full border-4 border-black transition-transform duration-500 origin-bottom ${
                stage === 'open' ? '-translate-y-8 -rotate-12 opacity-80' : ''
              } shadow-[0_0_35px_rgba(239,68,68,0.6)]`}
            >
              {/* Highlight sheen */}
              <div className="absolute top-2 left-6 w-12 h-6 bg-white/40 rounded-full rotate-[-25deg] blur-[1px]" />
            </div>

            {/* Bottom Half (White) */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-200 to-white rounded-b-full border-4 border-black transition-transform duration-500 origin-top ${
                stage === 'open' ? 'translate-y-8 rotate-12 opacity-80' : ''
              } shadow-[0_0_35px_rgba(255,255,255,0.4)]`}
            />

            {/* Middle Dividing Black Belt */}
            <div className="absolute top-1/2 left-0 right-0 h-4 bg-black -translate-y-1/2 z-10" />

            {/* Center Opening Button with Light Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full border-4 border-black z-20 flex items-center justify-center shadow-lg">
              <div
                className={`w-7 h-7 rounded-full border-2 border-black transition-all ${
                  stage === 'open'
                    ? 'bg-yellow-300 scale-125 shadow-[0_0_30px_#fde047]'
                    : 'bg-red-500 animate-ping'
                }`}
              />
            </div>

            {/* Energy Beam Burst on Open */}
            {stage === 'open' && (
              <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="w-4 h-4 rounded-full bg-white animate-ping scale-[12] opacity-90 shadow-[0_0_80px_#ffffff]" />
              </div>
            )}
          </div>

          <div className="mt-8 text-center space-y-1.5">
            <p className="text-xs font-mono text-yellow-400 font-bold uppercase tracking-widest animate-pulse">
              {stage === 'wobble' ? '⚡ CATCHING POKÉMON DATA...' : '💥 POKÉBALL OPENING!'}
            </p>
            <p className="text-sm sm:text-base font-chakra italic font-bold text-white">
              WATCH THE CODE HACKATHON ARENA
            </p>
          </div>
        </div>
      )}

      {/* STAGE 3: POKÉMON REVEAL SCREEN */}
      {stage === 'reveal' && selectedPokemon && (
        <div className="relative flex flex-col items-center justify-center max-w-lg w-full text-center space-y-6 animate-scale-up">
          {/* Holographic Glowing Burst Behind Pokémon */}
          <div
            className="absolute -inset-10 rounded-full blur-3xl opacity-60 animate-pulse pointer-events-none"
            style={{ backgroundColor: selectedPokemon.glow }}
          />

          {/* Pokémon Character Graphic */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center">
            <img
              src={selectedPokemon.img}
              alt={selectedPokemon.name}
              className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.7)] animate-bounce-gentle"
            />
            <span
              className="absolute -bottom-2 px-3 py-1 rounded-full text-xs font-chakra italic font-bold text-black border-2 border-black shadow-lg"
              style={{ backgroundColor: selectedPokemon.color }}
            >
              {selectedPokemon.type}
            </span>
          </div>

          {/* Pokémon Name & Title */}
          <div className="space-y-2 z-10">
            <span className="text-[11px] font-mono text-yellow-300 tracking-widest uppercase block">
              ⚡ WILD POKÉMON APPEARED!
            </span>
            <h2 className="spider-heading text-3xl sm:text-4xl text-white tracking-wider">
              {selectedPokemon.name}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-gray-300 font-semibold">
              {selectedPokemon.title}
            </p>
            <div className="inline-block px-4 py-1.5 rounded-xl bg-black/60 border border-white/20 text-xs font-mono text-white italic">
              "{selectedPokemon.cry}"
            </div>
          </div>

          {/* Proceed to 4K Gallery Button */}
          <div className="pt-2 z-10 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={onComplete}
              className="btn-spider-pill py-3 px-8 text-xs sm:text-sm shadow-[0_0_30px_rgba(234,179,8,0.5)] active:scale-95"
              style={{
                background: `linear-gradient(135deg, ${selectedPokemon.color} 0%, #000000 100%)`
              }}
            >
              <span>ENTER 4K MEMORIES GALLERY</span>
              <span>➔</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
