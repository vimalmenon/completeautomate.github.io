# [Complete Automate](https://completeautomate.com)

AI automation consulting website — built with Next.js 16, React 19, Tailwind 4, TypeScript.

---

## Current Status

| Area | Status | Notes |
|------|--------|-------|
| Home Page | ✅ Complete | Hero, services, testimonial, CTA |
| Header & Navigation | ✅ Complete | Sticky, responsive, theme toggle |
| Footer | ✅ Complete | Social links, email, copyright, nav |
| Blog Pages | ✅ Complete | Collection-based layout with sidebar |
| Video Watch Pages | ✅ Complete | Dedicated `/videos/<slug>/` for Google video indexing |
| Admin Dashboard | ✅ Complete | Jobs, prompts, YouTube sections |
| TypeScript Types | ✅ Complete | Full type definitions |
| API Layer | ✅ Complete | Jobs, prompts, YouTube, health, sync |
| Google Analytics | ✅ Complete | GA4 via @next/third-parties |
| Light/Dark Theme | ✅ Complete | next-themes integration |
| Static Export | ✅ Complete | next.config.js configured |
| ESLint + Prettier | ✅ Complete | Code quality tooling |
| CI/CD Workflow | ✅ Complete | Build, deploy, release via GitHub Actions |

---

## Quick Commands

```bash
npm run dev       # Start dev server
npm run build     # Static export build
npm run start     # Serve built site
npm run eslint    # Run ESLint
npm run tsc       # TypeScript check
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.6 |
| UI Library | React 19.2.6 |
| Styling | Tailwind CSS v4 |
| Language | TypeScript v6 |
| Fonts | Sora + IBM Plex Mono |
| Icons | Lucide React |
| Charts | Recharts |
| Theme | next-themes |
| Dialog | Radix UI Dialog |
| Dropdown | Radix UI Dropdown Menu |
| Data Fetching | TanStack React Query |
| Analytics | Google Analytics GA4 |
| Export | Static (`next export`) |

---

## Links

- [Live Site](https://completeautomate.com)
- [YouTube](https://youtube.com/@real_vimal_menon)
- [GitHub](https://github.com/vimalmenon/completeautomate.github.io)

---

## Video System

Blog entries with a `youtubeId` field get two representations:

- **Blog pages** (`/blogs/<slug>/`) — text-first article with an embedded video above the fold.
  Includes a "Open in video player" link to the watch page.
- **Video watch pages** (`/videos/<slug>/`) — video-first destination designed for Google's video
  indexing. No sidebar, no blog navigation — just the player, title, and a link to read the full
  article.

### Google Video Indexing

The watch pages address two common indexing blockers:

1. **"Video outside the viewport"** — The video is the first element on the page, well above the
   fold.
2. **"Video isn't on a watch page"** — The page uses `@type: VideoObject` as the primary schema
   entity, with the video as the dominant visual element and no competing navigation.

### Creating a Video Entry

Add `youtubeId` and `uploadDate` to an `IBlogEntry` in `src/data/blogs.ts`. Both the blog page and
the watch page are generated automatically via `generateStaticParams`.

```typescript
{
  // ... other fields ...
  youtubeId: 'd4j2OTJdO94',     // YouTube video ID (required for video pages)
  uploadDate: '2026-04-01T00:00:00+08:00', // ISO date (recommended for schema)
}
```

### Related Files

| File | Purpose |
|------|---------|
| `src/app/videos/[slug]/page.tsx` | Video watch page route |
| `src/app/blogs/[slug]/page.tsx` | Blog page with embedded video + cross-link |
| `src/app/sitemap.ts` | Sitemap includes both blog and video routes |
| `src/data/blogs.ts` | Data source — `youtubeId` and `uploadDate` fields |
| `docs/stories/video-watch-pages.md` | Design rationale and first-principles story |

---

**Version:** v0.0.1
