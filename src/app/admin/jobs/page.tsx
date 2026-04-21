'use client';

import { JSX } from 'react';

import { JobPage } from '@page';

const kpiCards = [
  { label: 'Active Jobs', trend: '+12%', value: '128' },
  { label: 'Teams', trend: '+4%', value: '24' },
  { label: 'Success Rate', trend: '+1.3%', value: '98.1%' },
  { label: 'Pending Reviews', trend: '-9%', value: '17' },
];

const recentJobs = [
  { id: 'JOB-8421', owner: 'Growth Team', status: 'Running', type: 'YouTube Sync' },
  { id: 'JOB-8399', owner: 'Creative Team', status: 'Queued', type: 'Image Prompt' },
  { id: 'JOB-8387', owner: 'Data Team', status: 'Completed', type: 'Metadata Scan' },
  { id: 'JOB-8372', owner: 'Ops Team', status: 'Failed', type: 'Prompt Suggest' },
];

const statusColor: Record<string, string> = {
  Completed: 'bg-emerald-100 text-emerald-700',
  Failed: 'bg-rose-100 text-rose-700',
  Queued: 'bg-amber-100 text-amber-700',
  Running: 'bg-blue-100 text-blue-700',
};

export default function AdminPage(): JSX.Element {
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
      <JobPage />
      <div id="jobs" className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <h2 className="text-xl font-semibold">Jobs</h2>
        <p className="mt-1 text-sm text-muted">Live queue and completion updates.</p>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase tracking-wider text-muted">
              <tr>
                <th className="px-3 py-3">Job ID</th>
                <th className="px-3 py-3">Type</th>
                <th className="px-3 py-3">Owner</th>
                <th className="px-3 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentJobs.map((job) => (
                <tr key={job.id} className="border-b border-border/50">
                  <td className="px-3 py-3 font-medium text-foreground/90">{job.id}</td>
                  <td className="px-3 py-3">{job.type}</td>
                  <td className="px-3 py-3">{job.owner}</td>
                  <td className="px-3 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor[job.status]}`}
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
