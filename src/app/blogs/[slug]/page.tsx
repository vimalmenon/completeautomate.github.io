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

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = BlogCollections.flatMap((collection) => collection.entries).find(
    (e) => e.id === params.slug
  );

  if (!entry) {
    return {};
  }

  return {
    description: entry.description,
    openGraph: { description: entry.description, title: entry.title },
    title: `${entry.title} | Complete Automate`,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }): JSX.Element {
  const entry = BlogCollections.flatMap((collection) => collection.entries).find(
    (e) => e.id === params.slug
  );

  if (!entry) {
    notFound();
  }

  return (
    <div className="px-6 pb-20 pt-16 sm:pt-20">
      <div className="mx-auto max-w-4xl">
        <Link
          className="text-sm font-semibold tracking-[0.08em] text-primary transition hover:text-primary/80 uppercase"
          href="/blogs"
        >
          &larr; Back to Blog
        </Link>

        <article className="mt-8 rounded-[2rem] border border-border/60 bg-surface/75 p-8 shadow-[0_24px_60px_rgb(15_23_42/0.1)] backdrop-blur-xl sm:p-12">
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
