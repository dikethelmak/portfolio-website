'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface WorkCardProps {
  href: string
  client: string
  title: string
  description: string
  outcome: string
}

export default function WorkCard({ href, client, title, description, outcome }: WorkCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.01 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      <Link
        href={href}
        className="block p-5 rounded-xl bg-surface border border-muted/20 hover:border-muted/50 transition-colors duration-200 h-full"
      >
        <p className="text-xs uppercase tracking-widest text-muted mb-2">{client}</p>
        <h3 className="text-base font-[SailecBold] text-text mb-2 leading-snug">{title}</h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>
        <p className="text-xs text-accent">{outcome}</p>
      </Link>
    </motion.div>
  )
}
