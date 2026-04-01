import Image from "next/image";
import Link from "next/link";
import { getFeaturedPosts } from "@/lib/posts";

export function Hero() {
  const [leadStory, secondaryStory] = getFeaturedPosts(2);

  return (
    <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
      <div className="panel relative overflow-hidden p-6 sm:p-8">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[radial-gradient(circle_at_center,rgba(240,179,92,0.28),transparent_58%)] lg:block" />
        <div className="relative grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="space-y-7">
            <span className="eyebrow">Match Week Briefing</span>
            <div className="space-y-4">
              <h1 className="display-title max-w-2xl text-5xl text-ink sm:text-7xl">
                Soccer stories with shape, speed, and edge.
              </h1>
              <p className="max-w-xl text-base leading-8 text-ink-muted sm:text-lg">
                Pitchside Press translates football into readable structure: tactical
                breakdowns, scouting notes, transfer context, and matchday reactions.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="rounded-full bg-pitch px-5 py-3 text-sm font-semibold text-white transition hover:bg-pitch-deep"
              >
                Explore stories
              </Link>
              <Link
                href="/search"
                className="rounded-full border border-line bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink"
              >
                Search the archive
              </Link>
            </div>
            {leadStory ? (
              <div className="grid gap-4 rounded-[24px] border border-line bg-surface-soft/80 p-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
                    Lead notebook
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-ink">{leadStory.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-ink-muted">{leadStory.excerpt}</p>
                </div>
                <Link
                  href={`/blog/${leadStory.slug}`}
                  className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white"
                >
                  Read now
                </Link>
              </div>
            ) : null}
          </div>
          <div className="grid gap-4">
            <div className="panel-dark overflow-hidden p-5">
              <div className="grid gap-4 sm:grid-cols-[1fr_0.8fr] sm:items-center">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                    Visual identity
                  </p>
                  <p className="display-title text-4xl text-white">Pitch maps meet editorial cards.</p>
                </div>
                <div className="mx-auto max-w-[180px]">
                  <Image
                    src="/images/pitchside-ball.svg"
                    alt="Soccer ball graphic"
                    width={720}
                    height={720}
                    className="h-auto w-full"
                    priority
                  />
                </div>
              </div>
            </div>
            {secondaryStory ? (
              <div className="panel grid gap-4 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">
                  Featured follow-up
                </p>
                <h3 className="text-2xl font-semibold text-ink">{secondaryStory.title}</h3>
                <p className="text-sm leading-7 text-ink-muted">{secondaryStory.strapline}</p>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-coral/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                    {secondaryStory.league}
                  </span>
                  <Link href={`/blog/${secondaryStory.slug}`} className="text-sm font-semibold text-ink">
                    Open story
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
