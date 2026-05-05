'use client'

import KpCountUp from './KpCountUp'
import KpUiIcon from './KpUiIcon'
import { HERO_STATS } from './data'

type Variant = 'default' | 'spec'

export default function KpHeroStats({ variant = 'default' }: { variant?: Variant }) {
  const spec = variant === 'spec'

  return (
    <aside
      className={
        spec
          ? 'w-full rounded-sm border border-white/10 bg-white/[0.04] p-5 shadow-none backdrop-blur-md md:min-w-[20rem] md:p-6 lg:min-w-[22rem] xl:min-w-[24rem]'
          : 'w-full rounded-2xl border border-kp-line/80 bg-white/85 p-5 shadow-kp-soft ring-1 ring-kp-ink/[0.03] backdrop-blur-md dark:border-white/10 dark:bg-dark-card/80 dark:shadow-none dark:ring-white/[0.04] md:min-w-[20rem] md:p-6 lg:min-w-[22rem] xl:min-w-[24rem]'
      }
      aria-label="Career metrics"
    >
      <ul className={spec ? 'divide-y divide-white/10' : 'divide-y divide-kp-line/80 dark:divide-white/10'}>
        {HERO_STATS.map((s) => (
          <li key={s.label} className="flex gap-3 py-3.5 first:pt-0 last:pb-0">
            <KpUiIcon
              name={s.icon}
              className={
                spec
                  ? 'mt-1 shrink-0 text-neutral-500'
                  : 'mt-1 shrink-0 text-kp-accent/85 dark:text-blue-400/90'
              }
              size={15}
              strokeWidth={1.5}
            />
            <div className="min-w-0 flex-1">
              <p
                className={
                  spec
                    ? 'font-sans text-[1.65rem] font-medium leading-none tracking-tight text-white tabular-nums sm:text-3xl lg:text-[1.85rem]'
                    : 'font-serif text-[1.65rem] font-light leading-none tracking-tight text-kp-ink tabular-nums dark:text-dark-text sm:text-3xl lg:text-[1.85rem]'
                }
              >
                <KpCountUp end={s.value} suffix={s.suffix} />
              </p>
              <p
                className={
                  spec
                    ? 'mt-1 text-[12px] font-semibold leading-snug text-neutral-200'
                    : 'mt-1 text-[12px] font-semibold leading-snug text-kp-ink dark:text-dark-text'
                }
              >
                {s.label}
              </p>
              {s.sub ? (
                <p
                  className={
                    spec
                      ? 'mt-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-neutral-500'
                      : 'mt-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-kp-muted dark:text-kp-line'
                  }
                >
                  {s.sub}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}
