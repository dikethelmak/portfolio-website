'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

const caseStudies = [
  { href: '/work/verizon', label: 'Verizon · Ceres' },
  { href: '/work/chipper-cash', label: 'Chipper Cash' },
  { href: '/work/apple-battery', label: 'Apple · Battery R&D' },
  { href: '/work/softcom', label: 'Softcom' },
]

const workWithMeLinks = [
  {
    href: 'https://www.linkedin.com/in/dikethelmak/',
    label: 'LinkedIn',
    external: true,
  },
  {
    href: 'https://docs.google.com/document/d/1TGyf8GdJl9mxwbZwgdkmXhUxz5rMeiR00SjjlziIapI/edit?tab=t.0',
    label: 'Resume',
    external: true,
  },
]

// ── Dropdown ────────────────────────────────────────────────────────────────
const dropdownVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export default function Navigation() {
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [emailCopied, setEmailCopied] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('https://archive.org/download/78_what-a-friend-we-have-in-jesus_herman-voss-mathewson-converse_gbia0474703b/WHAT%20A%20FRIEND%20WE%20HAVE%20IN%20JESUS%20-%20Herman%20Voss.mp3')
    audioRef.current.loop = true
    return () => {
      audioRef.current?.pause()
    }
  }, [])

  function togglePlay() {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }
    setPlaying(p => !p)
    setOpenMenu(null)
  }

  // Close dropdowns on outside click
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { setOpenMenu(null); setMobileOpen(false) }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  function toggle(menu: string) {
    setOpenMenu(prev => (prev === menu ? null : menu))
  }

  function copyEmail() {
    navigator.clipboard.writeText('dikethelma55@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  const isCaseStudyActive = caseStudies.some(
    p => pathname === p.href || pathname.startsWith(p.href + '/')
  )

  // ── Desktop bottom nav ────────────────────────────────────────────────────
  return (
    <>
      <nav
        ref={navRef}
        className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50 items-center gap-0.5 px-2 py-2 rounded-full shadow-2xl"
        style={{
          background: 'rgba(13, 37, 53, 0.75)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Avatar → home */}
        <Link
          href="/"
          onClick={() => setOpenMenu(null)}
          className={`w-10 h-10 rounded-full overflow-hidden shrink-0 mr-2 ring-2 transition-all duration-200 ${
            pathname === '/' ? 'ring-accent/60' : 'ring-white/10 hover:ring-accent/60'
          }`}
        >
          <Image
            src="/assets/aboutme-main.png"
            alt="Thelma Dike"
            width={40}
            height={40}
            className={`w-full h-full object-cover object-top transition-all duration-200 ${
              pathname === '/' ? 'grayscale-0' : 'grayscale hover:grayscale-0'
            }`}
          />
        </Link>

        {/* ── Case Studies ── */}
        <div className="relative">
          <button
            onClick={() => toggle('casestudies')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-colors duration-150 ${
              isCaseStudyActive || openMenu === 'casestudies'
                ? 'text-bright'
                : 'text-text/75 hover:text-text'
            }`}
          >
            Case Studies
            <svg
              width="10" height="10" viewBox="0 0 10 10" fill="none"
              className={`transition-transform duration-200 ${openMenu === 'casestudies' ? 'rotate-180' : ''}`}
            >
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <AnimatePresence>
            {openMenu === 'casestudies' && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 min-w-[180px] rounded-2xl py-2 shadow-2xl overflow-hidden"
                style={{
                  background: 'rgba(13, 37, 53, 0.97)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {caseStudies.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpenMenu(null)}
                    className={`flex items-center justify-between px-4 py-2.5 text-sm transition-colors duration-150 ${
                      pathname === href ? 'text-bright' : 'text-text/75 hover:text-text'
                    }`}
                  >
                    {label}
                    {pathname === href && (
                      <span className="w-1.5 h-1.5 rounded-full bg-bright shrink-0" />
                    )}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── About ── */}
        <Link
          href="/about"
          onClick={() => setOpenMenu(null)}
          className={`px-4 py-2 rounded-full text-sm transition-colors duration-150 ${
            pathname === '/about' ? 'text-bright' : 'text-text/75 hover:text-text'
          }`}
        >
          About
        </Link>

        {/* ── Talks ── */}
        <Link
          href="/talks"
          onClick={() => setOpenMenu(null)}
          className={`px-4 py-2 rounded-full text-sm transition-colors duration-150 ${
            pathname === '/talks' ? 'text-bright' : 'text-text/75 hover:text-text'
          }`}
        >
          Talks
        </Link>

        {/* ── Work with me ── */}
        <div className="relative ml-1">
          <button
            onClick={() => toggle('workwithme')}
            className={`group/wwm flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-[SailecBold] transition-all duration-150 ${
              openMenu === 'workwithme'
                ? 'bg-white/20 text-text'
                : 'bg-white/10 hover:bg-white/15 text-text'
            }`}
          >
            Work with me
            {/* diagonal arrow → right arrow on hover */}
            <span className="relative w-3 h-3 inline-block">
              <svg className="absolute inset-0 transition-opacity duration-150 group-hover/wwm:opacity-0" width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg className="absolute inset-0 opacity-0 transition-opacity duration-150 group-hover/wwm:opacity-100" width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>

          <AnimatePresence>
            {openMenu === 'workwithme' && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="absolute bottom-full right-0 mb-3 min-w-[160px] rounded-2xl py-2 shadow-2xl overflow-hidden"
                style={{
                  background: 'rgba(13, 37, 53, 0.97)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {workWithMeLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center justify-between px-4 py-2.5 text-sm text-text/75 hover:text-text transition-colors duration-150"
                  >
                    {label}
                    <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                      <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
                {/* Email with copy */}
                <button
                  onClick={copyEmail}
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-text/75 hover:text-text transition-colors duration-150 text-left"
                >
                  {emailCopied ? 'Copied!' : 'Email'}
                  {emailCopied ? (
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <rect x="3.5" y="3.5" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M2 8.5V2.5a1 1 0 011-1h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  )}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Vinyl / Now Playing ── */}
        <div className="relative ml-1">
          <button
            onClick={togglePlay}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
              playing ? 'bg-white/15' : 'hover:bg-white/10'
            }`}
            aria-label="Now playing"
          >
            <motion.svg
              width="20" height="20" viewBox="0 0 20 20" fill="none"
              animate={{ rotate: playing ? 360 : 0 }}
              transition={playing ? { repeat: Infinity, duration: 3, ease: 'linear' } : { duration: 0.3 }}
            >
              <circle cx="10" cy="10" r="9" fill="#1a1a1a" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
              <circle cx="10" cy="10" r="7" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
              <circle cx="10" cy="10" r="5.5" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
              <circle cx="10" cy="10" r="4" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
              <circle cx="10" cy="10" r="2.8" fill="#8B3A3A"/>
              <circle cx="10" cy="10" r="0.8" fill="#1a1a1a"/>
            </motion.svg>
            {/* Tonearm — static, outside spinning svg */}
          </button>
          {/* Static tonearm overlay */}
          <svg className="absolute inset-0 pointer-events-none" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <line x1="28" y1="5" x2="21" y2="15" stroke="rgba(255,255,255,0.45)" strokeWidth="1" strokeLinecap="round"/>
            <circle cx="28" cy="5" r="1.2" fill="rgba(255,255,255,0.35)"/>
          </svg>

          <AnimatePresence>
            {playing && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="absolute bottom-full right-0 mb-3 w-[200px] rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  background: 'rgba(13, 37, 53, 0.97)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="px-3 pt-3 pb-1">
                  <span className="text-[10px] uppercase tracking-widest text-muted/60">On repeat</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 pb-2">
                  <div className="w-9 h-9 rounded-xl shrink-0 flex items-center justify-center" style={{ background: '#8B3A3A' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[13px] font-[SailecBold] text-text truncate">What a Friend We Have in Jesus</span>
                    <span className="text-[11px] text-muted truncate">Orchestra</span>
                  </div>
                </div>
                <div className="px-3 pb-3">
                  <div className="h-0.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[42%] rounded-full bg-bright" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </nav>

      {/* ── Mobile bottom nav ─────────────────────────────────────────────── */}
      <div
        className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex items-center gap-3 px-3 py-2.5 rounded-2xl shadow-2xl"
        style={{
          background: 'rgba(13, 37, 53, 0.92)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Avatar */}
        <Link
          href="/"
          className={`w-9 h-9 rounded-full overflow-hidden shrink-0 ring-2 transition-all duration-200 ${
            pathname === '/' ? 'ring-accent/60' : 'ring-white/10'
          }`}
        >
          <Image
            src="/assets/aboutme-main.png"
            alt="Thelma Dike"
            width={36}
            height={36}
            className={`w-full h-full object-cover object-top transition-all duration-200 ${
              pathname === '/' ? 'grayscale-0' : 'grayscale'
            }`}
          />
        </Link>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Vinyl / Music */}
        <button
          onClick={togglePlay}
          className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
            playing ? 'bg-white/15' : 'hover:bg-white/10'
          }`}
          aria-label="Now playing"
        >
          <motion.svg
            width="20" height="20" viewBox="0 0 20 20" fill="none"
            animate={{ rotate: playing ? 360 : 0 }}
            transition={playing ? { repeat: Infinity, duration: 3, ease: 'linear' } : { duration: 0.3 }}
          >
            <circle cx="10" cy="10" r="9" fill="#1a1a1a" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
            <circle cx="10" cy="10" r="7" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <circle cx="10" cy="10" r="5.5" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <circle cx="10" cy="10" r="4" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
            <circle cx="10" cy="10" r="2.8" fill="#8B3A3A"/>
            <circle cx="10" cy="10" r="0.8" fill="#1a1a1a"/>
          </motion.svg>
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(o => !o)}
          className="w-9 h-9 rounded-xl flex items-center justify-center bg-accent hover:bg-accent/80 transition-all duration-150"
          aria-label="Open menu"
        >
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <line x1="0" y1="1" x2="16" y2="1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="0" y1="6" x2="12" y2="6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="0" y1="11" x2="8" y2="11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[59] md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="fixed bottom-[82px] right-4 z-[60] md:hidden rounded-2xl overflow-hidden w-[260px]"
              style={{
                background: 'rgba(13, 37, 53, 0.97)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Nav links */}
              <div className="px-2 pt-2 pb-2">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/talks', label: 'Talks' },
                ].map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center px-3 py-2 rounded-lg text-[14px] transition-colors ${
                      pathname === href
                        ? 'text-accent bg-white/[0.06]'
                        : 'text-text/80 hover:text-text hover:bg-white/[0.04]'
                    }`}
                  >
                    {label}
                  </Link>
                ))}

                <div className="h-px bg-white/[0.06] mx-3 my-1.5" />

                {caseStudies.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center px-3 py-2 rounded-lg text-[14px] transition-colors ${
                      pathname === href
                        ? 'text-accent bg-white/[0.06]'
                        : 'text-text/60 hover:text-text hover:bg-white/[0.04]'
                    }`}
                  >
                    {label}
                  </Link>
                ))}

                <div className="h-px bg-white/[0.06] mx-3 my-1.5" />

                <p className="px-3 pt-1 pb-1.5 text-[10px] uppercase tracking-[0.15em] text-muted/50 font-[SailecBold]">
                  Work with me
                </p>

                {workWithMeLinks.map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-3 py-2 rounded-lg text-[14px] text-text/60 hover:text-text hover:bg-white/[0.04] transition-colors"
                  >
                    {label}
                  </a>
                ))}
                <button
                  onClick={() => { copyEmail(); setMobileOpen(false) }}
                  className="flex items-center w-full px-3 py-2 rounded-lg text-[14px] text-text/60 hover:text-text hover:bg-white/[0.04] transition-colors"
                >
                  {emailCopied ? 'Copied!' : 'Email'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
