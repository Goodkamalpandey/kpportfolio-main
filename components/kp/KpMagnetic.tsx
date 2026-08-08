'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

type Props = {
  href: string
  children: React.ReactNode
  className?: string
  /** 0–1 — how far the element trails the cursor. */
  strength?: number
  target?: string
  rel?: string
  'aria-label'?: string
}

/**
 * Magnetic link — the element eases toward the cursor while hovered, then springs back.
 * Disabled under prefers-reduced-motion (values stay at 0). Use for hero/contact CTAs.
 */
export default function KpMagnetic({
  href,
  children,
  className,
  strength = 0.3,
  target,
  rel,
  'aria-label': ariaLabel,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, { stiffness: 220, damping: 20, mass: 0.4 })
  const y = useSpring(my, { stiffness: 220, damping: 20, mass: 0.4 })

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - (r.left + r.width / 2)) * strength)
    my.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </motion.a>
  )
}
