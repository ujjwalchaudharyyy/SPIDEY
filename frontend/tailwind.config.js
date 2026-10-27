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
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 15px rgba(226,27,36,0.6))', transform: 'scale3d(1, 1, 1)' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 35px rgba(226,27,36,0.95))', transform: 'scale3d(1.02, 1.02, 1)' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0px, 0)' },
          '50%': { transform: 'translate3d(0, -8px, 0)' },
        },
        spiderZip: {
          '0%': { transform: 'scale3d(0.3, 0.3, 1) translate3d(140%, 90%, 0) rotate3d(0, 0, 1, -25deg)', opacity: '0' },
          '35%': { transform: 'scale3d(1.08, 1.08, 1) translate3d(0%, 0%, 0) rotate3d(0, 0, 1, 0deg)', opacity: '1' },
          '70%': { transform: 'scale3d(0.96, 0.96, 1) translate3d(-30%, -20%, 0) rotate3d(0, 0, 1, 8deg)', opacity: '1' },
          '100%': { transform: 'scale3d(0.4, 0.4, 1) translate3d(-140%, -80%, 0) rotate3d(0, 0, 1, 25deg)', opacity: '0' },
        },
        webBlast: {
          '0%': { strokeDashoffset: '2500', opacity: '0' },
          '30%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { strokeDashoffset: '0', opacity: '0' },
        },
        spiderSwing: {
          '0%': { transform: 'scale3d(0.2, 0.2, 1) translate3d(0, -200px, 0) rotate3d(0, 0, 1, -15deg)', opacity: '0' },
          '45%': { transform: 'scale3d(1.15, 1.15, 1) translate3d(0, 0px, 0) rotate3d(0, 0, 1, 5deg)', opacity: '1' },
          '70%': { transform: 'scale3d(1, 1, 1) translate3d(0, 0px, 0) rotate3d(0, 0, 1, 0deg)', opacity: '1' },
          '100%': { transform: 'scale3d(0.8, 0.8, 1) translate3d(0, -100px, 0)', opacity: '0' },
        },
        webShootLeft: {
          '0%': { strokeDasharray: '0 2500', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { strokeDasharray: '2500 0', opacity: '0' },
        },
        webShootRight: {
          '0%': { strokeDasharray: '0 2500', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { strokeDasharray: '2500 0', opacity: '0' },
        },
        webExpand: {
          '0%': { transform: 'scale3d(0.3, 0.3, 1)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale3d(1.25, 1.25, 1)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
