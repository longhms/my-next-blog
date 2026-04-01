import type { Post } from "@/types/content";

interface PostBodyProps {
  post: Post;
}

export function PostBody({ post }: PostBodyProps) {
  return (
    <div className="rich-copy space-y-10">
      {post.sections.map((section) => (
        <section key={section.heading} className="space-y-4">
          <h2 className="text-3xl font-semibold text-ink">{section.heading}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.callout ? (
            <div className="rounded-[24px] border border-pitch/15 bg-pitch/8 p-5 text-sm font-semibold leading-7 text-ink">
              {section.callout}
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}
