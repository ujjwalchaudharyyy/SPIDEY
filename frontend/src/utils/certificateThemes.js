// Clean, authentic, university-grade certificate themes matching Graphic Era Event Hub & Spider-Man aesthetic
export const CERTIFICATE_THEMES = {
  academic_ivory: {
    id: 'academic_ivory',
    name: 'Academic Ivory',
    badge: 'CLASSIC DIPLOMA',
    subtitle: 'Graphic Era University Maroon & Vintage Gold',
    icon: '🏛️',
    bg: '#FCFBF7',
    textColor: '#1E293B',
    primaryColor: '#7B1113', // Classic University Maroon
    goldColor: '#C5A059',    // Pure Collegiate Gold
    secondaryColor: '#475569',
    subduedColor: '#64748B',
    accentLine: '#C5A059',
    sealBg: '#FAF5EB',
    sealBorder: '#C5A059',
    sealInner: '#7B1113',
    outerBorder: '#7B1113',
    innerBorder: '#C5A059',
    dark: false,
    watermarkClass: 'grayscale opacity-[0.04]'
  },

  spider_crimson: {
    id: 'spider_crimson',
    name: 'Spider Crimson',
    badge: 'BHIMTAL CAMPUS',
    subtitle: 'Bhimtal Campus Spider-Man Crimson & Gold Foil',
    icon: '🕷️',
    bg: '#FFFDF9',
    textColor: '#0F172A',
    primaryColor: '#B80000', // Official Spider-Man Crimson
    goldColor: '#D4AF37',    // Radiant Gold Foil
    secondaryColor: '#334155',
    subduedColor: '#64748B',
    accentLine: '#B80000',
    sealBg: '#FFF7F2',
    sealBorder: '#B80000',
    sealInner: '#D4AF37',
    outerBorder: '#B80000',
    innerBorder: '#D4AF37',
    dark: false,
    watermarkClass: 'sepia-[0.25] opacity-[0.05]'
  },

  midnight_obsidian: {
    id: 'midnight_obsidian',
    name: 'Midnight Obsidian',
    badge: 'DARK HONORS',
    subtitle: 'Obsidian Matte Slate & Polished Gold Foil',
    icon: '🌌',
    bg: '#090D18',
    textColor: '#F8FAFC',
    primaryColor: '#F59E0B', // Rich Polished Gold
    goldColor: '#E21B24',    // Spider Crimson Accent
    secondaryColor: '#94A3B8',
    subduedColor: '#64748B',
    accentLine: '#F59E0B',
    sealBg: '#101626',
    sealBorder: '#F59E0B',
    sealInner: '#E21B24',
    outerBorder: '#E21B24',
    innerBorder: '#F59E0B',
    dark: true,
    watermarkClass: 'invert opacity-[0.06]'
  },

  royal_cobalt: {
    id: 'royal_cobalt',
    name: 'Royal Cobalt',
    badge: 'HALDWANI 2099',
    subtitle: 'Haldwani Campus Sapphire Navy & Platinum Gold',
    icon: '🔷',
    bg: '#F8FAFC',
    textColor: '#0F172A',
    primaryColor: '#0F52BA', // Royal Sapphire Navy
    goldColor: '#C5A059',    // Academic Gold
    secondaryColor: '#334155',
    subduedColor: '#64748B',
    accentLine: '#0F52BA',
    sealBg: '#F0F7FF',
    sealBorder: '#0F52BA',
    sealInner: '#C5A059',
    outerBorder: '#0F52BA',
    innerBorder: '#C5A059',
    dark: false,
    watermarkClass: 'grayscale opacity-[0.04]'
  }
}

export const DEFAULT_THEME_ID = 'academic_ivory'

export function getTheme(themeId) {
  return CERTIFICATE_THEMES[themeId] || CERTIFICATE_THEMES[DEFAULT_THEME_ID]
}
