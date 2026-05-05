import { TRUSTED_ORGS } from './trustedOrgs'

export default function KpCredStrip() {
  return (
    <section
      id="trusted"
      className="scroll-mt-24 border-y border-kp-line/80 bg-gradient-to-r from-kp-bg via-white to-kp-bg py-10 dark:border-white/10 dark:from-dark-bg dark:via-dark-card/40 dark:to-dark-bg md:py-12"
    >
      <div className="mx-auto max-w-content px-5 md:px-8">
        <p className="kp-section-eyebrow text-center">Trust &amp; reach</p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center font-serif text-2xl font-light leading-snug tracking-tight text-kp-ink dark:text-dark-text md:text-3xl md:leading-tight">
          Trusted by organizations, clients, and industry bodies
        </h2>
        <div className="mx-auto mt-8 max-w-5xl rounded-[var(--kp-radius-card)] border border-kp-line/50 bg-white/50 p-5 shadow-kp-soft backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.04] dark:shadow-none md:mt-10 md:p-7">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
            {TRUSTED_ORGS.map((name) => (
              <span
                key={name}
                className="inline-flex max-w-full items-center rounded-full border border-kp-line/60 bg-white/85 px-3 py-1.5 text-center text-caption2 font-medium leading-tight tracking-wide text-kp-muted shadow-sm transition-[color,transform,box-shadow] duration-200 ease-out-soft hover:border-kp-accent/25 hover:text-kp-ink sm:text-xs dark:border-white/[0.1] dark:bg-white/[0.06] dark:text-kp-line dark:hover:border-blue-400/30 dark:hover:text-dark-text motion-safe:hover:-translate-y-px"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
