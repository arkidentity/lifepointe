import { PageLayout } from '@/components/layout/PageLayout'
import { PageStub } from '@/components/layout/PageStub'

export const metadata = {
  title: 'Prayer — Lifepointe Church',
  description: 'Submit a prayer request or find scheduled prayer times.',
}

export default function PrayerPage() {
  return (
    <PageLayout>
      <PageStub
        title="Prayer"
        description="Built fresh — old page was broken. Needs: statement on prayer + working request form (Formspree) + scheduled corporate prayer times from Josh."
      />
    </PageLayout>
  )
}
