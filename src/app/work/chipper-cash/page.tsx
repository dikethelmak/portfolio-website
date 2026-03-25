import type { Metadata } from 'next'
import { ProjectImage } from '@/components/ProjectBlock'
import ArrowLink from '@/components/ArrowLink'

export const metadata: Metadata = {
  title: 'Chipper Cash — Thelma Dike',
  description:
    'Chipper Cash case study — Thelma Dike designed the Merchant API dashboard, KYC redesign, and USD virtual accounts powering $9B+ in transactions.',
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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2 py-8">
      <span className="text-[40px] font-[SailecBold] text-bright leading-none">{value}</span>
      <span className="text-[13px] text-muted leading-relaxed">{label}</span>
    </div>
  )
}

export default function ChipperCashPage() {
  return (
    <div className="work-section">

      {/* Hero */}
      <div className="mb-16">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted/60 font-[SailecBold] mb-6">
          Chipper Cash · 2022 – Current
        </p>
        <h1 className="text-[24px] sm:text-[30px] font-[SailecBold] text-text leading-[1.25] mb-8 max-w-3xl">
          Product Design Across Core Growth Initiatives at Africa&apos;s Leading Fintech
        </h1>
        <p className="text-[16px] text-muted leading-[1.8] max-w-2xl mb-12">
          Chipper Cash is a financial technology company providing cross-border remittance and
          payment solutions across Africa. As Senior Product Designer, I led high-impact initiatives
          spanning merchant tooling, identity verification, and international payments.
        </p>

        {/* Meta grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
          <div>
            <Label>My Role</Label>
            <p className="text-[13px] text-text mt-2">Senior Product Designer</p>
          </div>
          <div>
            <Label>Deliverables</Label>
            <p className="text-[13px] text-text mt-2">Merchant API · KYC Flow · USD Accounts</p>
          </div>
          <div>
            <Label>Outcome</Label>
            <p className="text-[13px] text-text mt-2">$9B+ in transactions · $800K saved</p>
          </div>
          <div>
            <Label>Team</Label>
            <p className="text-[13px] text-text mt-2 leading-relaxed">
              Product · Engineering · Sales
            </p>
          </div>
        </div>
      </div>

      <ProjectImage src="/assets/napi.gif" alt="Merchant API Dashboard" />

      {/* Merchant API */}
      <SectionTitle>Merchant API Dashboard</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl">
        <p>
          When merchants were integrating with our API, they relied solely on the sales team to
          onboard, generate API keys, and view transactions. This not only slowed down growth and
          overwhelmed the sales team, it made it difficult to onboard high-value merchants faster.
        </p>
        <p>
          I designed and launched a self-serve dashboard that gave merchants full control to
          generate keys, monitor transactions, and manage accounts with little or no human
          intervention. This reduced the sales team&apos;s workload, reduced onboarding time, and
          helped power over $9B in API-driven transactions to date.
        </p>
      </div>

      <PullQuote>
        Reduced the sales team&apos;s workload and helped power over $9B in API-driven transactions.
      </PullQuote>

      <div className="mt-2">
        <ArrowLink href="https://www.chippercash.com/api" external>
          API Website
        </ArrowLink>
      </div>

      {/* KYC */}
      <SectionTitle>KYC Flow Redesign</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl mb-10">
        <p>
          When we needed to streamline vendor costs, I led two critical redesigns of Chipper
          Cash&apos;s KYC flow. First, replacing our third-party Veriface vendor with an in-house
          facial recognition model, saving the company over $800K annually.
        </p>
        <p>
          And much later, I optimized the entire flow for speed and clarity across markets,
          resulting in a 2% uplift in verification completion. Together, these efforts streamlined
          onboarding, saved costs, and reduced drop-off rates.
        </p>
      </div>

      <ProjectImage src="/assets/beforexafter2.png" alt="KYC Redesign — Before" />

      <div className="mb-16">
        <ProjectImage src="/assets/beforexafter1.png" alt="KYC Redesign — After" />
      </div>

      <div className="mt-2">
        <ArrowLink
          href="https://www.chippercash.com/blog/how-ai-is-revolutionizing-the-tech-industry-in-africa"
          external
        >
          How We Did It
        </ArrowLink>
      </div>

      {/* USD Virtual Accounts */}
      <SectionTitle>USD Virtual Accounts</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl mb-10">
        <p>
          Millions of Nigerians lack easy access to receive international payments. The USD Virtual
          Account gives users U.S. bank details and the ability to receive money globally in USD.
        </p>
        <p>
          I led the design of this cross-border feature, factoring in the regulatory requirements
          of the country and our business partners. This has helped Chipper reposition as a
          platform for freelancers and creators, not just peer-to-peer transfers.
        </p>
        <p>
          Since launch, we&apos;ve issued over 15,000 USD accounts, processed 20,000 payment links
          and $5M+ in transactions.
        </p>
      </div>

      <div className="mb-16">
        <ProjectImage src="/assets/usd va.gif" alt="USD Virtual Accounts" />
      </div>

      <ArrowLink
        href="https://www.chippercash.com/blog/chipper-introduces-usd-account-open-instantly-get-paid-in-dollars-directly"
        external
      >
        Media Release
      </ArrowLink>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 mt-16 mb-10">
        <Stat value="$9B+" label="In API-driven transactions powered by the self-serve Merchant Dashboard" />
        <Stat value="$800K" label="Saved annually by replacing the third-party KYC vendor with in-house AI" />
        <Stat value="15K+" label="USD virtual accounts issued since launch, with $5M+ in transactions" />
      </div>

    </div>
  )
}
