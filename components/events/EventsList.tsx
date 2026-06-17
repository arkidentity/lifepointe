import { getUpcomingEvents, groupByDate, formatDate, formatTime, EVENT_META } from '@/lib/breeze'

export async function EventsList() {
  const events = await getUpcomingEvents(28)
  const grouped = groupByDate(events)
  const dates = Array.from(grouped.keys()).sort()

  return (
    <section
      className="px-5 py-[72px] md:py-[100px] md:px-12"
      style={{ background: 'var(--lp-bg)' }}
    >
      <div className="max-w-[780px]">
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
          className="text-[17px] leading-[1.8] mb-14 max-w-[520px]"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
        >
          Everything happening at Lifepointe over the next four weeks.
        </p>

        {dates.length === 0 ? (
          <p
            className="text-[16px]"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
          >
            No upcoming events found. Check back soon.
          </p>
        ) : (
          <div className="flex flex-col gap-10">
            {dates.map((date) => {
              const dayEvents = grouped.get(date)!
              return (
                <div key={date}>
                  {/* Date header */}
                  <div
                    className="flex items-center gap-4 mb-5"
                  >
                    <p
                      className="text-[13px] font-medium tracking-[0.15em] uppercase whitespace-nowrap"
                      style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-accent)' }}
                    >
                      {formatDate(date)}
                    </p>
                    <div
                      className="flex-1 h-px"
                      style={{ background: 'var(--lp-border)' }}
                    />
                  </div>

                  {/* Events for this date */}
                  <div className="flex flex-col gap-3">
                    {dayEvents.map((event) => {
                      const meta = EVENT_META[event.name]
                      const startTime = formatTime(event.start_datetime.split(' ')[1])
                      const endTime = formatTime(event.end_datetime.split(' ')[1])

                      return (
                        <div
                          key={event.id}
                          className="flex items-start gap-5 p-5 border"
                          style={{
                            borderColor: 'var(--lp-border)',
                            background: 'var(--lp-surface)',
                          }}
                        >
                          {/* Time column */}
                          <div
                            className="w-[80px] shrink-0 pt-0.5"
                          >
                            {startTime ? (
                              <>
                                <p
                                  className="text-[14px] font-medium leading-tight"
                                  style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text)' }}
                                >
                                  {startTime}
                                </p>
                                {endTime && (
                                  <p
                                    className="text-[13px] leading-tight mt-0.5"
                                    style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
                                  >
                                    {endTime}
                                  </p>
                                )}
                              </>
                            ) : (
                              <p
                                className="text-[13px]"
                                style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text-muted)' }}
                              >
                                All Day
                              </p>
                            )}
                          </div>

                          {/* Divider */}
                          <div
                            className="w-px self-stretch shrink-0"
                            style={{ background: 'var(--lp-border)' }}
                          />

                          {/* Event info */}
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-[16px] font-medium mb-1"
                              style={{ fontFamily: 'var(--font-ui)', color: 'var(--lp-text)' }}
                            >
                              {meta?.label ?? event.name}
                            </p>
                            {meta?.description && (
                              <p
                                className="text-[14px] leading-[1.6]"
                                style={{ fontFamily: 'var(--font-body)', color: 'var(--lp-text-muted)' }}
                              >
                                {meta.description}
                              </p>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
