import { cookies } from 'next/headers'
import { ADMIN_NAME_COOKIE, isAdmin } from '@/lib/admin'

// A review note from the admin tab goes to the team's Groundwork inbox for this church. The
// secret stays on this server; the browser only ever talks to this route. Only signed-in admins
// can send one, and the name comes from their sign-in, not the request.
export async function POST(req: Request) {
  if (!(await isAdmin())) return new Response('Sign in first', { status: 401 })
  const url = process.env.GROUNDWORK_URL?.trim()
  const secret = process.env.GROUNDWORK_NOTES_SECRET?.trim()
  const client = process.env.GROUNDWORK_CLIENT?.trim() ?? 'lifepointe'
  if (!url || !secret || !client) return new Response('Notes are not set up', { status: 503 })
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return new Response('Bad JSON', { status: 400 })
  }
  const text = String(body.text ?? '').trim()
  if (!text) return new Response('Empty note', { status: 400 })
  const from = decodeURIComponent((await cookies()).get(ADMIN_NAME_COOKIE)?.value ?? 'An admin')
  const res = await fetch(`${url.replace(/\/$/, '')}/api/notes`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${secret}` },
    body: JSON.stringify({
      client,
      from: from.slice(0, 80),
      text: text.slice(0, 2000),
      page: String(body.page ?? '').slice(0, 300),
      widget: body.widget ? String(body.widget).slice(0, 80) : undefined,
      x: Number(body.x),
      y: Number(body.y),
    }),
  })
  if (res.ok) return new Response(null, { status: 204 })
  // Say which side refused, so a failed note can be fixed (no secrets in the reply).
  const why = (await res.text().catch(() => '')).slice(0, 120)
  return new Response(`Groundwork said ${res.status}${why ? `: ${why}` : ''}`, { status: 502 })
}
