import { BlogFilters } from "@/components/blog/blog-filters";
import { PostList } from "@/components/blog/post-list";
import { SectionHeading } from "@/components/layout/section-heading";
import { filterPosts, getCategories, getLeagues } from "@/lib/posts";

function readParam(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

interface BlogPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const filters = {
    q: readParam(resolvedSearchParams.q),
    league: readParam(resolvedSearchParams.league),
    category: readParam(resolvedSearchParams.category),
    featured: readParam(resolvedSearchParams.featured),
  };

  const filteredPosts = filterPosts(filters);
  const leagues = getLeagues();
  const categories = getCategories();

  return (
    <div className="space-y-6">
      <section className="panel p-6 sm:p-7">
        <SectionHeading
          kicker="Blog Listing"
          title="Editorial stories organized for fast scanning."
          description="Filter by league, category, featured status, or a free-text query to move through the archive."
        />
      </section>
      <BlogFilters leagues={leagues} categories={categories} />
      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-ink">Results</h2>
            <p className="text-sm text-ink-muted">{filteredPosts.length} stories matched the current filters.</p>
          </div>
        </div>
        {filteredPosts.length > 0 ? (
          <PostList posts={filteredPosts} />
        ) : (
          <div className="panel p-8 text-center">
            <p className="display-title text-4xl text-ink">No stories found.</p>
            <p className="mt-3 text-sm leading-7 text-ink-muted">
              Try clearing one filter, switching league, or broadening the search query.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
