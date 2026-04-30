import { useState } from 'react';

import { useJobsHelper } from '@context';
import * as Dialog from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { JobStatusType } from '@types';
import { Eye, MoreHorizontal, Pencil, X } from 'lucide-react';

import { IJobItemProps } from './jobItem';

const JOB_STATUS_OPTIONS: JobStatusType[] = [
  'NEW',
  'IN_PROGRESS',
  'COMPLETE',
  'PENDING',
  'REVIEW',
  'FAILED',
  'CLEAN_UP',
];

const STATUS_STYLES: Record<JobStatusType, string> = {
  CLEAN_UP: 'bg-violet-100 text-violet-700',
  COMPLETE: 'bg-emerald-100 text-emerald-700',
  FAILED: 'bg-rose-100 text-rose-700',
  IN_PROGRESS: 'bg-amber-100 text-amber-700',
  NEW: 'bg-sky-100 text-sky-700',
  PENDING: 'bg-orange-100 text-orange-700',
  REVIEW: 'bg-indigo-100 text-indigo-700',
};

const formatDateTime = (value?: string): string => {
  if (!value) {
    return 'N/A';
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleString();
};

export const JobItem: React.FC<IJobItemProps> = ({ job }) => {
  const { loading, updateJob } = useJobsHelper();
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editStatus, setEditStatus] = useState<JobStatusType>(job.status);
  const [editDescription, setEditDescription] = useState(job.description ?? '');
  const [editTaskData, setEditTaskData] = useState(JSON.stringify(job.taskData ?? {}, null, 2));
  const [saveError, setSaveError] = useState<string | null>(null);

  const openEditDialog = (): void => {
    setEditStatus(job.status);
    setEditDescription(job.description ?? '');
    setEditTaskData(JSON.stringify(job.taskData ?? {}, null, 2));
    setSaveError(null);
    setIsEditOpen(true);
  };

  const saveJobChanges = async (): Promise<void> => {
    setSaveError(null);

    let parsedTaskData: Record<string, unknown>;
    try {
      parsedTaskData = editTaskData.trim()
        ? (JSON.parse(editTaskData) as Record<string, unknown>)
        : {};
    } catch {
      setSaveError('Task Data must be valid JSON.');
      return;
    }

    const isUpdated = await updateJob(job.id, {
      description: editDescription,
      status: editStatus,
      taskData: parsedTaskData,
    });

    if (!isUpdated) {
      setSaveError('Unable to save job changes right now.');
      return;
    }

    setIsEditOpen(false);
  };

  return (
    <>
      <tr className="border-b border-border/50">
        <td className="px-3 py-3 font-medium text-foreground/90">{job.id.substring(0, 10)}...</td>
        <td className="px-3 py-3">{job.type}</td>
        <td className="px-3 py-3">
          <span className="rounded-full bg-muted/20 px-2.5 py-1 text-xs font-medium">
            {job.status}
          </span>
        </td>
        <td className="px-3 py-3">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                type="button"
                aria-label={`Open actions for job ${job.id}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <MoreHorizontal className="h-4 w-4" strokeWidth={1.8} />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                sideOffset={6}
                align="end"
                className="z-50 min-w-44 rounded-lg border border-border bg-surface p-1.5 shadow-lg"
              >
                <DropdownMenu.Item
                  onSelect={() => setIsViewOpen(true)}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground outline-none transition hover:bg-muted/20 focus:bg-muted/20"
                >
                  <Eye className="h-4 w-4" />
                  View job
                </DropdownMenu.Item>

                <DropdownMenu.Item
                  onSelect={openEditDialog}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground outline-none transition hover:bg-muted/20 focus:bg-muted/20"
                >
                  <Pencil className="h-4 w-4" />
                  Edit job
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </td>
      </tr>

      <Dialog.Root open={isViewOpen} onOpenChange={setIsViewOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px]" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[calc(100vw-2rem)] max-w-3xl -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-background p-0 shadow-2xl">
            <div className="rounded-t-2xl border-b border-border bg-gradient-to-r from-surface via-surface to-muted/20 px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Dialog.Title className="text-xl font-semibold tracking-tight">
                    Job Details
                  </Dialog.Title>
                  <p className="mt-1 text-sm text-muted">
                    Review metadata and task payload for this job.
                  </p>
                </div>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition hover:text-foreground"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </Dialog.Close>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-foreground/90">
                  {job.id}
                </span>
                <span className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground/80">
                  {job.type}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[job.status]}`}
                >
                  {job.status}
                </span>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <div className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                <article className="rounded-xl border border-border bg-surface p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Created
                  </p>
                  <p className="mt-1 text-sm font-medium">{formatDateTime(job.createdAt)}</p>
                </article>
                <article className="rounded-xl border border-border bg-surface p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Completed
                  </p>
                  <p className="mt-1 text-sm font-medium">{formatDateTime(job.completedAt)}</p>
                </article>
                <article className="rounded-xl border border-border bg-surface p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Failed Count
                  </p>
                  <p className="mt-1 text-sm font-medium">{job.failedCount}</p>
                </article>
              </div>

              <section className="rounded-xl border border-border bg-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Description
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  {job.description || 'No description provided.'}
                </p>
              </section>

              <section className="rounded-xl border border-border bg-surface p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    Task Data
                  </p>
                  <p className="text-xs text-muted">JSON payload</p>
                </div>
                <pre className="mt-3 max-h-72 overflow-auto rounded-lg border border-border bg-background p-3 text-xs leading-relaxed text-foreground/90">
                  {JSON.stringify(job.taskData, null, 2)}
                </pre>
              </section>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Dialog.Root open={isEditOpen} onOpenChange={setIsEditOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px]" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-background p-5 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <Dialog.Title className="text-lg font-semibold">Edit Job</Dialog.Title>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted transition hover:text-foreground"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </Dialog.Close>
            </div>

            <div className="mt-4 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Status
                </label>
                <select
                  value={editStatus}
                  onChange={(event): void => setEditStatus(event.target.value as JobStatusType)}
                  className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {JOB_STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Description
                </label>
                <textarea
                  value={editDescription}
                  onChange={(event): void => setEditDescription(event.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wide text-muted">
                  Task Data
                </label>
                <textarea
                  value={editTaskData}
                  onChange={(event): void => setEditTaskData(event.target.value)}
                  rows={10}
                  className="w-full rounded-lg border border-border bg-surface px-3 py-2 font-mono text-xs outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>

              {saveError ? <p className="text-sm text-red-500">{saveError}</p> : null}

              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditOpen(false)}
                  className="rounded-lg border border-border px-4 py-2 text-sm"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    void saveJobChanges();
                  }}
                  disabled={loading}
                  className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-60"
                >
                  {loading ? 'Saving...' : 'Save changes'}
                </button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
