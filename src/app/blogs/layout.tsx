import { JSX } from 'react';

import { BlogSidebar } from '@component';

import Link from 'next/link';

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className="px-6 pb-20 pt-16 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.34em] text-primary uppercase">
            Blog Library
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
            <Link className="transition hover:text-primary" href="/blogs">
              Nested navigation for readers who want the map before the article.
            </Link>
          </h1>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            The blog is organized by topic first and article second. That gives you a cleaner path
            through strategy, AI systems, and implementation details without turning the page into a
            flat list of posts.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
          <BlogSidebar />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
