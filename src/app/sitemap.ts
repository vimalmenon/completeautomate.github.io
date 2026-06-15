import { BlogCollections } from '@data';

import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://completeautomate.com';

const staticRoutes = [
  { changeFrequency: 'monthly' as const, lastModified: new Date(), priority: 1, url: '/' },
  {
    changeFrequency: 'monthly' as const,
    lastModified: new Date(),
    priority: 0.9,
    url: '/services',
  },
  { changeFrequency: 'weekly' as const, lastModified: new Date(), priority: 0.9, url: '/blogs' },
  { changeFrequency: 'monthly' as const, lastModified: new Date(), priority: 0.7, url: '/about' },
  { changeFrequency: 'monthly' as const, lastModified: new Date(), priority: 0.7, url: '/contact' },
  { changeFrequency: 'monthly' as const, lastModified: new Date(), priority: 0.4, url: '/privacy' },
  { changeFrequency: 'monthly' as const, lastModified: new Date(), priority: 0.4, url: '/terms' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = BlogCollections.flatMap((collection) =>
    collection.entries.map((entry) => ({
      changeFrequency: 'monthly' as const,
      lastModified: new Date(),
      priority: 0.8,
      url: `${SITE_URL}/blogs/${entry.id}/`,
    }))
  );

  const videoRoutes = BlogCollections.flatMap((collection) =>
    collection.entries
      .filter((entry) => entry.youtubeId)
      .map((entry) => ({
        changeFrequency: 'weekly' as const,
        lastModified: new Date(),
        priority: 0.7,
        url: `${SITE_URL}/videos/${entry.id}/`,
      }))
  );

  return [
    ...staticRoutes.map((route) => ({
      changeFrequency: route.changeFrequency,
      lastModified: route.lastModified,
      priority: route.priority,
      url: `${SITE_URL}${route.url}`,
    })),
    ...blogRoutes,
    ...videoRoutes,
  ];
}
