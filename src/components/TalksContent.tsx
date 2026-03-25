'use client'

import { useState } from 'react'

const talks = [
  {
    event: 'Nigeria Innovation Summit',
    title: "Designing with AI — Tools, Judgment, and the Designer's Role",
    year: '2026',
    upcoming: true,
    href: null,
  },
  {
    event: 'MumsWhoCode · IWD 2026',
    title: 'Generative Workflows in Product Design',
    year: 'Mar 2026',
    upcoming: false,
    href: 'https://speakerdeck.com/dikethelmak',
  },
  {
    event: 'Speaker Deck',
    title: 'Responsible AI — Ethics, Bias and Fair Access',
    year: 'Jan 2026',
    upcoming: false,
    href: 'https://speakerdeck.com/dikethelmak/responsible-ai-ethics-bias-and-fair-access',
  },
  {
    event: 'Speaker Deck',
    title: 'Building a Successful Career in Design',
    year: null,
    upcoming: false,
    href: 'https://speakerdeck.com/dikethelmak',
  },
  {
    event: 'Speaker Deck',
    title: 'Introduction to UI/UX Using Figma',
    year: null,
    upcoming: false,
    href: 'https://speakerdeck.com/dikethelmak',
  },
  {
    event: 'Speaker Deck',
    title: 'Carrying Out Usability Tests',
    year: null,
    upcoming: false,
    href: 'https://speakerdeck.com/dikethelmak',
  },
  {
    event: 'Speaker Deck',
    title: 'Design Documentation',
    year: null,
    upcoming: false,
    href: 'https://speakerdeck.com/dikethelmak',
  },
]

const writings = [
  {
    title: "One Man's Decision (Pt 1)",
    subtitle: 'Dedicated to my dad',
    date: 'Mar 4, 2026',
    source: 'Substack',
    href: 'https://notesfromtee.substack.com/p/one-mans-decision-pt-1',
  },
  {
    title: 'Not Every Opportunity is the Right One',
    subtitle: 'On stakeholder management and knowing when to walk away.',
    date: 'Jan 27, 2026',
    source: 'Substack',
    href: 'https://notesfromtee.substack.com/p/not-every-opportunity-is-the-right-one',
  },
  {
    title: 'Prediction: The Real Value of Industrial AI',
    subtitle: 'The future of manufacturing is collaborative, not automated.',
    date: 'Dec 16, 2025',
    source: 'Substack',
    href: 'https://notesfromtee.substack.com/p/prediction-the-real-value-of-industrial-ai',
  },
  {
    title: 'Growing Influence: 4 Strategies for Stakeholder Buy-In',
    subtitle: 'The methods I use to gain alignment and move work forward.',
    date: 'Nov 28, 2025',
    source: 'Substack',
    href: 'https://notesfromtee.substack.com/p/growing-influence-4-strategies-for',
  },
  {
    title: 'In My Own Voice',
    subtitle: "What a trip to Doha taught me about belonging, identity, and the voice I've left behind.",
    date: 'Aug 11, 2025',
    source: 'Substack',
    href: 'https://notesfromtee.substack.com/p/in-my-own-voice',
  },
  {
    title: 'When Love Curdles',
    subtitle: 'A cafe reflection.',
    date: 'May 22, 2025',
    source: 'Substack',
    href: 'https://notesfromtee.substack.com/p/when-love-curdles',
  },
  {
    title: 'Saying No with Love',
    subtitle: 'How I set boundaries around Black Tax.',
    date: 'Mar 8, 2025',
    source: 'Substack',
    href: 'https://notesfromtee.substack.com/p/saying-no-with-love',
  },
  {
    title: 'The Ethical Responsibility of a Designer',
    subtitle: 'On the choices we make and the systems we build.',
    date: 'Nov 20, 2024',
    source: 'Substack',
    href: 'https://notesfromtee.substack.com/p/the-ethical-responsibility-of-a-designer',
  },
]

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-150 shrink-0">
    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function TalksContent() {
  const [tab, setTab] = useState<'speaking' | 'writing'>('speaking')

  return (
    <>
      {/* Hero */}
      <div className="mb-10">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted/60 font-[SailecBold] mb-6">
          Talks &amp; Writing
        </p>
        <h1 className="text-[24px] sm:text-[30px] font-[SailecBold] text-text leading-[1.25] mb-6 max-w-2xl">
          Speaking and Writing on Design, AI, and Craft
        </h1>
        <p className="text-[15px] text-muted leading-[1.8] max-w-xl">
          A collection of talks, slide decks, and long-form writing. Spanning design practice,
          AI ethics, career building, and the occasional personal reflection.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 mb-10 border-b border-surface">
        {(['speaking', 'writing'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-1 pb-3 mr-5 text-[13px] font-[SailecBold] capitalize transition-colors duration-150 border-b-2 -mb-px ${
              tab === t
                ? 'text-text border-accent'
                : 'text-muted hover:text-text border-transparent'
            }`}
          >
            {t === 'speaking' ? 'Speaking' : 'Writing'}
          </button>
        ))}
      </div>

      {/* Speaking */}
      {tab === 'speaking' && (
        <div>
          <div className="flex flex-col divide-y divide-surface">
            {talks.map((talk) => (
              <div key={talk.title} className="py-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex flex-col gap-1 max-w-lg">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] text-muted tracking-wide">{talk.event}</span>
                    {talk.upcoming && (
                      <span className="text-[10px] uppercase tracking-[0.1em] font-[SailecBold] text-accent border border-accent/30 rounded-full px-2 py-0.5">
                        Upcoming
                      </span>
                    )}
                  </div>
                  {talk.href ? (
                    <a
                      href={talk.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] font-[SailecBold] text-text hover:text-bright transition-colors duration-150"
                    >
                      {talk.title}
                    </a>
                  ) : (
                    <p className="text-[15px] font-[SailecBold] text-text/70">{talk.title}</p>
                  )}
                </div>
                {talk.year && (
                  <span className="text-[12px] text-muted tabular-nums shrink-0 sm:mt-1">{talk.year}</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="https://speakerdeck.com/dikethelmak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted hover:text-text transition-colors duration-150 flex items-center gap-1.5 group"
            >
              All decks on Speaker Deck
              <ExternalIcon />
            </a>
          </div>
        </div>
      )}

      {/* Writing */}
      {tab === 'writing' && (
        <div>
          <div className="flex flex-col divide-y divide-surface">
            {writings.map((piece) => (
              <div key={piece.title} className="py-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex flex-col gap-1 max-w-lg">
                  <a
                    href={piece.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-[SailecBold] text-text hover:text-bright transition-colors duration-150"
                  >
                    {piece.title}
                  </a>
                  <p className="text-[13px] text-muted leading-relaxed">{piece.subtitle}</p>
                  <span className="text-[11px] text-muted/60 uppercase tracking-[0.1em] font-[SailecBold] mt-0.5">
                    {piece.source}
                  </span>
                </div>
                <span className="text-[12px] text-muted tabular-nums shrink-0 sm:mt-1">{piece.date}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-6">
            <a
              href="https://notesfromtee.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted hover:text-text transition-colors duration-150 flex items-center gap-1.5 group"
            >
              All posts on Substack
              <ExternalIcon />
            </a>
            <a
              href="https://dikethelmak.medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-muted hover:text-text transition-colors duration-150 flex items-center gap-1.5 group"
            >
              Medium
              <ExternalIcon />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
