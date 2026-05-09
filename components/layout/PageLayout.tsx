import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface PageLayoutProps {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-[60px] md:pt-[72px]">
        {children}
      </main>
      <Footer />
    </>
  )
}
