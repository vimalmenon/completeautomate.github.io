import { JSX } from 'react';

import { BlogCollections } from '@data';

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams(): { slug: string }[] {
  return BlogCollections.flatMap((collection) =>
    collection.entries
      .filter((entry) => entry.youtubeId)
      .map((entry) => ({ slug: entry.id }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = BlogCollections.flatMap((collection) => collection.entries).find(
    (e) => e.id === slug
  );

  if (!entry || !entry.youtubeId) {
    return {};
  }

  return {
    alternates: {
      canonical: `https://completeautomate.com/videos/${slug}/`,
    },
    description: entry.description,
    openGraph: {
      description: entry.description,
      siteName: 'Complete Automate',
      title: entry.title,
      type: 'video.other',
      url: `https://completeautomate.com/videos/${slug}`,
    },
    title: `${entry.title} | Complete Automate`,
    twitter: {
      card: 'player',
      description: entry.description,
      title: `${entry.title} | Complete Automate`,
    },
  };
}

export default async function VideoWatchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<JSX.Element> {
  const { slug } = await params;
  const entry = BlogCollections.flatMap((collection) => collection.entries).find(
    (e) => e.id === slug
  );

  if (!entry || !entry.youtubeId) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    description: entry.description,
    embedUrl: `https://www.youtube.com/embed/${entry.youtubeId}`,
    name: entry.title,
    thumbnailUrl: `https://img.youtube.com/vi/${entry.youtubeId}/maxresdefault.jpg`,
    ...(entry.uploadDate && { uploadDate: entry.uploadDate }),
    author: {
      '@type': 'Person',
      name: 'Vimal Menon',
      sameAs: 'https://youtube.com/@real_vimal_menon',
      url: 'https://completeautomate.com/about',
    },
    mainEntityOfPage: {
      '@id': `https://completeautomate.com/videos/${slug}/`,
      '@type': 'WebPage',
    },
    publisher: {
      '@type': 'Organization',
      logo: { '@type': 'ImageObject', url: 'https://completeautomate.com/logo.svg' },
      name: 'Complete Automate',
    },
  };

  return (
    <div className="px-6 pb-20 pt-16 sm:pt-20">
      <div className="mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <Link
          className="mb-8 inline-block text-xs font-semibold tracking-[0.34em] text-primary uppercase transition hover:text-primary/80"
          href="/blogs"
        >
          &larr; Back to Blog Library
        </Link>

        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />

        {/* Video player — the hero */}
        <div className="aspect-video overflow-hidden rounded-2xl border border-border/60 bg-surface/75 shadow-[0_20px_50px_rgb(15_23_42/0.08)]">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${entry.youtubeId}`}
            title={entry.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video metadata */}
        <div className="mt-8">
          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            {entry.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{entry.description}</p>
        </div>

        {/* Link to the full article */}
        <div className="mt-8 border-t border-border/40 pt-8">
          <Link
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-primary uppercase transition hover:text-primary/80"
            href={`/blogs/${slug}`}
          >
            Read the full article
            <span aria-hidden="true" className="text-base">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
