import { UPDATES } from './content'

export default function DmUpdates() {
  return (
    <section className="dm-section" id="updates" aria-labelledby="dm-updates-title">
      <div className="dm-section-inner">
        <div className="dm-section-head">
          <div>
            <p className="dm-section-label">Latest</p>
            <h2 id="dm-updates-title" className="dm-section-title">
              News from the lab
            </h2>
          </div>
          <a
            className="dm-section-link"
            href="https://www.linkedin.com/in/kamalkpandey"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow on LinkedIn →
          </a>
        </div>
        <ul className="dm-list">
          {UPDATES.map((u) => (
            <li key={u.title}>
              <a
                href={u.href}
                {...('external' in u && u.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="dm-list-date">{u.date}</span>
                <span className="dm-list-cat">{u.category}</span>
                <span className="dm-list-title">{u.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
