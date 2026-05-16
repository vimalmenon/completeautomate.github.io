import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-muted">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10">
          <div className="mx-auto max-w-md rounded-[2rem] border border-border/60 bg-surface/75 p-6 shadow backdrop-blur-xl">
            <p className="text-sm font-medium text-muted">You might be looking for:</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm font-semibold text-primary hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-sm font-semibold text-primary hover:underline">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <a
              href="mailto:hello@completeautomate.com"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2.5 text-sm font-semibold text-background shadow-sm hover:bg-primary-dark"
            >
              Email Support
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
