import type { Metadata } from 'next'
import { ProjectImage } from '@/components/ProjectBlock'
import ArrowLink from '@/components/ArrowLink'

export const metadata: Metadata = {
  title: 'Softcom — Thelma Dike',
  description:
    'Softcom case study — Thelma Dike led design of Useforms, a data collection platform impacting 500,000+ lives across Nigeria.',
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

function Callout({ children }: { children: React.ReactNode }) {
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

export default function SoftcomPage() {
  return (
    <div className="work-section">

      {/* Hero */}
      <div className="mb-16">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted/60 font-[SailecBold] mb-6">
          Softcom · 2018 – 2020
        </p>
        <h1 className="text-[24px] sm:text-[30px] font-[SailecBold] text-text leading-[1.25] mb-8 max-w-3xl">
          Useforms — A Platform for Flexible Data Collection and Visualization
        </h1>
        <p className="text-[16px] text-muted leading-[1.8] max-w-2xl mb-12">
          Softcom is a leading tech solutions company in Lagos, Nigeria, with solutions impacting
          over 500,000 lives. As Lead Product Designer on their in-house product Useforms, I
          partnered with product and engineering to design a data collection platform that works
          anywhere — online or off.
        </p>

        {/* Meta grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <Label>My Role</Label>
            <p className="text-[13px] text-text mt-2">Lead Product Designer</p>
          </div>
          <div>
            <Label>Deliverables</Label>
            <p className="text-[13px] text-text mt-2">Web App · Mobile App · Field Agent App</p>
          </div>
          <div>
            <Label>Outcome</Label>
            <p className="text-[13px] text-text mt-2">500,000+ lives impacted</p>
          </div>
          <div>
            <Label>Team</Label>
            <p className="text-[13px] text-text mt-2 leading-relaxed">
              PM · 3 FE · 1 BE · QA · Design Lead
            </p>
          </div>
        </div>
      </div>

      <ProjectImage src="/assets/useformsmain.png" alt="Useforms Platform Overview" />

      {/* Problem */}
      <SectionTitle>The Problem</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl">
        <p>
          Collecting data for research companies is painstaking and time-consuming. Organizations
          assign agents to different locations, who move around using paper and pen. Weather,
          transportation, and other factors frequently lead to lost data.
        </p>
        <p>
          There was also the issue of validating collected data — some agents collected the same
          data multiple times, making it unreliable. Business owners and researchers had no
          trusted, scalable way to collect and verify field data.
        </p>
      </div>

      {/* Solution */}
      <SectionTitle>The Solution</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl">
        <p>
          After extensive user sessions, we decided to build a platform that helps business owners
          and researchers collect data effortlessly — and trust what they&apos;ve collected.
        </p>
        <p>
          We created a full web application with form builders and data visualization for
          organizations, a pool of vetted field agents, and a mobile app for collecting and
          uploading data in the field. Organizations push surveys to their own users or our field
          agents; the data uploads automatically to their dashboard.
        </p>
      </div>

      <ArrowLink
        href="https://www.linkedin.com/posts/useforms_askwithuseforms-useforms-activity-6853611554722709504-9MGT/?rcm=ACoAACJyDA0BwGlKogofjPeOmZlhRyLg_ijUa2w"
        external
      >
        Learn More
      </ArrowLink>

      {/* What I Designed */}
      <SectionTitle>What I Designed</SectionTitle>

      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        Workspaces &amp; Folders
      </h3>
      <p className="text-[15px] text-muted leading-[1.85] max-w-2xl mb-8">
        Research companies collect data for multiple organizations simultaneously. We created
        workspaces to separate information between different organizations, and folders to group
        similar forms within each.
      </p>

      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        Form Creation
      </h3>
      <p className="text-[15px] text-muted leading-[1.85] max-w-2xl mb-8">
        Creating forms is the most critical surface on the platform — it&apos;s used to collect
        data from respondents. We spent significant time polishing this experience to ensure
        readability and accessibility across devices and environments.
      </p>

      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        Form Cards
      </h3>
      <p className="text-[15px] text-muted leading-[1.85] max-w-2xl mb-8">
        We paid close attention to form card details — showing response counts and question
        totals, a share icon for quick redistribution, collaborator management, and contextual
        actions — all without overwhelming the interface.
      </p>

      <div className="mb-16">
        <ProjectImage src="/assets/useforms1.png" alt="Useforms — Workspaces, Forms, Cards" />
      </div>

      {/* Result */}
      <SectionTitle>The Result</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl mb-10">
        <p>
          We shipped a platform with a seamless user experience and a clean, accessible interface.
          Usability testing confirmed the approach — users found it intuitive and significantly
          easier than existing alternatives.
        </p>
        <p>
          2025 Update: The company has since sunset this product to focus on other key offerings.
        </p>
      </div>

      <div className="mb-16">
        <ProjectImage src="/assets/useforms2.png" alt="Useforms Outcome" />
      </div>

      {/* Learnings */}
      <SectionTitle>Learnings</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl mb-10">
        <p>
          This project involved a ton of research and detailed interaction work. Shifting
          priorities and changing roadmaps delayed launch, but the experience produced lasting
          lessons.
        </p>
      </div>

      <Callout>
        Deliver high-quality designs under tight deadlines · Prioritize feasible features by
        partnering with engineering · Enforce accessibility standards from the start · Always
        design responsively, even under time pressure.
      </Callout>

      <div className="mb-10">
        <ProjectImage src="/assets/useforms3.png" alt="Useforms Learnings" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 mt-10 mb-10">
        <Stat value="500K+" label="Lives impacted by Softcom&apos;s platform portfolio" />
        <Stat value="3" label="Surfaces shipped — web app, mobile app, and field agent app" />
        <Stat value="0→1" label="Full product design lifecycle, from discovery through usability testing" />
      </div>

    </div>
  )
}
