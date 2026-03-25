'use client'

import { useModal } from './ImageModal'

interface ProjectBlockProps {
  children: React.ReactNode
}

export default function ProjectBlock({ children }: ProjectBlockProps) {
  return (
    <div className="py-8 border-t border-surface first:border-t-0">
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  )
}

interface ProjectImageProps {
  src: string
  alt: string
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  const { openModal } = useModal()

  return (
    <div className="rounded-xl overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        tabIndex={0}
        role="button"
        aria-label={`View full size: ${alt}`}
        className="w-full object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
        onClick={() => openModal(src, alt)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            openModal(src, alt)
          }
        }}
      />
    </div>
  )
}
