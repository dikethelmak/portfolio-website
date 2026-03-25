'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    href: '/work/verizon',
    label: 'Verizon · Ceres',
    type: 'AI Infrastructure · 5G',
    year: '2025',
    title: 'AI Deployment Platform for Private 5G',
    outcome: 'Featured at GTC & NAB 2025',
    image: '/assets/verizon.png',
  },
  {
    href: '/work/chipper-cash',
    label: 'Chipper Cash',
    type: 'Fintech · B2B API',
    year: '2022–Now',
    title: 'Pan-African Payments Infrastructure',
    outcome: '$9B+ in API-Driven Transactions',
    image: '/assets/napi.gif',
  },
  {
    href: '/work/apple-battery',
    label: 'Apple · Battery R&D',
    type: 'Enterprise Tooling',
    year: '2022–2025',
    title: 'Battery Intelligence Platform for Engineers',
    outcome: '50% Faster Test Setup · Hundreds of Hours Saved',
    image: '/assets/bdms.webp',
  },
  {
    href: '/work/softcom',
    label: 'Softcom',
    type: 'Data Platform · B2B',
    year: '2018–2020',
    title: 'Field Data Collection at Scale',
    outcome: '500,000+ Lives Impacted',
    image: '/assets/useformsmain.png',
  },
]

export default function FeaturedWork() {
  return (
    <section className="pb-16 md:pb-24">

      {/* Section label */}
      <div className="mb-10">
        <span className="text-[11px] uppercase tracking-[0.15em] text-muted font-[SailecBold]">
          Selected Work
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.href}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.07 }}
          >
            <Link href={project.href} className="group block">

              {/* Cover image / placeholder */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-surface mb-4 border border-white/[0.05]">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[11px] uppercase tracking-widest text-muted">
                      Coming soon
                    </span>
                  </div>
                )}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] tracking-wide text-muted">
                  {project.label} · {project.type}
                </span>
                <span className="text-[11px] text-muted">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="text-[15px] font-[SailecBold] text-text group-hover:text-bright transition-colors duration-200 leading-snug mb-1.5">
                {project.title}
              </h3>

              {/* Outcome */}
              <p className="text-[12px] text-accent">{project.outcome}</p>

            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
