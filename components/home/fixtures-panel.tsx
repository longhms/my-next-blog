import { formatKickoff } from "@/lib/format";
import { getDictionary, translateFixtureStatus, translateLeague } from "@/lib/i18n";
import type { Fixture, League, Locale } from "@/types/content";

interface FixturesPanelProps {
  fixtures: Fixture[];
  locale: Locale;
}

export function FixturesPanel({ fixtures, locale }: FixturesPanelProps) {
  const dict = getDictionary(locale);

  return (
    <section className="panel p-6 sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">{dict.home.fixtureRadar}</p>
          <h2 className="mt-4 text-3xl font-semibold text-ink">{dict.home.nextOnCalendar}</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-ink-muted">{dict.home.fixtureDescription}</p>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {fixtures.map((fixture) => (
          <article
            key={fixture.id}
            className="rounded-[24px] border border-line bg-surface-soft/80 p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-pitch/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pitch">
                {translateLeague(fixture.competition as League, locale)}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                {translateFixtureStatus(fixture.status, locale)}
              </span>
            </div>
            <div className="mt-5 space-y-4">
              <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start gap-x-2">
                <span className="display-title min-w-0 break-words text-[2rem] leading-[0.88] text-ink sm:text-[2.45rem]">
                  {fixture.homeTeam}
                </span>
                <span className="display-title pt-1 text-[1.65rem] leading-none text-coral sm:text-[1.9rem]">
                  vs
                </span>
                <span className="display-title min-w-0 break-words text-right text-[2rem] leading-[0.88] text-ink sm:text-[2.45rem]">
                  {fixture.awayTeam}
                </span>
              </div>
              <div className="grid gap-2 text-sm text-ink-muted">
                <p>{formatKickoff(fixture.kickoff, locale)} UTC</p>
                <p>{fixture.venue}</p>
                <p>{fixture.broadcast}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
