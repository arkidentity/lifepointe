'use client'

import { useEffect, useState } from 'react'
import { ADMIN_NAME_COOKIE } from '@/lib/admin-shared'

// Review note tab: only signed-in admins see it (sign in at /admin). Tap "Note", tap the spot,
// say what you think. The note reaches the team in Groundwork with the page and the section.
// Sections name themselves with data-section="…"; the nearest one under the tap is sent.

type Spot = { page: string; widget?: string; x: number; y: number }

function readName() {
  const hit = document.cookie.split('; ').find((c) => c.startsWith(`${ADMIN_NAME_COOKIE}=`))
  return hit ? decodeURIComponent(hit.split('=')[1]) : null
}

export function NoteTab() {
  const [name, setName] = useState<string | null>(null)
  const [picking, setPicking] = useState(false)
  const [spot, setSpot] = useState<Spot | null>(null)
  const [text, setText] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [why, setWhy] = useState('')

  useEffect(() => setName(readName()), [])
  if (!name) return null

  const pick = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    setPicking(false)
    // Look under the overlay for the section that was tapped.
    requestAnimationFrame(() => {
      const el = document.elementFromPoint(clientX, clientY)
      const section = el?.closest('[data-section], section, header, footer')
      // No data-section yet on most blocks: fall back to the block's id or its first heading.
      const widget = section?.getAttribute('data-section') ?? (section?.id || section?.querySelector('h1, h2, h3')?.textContent?.trim().slice(0, 60)) ?? undefined
      setSpot({ page: window.location.pathname, widget, x: (clientX / window.innerWidth) * 100, y: (clientY / window.innerHeight) * 100 })
      setText('')
      setState('idle')
    })
  }

  const send = async () => {
    if (!spot) return
    setState('sending')
    const res = await fetch('/api/note', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ ...spot, text }) }).catch(() => null)
    if (!res?.ok) setWhy(res ? `${res.status} ${(await res.text().catch(() => '')).slice(0, 160)}` : 'no connection')
    setState(res?.ok ? 'sent' : 'error')
    if (res?.ok) setTimeout(() => setSpot(null), 1200)
  }

  return (
    <>
      {picking && (
        <div onClick={pick} className="fixed inset-0 z-[100] cursor-crosshair bg-black/25">
          <p className="font-[family-name:var(--font-ui)] mx-auto mt-28 w-fit rounded-full px-4 py-2 text-[14px] font-medium bg-lp-accent text-white">Tap the spot</p>
        </div>
      )}
      {spot && (
        <div className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4">
          <div className="font-[family-name:var(--font-ui)] mx-auto max-w-md rounded-xl border border-lp-text/15 bg-lp-surface p-4 shadow-xl">
            {state === 'sent' ? (
              <p className="text-[15px] font-medium">Thanks, {name}. It’s with the team.</p>
            ) : (
              <div className="flex flex-col gap-3">
                <p className="text-[15px] font-bold">Leave a note</p>
                <p className="text-[13px] text-lp-muted">{spot.widget ? `On “${spot.widget}”` : 'On this page'}. Copy, colors, photos, anything that looks off.</p>
                <textarea autoFocus value={text} onChange={(e) => setText(e.target.value)} rows={4} placeholder="What should change?" className="field !text-[15px]" />
                {state === 'error' && <p className="text-[13px] text-lp-accent">That didn’t send. Try again.{why && <span className="block opacity-80">({why})</span>}</p>}
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setSpot(null)} className="btn-ghost !px-4 !py-2 !text-[14px]">Cancel</button>
                  <button type="button" disabled={!text.trim() || state === 'sending'} onClick={send} className="btn !px-4 !py-2 !text-[14px]">Send</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {!spot && <button
        type="button"
        onClick={() => setPicking((p) => !p)}
        aria-label="Leave a note"
        className="font-[family-name:var(--font-ui)] fixed bottom-5 left-5 z-[100] rounded-full px-4 py-2.5 text-[14px] font-medium shadow-lg bg-lp-accent text-white"
      >
        {picking ? 'Cancel' : 'Note'}
      </button>}
    </>
  )
}
