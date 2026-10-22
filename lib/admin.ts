import { createHash } from 'crypto'
import { cookies } from 'next/headers'

// Admin sign-in for the review note tab. One passcode per site (ADMIN_PASSCODE), shared with the
// church's admins. The httpOnly cookie proves the passcode; the readable one only holds the name
// so the tab knows to show itself. Neither is a real account: it gates notes, nothing else.
export const ADMIN_COOKIE = 'site_admin'
export { ADMIN_NAME_COOKIE } from './admin-shared'

export function adminToken(passcode: string) {
  return createHash('sha256').update(`church-site-admin:${passcode}`).digest('hex')
}

export async function isAdmin() {
  const passcode = process.env.ADMIN_PASSCODE?.trim()
  if (!passcode) return false
  const jar = await cookies()
  return jar.get(ADMIN_COOKIE)?.value === adminToken(passcode)
}
