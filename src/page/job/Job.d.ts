import { IJob, JobStatusType } from '@types';

export type IJobPageQueryType = 'type';

export interface IJobPageQuery {
  type: JobStatusType;
}

export interface IUseJobQueryParams {
  clearQueryParams: (keys: string[]) => void;
  getQueryParam: (key: string) => string | null;
  jobs: IJob[];
  jobId: string | null;
  mode: JobQueryMode;
  setQueryParams: (updates: QueryParamUpdates) => void;
  getFilteredJobs: () => Promise<void>;
}
