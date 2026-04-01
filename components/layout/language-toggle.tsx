"use client";

import { useRouter } from "next/navigation";
import type { Locale } from "@/types/content";

interface LanguageToggleProps {
  locale: Locale;
  label: string;
  englishLabel: string;
  vietnameseLabel: string;
}

export function LanguageToggle({
  locale,
  label,
  englishLabel,
  vietnameseLabel,
}: LanguageToggleProps) {
  const router = useRouter();

  function switchLocale(nextLocale: Locale) {
    document.cookie = `locale=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }

  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted sm:inline">
        {label}
      </span>
      <div className="flex rounded-full border border-line bg-white/80 p-1">
        <button
          type="button"
          onClick={() => switchLocale("en")}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
            locale === "en" ? "bg-ink text-white" : "text-ink-muted"
          }`}
        >
          {englishLabel}
        </button>
        <button
          type="button"
          onClick={() => switchLocale("vi")}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
            locale === "vi" ? "bg-ink text-white" : "text-ink-muted"
          }`}
        >
          {vietnameseLabel}
        </button>
      </div>
    </div>
  );
}
