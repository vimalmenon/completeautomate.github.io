import { JSX } from 'react';

import type { Metadata } from 'next';
import Link from 'next/link';

import { BlogContents } from '@data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(BlogContents).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BlogContents[slug];

  if (!post) {
    return { title: 'Post not found' };
  }

  return {
    description: `Read "${post.title}" from the ${post.collection} collection on CompleteAutomate.`,
    openGraph: {
      description: `Read "${post.title}" from the ${post.collection} collection.`,
      title: `${post.title} — Complete Automate`,
    },
    title: post.title,
  };
}

export default async function BlogPostPage({ params }: PageProps): Promise<JSX.Element> {
  const { slug } = await params;
  const post = BlogContents[slug];

  if (!post) {
    return (
      <div className="px-6 pb-20 pt-16 sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <section className="rounded-[2rem] border border-border/60 bg-surface/75 p-8 shadow-[0_24px_60px_rgb(15_23_42/0.1)] backdrop-blur-xl">
            <h1 className="text-2xl font-bold text-foreground">Post not found</h1>
            <p className="mt-4 leading-7 text-muted">
              The blog post you&apos;re looking for doesn&apos;t exist yet.
            </p>
            <Link
              href="/blogs"
              className="mt-6 inline-flex rounded-full border border-border/70 bg-surface/70 px-5 py-2 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              Back to Blogs
            </Link>
          </section>
        </div>
      </div>
    );
  }

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div className="px-6 pb-20 pt-16 sm:pt-20">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:text-primary-dark"
        >
          &larr; Back to Blogs
        </Link>

        <section className="mt-6 rounded-[2rem] border border-border/60 bg-surface/75 p-8 shadow-[0_24px_60px_rgb(15_23_42/0.1)] backdrop-blur-xl sm:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              {capitalize(post.collection)}
            </span>
            <span className="text-sm text-muted">{post.date}</span>
            <span className="text-sm text-muted">&middot;</span>
            <span className="text-sm text-muted">{post.readTime}</span>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
            {post.title}
          </h1>

          <div
            className="prose prose-sm mt-8 max-w-none text-muted prose-headings:text-foreground prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </section>

        <div className="mt-8 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-surface/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40 hover:text-primary"
          >
            &larr; Back to all articles
          </Link>
        </div>
      </article>
    </div>
  );
}
