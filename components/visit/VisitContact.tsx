export function VisitContact() {
  return (
    <section
      className="always-light px-5 py-[64px] md:py-[88px] md:px-12 text-center"
      style={{ background: 'var(--lp-bg-alt)' }}
    >
      <div className="max-w-[480px] mx-auto">
        <p
          className="text-[11px] font-medium tracking-[0.2em] uppercase mb-5"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }}
        >
          Questions?
        </p>
        <h2
          className="font-bold leading-[1.2] mb-5"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px, 2.8vw, 36px)',
            color: 'var(--lp-text)',
          }}
        >
          We&apos;re here to help before you arrive.
        </h2>
        <p
          className="text-[16px] leading-[1.8] mb-8"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
        >
          First-time questions, accessibility needs, parking — reach out and someone will get back
          to you before Sunday.
        </p>
        <a
          href="mailto:info@lpcwestfield.com"
          className="text-[15px] font-medium no-underline border-b pb-px transition-colors duration-200"
          style={{
            fontFamily: 'var(--font-ui)',
            color: 'var(--lp-accent)',
            borderColor: 'var(--lp-accent)',
          }}
        >
          info@lpcwestfield.com
        </a>
      </div>
    </section>
  )
}
