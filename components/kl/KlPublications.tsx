import KlReveal from './KlReveal'
import { PAPERS } from './content'

export default function KlPublications() {
  return (
    <section className="kl-section" id="publications" aria-labelledby="kl-pub-title">
      <div className="kl-section-inner">
        <div className="kl-sec-head">
          <div>
            <p className="kl-sec-label">Publications</p>
            <h2 id="kl-pub-title" className="kl-sec-title">
              Flagship scholarly work
            </h2>
          </div>
          <a
            className="kl-sec-link"
            href="https://www.researchgate.net/profile/Kamal-Pandey-21"
            target="_blank"
            rel="noopener noreferrer"
          >
            ResearchGate →
          </a>
        </div>
        <KlReveal>
          <ol className="kl-pub-list">
            {PAPERS.map((p, i) => (
              <li key={p.title}>
                <a href={p.href} target="_blank" rel="noopener noreferrer">
                  <span className="kl-pub-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="kl-pub-meta">
                    {p.venue} · {p.year}
                  </span>
                  <p className="kl-pub-title">{p.title}</p>
                </a>
              </li>
            ))}
          </ol>
        </KlReveal>
      </div>
    </section>
  )
}
