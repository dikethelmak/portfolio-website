import type { Metadata } from 'next'
import { ProjectImage } from '@/components/ProjectBlock'
import ArrowLink from '@/components/ArrowLink'

export const metadata: Metadata = {
  title: 'RXGO — Thelma Dike',
  description:
    'RXGO case study — Thelma Dike designed a prescription savings mobile app that has helped millions of Americans save $50M+ on medications.',
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

export default function RxgoPage() {
  return (
    <div className="work-section">

      {/* Hero */}
      <div className="mb-16">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted/60 font-[SailecBold] mb-6">
          RXGO · 2020 – 2022
        </p>
        <h1 className="text-[24px] sm:text-[30px] font-[SailecBold] text-text leading-[1.25] mb-8 max-w-3xl">
          Prescription Savings App Helping Americans Reduce Medication Costs
        </h1>
        <p className="text-[16px] text-muted leading-[1.8] max-w-2xl mb-12">
          A significant challenge for many people is the high cost of prescription drugs. I was
          hired as a freelance designer to create a lightweight mobile app that helps Americans
          save money on their medications — simple, fast, and immediately useful.
        </p>

        {/* Meta grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
          <div>
            <Label>My Role</Label>
            <p className="text-[13px] text-text mt-2">Freelance Designer</p>
          </div>
          <div>
            <Label>Deliverables</Label>
            <p className="text-[13px] text-text mt-2">iOS App Design</p>
          </div>
          <div>
            <Label>Outcome</Label>
            <p className="text-[13px] text-text mt-2">$50M+ in savings</p>
          </div>
          <div>
            <Label>Team</Label>
            <p className="text-[13px] text-text mt-2 leading-relaxed">
              Stakeholders · Solo Designer
            </p>
          </div>
        </div>
      </div>

      <ProjectImage src="/assets/rxgo-main.png" alt="RXGO App" />

      {/* Challenge */}
      <SectionTitle>The Challenge</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl">
        <p>
          This project was focused on three core actions: searching for the best price, finding
          coupons, and easily accessing saved deals. Most existing tools were cluttered or
          required too many steps to get to a coupon.
        </p>
        <p>
          Coming from outside the U.S. healthcare system, I relied heavily on stakeholder
          expertise and extensive competitor analysis to understand the space and its unique
          challenges.
        </p>
      </div>

      <PullQuote>
        Simplify, simplify, simplify — removing friction from key flows was the single most
        important factor in the project&apos;s success.
      </PullQuote>

      {/* What I Designed */}
      <SectionTitle>What I Designed</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl mb-10">
        <p>
          The solution was a clean, focused app that put search and savings front and center. I
          focused heavily on simplifying each user flow — helping people go from search to savings
          in a matter of seconds.
        </p>
        <p>
          Every screen was designed around reducing cognitive load: minimal decisions per step,
          clear affordances, and a result hierarchy that leads with price savings rather than
          technical pharmacy details.
        </p>
      </div>

      <div className="mb-16">
        <ProjectImage src="/assets/rxgo-sub1.png" alt="RXGO App — Savings Flow" />
      </div>

      {/* Result */}
      <SectionTitle>The Result</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl mb-10">
        <p>
          The design&apos;s simplicity and real-world value have been consistently validated by
          positive reviews on the App Store. The product has helped millions of Americans save
          over $50 million on prescriptions to date.
        </p>
      </div>

      <div className="mb-10">
        <ProjectImage src="/assets/rxgo-ratings.png" alt="RXGO App Store Ratings" />
      </div>

      <ArrowLink
        href="https://apps.apple.com/us/app/rxgo-prescription-rx-coupons/id1533949987"
        external
      >
        View App
      </ArrowLink>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 mt-16 mb-10">
        <Stat value="$50M+" label="In prescription savings for Americans using the app" />
        <Stat value="Millions" label="Of users helped reduce out-of-pocket medication costs" />
        <Stat value="4.8★" label="Consistently high App Store rating, validated by positive user reviews" />
      </div>

    </div>
  )
}
