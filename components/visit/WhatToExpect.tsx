const sundayItems = [
  {
    label: 'Worship',
    body: 'We open with 20–25 minutes of worship. Not a warm-up act — the music is its own encounter. We sing to the Lord, not at an audience.',
  },
  {
    label: 'The Word',
    body: 'Every message is anchored in Scripture and preached with expectation. We believe the Bible is alive and that it has something to say to where you are right now.',
  },
  {
    label: 'Prayer Ministry',
    body: 'Most Sundays the altar is open at the close of the message. Ministry team members are available to pray with you. This is not a performance — it is a response.',
  },
  {
    label: 'Lifepointe Kids',
    body: 'Children are dismissed to age-appropriate environments before the message. Infants through Grade 5 are cared for by trained, background-checked volunteers every week.',
  },
]

export function WhatToExpect() {
  return (
    <section
      className="px-5 py-[72px] md:py-[100px] md:px-12 border-b"
      style={{ background: 'var(--lp-bg-alt)', borderColor: 'var(--lp-border)' }}
    >
      <div className="md:grid md:grid-cols-[1fr_1.4fr] md:gap-16 md:max-w-[1100px]">
        {/* Left: label + headline */}
        <div className="mb-10 md:mb-0 md:pt-1">
          <p
            className="text-[11px] font-medium tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }}
          >
            What to Expect
          </p>
          <h2
            className="font-black leading-[1.1] mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.2vw, 48px)',
              color: 'var(--lp-text)',
            }}
          >
            A Sunday at Lifepointe
          </h2>
          <p
            className="text-[16px] leading-[1.8]"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
          >
            About 75 minutes. Come expecting something real.
          </p>
        </div>

        {/* Right: items */}
        <div className="flex flex-col gap-8">
          {sundayItems.map(({ label, body }) => (
            <div
              key={label}
              className="flex gap-5 pb-8 border-b last:border-0 last:pb-0"
              style={{ borderColor: 'var(--lp-border)' }}
            >
              <div
                className="flex-shrink-0 w-px self-stretch mt-1"
                style={{ background: 'var(--lp-accent)' }}
              />
              <div>
                <p
                  className="text-[13px] font-medium tracking-[0.08em] uppercase mb-2"
                  style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text)' }}
                >
                  {label}
                </p>
                <p
                  className="text-[15px] leading-[1.8]"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
                >
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
