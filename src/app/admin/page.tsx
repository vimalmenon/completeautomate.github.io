'use client';

import { JSX } from 'react';

import { Button } from '@component';
import { useAdminHelper } from '@context';

export default function AdminPage(): JSX.Element {
  const { checkSyncFile, downloadToLocal } = useAdminHelper();
  return (
    <div className="space-y-6 lg:col-span-9">
      <div id="overview" className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-dark"
            onClick={checkSyncFile}
          >
            Is File Synced
          </button>
          <Button onClick={downloadToLocal}>Sync File</Button>
        </div>
      </div>
    </div>
  );
}
