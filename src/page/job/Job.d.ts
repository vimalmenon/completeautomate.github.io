import { IJob, JobStatusType } from '@types';

export type IJobPageQueryType = 'type';

export interface IJobPageQuery {
  type: JobStatusType;
}

export interface IUseJobQueryParams {
  clearQuery: () => void;
  setQueryParams: (data: Record<IJobPageQueryType, JobStatusType>) => void;
  type: JobStatusType;
  jobs: IJob[];
}
