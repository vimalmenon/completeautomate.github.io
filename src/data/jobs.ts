import { JobStatusType } from '@types';

export const statusColor: Record<JobStatusType, string> = {
  CLEAN_UP: '',
  COMPLETE: 'bg-emerald-100 text-emerald-700',
  FAILED: 'bg-rose-100 text-rose-700',
  IN_PROGRESS: 'bg-blue-100 text-blue-700',
  NEW: '',
  PENDING: '',
  REVIEW: 'bg-amber-100 text-amber-700',
};
