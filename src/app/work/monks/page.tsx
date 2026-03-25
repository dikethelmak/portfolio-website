import type { Metadata } from 'next'
import { ProjectImage } from '@/components/ProjectBlock'
import ArrowLink from '@/components/ArrowLink'

export const metadata: Metadata = {
  title: 'Monks — Thelma Dike',
  description:
    'Monks case study — Thelma Dike redesigned BDMS battery intelligence tools for a Fortune 500 client and designed Verizon Ceres, a platform for AI deployment on private 5G.',
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

export default function MonksPage() {
  return (
    <div className="work-section">

      {/* Hero */}
      <div className="mb-16">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted/60 font-[SailecBold] mb-6">
          Monks · 2022 – 2024
        </p>
        <h1 className="text-[24px] sm:text-[30px] font-[SailecBold] text-text leading-[1.25] mb-8 max-w-3xl">
          Senior UX Design Consulting for Fortune 500 Clients Across Tech and Media
        </h1>
        <p className="text-[16px] text-muted leading-[1.8] max-w-2xl mb-12">
          Monks is a global digital-first agency creating technology and marketing solutions for
          top-tier clients including Google, Meta, Amazon, and Walmart. In a hybrid
          consultant/designer role, I worked directly with Fortune 500, Verizon, and Equifax to
          gather requirements and ship product.
        </p>

        {/* Meta grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
          <div>
            <Label>My Role</Label>
            <p className="text-[13px] text-text mt-2">UX Designer / Consultant</p>
          </div>
          <div>
            <Label>Deliverables</Label>
            <p className="text-[13px] text-text mt-2">BDMS Redesign · Verizon Ceres</p>
          </div>
          <div>
            <Label>Outcome</Label>
            <p className="text-[13px] text-text mt-2">2 major Fortune 500 engagements</p>
          </div>
          <div>
            <Label>Team</Label>
            <p className="text-[13px] text-text mt-2 leading-relaxed">
              PMs · Staff Engineers · Client Stakeholders
            </p>
          </div>
        </div>
      </div>

      <ProjectImage src="/assets/bdms.webp" alt="Battery Intelligence Dashboard" />

      {/* Battery Intelligence */}
      <SectionTitle>Battery Intelligence</SectionTitle>

      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        Fortune 500 / Apple — BDMS
      </h3>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl">
        <p>
          As the sole designer on a 3-year project for a Fortune 500 client, I led the UX
          redesign of BDMS, an internal tool for requesting, monitoring, and analyzing battery
          performance tests.
        </p>
        <p>
          Since we couldn&apos;t speak to users initially, early designs were based on
          assumptions. After releasing key features, I initiated a full discovery phase —
          interviews, remote shadowing, workshops, and knowledge sharing.
        </p>
        <p>
          This uncovered user needs, aligned stakeholders, and inspired other PMs to adopt our
          approach. The redesigned system streamlined workflows, simplified test setup, and made
          complex data easier to interpret.
        </p>
      </div>

      <PullQuote>
        Hundreds of hours saved annually for engineers — boosting confidence, productivity, and
        creating a scalable platform for future iteration.
      </PullQuote>

      {/* Verizon Ceres */}
      <SectionTitle>Verizon Ceres</SectionTitle>

      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        Resource management for on-prem AI clusters
      </h3>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl mb-10">
        <p>
          As part of a Verizon–NVIDIA–Monks initiative, I joined as the sole designer on a
          12-week sprint to shape Ceres, a next-gen platform for deploying AI media apps on
          private 5G. The infrastructure was built, but my role was to make it usable for
          creative partners without DevOps backgrounds.
        </p>
        <p>
          I designed key beta workflows:
          <br />→ Multi-tenant partner management
          <br />→ Tools for partner app deployment and lifecycle management
          <br />→ Functionality for deploying and controlling sandbox environments
          <br />→ UI integration of the NVIDIA NIM library to support AI model access
        </p>
        <p>
          This foundation now powers live AI pipelines and on-site media workflows across
          Verizon&apos;s private 5G network.
        </p>
      </div>

      <div className="mb-10">
        <ProjectImage src="/assets/verizon.png" alt="Verizon Ceres Platform" />
      </div>

      <ArrowLink
        href="https://www.verizon.com/about/news/verizon-nvidia-power-ai-workloads-5g-private-networks-mec"
        external
      >
        Verizon Official Release
      </ArrowLink>

    </div>
  )
}
