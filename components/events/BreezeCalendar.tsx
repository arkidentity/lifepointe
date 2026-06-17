export function BreezeCalendar() {
  return (
    <section
      className="px-5 py-[72px] md:py-[100px] md:px-12 border-b"
      style={{ background: 'var(--lp-bg)', borderColor: 'var(--lp-border)' }}
    >
      <div className="max-w-[960px]">
        <p
          className="text-[13px] font-medium tracking-[0.2em] uppercase mb-5"
          style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }}
        >
          Lifepointe Church
        </p>
        <h1
          className="font-black leading-[1.05] mb-4"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 4.5vw, 60px)',
            color: 'var(--lp-text)',
          }}
        >
          Upcoming Events
        </h1>
        <p
          className="text-[17px] leading-[1.8] mb-12 max-w-[560px]"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
        >
          From Sunday gatherings to community nights, here&apos;s everything happening at Lifepointe.
        </p>

        {/* Breeze calendar embed */}
        <div className="w-full overflow-x-auto">
          <iframe
            src="https://lifepointeindy.breezechms.com/embed/calendar/grid?size=large&color=%23006fba&calendars=eyJpdiI6ImZjS0RjQVNZU3JGL2lBMjdLQlVwaFE9PSIsInZhbHVlIjoiNENqLzh6dk9WNlpTc3Q5elh6TXpNMCthU2FOdENDL2k4VTFDb21KR1ZVaCt5RUU5Zk1IczFMUVltS0VXMUlvaCIsIm1hYyI6ImUzYTVhMWVjMDBhNzMyOTMwOTMxYzY1ZGExZTVmZDdmZDJhOWFhYzkwYTg1YzU4ODFmMGQzYjQ2ODM0M2RhOGIiLCJ0YWciOiIifQ%3D%3D"
            width="900"
            height="1000"
            title="Lifepointe Church Events Calendar"
            style={{ border: 'none', display: 'block', maxWidth: '100%' }}
          />
        </div>
      </div>
    </section>
  )
}
