import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/content";

interface SiteHeaderProps {
  locale: Locale;
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const dict = getDictionary(locale);
  const navItems = [
    { href: "/", label: dict.header.home },
    { href: "/blog", label: dict.header.blog },
    { href: "/search", label: dict.header.search },
    { href: "/contact", label: dict.header.contact },
  ];

  return (
    <header className="page-shell pt-4">
      <div className="panel overflow-hidden">
        <div className="flex flex-col gap-4 border-b border-line/70 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <p>{dict.header.topLine}</p>
          <p>{dict.header.freshness}</p>
        </div>
        <div className="flex flex-col gap-6 px-5 py-5 sm:px-7 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pitch text-lg font-black text-white shadow-[0_14px_24px_rgba(25,115,71,0.28)]">
              PP
            </div>
            <div>
              <p className="display-title text-3xl text-ink">Pitchside Press</p>
              <p className="text-sm text-ink-muted">{dict.header.subtitle}</p>
            </div>
          </Link>
          <nav className="flex flex-wrap items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
