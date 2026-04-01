"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getDictionary } from "@/lib/i18n";
import { formatDate, minutesToReadLabel } from "@/lib/format";
import type { Locale, ResolvedPost } from "@/types/content";

interface PostCardProps {
  post: ResolvedPost;
  locale: Locale;
  priority?: boolean;
}

export function PostCard({ post, locale, priority = false }: PostCardProps) {
  const [saved, setSaved] = useState(false);
  const dict = getDictionary(locale);

  return (
    <article className="panel overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(12,21,48,0.12)]">
      <div className="relative aspect-[16/11] overflow-hidden bg-surface-soft">
        <Image
          src={post.heroImage}
          alt={post.title}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink">
            {post.categoryLabel}
          </span>
          <button
            type="button"
            onClick={() => setSaved((value) => !value)}
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
              saved ? "bg-ink text-white" : "bg-white/85 text-ink"
            }`}
          >
            {saved ? dict.common.saved : dict.common.save}
          </button>
        </div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
          <span>{post.leagueLabel}</span>
          <span>{formatDate(post.publishedAt, locale)}</span>
          <span>{minutesToReadLabel(post.readTime, locale)}</span>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-ink">{post.title}</h3>
          <p className="text-sm leading-7 text-ink-muted">{post.excerpt}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-ink">{post.author.name}</p>
            <p className="text-xs uppercase tracking-[0.18em] text-ink-muted">{post.author.role}</p>
          </div>
          <Link href={`/blog/${post.slug}`} className="rounded-full bg-pitch px-4 py-2 text-sm font-semibold text-white">
            {dict.common.read}
          </Link>
        </div>
      </div>
    </article>
  );
}
