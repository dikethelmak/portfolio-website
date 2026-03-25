import HeroSection from '@/components/HeroSection'
import FeaturedWork from '@/components/FeaturedWork'

export default function HomePage() {
  return (
    <main id="main-content" className="px-6 md:px-12 max-w-4xl mx-auto">
      <HeroSection />
      <FeaturedWork />
    </main>
  )
}
