import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CommentForm } from "@/components/forms/comment-form";
import { PostBody } from "@/components/blog/post-body";
import { PostList } from "@/components/blog/post-list";
import { getDictionary } from "@/lib/i18n";
import { formatDate, minutesToReadLabel } from "@/lib/format";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { getCurrentLocale } from "@/lib/server-locale";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts("vi").map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, "vi");

  if (!post) {
    return {
      title: "Khong tim thay bai viet",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const locale = await getCurrentLocale();
  const dict = getDictionary(locale);
  const { slug } = await params;
  const post = getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, locale, 3);

  return (
    <div className="space-y-8">
      <section className="panel overflow-hidden">
        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="space-y-6 p-6 sm:p-8">
            <span className="eyebrow">{post.leagueLabel}</span>
            <div className="space-y-4">
              <h1 className="display-title text-5xl text-ink sm:text-7xl">{post.title}</h1>
              <p className="max-w-3xl text-base leading-8 text-ink-muted sm:text-lg">{post.strapline}</p>
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
              <span>{formatDate(post.publishedAt, locale)}</span>
              <span>{minutesToReadLabel(post.readTime, locale)}</span>
              <span>{post.author.name}</span>
              <span>{post.categoryLabel}</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {post.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[22px] border border-line bg-surface-soft/80 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{metric.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-ink">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[320px] bg-surface-soft">
            <Image
              src={post.heroImage}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <article className="panel p-6 sm:p-8">
          <PostBody post={post} />
        </article>
        <aside className="space-y-6">
          <section className="panel p-6">
            <p className="eyebrow">{dict.common.keyMoments}</p>
            <ul className="mt-5 space-y-4">
              {post.keyMoments.map((moment) => (
                <li
                  key={moment}
                  className="rounded-[22px] border border-line bg-surface-soft/80 px-4 py-4 text-sm leading-7 text-ink"
                >
                  {moment}
                </li>
              ))}
            </ul>
          </section>
          <section className="panel p-6">
            <p className="eyebrow">{dict.common.tags}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
          <section className="space-y-4">
            <div>
              <p className="eyebrow">{dict.common.comments}</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink">{dict.common.joinDiscussion}</h2>
            </div>
            <CommentForm postSlug={post.slug} locale={locale} />
          </section>
        </aside>
      </div>
      <section className="space-y-6">
        <div>
          <p className="eyebrow">{dict.common.relatedReads}</p>
          <h2 className="mt-4 text-4xl font-semibold text-ink">{dict.common.keepThreadGoing}</h2>
        </div>
        <PostList posts={relatedPosts} locale={locale} />
      </section>
    </div>
  );
}
