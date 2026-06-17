'use client'

import Image from 'next/image'
import buildingImg from '@/images/lpc-building.jpg'

export function VisitHero() {
  return (
    <section
      className="border-b overflow-hidden"
      style={{ background: 'var(--lp-bg)', borderColor: 'var(--lp-border)' }}
    >
      <div className="md:grid md:grid-cols-[1fr_1fr] md:min-h-[560px]">
        {/* Left: text content */}
        <div className="px-5 pt-[72px] pb-[64px] md:pt-[88px] md:pb-[88px] md:px-12 flex flex-col justify-center">
          <p
            className="text-[13px] font-medium tracking-[0.2em] uppercase mb-6"
            style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }}
          >
            Lifepointe Church · Westfield, Indiana
          </p>
          <h1
            className="font-black leading-[1.05] mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px, 5vw, 68px)',
              color: 'var(--lp-text)',
            }}
          >
            Plan Your Visit
          </h1>
          <p
            className="text-[17px] leading-[1.8] mb-10 max-w-[440px]"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
          >
            Sunday at Lifepointe is about 75 minutes of worship, the Word, and prayer. We&apos;d
            love to have you. Here&apos;s everything you need to know before you come.
          </p>

          {/* Info chips */}
          <div className="flex flex-col gap-2 mb-10">
            {[
              { icon: <ClockIcon />, label: 'Sundays at 10AM' },
              { icon: <PinIcon />,   label: '3233 West 166th St, Westfield, IN' },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 px-4 py-2.5 border"
                style={{ borderColor: 'var(--lp-border)', background: 'var(--lp-surface)' }}
              >
                {icon}
                <span
                  className="text-[15px] font-medium"
                  style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div>
            <a
              href="https://maps.google.com/?q=3233+West+166th+Street+Westfield+IN"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[14px] font-medium tracking-[0.12em] uppercase no-underline px-8 py-[14px] transition-all duration-200"
              style={{
                fontFamily: 'var(--font-ui)',
                color: '#fff',
                background: 'var(--lp-accent)',
              }}
              onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--lp-accent-hover)')}
              onMouseOut={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--lp-accent)')}
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Right: building photo */}
        <div className="relative h-[280px] md:h-auto">
          <Image
            src={buildingImg}
            alt="Lifepointe Church building exterior, 3233 West 166th Street, Westfield Indiana"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--lp-accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--lp-accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
