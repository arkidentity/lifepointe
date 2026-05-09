'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

const SLIDE_DURATION = 4000

const phrases = [
  {
    text: 'People of a Book',
    sub: 'A community submitted to the authority of Scripture.',
  },
  {
    text: 'People of His Presence',
    sub: 'We are pursuing a Person who saves, heals and delivers.',
  },
  {
    text: 'People on a Mission',
    sub: 'Serving the people of Westfield with the love of God.',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [started, setStarted] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const t = setTimeout(() => {
      setStarted(true)
      intervalRef.current = setInterval(() => {
        setCurrent(c => (c + 1) % 3)
      }, SLIDE_DURATION)
    }, 1400)
    return () => {
      clearTimeout(t)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  function goTo(index: number) {
    setCurrent(index)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (started) {
      intervalRef.current = setInterval(() => {
        setCurrent(c => (c + 1) % 3)
      }, SLIDE_DURATION)
    }
  }

  return (
    <section
      className="relative overflow-hidden pt-[60px] md:pt-[72px]"
      style={{ background: 'var(--lp-bg)' }}
    >
      {/* Desktop slide backgrounds */}
      {[1, 2, 3].map(i => (
        <div
          key={i}
          className="absolute inset-0 opacity-0 transition-opacity duration-[1400ms] ease-in-out z-0 hidden md:block"
          style={{
            opacity: current === i - 1 ? 1 : 0,
            background: `var(--lp-slide-bg-${i})`,
          }}
        />
      ))}

      {/* Grain overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          opacity: 'var(--lp-grain-opacity)',
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Desktop accent rule */}
      <div
        className="absolute left-12 top-1/2 -translate-y-1/2 z-[2] hidden md:block"
        style={{
          width: 'var(--lp-accent-line-w)',
          height: '180px',
          background: 'linear-gradient(to bottom, transparent, var(--lp-accent), transparent)',
          opacity: 0.35,
        }}
      />

      {/* Desktop slide indicators */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 z-10 hidden md:flex flex-col gap-3">
        {phrases.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="relative overflow-hidden cursor-pointer transition-all duration-300"
            style={{
              width: 'var(--lp-accent-line-w)',
              height: current === i ? '48px' : '32px',
              background: current === i ? 'var(--lp-indicator-active)' : 'var(--lp-indicator-track)',
            }}
          >
            {current === i && (
              <span
                className="absolute top-0 left-0 w-full"
                style={{
                  height: '100%',
                  background: 'var(--lp-accent)',
                  animation: `slideIndicator ${SLIDE_DURATION}ms linear forwards`,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Hero content */}
      <div
        className="relative z-[5] pt-12 px-5 md:pt-20 md:px-8 md:pl-20 md:max-w-[860px]"
        style={{}}
      >
        {/* Headlines */}
        <h1
          className="font-black leading-[1.1] tracking-[-0.01em] mb-3.5 md:mb-7"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(22px, 6vw, 72px)',
          }}
        >
          {phrases.map((p, i) => (
            <span
              key={i}
              className="block transition-colors duration-[600ms] ease-in-out"
              style={{
                color: current === i ? 'var(--lp-hero-phrase-active)' : 'var(--lp-hero-phrase-dim)',
                opacity: 0,
                animation: `fadeUp 0.7s ease forwards ${0.35 + i * 0.2}s`,
              }}
            >
              {p.text}
              <span style={{ color: 'var(--lp-accent)' }}>.</span>
            </span>
          ))}
        </h1>

        {/* Subline — desktop only */}
        <div
          className="relative overflow-hidden mb-12 hidden md:block"
          style={{
            height: '44px',
            opacity: 0,
            animation: 'fadeUp 0.6s ease forwards 0.9s',
          }}
        >
          {phrases.map((p, i) => (
            <p
              key={i}
              className="absolute top-0 left-0 right-0 italic leading-[1.6] transition-all duration-700 ease-in-out"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                color: 'var(--lp-text)',
                opacity: current === i ? 0.75 : 0,
                transform: current === i ? 'translateY(0)' : 'translateY(8px)',
              }}
            >
              {p.sub}
            </p>
          ))}
        </div>
      </div>

      {/* Mobile inline image with subtitle overlay */}
      <div
        className="relative w-full md:hidden overflow-hidden mb-6"
        style={{
          aspectRatio: '4 / 3',
          opacity: 0,
          animation: 'fadeUp 0.6s ease forwards 1.0s',
        }}
      >
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{
              opacity: current === i - 1 ? 1 : 0,
              background: `var(--lp-hero-img-${i})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}

        {/* Subtitle overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10"
          style={{
            background: 'rgba(8, 14, 24, 0.82)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderLeft: '3px solid var(--lp-accent)',
          }}
        >
          <div className="relative px-4" style={{ height: '72px' }}>
            {phrases.map((p, i) => (
              <p
                key={i}
                className="italic leading-[1.5] transition-all duration-700 ease-in-out m-0"
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  right: '16px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '20px',
                  color: '#F0EBE0',
                  opacity: current === i ? 1 : 0,
                  transform: current === i ? 'translateY(0)' : 'translateY(6px)',
                }}
              >
                {p.sub}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile dot indicators */}
      <div
        className="flex md:hidden gap-2 mb-6 px-5"
        style={{
          opacity: 0,
          animation: 'fadeUp 0.4s ease forwards 1.1s',
        }}
      >
        {phrases.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="relative overflow-hidden h-0.5 cursor-pointer transition-all duration-300"
            style={{
              width: current === i ? '32px' : '20px',
              background: current === i ? 'var(--lp-dot-active)' : 'var(--lp-dot-track)',
            }}
          >
            {current === i && (
              <span
                className="absolute top-0 left-0 h-full"
                style={{
                  width: '100%',
                  background: 'var(--lp-accent)',
                  animation: `slideIndicator ${SLIDE_DURATION}ms linear forwards`,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* CTA */}
      <div
        className="px-5 pb-8 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8 md:px-8 md:pl-20 md:pb-20"
        style={{
          opacity: 0,
          animation: 'fadeUp 0.6s ease forwards 1.1s',
        }}
      >
        <Link
          href="/im-new"
          className="inline-block text-center md:text-left text-[13px] font-medium tracking-[0.1em] uppercase no-underline px-8 py-[15px] transition-all duration-200 hover:-translate-y-px"
          style={{
            fontFamily: 'var(--font-ui)',
            color: 'var(--lp-btn-text)',
            background: 'var(--lp-accent)',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = 'var(--lp-accent-hover)')}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--lp-accent)')}
        >
          Plan Your Visit
        </Link>
        <div
          className="text-[15px] leading-[1.75]"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
        >
          <strong style={{ color: 'var(--lp-text)', fontWeight: 600, fontSize: '17px' }}>Sundays at 10AM</strong>
          <br />
          3233 West 166th Street, Westfield, IN{' '}
          <a
            href="https://maps.google.com/?q=3233+West+166th+Street+Westfield+IN"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] no-underline hover:underline"
            style={{ color: 'var(--lp-accent)' }}
          >
            Get Directions
          </a>
        </div>
      </div>

      {/* Bottom rule */}
      <div
        className="md:absolute md:bottom-0 md:left-0 md:right-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, var(--lp-border) 30%, var(--lp-border) 70%, transparent)',
        }}
      />

      <style>{`
        @keyframes slideIndicator {
          from { transform: scaleX(0); transform-origin: left; }
          to   { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </section>
  )
}
