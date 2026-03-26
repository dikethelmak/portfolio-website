import type { Metadata } from 'next'
import { ProjectImage } from '@/components/ProjectBlock'

export const metadata: Metadata = {
  title: 'Apple · Battery R&D — Thelma Dike',
  description:
    'Apple Battery R&D case study — Thelma Dike redesigned BDMS battery intelligence tools for Apple engineers, cutting test setup time by 50%.',
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

export default function AppleBatteryPage() {
  return (
    <div className="work-section">

      {/* Hero */}
      <div className="mb-16">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted/60 font-[SailecBold] mb-6">
          Apple · Battery R&amp;D · 2022 – 2025
        </p>
        <h1 className="text-[24px] sm:text-[30px] font-[SailecBold] text-text leading-[1.25] mb-8 max-w-3xl">
          UX Redesign of Apple&apos;s Internal Battery Performance Testing Platform
        </h1>
        <p className="text-[16px] text-muted leading-[1.8] max-w-2xl mb-12">
          BDMS is Apple&apos;s internal tool for requesting, monitoring, and analyzing battery
          performance tests. As the sole designer on a 3-year engagement via Monks, I led the
          full UX redesign — uncovering deep user needs through discovery and shipping a system
          that saved hundreds of engineering hours annually.
        </p>

        {/* Meta grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <Label>My Role</Label>
            <p className="text-[13px] text-text mt-2">Lead UX Designer</p>
          </div>
          <div>
            <Label>Deliverables</Label>
            <p className="text-[13px] text-text mt-2">BDMS UX Redesign · Discovery · Research</p>
          </div>
          <div>
            <Label>Outcome</Label>
            <p className="text-[13px] text-text mt-2">50% reduction in test setup time</p>
          </div>
          <div>
            <Label>Team</Label>
            <p className="text-[13px] text-text mt-2 leading-relaxed">
              PM · Engineers · QA (via Monks)
            </p>
          </div>
        </div>
      </div>

      <ProjectImage src="/assets/BDMS Cover.png" alt="Battery Intelligence Dashboard" />

      {/* Challenge */}
      <SectionTitle>The Challenge</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl">
        <p>
          Early designs were based on assumptions — we couldn&apos;t speak to users initially, so
          the platform was built around what the team believed engineers needed. This led to
          workflows that were technically functional but cumbersome in practice.
        </p>
        <p>
          The most critical surface was the test creation flow. Engineers ran dozens of battery
          tests weekly, and the cloning interface — a core step in test setup — was slow and
          error-prone.
        </p>
      </div>

      {/* Process */}
      <SectionTitle>The Process</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl">
        <p>
          After releasing key features, I initiated a full discovery phase — interviews, remote
          shadowing, workshops, and knowledge sharing. This uncovered real user needs that
          weren&apos;t visible from the outside.
        </p>
        <p>
          The discovery phase aligned stakeholders across the org and inspired other PMs to adopt
          the same approach on their tracks. The redesigned system streamlined workflows,
          simplified test setup, and made complex battery data easier to interpret.
        </p>
      </div>

      <PullQuote>
        &ldquo;The changes to the cloning interface cut my setup time in half.&rdquo; — Apple Engineer
      </PullQuote>

      {/* Result */}
      <SectionTitle>The Result</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl">
        <p>
          The redesigned platform boosted confidence and productivity across the engineering team.
          The discovery process we established became a template for future design initiatives
          within the org.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 mt-10 mb-10">
        <Stat value="50%" label="Reduction in battery test setup time after cloning interface redesign" />
        <Stat value="3yr" label="Long-term solo design engagement — sole designer across the full project" />
        <Stat value="100s" label="Engineering hours saved annually across the BDMS platform" />
      </div>

    </div>
  )
}
