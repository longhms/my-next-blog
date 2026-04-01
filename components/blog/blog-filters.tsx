"use client";

import { useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface BlogFiltersProps {
  leagues: string[];
  categories: string[];
}

export function BlogFilters({ leagues, categories }: BlogFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  function pushParams(nextQuery: string, nextLeague: string, nextCategory: string, featured: boolean) {
    const params = new URLSearchParams();

    if (nextQuery.trim()) params.set("q", nextQuery.trim());
    if (nextLeague) params.set("league", nextLeague);
    if (nextCategory) params.set("category", nextCategory);
    if (featured) params.set("featured", "true");

    const href = params.toString() ? `${pathname}?${params.toString()}` : pathname;

    startTransition(() => {
      router.push(href);
    });
  }

  const selectedLeague = searchParams.get("league") ?? "";
  const selectedCategory = searchParams.get("category") ?? "";
  const featuredOnly = searchParams.get("featured") === "true";

  return (
    <div className="panel grid gap-4 p-5 lg:grid-cols-[1.4fr_1fr_1fr_auto] lg:items-end">
      <label className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
          Search
        </span>
        <input
          value={query}
          onChange={(event) => {
            const nextValue = event.target.value;
            setQuery(nextValue);
            pushParams(nextValue, selectedLeague, selectedCategory, featuredOnly);
          }}
          placeholder="Search title, excerpt, author, tag..."
          className="field-input"
        />
      </label>
      <label className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
          League
        </span>
        <select
          value={selectedLeague}
          onChange={(event) => pushParams(query, event.target.value, selectedCategory, featuredOnly)}
          className="field-input"
        >
          <option value="">All leagues</option>
          {leagues.map((league) => (
            <option key={league} value={league}>
              {league}
            </option>
          ))}
        </select>
      </label>
      <label className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
          Category
        </span>
        <select
          value={selectedCategory}
          onChange={(event) => pushParams(query, selectedLeague, event.target.value, featuredOnly)}
          className="field-input"
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <label className="flex items-center gap-3 rounded-2xl border border-line bg-white/70 px-4 py-3 text-sm font-semibold text-ink">
        <input
          type="checkbox"
          checked={featuredOnly}
          onChange={(event) => pushParams(query, selectedLeague, selectedCategory, event.target.checked)}
          className="h-4 w-4 rounded border-line"
        />
        Featured only
      </label>
      {isPending ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">Updating...</p>
      ) : null}
    </div>
  );
}
