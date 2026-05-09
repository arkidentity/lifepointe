'use client'

import Link from 'next/link'

export function Altar() {
  return (
    <section
      className="relative overflow-hidden px-5 py-[72px] md:py-[120px] md:px-12 text-center"
      style={{ background: 'var(--lp-altar-bg)' }}
    >
      {/* Dark theme glow */}
      <div
        className="dark:block hidden absolute -bottom-[60px] left-1/2 -translate-x-1/2 w-[500px] h-[250px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,98,47,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-[2] md:max-w-[680px] md:mx-auto">
        <p
          className="text-[11px] font-medium tracking-[0.2em] uppercase mb-5"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-altar-label-color)' }}
        >
          Join Us
        </p>
        <h2
          className="font-black leading-[1.1] mb-5"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 4vw, 54px)',
            color: 'var(--lp-altar-headline-color)',
          }}
        >
          The Altar is Always Open.
        </h2>
        <p
          className="text-[17px] leading-[1.85] mb-10"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-altar-body-color)' }}
        >
          Every Sunday is an opportunity to experience repentance, surrender, and encounter the love of
          God. Come as you are. Expect to leave different.
        </p>

        {/* Divider */}
        <div
          className="w-8 h-px mx-auto mb-9"
          style={{
            background: 'var(--lp-altar-divider-color)',
            opacity: 'var(--lp-altar-divider-opacity)',
          }}
        />

        <p
          className="font-bold mb-3"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px, 2.5vw, 36px)',
            color: 'var(--lp-altar-times-color)',
          }}
        >
          Sundays at 10AM
        </p>
        <p
          className="text-[15px] leading-[1.8] mb-8"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-altar-address-color)' }}
        >
          3233 West 166th Street, Westfield, IN
          <br />
          <a
            href="https://maps.google.com/?q=3233+West+166th+Street+Westfield+IN"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{
              color: 'var(--lp-altar-link-color)',
              textDecoration: 'var(--lp-altar-link-deco)',
            }}
          >
            Get Directions
          </a>
        </p>
        <Link
          href="/im-new"
          className="inline-block text-[13px] font-medium tracking-[0.12em] uppercase no-underline px-10 py-[15px] transition-all duration-200 hover:-translate-y-px"
          style={{
            fontFamily: 'var(--font-ui)',
            color: 'var(--lp-altar-cta-color)',
            background: 'var(--lp-altar-cta-bg)',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--lp-altar-cta-hover-bg)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--lp-altar-cta-bg)')}
        >
          Plan Your Visit
        </Link>
      </div>
    </section>
  )
}
