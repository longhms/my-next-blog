import { PostList } from "@/components/blog/post-list";
import { SearchBar } from "@/components/search/search-bar";
import { SectionHeading } from "@/components/layout/section-heading";
import { getDictionary } from "@/lib/i18n";
import { filterPosts } from "@/lib/posts";
import { getCurrentLocale } from "@/lib/server-locale";

function readParam(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

interface SearchPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const locale = await getCurrentLocale();
  const dict = getDictionary(locale);
  const resolvedSearchParams = await searchParams;
  const query = readParam(resolvedSearchParams.q) ?? "";
  const results = query ? filterPosts({ q: query }, locale) : [];

  return (
    <div className="space-y-6">
      <section className="panel p-6 sm:p-7">
        <SectionHeading
          kicker={dict.searchPage.kicker}
          title={dict.searchPage.title}
          description={dict.searchPage.description}
        />
      </section>
      <SearchBar initialQuery={query} locale={locale} />
      {query ? (
        <section className="space-y-4">
          <div>
            <h2 className="text-3xl font-semibold text-ink">{dict.searchPage.resultsFor(query)}</h2>
            <p className="text-sm text-ink-muted">{dict.searchPage.resultCount(results.length)}</p>
          </div>
          {results.length > 0 ? (
            <PostList posts={results} locale={locale} />
          ) : (
            <div className="panel p-8">
              <p className="text-lg font-semibold text-ink">{dict.searchPage.noMatchesTitle}</p>
              <p className="mt-2 text-sm leading-7 text-ink-muted">{dict.searchPage.noMatchesDescription}</p>
            </div>
          )}
        </section>
      ) : (
        <div className="panel p-8">
          <p className="text-lg font-semibold text-ink">{dict.searchPage.startTypingTitle}</p>
          <p className="mt-2 text-sm leading-7 text-ink-muted">{dict.searchPage.startTypingDescription}</p>
        </div>
      )}
    </div>
  );
}
