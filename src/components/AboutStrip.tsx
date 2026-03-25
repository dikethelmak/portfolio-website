export default function AboutStrip() {
  return (
    <section id="about" className="py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-surface">
      <div>
        <h2 className="text-lg font-[SailecBold] text-text mb-3">About</h2>
        <p className="text-sm text-muted leading-relaxed">
          I specialise in designing for environments where complexity is unavoidable and precision is
          non-negotiable — AI infrastructure, fintech, and developer tooling. CS graduate, 8 years of
          experience, based in Lagos and targeting senior roles in the UK.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-[SailecBold] text-text mb-3">Writing &amp; speaking</h2>
        <ul className="flex flex-col gap-2 text-sm text-muted">
          <li>
            <a
              href="https://thelmadike.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-bright transition-colors"
            >
              Substack
            </a>{' '}
            — long-form design thinking
          </li>
          <li>
            <a
              href="https://speakerdeck.com/dikethelmak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-bright transition-colors"
            >
              MumsWhoCode IWD 2026
            </a>{' '}
            — generative workflows in product design
          </li>
          <li>Nigeria Innovation Summit 2026 — upcoming</li>
        </ul>
      </div>
    </section>
  )
}
