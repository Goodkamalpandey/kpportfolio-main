import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import { PUBLICATIONS_MOVES_FIELD, SITE } from './data'

export default function KpPublications() {
  return (
    <section id="publications" className="scroll-mt-24 bg-white pb-16 pt-10 dark:bg-dark-bg md:pb-20 md:pt-12">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <KpReveal>
          <p className="kp-section-eyebrow inline-flex items-center gap-2 text-kp-emerald dark:text-emerald-400">
            <KpUiIcon name="bookOpen" size={15} className="text-kp-emerald dark:text-emerald-400" />
            Scholarly work
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-kp-ink dark:text-dark-text md:text-5xl">
            Research that moves the field.
          </h2>
          <div className="mt-4 max-w-3xl space-y-2 text-kp-muted dark:text-kp-line">
            <p className="inline-flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm leading-relaxed">
              <KpUiIcon name="bookmark" size={15} className="text-kp-emerald/80 dark:text-emerald-400/80" />
              <a
                href={SITE.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-kp-accent underline-offset-4 hover:underline dark:text-blue-300"
              >
                100+ citations on Google Scholar
                <KpUiIcon name="externalLink" size={14} className="text-kp-accent dark:text-blue-300" />
              </a>
              <span>· 59+ indexed on primary profile · 25+ peer-reviewed publications (2023–2026)</span>
            </p>
            <p className="inline-flex flex-wrap items-center gap-2 text-sm">
              <KpUiIcon name="badgeCheck" size={16} className="text-kp-emerald dark:text-emerald-400" />
              <span className="font-medium text-kp-ink dark:text-dark-text">Verified reviewer:</span>
              <span>100+ peer-reviewed manuscripts reviewed</span>
            </p>
          </div>
        </KpReveal>
        <ul className="mt-8 divide-y divide-kp-line/80 overflow-hidden rounded-2xl border border-kp-line/60 bg-kp-bg/40 shadow-kp-soft dark:divide-white/10 dark:border-white/[0.09] dark:bg-white/[0.04] dark:shadow-none md:mt-10">
          {PUBLICATIONS_MOVES_FIELD.map((p) => (
            <li
              key={p.title}
              className="bg-white/65 px-5 py-9 transition-colors first:rounded-t-2xl last:rounded-b-2xl hover:bg-white/95 dark:bg-transparent dark:hover:bg-white/[0.06] md:px-8"
            >
              <KpReveal>
                <div className="grid gap-6 md:grid-cols-[minmax(0,80px)_1fr_auto] md:items-start">
                  <span className="inline-flex h-9 w-14 shrink-0 items-center justify-center rounded-md bg-emerald-50 font-mono text-xs font-semibold text-kp-emerald dark:bg-emerald-950/40 dark:text-emerald-300">
                    {p.year}
                  </span>
                  <div>
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-lg font-medium text-kp-ink dark:text-dark-text"
                    >
                      <span className="kp-nav-link inline bg-gradient-to-r from-kp-accent to-kp-accent bg-[length:0%_1px] bg-bottom bg-no-repeat transition-all group-hover:bg-[length:100%_1px] dark:from-blue-400 dark:to-blue-400">
                        {p.title}
                      </span>
                    </a>
                    <p className="mt-2 font-mono text-caption2 font-semibold uppercase tracking-[0.12em] text-kp-muted dark:text-kp-line">
                      {p.journal}
                    </p>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-kp-muted dark:text-kp-line">{p.abstract}</p>
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-kp-accent hover:underline dark:text-blue-300"
                  >
                    View paper
                    <KpUiIcon name="externalLink" size={15} className="text-kp-accent dark:text-blue-300" />
                  </a>
                </div>
              </KpReveal>
            </li>
          ))}
        </ul>

        <p className="mt-8 flex flex-wrap justify-center md:mt-10">
          <a
            href={SITE.scholarWorksByPubDate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-kp-line/70 bg-white/80 px-5 py-2.5 text-sm font-semibold text-kp-ink shadow-sm hover:border-kp-accent/40 hover:text-kp-accent dark:border-white/15 dark:bg-white/[0.06] dark:text-dark-text dark:hover:border-blue-400/40 dark:hover:text-blue-300"
          >
            See more on Google Scholar
            <KpUiIcon name="externalLink" size={15} />
          </a>
        </p>

        <p className="mt-10 flex flex-wrap justify-center gap-4 md:mt-12">
          <a
            href={SITE.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-kp-accent hover:underline dark:text-blue-300"
          >
            Google Scholar profile
            <KpUiIcon name="externalLink" size={15} />
          </a>
          <a
            href={SITE.researchgate}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-kp-accent hover:underline dark:text-blue-300"
          >
            ResearchGate
            <KpUiIcon name="externalLink" size={15} />
          </a>
          <a
            href={SITE.authorea}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-kp-accent hover:underline dark:text-blue-300"
          >
            Authorea / ESS
            <KpUiIcon name="externalLink" size={15} />
          </a>
        </p>
      </div>
    </section>
  )
}
