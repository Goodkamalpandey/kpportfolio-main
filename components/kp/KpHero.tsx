'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import KpHeroStats from './KpHeroStats'
import KpUiIcon from './KpUiIcon'
import KpMagnetic from './KpMagnetic'
import { HERO_IDENTITY, SITE } from './data'

export default function KpHero() {
  const specRef = useRef<HTMLDivElement>(null)

  /** Cursor-follow spotlight on the spec panel — pointer-only, respects reduced motion. */
  useEffect(() => {
    const el = specRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${e.clientX - r.left}px`)
      el.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    el.addEventListener('pointermove', onMove)
    return () => el.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <section className="kp-hero relative">
      <div className="mx-auto flex max-w-content flex-col justify-start px-5 pb-16 pt-4 md:px-8 md:pb-20 md:pt-8 lg:pb-16 lg:pt-10">
        <div ref={specRef} className="kp-hero-spec-panel overflow-hidden">
          <div className="kp-hero-spotlight" aria-hidden />
          <motion.header
            className="px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-14">
              <div className="min-w-0">
                <p className="font-mono text-caption2 font-semibold uppercase leading-relaxed tracking-[0.16em] text-kp-accent">
                  {HERO_IDENTITY.roleTitle}
                </p>
                <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-footnote text-neutral-400">
                  <span>{HERO_IDENTITY.employer}</span>
                  <span aria-hidden>·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <KpUiIcon name="mapPin" size={13} className="text-neutral-500" />
                    {HERO_IDENTITY.location}
                  </span>
                </p>

                <h1 className="mt-8 max-w-4xl text-pretty font-serif text-5xl font-medium leading-[0.96] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
                  {HERO_IDENTITY.displayName}
                </h1>
                <p className="mt-5 font-serif text-lg italic tracking-[0.02em] text-kp-accent sm:text-xl">
                  Applied AI Engineer&nbsp; · &nbsp;Enterprise Architect&nbsp; · &nbsp;Digital Transformation Leader&nbsp; · &nbsp;AI Researcher
                </p>
                <p className="mt-6 max-w-2xl border-l-2 border-kp-accent/70 pl-5 text-pretty text-sm leading-relaxed text-neutral-400 md:text-base">
                  {SITE.heroSubheadline}
                </p>

                <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
                  <KpMagnetic
                    href={SITE.topmate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kp-hero-spec-cta-primary inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[13px] md:px-6 md:py-3 md:text-sm"
                  >
                    <KpUiIcon name="calendarDays" size={14} className="text-neutral-900" />
                    Book a consult
                    <KpUiIcon name="arrowUpRight" size={14} className="text-neutral-900" />
                  </KpMagnetic>
                  <KpMagnetic
                    href="/#work"
                    className="kp-hero-spec-cta-secondary inline-flex items-center justify-center gap-2 px-5 py-2.5 text-footnote md:px-6 md:py-3 md:text-sm"
                  >
                    <KpUiIcon name="briefcase" size={14} className="text-white" />
                    View selected work
                    <KpUiIcon name="arrowUpRight" size={14} className="text-white" />
                  </KpMagnetic>
                </div>
              </div>

              <div className="mx-auto w-full max-w-sm lg:mx-0">
                <figure>
                  <div className="relative mx-auto aspect-[4/5] w-full max-w-[15rem] overflow-hidden rounded-lg bg-dark-card/[0.06] shadow-[0_20px_60px_-24px_rgba(0,0,0,0.8)] ring-1 ring-white/10 lg:max-w-none">
                    <Image
                      src={SITE.heroPortraitSrc}
                      alt={SITE.heroPortraitAlt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 240px, 352px"
                      className="object-cover object-[center_12%]"
                    />
                  </div>
                  <figcaption className="mt-2 text-center font-mono text-caption2 uppercase tracking-[0.14em] text-neutral-500 lg:text-left">
                    Ai4 · 2025
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <KpHeroStats variant="spec" />
            </div>

          </motion.header>
        </div>

        <div className="mt-8 flex justify-center md:mt-10" aria-hidden>
          <div className="pointer-events-none h-10 w-px bg-gradient-to-b from-neutral-500 to-transparent opacity-40 dark:from-neutral-400" />
        </div>
      </div>
    </section>
  )
}
