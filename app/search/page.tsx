import { PostList } from "@/components/blog/post-list";
import { SearchBar } from "@/components/search/search-bar";
import { SectionHeading } from "@/components/layout/section-heading";
import { filterPosts } from "@/lib/posts";

function readParam(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

interface SearchPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = await searchParams;
  const query = readParam(resolvedSearchParams.q) ?? "";
  const results = query ? filterPosts({ q: query }) : [];

  return (
    <div className="space-y-6">
      <section className="panel p-6 sm:p-7">
        <SectionHeading
          kicker="Search"
          title="Find stories by team, theme, or tactical idea."
          description="The search flow combines a client-side input with a mock search API for quick suggestions and a server-rendered results page."
        />
      </section>
      <SearchBar initialQuery={query} />
      {query ? (
        <section className="space-y-4">
          <div>
            <h2 className="text-3xl font-semibold text-ink">Results for &quot;{query}&quot;</h2>
            <p className="text-sm text-ink-muted">{results.length} matching stories in the archive.</p>
          </div>
          {results.length > 0 ? (
            <PostList posts={results} />
          ) : (
            <div className="panel p-8">
              <p className="text-lg font-semibold text-ink">No direct matches yet.</p>
              <p className="mt-2 text-sm leading-7 text-ink-muted">
                Try a broader term like pressing, scouting, Premier League, or transitions.
              </p>
            </div>
          )}
        </section>
      ) : (
        <div className="panel p-8">
          <p className="text-lg font-semibold text-ink">Start typing to explore the archive.</p>
          <p className="mt-2 text-sm leading-7 text-ink-muted">
            Suggestions appear after two characters and route into full article pages.
          </p>
        </div>
      )}
    </div>
  );
}
