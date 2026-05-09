'use client'

import Link from 'next/link'

export function SermonPreview() {
  return (
    <section
      className="px-5 py-14 md:py-24 md:px-12 border-b"
      style={{
        background: 'var(--lp-surface)',
        borderColor: 'var(--lp-border)',
      }}
    >
<div className="flex flex-col md:grid md:grid-cols-2 gap-7 md:gap-16 md:max-w-[1100px] md:items-center">
        {/* Thumbnail */}
        <div className="relative" style={{ aspectRatio: '16/9' }}>
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'var(--lp-sermon-thumb-bg)' }}
          >
            <div
              className="w-[52px] h-[52px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200"
              style={{
                border: '1px solid var(--lp-play-btn-border)',
                background: 'var(--lp-play-btn-bg)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--lp-play-btn-hover-border)'
                el.style.background = 'var(--lp-play-btn-hover-bg)'
                el.style.boxShadow = 'var(--lp-play-btn-hover-shadow)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'var(--lp-play-btn-border)'
                el.style.background = 'var(--lp-play-btn-bg)'
                el.style.boxShadow = 'none'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '3px' }}>
                <path d="M8 5.14v14l11-7-11-7z" fill="var(--lp-play-icon-color)" />
              </svg>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-col gap-3">
          <h2
            className="font-bold leading-[1.15]"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 3vw, 40px)',
              color: 'var(--lp-text)',
            }}
          >
            Sermon Title Goes Here
          </h2>
          <p
            className="text-[14px]"
            style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
          >
            May 4, 2025 &nbsp;·&nbsp; Pastor Josh
          </p>
          <p
            className="text-[16px] leading-[1.75]"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text)' }}
          >
            A short description of the message pulled from the YouTube video description. Two or three
            sentences that give a sense of what was preached.
          </p>
          <div className="flex items-center gap-4 mt-1">
            <Link
              href="/watch"
              className="flex items-center gap-2 text-[12px] font-medium tracking-[0.1em] uppercase no-underline transition-colors duration-200 group"
              style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--lp-sermon-link-hover)')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--lp-text-muted)')}
            >
              All Sermons
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
