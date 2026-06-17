import { PageLayout } from '@/components/layout/PageLayout'
import { GivePage } from '@/components/give/GivePage'

export const metadata = {
  title: 'Give — Lifepointe Church',
  description: 'Give online to Lifepointe Church in Westfield, Indiana.',
}

export default function GivePageRoute() {
  return (
    <PageLayout>
      <GivePage />
    </PageLayout>
  )
}
