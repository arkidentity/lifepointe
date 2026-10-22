import { NextResponse } from 'next/server'
import { ADMIN_COOKIE, ADMIN_NAME_COOKIE, adminToken } from '@/lib/admin'

const YEAR = 60 * 60 * 24 * 365

// Sign in with the site's passcode; DELETE signs out.
export async function POST(req: Request) {
  const passcode = process.env.ADMIN_PASSCODE?.trim()
  if (!passcode) return NextResponse.json({ error: 'Admin sign-in is not set up on this site.' }, { status: 503 })
  let body: { code?: string; name?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Bad request.' }, { status: 400 })
  }
  const name = (body.name ?? '').trim().slice(0, 60)
  if (!name) return NextResponse.json({ error: 'Add your name so we know who left the note.' }, { status: 400 })
  if ((body.code ?? '').trim() !== passcode) return NextResponse.json({ error: 'That passcode isn’t right.' }, { status: 401 })
  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE, adminToken(passcode), { httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: YEAR })
  res.cookies.set(ADMIN_NAME_COOKIE, encodeURIComponent(name), { secure: true, sameSite: 'lax', path: '/', maxAge: YEAR })
  return res
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true })
  res.cookies.delete(ADMIN_COOKIE)
  res.cookies.delete(ADMIN_NAME_COOKIE)
  return res
}
