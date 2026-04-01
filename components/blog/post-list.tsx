import { PostCard } from "@/components/blog/post-card";
import type { Post } from "@/types/content";

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post, index) => (
        <PostCard key={post.slug} post={post} priority={index === 0} />
      ))}
    </div>
  );
}
