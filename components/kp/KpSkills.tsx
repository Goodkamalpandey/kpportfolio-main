import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import { SKILLS_BLOCKS } from './data'

export default function KpSkills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-kp-line/70 bg-kp-bg py-16 dark:border-white/10 dark:bg-dark-bg md:py-20"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <KpReveal>
          <p className="kp-section-eyebrow inline-flex items-center gap-2">
            <KpUiIcon name="layers2" size={15} className="shrink-0 text-kp-accent dark:text-blue-300" />
            Technical footprint
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-tight text-kp-ink dark:text-dark-text md:text-4xl">
            AI, cloud, platforms, and governance
          </h2>
        </KpReveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SKILLS_BLOCKS.map((block) => (
            <KpReveal key={block.title}>
              <div className="h-full rounded-xl border border-kp-line/70 bg-white/90 p-6 dark:border-white/10 dark:bg-dark-card/80">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-kp-accent dark:text-blue-300">
                  {block.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-kp-muted dark:text-kp-line">
                  {block.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </KpReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
