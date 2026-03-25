export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] mt-16">
      <div className="px-6 md:px-12 max-w-4xl mx-auto py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span className="text-[12px] text-muted/60">
          Built with Next.js &amp; Claude Code · © 2025 Thelma Dike
        </span>
        <div className="flex items-center gap-5">
          <a
            href="mailto:dikethelma55@gmail.com"
            className="text-[12px] text-muted/60 hover:text-text transition-colors"
          >
            dikethelma55@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/dikethelmak/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-muted/60 hover:text-text transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://docs.google.com/document/d/1TGyf8GdJl9mxwbZwgdkmXhUxz5rMeiR00SjjlziIapI/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-muted/60 hover:text-text transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
