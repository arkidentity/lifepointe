'use client'

import Script from 'next/script'

export function VisitContact() {
  return (
    <section
      className="always-light px-5 py-[64px] md:py-[88px] md:px-12"
      style={{ background: 'var(--lp-bg-alt)' }}
    >
      <div className="max-w-[560px]">
        <p
          className="text-[13px] font-medium tracking-[0.2em] uppercase mb-5"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }}
        >
          Connect With Us
        </p>
        <h2
          className="font-bold leading-[1.2] mb-5"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(24px, 2.8vw, 36px)',
            color: 'var(--lp-text)',
          }}
        >
          We&apos;d love to hear from you before Sunday.
        </h2>
        <p
          className="text-[16px] leading-[1.8] mb-8"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
        >
          First-time questions, accessibility needs, parking — fill out the form below and someone
          will get back to you before the week is out.
        </p>

        {/* Breeze connect card embed */}
        <div
          className="breeze_form_embed"
          data-subdomain="lifepointeindy"
          data-address="b14756"
          data-width="100%"
          data-border_width="0"
          data-border_color="000000"
          data-background_color="EFEBE4"
          data-button_color="2F8F84"
        />
        <Script
          src="https://app.breezechms.com/js/form_embed.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  )
}
