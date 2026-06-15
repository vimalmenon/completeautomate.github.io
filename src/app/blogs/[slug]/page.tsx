import { JSX } from 'react';

import { BlogCollections } from '@data';

import type { Metadata } from 'next';

import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams(): { slug: string }[] {
  return BlogCollections.flatMap((collection) =>
    collection.entries.map((entry) => ({ slug: entry.id }))
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

  if (!entry) {
    return {};
  }

  return {
    alternates: {
      canonical: `https://completeautomate.com/blogs/${slug}/`,
    },
    description: entry.description,
    openGraph: {
      description: entry.description,
      siteName: 'Complete Automate',
      title: entry.title,
      type: 'article',
      url: `https://completeautomate.com/blogs/${slug}`,
    },
    title: `${entry.title} | Complete Automate`,
    twitter: {
      card: 'summary_large_image',
      description: entry.description,
      title: `${entry.title} | Complete Automate`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<JSX.Element> {
  const { slug } = await params;
  const entry = BlogCollections.flatMap((collection) => collection.entries).find(
    (e) => e.id === slug
  );

  if (!entry) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    author: {
      '@type': 'Person',
      name: 'Vimal Menon',
      sameAs: 'https://youtube.com/@real_vimal_menon',
      url: 'https://completeautomate.com/about',
    },
    description: entry.description,
    headline: entry.title,
    mainEntityOfPage: {
      '@id': `https://completeautomate.com/blogs/${slug}/`,
      '@type': 'WebPage',
    },
    publisher: {
      '@type': 'Organization',
      logo: { '@type': 'ImageObject', url: 'https://completeautomate.com/logo.svg' },
      name: 'Complete Automate',
    },
    ...(entry.youtubeId && {
      video: {
        '@type': 'VideoObject',
        description: entry.description,
        embedUrl: `https://www.youtube.com/embed/${entry.youtubeId}`,
        name: entry.title,
        thumbnailUrl: `https://img.youtube.com/vi/${entry.youtubeId}/maxresdefault.jpg`,
        ...(entry.uploadDate && { uploadDate: entry.uploadDate }),
      },
    }),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', item: 'https://completeautomate.com/', name: 'Home', position: 1 },
      {
        '@type': 'ListItem',
        item: 'https://completeautomate.com/blogs/',
        name: 'Blog',
        position: 2,
      },
      {
        '@type': 'ListItem',
        item: `https://completeautomate.com/blogs/${slug}/`,
        name: entry.title,
        position: 3,
      },
    ],
  };

  return (
    <div className="px-6 pb-20">
      <div className="mx-auto max-w-4xl">
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
          type="application/ld+json"
        />
        {/* Video iframe above the fold for Google prominence */}
        {entry.youtubeId && (
          <div className="aspect-video overflow-hidden rounded-2xl border border-border/60 bg-surface/75 shadow-[0_20px_50px_rgb(15_23_42/0.08)]">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${entry.youtubeId}`}
              title={entry.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        <Link
          className="mt-6 block text-sm font-semibold tracking-[0.08em] text-primary transition hover:text-primary/80 uppercase"
          href="/blogs"
        >
          &larr; Back to Blog
        </Link>

        <article className="mt-6 rounded-[2rem] border border-border/60 bg-surface/75 p-8 shadow-[0_24px_60px_rgb(15_23_42/0.1)] backdrop-blur-xl sm:p-12">
          <header>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                {entry.status}
              </span>
              <span className="rounded-full border border-border/60 bg-surface/80 px-3 py-1 text-xs font-medium text-muted">
                {entry.readTime}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
              {entry.title}
            </h1>

            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{entry.description}</p>
          </header>

          <hr className="my-8 border-border/40" />

          <div className="space-y-6 text-base leading-8 text-foreground">
            {entry.content.length > 0 ? (
              entry.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
            ) : (
              <p className="italic text-muted">
                This article is still being written. Check back soon.
              </p>
            )}
          </div>
        </article>

        <div className="mt-8 text-center">
          <Link
            className="text-sm font-semibold tracking-[0.08em] text-primary transition hover:text-primary/80 uppercase"
            href="/blogs"
          >
            &larr; Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
