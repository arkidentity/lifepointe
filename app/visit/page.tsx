import { PageLayout } from '@/components/layout/PageLayout'
import { VisitHero } from '@/components/visit/VisitHero'
import { WhatToExpect } from '@/components/visit/WhatToExpect'
import { LifepointeKids } from '@/components/visit/LifepointeKids'
import { DiscoveryClass } from '@/components/visit/DiscoveryClass'
import { VisitContact } from '@/components/visit/VisitContact'

export const metadata = {
  title: 'Plan Your Visit — Lifepointe Church',
  description: 'Everything you need to know before your first Sunday at Lifepointe in Westfield, Indiana.',
}

export default function VisitPage() {
  return (
    <PageLayout>
      <VisitHero />
      <WhatToExpect />
      <LifepointeKids />
      <DiscoveryClass />
      <VisitContact />
    </PageLayout>
  )
}
