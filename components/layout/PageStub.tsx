interface PageStubProps {
  title: string
  description: string
}

export function PageStub({ title, description }: PageStubProps) {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-24 text-center">
      <p
        className="text-[11px] font-medium tracking-[0.18em] uppercase mb-5"
        style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }}
      >
        Coming Soon
      </p>
      <h1
        className="text-[40px] md:text-[64px] font-bold leading-[1.05] mb-6"
        style={{ fontFamily: 'var(--font-display)', color: 'var(--lp-text)' }}
      >
        {title}
      </h1>
      <p
        className="text-[16px] leading-[1.7] max-w-[520px]"
        style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
      >
        {description}
      </p>
    </section>
  )
}
