import { IJob } from '@types';

export interface IJobItemProps {
  clearJobQueryParams: (keys: string[]) => void;
  job: IJob;
  selectedJobId: string | null;
  selectedMode: 'view' | 'edit' | null;
  setJobQueryParams: (updates: Record<string, string | number | null | undefined>) => void;
}
