import { PROJECTS } from './content'

export default function ApProjects() {
  return (
    <section className="ap-section ap-section--paper" id="projects" aria-labelledby="ap-projects-heading">
      <div className="ap-section-inner">
        <h2 id="ap-projects-heading" className="ap-h2 ap-h2--page">
          Projects
        </h2>
        <hr className="ap-rule ap-rule--section" />
        <p className="ap-sub">
          Selected directions that connect scholarship to systems — verifiable agents, synthetic reasoning, platforms,
          and community programs.
        </p>
        <ul className="ap-project-list">
          {PROJECTS.map((p) => (
            <li key={p.title}>
              <a
                href={p.href}
                className="ap-project-row"
                {...('external' in p && p.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="ap-project-tag">{p.tag}</span>
                <span className="ap-project-body">
                  <span className="ap-project-title">{p.title}</span>
                  <span className="ap-project-desc">{p.desc}</span>
                </span>
                <span className="ap-project-arrow" aria-hidden>
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
