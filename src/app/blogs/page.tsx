import { JSX } from 'react';

import { BlogCollections } from '@data';

export default function BlogsPage(): JSX.Element {
  return (
    <div className="px-6 pb-20 pt-16 sm:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.34em] text-primary uppercase">
            Blog Library
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
            Nested navigation for readers who want the map before the article.
          </h1>
          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            The blog is organized by topic first and article second. That gives you a cleaner path
            through strategy, AI systems, and implementation details without turning the page into a
            flat list of posts.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <nav
              aria-label="Blog sections"
              className="rounded-[2rem] border border-border/60 bg-surface/75 p-6 shadow-[0_20px_50px_rgb(15_23_42/0.08)] backdrop-blur-xl"
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
                    <a
                      href={`#${collection.id}`}
                      className="text-sm font-semibold tracking-[0.08em] text-foreground transition hover:text-primary"
                    >
                      {collection.title}
                    </a>
                    <ul className="mt-3 space-y-2 border-l border-border/60 pl-4">
                      {collection.entries.map((entry) => (
                        <li key={entry.id}>
                          <a
                            href={entry.href}
                            className="block text-sm leading-6 text-muted transition hover:text-primary"
                          >
                            {entry.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

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
                        <a
                          href={`#${collection.id}`}
                          className="text-xs font-semibold tracking-[0.26em] text-muted uppercase transition hover:text-primary"
                        >
                          Back To {collection.title}
                        </a>
                        <a
                          href={entry.href}
                          className="text-sm font-semibold text-primary transition hover:text-primary-dark"
                        >
                          Deep Link
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
