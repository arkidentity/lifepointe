export function Vision() {
  return (
    <section
      className="always-light relative overflow-hidden px-5 py-[72px] md:py-[120px] md:px-12 border-b"
      style={{
        background: 'var(--lp-bg-alt)',
        borderColor: 'var(--lp-border)',
      }}
    >
      {/* Dark theme: accent glow */}
      <div
        className="dark:block hidden absolute top-1/2 -right-[100px] -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(47,143,132,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Light theme: decorative leaf mark */}
      <svg
        className="dark:hidden block absolute -right-[60px] top-1/2 -translate-y-1/2 pointer-events-none"
        width="400"
        height="400"
        viewBox="0 0 80 80"
        fill="none"
        style={{ opacity: 0.05 }}
        aria-hidden="true"
      >
        <path d="M40 8 C40 8 40 38 40 52" stroke="var(--lp-accent)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M40 20 C30 10 14 12 10 22 C18 22 30 26 40 36" fill="var(--lp-accent)" />
        <path d="M40 20 C50 10 66 12 70 22 C62 22 50 26 40 36" fill="var(--lp-accent)" />
        <path d="M40 8 C40 8 36 2 40 0 C44 2 40 8 40 8" fill="var(--lp-accent)" />
      </svg>

      <div className="relative z-[2]">
        <p
          className="text-[13px] font-medium tracking-[0.2em] uppercase mb-7"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }}
        >
          Our Vision
        </p>
        <h2
          className="font-black leading-[1.1] mb-7"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 56px)',
            color: 'var(--lp-text)',
          }}
        >
          We&apos;re Building Something
          <br />
          in Westfield.
        </h2>
        <p
          className="text-[17px] leading-[1.85] mb-5"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
        >
          Lifepointe exists to see Westfield transformed by the presence and power of Jesus. We call
          it{' '}
          <strong style={{ color: 'var(--lp-text)', fontWeight: 500 }}>
            &ldquo;In Indy as it is in Heaven.&rdquo;
          </strong>{' '}
          What God does in his people should visibly change the city around them.
        </p>
        <p
          className="text-[17px] leading-[1.85] mb-0"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
        >
          We are not waiting for revival to come to Indiana. We are becoming a place of revival that
          sends it out.
        </p>
        <p
          className="font-bold italic leading-[1.4] mt-9 pt-8 border-t"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(18px, 2.2vw, 26px)',
            color: 'var(--lp-accent-hover)',
            borderColor: 'var(--lp-border)',
          }}
        >
          Ambassadors of Christ don&apos;t just attend a church. They carry one.
        </p>
      </div>
    </section>
  )
}
