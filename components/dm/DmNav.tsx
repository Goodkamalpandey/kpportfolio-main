import { NAV_LINKS } from './content'

export default function DmNav() {
  return (
    <header className="dm-nav">
      <div className="dm-nav-inner">
        <a className="dm-brand" href="#page-top">
          Dr. Kamal Pandey
        </a>
        <nav className="dm-nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          className="dm-nav-cta"
          href="https://topmate.io/kamalpandey/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Collaborate
        </a>
      </div>
    </header>
  )
}
