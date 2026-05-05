import { EXPERIENCE } from './content'

export default function ApExperience() {
  return (
    <section className="ap-section ap-section--paper" id="experience" aria-labelledby="ap-exp-heading">
      <div className="ap-section-inner">
        <h2 id="ap-exp-heading" className="ap-h2 ap-h2--page">
          Professional experience
        </h2>
        <hr className="ap-rule ap-rule--section" />
        <p className="ap-sub">
          Condensed from LinkedIn (17+ years). Full narrative, metrics, and recommendations live on{' '}
          <a href="https://www.linkedin.com/in/kamalkpandey" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          .
        </p>
        <ol className="ap-timeline">
          {EXPERIENCE.map((x) => (
            <li key={`${x.org}-${x.window}`} className="ap-timeline-item">
              <div className="ap-timeline-meta">
                <span className="ap-timeline-window">{x.window}</span>
                <span className="ap-timeline-place">{x.place}</span>
              </div>
              <div className="ap-timeline-body">
                <h3>{x.role}</h3>
                <p className="ap-timeline-org">{x.org}</p>
                <ul>
                  {x.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
