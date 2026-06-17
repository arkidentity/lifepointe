import Image from 'next/image'
import kidsImg from '@/images/lp-kids1.jpg'

const cards = [
  {
    icon: <WorshipIcon />,
    label: 'Worship',
    body: 'We open with 20–25 minutes of worship. Not a warm-up act — the music is its own encounter. We sing to the Lord, not at an audience.',
  },
  {
    icon: <WordIcon />,
    label: 'The Word',
    body: 'Every message is anchored in Scripture and preached with expectation. We believe the Bible is alive and has something to say to where you are right now.',
  },
  {
    icon: <PrayerIcon />,
    label: 'Prayer Ministry',
    body: 'Most Sundays the altar is open at the close of the message. Ministry team members are available to pray with you. This is not a performance — it is a response.',
  },
  {
    icon: <KidsIcon />,
    label: 'Lifepointe Kids',
    body: 'Children are dismissed to age-appropriate environments before the message. Infants through Grade 5 are cared for by trained, background-checked volunteers.',
  },
]

export function WhatToExpect() {
  return (
    <section
      className="always-light border-b"
      style={{ background: 'var(--lp-bg-alt)', borderColor: 'var(--lp-border)' }}
    >
      {/* Section header */}
      <div className="px-5 pt-[72px] pb-10 md:pt-[100px] md:pb-14 md:px-12">
        <p
          className="text-[13px] font-medium tracking-[0.2em] uppercase mb-5"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }}
        >
          What to Expect
        </p>
        <h2
          className="font-black leading-[1.1] mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 3.2vw, 48px)',
            color: 'var(--lp-text)',
          }}
        >
          A Sunday at Lifepointe
        </h2>
        <p
          className="text-[17px] leading-[1.8]"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text)' }}
        >
          About 75 minutes. Come expecting something real.
        </p>
      </div>

      {/* 2×2 card grid — gap-px on border-color background creates shared 1px borders */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-px mx-5 md:mx-12 mb-[72px] md:mb-[100px] border"
        style={{ background: 'var(--lp-border)', borderColor: 'var(--lp-border)' }}
      >
        {cards.map(({ icon, label, body }) => (
          <div
            key={label}
            className="p-8 md:p-10 flex flex-col gap-5"
            style={{ background: 'var(--lp-bg-alt)' }}
          >
            {/* Icon container */}
            <div
              className="w-11 h-11 flex items-center justify-center flex-shrink-0"
              style={{ background: 'var(--lp-surface)', border: '1px solid var(--lp-border)' }}
            >
              {icon}
            </div>

            <div>
              <p
                className="text-[14px] font-medium tracking-[0.1em] uppercase mb-3"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text)' }}
              >
                {label}
              </p>
              <p
                className="text-[16px] leading-[1.85]"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text)' }}
              >
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Kids photo — full width, below the grid */}
      <div className="relative w-full h-[260px] md:h-[360px] overflow-hidden">
        <Image
          src={kidsImg}
          alt="Lifepointe Kids"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>
    </section>
  )
}

function WorshipIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--lp-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Flame — presence, pursuit */}
      <path d="M12 2c0 0-5 4.5-5 9.5a5 5 0 0 0 10 0C17 6.5 12 2 12 2z" />
      <path d="M12 12c0 0-2 1.5-2 3a2 2 0 0 0 4 0c0-1.5-2-3-2-3z" />
    </svg>
  )
}

function WordIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--lp-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Open book */}
      <path d="M2 6.5C2 5.4 2.9 4.5 4 4.5h5a3 3 0 0 1 3 3v11H4a2 2 0 0 1-2-2v-10z" />
      <path d="M22 6.5C22 5.4 21.1 4.5 20 4.5h-5a3 3 0 0 0-3 3v11h8a2 2 0 0 0 2-2v-10z" />
      <line x1="12" y1="7.5" x2="12" y2="18.5" />
    </svg>
  )
}

function PrayerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--lp-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Cross */}
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="3" y1="8" x2="21" y2="8" />
    </svg>
  )
}

function KidsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--lp-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Double chevron forward — references the Lifepointe Kids logo mark */}
      <polyline points="6 17 11 12 6 7" />
      <polyline points="13 17 18 12 13 7" />
    </svg>
  )
}
