import { PostCard } from "@/components/blog/post-card";
import { SectionHeading } from "@/components/layout/section-heading";
import { getDictionary } from "@/lib/i18n";
import type { Locale, ResolvedPost } from "@/types/content";

interface FeaturedGridProps {
  posts: ResolvedPost[];
  locale: Locale;
}

export function FeaturedGrid({ posts, locale }: FeaturedGridProps) {
  const dict = getDictionary(locale);

  return (
    <section className="space-y-6">
      <SectionHeading
        kicker={dict.home.featuredStories}
        title={dict.home.featuredStoriesTitle}
        description={dict.home.featuredStoriesDescription}
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard key={post.slug} post={post} locale={locale} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}
