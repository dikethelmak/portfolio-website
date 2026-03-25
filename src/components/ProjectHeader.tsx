import ArrowLink from './ArrowLink'

interface ProjectHeaderProps {
  title: string
  period: string
  description: string | string[]
  link?: { href: string; label: string }
}

export default function ProjectHeader({ title, period, description, link }: ProjectHeaderProps) {
  const descriptions = Array.isArray(description) ? description : [description]

  return (
    <div className="pb-8 mb-2 border-b border-surface">
      <div className="flex items-baseline justify-between gap-4 mb-3">
        <h2 className="text-2xl font-[SailecBold] text-text">{title}</h2>
        <span className="text-sm text-muted shrink-0">{period}</span>
      </div>
      {descriptions.map((d, i) => (
        <p key={i} className="text-sm text-muted leading-relaxed mb-2">
          {d}
        </p>
      ))}
      {link && (
        <div className="mt-4">
          <ArrowLink href={link.href} external>
            {link.label}
          </ArrowLink>
        </div>
      )}
    </div>
  )
}
