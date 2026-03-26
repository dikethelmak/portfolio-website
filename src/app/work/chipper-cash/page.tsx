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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <Label>My Role</Label>
            <p className="text-[13px] text-text mt-2">Senior Product Designer</p>
            <p className="text-[12px] text-muted mt-1">0 → 1</p>
          </div>
          <div>
            <Label>Deliverables</Label>
            <p className="text-[13px] text-text mt-2">KYC Flow · Merchant API · USD Accounts</p>
          </div>
          <div>
            <Label>Outcome</Label>
            <p className="text-[13px] text-text mt-2">$9B+ transactions · $800K saved · 31K+ USD accounts</p>
          </div>
          <div>
            <Label>Team</Label>
            <p className="text-[13px] text-text mt-2 leading-relaxed">
              Product · Engineering · Sales
            </p>
          </div>
        </div>
      </div>

      <ProjectImage src="/assets/ChipperCash Cover.png" alt="Chipper Cash" />

      {/* What I Did */}
      <SectionTitle>What I Did</SectionTitle>

      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        KYC Flow Redesign
      </h3>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl mb-10">
        <p>
          Our KYC system had three structural problems: a $800K/year third-party vendor we had
          no control over, a six-step onboarding flow that hadn&apos;t kept pace with regulatory
          changes across Nigeria, Ghana, and Rwanda, and a USD card activation path that was
          passive and buried.
        </p>
        <p>
          Over three phases, I led the design of an in-house verification system to replace the
          vendor, collapsed the flow from six steps to two by aligning with updated country
          databases, and introduced itemized onboarding with contextual card activation prompts
          at the highest-intent moment in the user journey.
        </p>
      </div>

      <PullQuote>
        The result: $800K saved annually, average onboarding time down 97% — from 4.5 hours
        in January to under 8 minutes by March — with 98% of users completing in under 5
        minutes. A compliance hurdle converted into an active conversion path for
        Chipper&apos;s most valuable product.
      </PullQuote>

      <div className="rounded-xl overflow-hidden mb-3">
        <video
          src="/assets/ChipperCash Onboarding.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-full"
        />
      </div>
      <p className="text-[11px] uppercase tracking-[0.14em] text-muted/50 font-[SailecBold] mb-16">
        New Onboarding Flow
      </p>

      {/* Merchant API */}
      <h3 className="text-[17px] font-[SailecBold] text-text mb-6 pt-10">
        Merchant API Dashboard
      </h3>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl">
        <p>
          Merchants integrating with the API had no self-service path — every step relied on the
          sales team to onboard, generate API keys, and pull transaction data. This created a
          bottleneck that slowed growth and made it harder to scale high-value merchant relationships.
        </p>
        <p>
          I led the design of a self-serve dashboard giving merchants full control: generate API
          keys, monitor and categorise transactions, export data, manage refunds, and view
          balances in relevant currencies — with no sales team involvement required.
        </p>
        <p>
          The dashboard launched among merchants, sales team dependency dropped noticeably and
          the API has since powered $9B+ in transaction volume across markets.
        </p>
      </div>

      <PullQuote>
        $9B+ in API-driven transactions.
      </PullQuote>

      <div className="mt-6 mb-3">
        <ProjectImage src="/assets/Chipper Merchant3.png" alt="Payments list" />
      </div>
      <p className="text-[11px] uppercase tracking-[0.14em] text-muted/50 font-[SailecBold] mb-6">
        Payments list
      </p>

      <div className="mt-6 mb-3">
        <ProjectImage src="/assets/Chipper Merchant1.png" alt="Payment details" />
      </div>
      <p className="text-[11px] uppercase tracking-[0.14em] text-muted/50 font-[SailecBold] mb-6">
        Payment details
      </p>

      <div className="mt-6 mb-3">
        <ProjectImage src="/assets/Chipper Merchant2.png" alt="API keys generated" />
      </div>
      <p className="text-[11px] uppercase tracking-[0.14em] text-muted/50 font-[SailecBold] mb-6">
        API keys generated
      </p>

      {/* USD Virtual Accounts */}
      <h3 className="text-[17px] font-[SailecBold] text-text mb-6 pt-10">
        USD Virtual Accounts
      </h3>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl">
        <p>
          For millions of Africans — freelancers, creators, remote workers — receiving
          international payments meant navigating fragmented systems, steep fees, or no
          viable path at all. Access to U.S. banking infrastructure was the gap.
        </p>
        <p>
          I led the design of Chipper&apos;s USD Virtual Account feature: a product that gives
          users real U.S. bank details to receive payments globally in dollars. The design
          required navigating regulatory requirements across markets and coordinating closely
          with business and compliance partners to ship something that was both viable and
          frictionless.
        </p>
        <p>
          The feature helped reposition Chipper beyond peer-to-peer transfers — into a
          platform for the African creator and freelancer economy.
        </p>
      </div>

      <PullQuote>
        31,977 USD virtual accounts issued. $11M+ in total deposits across two provider
        integrations since launch.
      </PullQuote>

      <div className="mb-16">
        <ProjectImage src="/assets/usd va.gif" alt="USD Virtual Accounts" />
      </div>

      <ArrowLink
        href="https://www.chippercash.com/blog/chipper-introduces-usd-account-open-instantly-get-paid-in-dollars-directly"
        external
      >
        Media Release
      </ArrowLink>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-8 mt-16 mb-10">
        <Stat value="$9B+" label="API-driven transactions to date" />
        <Stat value="$800K" label="Saved annually in KYC vendor costs" />
        <Stat value="97%" label="Reduction in average onboarding time" />
        <Stat value="31K+" label="USD virtual accounts issued · $11M+ in deposits" />
      </div>

    </div>
  )
}
