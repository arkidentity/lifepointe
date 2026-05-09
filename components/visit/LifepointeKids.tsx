import Image from 'next/image'
import Link from 'next/link'
import derekImg from '@/images/team/derek-van-dyke-kids.png'
import laurenImg from '@/images/team/lauren-van-dyle-kids.png'

export function LifepointeKids() {
  return (
    <section
      className="px-5 py-[72px] md:py-[100px] md:px-12 border-b"
      style={{ background: 'var(--lp-bg)', borderColor: 'var(--lp-border)' }}
    >
      <div className="md:grid md:grid-cols-[1.3fr_1fr] md:gap-16 md:items-start md:max-w-[1100px]">
        {/* Left: content */}
        <div>
          <p
            className="text-[11px] font-medium tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }}
          >
            Lifepointe Kids
          </p>
          <h2
            className="font-black leading-[1.1] mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.2vw, 48px)',
              color: 'var(--lp-text)',
            }}
          >
            Discipleship Starts Young.
          </h2>
          <p
            className="text-[17px] leading-[1.85] mb-5"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
          >
            Children aren&apos;t the future of the church — they&apos;re the church right now.
            Lifepointe Kids runs every Sunday for infants through Grade 5, with age-appropriate
            environments built for real discipleship.
          </p>
          <p
            className="text-[17px] leading-[1.85] mb-10"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
          >
            Every volunteer is background checked. Your kids are known by name, cared for with
            intention, and brought up in a community that takes faith seriously.
          </p>

          {/* Check-in callout */}
          <div
            className="p-5 border mb-10"
            style={{ borderColor: 'var(--lp-border)', background: 'var(--lp-surface)' }}
          >
            <p
              className="text-[12px] font-medium tracking-[0.14em] uppercase mb-2"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }}
            >
              First-Timer Check-In
            </p>
            <p
              className="text-[15px] leading-[1.7]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
            >
              Arrive a few minutes early and look for the Lifepointe Kids check-in table in the
              lobby. A team member will walk you through the process and get your child settled
              before the service begins.
            </p>
          </div>

          <Link
            href="/kids"
            className="inline-block text-[12px] font-medium tracking-[0.12em] uppercase no-underline px-8 py-[14px] border transition-all duration-200"
            style={{
              fontFamily: 'var(--font-ui)',
              color: 'var(--lp-text)',
              borderColor: 'var(--lp-border)',
            }}
            onMouseOver={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--lp-accent)'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--lp-accent)'
            }}
            onMouseOut={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--lp-border)'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--lp-text)'
            }}
          >
            Learn About Lifepointe Kids
          </Link>
        </div>

        {/* Right: leadership card */}
        <div className="mt-12 md:mt-0">
          <div
            className="border p-8"
            style={{ background: 'var(--lp-surface)', borderColor: 'var(--lp-border)' }}
          >
            <p
              className="text-[11px] font-medium tracking-[0.16em] uppercase mb-6"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
            >
              Kids Ministry Leadership
            </p>

            {/* Photos */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { src: derekImg, name: 'Derek Van Dyke' },
                { src: laurenImg, name: 'Lauren Van Dyke' },
              ].map(({ src, name }) => (
                <div key={name}>
                  <div className="relative w-full aspect-[696/410] overflow-hidden mb-2">
                    <Image
                      src={src}
                      alt={name}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 45vw, 200px"
                    />
                  </div>
                  <span
                    className="text-[12px]"
                    style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
                  >
                    {name.split(' ')[0]}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="font-bold mb-0.5"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 2vw, 22px)',
                color: 'var(--lp-text)',
              }}
            >
              Derek &amp; Lauren Van Dyke
            </p>
            <p
              className="text-[13px] mb-6"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }}
            >
              Kids Ministry Directors
            </p>
            <p
              className="text-[15px] leading-[1.75]"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
            >
              Derek and Lauren lead Lifepointe Kids with a conviction that children should encounter
              God — not just learn about him. They&apos;re happy to answer any questions about your
              child&apos;s experience on Sunday.
            </p>

            <div
              className="mt-6 pt-6 border-t"
              style={{ borderColor: 'var(--lp-border)' }}
            >
              <p
                className="text-[12px] font-medium tracking-[0.1em] uppercase mb-1"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
              >
                Ages Served
              </p>
              <p
                className="text-[15px]"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text)' }}
              >
                Infants through Grade 5
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
