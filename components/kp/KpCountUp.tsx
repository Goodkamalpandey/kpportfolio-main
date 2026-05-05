'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

function formatNum(n: number, mode: 'default' | 'comma') {
  if (mode === 'comma') return n.toLocaleString('en-US')
  return String(n)
}

export default function KpCountUp({
  end,
  prefix = '',
  suffix = '',
  duration = 1200,
  format = 'default' as 'default' | 'comma',
}: {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  format?: 'default' | 'comma'
}) {
  const [val, setVal] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) {
      setVal(end)
      return
    }
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        obs.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - (1 - t) * (1 - t)
          setVal(Math.round(end * eased))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [end, duration, reduce])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatNum(val, format)}
      {suffix}
    </span>
  )
}
