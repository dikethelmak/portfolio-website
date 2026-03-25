export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content" className="px-6 md:px-10 py-8 max-w-3xl mx-auto">
      {children}
    </main>
  )
}
