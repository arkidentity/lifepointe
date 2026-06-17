'use client'

import Link from 'next/link'

const visitLinks = [
  { label: 'Plan Your Visit',   href: '/visit' },
  { label: 'Kids',              href: '/kids' },
  { label: 'Events',            href: '/events' },
  { label: 'Watch',             href: '/watch' },
]
const connectLinks = [
  { label: 'Groups',            href: '/groups' },
  { label: 'Missions',          href: '/missions' },
  { label: 'Prayer',            href: '/prayer' },
  { label: 'Give',              href: '/give' },
]
const aboutLinks = [
  { label: 'About',             href: '/about' },
  { label: 'Faith Montessori',  href: '/faith-montessori' },
]

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[15px] no-underline transition-colors duration-200"
        style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-footer-link)' }}
        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--lp-footer-link-hover)')}
        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--lp-footer-link)')}
      >
        {children}
      </Link>
    </li>
  )
}

export function Footer() {
  return (
    <footer
      className="px-5 pt-12 pb-8 md:px-12 md:pt-[60px] md:pb-10 border-t"
      style={{
        background: 'var(--lp-footer-bg)',
        borderColor: 'var(--lp-footer-border)',
      }}
    >
      {/* Top grid */}
      <div className="md:grid md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-12 md:mb-14">
        {/* Brand column */}
        <div className="mb-9 md:mb-0">
          <span
            className="block text-[20px] font-bold mb-3"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--lp-footer-wordmark)' }}
          >
            Lifepointe
          </span>
          <p
            className="text-[15px] italic leading-[1.7] mb-5"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-footer-tagline)' }}
          >
            A church in Westfield pursuing
            <br />
            Jesus over everything.
          </p>
          {/* Social icons */}
          <div className="flex gap-3">
            {[
              {
                label: 'Facebook',
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                ),
              },
              {
                label: 'Instagram',
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                ),
              },
              {
                label: 'YouTube',
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                  </svg>
                ),
              },
            ].map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center border no-underline transition-all duration-200"
                style={{
                  borderColor: 'var(--lp-footer-social-border)',
                  color: 'var(--lp-footer-social-color)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--lp-accent)'
                  el.style.color = 'var(--lp-accent)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--lp-footer-social-border)'
                  el.style.color = 'var(--lp-footer-social-color)'
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns — 2-col grid on mobile, individual cols on desktop */}
        <div className="grid grid-cols-2 gap-8 md:contents mb-10 md:mb-0">
          {[
            { title: 'Visit',   links: visitLinks },
            { title: 'Connect', links: connectLinks },
            { title: 'About',   links: aboutLinks },
          ].map(({ title, links }) => (
            <div key={title}>
              <p
                className="text-[13px] font-medium tracking-[0.15em] uppercase mb-4"
                style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-footer-col-title)' }}
              >
                {title}
              </p>
              <ul className="list-none flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <FooterLink key={href} href={href}>{label}</FooterLink>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="pt-6 border-t md:flex md:items-center md:justify-between"
        style={{ borderColor: 'var(--lp-footer-border)' }}
      >
        <p
          className="text-[14px] mb-1.5 md:mb-0"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-footer-copy)' }}
        >
          &copy; 2025 Lifepointe Church. All rights reserved.
        </p>
        <p
          className="text-[14px] leading-[1.6] md:text-right"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-footer-addr)' }}
        >
          3233 West 166th Street, Westfield, IN 46074 &nbsp;·&nbsp; info@lpcwestfield.com
        </p>
      </div>
    </footer>
  )
}
