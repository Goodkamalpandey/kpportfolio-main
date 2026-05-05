import KlReveal from './KlReveal'
import { JOURNAL } from './content'

export default function KlJournal() {
  return (
    <section className="kl-section kl-section--paper" id="journal" aria-labelledby="kl-journal-title">
      <div className="kl-section-inner">
        <div className="kl-sec-head">
          <div>
            <p className="kl-sec-label">Journal</p>
            <h2 id="kl-journal-title" className="kl-sec-title">
              Notes from the practice
            </h2>
          </div>
          <a
            className="kl-sec-link"
            href="https://www.linkedin.com/in/kamalkpandey"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn →
          </a>
        </div>
        <KlReveal>
          <div className="kl-rows">
            {JOURNAL.map((j) => (
              <a
                key={j.title}
                href={j.href}
                className="kl-row"
                {...('external' in j && j.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="kl-row-date">{j.date}</span>
                <span className="kl-row-tag">{j.tag}</span>
                <p className="kl-row-title">{j.title}</p>
              </a>
            ))}
          </div>
        </KlReveal>
      </div>
    </section>
  )
}
