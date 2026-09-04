import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import { BOOKS } from './data'

export default function KpBooks({ embedded = false }: { embedded?: boolean }) {
  return (
    <section
      id="books"
      className={
        embedded
          ? 'mt-20 scroll-mt-24 border-t border-kp-line/70 pt-16 dark:border-white/10 md:mt-24 md:pt-20'
          : 'scroll-mt-24 bg-gradient-to-b from-kp-bg via-kp-bg to-kp-strip/80 pb-10 pt-16 dark:from-[#0B1020] dark:via-[#0a0f18] dark:to-[#060c14] md:pb-12 md:pt-20'
      }
    >
      <div className={embedded ? '' : 'mx-auto max-w-content px-5 md:px-8'}>
        <KpReveal>
          <p className="kp-section-eyebrow inline-flex items-center gap-2 text-kp-emerald dark:text-emerald-400">
            <KpUiIcon name="bookOpen" size={15} className="text-kp-emerald dark:text-emerald-400" />
            Books
          </p>
          <h3 className="mt-4 font-serif text-4xl font-light tracking-tight text-kp-ink dark:text-dark-text md:text-5xl">
            BOOK
          </h3>
          <p className="mt-4 max-w-2xl text-kp-muted dark:text-kp-muted">
            Monograph and field guide — same rigor as the research, written for practitioners and leaders shipping in the
            real world.
          </p>
        </KpReveal>
        <ul className="mt-8 divide-y divide-kp-line/80 overflow-hidden rounded-lg border border-kp-line/70 bg-dark-card/80 shadow-kp-soft dark:divide-white/10 dark:border-white/10 dark:bg-dark-card/[0.04] dark:shadow-none md:mt-10">
          {BOOKS.map((b) => (
            <li key={b.href} className="px-5 py-9 first:rounded-t-2xl last:rounded-b-2xl md:px-8">
              <KpReveal>
                <div className="grid gap-6 md:grid-cols-[minmax(0,140px)_1fr_auto] md:items-start">
                  <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-kp-line bg-dark-card px-3 py-1.5 font-mono text-caption2 font-semibold uppercase tracking-wider text-kp-emerald dark:border-white/15 dark:bg-dark-card/[0.04] dark:text-emerald-300">
                    <KpUiIcon name="bookmark" size={13} className="text-kp-emerald dark:text-emerald-300" />
                    {b.kind}
                  </span>
                  <div>
                    <h4 className="text-lg font-medium text-kp-ink dark:text-dark-text">{b.title}</h4>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-kp-muted dark:text-kp-muted">{b.blurb}</p>
                  </div>
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-kp-accent hover:underline dark:text-kp-accent md:pt-0.5"
                  >
                    Amazon
                    <KpUiIcon name="shoppingBag" size={16} className="text-kp-accent dark:text-kp-accent" />
                  </a>
                </div>
              </KpReveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}