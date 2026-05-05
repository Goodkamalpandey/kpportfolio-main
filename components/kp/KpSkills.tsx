import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import { SKILLS_BLOCKS } from './data'

export default function KpSkills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-t border-kp-line/70 bg-gradient-to-b from-kp-strip/70 via-kp-bg to-kp-bg py-16 dark:border-white/10 dark:from-dark-card/35 dark:via-dark-bg dark:to-dark-bg md:py-20"
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

        <div className="mt-10 grid auto-rows-fr gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {SKILLS_BLOCKS.map((block) => (
            <KpReveal key={block.title}>
              <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-kp-line/65 bg-white/95 shadow-kp-soft ring-1 ring-black/[0.03] transition-[border-color,box-shadow,transform] duration-300 ease-out-soft dark:border-white/[0.1] dark:bg-dark-card/90 dark:shadow-none dark:ring-white/[0.04] motion-safe:hover:-translate-y-1 motion-safe:hover:border-kp-accent/20 motion-safe:hover:shadow-kp-elevated dark:motion-safe:hover:border-blue-400/25">
                <div className="flex items-start gap-4 border-b border-kp-line/55 bg-gradient-to-br from-kp-strip/90 to-white/80 px-5 py-4 dark:border-white/[0.06] dark:from-white/[0.05] dark:to-dark-card/80">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-kp-accent/[0.11] text-kp-accent dark:bg-blue-500/20 dark:text-blue-300"
                    aria-hidden
                  >
                    <KpUiIcon name={block.icon} size={22} strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="text-sm font-semibold leading-snug tracking-[-0.02em] text-kp-ink dark:text-dark-text">
                      {block.title}
                    </h3>
                  </div>
                </div>
                <ul className="flex flex-1 flex-col gap-2.5 px-5 py-5 text-footnote leading-relaxed text-kp-muted dark:text-kp-line">
                  {block.lines.map((line) => (
                    <li
                      key={line}
                      className="border-l-2 border-kp-accent/20 pl-3 text-pretty dark:border-blue-400/30"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </article>
            </KpReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
