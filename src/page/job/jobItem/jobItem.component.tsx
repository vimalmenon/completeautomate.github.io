import { Eye, Pencil } from 'lucide-react';

import { IJobItemProps } from './jobItem';

export const JobItem: React.FC<IJobItemProps> = ({ job }) => (
  <tr className="border-b border-border/50">
    <td className="px-3 py-3 font-medium text-foreground/90">{job.id.substring(0, 10)}...</td>
    <td className="px-3 py-3">{job.type}</td>
    <td className="px-3 py-3">
      <span className={`rounded-full px-2.5 py-1 text-xs font-medium`}>{job.status}</span>
    </td>
    <td className="px-3 py-3">
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label={`View job ${job.id}`}
          title="View job"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <Eye className="h-4 w-4" strokeWidth={1.8} />
        </button>
        <button
          type="button"
          aria-label={`Edit job ${job.id}`}
          title="Edit job"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted transition hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          <Pencil className="h-4 w-4" strokeWidth={1.8} />
        </button>
      </div>
    </td>
  </tr>
);
