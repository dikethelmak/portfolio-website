'use client'

import Link from 'next/link'

interface ArrowLinkProps {
  href: string
  children: React.ReactNode
  external?: boolean
  className?: string
}

export default function ArrowLink({ href, children, external, className = '' }: ArrowLinkProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <div className={`flex items-center gap-2 group ${className}`}>
      {external ? (
        <a
          href={href}
          className="text-text hover:text-bright transition-colors duration-200 text-sm"
          {...externalProps}
        >
          {children}
        </a>
      ) : (
        <Link
          href={href}
          className="text-text hover:text-bright transition-colors duration-200 text-sm"
        >
          {children}
        </Link>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        width={20}
        height={20}
        className="text-text group-hover:text-bright group-hover:translate-x-1 transition-all duration-200 shrink-0"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    </div>
  )
}
