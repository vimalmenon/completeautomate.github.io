import { IJob } from '@types';

export interface IUseJobsHelper {
  errorMessage: string | null;

  getJobs: () => Promise<void>;
  jobs: IJob[];
  loading: boolean;
}
