import { getDictionary, translateFormResult } from "@/lib/i18n";
import type { Locale, StandingRow } from "@/types/content";

interface StandingsTableProps {
  rows: StandingRow[];
  locale: Locale;
}

export function StandingsTable({ rows, locale }: StandingsTableProps) {
  const dict = getDictionary(locale);

  return (
    <section className="panel overflow-hidden">
      <div className="border-b border-line/70 px-6 py-5 sm:px-7">
        <p className="eyebrow">{dict.home.powerTable}</p>
        <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-title text-4xl text-ink sm:text-5xl">{dict.home.pressureTitle}</h2>
          <p className="max-w-xl text-sm leading-7 text-ink-muted">{dict.home.pressureDescription}</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/65 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            <tr>
              <th className="px-6 py-4 sm:px-7">{locale === "vi" ? "Doi" : "Team"}</th>
              <th className="px-4 py-4">P</th>
              <th className="px-4 py-4">GF</th>
              <th className="px-4 py-4">GA</th>
              <th className="px-4 py-4">{locale === "vi" ? "Diem" : "Pts"}</th>
              <th className="px-6 py-4 sm:px-7">{locale === "vi" ? "Phong do" : "Form"}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.team} className="border-t border-line/70">
                <td className="px-6 py-5 sm:px-7">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${row.badgeTone}`} />
                    <div>
                      <p className="font-semibold text-ink">{row.team}</p>
                      <p className="text-xs uppercase tracking-[0.14em] text-ink-muted">
                        {row.won}-{row.drawn}-{row.lost}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-5 text-ink-muted">{row.played}</td>
                <td className="px-4 py-5 text-ink-muted">{row.goalsFor}</td>
                <td className="px-4 py-5 text-ink-muted">{row.goalsAgainst}</td>
                <td className="px-4 py-5 font-semibold text-ink">{row.points}</td>
                <td className="px-6 py-5 sm:px-7">
                  <div className="flex gap-2">
                    {row.form.map((result, index) => {
                      const tone =
                        result === "W"
                          ? "bg-pitch text-white"
                          : result === "D"
                            ? "bg-gold/20 text-ink"
                            : "bg-coral/20 text-coral";

                      return (
                        <span
                          key={`${row.team}-${index}`}
                          className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${tone}`}
                        >
                          {translateFormResult(result, locale)}
                        </span>
                      );
                    })}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
