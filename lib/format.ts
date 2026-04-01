import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/content";

export function formatDate(dateString: string, locale: Locale = "en") {
  return new Intl.DateTimeFormat(locale === "vi" ? "vi-VN" : "en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

export function formatKickoff(dateString: string, locale: Locale = "en") {
  return new Intl.DateTimeFormat(locale === "vi" ? "vi-VN" : "en-GB", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "UTC",
  }).format(new Date(dateString));
}

export function minutesToReadLabel(minutes: number, locale: Locale = "en") {
  return getDictionary(locale).common.minRead(minutes);
}
