import { PageLayout } from '@/components/layout/PageLayout'
import { PageStub } from '@/components/layout/PageStub'

export const metadata = {
  title: 'Faith Montessori — Lifepointe Church',
  description: 'Faith Montessori School — partner school at Lifepointe since 2021.',
}

export default function FaithMontessoriPage() {
  return (
    <PageLayout>
      <PageStub
        title="Faith Montessori"
        description="Partner school since 2021. Ages 2/3s through Pre-K. Contact: faithmontessori@comcast.net · 317-709-9324. Informational page — external partner, not a ministry."
      />
    </PageLayout>
  )
}
