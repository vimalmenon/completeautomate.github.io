import { IAlert, IJob } from '@types';

export interface IUseJobsHelper {
  alert: IAlert | null;
  getJobs: () => Promise<void>;
  jobs: IJob[];
  loading: boolean;
}
