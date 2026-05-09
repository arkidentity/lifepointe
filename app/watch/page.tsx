import { PageLayout } from '@/components/layout/PageLayout'
import { PageStub } from '@/components/layout/PageStub'

export const metadata = {
  title: 'Watch — Lifepointe Church',
  description: 'Catch up on recent sermons from Lifepointe.',
}

export default function WatchPage() {
  return (
    <PageLayout>
      <PageStub
        title="Watch"
        description="Recent messages auto-populated from YouTube. Needs playlist ID from Josh."
      />
    </PageLayout>
  )
}
