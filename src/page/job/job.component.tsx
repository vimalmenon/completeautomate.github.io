'use client';

import { useEffect } from 'react';

import { ErrorMessage, LoadingIndicator } from '@common';
import { useJobsHelper } from '@context';

import { JobItem } from './jobItem';

export const JobPage: React.FC = () => {
  const { errorMessage, getJobs, jobs, loading } = useJobsHelper();

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div id="jobs" className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Recent Jobs</h2>
      <p className="mt-1 text-sm text-muted">Live queue and completion updates.</p>

      {errorMessage ? (
        <ErrorMessage
          className="mt-4"
          message={errorMessage}
          actionLabel="Try again"
          onAction={() => {
            void getJobs();
          }}
          title="Could not load jobs"
        />
      ) : null}

      {loading ? <LoadingIndicator className="mt-4" label="Loading jobs…" /> : null}

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
            {jobs.map((job) => (
              <JobItem job={job} key={job.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
