import type { LucideIcon } from 'lucide-react'
import { FileText, Github, GraduationCap, Linkedin, Mail, Microscope, Star } from 'lucide-react'
import { SITE } from './data'
import { externalLinkProps } from './externalLinkProps'

const iconWrap = 'inline-flex items-center gap-1.5'
const iconClass = 'size-[14px] shrink-0 opacity-85'

function FooterLinkIcon({ Icon }: { Icon: LucideIcon }) {
  return <Icon className={iconClass} strokeWidth={1.65} aria-hidden />
}

const FOOTER_PROFILES: readonly { href: string; label: string; Icon: LucideIcon }[] = [
  { href: SITE.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: SITE.scholar, label: 'Google Scholar', Icon: GraduationCap },
  { href: SITE.researchgate, label: 'ResearchGate', Icon: Microscope },
  { href: SITE.github, label: 'GitHub', Icon: Github },
  { href: SITE.medium, label: 'Medium', Icon: FileText },
  { href: SITE.topmate, label: 'Topmate', Icon: Star },
]

const linkClass =
  `${iconWrap} min-h-10 justify-center rounded-lg border border-white/10 bg-dark-card/75 px-5 py-2.5 text-xs font-semibold text-slate-300 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-kp-accent/45 hover:text-kp-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kp-accent/80`

export default function KpFooter() {
  const y = new Date().getFullYear()

  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/[0.08] bg-kp-navy text-slate-200">
      <div className="mx-auto max-w-content px-6 pb-10 pt-20 text-center md:px-8 md:pb-12 md:pt-24">
        <p className="font-sans text-caption2 font-bold uppercase tracking-[0.22em] text-kp-accent">Let&apos;s connect</p>
        <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white md:text-5xl">Get in Touch</h2>
        <div className="mx-auto mt-5 h-0.5 w-12 rounded-full bg-kp-accent" aria-hidden />
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-kp-muted md:text-base">
          Whether you&apos;re interested in enterprise AI, speaking engagements, research collaboration, mentorship, or
          advisory work — I&apos;d be glad to connect.
        </p>

        <nav className="mx-auto mt-9 flex max-w-5xl flex-wrap items-center justify-center gap-3" aria-label="Profiles and email">
          {FOOTER_PROFILES.map((item) => (
            <a key={item.href} href={item.href} {...externalLinkProps} className={linkClass}>
              <FooterLinkIcon Icon={item.Icon} />
              {item.label}
            </a>
          ))}
          <a href={`mailto:${SITE.email}`} className={linkClass}>
            <FooterLinkIcon Icon={Mail} />
            Email
          </a>
        </nav>

        <div className="mt-16 border-t border-white/[0.08] pt-7 text-footnote text-kp-muted">
          <p>© {y} {SITE.name} · {SITE.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
