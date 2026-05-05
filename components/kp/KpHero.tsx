'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import KpHeroStats from './KpHeroStats'
import KpUiIcon from './KpUiIcon'
import { HERO_IDENTITY, SITE } from './data'

export default function KpHero() {
  return (
    <section className="kp-hero relative">
      <div className="mx-auto flex max-w-content flex-col justify-start px-5 pb-16 pt-4 md:px-8 md:pb-20 md:pt-8 lg:pb-16 lg:pt-10">
        <div className="kp-glass-surface p-5 transition-shadow duration-500 ease-out-soft hover:shadow-kp-elevated md:p-6 dark:hover:shadow-none">
          <motion.header
            className="kp-hero-identity flex max-w-5xl flex-col-reverse gap-6 md:flex-row md:items-start md:gap-8 lg:gap-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Credentials and role"
          >
            <div className="min-w-0 flex-1">
              <div className="kp-hero-identity-nameblock">
                <p className="text-pretty text-[1.0625rem] font-semibold leading-tight tracking-[-0.022em] text-kp-ink md:text-[1.1875rem] dark:text-dark-text">
                  {HERO_IDENTITY.displayName}
                </p>
                <p className="mt-2 max-w-prose text-pretty text-[0.8125rem] font-normal leading-[1.45] text-kp-muted md:text-[0.875rem] dark:text-kp-line">
                  {HERO_IDENTITY.degrees}
                </p>
              </div>

              <div
                className="my-5 h-px w-full max-w-md bg-gradient-to-r from-kp-line/90 via-kp-line/35 to-transparent dark:from-white/12 dark:via-white/6"
                aria-hidden
              />

              <div className="space-y-1">
                <p className="text-pretty text-[0.875rem] font-medium leading-snug tracking-[-0.015em] text-kp-ink md:text-[0.9375rem] dark:text-dark-text">
                  {HERO_IDENTITY.roleTitle}
                </p>
                <p className="text-[0.8125rem] font-normal text-kp-muted dark:text-kp-line">
                  <span className="text-kp-ink/55 dark:text-white/45">@ </span>
                  {HERO_IDENTITY.employer}
                </p>
              </div>

              <p className="mt-4 inline-flex items-start gap-2 text-[0.8125rem] leading-snug text-kp-muted dark:text-kp-line">
                <KpUiIcon name="mapPin" size={15} className="mt-0.5 shrink-0 text-kp-accent/80 dark:text-blue-400/90" />
                <span>{HERO_IDENTITY.location}</span>
              </p>

              <div className="mt-5">
                <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.11em] text-kp-muted dark:text-kp-line">
                  <KpUiIcon name="badgeCheck" size={13} className="shrink-0 text-kp-accent/85 dark:text-blue-400/90" />
                  Membership
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-2">
                  {HERO_IDENTITY.memberships.map((m) => (
                    <li key={m}>
                      <span className="inline-flex rounded-full border border-kp-line/80 bg-white/70 px-3 py-1 text-[0.6875rem] font-medium leading-none tracking-[-0.01em] text-kp-ink shadow-sm dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-dark-text">
                        {m}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.11em] text-kp-muted dark:text-kp-line">
                  <KpUiIcon name="award" size={13} className="shrink-0 text-kp-award" />
                  Recognition
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-2">
                  {HERO_IDENTITY.recognition.map((r) => (
                    <li key={r}>
                      <span className="inline-flex rounded-full border border-kp-line/80 bg-white/70 px-3 py-1 text-[0.6875rem] font-medium leading-none tracking-[-0.01em] text-kp-ink shadow-sm dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-dark-text">
                        {r}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <figure className="kp-hero-portrait mx-auto shrink-0 md:mx-0 md:pt-0.5">
              <div className="relative aspect-[3/4] w-[9.25rem] overflow-hidden rounded-[1.35rem] bg-kp-line/20 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.28)] ring-1 ring-black/[0.06] dark:bg-white/[0.06] dark:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.55)] dark:ring-white/[0.08] sm:w-[10.25rem] md:w-[11.25rem]">
                <Image
                  src={SITE.heroPortraitSrc}
                  alt={SITE.heroPortraitAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 148px, 180px"
                  className="object-cover object-[center_12%]"
                />
              </div>
              <figcaption className="mt-2 max-w-[11.25rem] text-center text-[10px] font-medium leading-snug tracking-wide text-kp-muted dark:text-kp-line md:text-left">
                Ai4 · 2025
              </figcaption>
            </figure>
          </motion.header>
        </div>

        <div className="kp-hero-spec-panel mt-6 md:mt-8">
          <motion.div
            className="kp-hero-main-grid px-5 py-8 md:px-8 md:py-10 md:pb-9 lg:px-10 lg:py-11 lg:pb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="kp-hero-grid-title">
              <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Overview
              </p>
              <h1 className="max-w-4xl text-pretty font-sans text-[1.85rem] font-medium leading-[1.12] tracking-[-0.035em] text-white sm:text-[2.25rem] sm:leading-[1.1] md:text-5xl md:leading-[1.08] lg:text-[3.25rem] lg:leading-[1.06]">
                {SITE.tagline}
              </h1>
            </div>
            <div className="kp-hero-grid-stats">
              <KpHeroStats variant="spec" />
            </div>
            <motion.p
              className="kp-hero-grid-copy max-w-xl border-l-2 border-[#e82127] pl-5 text-pretty text-[0.9375rem] font-normal leading-relaxed text-neutral-400 md:max-w-[28rem] md:text-base md:leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12 }}
            >
              {SITE.heroSubheadline}
            </motion.p>
            <motion.div
              className="kp-hero-grid-cta flex flex-wrap gap-2 sm:gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
            >
              <a
                href={SITE.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="kp-hero-spec-cta-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[13px] md:px-6 md:py-3 md:text-sm"
              >
                View research &amp; publications
                <KpUiIcon name="arrowUpRight" size={14} className="text-neutral-900" />
              </a>
              <a
                href={SITE.topmate}
                target="_blank"
                rel="noopener noreferrer"
                className="kp-hero-spec-cta-secondary inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[13px] md:px-6 md:py-3 md:text-sm"
              >
                <KpUiIcon name="calendarDays" size={14} className="text-white" />
                Book on Topmate
                <KpUiIcon name="externalLink" size={14} className="text-white" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center md:mt-10" aria-hidden>
          <div className="pointer-events-none h-10 w-px bg-gradient-to-b from-neutral-500 to-transparent opacity-40 dark:from-neutral-400" />
        </div>
      </div>
    </section>
  )
}
