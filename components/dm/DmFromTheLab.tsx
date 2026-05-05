import { LAB_STORIES } from './content'

export default function DmFromTheLab() {
  return (
    <section className="dm-section" id="lab" aria-labelledby="dm-lab-title">
      <div className="dm-section-inner">
        <div className="dm-section-head">
          <div>
            <p className="dm-section-label">From the lab</p>
            <h2 id="dm-lab-title" className="dm-section-title">
              Uncover how applied AI is transforming mobility and enterprise systems
            </h2>
          </div>
          <a className="dm-section-link" href="#research">
            Research themes →
          </a>
        </div>
        <div className="dm-lab-grid">
          {LAB_STORIES.map((s) => (
            <a
              key={s.title}
              href={s.href}
              className="dm-lab-card"
              {...('external' in s && s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
