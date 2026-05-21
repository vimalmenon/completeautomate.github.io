import { JSX } from 'react';

import { BlogCollections } from '@data';

import type { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://completeautomate.com/blogs/',
  },
  description:
    'Browse guides on workflow automation, AI systems, and AI terminology explained. Each post pairs written content with video explanations from Vimal Menon.',
  openGraph: {
    description:
      'Browse guides on workflow automation, AI systems, and AI terminology explained. Each post pairs written content with video explanations from Vimal Menon.',
    siteName: 'Complete Automate',
    title: 'Blog | Complete Automate',
    type: 'website',
  },
  title: 'Blog | Complete Automate',
  twitter: {
    card: 'summary_large_image',
    description: 'Browse guides on workflow automation, AI systems, and AI terminology explained.',
    title: 'Blog | Complete Automate',
  },
};

export default function BlogsPage(): JSX.Element {
  return (
    <div className="space-y-8">
      {BlogCollections.map((collection) => (
        <section
          key={collection.id}
          id={collection.id}
          className="rounded-[2rem] border border-border/60 bg-surface/75 p-8 shadow-[0_24px_60px_rgb(15_23_42/0.1)] backdrop-blur-xl"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
              {collection.title}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-foreground">
              {collection.title} Guides
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              {collection.description}
            </p>
          </div>

          <div className="mt-8 grid gap-5">
            {collection.entries.map((entry) => (
              <article
                key={entry.id}
                id={entry.id}
                className="rounded-[1.5rem] border border-border/60 bg-background/60 p-6 transition hover:border-primary/30 hover:shadow-[0_18px_45px_rgb(8_145_178/0.12)]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground">
                      {entry.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                      {entry.description}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                      {entry.status}
                    </span>
                    <span className="rounded-full border border-border/60 bg-surface/80 px-3 py-1 text-xs font-medium text-muted">
                      {entry.readTime}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-4 border-t border-border/50 pt-4">
                  {entry.content.length > 0 ? (
                    <Link
                      className="text-sm font-semibold tracking-[0.08em] text-primary transition hover:text-primary/80 uppercase"
                      href={`/blogs/${entry.id}`}
                    >
                      Read Article
                    </Link>
                  ) : (
                    <span className="text-sm font-medium italic text-muted">Coming soon</span>
                  )}
                  <span className="text-xs text-muted">{entry.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
