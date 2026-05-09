import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { SermonPreview } from '@/components/home/SermonPreview'
import { Vision } from '@/components/home/Vision'
import { Altar } from '@/components/home/Altar'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SermonPreview />
        <Vision />
        <Altar />
      </main>
      <Footer />
    </>
  )
}
