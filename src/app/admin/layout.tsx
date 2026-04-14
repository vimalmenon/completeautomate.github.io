import { JSX } from 'react';

import { Env } from '@constants';
import { AdminNavigation } from '@data';

import type { Metadata } from 'next';

import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  description: 'This is the website for Complete Automate',
  title: 'Admin | Complete Automate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  if (!Env.ADMIN_ENABLED) {
    notFound();
  }
  return (
    <main className="flex-1 bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-6 rounded-2xl border border-border bg-surface p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Admin</p>
              <h1 className="mt-2 text-2xl font-semibold">Control Panel</h1>
              <p className="mt-2 text-sm text-muted">
                Monitor jobs, teams, and runtime health from one place.
              </p>

              <nav className="mt-6 space-y-2 text-sm">
                <a href="#overview">Overview</a>
                {AdminNavigation.map((navigation, index) => {
                  if (index == 0) {
                    return (
                      <Link
                        href={navigation.url}
                        className="block rounded-lg bg-primary px-3 py-2 font-medium text-primary-foreground"
                        key={navigation.url}
                      >
                        {navigation.label}
                      </Link>
                    );
                  }
                  return (
                    <Link
                      href={navigation.url}
                      className="block rounded-lg px-3 py-2 text-foreground/80 hover:bg-muted/10"
                      key={navigation.url}
                    >
                      {navigation.label}
                    </Link>
                  );
                })}
                {/* <a className="" href="#jobs">Jobs</a>
                <a className="block rounded-lg px-3 py-2 text-foreground/80 hover:bg-muted/10" href="#activity">Activity</a> */}
              </nav>

              <div className="mt-6 rounded-lg bg-muted/10 p-3 text-xs text-foreground/80">
                <p className="font-semibold uppercase tracking-wide text-muted">API</p>
                <p className="mt-1 break-words">{Env.API_URL}</p>
              </div>
            </div>
          </aside>
          {children}
        </div>
      </section>
    </main>
  );
}
