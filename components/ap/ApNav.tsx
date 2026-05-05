import { NAV } from './content'

export default function ApNav() {
  return (
    <header className="ap-nav">
      <div className="ap-nav-inner">
        <a className="ap-logo" href="#home">
          Dr. Kamal Pandey
        </a>
        <nav className="ap-nav-links" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a
            className="ap-btn"
            href="https://topmate.io/kamalpandey/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Collaborate
          </a>
        </nav>
        <details className="ap-nav-mobile">
          <summary aria-label="Open menu">Menu</summary>
          <div className="ap-nav-panel">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a
              className="ap-btn"
              style={{ marginTop: 8, textAlign: 'center' }}
              href="https://topmate.io/kamalpandey/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Collaborate
            </a>
          </div>
        </details>
      </div>
    </header>
  )
}
