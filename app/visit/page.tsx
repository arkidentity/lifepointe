import { PageLayout } from '@/components/layout/PageLayout'
import { PageStub } from '@/components/layout/PageStub'

export const metadata = {
  title: 'Plan Your Visit — Lifepointe Church',
  description: 'Everything you need to know before your first Sunday at Lifepointe.',
}

export default function VisitPage() {
  return (
    <PageLayout>
      <PageStub
        title="Plan Your Visit"
        description="Service times, kids check-in, what to expect, and Discovery Class info."
      />
    </PageLayout>
  )
}
