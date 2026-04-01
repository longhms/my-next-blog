import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="page-shell py-10">
      <div className="panel-dark overflow-hidden">
        <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="eyebrow border-white/15 bg-white/10 text-white/80">Pitchside Press</p>
            <h2 className="display-title text-4xl text-white sm:text-5xl">
              A soccer blog tuned for tactics, data, and match texture.
            </h2>
            <p className="max-w-xl text-sm leading-7 text-white/70">
              Built as a spec-driven Next.js product with App Router pages, mock APIs,
              component separation, and editorial storytelling around football.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Routes
            </h3>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <Link href="/">Homepage</Link>
              <Link href="/blog">Blog Listing</Link>
              <Link href="/search">Search</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Build Notes
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>Server and client components are split by behavior.</li>
              <li>Forms submit to mock route handlers with validation.</li>
              <li>Search and filtering run on typed mock content utilities.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
