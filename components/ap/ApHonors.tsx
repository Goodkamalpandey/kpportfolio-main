import { HONORS } from './content'

export default function ApHonors() {
  return (
    <section className="ap-section" id="honors" aria-labelledby="ap-honors-heading">
      <div className="ap-section-inner">
        <h2 id="ap-honors-heading" className="ap-h2 ap-h2--page">
          Honors &amp; awards
        </h2>
        <hr className="ap-rule ap-rule--section" />
        <p className="ap-sub">
          Selected recognitions from drkamalpandey.com and LinkedIn; not exhaustive of every team award along the
          journey.
        </p>
        <ul className="ap-honor-list">
          {HONORS.map((h) => (
            <li key={h.title} className="ap-honor-card">
              <p className="ap-honor-year">{h.year}</p>
              <h3>{h.title}</h3>
              <p className="ap-honor-org">{h.org}</p>
              <p className="ap-honor-note">{h.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
