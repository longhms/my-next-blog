import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/types/content";

interface NewsletterBannerProps {
  locale: Locale;
}

export function NewsletterBanner({ locale }: NewsletterBannerProps) {
  const dict = getDictionary(locale);

  return (
    <section className="panel-dark overflow-hidden p-6 sm:p-7">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="eyebrow border-white/15 bg-white/10 text-white/80">{dict.home.editorialCta}</p>
          <h2 className="display-title text-4xl text-white sm:text-5xl">{dict.home.editorialTitle}</h2>
          <p className="max-w-2xl text-sm leading-7 text-white/75 sm:text-base">{dict.home.editorialDescription}</p>
        </div>
        <div className="rounded-[24px] border border-white/12 bg-white/10 p-5">
          <div className="space-y-3 text-sm text-white/75">
            {dict.home.editorialBullets.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-5 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-[#f7c983]"
          >
            {dict.home.openContact}
          </Link>
        </div>
      </div>
    </section>
  );
}
