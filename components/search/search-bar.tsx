"use client";

import Link from "next/link";
import { useDeferredValue, useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import type { Locale, SearchResult } from "@/types/content";

interface SearchBarProps {
  initialQuery?: string;
  locale: Locale;
}

export function SearchBar({ initialQuery = "", locale }: SearchBarProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const deferredQuery = useDeferredValue(query);
  const dict = getDictionary(locale);

  useEffect(() => {
    const controller = new AbortController();

    async function loadSuggestions() {
      if (deferredQuery.trim().length < 2) {
        setResults([]);
        return;
      }

      const response = await fetch(
        `/api/search?q=${encodeURIComponent(deferredQuery)}&locale=${locale}`,
        {
        signal: controller.signal,
        },
      );

      if (!response.ok) {
        return;
      }

      const payload: { results: SearchResult[] } = await response.json();
      setResults(payload.results);
    }

    void loadSuggestions();

    return () => controller.abort();
  }, [deferredQuery, locale]);

  function submitSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    startTransition(() => {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    });
  }

  return (
    <div className="panel overflow-visible p-5 sm:p-6">
      <form onSubmit={submitSearch} className="space-y-4">
        <label className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            {dict.searchPage.inputLabel}
          </span>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={dict.searchPage.placeholder}
              className="field-input flex-1"
            />
            <button
              type="submit"
              className="rounded-2xl bg-pitch px-5 py-3 text-sm font-semibold text-white transition hover:bg-pitch-deep"
            >
              {isPending ? dict.common.searching : dict.common.search}
            </button>
          </div>
        </label>
      </form>
      {results.length > 0 ? (
        <div className="mt-4 rounded-[24px] border border-line bg-white/80 p-3">
          <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            {dict.common.quickResults}
          </p>
          <div className="grid gap-2">
            {results.map((result) => (
              <Link
                key={result.slug}
                href={`/blog/${result.slug}`}
                className="rounded-2xl px-3 py-3 transition hover:bg-surface-soft"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  <span>{result.league}</span>
                  <span>{result.category}</span>
                </div>
                <p className="mt-1 text-lg font-semibold text-ink">{result.title}</p>
                <p className="mt-1 text-sm leading-7 text-ink-muted">{result.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
