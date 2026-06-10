import fs from 'fs';
import path from 'path';

import { JSX } from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: { canonical: '/changelog/' },
  description:
    "Track the latest updates, features, and fixes for Complete Automate's AI workflow automation platform and services.",
  openGraph: {
    description: "See what's new at Complete Automate — product updates, features, and fixes.",
    siteName: 'Complete Automate',
    title: 'Changelog | Complete Automate',
    type: 'article',
    url: 'https://completeautomate.com/changelog',
  },
  title: 'Changelog | Complete Automate',
  twitter: {
    card: 'summary_large_image',
    description: 'Latest updates and fixes from Complete Automate.',
    title: 'Changelog | Complete Automate',
  },
};

export default function ChangelogPage(): JSX.Element {
  const filePath = path.join(process.cwd(), 'CHANGELOG.md');
  const content = fs.readFileSync(filePath, 'utf-8');

  return (
    <div className="px-6 pb-20 pt-16 sm:pt-20">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Updates
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            Changelog
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Track the latest features, fixes, and improvements across Complete Automate services and
            infrastructure.
          </p>
        </div>

        {/* Changelog Content */}
        <div className="prose prose-sm prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-[-0.03em] prose-h2:mt-12 prose-h2:border-b prose-h2:border-border/40 prose-h2:pb-3 prose-h2:text-xl prose-h2:font-semibold prose-h2:text-foreground prose-h3:text-lg prose-h3:text-foreground prose-strong:text-foreground prose-ul:list-none prose-ul:space-y-3 prose-ul:pl-0 prose-li:pl-0 prose-li:marker:text-primary prose-p:text-muted prose-p:leading-7 prose-a:text-primary prose-a:no-underline prose-code:rounded-lg prose-code:bg-surface/80 prose-code:px-2 prose-code:py-1 prose-code:text-sm prose-code:text-primary prose-pre:rounded-2xl prose-pre:border prose-pre:border-border/60 prose-pre:bg-surface/50">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
