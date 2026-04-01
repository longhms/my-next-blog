import { fixtures, posts, standings } from "@/data/posts";
import type { Category, League, Post, SearchResult } from "@/types/content";

export interface PostFilters {
  q?: string;
  league?: string;
  category?: string;
  featured?: string;
}

export function getAllPosts() {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getFeaturedPosts(limit = 3) {
  return getAllPosts()
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function getRecentPosts(limit = 4) {
  return getAllPosts().slice(0, limit);
}

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentPost: Post, limit = 3) {
  return getAllPosts()
    .filter(
      (post) =>
        post.slug !== currentPost.slug &&
        (post.league === currentPost.league ||
          post.category === currentPost.category ||
          post.tags.some((tag) => currentPost.tags.includes(tag))),
    )
    .slice(0, limit);
}

export function getLeagues() {
  return Array.from(new Set(posts.map((post) => post.league)));
}

export function getCategories() {
  return Array.from(new Set(posts.map((post) => post.category)));
}

export function filterPosts(filters: PostFilters) {
  const q = filters.q?.trim().toLowerCase();
  const league = filters.league as League | undefined;
  const category = filters.category as Category | undefined;
  const featured = filters.featured === "true";

  return getAllPosts().filter((post) => {
    const matchesQuery =
      !q ||
      [post.title, post.excerpt, post.strapline, post.author.name, ...post.tags]
        .join(" ")
        .toLowerCase()
        .includes(q);
    const matchesLeague = !league || post.league === league;
    const matchesCategory = !category || post.category === category;
    const matchesFeatured = !featured || post.featured;

    return matchesQuery && matchesLeague && matchesCategory && matchesFeatured;
  });
}

export function searchPosts(query: string): SearchResult[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  return filterPosts({ q: normalizedQuery }).map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    league: post.league,
    category: post.category,
  }));
}

export function getFixtures() {
  return fixtures;
}

export function getStandings() {
  return standings;
}
