'use client'

export function DiscoveryClass() {
  return (
    <section
      className="px-5 py-[72px] md:py-[100px] md:px-12 border-b"
      style={{ background: 'var(--lp-surface)', borderColor: 'var(--lp-border)' }}
    >
      <div className="md:grid md:grid-cols-[1fr_1.2fr] md:gap-20 md:items-center md:max-w-[1100px]">
        {/* Left: label + headline */}
        <div className="mb-10 md:mb-0">
          <p
            className="text-[13px] font-medium tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }}
          >
            Take the Next Step
          </p>
          <h2
            className="font-black leading-[1.05] mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 3.2vw, 48px)',
              color: 'var(--lp-text)',
            }}
          >
            Discovery Class
          </h2>
          <p
            className="text-[17px] leading-[1.85]"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
          >
            If you&apos;re ready to go deeper — whether that&apos;s baptism, membership, or simply
            understanding what Lifepointe is and where we&apos;re headed — Discovery Class is the
            place to start.
          </p>
        </div>

        {/* Right: detail card */}
        <div
          className="border-l-2 pl-8"
          style={{ borderColor: 'var(--lp-accent)' }}
        >
          <div className="flex flex-col gap-7">
            <div>
              <p
                className="text-[13px] font-medium tracking-[0.14em] uppercase mb-2"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
              >
                What It Covers
              </p>
              <p
                className="text-[15px] leading-[1.8]"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
              >
                Baptism, membership, and the vision and values that shape Lifepointe. A small group
                setting — not a lecture, a conversation.
              </p>
            </div>

            <div
              className="border-t pt-7"
              style={{ borderColor: 'var(--lp-border)' }}
            >
              <p
                className="text-[13px] font-medium tracking-[0.14em] uppercase mb-2"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
              >
                When
              </p>
              <p
                className="text-[15px] leading-[1.8]"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
              >
                Offered periodically throughout the year. Email us to find out when the next class is.
              </p>
            </div>

            <div
              className="border-t pt-7"
              style={{ borderColor: 'var(--lp-border)' }}
            >
              <p
                className="text-[13px] font-medium tracking-[0.14em] uppercase mb-3"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
              >
                Sign Up
              </p>
              <a
                href="mailto:info@lpcwestfield.com?subject=Discovery%20Class"
                className="inline-block text-[14px] font-medium tracking-[0.12em] uppercase no-underline px-8 py-[14px] transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-ui)',
                  color: '#fff',
                  background: 'var(--lp-accent)',
                }}
                onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--lp-accent-hover)')}
                onMouseOut={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--lp-accent)')}
              >
                Email Us About Discovery Class
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
