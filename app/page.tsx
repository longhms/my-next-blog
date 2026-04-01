import { PostList } from "@/components/blog/post-list";
import { FeaturedGrid } from "@/components/home/featured-grid";
import { FixturesPanel } from "@/components/home/fixtures-panel";
import { Hero } from "@/components/home/hero";
import { NewsletterBanner } from "@/components/home/newsletter-banner";
import { StandingsTable } from "@/components/home/standings-table";
import { SectionHeading } from "@/components/layout/section-heading";
import { getFeaturedPosts, getFixtures, getRecentPosts, getStandings } from "@/lib/posts";

export default function HomePage() {
  const featuredPosts = getFeaturedPosts(3);
  const recentPosts = getRecentPosts(3);
  const fixtures = getFixtures();
  const standings = getStandings();

  return (
    <div className="space-y-8">
      <Hero />
      <FeaturedGrid posts={featuredPosts} />
      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <FixturesPanel fixtures={fixtures} />
        <StandingsTable rows={standings} />
      </div>
      <section className="space-y-6">
        <SectionHeading
          kicker="Fresh Notebook"
          title="More reporting from the archive."
          description="Recent posts keep the homepage connected to the broader blog listing and search flow."
        />
        <PostList posts={recentPosts} />
      </section>
      <NewsletterBanner />
    </div>
  );
}
