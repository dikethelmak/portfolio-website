import type { Metadata } from 'next'
import { ProjectImage } from '@/components/ProjectBlock'
import ArrowLink from '@/components/ArrowLink'

export const metadata: Metadata = {
  title: 'Softcom · Useforms — Thelma Dike',
  description:
    'Useforms case study — Thelma Dike led design of a flexible data collection platform for research organisations, shipped 0→1 with workspaces, form builder, templates, and response management.',
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

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-accent/40 pl-5 py-1 my-6">
      <p className="text-[15px] text-text leading-[1.7]">{children}</p>
    </div>
  )
}

function CaseVideo({ src, label }: { src: string; label: string }) {
  return (
    <div className="mb-16 rounded-2xl overflow-hidden border border-white/[0.06] bg-surface/30">
      <video
        src={src}
        aria-label={label}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto"
      />
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
          Softcom · Useforms · 2018 – 2020
        </p>
        <h1 className="text-[24px] sm:text-[30px] font-[SailecBold] text-text leading-[1.25] mb-8 max-w-3xl">
          Designing for Efficient Data Collection
        </h1>
        <p className="text-[16px] text-muted leading-[1.8] max-w-2xl mb-12">
          Useforms is a platform that makes collecting and accessing reliable data convenient —
          providing flexible forms that can be used to gather data anywhere, anytime. As Lead
          Product Designer at Softcom, I took this from 0 to 1, partnering with product and
          engineering to ship a platform trusted by research companies across Nigeria.
        </p>

        {/* Meta grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <Label>My Role</Label>
            <p className="text-[13px] text-text mt-2">Lead Product Designer</p>
          </div>
          <div>
            <Label>Deliverables</Label>
            <p className="text-[13px] text-text mt-2">Web App · Form Builder · Templates · Response Management</p>
          </div>
          <div>
            <Label>Outcome</Label>
            <p className="text-[13px] text-text mt-2">500,000+ lives impacted</p>
          </div>
          <div>
            <Label>Team</Label>
            <p className="text-[13px] text-text mt-2 leading-relaxed">
              Design Lead · PM · Engineering Lead · 3 FE · 1 BE · QA
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
          transportation, and other factors frequently lead to lost or incomplete data.
        </p>
        <p>
          There was also the issue of validating collected data — some agents collected the same
          data multiple times, making it unreliable. Business owners and researchers had no
          trusted, scalable way to collect and verify field data.
        </p>
      </div>

      <PullQuote>
        After various sessions with users, we set out to build a solution that helps research
        companies collect data effortlessly — and trust the data they&apos;ve collected.
      </PullQuote>

      <div className="mb-4">
        <ProjectImage src="/assets/Useforms.jpeg" alt="Useforms — Create and manage forms easily" />
      </div>

      {/* What I Designed */}
      <SectionTitle>What I Designed</SectionTitle>

      {/* Workspaces */}
      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        Workspaces &amp; Folders
      </h3>
      <p className="text-[15px] text-muted leading-[1.85] max-w-2xl mb-8">
        Research companies collect data for multiple organisations simultaneously. We created
        workspaces to separate information between different organisations, and folders to group
        similar forms within each workspace — giving teams a clear, structured way to manage
        large volumes of ongoing data collection.
      </p>

      <CaseVideo src="/assets/Workspaces%26folders\.mp4" label="Creating workspaces and folders" />

      {/* Form Cards */}
      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        Form Cards
      </h3>
      <p className="text-[15px] text-muted leading-[1.85] max-w-2xl mb-8">
        We paid close attention to the details of form cards — surfacing response counts and
        question totals at a glance, a share icon for quick redistribution, collaborator
        management, and contextual actions — all without overwhelming the interface.
      </p>

      <div className="mb-16">
        <ProjectImage src="/assets/useforms2.png" alt="Useforms — Form Cards" />
      </div>

      {/* Form Builder */}
      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        Form Builder
      </h3>
      <p className="text-[15px] text-muted leading-[1.85] max-w-2xl mb-8">
        The form builder is the core of the platform. We ensured form elements were grouped
        logically so users could discover them faster. After creating a form, users can preview
        or share directly without leaving the builder. We also added collaborator management and
        conditional logic — allowing if-else rules on choice questions — making it powerful
        enough for complex research instruments without adding unnecessary complexity.
      </p>

      <CaseVideo src="/assets/Form%20Builder\.mp4" label="Creating a form" />

      {/* Templates */}
      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        Templates
      </h3>
      <p className="text-[15px] text-muted leading-[1.85] max-w-2xl mb-8">
        To reduce friction in form creation, we introduced a library of pre-built templates.
        When a user clicks &ldquo;Create a form&rdquo;, they see a list of ready-made templates
        alongside the option to build from scratch — eliminating the blank-slate problem and
        helping teams move faster on recurring research tasks.
      </p>

      <CaseVideo src="/assets/Templates\.mp4" label="Creating a form using an existing template" />

      {/* Share Form */}
      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        Sharing &amp; Distribution
      </h3>
      <p className="text-[15px] text-muted leading-[1.85] max-w-2xl mb-8">
        Once a form is ready, Useforms generates a shareable link that can be embedded on a
        website or shared across platforms. For research companies, forms can be sent to specific
        agents via email or to organised agent groups. We also built a re-share mechanism —
        allowing the same form to be redistributed multiple times across different periods,
        helping teams collect and compare data over time without duplicating setup work.
      </p>

      <CaseVideo src="/assets/Share%20Form\.mp4" label="Sharing a form" />

      {/* Response Management */}
      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        Response Management
      </h3>
      <p className="text-[15px] text-muted leading-[1.85] max-w-2xl mb-8">
        We designed a responses view that makes it easy to discover and validate collected data.
        Users can set rules to accept or reject submissions, view the location and time each
        response was collected — building trust in the data — and sync responses to external
        analytics tools like Power BI and Google Sheets for deeper analysis.
      </p>

      <CaseVideo src="/assets/Results\.mp4" label="Viewing responses and downloading them" />

      {/* Result */}
      <SectionTitle>The Result</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl mb-10">
        <p>
          We shipped a platform with a seamless experience and a clean, accessible interface.
          Usability testing confirmed the approach — participants found it intuitive and
          significantly easier than existing alternatives.
        </p>
        <p>
          2025 Update: Softcom has since sunset Useforms to focus on their broader platform
          portfolio — which has now impacted over 500,000 lives across Nigeria.
        </p>
      </div>

      <ArrowLink
        href="https://www.linkedin.com/posts/useforms_askwithuseforms-useforms-activity-6853611554722709504-9MGT/?rcm=ACoAACJyDA0BwGlKogofjPeOmZlhRyLg_ijUa2w"
        external
      >
        Watch Useforms in action
      </ArrowLink>

      <div className="mb-16 mt-10">
        <ProjectImage src="/assets/useforms3.png" alt="Useforms Outcome" />
      </div>

      {/* Learnings */}
      <SectionTitle>Learnings</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl mb-8">
        <p>
          This was a genuinely exciting project — it provides real value, involved extensive
          research, and required detailed interaction design. Shifting priorities and changing
          roadmaps delayed the launch, but the experience produced lasting lessons.
        </p>
      </div>

      <div className="flex flex-col gap-4 text-[15px] text-muted leading-[1.85] max-w-2xl mb-10">
        <p>
          <strong className="text-text">Delivering value under tight deadlines</strong> — New
          timelines, resourcing changes, and reprioritization meant the scope was constantly
          shifting. I had to adapt quickly and still deliver high-quality designs under pressure.
        </p>
        <p>
          <strong className="text-text">Choosing what to leave out</strong> — Many compelling use
          cases could have been tackled, but every one came at a cost. I worked closely with the
          PM and Engineering Lead to determine what was genuinely feasible within our timeframe.
        </p>
        <p>
          <strong className="text-text">Accessibility from the start</strong> — I came to
          understand how critical it is to build for people with disabilities from day one, not as
          an afterthought. This is something I now enforce from the very beginning of any project.
        </p>
        <p>
          <strong className="text-text">Always design responsively</strong> — We didn&apos;t ship
          a strong responsive view on this project due to time constraints — a gap I learned never
          to accept again on future platforms.
        </p>
      </div>

      <Callout>
        Scope changes are inevitable. Ship what matters, validate early, and design
        accessibly — even when time is tight.
      </Callout>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 mt-10 mb-10">
        <Stat value="500K+" label="Lives impacted by Softcom&apos;s platform portfolio" />
        <Stat value="3" label="Surfaces shipped — web app, mobile app, and field agent app" />
        <Stat value="0→1" label="Full product lifecycle, from discovery through usability testing" />
      </div>

    </div>
  )
}
