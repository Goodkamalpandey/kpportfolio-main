import { SPOTLIGHT_PAPERS } from './content'

export default function DmPublications() {
  return (
    <section className="dm-section" id="publications" aria-labelledby="dm-pub-title">
      <div className="dm-section-inner">
        <div className="dm-section-head">
          <div>
            <p className="dm-section-label">Publications</p>
            <h2 id="dm-pub-title" className="dm-section-title">
              Selected peer-reviewed work
            </h2>
          </div>
          <a
            className="dm-section-link"
            href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar →
          </a>
        </div>
        <div className="dm-pub-grid">
          {SPOTLIGHT_PAPERS.map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="dm-pub-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="dm-pub-meta">
                {p.venue} · {p.year}
              </div>
              <h3 className="dm-pub-title">{p.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
