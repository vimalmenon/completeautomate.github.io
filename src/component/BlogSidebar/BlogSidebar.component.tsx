'use client';

import { JSX } from 'react';

import { BlogCollections } from '@data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BlogSidebar(): JSX.Element {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Blog sections"
      className="rounded-[2rem] border border-border/60 bg-surface/75 p-6 shadow-[0_20px_50px_rgb(15_23_42/0.08)] backdrop-blur-xl lg:sticky lg:top-28"
    >
      <div className="border-b border-border/60 pb-4">
        <p className="text-xs font-semibold tracking-[0.32em] text-primary uppercase">
          Browse Topics
        </p>
        <p className="mt-3 text-sm leading-6 text-muted">
          Choose a collection, then jump directly into a guide inside it.
        </p>
      </div>

      <ul className="mt-6 space-y-5">
        {BlogCollections.map((collection) => (
          <li key={collection.id}>
            <Link
              className="text-sm font-semibold tracking-[0.08em] text-foreground transition hover:text-primary"
              href={`/blogs#${collection.id}`}
            >
              {collection.title}
            </Link>
            <ul className="mt-3 space-y-2 border-l border-border/60 pl-4">
              {collection.entries.map((entry) => {
                const isActive = pathname === `/blogs/${entry.id}`;
                return (
                  <li key={entry.id}>
                    <Link
                      className={`block text-sm leading-6 transition ${
                        isActive
                          ? 'font-semibold text-primary'
                          : 'text-muted hover:text-primary'
                      }`}
                      href={`/blogs/${entry.id}`}
                    >
                      {entry.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
