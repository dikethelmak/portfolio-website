import type { Metadata } from 'next'
import ArrowLink from '@/components/ArrowLink'

export const metadata: Metadata = {
  title: 'VerifySkn — Thelma Dike',
  description:
    'VerifySkn case study — Thelma Dike designed an AI-powered skincare authentication platform that helps consumers verify product authenticity via barcode scanning.',
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] uppercase tracking-[0.14em] text-muted/60 font-[SailecBold]">
      {children}
    </span>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 pt-20">
      <h2 className="text-[13px] uppercase tracking-[0.16em] text-muted font-[SailecBold]">
        {children}
      </h2>
    </div>
  )
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-accent/40 pl-5 py-1 my-6">
      <p className="text-[15px] text-text leading-[1.7]">{children}</p>
    </div>
  )
}

export default function VerifySknPage() {
  return (
    <div className="work-section">

      {/* Hero */}
      <div className="mb-16">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted/60 font-[SailecBold] mb-6">
          VerifySkn · 2024
        </p>
        <h1 className="text-[24px] sm:text-[30px] font-[SailecBold] text-text leading-[1.25] mb-8 max-w-3xl">
          AI-Powered Skincare Authentication for Consumers
        </h1>
        <p className="text-[16px] text-muted leading-[1.8] max-w-2xl mb-12">
          VerifySkn is a consumer tool that helps people verify whether their skincare products
          are genuine or counterfeit — using barcode scanning and AI-powered database
          cross-referencing. I designed the product experience from 0 to 1, focusing on speed,
          trust, and clarity of result.
        </p>

        {/* Meta grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
          <div>
            <Label>My Role</Label>
            <p className="text-[13px] text-text mt-2">Product Designer (0→1)</p>
          </div>
          <div>
            <Label>Deliverables</Label>
            <p className="text-[13px] text-text mt-2">Web App Design</p>
          </div>
          <div>
            <Label>Outcome</Label>
            <p className="text-[13px] text-text mt-2">Live product</p>
          </div>
          <div>
            <Label>Team</Label>
            <p className="text-[13px] text-text mt-2 leading-relaxed">
              Solo
            </p>
          </div>
        </div>
      </div>

      {/* Problem */}
      <SectionTitle>The Problem</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl">
        <p>
          Consumers purchasing skincare products — especially in markets with high counterfeit
          prevalence — have no reliable way to confirm authenticity at the point of purchase or
          after. The consequences range from wasted money to serious skin damage.
        </p>
        <p>
          Existing solutions require downloading apps, creating accounts, or navigating complex
          verification flows. The friction was too high for everyday consumers.
        </p>
      </div>

      {/* Solution */}
      <SectionTitle>The Solution</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl">
        <p>
          A lightweight web application — no download, no account — that lets users scan a
          product barcode (EAN-13 or UPC) via camera or manual entry and receive an instant
          AI-powered verdict: <strong className="text-text">Authentic</strong>,{' '}
          <strong className="text-text">Unverified</strong>, or{' '}
          <strong className="text-text">Suspicious</strong>.
        </p>
        <p>
          The design prioritised:
          <br />→ Zero-friction entry — works in any browser, no install required
          <br />→ Instant results — verdict delivered in seconds with confidence scoring
          <br />→ Trust signals — clear iconography and plain-language explanations
          <br />→ Educational packaging tips to help users make better purchasing decisions
        </p>
      </div>

      <PullQuote>
        No download. No account. A verdict in seconds — designed for the consumer who just wants
        to know if their product is real.
      </PullQuote>

      <ArrowLink href="https://verifyskn.vercel.app" external>
        View Live Product
      </ArrowLink>

      {/* Key Design Decisions */}
      <SectionTitle>Key Design Decisions</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl">
        <p>
          The verdict screen was the most critical design surface. I tested multiple approaches
          before landing on a result hierarchy that leads with the verdict status (large,
          colour-coded), followed by the confidence score, then contextual guidance — rather than
          burying the result in technical detail.
        </p>
        <p>
          Manual barcode entry was added after recognising that camera access is often denied or
          unavailable in low-bandwidth environments, which are common in the primary target market.
        </p>
      </div>

    </div>
  )
}
