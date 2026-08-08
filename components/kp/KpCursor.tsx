'use client'

import { useEffect, useRef } from 'react'

/**
 * Custom cursor dot. Writes position straight to the DOM inside requestAnimationFrame
 * (no per-frame React re-render) and grows into a ring over interactive elements.
 * Disabled for reduced-motion and coarse (touch) pointers.
 */
export default function KpCursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const coarse = window.matchMedia('(pointer: coarse)').matches
    if (prefersReduced || coarse) return

    const dot = dotRef.current
    if (!dot) return

    let x = 0
    let y = 0
    let raf = 0

    const render = () => {
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      raf = 0
    }

    const move = (e: MouseEvent) => {
      x = e.clientX
      y = e.clientY
      dot.classList.add('is-on')
      if (!raf) raf = requestAnimationFrame(render)
      const interactive = (e.target as HTMLElement | null)?.closest(
        'a, button, [role="button"], input, textarea, select, summary'
      )
      dot.classList.toggle('is-hover', Boolean(interactive))
    }
    const leave = () => dot.classList.remove('is-on')

    window.addEventListener('mousemove', move)
    document.body.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.body.removeEventListener('mouseleave', leave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={dotRef} className="kp-cursor-dot" aria-hidden />
}
