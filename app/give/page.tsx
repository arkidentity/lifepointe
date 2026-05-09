import { PageLayout } from '@/components/layout/PageLayout'
import { PageStub } from '@/components/layout/PageStub'

export const metadata = {
  title: 'Give — Lifepointe Church',
  description: 'Give online to Lifepointe Church.',
}

export default function GivePage() {
  return (
    <PageLayout>
      <PageStub
        title="Give"
        description="Giving platform embed. Needs platform confirmation from Josh (Tithe.ly, Pushpay, or other)."
      />
    </PageLayout>
  )
}
