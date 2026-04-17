import { IJob } from '@types';

export interface IUseJobsHelper {
  getJobs: () => Promise<void>;
  jobs: IJob[];
}
