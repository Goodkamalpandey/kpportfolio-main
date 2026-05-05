import { NAV } from './content'

export default function KlNav() {
  return (
    <header className="kl-nav">
      <div className="kl-nav-inner">
        <a href="#page-top" className="kl-mark">
          <span className="kl-mark-badge" aria-hidden />
          <span>Dr. Kamal Pandey</span>
        </a>
        <nav className="kl-nav-desk" aria-label="Primary">
          {NAV.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a
            className="kl-pill"
            href="https://topmate.io/Kamalpandey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start a conversation
          </a>
        </nav>
        <details className="kl-nav-mobile">
          <summary aria-label="Open menu">Menu</summary>
          <div className="kl-nav-panel">
            {NAV.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a
              className="kl-pill"
              style={{ marginTop: 8, textAlign: 'center' }}
              href="https://topmate.io/Kamalpandey"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start a conversation
            </a>
          </div>
        </details>
      </div>
    </header>
  )
}
