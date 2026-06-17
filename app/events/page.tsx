import { PageLayout } from '@/components/layout/PageLayout'
import { EventsList } from '@/components/events/EventsList'

export const metadata = {
  title: 'Events — Lifepointe Church',
  description: 'Upcoming events at Lifepointe Church in Westfield, Indiana.',
}

export default function EventsPage() {
  return (
    <PageLayout>
      <EventsList />
    </PageLayout>
  )
}
