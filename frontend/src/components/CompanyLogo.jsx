export default function CompanyLogo({ name, className = 'w-6 h-6', size = 24 }) {
  const norm = (name || '').toLowerCase()

  // 1. Google (Official 4-color 'G')
  if (norm.includes('google')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <path
          d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
          fill="#4285F4"
        />
        <path
          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.09C3.25 21.3 7.31 24 12 24z"
          fill="#34A853"
        />
        <path
          d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.61H1.28C.46 8.23 0 10.06 0 12s.46 3.77 1.28 5.39l3.99-3.1z"
          fill="#FBBC05"
        />
        <path
          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.28 6.61l3.99 3.1c.95-2.85 3.6-4.96 6.73-4.96z"
          fill="#EA4335"
        />
      </svg>
    )
  }

  // 2. Microsoft (Official 4-color squares)
  if (norm.includes('microsoft')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size}>
        <rect x="1" y="1" width="10.5" height="10.5" fill="#F25022" />
        <rect x="12.5" y="1" width="10.5" height="10.5" fill="#7FBA00" />
        <rect x="1" y="12.5" width="10.5" height="10.5" fill="#00A4EF" />
        <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#FFB900" />
      </svg>
    )
  }

  // 3. Amazon (Official 'a' with smile arrow)
  if (norm.includes('amazon')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <path
          d="M13.84 10.53c0-1.47-1.12-2.18-2.73-2.18-1.57 0-2.87.64-3.52 1.34l.87 1.25c.48-.48 1.41-.95 2.37-.95 1.05 0 1.58.46 1.58 1.28v.48c-3.18.26-4.87 1.34-4.87 3.29 0 1.63 1.14 2.59 2.75 2.59 1.55 0 2.58-.8 3.09-1.74h.08v1.44h1.46V10.53h-1.08zm-1.08 4.22c-.34.9-1.21 1.48-2.13 1.48-.96 0-1.53-.59-1.53-1.46 0-1.12.98-1.79 2.87-1.95v.48c.01.55.27 1.09.79 1.45z"
          fill="#FFFFFF"
        />
        <path
          d="M21.72 19.33c-3.8 2.8-9.04 3.63-14.16 2.38-2.58-.63-4.88-1.85-6.84-3.54-.26-.22-.04-.57.26-.43 3.68 1.74 8.01 2.38 12.35 1.57 3.48-.65 6.72-2.22 9.54-4.32.41-.31.85.34.85.34z"
          fill="#FF9900"
        />
        <path
          d="M22.95 18.06c-.39-.49-2.57-.23-3.85-.08-.39.05-.45-.29-.1-.54 2.27-1.59 4.31-1.07 4.54-.78.23.3-.29 2.36-2.42 4.12-.33.27-.64.12-.5-.24.47-1.22 1.94-2.17 2.33-2.48z"
          fill="#FF9900"
        />
      </svg>
    )
  }

  // 4. Atlassian (Official Dual Blue Sails)
  if (norm.includes('atlassian')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <path
          d="M11.36 12.08c-.28-.46-.78-.74-1.32-.74H4.62c-.75 0-1.26.78-.92 1.45 2.11 4.15 5.56 8.35 8.3 10.77.46.41 1.18.17 1.3-.43 1.12-5.46-.22-9.67-1.94-11.05z"
          fill="#0052CC"
        />
        <path
          d="M12.64 11.92c.28.46.78.74 1.32.74h5.42c.75 0 1.26-.78.92-1.45-2.11-4.15-5.56-8.35-8.3-10.77-.46-.41-1.18-.17-1.3.43-1.12 5.46.22 9.67 1.94 11.05z"
          fill="#2684FF"
        />
      </svg>
    )
  }

  // 5. NVIDIA (Official Green Spiral Eye)
  if (norm.includes('nvidia')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <path
          d="M12.01 4.88c-3.93 0-7.12 3.19-7.12 7.12s3.19 7.12 7.12 7.12c2.51 0 4.72-1.3 5.98-3.26l-2.05-1.19c-.87 1.36-2.34 2.26-4.04 2.26-2.65 0-4.81-2.15-4.81-4.81s2.16-4.81 4.81-4.81c1.55 0 2.92.74 3.8 1.88l2.05-1.19C16.48 6.04 14.39 4.88 12.01 4.88z"
          fill="#76B900"
        />
        <path
          d="M12.01 1.77c-5.65 0-10.23 4.58-10.23 10.23s4.58 10.23 10.23 10.23c4.12 0 7.69-2.45 9.31-5.99l-2.13-1.03c-1.23 2.87-4.08 4.83-7.4 4.83-4.42 0-8.04-3.62-8.04-8.04s3.62-8.04 8.04-8.04c3.16 0 5.89 1.82 7.21 4.49l2.14-1.04C19.46 4.3 16.01 1.77 12.01 1.77z"
          fill="#76B900"
        />
        <circle cx="12.01" cy="12" r="2.4" fill="#76B900" />
      </svg>
    )
  }

  // 6. Adobe (Official Red 'A' Emblem)
  if (norm.includes('adobe')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <rect width="24" height="24" rx="4" fill="#ED2224" />
        <path d="M14.88 4.5h5.12v15h-3.32l-2.45-6.42h-3.9L8.43 19.5H5.1l5.22-15h4.56zm-1.63 5.48L11.7 13.9h3.12l-1.57-3.92z" fill="#FFFFFF" />
      </svg>
    )
  }

  // 7. Goldman Sachs (Official Blue Badge with GS)
  if (norm.includes('goldman')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <rect width="24" height="24" rx="4" fill="#7399C6" />
        <text
          x="12"
          y="15"
          fill="#FFFFFF"
          fontSize="10"
          fontWeight="bold"
          fontFamily="serif"
          textAnchor="middle"
        >
          GS
        </text>
      </svg>
    )
  }

  // 8. Cisco (Official Cyan Bridge Bars)
  if (norm.includes('cisco')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <rect x="2" y="10" width="2" height="7" rx="1" fill="#049FD9" />
        <rect x="6" y="6" width="2" height="11" rx="1" fill="#049FD9" />
        <rect x="11" y="2" width="2" height="15" rx="1" fill="#049FD9" />
        <rect x="16" y="6" width="2" height="11" rx="1" fill="#049FD9" />
        <rect x="20" y="10" width="2" height="7" rx="1" fill="#049FD9" />
        <text x="12" y="22" fill="#049FD9" fontSize="5" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">CISCO</text>
      </svg>
    )
  }

  // 9. Oracle (Official Red Oval)
  if (norm.includes('oracle')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <rect x="2" y="7" width="20" height="10" rx="5" stroke="#F80000" strokeWidth="2.8" />
      </svg>
    )
  }

  // 10. Zomato (Official Crimson Red Emblem with 'zomato')
  if (norm.includes('zomato')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <rect width="24" height="24" rx="5" fill="#E23744" />
        <text
          x="12"
          y="15.5"
          fill="#FFFFFF"
          fontSize="7"
          fontWeight="900"
          fontStyle="italic"
          fontFamily="sans-serif"
          textAnchor="middle"
        >
          zomato
        </text>
      </svg>
    )
  }

  // 11. Salesforce (Official Cyan Cloud)
  if (norm.includes('salesforce')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <path
          d="M9.8 6.2c1.2-1.7 3.3-2.6 5.4-2.2 1.9.4 3.5 1.7 4.2 3.5 1.5.3 2.9 1.4 3.5 2.8.7 1.7.5 3.7-.6 5.1-1 1.2-2.5 1.8-4.1 1.8H5.8c-1.8 0-3.4-.9-4.4-2.4-1-1.5-1.1-3.4-.3-5 .8-1.5 2.3-2.5 4-2.6.4-1.9 1.9-3.5 3.8-4 1.2-.3 2.5-.1 3.5.6.8.6 1.4 1.5 1.6 2.4h-4.2z"
          fill="#00A1E0"
        />
      </svg>
    )
  }

  // 12. Qualcomm (Official Cobalt Blue)
  if (norm.includes('qualcomm')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <rect width="24" height="24" rx="4" fill="#0033A0" />
        <path
          d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6c1.3 0 2.5-.4 3.5-1.1l2 2.1 1.4-1.4-2-2.1c.7-1 1.1-2.2 1.1-3.5 0-3.3-2.7-6-6-6zm0 9.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z"
          fill="#FFFFFF"
        />
      </svg>
    )
  }

  // 13. Uber (Official Black & White Wordmark)
  if (norm.includes('uber')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <rect width="24" height="24" rx="5" fill="#000000" stroke="#333333" strokeWidth="1" />
        <text
          x="12"
          y="15"
          fill="#FFFFFF"
          fontSize="7"
          fontWeight="bold"
          fontFamily="sans-serif"
          textAnchor="middle"
        >
          Uber
        </text>
      </svg>
    )
  }

  // 14. Palo Alto Networks (Official Orange Shield Prism)
  if (norm.includes('palo alto')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <path d="M12 2L4 6v6c0 5.5 3.4 10.7 8 12 4.6-1.3 8-6.5 8-12V6l-8-4z" fill="#FA582D" />
        <path d="M12 5l5 2.5v4.5c0 3.8-2.3 7.4-5 8.5V5z" fill="#FF8359" />
      </svg>
    )
  }

  // 15. Walmart (Official Blue with Yellow Spark)
  if (norm.includes('walmart')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <rect width="24" height="24" rx="4" fill="#0071CE" />
        <g fill="#FFC220">
          <ellipse cx="12" cy="6" rx="1.2" ry="3.2" />
          <ellipse cx="12" cy="18" rx="1.2" ry="3.2" />
          <ellipse cx="6.8" cy="9" rx="1.2" ry="3.2" transform="rotate(-60 6.8 9)" />
          <ellipse cx="17.2" cy="15" rx="1.2" ry="3.2" transform="rotate(-60 17.2 15)" />
          <ellipse cx="6.8" cy="15" rx="1.2" ry="3.2" transform="rotate(60 6.8 15)" />
          <ellipse cx="17.2" cy="9" rx="1.2" ry="3.2" transform="rotate(60 17.2 9)" />
        </g>
      </svg>
    )
  }

  // 16. Morgan Stanley (Official Deep Navy Geometric Triangle)
  if (norm.includes('morgan stanley')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <rect width="24" height="24" rx="4" fill="#002B49" />
        <text
          x="12"
          y="15.5"
          fill="#FFFFFF"
          fontSize="8.5"
          fontWeight="bold"
          fontFamily="serif"
          textAnchor="middle"
        >
          MS
        </text>
      </svg>
    )
  }

  // 17. JPMorgan Chase (Official Octagon / Chase Blue Geometric Monogram)
  if (norm.includes('jpmorgan') || norm.includes('chase')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <rect width="24" height="24" rx="4" fill="#117ACA" />
        <path d="M7 6h10v2.5H7zM7 15.5h10V18H7zM5 8.5h2.5v7H5zM16.5 8.5H19v7h-2.5z" fill="#FFFFFF" />
      </svg>
    )
  }

  // 18. Intuit (Official Blue Wordmark Badge)
  if (norm.includes('intuit')) {
    return (
      <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none">
        <rect width="24" height="24" rx="4" fill="#0077C5" />
        <text
          x="12"
          y="15.5"
          fill="#FFFFFF"
          fontSize="7"
          fontWeight="bold"
          fontFamily="sans-serif"
          textAnchor="middle"
        >
          intuit
        </text>
      </svg>
    )
  }

  // Fallback Enterprise Corporate Building Vector
  return (
    <svg className={className} viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )
}
