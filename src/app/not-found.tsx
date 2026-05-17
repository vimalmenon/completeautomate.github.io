import { JSX } from 'react';

import Link from 'next/link';

export default function NotFound(): JSX.Element {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-6">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-8xl font-bold tracking-[-0.06em] text-primary sm:text-9xl">404</h1>
        <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-foreground sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-base leading-7 text-muted">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The page might have been
          moved, deleted, or never existed.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="rounded-full bg-foreground px-8 py-3.5 text-sm font-semibold text-background transition hover:bg-primary"
            href="/"
          >
            Go to Homepage
          </Link>
          <Link
            className="rounded-full border border-border/70 bg-surface/70 px-8 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
            href="/blogs"
          >
            Browse Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
