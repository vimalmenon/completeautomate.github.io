import { IAlert, IJob, IPrompt } from '@types';

export interface IUseJobsHelper {
  alert: IAlert | null;
  loading: boolean;
  getJobs: () => Promise<void>;
  jobs: IJob[];
  processJobs: (jobs: IJob[]) => Record<string, number>;
}

export interface IUsePromptsHelper {
  alert: IAlert | null;
  loading: boolean;
  getPrompts: () => Promise<void>;
  prompts: IPrompt[];
}
