import Reveal from './Reveal'

const ITEMS = [
  {
    title: 'AI-2050: Visions of Future',
    body: 'Research monograph exploring the intersection of advanced AI and global sustainability metrics — translating long-horizon technology trajectories into actionable insight for leaders.',
    tag: 'Research · Monograph',
  },
  {
    title: 'SAInexus Innovation',
    body: 'An autonomous intelligence platform for multi-cloud orchestration and secure signal ingestion — the same architectural lineage that underpins enterprise programs for Samsung, Goodyear, and Merck.',
    tag: 'Platform · Founder',
  },
]

export default function BrandInitiatives() {
  return (
    <section id="initiatives">
      <div className="w si">
        <Reveal>
          <p className="s-eye">{`// Key initiatives`}</p>
        </Reveal>
        <Reveal delayClass="d1">
          <h2 className="s-h">
            Programs that
            <br />
            <em>compound impact.</em>
          </h2>
        </Reveal>
        <Reveal delayClass="d2">
          <div className="s-rule" />
        </Reveal>
        <div className="init-grid">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delayClass={i ? 'd2' : 'd1'}>
              <article className="init-card">
                <span className="init-tag">{item.tag}</span>
                <h3 className="init-title">{item.title}</h3>
                <p className="init-body">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
