import Link from "next/link";

export default function NotFound() {
  return (
    <div className="panel flex flex-col items-center gap-5 p-10 text-center sm:p-16">
      <span className="eyebrow">404</span>
      <h1 className="display-title text-5xl text-ink sm:text-7xl">Story not found.</h1>
      <p className="max-w-2xl text-sm leading-7 text-ink-muted sm:text-base">
        The route exists in the app, but the specific article slug does not. Head back to the archive and pick another notebook.
      </p>
      <Link href="/blog" className="rounded-full bg-pitch px-5 py-3 text-sm font-semibold text-white">
        Back to blog
      </Link>
    </div>
  );
}
