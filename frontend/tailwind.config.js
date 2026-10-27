/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        chakra: ['"Chakra Petch"', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        spider: {
          red: '#E21B24',
          'red-dark': '#9A031E',
          blue: '#0F52BA',
          'blue-dark': '#071A40',
          dark: '#080A12',
          black: '#030408',
          gold: '#FFD700',
          cyan: '#00F0FF',
        }
      },
      boxShadow: {
        'spider-glow': '0 0 25px rgba(226, 27, 36, 0.45)',
        'spider-glow-blue': '0 0 25px rgba(15, 82, 186, 0.55)',
        'spider-glow-cyan': '0 0 25px rgba(0, 240, 255, 0.5)',
        'spider-glow-gold': '0 0 25px rgba(255, 215, 0, 0.45)',
        'modal-glow': '0 0 45px rgba(226, 27, 36, 0.45)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'float': 'float 4s ease-in-out infinite',
        'spider-swing': 'spiderSwing 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
        'spider-zip': 'spiderZip 0.65s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'web-blast': 'webBlast 0.5s ease-out forwards',
        'web-left': 'webShootLeft 0.5s ease-out forwards',
        'web-right': 'webShootRight 0.5s ease-out forwards',
        'web-expand': 'webExpand 0.7s ease-out forwards',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(226,27,36,0.6))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 30px rgba(226,27,36,0.9))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        spiderZip: {
          '0%': { transform: 'scale(0.4) translate(140%, 90%) rotate(-25deg)', opacity: '0' },
          '35%': { transform: 'scale(1.05) translate(0%, 0%) rotate(0deg)', opacity: '1' },
          '70%': { transform: 'scale(0.95) translate(-30%, -20%) rotate(8deg)', opacity: '1' },
          '100%': { transform: 'scale(0.5) translate(-140%, -80%) rotate(25deg)', opacity: '0' },
        },
        webBlast: {
          '0%': { strokeDashoffset: '800', opacity: '0' },
          '30%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { strokeDashoffset: '0', opacity: '0' },
        },
        spiderSwing: {
          '0%': { transform: 'scale(0.2) translateY(-200px) rotate(-15deg)', opacity: '0' },
          '45%': { transform: 'scale(1.15) translateY(0px) rotate(5deg)', opacity: '1' },
          '70%': { transform: 'scale(1) translateY(0px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'scale(0.8) translateY(-100px)', opacity: '0' },
        },
        webShootLeft: {
          '0%': { strokeDasharray: '0 1000', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { strokeDasharray: '1000 0', opacity: '0' },
        },
        webShootRight: {
          '0%': { strokeDasharray: '0 1000', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { strokeDasharray: '1000 0', opacity: '0' },
        },
        webExpand: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1.2)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
