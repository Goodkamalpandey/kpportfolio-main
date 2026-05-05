/** Simple geometric marks — bespoke-feel without third-party icon sets. */

export default function KlIcon({ name }: { name: 'orbit' | 'grid' | 'stack' | 'mark' }) {
  const common = { width: 40, height: 40, viewBox: '0 0 40 40', fill: 'none', 'aria-hidden': true as const }
  switch (name) {
    case 'orbit':
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.25" />
          <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1" opacity="0.35" />
          <circle cx="34" cy="14" r="2" fill="currentColor" />
        </svg>
      )
    case 'grid':
      return (
        <svg {...common}>
          <path d="M8 12h10v10H8zM22 12h10v10H22zM8 26h10v6H8zM22 26h10v6H22z" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      )
    case 'stack':
      return (
        <svg {...common}>
          <path d="M10 14h20v4H10zM10 21h20v4H10zM10 28h14v4H10z" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      )
    case 'mark':
      return (
        <svg {...common}>
          <path d="M12 28L20 10l8 18" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 24h12" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}
