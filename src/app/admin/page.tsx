'use client';

import { JSX } from 'react';

import { useAdminHelper } from '@context';

const kpiCards = [
  { label: 'Active Jobs', trend: '+12%', value: '128' },
  { label: 'Teams', trend: '+4%', value: '24' },
  { label: 'Success Rate', trend: '+1.3%', value: '98.1%' },
  { label: 'Pending Reviews', trend: '-9%', value: '17' },
];

const activityFeed = [
  'Scheduler restarted at 09:12',
  'New prompt template published',
  'Team Creative Team added 2 jobs',
  'Offline mode check passed',
];

export default function AdminPage(): JSX.Element {
  useAdminHelper();
  return (
    <div className="space-y-6 lg:col-span-9">
      <div id="overview" className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="text-sm text-muted">
              Quick snapshot of core metrics and operational status.
            </p>
          </div>
          <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-dark">
            New Job
          </button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpiCards.map((item) => (
            <article key={item.label} className="rounded-xl border border-border bg-muted/10 p-4">
              <p className="text-xs uppercase tracking-wider text-muted">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold">{item.value}</p>
              <p className="mt-1 text-xs font-medium text-emerald-700">{item.trend} vs last week</p>
            </article>
          ))}
        </div>
      </div>

      <div id="activity" className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <h2 className="text-xl font-semibold">Activity Feed</h2>
        <ul className="mt-4 space-y-3 text-sm text-foreground/80">
          {activityFeed.map((item) => (
            <li key={item} className="rounded-lg border border-border bg-muted/10 px-3 py-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
