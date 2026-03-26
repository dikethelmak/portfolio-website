'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const words = ['Designer.', 'Builder.', 'Operator.']

const TYPE_SPEED = 80
const ERASE_SPEED = 45
const PAUSE_AFTER_TYPE = 1400
const PAUSE_AFTER_ERASE = 320

function TypewriterHeading() {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [phase, setPhase] = useState<'typing' | 'paused' | 'erasing' | 'between'>('typing')

  useEffect(() => {
    const word = words[wordIndex]

    if (phase === 'typing') {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), TYPE_SPEED)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('paused'), PAUSE_AFTER_TYPE)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'paused') {
      setPhase('erasing')
    }

    if (phase === 'erasing') {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(d => d.slice(0, -1)), ERASE_SPEED)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => {
          setWordIndex(i => (i + 1) % words.length)
          setPhase('typing')
        }, PAUSE_AFTER_ERASE)
        return () => clearTimeout(t)
      }
    }
  }, [displayed, phase, wordIndex])

  return (
    <h1 className="text-[24px] sm:text-[30px] font-[SailecBold] text-text leading-[1.25] mb-8">
      {displayed}
      <span className="inline-block w-[2px] h-[1.1em] bg-accent align-middle ml-0.5 animate-pulse" />
    </h1>
  )
}

const stats = [
  { value: '$9B+', label: 'transactions shipped' },
  { value: '$800K', label: 'vendor costs saved' },
  { value: '50%', label: 'faster test creation' },
]

export default function HeroSection() {
  return (
    <section className="pt-16 pb-16 md:pt-24 md:pb-20">

      {/* Status badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2.5 mb-6"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
        <span className="text-[11px] uppercase tracking-[0.14em] text-accent font-[SailecBold]">
          Open to senior roles · Relocating to UK/Europe
        </span>
      </motion.div>

      {/* Typewriter heading */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <TypewriterHeading />
      </motion.div>

      {/* Descriptor */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.22 }}
        className="flex flex-col gap-4 text-[15px] text-muted leading-[1.75] max-w-3xl mb-10"
      >
        <p>
          I&apos;m Thelma, a product designer with 8 years of experience. I specialise in
          complex, regulated systems that help expert users move fast without breaking things.
        </p>
        <p>
          I&apos;ve shipped RBAC and multi-tenancy controls for air-gapped 5G infrastructure,
          ML trust UX for Apple&apos;s battery R&amp;D, and financial tooling processing $9B+
          across 4 African markets.
        </p>
        <p>
          Outside my role at ChipperCash, I&apos;m building{' '}
          <span className="relative inline-block group/tooltip">
            <a
              href="https://verifyskn.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-bright transition-colors underline underline-offset-2"
            >
              VerifySkn
            </a>
            <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-64 rounded-xl px-3.5 py-2.5 text-[12px] leading-relaxed text-text/90 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 shadow-xl z-10"
              style={{ background: 'rgba(13,37,53,0.97)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              An AI-powered skincare authentication app — designed and coded by me, using Claude Code and a Next.js/Supabase stack.
            </span>
          </span>
          {' '}— independently taking a product from idea to working system across design,
          code, and architecture.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.32 }}
        className="flex items-center gap-8 mb-10"
      >
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-0.5">
            <span className="text-xl font-[SailecBold] text-bright leading-tight">{s.value}</span>
            <span className="text-[11px] uppercase tracking-[0.12em] text-muted">{s.label}</span>
          </div>
        ))}
      </motion.div>

    </section>
  )
}
