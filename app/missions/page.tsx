import { PageLayout } from '@/components/layout/PageLayout'
import { PageStub } from '@/components/layout/PageStub'

export const metadata = {
  title: 'Missions — Lifepointe Church',
  description: 'Our missionary partners and local outreach.',
}

export default function MissionsPage() {
  return (
    <PageLayout>
      <PageStub
        title="Missions"
        description="7 missionary partners + 7 outreach orgs. All content ready to migrate from old site. Needs active partnership confirmation from Josh."
      />
    </PageLayout>
  )
}
