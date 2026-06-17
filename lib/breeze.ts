export interface BreezeEvent {
  id: string
  name: string
  start_datetime: string
  end_datetime: string
}

// Map Breeze event names to display-friendly labels and descriptions
export const EVENT_META: Record<string, { label: string; description: string; icon: string }> = {
  'Sunday Worship': {
    label: 'Sunday Worship',
    description: 'Join us for worship, the Word, and prayer. About 75 minutes.',
    icon: 'worship',
  },
  'Kidzone': {
    label: 'Lifepointe Kids',
    description: 'Age-appropriate environments for infants through 4th grade.',
    icon: 'kids',
  },
  '5-6th Grade Class': {
    label: '5th–6th Grade',
    description: 'Dedicated environment for upper-elementary students.',
    icon: 'kids',
  },
  'Lifepointe Youth': {
    label: 'Youth Night',
    description: 'Sunday evening gathering for middle and high school students.',
    icon: 'youth',
  },
}

export async function getUpcomingEvents(days = 28): Promise<BreezeEvent[]> {
  const apiKey = process.env.BREEZE_API_KEY
  const subdomain = process.env.BREEZE_SUBDOMAIN ?? 'lifepointeindy'

  if (!apiKey) return []

  const start = new Date().toISOString().split('T')[0]
  const end = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

  try {
    const res = await fetch(
      `https://${subdomain}.breezechms.com/api/events/list?start=${start}&end=${end}`,
      {
        headers: { 'Api-Key': apiKey },
        next: { revalidate: 3600 },
      }
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

// Group events by calendar date (YYYY-MM-DD)
export function groupByDate(events: BreezeEvent[]): Map<string, BreezeEvent[]> {
  const map = new Map<string, BreezeEvent[]>()
  for (const event of events) {
    const date = event.start_datetime.split(' ')[0]
    if (!map.has(date)) map.set(date, [])
    map.get(date)!.push(event)
  }
  return map
}

// Format "2026-06-22" → "Sunday, June 22"
export function formatDate(dateStr: string): string {
  const [year, month, day] = dateStr.split('-').map(Number)
  const d = new Date(year, month - 1, day)
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
}

// Format "10:00:00" → "10:00 AM"
// Returns null for midnight (all-day events)
export function formatTime(timeStr: string): string | null {
  const [h, m] = timeStr.split(':').map(Number)
  if (h === 0 && m === 0) return null
  const period = h >= 12 ? 'PM' : 'AM'
  const hour = h % 12 || 12
  return m === 0 ? `${hour} ${period}` : `${hour}:${String(m).padStart(2, '0')} ${period}`
}
