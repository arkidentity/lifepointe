import { PageLayout } from '@/components/layout/PageLayout'
import { PageStub } from '@/components/layout/PageStub'

export const metadata = {
  title: 'Events — Lifepointe Church',
  description: 'Upcoming events at Lifepointe Church.',
}

export default function EventsPage() {
  return (
    <PageLayout>
      <PageStub
        title="Events"
        description="Auto-populated from Google Calendar. Needs Calendar ID from Josh."
      />
    </PageLayout>
  )
}
