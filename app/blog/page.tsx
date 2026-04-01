import { BlogFilters } from "@/components/blog/blog-filters";
import { PostList } from "@/components/blog/post-list";
import { SectionHeading } from "@/components/layout/section-heading";
import { getDictionary } from "@/lib/i18n";
import { filterPosts, getCategories, getLeagues } from "@/lib/posts";
import { getCurrentLocale } from "@/lib/server-locale";

function readParam(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

interface BlogPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const locale = await getCurrentLocale();
  const dict = getDictionary(locale);
  const resolvedSearchParams = await searchParams;
  const filters = {
    q: readParam(resolvedSearchParams.q),
    league: readParam(resolvedSearchParams.league),
    category: readParam(resolvedSearchParams.category),
    featured: readParam(resolvedSearchParams.featured),
  };

  const filteredPosts = filterPosts(filters, locale);
  const leagues = getLeagues();
  const categories = getCategories();

  return (
    <div className="space-y-6">
      <section className="panel p-6 sm:p-7">
        <SectionHeading
          kicker={dict.blog.kicker}
          title={dict.blog.title}
          description={dict.blog.description}
        />
      </section>
      <BlogFilters leagues={leagues} categories={categories} locale={locale} />
      <section className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-ink">{dict.blog.results}</h2>
            <p className="text-sm text-ink-muted">{dict.blog.matchedStories(filteredPosts.length)}</p>
          </div>
        </div>
        {filteredPosts.length > 0 ? (
          <PostList posts={filteredPosts} locale={locale} />
        ) : (
          <div className="panel p-8 text-center">
            <p className="display-title text-4xl text-ink">{dict.common.noResults}</p>
            <p className="mt-3 text-sm leading-7 text-ink-muted">{dict.common.noResultsDescription}</p>
          </div>
        )}
      </section>
    </div>
  );
}
