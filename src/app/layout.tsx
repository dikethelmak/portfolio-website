import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import SiteFooter from '@/components/SiteFooter'
import { ImageModalProvider } from '@/components/ImageModal'
import CustomCursor from '@/components/CustomCursor'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thelma Dike | Designer, Builder, Operator',
  description:
    'Thelma Dike — Senior Product Designer with 8 years of experience. Design Leader, Operator, Builder. Portfolio of work across FinTech, HealthTech, and enterprise tools.',
  icons: { icon: '/assets/favicon.svg' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-bg text-text antialiased">
        <a
          href="#main-content"
          className="absolute -top-full left-4 z-[9999] px-4 py-2 bg-bright text-bg text-sm font-bold rounded focus:top-2 transition-[top] duration-150"
        >
          Skip to content
        </a>
        <CustomCursor />
        <ImageModalProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <div className="flex-1 pb-8">
              {children}
            </div>
            <SiteFooter />
            <div className="pb-24" />
          </div>
        </ImageModalProvider>
      </body>
    </html>
  )
}
