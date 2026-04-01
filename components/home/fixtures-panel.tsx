import { formatKickoff } from "@/lib/format";
import type { Fixture } from "@/types/content";

interface FixturesPanelProps {
  fixtures: Fixture[];
}

export function FixturesPanel({ fixtures }: FixturesPanelProps) {
  return (
    <section className="panel p-6 sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Fixture Radar</p>
          <h2 className="mt-4 text-3xl font-semibold text-ink">Next on the calendar</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-ink-muted">
          A quick scan of the matches likely to move the title race, European places, or
          tactical conversation over the next week.
        </p>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {fixtures.map((fixture) => (
          <article
            key={fixture.id}
            className="rounded-[24px] border border-line bg-surface-soft/80 p-5"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full bg-pitch/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-pitch">
                {fixture.competition}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                {fixture.status}
              </span>
            </div>
            <div className="mt-5 space-y-4">
              <div className="display-title text-3xl text-ink sm:text-4xl">
                {fixture.homeTeam}
                <span className="mx-2 text-coral">vs</span>
                {fixture.awayTeam}
              </div>
              <div className="grid gap-2 text-sm text-ink-muted">
                <p>{formatKickoff(fixture.kickoff)} UTC</p>
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
