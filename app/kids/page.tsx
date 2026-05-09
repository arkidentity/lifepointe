import { PageLayout } from '@/components/layout/PageLayout'
import { PageStub } from '@/components/layout/PageStub'

export const metadata = {
  title: 'Lifepointe Kids — Lifepointe Church',
  description: 'Infant through Grade 5. Safe, intentional, and disciple-forming.',
}

export default function KidsPage() {
  return (
    <PageLayout>
      <PageStub
        title="Lifepointe Kids"
        description="Infant–Grade 5. Led by Derek & Lauren Van Dyke. Needs updated vision statement and check-in process from Josh."
      />
    </PageLayout>
  )
}
