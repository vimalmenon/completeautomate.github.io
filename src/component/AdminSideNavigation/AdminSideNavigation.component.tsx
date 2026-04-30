'use client';

import { Env } from '@constants';
import { AdminNavigation } from '@data';
import { clsx } from 'clsx';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const AdminSideNavigation: React.FC = () => {
  const pathname = usePathname();

  const activeNavigationUrl =
    AdminNavigation.filter(
      (navigation) => pathname === navigation.url || pathname.startsWith(`${navigation.url}/`)
    )
      .sort((left, right) => right.url.length - left.url.length)
      .at(0)?.url ?? null;

  const isActive = (href: string): boolean => activeNavigationUrl === href;

  return (
    <aside className="lg:col-span-3">
      <div className="sticky top-6 rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">Admin</p>
        <h1 className="mt-2 text-2xl font-semibold">Control Panel</h1>
        <p className="mt-2 text-sm text-muted">
          Monitor jobs, teams, and runtime health from one place.
        </p>

        <nav className="mt-6 space-y-2 text-sm">
          <a href="#overview">Overview</a>
          {AdminNavigation.map((navigation) => (
            <Link
              href={navigation.url}
              className={clsx(
                'block rounded-lg px-3 py-2 transition-colors',
                isActive(navigation.url)
                  ? 'bg-primary font-medium text-primary-foreground'
                  : 'text-foreground/80 hover:bg-muted/10'
              )}
              key={navigation.url}
            >
              {navigation.label}
            </Link>
          ))}
          {/* <a className="" href="#jobs">Jobs</a>
                  <a className="block rounded-lg px-3 py-2 text-foreground/80 hover:bg-muted/10" href="#activity">Activity</a> */}
        </nav>

        <div className="mt-6 rounded-lg bg-muted/10 p-3 text-xs text-foreground/80">
          <p className="font-semibold uppercase tracking-wide text-muted">API</p>
          <p className="mt-1 wrap-break-word">{Env.API_URL}</p>
        </div>
      </div>
    </aside>
  );
};
