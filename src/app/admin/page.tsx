'use client';

import { JSX, useEffect } from 'react';

import { Button } from '@component';
import { AdminNavigation } from '@data';
import { useAdminHelper } from '@context';

import Link from 'next/link';

const dashboardHighlights = [
  {
    label: 'Admin Routes',
    value: String(AdminNavigation.filter((item) => !item.hidden).length),
  },
  {
    label: 'Quick Actions',
    value: '2',
  },
  {
    label: 'Primary Focus',
    value: 'Operations',
  },
];

const adminSections = AdminNavigation.filter((item) => !item.hidden).map((item) => {
  if (item.url === '/admin/jobs') {
    return {
      cta: 'Open Queue',
      description: 'Review job queues, status counts, and the latest execution activity.',
      focus: 'Queue health',
      href: item.url,
      label: item.label,
    };
  }

  if (item.url === '/admin/prompts') {
    return {
      cta: 'Open Library',
      description: 'Manage task prompts, descriptions, versions, and prompt updates.',
      focus: 'Prompt versions',
      href: item.url,
      label: item.label,
    };
  }

  if (item.url === '/admin/youtube') {
    return {
      cta: 'Open Channels',
      description: 'Inspect connected channels, video metrics, and publishing status.',
      focus: 'Channel activity',
      href: item.url,
      label: item.label,
    };
  }

  return {
    cta: 'Stay Here',
    description: 'Use the landing page as the entry point for admin navigation and sync tasks.',
    focus: 'Overview',
    href: item.url,
    label: item.label,
  };
});

export default function AdminPage(): JSX.Element {
  const { checkSyncFile, downloadToLocal, syncStatus, syncStatusMessage } = useAdminHelper();

  const syncStatusBadgeClassName =
    syncStatus === true
      ? 'inline-flex rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700'
      : syncStatus === false
        ? 'inline-flex rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-700'
        : 'inline-flex rounded-full bg-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700';

  const syncStatusLabel =
    syncStatus === true ? 'Synced' : syncStatus === false ? 'Out of sync' : 'Unknown';

  const checkSyncButtonClassName =
    syncStatus === true
      ? 'rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700'
      : syncStatus === false
        ? 'rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700'
        : 'rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-dark';

  useEffect(() => {
    void checkSyncFile();
  }, [checkSyncFile]);

  return (
    <div className="space-y-6 lg:col-span-9">
      <div id="overview" className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="text-sm text-muted">
              The same control surface language as the other admin sections, with routing and sync
              actions in one place.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button className={checkSyncButtonClassName} onClick={checkSyncFile}>
              Is File Synced
            </button>
            <Button onClick={downloadToLocal}>Sync File</Button>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {dashboardHighlights.map((highlight) => (
            <article key={highlight.label} className="rounded-xl border border-border bg-muted/10 p-4">
              <p className="text-xs uppercase tracking-wider text-muted">{highlight.label}</p>
              <p className="mt-2 text-2xl font-semibold">{highlight.value}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-border bg-muted/10 p-4">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted">Sync Status</p>
              <p className="mt-2 text-sm text-foreground/85">{syncStatusMessage}</p>
            </div>
            <span className={syncStatusBadgeClassName}>{syncStatusLabel}</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <h2 className="text-xl font-semibold">Admin Sections</h2>
        <p className="mt-1 text-sm text-muted">
          Jump into the same operational views used for jobs, prompts, and YouTube management.
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase tracking-wider text-muted">
              <tr>
                <th className="px-3 py-3">Area</th>
                <th className="px-3 py-3">Focus</th>
                <th className="px-3 py-3">Description</th>
                <th className="px-3 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {adminSections.map((section) => (
                <tr className="border-b border-border/50 hover:bg-muted/10" key={section.href}>
                  <td className="px-3 py-3 font-medium text-foreground">{section.label}</td>
                  <td className="px-3 py-3 text-sm text-muted">{section.focus}</td>
                  <td className="px-3 py-3 text-sm text-foreground/85">{section.description}</td>
                  <td className="px-3 py-3 text-right">
                    <Link
                      className="inline-flex rounded-full border border-border px-3 py-1.5 text-xs font-medium transition hover:bg-muted/10"
                      href={section.href}
                    >
                      {section.cta}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <h2 className="text-xl font-semibold">Operator Notes</h2>
        <p className="mt-1 text-sm text-muted">
          Use this page as the entry point, then move into the section that owns the actual data
          and actions.
        </p>

        <div className="mt-4 space-y-3">
          <div className="rounded-xl border border-border bg-muted/10 p-4">
            <p className="text-sm font-medium text-foreground">Start with sync when data feels stale.</p>
            <p className="mt-1 text-sm text-muted">
              A quick file check avoids chasing outdated local assets before reviewing jobs or prompts.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-muted/10 p-4">
            <p className="text-sm font-medium text-foreground">Use the section pages for real edits.</p>
            <p className="mt-1 text-sm text-muted">
              Jobs, prompts, and YouTube each keep their own detailed tables, cards, and actions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
