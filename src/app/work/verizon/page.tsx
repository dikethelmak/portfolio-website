import type { Metadata } from 'next'
import { ProjectImage } from '@/components/ProjectBlock'

export const metadata: Metadata = {
  title: 'Verizon · Ceres — Thelma Dike',
  description:
    'Verizon Ceres case study — AI deployment platform for private 5G, RBAC and multi-tenancy UX, featured at GTC & NAB 2025.',
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] uppercase tracking-[0.14em] text-muted/60 font-[SailecBold]">
      {children}
    </span>
  )
}

function SectionTitle({ symbol: _symbol, children }: { symbol?: string; children: React.ReactNode }) {
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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2 py-8">
      <span className="text-[40px] font-[SailecBold] text-bright leading-none">{value}</span>
      <span className="text-[13px] text-muted leading-relaxed">{label}</span>
    </div>
  )
}

function RoleCard({ role, description }: { role: string; description: string }) {
  return (
    <div className="p-5 rounded-2xl border border-white/[0.06] bg-surface/30 flex flex-col gap-2">
      <p className="text-[13px] font-[SailecBold] text-text">{role}</p>
      <p className="text-[13px] text-muted leading-relaxed">{description}</p>
    </div>
  )
}

export default function VerizonPage() {
  return (
    <div className="work-section">

      {/* Hero */}
      <div className="mb-16">
        <p className="text-[11px] uppercase tracking-[0.16em] text-muted/60 font-[SailecBold] mb-6">
          Verizon · Ceres · 2025
        </p>
        <h1 className="text-[24px] sm:text-[30px] font-[SailecBold] text-text leading-[1.25] mb-8 max-w-3xl">
          AI Deployment Platform for Private 5G Infrastructure
        </h1>
        <p className="text-[16px] text-muted leading-[1.8] max-w-2xl mb-12">
          Ceres is Verizon&apos;s platform for deploying and managing containerised AI apps over
          Private 5G. It runs on a 5-node K8s cluster with NVIDIA L40S and H100 GPUs, at 4ms
          latency in air-gapped venue environments — no cloud dependency.
        </p>

        {/* Meta grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
          <div>
            <Label>My Role</Label>
            <p className="text-[13px] text-text mt-2">Senior UX Designer</p>
          </div>
          <div>
            <Label>Deliverables</Label>
            <p className="text-[13px] text-text mt-2">RBAC UX · Multi-Tenancy · Monitoring</p>
          </div>
          <div>
            <Label>Outcome</Label>
            <p className="text-[13px] text-text mt-2">Featured at GTC &amp; NAB 2025</p>
          </div>
          <div>
            <Label>Team</Label>
            <p className="text-[13px] text-text mt-2 leading-relaxed">
              Technical PM · Staff Engineers · DevOps · Client Stakeholders · Hardware Team
            </p>
          </div>
        </div>
      </div>

      <ProjectImage src="/assets/verizon.png" alt="Verizon Ceres Platform" />

      {/* Background */}
      <SectionTitle symbol="×">The Challenge</SectionTitle>

      <div className="flex flex-col gap-5 text-[15px] text-muted leading-[1.85] max-w-2xl">
        <p>
          Due to timing, the alpha was designed with a flat structure — allowing everyone from top
          to bottom full access to everything. Every user had full access to the platform.
        </p>
        <p>
          The risk is that a single misconfiguration in a K8s 5-node cluster can take down an
          entire live broadcast, which is disastrous in the M&amp;E space. In live broadcast for
          example, a focus lapse during a 90-minute match isn&apos;t recoverable.
        </p>
      </div>

      <PullQuote>
        Multiple crews, one cluster, zero interference. I owned the RBAC UX design end-to-end — including Multi-Tenancy and Monitoring UX flows.
      </PullQuote>

      {/* Users */}
      <SectionTitle symbol="◊">Users</SectionTitle>

      <p className="text-[15px] text-muted leading-[1.85] mb-4 max-w-2xl">
        Broadcast operators and creators. The key constraint: broadcast crews needed zero K8s
        knowledge to operate the platform. Every permission decision had to be abstracted away
        from the underlying infrastructure.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 mb-4">
        <RoleCard
          role="Cluster Admin"
          description="Full platform access. Verizon-side technical support."
        />
        <RoleCard
          role="Org Admin"
          description="Full org access. Can assign roles and permissions."
        />
        <RoleCard
          role="Editors / Viewers"
          description="Scoped access only. Zero infrastructure visibility."
        />
      </div>

      {/* Architecture decisions */}
      <SectionTitle symbol="↓">Architecture Decisions</SectionTitle>

      <div className="flex flex-col gap-4 text-[15px] text-muted leading-[1.85] max-w-2xl mb-10">
        <p>
          <strong className="text-text">Cluster-local auth</strong>— air-gapped venues rule out
          cloud identity providers, so auth runs entirely on-cluster.
        </p>
        <p>
          <strong className="text-text">Org isolation</strong> — one crew stopping a container
          can&apos;t affect another&apos;s apps, scoped at the namespace level and enforced through
          the UI.
        </p>
        <p>
          <strong className="text-text">Org-scoped context switching</strong> — switching orgs
          re-renders apps, monitoring, and settings to that org&apos;s data only.
        </p>
      </div>

      <ProjectImage src="/assets/verizon-soln1.png" alt="Verizon Architecture Decisions" />

      {/* Solutions */}
      <SectionTitle symbol="→">What I Designed</SectionTitle>

      {/* RBAC */}
      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        User Groups &amp; Permissions
      </h3>

      <p className="text-[15px] text-muted leading-[1.85] max-w-2xl mb-8">
        Designed role-based access down to the app level, enabling admins to grant video teams
        specific access without exposing infrastructure controls. Admins can create roles, define
        permissions, and manage users within each group.
      </p>

      <div className="mb-16">
        <ProjectImage src="/assets/Add User Group.gif" alt="Add User Group flow" />
      </div>

      {/* Repos + Applications */}
      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        Repo-based Marketplace &amp; Access Control
      </h3>
      <p className="text-[15px] text-muted leading-[1.85] max-w-2xl mb-8">
        Designed a repo-scoped model where RBAC is namespaced per repository, powering a
        marketplace for discovering, installing, and launching apps (including NVIDIA NIMs).
        Built a repo selector that carries role context, dynamically adjusting visible apps,
        actions, and installation states per environment.
      </p>
      <div className="mb-16">
        <ProjectImage src="/assets/verizon-soln3.png" alt="Repo-based Marketplace" />
      </div>

      {/* Instances */}
      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        Instance Management
      </h3>
      <p className="text-[15px] text-muted leading-[1.85] max-w-2xl mb-8">
        Designed minimal instance cards that show resource specs by default, with actions revealed
        contextually based on role. Implemented hover-based admin controls only — balancing
        progressive disclosure with performance constraints in a multi-node cluster.
      </p>
      <div className="mb-16">
        <ProjectImage src="/assets/verizon-soln4.png" alt="Instance Management" />
      </div>

      {/* Monitoring */}
      <h3 className="text-[17px] font-[SailecBold] text-text mb-6">
        Monitoring &amp; Health Visibility
      </h3>
      <p className="text-[15px] text-muted leading-[1.85] max-w-2xl mb-8">
        Designed org and platform-level monitoring to surface resource allocation and flag
        critical states early — especially during live events where seconds matter.
      </p>
      <div className="mb-16">
        <ProjectImage src="/assets/verizon-soln5.png" alt="Monitoring & Health Visibility" />
      </div>

      {/* Impact */}
      <SectionTitle symbol="∑">The Result</SectionTitle>

      <div className="flex items-center gap-4 mb-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/NABLogo.png" alt="NAB Show" className="h-10 w-auto rounded-md" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/NvidiaGTCLogo.jpg" alt="NVIDIA GTC" className="h-10 w-auto rounded-md" />
      </div>
      <Callout>
        Featured at GTC 2025 in a Verizon/Monks speaker session. Live demoed at NAB 2025 with Haivision and FanDuel.
      </Callout>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mt-10 mb-10">
        <Stat value="3" label="Roles shipped and validated across a 5-node production cluster" />
        <Stat value="100%" label="Org isolation confirmed in QA — zero cross-tenant data leakage" />
        <Stat value="4ms" label="Zero cloud dependency, fully cluster-local auth at 4ms latency" />
        <Stat value="∞" label="Scalable multi-tenancy — any number of orgs per cluster" />
      </div>

    </div>
  )
}
