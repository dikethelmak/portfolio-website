import type { Metadata } from 'next'
import Image from 'next/image'
import TravelSlider from '@/components/TravelSlider'

export const metadata: Metadata = {
  title: 'About — Thelma Dike',
  description:
    'Senior Product Designer with 8 years of experience across AI infrastructure, fintech, and enterprise tooling.',
}

const experience = [
  {
    period: '2022–Now',
    company: 'Chipper Cash',
    role: 'Senior Product Designer',
    url: 'https://chippercash.com',
  },
  {
    period: '2022–2025',
    company: 'Monks',
    role: 'Product Designer · Consultant',
    url: 'https://monks.com',
  },
  {
    period: '2021–2022',
    company: 'Flutterwave',
    role: 'Product Designer',
    url: 'https://flutterwave.com',
  },
  {
    period: '2020–2022',
    company: 'RXGO',
    role: 'Product Designer · Freelance',
    url: null,
  },
  {
    period: '2018–2020',
    company: 'Softcom',
    role: 'Lead Product Designer',
    url: null,
  },
]

const focus = [
  'AI Infrastructure',
  'Fintech',
  'Developer Tooling',
  'Enterprise UX',
  'Design Systems',
  '0 → 1 Products',
]

export default function AboutPage() {
  return (
    <main id="main-content" className="px-6 md:px-12 max-w-3xl mx-auto pt-16 pb-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end gap-8 mb-20">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shrink-0">
          <Image
            src="/assets/aboutme-main.png"
            alt="Thelma Dike"
            width={144}
            height={144}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.14em] text-accent font-[SailecBold] mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
            Available for senior roles · UK
          </p>
          <h1 className="text-[24px] sm:text-[30px] font-[SailecBold] text-text leading-tight mb-2">
            Thelma Dike
          </h1>
          <p className="text-base text-muted">
            Senior Product Designer — Lagos, Nigeria
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="mb-20">
        <p className="text-[11px] uppercase tracking-[0.14em] text-muted font-[SailecBold] mb-6">
          Background
        </p>
        <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.8] max-w-2xl">
          <p>
            I&apos;m a CS graduate turned product designer with 8 years of experience shipping
            high-stakes tools across three continents. I specialise in environments where complexity
            is unavoidable and precision is non-negotiable — AI infrastructure, fintech, and
            developer tooling.
          </p>
          <p>
            My career has spanned the full spectrum: from designing the API dashboard that unlocked
            $9B+ in transactions at Chipper Cash, to making private 5G AI deployment accessible to
            creative partners without DevOps backgrounds at Verizon, to cutting battery test setup
            time in half for engineers at Apple.
          </p>
          <p>
            I care deeply about how products feel in the hands of expert users — the people who
            live in these tools all day. A wrong click shouldn&apos;t have consequences. I&apos;m
            currently based in Lagos and actively targeting senior roles in the UK deep-tech and AI
            space.
          </p>
        </div>
      </div>

      {/* Status */}
      <div className="mb-20">
        <p className="text-[11px] uppercase tracking-[0.14em] text-muted font-[SailecBold] mb-6">
          Status
        </p>
        <div className="flex flex-col gap-2">
          <p className="text-[15px] font-[SailecBold] text-text">Lagos → London</p>
          <p className="text-[14px] text-muted leading-relaxed">
            Tech Nation Global Talent endorsement in progress, open to sponsorships.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-20">
        <p className="text-[11px] uppercase tracking-[0.14em] text-muted font-[SailecBold] mb-6">
          Experience
        </p>
        <div className="flex flex-col divide-y divide-surface">
          {experience.map(({ period, company, role, url }) => (
            <div
              key={company}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-1"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                <span className="text-[12px] text-muted tabular-nums w-24 shrink-0">{period}</span>
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-[SailecBold] text-text hover:text-bright transition-colors"
                  >
                    {company}
                  </a>
                ) : (
                  <span className="text-[15px] font-[SailecBold] text-text">{company}</span>
                )}
              </div>
              <span className="text-[13px] text-muted sm:text-right">{role}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Focus areas */}
      <div className="mb-20">
        <p className="text-[11px] uppercase tracking-[0.14em] text-muted font-[SailecBold] mb-6">
          Focus Areas
        </p>
        <div className="flex flex-wrap gap-2">
          {focus.map((f) => (
            <span
              key={f}
              className="text-[12px] text-muted border border-muted/30 rounded-full px-4 py-1.5"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Writing & Speaking */}
      <div className="mb-20">
        <p className="text-[11px] uppercase tracking-[0.14em] text-muted font-[SailecBold] mb-6">
          Writing &amp; Speaking
        </p>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2.5 border-t border-surface gap-1">
            <a
              href="https://thelmadike.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-[SailecBold] text-text hover:text-bright transition-colors"
            >
              Substack
            </a>
            <span className="text-[13px] text-muted">Long-form design thinking</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2.5 border-t border-surface gap-1">
            <a
              href="https://speakerdeck.com/dikethelmak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-[SailecBold] text-text hover:text-bright transition-colors"
            >
              MumsWhoCode IWD 2026
            </a>
            <span className="text-[13px] text-muted">Generative workflows in product design</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between py-2.5 border-t border-surface gap-1">
            <span className="text-[15px] font-[SailecBold] text-text/60">
              Nigeria Innovation Summit 2026
            </span>
            <span className="text-[13px] text-accent">Upcoming</span>
          </div>
        </div>
      </div>

      {/* <TravelSlider /> */}

    </main>
  )
}
