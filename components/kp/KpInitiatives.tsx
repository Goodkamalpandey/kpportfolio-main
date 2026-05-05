import Link from 'next/link'
import KpReveal from './KpReveal'
import KpUiIcon from './KpUiIcon'
import { INITIATIVES } from './data'

function CtaLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith('http')
  const className =
    'mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition group-hover:gap-3 hover:text-white'
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        <KpUiIcon name="arrowUpRight" size={16} />
      </a>
    )
  }
  return (
    <Link href={href} className={className}>
      {children}
      <KpUiIcon name="arrowUpRight" size={16} />
    </Link>
  )
}

export default function KpInitiatives() {
  return (
    <section
      id="initiatives"
      className="scroll-mt-24 bg-kp-navy pb-12 pt-14 text-white md:pb-16 md:pt-16 dark:bg-dark-bg"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <KpReveal>
          <p className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.13em] text-kp-emerald">
            <KpUiIcon name="layers2" size={15} className="text-kp-emerald" />
            Key initiatives
          </p>
          <h2 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-tight text-white md:text-5xl">
            Building what doesn&apos;t exist yet.
          </h2>
        </KpReveal>
        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-8">
          {INITIATIVES.map((item) => {
            const tagClass =
              item.tagTone === 'emerald'
                ? 'border-kp-emerald/40 bg-kp-emerald/15 text-kp-emerald'
                : 'border-kp-accent/40 bg-kp-accent/15 text-blue-200'
            return (
              <KpReveal key={item.title}>
                <article className="group h-full rounded-[14px] border border-white/[0.12] bg-dark-card/90 p-8 shadow-sm transition duration-200 ease-out-soft hover:-translate-y-0.5 hover:border-kp-accent/40 hover:shadow-kp-primary md:p-9">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider ${tagClass}`}
                  >
                    {item.tag}
                  </span>
                  <h3 className="mt-4 font-serif text-2xl font-normal text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/[0.62]">{item.body}</p>
                  <CtaLink href={item.href}>{item.cta}</CtaLink>
                </article>
              </KpReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
