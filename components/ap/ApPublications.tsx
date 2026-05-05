import { PAPERS } from './content'

export default function ApPublications() {
  const n = PAPERS.length
  return (
    <section className="ap-section" id="publications" aria-labelledby="ap-pub-heading">
      <div className="ap-section-inner">
        <h2 id="ap-pub-heading" className="ap-h2 ap-h2--page">
          Publications
        </h2>
        <hr className="ap-rule ap-rule--section" />
        <p className="ap-sub">
          <strong>{n} indexed works</strong> surfaced here from your{' '}
          <a href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            Google Scholar
          </a>{' '}
          profile (including venue variants and conference papers). For citation metrics and sorting, use Scholar
          directly.
        </p>
        <ul className="ap-pubs ap-pubs-grid">
          {PAPERS.map((p) => (
            <li key={`${p.title}-${p.year}`}>
              <a href={p.href} target="_blank" rel="noopener noreferrer">
                <div className="ap-pub-meta">
                  {p.venue} · {p.year}
                </div>
                <p className="ap-pub-title">{p.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
