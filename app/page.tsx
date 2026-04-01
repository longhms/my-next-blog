import { PostList } from "@/components/blog/post-list";
import { FeaturedGrid } from "@/components/home/featured-grid";
import { FixturesPanel } from "@/components/home/fixtures-panel";
import { Hero } from "@/components/home/hero";
import { NewsletterBanner } from "@/components/home/newsletter-banner";
import { StandingsTable } from "@/components/home/standings-table";
import { SectionHeading } from "@/components/layout/section-heading";
import { getDictionary } from "@/lib/i18n";
import { getFeaturedPosts, getFixtures, getRecentPosts, getStandings } from "@/lib/posts";
import { getCurrentLocale } from "@/lib/server-locale";

export default async function HomePage() {
  const locale = await getCurrentLocale();
  const dict = getDictionary(locale);
  const featuredPosts = getFeaturedPosts(locale, 3);
  const recentPosts = getRecentPosts(locale, 3);
  const fixtures = getFixtures();
  const standings = getStandings();

  return (
    <div className="space-y-8">
      <Hero locale={locale} />
      <FeaturedGrid posts={featuredPosts} locale={locale} />
      <div className="space-y-6">
        <FixturesPanel fixtures={fixtures} locale={locale} />
        <StandingsTable rows={standings} locale={locale} />
      </div>
      <section className="space-y-6">
        <SectionHeading
          kicker={dict.home.freshNotebook}
          title={dict.home.freshTitle}
          description={dict.home.freshDescription}
        />
        <PostList posts={recentPosts} locale={locale} />
      </section>
      <NewsletterBanner locale={locale} />
    </div>
  );
}
