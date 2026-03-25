import type { Metadata } from 'next'
import TalksContent from '@/components/TalksContent'

export const metadata: Metadata = {
  title: 'Talks & Writing — Thelma Dike',
  description:
    'Speaking engagements and long-form writing by Thelma Dike on design, AI, and product craft.',
}

export default function TalksPage() {
  return (
    <main id="main-content" className="px-6 md:px-12 max-w-3xl mx-auto pt-16 pb-20">
      <TalksContent />
    </main>
  )
}
