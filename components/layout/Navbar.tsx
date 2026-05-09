'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { label: "I'm New", href: '/im-new' },
  { label: 'Watch',   href: '/watch' },
  { label: 'About',   href: '/about' },
  { label: 'Events',  href: '/events' },
  { label: 'Give',    href: '/give' },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-8 h-8" />

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="flex items-center justify-center w-8 h-8 transition-opacity opacity-60 hover:opacity-100"
    >
      {isDark ? (
        /* Sun icon */
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--lp-text)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        </svg>
      ) : (
        /* Moon icon */
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--lp-text)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  )
}

export function Navbar() {
  return (
    <nav
      style={{
        background: 'var(--lp-nav-bg)',
        borderBottom: '1px solid var(--lp-border)',
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 h-[60px] md:h-[72px] md:px-12 backdrop-blur-[12px]"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center no-underline">
        <span
          className="text-[18px] font-bold tracking-[0.02em]"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--lp-text)' }}
        >
          Lifepointe
        </span>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-9 list-none">
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-[11px] font-medium tracking-[0.12em] uppercase no-underline transition-colors duration-200"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--lp-text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--lp-text-muted)')}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/im-new"
            className="text-[11px] font-medium tracking-[0.12em] uppercase no-underline px-[18px] py-2 border transition-all duration-200"
            style={{
              fontFamily: 'var(--font-ui)',
              color: 'var(--lp-nav-cta-color)',
              background: 'var(--lp-nav-cta-bg)',
              borderColor: 'var(--lp-nav-cta-border)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'var(--lp-nav-cta-hover-bg)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--lp-accent)'
              ;(e.currentTarget as HTMLElement).style.color = 'var(--lp-nav-cta-color)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'var(--lp-nav-cta-bg)'
              ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--lp-nav-cta-border)'
            }}
          >
            Plan Your Visit
          </Link>
        </li>
      </ul>

      {/* Desktop theme toggle */}
      <div className="hidden md:flex items-center">
        <ThemeToggle />
      </div>

      {/* Mobile: Plan Your Visit + hamburger */}
      <div className="flex md:hidden items-center gap-3">
        <ThemeToggle />
        <Link
          href="/im-new"
          className="text-[11px] font-medium tracking-[0.1em] uppercase no-underline px-4 py-2"
          style={{
            fontFamily: 'var(--font-ui)',
            color: 'var(--lp-mobile-cta-color)',
            background: 'var(--lp-accent)',
          }}
        >
          Plan Your Visit
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="flex flex-col justify-center gap-[5px] w-8 h-8"
            >
              <span className="block w-5 h-px" style={{ background: 'var(--lp-text)' }} />
              <span className="block w-5 h-px" style={{ background: 'var(--lp-text)' }} />
              <span className="block w-3 h-px" style={{ background: 'var(--lp-text)' }} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] p-8 flex flex-col gap-8"
            style={{ background: 'var(--lp-surface)', borderLeft: '1px solid var(--lp-border)' }}
          >
            <nav className="flex flex-col gap-6 mt-4">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[13px] font-medium tracking-[0.12em] uppercase no-underline transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Link
              href="/im-new"
              className="text-[12px] font-medium tracking-[0.12em] uppercase no-underline px-6 py-4 text-center"
              style={{
                fontFamily: 'var(--font-ui)',
                color: 'var(--lp-btn-text)',
                background: 'var(--lp-accent)',
              }}
            >
              Plan Your Visit
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
