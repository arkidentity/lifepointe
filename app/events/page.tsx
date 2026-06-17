import { PageLayout } from '@/components/layout/PageLayout'
import { BreezeCalendar } from '@/components/events/BreezeCalendar'

export const metadata = {
  title: 'Events — Lifepointe Church',
  description: 'Upcoming events at Lifepointe Church in Westfield, Indiana.',
}

export default function EventsPage() {
  return (
    <PageLayout>
      <BreezeCalendar />
    </PageLayout>
  )
}
