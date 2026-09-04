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
          ? 'w-full'
          : 'w-full rounded-lg border border-kp-line/80 bg-dark-card/85 p-5 shadow-kp-soft ring-1 ring-kp-ink/[0.03] backdrop-blur-md dark:border-white/10 dark:bg-dark-card/80 dark:shadow-none dark:ring-white/[0.04] md:min-w-[20rem] md:p-6 lg:min-w-[22rem] xl:min-w-[24rem]'
      }
      aria-label="Career metrics"
    >
      <ul className={spec ? 'grid grid-cols-2 gap-y-7 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-0' : 'divide-y divide-kp-line/80 dark:divide-white/10'}>
        {HERO_STATS.map((s) => (
          <li
            key={s.label}
            className={spec ? 'min-w-0 border-l border-white/10 px-4 first:border-l-0 sm:px-5 lg:px-6' : 'flex gap-3 py-3.5 first:pt-0 last:pb-0'}
          >
            <KpUiIcon
              name={s.icon}
              className={
                spec
                  ? 'hidden'
                  : 'mt-1 shrink-0 text-kp-accent/85 dark:text-kp-accent/90'
              }
              size={15}
              strokeWidth={1.5}
            />
            <div className="min-w-0 flex-1">
              <p
                className={
                  spec
                    ? 'font-serif text-3xl font-bold leading-none tracking-tight text-kp-accent tabular-nums sm:text-4xl'
                    : 'font-serif text-2xl font-light leading-none tracking-tight text-kp-ink tabular-nums dark:text-dark-text sm:text-3xl'
                }
              >
                <KpCountUp
                  end={s.value}
                  prefix={'prefix' in s ? s.prefix : ''}
                  suffix={s.suffix}
                />
              </p>
              <p
                className={
                  spec
                    ? 'mt-2 text-xs font-semibold uppercase leading-snug tracking-[0.08em] text-neutral-300'
                    : 'mt-1 text-xs font-semibold leading-snug text-kp-ink dark:text-dark-text'
                }
              >
                {s.label}
              </p>
              {s.sub ? (
                <p
                  className={
                    spec
                      ? 'mt-0.5 text-caption2 font-medium uppercase tracking-[0.12em] text-neutral-500'
                      : 'mt-0.5 text-caption2 font-medium uppercase tracking-[0.12em] text-kp-muted dark:text-kp-muted'
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
