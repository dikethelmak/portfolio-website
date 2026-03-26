'use client'

import { useEffect, useRef } from 'react'

const TRAIL_COUNT = 6
const COLOR = '61, 174, 209' // accent #3daed1

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<{ el: HTMLDivElement; x: number; y: number }[]>([])
  const mouse = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const cursor = cursorRef.current
    if (!cursor) return

    // Init trail positions from DOM refs
    const trails = trailRefs.current

    function onMove(e: MouseEvent) {
      mouse.current = { x: e.clientX, y: e.clientY }
      cursor!.style.left = e.clientX + 'px'
      cursor!.style.top = e.clientY + 'px'
    }
    function onLeave() { cursor!.style.opacity = '0' }
    function onEnter() { cursor!.style.opacity = '1' }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    function animate() {
      let px = mouse.current.x
      let py = mouse.current.y

      trails.forEach((t, i) => {
        t.x += (px - t.x) * (0.18 - i * 0.02)
        t.y += (py - t.y) * (0.18 - i * 0.02)
        t.el.style.left = t.x + 'px'
        t.el.style.top = t.y + 'px'
        px = t.x
        py = t.y
      })

      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: 8,
          height: 8,
          background: `rgb(${COLOR})`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          transition: 'opacity 0.2s',
        }}
      />
      {/* Trail dots */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => {
        const size = 8 - i * 1.1
        const opacity = 0.35 - i * 0.05
        return (
          <div
            key={i}
            ref={(el) => {
              if (el && !trailRefs.current[i]) {
                trailRefs.current[i] = { el, x: 0, y: 0 }
              }
            }}
            style={{
              position: 'fixed',
              width: size,
              height: size,
              background: `rgb(${COLOR})`,
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 9998,
              transform: 'translate(-50%, -50%)',
              opacity,
            }}
          />
        )
      })}
    </>
  )
}
