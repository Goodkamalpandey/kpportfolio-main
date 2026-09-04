import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import { EXPERTISE_CELLS, SKILLS_BLOCKS } from './data'

/**
 * Capabilities band — outcome-led expertise + technical footprint (formerly separate Skills section).
 */
export default function KpExpertise() {
  return (
    <section
      id="expertise"
      className="scroll-mt-24 bg-kp-navy pb-14 pt-12 text-white md:pb-16 md:pt-14 dark:bg-dark-bg"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <KpReveal>
          <p className="kp-section-eyebrow inline-flex items-center gap-2 text-kp-emerald dark:text-emerald-400">
            <KpUiIcon name="cpu" size={15} className="text-kp-emerald dark:text-emerald-400" />
            Capabilities
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-tight tracking-tight md:text-5xl">
            Engineering, architecture, and transformation leadership
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
            Practical capabilities for taking AI from strategy and architecture through production, governance, and adoption.
          </p>
        </KpReveal>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-10 lg:grid-cols-3">
          {EXPERTISE_CELLS.map((cell) => (
            <KpReveal
              key={cell.n}
              className="rounded-lg border border-white/[0.12] bg-dark-card/[0.045] p-6 shadow-sm transition duration-200 ease-out-soft motion-safe:hover:-translate-y-0.5 hover:border-kp-accent/50 md:p-7"
            >
              <div className="flex items-start gap-3">
                <KpUiIcon name={cell.icon} className="mt-0.5 text-kp-accent dark:text-kp-accent" size={22} />
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-sm text-kp-accent dark:text-kp-accent">{cell.n}</span>
                  <h3 className="mt-2 text-xl font-medium">{cell.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/[0.62]">{cell.body}</p>
                </div>
              </div>
            </KpReveal>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-12 md:mt-16 md:pt-14">
          <KpReveal>
            <p className="kp-section-eyebrow inline-flex items-center gap-2 text-kp-emerald dark:text-emerald-400">
              <KpUiIcon name="layers2" size={15} className="text-kp-emerald dark:text-emerald-400" />
              Technical footprint
            </p>
            <h3 className="mt-3 font-serif text-2xl font-light tracking-tight md:text-3xl">
              AI, cloud, platforms, and governance
            </h3>
          </KpReveal>
          <div className="mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {SKILLS_BLOCKS.map((block) => (
              <KpReveal key={block.title}>
                <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-lg border border-white/[0.12] bg-dark-card/[0.045] transition duration-200 ease-out-soft motion-safe:hover:-translate-y-0.5 hover:border-kp-accent/40">
                  <div className="flex items-start gap-4 border-b border-white/[0.08] px-5 py-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-kp-accent/20 text-kp-accent dark:text-kp-accent"
                      aria-hidden
                    >
                      <KpUiIcon name={block.icon} size={22} strokeWidth={1.6} />
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <h4 className="text-sm font-semibold leading-snug tracking-[-0.02em] text-white">
                        {block.title}
                      </h4>
                    </div>
                  </div>
                  <ul className="flex flex-1 flex-col gap-2.5 px-5 py-5 text-footnote leading-relaxed text-white/60">
                    {block.lines.map((line) => (
                      <li key={line} className="border-l-2 border-kp-accent/35 pl-3 text-pretty">
                        {line}
                      </li>
                    ))}
                  </ul>
                </article>
              </KpReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
