import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/content";

interface SiteFooterProps {
  locale: Locale;
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const dict = getDictionary(locale);

  return (
    <footer className="page-shell py-10">
      <div className="panel-dark overflow-hidden">
        <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="eyebrow border-white/15 bg-white/10 text-white/80">Pitchside Press</p>
            <h2 className="display-title text-4xl text-white sm:text-5xl">{dict.footer.title}</h2>
            <p className="max-w-xl text-sm leading-7 text-white/70">{dict.footer.description}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">{dict.footer.routes}</h3>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <Link href="/">{dict.footer.homepage}</Link>
              <Link href="/blog">{dict.footer.blogListing}</Link>
              <Link href="/search">{dict.footer.search}</Link>
              <Link href="/contact">{dict.footer.contact}</Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">{dict.footer.buildNotes}</h3>
            <ul className="space-y-3 text-sm text-white/80">
              {dict.footer.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
