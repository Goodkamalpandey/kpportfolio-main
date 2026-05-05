import type { LucideIcon } from 'lucide-react'
import { BadgeCheck, FileText, Github, GraduationCap, Linkedin, Mail, Microscope, Sparkles, Star } from 'lucide-react'
import { SITE } from './data'
import { externalLinkProps } from './externalLinkProps'

const iconWrap = 'inline-flex items-center gap-1.5'
const iconClass = 'size-[14px] shrink-0 opacity-85'

function FooterLinkIcon({ Icon }: { Icon: LucideIcon }) {
  return <Icon className={iconClass} strokeWidth={1.65} aria-hidden />
}

const FOOTER_PROFILES: readonly { href: string; label: string; Icon: LucideIcon }[] = [
  { href: SITE.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: SITE.github, label: 'GitHub', Icon: Github },
  { href: SITE.scholar, label: 'Scholar', Icon: GraduationCap },
  { href: SITE.researchgate, label: 'ResearchGate', Icon: Microscope },
  { href: SITE.orcid, label: 'ORCID', Icon: BadgeCheck },
  { href: SITE.authorea, label: 'Authorea', Icon: FileText },
  { href: SITE.constellation, label: 'Constellation', Icon: Sparkles },
  { href: SITE.topmate, label: 'Topmate', Icon: Star },
]

const linkClass =
  `${iconWrap} text-[13px] font-normal tracking-wide text-zinc-400 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-400/80`

export default function KpFooter() {
  const y = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.08] bg-[#1b0f19] pb-[calc(3rem+env(safe-area-inset-bottom,0px))] pt-12 text-zinc-200 md:pb-[calc(3.5rem+env(safe-area-inset-bottom,0px))] md:pt-14">
      <div className="mx-auto max-w-content px-6 text-center md:px-8">
        <nav
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
          aria-label="Profiles and email"
        >
          {FOOTER_PROFILES.map((item) => (
            <a key={item.href} href={item.href} {...externalLinkProps} className={`${linkClass} text-[12px]`}>
              <FooterLinkIcon Icon={item.Icon} />
              {item.label}
            </a>
          ))}
          <a href={`mailto:${SITE.email}`} className={`${linkClass} text-[12px]`}>
            <FooterLinkIcon Icon={Mail} />
            Email
          </a>
        </nav>

        <p className="mt-10 text-sm leading-relaxed text-zinc-500">
          Orange County / Los Angeles, CA
        </p>

        <p className="mt-3 text-[13px] text-zinc-500">
          © {y} {SITE.name}
        </p>

        <p className="mx-auto mt-2 max-w-md text-xs leading-relaxed text-zinc-600">{SITE.tagline}</p>
      </div>
    </footer>
  )
}
