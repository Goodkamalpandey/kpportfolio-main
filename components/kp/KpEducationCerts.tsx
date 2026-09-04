import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import { CERTIFICATIONS, EDUCATION } from './data'

export default function KpEducationCerts() {
  return (
    <section
      id="education"
      className="scroll-mt-24 border-t border-kp-line/70 bg-dark-card py-16 dark:border-white/10 dark:bg-dark-bg md:py-20"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <KpReveal>
          <p className="kp-section-eyebrow inline-flex items-center gap-2 text-kp-emerald dark:text-emerald-400">
            <KpUiIcon name="graduationCap" size={15} className="text-kp-emerald dark:text-emerald-400" />
            Education &amp; certifications
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light tracking-tight text-kp-ink dark:text-dark-text md:text-4xl">
            Degrees, credentials, and 30+ certifications
          </h2>
        </KpReveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <KpReveal>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-kp-ink dark:text-dark-text">Education</h3>
            <ul className="mt-4 space-y-4">
              {EDUCATION.map((e) => (
                <li key={e.degree} className="rounded-xl border border-kp-line/70 bg-kp-bg/50 p-4 dark:border-white/10 dark:bg-dark-card/[0.04]">
                  <p className="font-medium text-kp-ink dark:text-dark-text">{e.degree}</p>
                  <p className="mt-1 text-sm text-kp-muted dark:text-kp-muted">{e.school}</p>
                  <p className="mt-1 font-mono text-xs text-kp-accent dark:text-kp-accent">
                    {e.years}
                    {'note' in e && e.note ? ` · ${e.note}` : ''}
                  </p>
                </li>
              ))}
            </ul>
          </KpReveal>

          <KpReveal>
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-kp-ink dark:text-dark-text">
              <KpUiIcon name="badgeCheck" size={16} className="shrink-0 text-kp-emerald" />
              Selected certifications
            </h3>
            <p className="mt-2 text-sm text-kp-muted dark:text-kp-muted">{CERTIFICATIONS.note}</p>
            <div className="mt-4 space-y-6 text-sm">
              <div>
                <p className="flex items-center gap-2 font-semibold text-kp-ink dark:text-dark-text">
                  <KpUiIcon name="cpu" size={15} className="shrink-0 text-kp-accent dark:text-kp-accent" />
                  AI &amp; architecture
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-kp-muted dark:text-kp-muted">
                  {CERTIFICATIONS.aiArch.slice(0, 6).map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="flex items-center gap-2 font-semibold text-kp-ink dark:text-dark-text">
                  <KpUiIcon name="clock" size={15} className="shrink-0 text-kp-accent dark:text-kp-accent" />
                  Agile &amp; process
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-kp-muted dark:text-kp-muted">
                  {CERTIFICATIONS.agile.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="flex items-center gap-2 font-semibold text-kp-ink dark:text-dark-text">
                  <KpUiIcon name="cloud" size={15} className="shrink-0 text-kp-accent dark:text-kp-accent" />
                  Microsoft
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-kp-muted dark:text-kp-muted">
                  {CERTIFICATIONS.microsoft.slice(0, 4).map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </KpReveal>
        </div>
      </div>
    </section>
  )
}
