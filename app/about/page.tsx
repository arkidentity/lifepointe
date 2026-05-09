import { PageLayout } from '@/components/layout/PageLayout'
import { PageStub } from '@/components/layout/PageStub'

export const metadata = {
  title: 'About — Lifepointe Church',
  description: 'Our vision, beliefs, values, and team.',
}

export default function AboutPage() {
  return (
    <PageLayout>
      <PageStub
        title="About"
        description="Vision · Beliefs · Values · Team — consolidated from four old pages into one with anchor sections. Needs staff bios and photos from Josh."
      />
    </PageLayout>
  )
}
