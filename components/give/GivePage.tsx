export function GivePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="px-5 pt-[72px] pb-[64px] md:pt-[88px] md:pb-[88px] md:px-12 border-b"
        style={{ background: 'var(--lp-bg)', borderColor: 'var(--lp-border)' }}
      >
        <div className="max-w-[680px]">
          <p
            className="text-[13px] font-medium tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }}
          >
            Online Giving
          </p>
          <h1
            className="font-black leading-[1.05] mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 4.5vw, 60px)',
              color: 'var(--lp-text)',
            }}
          >
            Give to Lifepointe
          </h1>
          <p
            className="text-[17px] leading-[1.8]"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
          >
            Your generosity fuels everything we do — Sunday gatherings, kids ministry, outreach, and the mission of seeing Westfield transformed by Jesus. Thank you for being part of it.
          </p>
        </div>
      </section>

      {/* Giving embed */}
      <section
        className="px-5 py-[72px] md:py-[100px] md:px-12"
        style={{ background: 'var(--lp-surface)' }}
      >
        <div className="max-w-[960px]">
          {/* TODO: replace this placeholder with the Breeze giving iframe once the URL is confirmed */}
          <div
            className="w-full flex items-center justify-center min-h-[400px] border"
            style={{ borderColor: 'var(--lp-border)', background: 'var(--lp-bg)' }}
          >
            <p
              className="text-[15px]"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
            >
              Breeze giving embed coming soon
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
