import { PageLayout } from '@/components/layout/PageLayout'
import { PageStub } from '@/components/layout/PageStub'

export const metadata = {
  title: 'Groups — Lifepointe Church',
  description: 'Find a small group at Lifepointe.',
}

export default function GroupsPage() {
  return (
    <PageLayout>
      <PageStub
        title="Groups"
        description="Needs content from Josh: what groups exist, how people join, any current group listings."
      />
    </PageLayout>
  )
}
