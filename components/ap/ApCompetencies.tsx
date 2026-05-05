import { COMPETENCIES } from './content'

export default function ApCompetencies() {
  return (
    <section className="ap-section" id="competencies" aria-labelledby="ap-comp-heading">
      <div className="ap-section-inner">
        <h2 id="ap-comp-heading" className="ap-h2 ap-h2--page">
          Core competencies
        </h2>
        <hr className="ap-rule ap-rule--section" />
        <p className="ap-sub">
          Themes that appear across architecture practice, research, and delivery — aligned with the public profile on{' '}
          <a href="https://www.drkamalpandey.com/" target="_blank" rel="noopener noreferrer">
            drkamalpandey.com
          </a>
          .
        </p>
        <div className="ap-comp-grid">
          {COMPETENCIES.map((c) => (
            <article key={c.title} className="ap-comp-card">
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
