import KlReveal from './KlReveal'
import KlIcon from './KlIcon'
import { EXPERTISE } from './content'

export default function KlExpertise() {
  return (
    <section className="kl-section" id="expertise" aria-labelledby="kl-exp-title">
      <div className="kl-section-inner">
        <div className="kl-sec-head">
          <div>
            <p className="kl-sec-label">Focus</p>
            <h2 id="kl-exp-title" className="kl-sec-title">
              Where clarity meets depth
            </h2>
          </div>
          <a className="kl-sec-link" href="#publications">
            Selected publications →
          </a>
        </div>
        <div className="kl-grid4">
          {EXPERTISE.map((x, i) => (
            <KlReveal key={x.title} delay={i === 1 ? 'd1' : i === 2 ? 'd2' : i === 3 ? 'd3' : undefined}>
              <article className="kl-card">
                <div className="kl-card-icon">
                  <KlIcon name={x.icon} />
                </div>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </article>
            </KlReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
