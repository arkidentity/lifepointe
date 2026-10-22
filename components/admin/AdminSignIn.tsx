'use client'

import { useEffect, useState } from 'react'
import { ADMIN_NAME_COOKIE } from '@/lib/admin-shared'

export function AdminSignIn() {
  const [signedIn, setSignedIn] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    const hit = document.cookie.split('; ').find((c) => c.startsWith(`${ADMIN_NAME_COOKIE}=`))
    setSignedIn(hit ? decodeURIComponent(hit.split('=')[1]) : null)
  }, [])

  if (signedIn) {
    return (
      <div className="font-[family-name:var(--font-ui)] flex flex-col gap-4">
        <p className="text-[17px]">You’re signed in as <b>{signedIn}</b>. Look for the Note button in the bottom-left corner.</p>
        <div className="flex gap-3">
          <a href="/" className="btn">Go to the site</a>
          <button type="button" className="btn-ghost" onClick={async () => { await fetch('/api/admin', { method: 'DELETE' }); setSignedIn(null) }}>Sign out</button>
        </div>
      </div>
    )
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    setError('')
    const res = await fetch('/api/admin', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name, code }) }).catch(() => null)
    setBusy(false)
    if (res?.ok) window.location.href = '/'
    else setError(res ? ((await res.json().catch(() => ({}))).error ?? 'That didn’t work.') : 'No connection.')
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      <div><label className="label" htmlFor="name">Your first name</label><input id="name" className="field" value={name} onChange={(e) => setName(e.target.value)} autoComplete="given-name" /></div>
      <div><label className="label" htmlFor="code">Passcode</label><input id="code" type="password" className="field" value={code} onChange={(e) => setCode(e.target.value)} /></div>
      {error && <p className="font-[family-name:var(--font-ui)] text-[14px] text-lp-accent">{error}</p>}
      <div className="flex justify-end"><button type="submit" className="btn" disabled={busy || !name.trim() || !code.trim()}>Sign in</button></div>
    </form>
  )
}
