import { PostCard } from "@/components/blog/post-card";
import type { Locale, ResolvedPost } from "@/types/content";

interface PostListProps {
  posts: ResolvedPost[];
  locale: Locale;
}

export function PostList({ posts, locale }: PostListProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post, index) => (
        <PostCard key={post.slug} post={post} locale={locale} priority={index === 0} />
      ))}
    </div>
  );
}
