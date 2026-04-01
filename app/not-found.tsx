import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { getCurrentLocale } from "@/lib/server-locale";

export default async function NotFound() {
  const locale = await getCurrentLocale();
  const dict = getDictionary(locale);

  return (
    <div className="panel flex flex-col items-center gap-5 p-10 text-center sm:p-16">
      <span className="eyebrow">404</span>
      <h1 className="display-title text-5xl text-ink sm:text-7xl">{dict.notFound.title}</h1>
      <p className="max-w-2xl text-sm leading-7 text-ink-muted sm:text-base">{dict.notFound.description}</p>
      <Link href="/blog" className="rounded-full bg-pitch px-5 py-3 text-sm font-semibold text-white">
        {dict.common.backToBlog}
      </Link>
    </div>
  );
}
