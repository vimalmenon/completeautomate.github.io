'use client';

import { useEffect } from 'react';

import { useJobsHelper } from '@context';

export const JobPage: React.FC = () => {
  const { getJobs, jobs } = useJobsHelper();
  useEffect(() => {
    getJobs();
  }, []);
  return (
    <div id="jobs" className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Recent Jobs</h2>
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
            {jobs.map((job) => (
              <tr key={job.id} className="border-b border-border/50">
                <td className="px-3 py-3 font-medium text-foreground/90">{job.id}</td>
                <td className="px-3 py-3">{job.type}</td>
                {/* <td className="px-3 py-3">{job.owner}</td> */}
                {/* <td className="px-3 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor[job.status]}`}
                    >
                      {job.status}
                    </span>
                  </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
