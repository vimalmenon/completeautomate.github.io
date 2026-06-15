# Story: Video Watch Pages for Google Indexing

## Problem

Blog posts embed YouTube videos as a complement to written content. Google Search Console reports
"YouTube videos aren't indexed" with the reason **"Video isn't on a watch page"**.

This means Google's video crawler sees each blog page as a text article that happens to contain an
embedded video — not as a page whose primary purpose is to show that specific video. Google reserves
video search results for pages that are structured like a video destination.

## First Principles

Google's video indexing pipeline asks a few basic questions about every page with a video embed:

1. **Is this page primarily about this video?** — The page's title, description, schema type, and
   layout must signal that the video is the main event, not an afterthought.
2. **Is the video visible above the fold?** — Even a correctly structured page fails if the player
   is below the scroll line.
3. **Is the schema marked as a VideoObject?** — The embedded schema must use `@type: VideoObject`
   as the primary entity, not just a property of a BlogPosting.

The blog pages pass checks 2 and 3 (after our visibility fix), but fail check 1 — they are
BlogPosting pages with a video property, not VideoObject pages with supporting text.

## Solution: Dedicated Watch Pages

Create a parallel route `/videos/<slug>/` for every blog entry that has a `youtubeId`. Each page is:

### Structure

- **Route**: `/videos/<slug>/` — outside the `/blogs/*` layout tree
- **Layout**: No sidebar, no blog header, no collection navigation. Just the video and its
  metadata in a centered, full-width container.
- **Video**: Full-width `aspect-video` player — larger than the blog embed
- **Title**: The video title, as a headline
- **Description**: The blog entry description
- **CTA**: "Read the full article →" linking back to the blog post
- **Schema**: `@type: VideoObject` as the primary structured data, with `embedUrl`,
  `thumbnailUrl`, `description`, and `uploadDate`. The `mainEntityOfPage` points back to the video
  page itself, making Google's crawler treat this as a video destination.

### Design Decisions

| Decision | Choice | Why |
|----------|--------|-----|
| Route location | `/videos/<slug>/` not nested under `/blogs/` | Avoids inheriting the blog layout (sidebar, header). Google sees a standalone page |
| Schema type | VideoObject as root entity, not sub-property | Google's video crawler looks for pages where VideoObject is the primary schema |
| Layout | Minimal, centered, no sidebar | Video should be the first and dominant visual element |
| Backlink | "Read the full article" only | Keeps the page focused on the video; blog link is secondary |
| Filter | Only entries with `youtubeId` | No empty or placeholder video pages |
| Data source | Same `BlogCollections` array | Single source of truth; no separate video data definition needed |
| Build | Static (generateStaticParams) | No runtime queries; matches the blog's static export model |

### What Makes This a "Watch Page" (per Google)

1. **The page route is `/videos/`** — signals content category
2. **The primary schema is VideoObject** — Google's crawler reads this as a video page
3. **The video is the first element** — above the fold and dominant
4. **No distracting navigation** — no sidebar, no blog collection links competing for attention
5. **The page title uses the video title** — metadata matches the video content

### What This Doesn't Do

- The video is still hosted on YouTube. This is an embed page, not a hosting platform. Google
  understands the difference — a watch page is a *destination* for watching a YouTube embed, not a
  hosting server.
- This doesn't replace the blog pages. The blog continues to be the primary reading experience.
  The video pages are purely an indexing bridge.

## Future Considerations

- If video pages prove useful beyond indexing (e.g., as a video library or series page), they can
  be extended with a listing at `/videos/`, related videos, or playlist navigation.
- The same schema pattern can serve podcast episodes or other media types.
- The blog post page's structured data already has a `video` property pointing to VideoObject;
  watch pages simply promote that schema to top-level.
