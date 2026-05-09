# Lifepointe Church — Claude Code Handoff
*Next.js build instructions. Read this entire document before writing a single line of code.*

---

## Project Overview

Building a custom Next.js website for Lifepointe Church in Westfield, Indiana. Hosted on Vercel. GitHub repo. No CMS. Sermon archive auto-populates via YouTube Data API v3. Events auto-populate via Google Calendar API.

**Lead pastor:** Josh (last name TBD — confirm before About page)
**Domain:** lpcwestfield.com (currently on Clover Sites, being replaced entirely)
**Contact:** travis@arkidentity.com

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui — install Button, Card, Sheet (mobile menu)
- **Fonts:** next/font (Google Fonts — Playfair Display, Lora, DM Sans)
- **Hosting:** Vercel
- **Repo:** GitHub

---

## Project Setup

```bash
npx create-next-app@latest lifepointe --typescript --tailwind --app
cd lifepointe
npx shadcn@latest init
npx shadcn@latest add button card sheet
```

---

## Theme System — CRITICAL

The client has not finalized dark vs. light theme. **Build dark. Document light.** Switching is a single file change if the token system is set up correctly from the start.

All colors must live as CSS custom properties in `globals.css`. Never hardcode hex values in components.

### Dark Theme (build this)

```css
:root {
  --bg:           #0D1117;
  --surface:      #111822;
  --surface-2:    #161F2E;
  --text:         #F0EBE0;
  --text-muted:   #9A9080;
  --accent:       #C9622F;
  --accent-hover: #B5511F;
  --border:       rgba(240, 235, 224, 0.08);
  --nav-bg:       rgba(13, 17, 23, 0.88);
}
```

### Light Theme (swap these values when approved)

```css
:root {
  --bg:           #F7F4EF;
  --surface:      #FFFFFF;
  --surface-2:    #EFEBE4;
  --text:         #1A1612;
  --text-muted:   #6B6258;
  --accent:       #2F8F84;
  --accent-hover: #236D64;
  --border:       rgba(26, 22, 18, 0.10);
  --nav-bg:       rgba(247, 244, 239, 0.94);
}
```

Map these to Tailwind in `tailwind.config.ts`:

```ts
extend: {
  colors: {
    bg:         'var(--bg)',
    surface:    'var(--surface)',
    'surface-2':'var(--surface-2)',
    text:       'var(--text)',
    muted:      'var(--text-muted)',
    accent:     'var(--accent)',
    border:     'var(--border)',
  }
}
```

---

## Typography

Install via `next/font/google`. Apply globally in `layout.tsx`.

```ts
import { Playfair_Display, Lora, DM_Sans } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-body',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-ui',
})
```

- **Display/Headlines:** `font-[family-name:var(--font-display)]` — Playfair Display
- **Body/Prose:** `font-[family-name:var(--font-body)]` — Lora
- **UI/Labels/Buttons/Nav:** `font-[family-name:var(--font-ui)]` — DM Sans

---

## File Structure

```
/app
  layout.tsx          ← fonts, metadata, global providers
  page.tsx            ← homepage, imports all sections
  /about
  /im-new
  /watch
  /events
  /give
  /connect
  /groups
  /missions
  /prayer
  /kids
  /live
  /faith-montessori

/components
  /layout
    Navbar.tsx        ← sticky, blur, mobile Sheet menu
    Footer.tsx
  /home
    Hero.tsx          ← slideshow, mobile inline image
    SermonPreview.tsx ← single latest sermon card
    Vision.tsx
    Altar.tsx
  /shared
    SectionLabel.tsx  ← small caps accent label
    Button.tsx        ← wraps shadcn Button with brand styles

/lib
  youtube.ts          ← YouTube Data API v3 fetch functions
  calendar.ts         ← Google Calendar API fetch functions

/types
  sermon.ts
  event.ts

/public
  /images
    /hero             ← hero-book.jpg, hero-presence.jpg, hero-mission.jpg (3:2, 800px min)
    logo-white.svg
    logo-dark.svg
```

---

## Homepage Sections (in scroll order)

### 1. Hero

**Layout:** Mobile-first. On mobile, stack vertically: eyebrow → headline → subline → full-width inline image → dot indicators → CTA + service info. On desktop (768px+), full-viewport-height with background image slideshow behind all content.

**Headline phrases** (all three visible always, inactive ones dimmed):
```
People of a Book.
People of His Presence.
People on a Mission.
```

**Rotating sublines** (one per phrase, synced to active state):
```
0: A community submitted to the authority of Scripture.
1: We are pursuing a Person who saves, heals and delivers.
2: Serving the people of Westfield with the love of God.
```

**Sequence behavior:**
- All three phrases render stacked
- Active phrase: full text color (`--text` or white on dark)
- Inactive phrases: 30% opacity
- Subline, background image (desktop), and inline image (mobile) all sync to active phrase
- Auto-cycles every 4 seconds
- Dot/line indicators are clickable

**Mobile image specs:** 3:2 ratio. Files: `hero-book.jpg`, `hero-presence.jpg`, `hero-mission.jpg`. Place in `/public/images/hero/`. Min 800px wide, compressed under 200kb each. Use `next/image` with `fill` and `object-cover`.

**Desktop background images:** 16:9, min 1200px wide. Same filenames, different exports. Use Next.js Image component with priority on first slide.

**CTA:**
```
[Plan Your Visit]   Sundays at 10AM
                    3233 West 166th Street · Get Directions
```

**Animations:** Staggered fade-up on load for eyebrow (0.2s), phrase 1 (0.4s), phrase 2 (0.65s), phrase 3 (0.9s), subline (1.1s), image (1.0s), CTA (1.3s). Use Tailwind animate or CSS keyframes. No JS animation libraries needed.

---

### 2. Sermon Preview

Pulls latest sermon from YouTube API. Single card layout.

**Mobile:** Stacked (thumbnail above, meta below).
**Desktop:** Two-column grid (thumbnail left, meta right).

**Fields to display:**
- Series tag (from playlist title or video tag)
- Sermon title (video title)
- Date and speaker
- Description (first 2 sentences of video description)
- Watch Now button (links to `/watch` or YouTube)
- "All Sermons →" text link

**Section label:** `The Word, Every Week`

See `/lib/youtube.ts` notes below for API setup.

---

### 3. Vision

**Section label:** `Our Vision`
**Headline:** `We're Building Something in Westfield.`

**Body:**
> Lifepointe exists to see Westfield transformed by the presence and power of Jesus. We call it "In Indy as it is in Heaven." What God does in his people should visibly change the city around them.
>
> We are not waiting for revival to come to Indiana. We are becoming a place of revival that sends it out.

**Kicker (italic, larger, separated by a rule):**
> Ambassadors of Christ don't just attend a church. They carry one.

---

### 4. Altar (Join Us)

Centered layout. On dark theme, uses slightly lighter surface. On light theme, use `--accent` as full background with white text.

**Headline:** `The Altar is Always Open.`

**Body:**
> Repentance, surrender, and encounter are not special occasions at Lifepointe. They are every Sunday. Come as you are. Expect to leave different.

**Below a thin divider rule:**
```
Sundays at 10AM
3233 West 166th Street, Westfield, IN · Get Directions
[Plan Your Visit]
```

---

### 5. Footer

Four-column on desktop, two-column grid on mobile for nav links.

**Brand column:** Lifepointe wordmark, tagline (`A church in Westfield pursuing Jesus over everything.`), social icons (Facebook, Instagram, YouTube).

**Nav columns:**
- Visit: I'm New, Plan Your Visit, Kids Ministry, Events
- Connect: Groups, Missions, Prayer, Give
- About: Who We Are, Staff & Team, Beliefs, Faith Montessori

**Bottom bar:** Copyright + address + email on one row (desktop), stacked (mobile).

Footer background: Always dark (`#090D13`) regardless of theme. It grounds the page.

---

## Navbar

- Sticky, `position: fixed`, backdrop blur
- Logo left, nav links center/right, Plan Your Visit CTA far right
- Mobile: Logo left, Plan Your Visit button right, hamburger icon triggers shadcn `Sheet` for full mobile menu
- Nav links: I'm New, Watch, About, Events, Give
- Active link state: accent color underline

---

## YouTube API Setup (`/lib/youtube.ts`)

```ts
// Fetch latest sermon from playlist
const PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID
const API_KEY = process.env.YOUTUBE_API_KEY

// Endpoint for homepage preview (1 video)
// GET https://www.googleapis.com/youtube/v3/playlistItems
//   ?part=snippet&maxResults=1&playlistId={PLAYLIST_ID}&key={API_KEY}

// Endpoint for sermon archive (paginated, 12 per page)
// GET https://www.googleapis.com/youtube/v3/playlistItems
//   ?part=snippet&maxResults=12&playlistId={PLAYLIST_ID}&key={API_KEY}
//   &pageToken={nextPageToken}
```

Revalidate every 3600 seconds (hourly) using Next.js `fetch` with `{ next: { revalidate: 3600 } }`.

**Environment variables needed:**
```
YOUTUBE_API_KEY=
YOUTUBE_PLAYLIST_ID=
GOOGLE_CALENDAR_API_KEY=
GOOGLE_CALENDAR_ID=
```

These come from the church. Do not hardcode. Store in `.env.local` locally and in Vercel environment variables in production.

---

## Google Calendar API Setup (`/lib/calendar.ts`)

```ts
// Fetch upcoming events
// GET https://www.googleapis.com/calendar/v3/calendars/{CALENDAR_ID}/events
//   ?key={API_KEY}&timeMin={now}&maxResults=10&singleEvents=true&orderBy=startTime
```

Revalidate every 3600 seconds.

---

## Design Details

### Do Not
- Use `purple` anywhere
- Use rounded corners on primary containers (buttons can have slight radius if needed, but keep it minimal)
- Use light backgrounds with colorful accents on the dark theme
- Use Inter, Roboto, or system fonts
- Animate things that don't need to move
- Use autoplay video anywhere

### Accent Rule (left side of hero on desktop)
```css
/* Thin vertical line, gradient fade in/out */
background: linear-gradient(to bottom, transparent, var(--accent), transparent);
width: 1px;
height: 180px;
opacity: 0.35;
```

### Grain Overlay (hero section)
```css
/* Subtle noise texture, low opacity */
background-image: url("data:image/svg+xml,...fractalNoise...");
opacity: 0.5;
pointer-events: none;
```

See the HTML mockup for full grain SVG data URI.

---

## Pages Required (beyond homepage)

All pages listed in `/app` structure above. Build homepage first. Remaining pages are lower priority but routes should exist.

Priority order after homepage:
1. `/watch` — sermon archive with series grouping and filtering
2. `/im-new` — plan your visit info, service times, what to expect
3. `/events` — Google Calendar feed
4. `/about` — vision, staff, beliefs
5. All others

---

## Assets Needed Before Launch

- [ ] Logo SVG files (white version, dark version)
- [ ] 3 hero photos — People of a Book (800px 3:2 + 1200px 16:9)
- [ ] 3 hero photos — People of His Presence (same specs)
- [ ] 3 hero photos — People on a Mission (same specs)
- [ ] YouTube channel Editor access
- [ ] Google Calendar ID from church
- [ ] Josh's last name (for About page and staff)
- [ ] Church's official legal name
- [ ] Confirmation: dark or light theme

---

## Reference Files

Two HTML mockups exist showing the full homepage design in both themes. These are the visual source of truth. Match them precisely.

- `lifepointe-homepage.html` — dark theme
- `lifepointe-homepage-light.html` — light theme with `#2F8F84` accent

Both mockups are mobile-responsive. Resize to ~375px to see mobile layout.
