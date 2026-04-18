import { IJobItemProps } from './jobItem';

export const JobItem: React.FC<IJobItemProps> = ({ job }) => (
  <tr className="border-b border-border/50">
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
);
