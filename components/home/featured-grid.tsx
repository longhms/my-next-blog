import { PostCard } from "@/components/blog/post-card";
import { SectionHeading } from "@/components/layout/section-heading";
import type { Post } from "@/types/content";

interface FeaturedGridProps {
  posts: Post[];
}

export function FeaturedGrid({ posts }: FeaturedGridProps) {
  return (
    <section className="space-y-6">
      <SectionHeading
        kicker="Featured Stories"
        title="The stories setting the football agenda."
        description="Long-form breakdowns on tactical patterns, squad design, and elite match detail."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard key={post.slug} post={post} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}
