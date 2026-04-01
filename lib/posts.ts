import { fixtures, posts, standings } from "@/data/posts";
import { resolveText, translateCategory, translateLeague } from "@/lib/i18n";
import type {
  Category,
  League,
  Locale,
  Post,
  ResolvedPost,
  SearchResult,
} from "@/types/content";

export interface PostFilters {
  q?: string;
  league?: string;
  category?: string;
  featured?: string;
}

function sortPosts(items: Post[]) {
  return [...items].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

function resolvePost(post: Post, locale: Locale): ResolvedPost {
  return {
    slug: post.slug,
    title: resolveText(post.title, locale),
    strapline: resolveText(post.strapline, locale),
    excerpt: resolveText(post.excerpt, locale),
    category: post.category,
    categoryLabel: translateCategory(post.category, locale),
    league: post.league,
    leagueLabel: translateLeague(post.league, locale),
    publishedAt: post.publishedAt,
    readTime: post.readTime,
    featured: post.featured,
    heroImage: post.heroImage,
    author: {
      name: post.author.name,
      role: resolveText(post.author.role, locale),
      initials: post.author.initials,
    },
    tags: post.tags.map((tag) => resolveText(tag, locale)),
    keyMoments: post.keyMoments.map((item) => resolveText(item, locale)),
    metrics: post.metrics.map((metric) => ({
      label: resolveText(metric.label, locale),
      value: metric.value,
    })),
    sections: post.sections.map((section) => ({
      heading: resolveText(section.heading, locale),
      body: section.body.map((paragraph) => resolveText(paragraph, locale)),
      callout: section.callout ? resolveText(section.callout, locale) : undefined,
    })),
  };
}

export function getAllPosts(locale: Locale = "en") {
  return sortPosts(posts).map((post) => resolvePost(post, locale));
}

export function getFeaturedPosts(locale: Locale = "en", limit = 3) {
  return getAllPosts(locale)
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function getRecentPosts(locale: Locale = "en", limit = 4) {
  return getAllPosts(locale).slice(0, limit);
}

export function getPostBySlug(slug: string, locale: Locale = "en") {
  const post = posts.find((item) => item.slug === slug);
  return post ? resolvePost(post, locale) : undefined;
}

export function getRelatedPosts(currentPostSlug: string, locale: Locale = "en", limit = 3) {
  const currentPost = posts.find((post) => post.slug === currentPostSlug);

  if (!currentPost) {
    return [];
  }

  return sortPosts(posts)
    .filter(
      (post) =>
        post.slug !== currentPost.slug &&
        (post.league === currentPost.league ||
          post.category === currentPost.category ||
          post.tags.some((tag) =>
            currentPost.tags.some(
              (currentTag) => resolveText(tag, "en") === resolveText(currentTag, "en"),
            ),
          )),
    )
    .slice(0, limit)
    .map((post) => resolvePost(post, locale));
}

export function getLeagues() {
  return Array.from(new Set(posts.map((post) => post.league)));
}

export function getCategories() {
  return Array.from(new Set(posts.map((post) => post.category)));
}

function postSearchIndex(post: Post, locale: Locale) {
  return [
    resolveText(post.title, locale),
    resolveText(post.excerpt, locale),
    resolveText(post.strapline, locale),
    post.author.name,
    resolveText(post.author.role, locale),
    ...post.tags.map((tag) => resolveText(tag, locale)),
  ]
    .join(" ")
    .toLowerCase();
}

export function filterPosts(filters: PostFilters, locale: Locale = "en") {
  const q = filters.q?.trim().toLowerCase();
  const league = filters.league as League | undefined;
  const category = filters.category as Category | undefined;
  const featured = filters.featured === "true";

  return sortPosts(posts)
    .filter((post) => {
      const matchesQuery = !q || postSearchIndex(post, locale).includes(q);
      const matchesLeague = !league || post.league === league;
      const matchesCategory = !category || post.category === category;
      const matchesFeatured = !featured || post.featured;

      return matchesQuery && matchesLeague && matchesCategory && matchesFeatured;
    })
    .map((post) => resolvePost(post, locale));
}

export function searchPosts(query: string, locale: Locale = "en"): SearchResult[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  return filterPosts({ q: normalizedQuery }, locale).map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    league: post.leagueLabel,
    category: post.categoryLabel,
  }));
}

export function getFixtures() {
  return fixtures;
}

export function getStandings() {
  return standings;
}
