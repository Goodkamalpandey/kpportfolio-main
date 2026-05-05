import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import { ABOUT_P1, ABOUT_P2, ABOUT_P3, SITE } from './data'

const TIMELINE_ROWS = [
  { icon: 'briefcase' as const, k: 'Present', line: 'Sr. Software Architect — Applied AI & Solutions Engineering @ Rivian' },
  { icon: 'briefcase' as const, k: '2022–23', line: 'Principal Engineer / Technical Lead @ Rivian' },
  { icon: 'briefcase' as const, k: '2021–22', line: 'Staff Software Engineer — Digital Workplace & Automation @ Rivian' },
  { icon: 'cloud' as const, k: '2020–21', line: 'Cloud Solutions Consulting Architect @ Samsung SDS America' },
  { icon: 'landmark' as const, k: '2015–19', line: 'Sr. Architect — Digital Workplace & M365 @ Goodyear' },
  { icon: 'rocket' as const, k: '2012–15', line: 'Project Lead / Sr. Software Engineer @ LTI (Viacom, Warner Bros, WSP)' },
  { icon: 'cpu' as const, k: '2010–11', line: 'Lead Engineer, ECM @ HCL Technologies' },
  { icon: 'globe2' as const, k: '2011–12', line: 'Consultant @ Singtel Optus (Sydney)' },
  { icon: 'cpu' as const, k: '2008–10', line: 'Senior Software Engineer @ IBM / Shriram Value Services' },
] as const

export default function KpAbout() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-gradient-to-b from-kp-bg via-white/40 to-kp-bg py-16 pb-12 dark:from-dark-bg dark:via-dark-card/25 dark:to-dark-bg md:py-20 md:pb-14"
    >
      <div className="mx-auto grid max-w-content items-start gap-10 px-5 md:grid-cols-12 md:gap-14 md:px-8 lg:gap-16">
        <KpReveal className="md:col-span-5">
          <p className="kp-section-eyebrow">About</p>
          <blockquote className="mt-4 font-serif text-2xl font-normal italic leading-snug text-kp-accent dark:text-blue-300 md:text-[1.85rem] md:leading-snug lg:text-[2rem]">
            The gap between a great AI idea and a system that survives contact with reality — that&apos;s where I work.
          </blockquote>
          <ul className="mt-10 space-y-4 border-l-2 border-kp-accent pl-6 dark:border-blue-400">
            {TIMELINE_ROWS.map((row) => (
              <li key={row.line} className="flex gap-3 text-sm text-kp-ink dark:text-dark-text">
                <KpUiIcon name={row.icon} className="mt-0.5 shrink-0 text-kp-accent dark:text-blue-300" size={16} />
                <span>
                  <span className="font-mono text-kp-muted dark:text-kp-line">{row.k}</span> · {row.line}
                </span>
              </li>
            ))}
          </ul>
        </KpReveal>
        <KpReveal className="md:col-span-7">
          <div className="space-y-6 rounded-2xl border border-kp-line/70 bg-white/90 p-8 text-[17px] leading-[1.8] text-kp-muted shadow-kp-soft md:p-10 dark:border-white/10 dark:bg-dark-card dark:shadow-none dark:text-kp-line">
            <p className="text-kp-ink dark:text-dark-text">{ABOUT_P1}</p>
            <p>{ABOUT_P2}</p>
            <p>{ABOUT_P3}</p>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-kp-line/90 bg-kp-bg/80 px-4 py-2 text-xs font-medium text-kp-ink shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-dark-text">
              <KpUiIcon name="mapPin" size={14} className="text-kp-accent dark:text-blue-300" />
              Orange County / Los Angeles, CA
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-kp-line/90 bg-kp-bg/80 px-4 py-2 text-xs font-medium text-kp-ink shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-dark-text">
              <KpUiIcon name="graduationCap" size={14} className="text-kp-accent dark:text-blue-300" />
              PhD (in progress) · DBA · MCA · BCA
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-kp-line/90 bg-kp-bg/80 px-4 py-2 text-xs font-medium text-kp-ink shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-dark-text">
              <KpUiIcon name="globe2" size={14} className="text-kp-accent dark:text-blue-300" />
              Asia · North America · Europe · Australia
            </span>
            <a
              href={SITE.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-kp-line/90 bg-kp-bg/80 px-4 py-2 text-xs font-medium text-kp-ink shadow-sm transition hover:border-kp-accent dark:border-white/10 dark:bg-white/[0.06] dark:text-dark-text"
            >
              <KpUiIcon name="externalLink" size={14} className="text-kp-accent dark:text-blue-300" />
              ORCID
            </a>
          </div>
        </KpReveal>
      </div>
    </section>
  )
}
