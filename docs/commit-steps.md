# Suggested Commit Plan

Use this sequence if you want to split the finished project into small, clean commits.

1. `chore: bootstrap next app foundation`
   Files: `package.json`, `package-lock.json`, `.gitignore`, `tsconfig.json`, `next-env.d.ts`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`

2. `feat: add soccer content models and helpers`
   Files: `types/content.ts`, `lib/format.ts`, `lib/posts.ts`, `lib/validation.ts`

3. `feat: seed soccer mock data and artwork`
   Files: `data/posts.ts`, `public/images/*`

4. `feat: add shared theme and site shell`
   Files: `app/globals.css`, `app/layout.tsx`, `components/layout/section-heading.tsx`, `components/layout/site-header.tsx`, `components/layout/site-footer.tsx`

5. `feat: build reusable blog cards and article body`
   Files: `components/blog/post-card.tsx`, `components/blog/post-list.tsx`, `components/blog/post-body.tsx`

6. `feat: build homepage sections`
   Files: `components/home/hero.tsx`, `components/home/featured-grid.tsx`, `components/home/fixtures-panel.tsx`, `components/home/standings-table.tsx`, `components/home/newsletter-banner.tsx`

7. `feat: assemble homepage route`
   Files: `app/page.tsx`

8. `feat: add blog listing filters and route`
   Files: `components/blog/blog-filters.tsx`, `app/blog/page.tsx`

9. `feat: add search experience`
   Files: `components/search/search-bar.tsx`, `app/search/page.tsx`

10. `feat: add article detail route and not-found state`
    Files: `app/blog/[slug]/page.tsx`, `app/not-found.tsx`

11. `feat: add contact and comment forms`
    Files: `components/forms/contact-form.tsx`, `components/forms/comment-form.tsx`, `app/contact/page.tsx`

12. `feat: add mock route handlers and finalize docs`
    Files: `app/api/contact/route.ts`, `app/api/comments/route.ts`, `app/api/search/route.ts`, `docs/commit-steps.md`

Verification after the last commit:

- `npm run lint`
- `npm run typecheck`
- `npm run build`
