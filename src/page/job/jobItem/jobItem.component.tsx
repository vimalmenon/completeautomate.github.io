import * as Dialog from '@radix-ui/react-dialog';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Eye, MoreHorizontal, Pencil, X } from 'lucide-react';
import { useState } from 'react';

import { IJobItemProps } from './jobItem';

export const JobItem: React.FC<IJobItemProps> = ({ job }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <tr className="border-b border-border/50">
        <td className="px-3 py-3 font-medium text-foreground/90">{job.id.substring(0, 10)}...</td>
        <td className="px-3 py-3">{job.type}</td>
        <td className="px-3 py-3">
          <span className="rounded-full bg-muted/20 px-2.5 py-1 text-xs font-medium">{job.status}</span>
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
                  onSelect={() => setIsOpen(true)}
                  className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-foreground outline-none transition hover:bg-muted/20 focus:bg-muted/20"
                >
                  <Eye className="h-4 w-4" />
                  View job
                </DropdownMenu.Item>

                <DropdownMenu.Item
                  className="flex cursor-not-allowed items-center gap-2 rounded-md px-3 py-2 text-sm text-muted outline-none"
                  disabled
                >
                  <Pencil className="h-4 w-4" />
                  Edit job
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </td>
      </tr>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[2px]" />
        <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-border bg-background p-5 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <Dialog.Title className="text-lg font-semibold">Job Details</Dialog.Title>
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

          <div className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            <p>
              <span className="text-muted">ID:</span> {job.id}
            </p>
            <p>
              <span className="text-muted">Type:</span> {job.type}
            </p>
            <p>
              <span className="text-muted">Status:</span> {job.status}
            </p>
            <p>
              <span className="text-muted">Failed Count:</span> {job.failedCount}
            </p>
            <p>
              <span className="text-muted">Created:</span> {job.createdAt}
            </p>
            <p>
              <span className="text-muted">Completed:</span> {job.completedAt ?? 'N/A'}
            </p>
          </div>

          <p className="mt-4 text-sm">
            <span className="text-muted">Description:</span> {job.description || 'N/A'}
          </p>

          <div className="mt-4 space-y-2">
            <p className="text-sm text-muted">Task Data</p>
            <pre className="max-h-64 overflow-auto rounded-lg border border-border bg-surface p-3 text-xs">
              {JSON.stringify(job.taskData, null, 2)}
            </pre>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
