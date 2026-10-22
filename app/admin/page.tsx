import { PageLayout } from '@/components/layout/PageLayout'
import { AdminSignIn } from '@/components/admin/AdminSignIn'

export const metadata = { title: 'Admin — Lifepointe Church', robots: { index: false } }

// Where Lifepointe's admins turn on the review note tab. Not linked from the site.
export default function AdminPage() {
  return (
    <PageLayout>
      <section className="px-5 md:px-12 py-16 max-w-[560px] mx-auto">
        <p className="font-[family-name:var(--font-ui)] text-[13px] uppercase tracking-[0.15em] text-lp-accent mb-3">For admins</p>
        <h1 className="font-[family-name:var(--font-display)] text-[36px] leading-tight text-lp-text mb-4">Leave notes on the site</h1>
        <p className="font-[family-name:var(--font-body)] text-[17px] text-lp-muted mb-10">Sign in once on this phone or computer. A Note button appears in the corner of every page: tap it, tap the spot, and tell us what to change.</p>
        <AdminSignIn />
      </section>
    </PageLayout>
  )
}
