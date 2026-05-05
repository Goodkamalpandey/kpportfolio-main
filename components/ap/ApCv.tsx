import { CERTIFICATIONS, EMAIL, LANGUAGES, PAPERS, PORTFOLIO_PDF } from './content'

export default function ApCv() {
  const pubCount = PAPERS.length
  return (
    <section className="ap-section ap-section--paper" id="cv" aria-labelledby="ap-cv-heading">
      <div className="ap-section-inner">
        <h2 id="ap-cv-heading" className="ap-h2 ap-h2--page">
          CV &amp; credentials
        </h2>
        <hr className="ap-rule ap-rule--section" />
        <p className="ap-sub">
          One-page summary for program chairs and partners. Indexed works: <strong>{pubCount}</strong> listed above;
          honors under <a href="#honors">Honors &amp; awards</a>.
        </p>
        <div className="ap-cv-grid">
          <div>
            <h3 className="ap-cv-label">Highlights</h3>
            <ul className="ap-cv-bullets">
              <li>AI150 Global Influencer (2025–26)</li>
              <li>IEEE Senior Member · IET Senior Member</li>
              <li>Doctorate &amp; advanced CS credentials; DBA (Westcliff University)</li>
              <li>{pubCount}+ indexed scholarly &amp; professional articles (see Scholar)</li>
              <li>National Geomatics Award (ISG / ISRO campus, 2022)</li>
              <li>Rivian — solutions architecture for cloud, AI, workplace, RPA</li>
            </ul>
            <h3 className="ap-cv-label ap-cv-label--spaced">Languages</h3>
            <ul className="ap-cv-bullets">
              {LANGUAGES.map((l) => (
                <li key={l.lang}>
                  <strong>{l.lang}</strong> — {l.level}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="ap-cv-label">Profiles &amp; portfolio</h3>
            <ul className="ap-cv-links">
              <li>
                <a href="https://scholar.google.com/citations?user=rA_dpyAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                  Google Scholar
                </a>
              </li>
              <li>
                <a href="https://www.researchgate.net/profile/Kamal-Pandey-21" target="_blank" rel="noopener noreferrer">
                  ResearchGate
                </a>
              </li>
              <li>
                <a href="https://orcid.org/0009-0009-1669-4450" target="_blank" rel="noopener noreferrer">
                  ORCID
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kamalkpandey" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/kamalkpandey" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={PORTFOLIO_PDF} target="_blank" rel="noopener noreferrer">
                  Portfolio (PDF)
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`}>Email</a>
              </li>
            </ul>
            <h3 className="ap-cv-label ap-cv-label--spaced">Certifications</h3>
            <ul className="ap-cv-certs">
              {CERTIFICATIONS.map((c) => (
                <li key={c.name}>
                  {c.name} <span className="ap-cv-cert-meta">— {c.issuer}, {c.year}</span>
                </li>
              ))}
            </ul>
            <p className="ap-cv-note">
              Formal CV packet or biography: <a href="#connect">Contact</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
