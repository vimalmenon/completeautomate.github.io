'use client';

import { useEffect } from 'react';

import { ErrorMessage, LoadingIndicator } from '@common';
import { useJobsHelper } from '@context';

import { JOB_QUERY_KEYS, useJobQueryParams } from './job.service';
import { JobItem } from './jobItem';

export const JobPage: React.FC = () => {
  const { alert, loading } = useJobsHelper();
  const {
    clearQueryParams,
    getFilteredJobs,
    getQueryParam,
    jobId,
    jobs,
    mode,
    processJobs,
    setQueryParams,
  } = useJobQueryParams();

  useEffect(() => {
    getFilteredJobs();
  }, []);

  const items = processJobs();
  const selectedJobId = getQueryParam(JOB_QUERY_KEYS.jobId);
  const visibleJobs = selectedJobId ? jobs.filter((job) => job.id === selectedJobId) : jobs;

  return (
    <>
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

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Object.keys(items).map((item) => (
            <article
              key={item}
              className="rounded-xl border border-border bg-muted/10 p-4"
              onClick={() => setQueryParams({ type: item })}
            >
              <p className="text-xs uppercase tracking-wider text-muted">{item}</p>
              <p className="mt-2 text-2xl font-semibold">{items[item]}</p>
            </article>
          ))}
        </div>
      </div>
      <div id="jobs" className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <h2 className="text-xl font-semibold">Recent Jobs</h2>
        <p className="mt-1 text-sm text-muted">Live queue and completion updates.</p>

        {selectedJobId ? (
          <div className="mt-4 flex flex-col gap-3 rounded-xl border border-border bg-muted/10 p-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-foreground/90">Active job query params</p>
              <p className="mt-1 text-muted">
                jobId={selectedJobId}
                {mode ? `, mode=${mode}` : ''}
              </p>
            </div>
            <button
              type="button"
              onClick={() => clearQueryParams([JOB_QUERY_KEYS.jobId, JOB_QUERY_KEYS.mode])}
              className="rounded-lg border border-border px-4 py-2 text-sm transition hover:border-primary hover:text-primary"
            >
              Clear selection
            </button>
          </div>
        ) : null}

        {alert ? (
          <ErrorMessage
            className="mt-4"
            message={alert.message}
            actionLabel="Try again"
            onAction={async () => {
              await getFilteredJobs();
            }}
            title="Could not load jobs"
          />
        ) : null}

        {loading ? <LoadingIndicator className="mt-4" label="Loading jobs…" /> : null}

        {!loading && selectedJobId && visibleJobs.length === 0 ? (
          <ErrorMessage
            className="mt-4"
            message={`No job found for jobId ${selectedJobId}.`}
            actionLabel="Clear query params"
            onAction={() => clearQueryParams([JOB_QUERY_KEYS.jobId, JOB_QUERY_KEYS.mode])}
            title="Job not found"
          />
        ) : null}

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase tracking-wider text-muted">
              <tr>
                <th className="px-3 py-3">Job ID</th>
                <th className="px-3 py-3">Type</th>
                <th className="px-3 py-3">Status</th>
                <th className="px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleJobs.map((job) => (
                <JobItem
                  clearJobQueryParams={clearQueryParams}
                  job={job}
                  key={job.id}
                  selectedJobId={jobId}
                  selectedMode={mode}
                  setJobQueryParams={setQueryParams}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
