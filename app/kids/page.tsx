import Image from 'next/image'
import { PageLayout } from '@/components/layout/PageLayout'
import derekImg from '@/images/team/derek-van-dyke-kids.png'
import kidsLogoImg from '@/images/lp-kids.png'

export const metadata = {
  title: 'Lifepointe Kids — Lifepointe Church',
  description:
    "A fun, safe, and Christ-centered environment where children learn about God's love and grow in their relationship with Jesus.",
}

const eyebrow = { fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }
const heading = { fontFamily: 'var(--font-display)', color: 'var(--lp-text)' }
const body = { fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }

const checkInSteps = [
  'Check your child in using our iPad check-in station.',
  'Place the printed name tag on your child.',
  'Keep the matching parent tag for pick-up.',
  'Present your parent tag after service for positive identification when picking up your child.',
]

export default function KidsPage() {
  return (
    <PageLayout>
      {/* Intro */}
      <section
        className="px-5 py-[72px] md:py-[100px] md:px-12 border-b"
        style={{ background: 'var(--lp-bg)', borderColor: 'var(--lp-border)' }}
      >
        <div className="md:grid md:grid-cols-[1.3fr_1fr] md:gap-16 md:items-start md:max-w-[1100px]">
          <div>
            <div className="mb-6">
              <Image src={kidsLogoImg} alt="Lifepointe Kids" width={120} height={120} className="object-contain" />
            </div>
            <h1 className="font-black leading-[1.1] mb-6" style={{ ...heading, fontSize: 'clamp(30px, 4vw, 56px)' }}>
              Lifepointe Kids
            </h1>
            <p className="text-[17px] leading-[1.85] mb-5" style={body}>
              LPC Children&apos;s Ministry is a fun, safe, and Christ-centered environment where children can
              learn about God&apos;s love and grow in their relationship with Jesus. We use God&apos;s Kids from
              RightNow Media, a Biblically based curriculum designed to help children understand Scripture in an
              engaging and age-appropriate way.
            </p>
            <p className="text-[17px] leading-[1.85] mb-5" style={body}>
              Our dedicated volunteers are committed to creating a safe and nurturing atmosphere for every child.
              All children&apos;s ministry volunteers have completed background checks, reviewed our ministry
              policies, and signed Children&apos;s Ministry Agreements that include our safety standards and
              procedures.
            </p>
            <p className="text-[17px] leading-[1.85]" style={body}>
              We love investing in the next generation of disciples and helping children develop a genuine
              understanding of our loving God. Our primary goal is to foster each child&apos;s relationship with
              Jesus through Biblical teaching, prayer, heartfelt worship, and meaningful connections with caring
              leaders.
            </p>
          </div>

          {/* Leadership card */}
          <div className="mt-12 md:mt-0">
            <div className="border p-8" style={{ background: 'var(--lp-surface)', borderColor: 'var(--lp-border)' }}>
              <p
                className="text-[13px] font-medium tracking-[0.16em] uppercase mb-6"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
              >
                Kids Ministry Leadership
              </p>
              <div className="relative w-full aspect-[696/410] overflow-hidden mb-4">
                <Image
                  src={derekImg}
                  alt="Derek Van Dyke"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 90vw, 400px"
                />
              </div>
              <p className="font-bold mb-0.5" style={{ ...heading, fontSize: 'clamp(18px, 2vw, 22px)' }}>
                Derek Van Dyke
              </p>
              <p className="text-[14px]" style={eyebrow}>
                Kids Ministry Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Check-in */}
      <section
        className="px-5 py-[72px] md:py-[100px] md:px-12 border-b"
        style={{ background: 'var(--lp-surface)', borderColor: 'var(--lp-border)' }}
      >
        <div className="md:max-w-[760px]">
          <p className="text-[13px] font-medium tracking-[0.14em] uppercase mb-3" style={eyebrow}>
            Check-In &amp; Pick-Up
          </p>
          <p className="text-[17px] leading-[1.85] mb-6" style={body}>
            To help ensure the safety and security of every child, LPC uses a simple check-in process:
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-6 text-[17px] leading-[1.75]" style={body}>
            {checkInSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="text-[17px] leading-[1.85]" style={body}>
            Our team is committed to providing a secure, welcoming, and enjoyable experience for every child and
            family who walks through our doors.
          </p>
        </div>
      </section>

      {/* Trail Life & AHG — rest of this paragraph is pending from Derek (workspace q-001) */}
      <section className="px-5 py-[72px] md:py-[100px] md:px-12" style={{ background: 'var(--lp-bg)' }}>
        <div className="md:max-w-[760px]">
          <h2 className="font-black leading-[1.15] mb-6" style={{ ...heading, fontSize: 'clamp(24px, 3vw, 40px)' }}>
            Trail Life USA &amp; American Heritage Girls
          </h2>
          <p className="text-[17px] leading-[1.85] mb-5" style={body}>
            Trail Life USA (TLUSA) and American Heritage Girls (AHG) are Christ-centered youth development
            organizations dedicated to building strong character, leadership skills, and a Biblical worldview in
            the next generation. Both programs serve youth ages 5–18 and meet at LPC every other Monday from
            6:30 PM to 8:00 PM.
          </p>
          <p className="text-[17px] leading-[1.85]" style={body}>
            As we like to say, LPC is a &ldquo;one-stop family fun shop!&rdquo;
          </p>
        </div>
      </section>
    </PageLayout>
  )
}
