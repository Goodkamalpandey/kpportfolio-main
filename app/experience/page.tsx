import Link from 'next/link'
import KpUiIcon from '@/components/kp/KpUiIcon'
import { CAREER_ROLES, SITE, createPageMetadata } from '@/components/kp/data'

export const metadata = createPageMetadata(
  '/experience',
  'Experience & Appointments | Dr. Kamal Pandey',
  'Professional appointments and measured outcomes across Rivian, Samsung SDS America, Goodyear, LTI, Singtel Optus, HCL Technologies, and IBM.'
)

export default function ExperiencePage() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-gradient-to-b from-dark-card to-kp-bg pb-24 pt-16 dark:from-dark-bg dark:to-dark-bg md:pb-28 md:pt-20">
      <div className="mx-auto max-w-content px-5 md:px-8">
        <p className="kp-section-eyebrow">Professional profile</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl font-light text-kp-ink dark:text-dark-text md:text-6xl">
          Experience &amp; appointments
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-kp-muted dark:text-kp-muted md:text-lg">
          A structured record of enterprise architecture, Applied AI, business applications, and digital workplace leadership across global organizations.
        </p>

        <nav className="mt-10 flex flex-wrap gap-2 border-b border-kp-line/70 pb-5 dark:border-white/10" aria-label="Experience categories">
          <a href="#appointments" className="rounded-full border border-kp-accent/35 bg-kp-accent/10 px-4 py-2 text-sm font-semibold text-kp-accent">Appointments &amp; outcomes</a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-kp-line/70 px-4 py-2 text-sm font-semibold text-kp-muted transition hover:border-kp-accent/35 hover:text-kp-accent">
            LinkedIn record
            <KpUiIcon name="externalLink" size={14} />
          </a>
        </nav>

        <section id="appointments" className="scroll-mt-24 pt-12">
          <h2 className="font-serif text-3xl font-light text-kp-ink dark:text-dark-text md:text-4xl">Professional appointments</h2>
          <div className="mt-8 space-y-5">
            {CAREER_ROLES.map((appointment) => (
              <article key={`${appointment.org}-${appointment.period}`} className="rounded-lg border border-kp-line/70 bg-dark-card/80 p-6 shadow-kp-soft dark:border-white/10 dark:bg-dark-card md:p-8">
                <div className="grid gap-5 md:grid-cols-[11rem_minmax(0,1fr)]">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-kp-accent">{appointment.period}</p>
                    <p className="mt-2 text-sm text-kp-muted">{appointment.location}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-kp-ink dark:text-dark-text md:text-2xl">{appointment.org}</h3>
                    <ul className="mt-4 space-y-3">
                      {appointment.roles.map((role) => (
                        <li key={`${role.title}-${role.dates}`} className="border-l-2 border-kp-accent/40 pl-4">
                          <p className="font-medium text-kp-ink dark:text-dark-text">{role.title}</p>
                          {role.dates && appointment.roles.some((item) => item.dates !== role.dates) ? (
                            <p className="mt-1 font-mono text-xs text-kp-muted">{role.dates}</p>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                    <details className="group mt-6 border-t border-kp-line/60 pt-5 dark:border-white/10">
                      <summary className="cursor-pointer text-sm font-semibold text-kp-accent marker:text-kp-accent">
                        Measured outcomes ({appointment.bullets.length})
                      </summary>
                      <ul className="mt-4 grid gap-2 pl-5 text-sm leading-relaxed text-kp-muted md:grid-cols-2">
                        {appointment.bullets.map((outcome) => <li key={outcome} className="list-disc pr-4">{outcome}</li>)}
                      </ul>
                    </details>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <p className="mt-12">
          <Link href="/#about" className="text-sm font-semibold text-kp-accent hover:underline">← Back to profile</Link>
        </p>
      </div>
    </main>
  )
}
