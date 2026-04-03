"use client";


import { useEffect } from "react";
import { Env, API_ROUTES } from "../../constants";



const kpiCards = [
  { label: "Active Jobs", value: "128", trend: "+12%" },
  { label: "Teams", value: "24", trend: "+4%" },
  { label: "Success Rate", value: "98.1%", trend: "+1.3%" },
  { label: "Pending Reviews", value: "17", trend: "-9%" },
];

const recentJobs = [
  { id: "JOB-8421", type: "YouTube Sync", owner: "Growth Team", status: "Running" },
  { id: "JOB-8399", type: "Image Prompt", owner: "Creative Team", status: "Queued" },
  { id: "JOB-8387", type: "Metadata Scan", owner: "Data Team", status: "Completed" },
  { id: "JOB-8372", type: "Prompt Suggest", owner: "Ops Team", status: "Failed" },
];

const activityFeed = [
  "Scheduler restarted at 09:12",
  "New prompt template published",
  "Team Creative Team added 2 jobs",
  "Offline mode check passed",
];

const statusColor: Record<string, string> = {
  Running: "bg-blue-100 text-blue-700",
  Queued: "bg-amber-100 text-amber-700",
  Completed: "bg-emerald-100 text-emerald-700",
  Failed: "bg-rose-100 text-rose-700",
};

export default function AdminPage() {
  useEffect(() => {
    fetch(`${Env.API_URL}${API_ROUTES.JOBS}`).then((res) => res.json()).then(console.log)
  }, [])
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-6 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Admin</p>
              <h1 className="mt-2 text-2xl font-semibold">Control Panel</h1>
              <p className="mt-2 text-sm text-zinc-600">Monitor jobs, teams, and runtime health from one place.</p>

              <nav className="mt-6 space-y-2 text-sm">
                <a className="block rounded-lg bg-black px-3 py-2 font-medium text-white" href="#overview">Overview</a>
                <a className="block rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100" href="#jobs">Jobs</a>
                <a className="block rounded-lg px-3 py-2 text-zinc-700 hover:bg-zinc-100" href="#activity">Activity</a>
              </nav>

              <div className="mt-6 rounded-lg bg-zinc-100 p-3 text-xs text-zinc-700">
                <p className="font-semibold uppercase tracking-wide text-zinc-500">API</p>
                <p className="mt-1 break-words">{Env.API_URL}</p>
              </div>
            </div>
          </aside>

          <div className="space-y-6 lg:col-span-9">
            <div id="overview" className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Overview</h2>
                  <p className="text-sm text-zinc-600">Quick snapshot of core metrics and operational status.</p>
                </div>
                <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800">
                  New Job
                </button>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {kpiCards.map((item) => (
                  <article key={item.label} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                    <p className="text-xs uppercase tracking-wider text-zinc-500">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold">{item.value}</p>
                    <p className="mt-1 text-xs font-medium text-emerald-700">{item.trend} vs last week</p>
                  </article>
                ))}
              </div>
            </div>

            <div id="jobs" className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold">Recent Jobs</h2>
              <p className="mt-1 text-sm text-zinc-600">Live queue and completion updates.</p>

              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="border-b border-zinc-200 text-xs uppercase tracking-wider text-zinc-500">
                    <tr>
                      <th className="px-3 py-3">Job ID</th>
                      <th className="px-3 py-3">Type</th>
                      <th className="px-3 py-3">Owner</th>
                      <th className="px-3 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentJobs.map((job) => (
                      <tr key={job.id} className="border-b border-zinc-100">
                        <td className="px-3 py-3 font-medium text-zinc-800">{job.id}</td>
                        <td className="px-3 py-3">{job.type}</td>
                        <td className="px-3 py-3">{job.owner}</td>
                        <td className="px-3 py-3">
                          <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusColor[job.status]}`}>
                            {job.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div id="activity" className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold">Activity Feed</h2>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                {activityFeed.map((item) => (
                  <li key={item} className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
