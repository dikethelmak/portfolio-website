'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'

const slides = [
  { src: '/assets/travel/Image1.jpg', caption: '' },
  { src: '/assets/travel/Image2.jpg', caption: '' },
]

export default function TravelSlider() {
  const trackRef = useRef<HTMLDivElement>(null)

  function scroll(dir: 'left' | 'right') {
    if (!trackRef.current) return
    trackRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  return (
    <div className="mb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-[11px] uppercase tracking-[0.14em] text-muted font-[SailecBold]">
          Travel
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-7 h-7 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-muted hover:text-text transition-all duration-150"
            aria-label="Previous"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M6.5 2L3.5 5L6.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-7 h-7 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-muted hover:text-text transition-all duration-150"
            aria-label="Next"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M3.5 2L6.5 5L3.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide pb-1"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 w-64 h-48 rounded-2xl overflow-hidden bg-surface border border-white/[0.05]"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={`Travel photo ${i + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Show placeholder if image missing
                const el = e.currentTarget
                el.style.display = 'none'
                el.parentElement!.classList.add('placeholder-slot')
              }}
            />
            {/* Placeholder shown when no image */}
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-[11px] uppercase tracking-widest text-muted/30">
                Photo {i + 1}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
