'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mx = useRef(0)
  const my = useRef(0)
  const rx = useRef(0)
  const ry = useRef(0)
  const [hover, setHover] = useState(false)
  const raf = useRef<number>()

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 960px)')
    if (mq.matches) return

    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX
      my.current = e.clientY
    }
    document.addEventListener('mousemove', onMove)

    const loop = () => {
      const dot = dotRef.current
      const ring = ringRef.current
      if (dot) {
        dot.style.left = `${mx.current}px`
        dot.style.top = `${my.current}px`
      }
      rx.current += (mx.current - rx.current) * 0.14
      ry.current += (my.current - ry.current) * 0.14
      if (ring) {
        ring.style.left = `${rx.current}px`
        ring.style.top = `${ry.current}px`
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    const selectors =
      'a,button,.comp,.inq,.acard,.pc,.pfeat,.pub-card,.pub-more,.init-card,.cert-item,.activity-item,.rsb-m,.en-item,.fbadge,.mapnode'
    const onEnter = () => setHover(true)
    const onLeave = () => setHover(false)
    const hoverTargets = Array.from(document.querySelectorAll<HTMLElement>(selectors))
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      if (raf.current) cancelAnimationFrame(raf.current)
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div id="cdot" ref={dotRef} aria-hidden />
      <div id="cring" ref={ringRef} className={hover ? 'h' : ''} aria-hidden />
    </>
  )
}
