'use client'

import { motion } from 'framer-motion'

interface MetricCardProps {
  value: string
  label: string
  index?: number
}

export default function MetricCard({ value, label, index = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex flex-col gap-1 p-4 rounded-lg bg-surface border border-muted/30"
    >
      <span className="text-2xl font-[SailecBold] text-bright leading-tight">{value}</span>
      <span className="text-xs text-muted uppercase tracking-wide">{label}</span>
    </motion.div>
  )
}
