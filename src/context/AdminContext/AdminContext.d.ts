import {
  IAlert,
  IJob,
  IJobUpdateInput,
  IPrompt,
  IPromptCreateInput,
  IPromptUpdateInput,
  IYouTubeChannel,
  IYouTubeVideo,
} from '@types';

export interface IUseJobsHelper {
  alert: IAlert | null;
  loading: boolean;
  getJobs: () => Promise<void>;
  updateJob: (jobId: string, data: IJobUpdateInput) => Promise<boolean>;
  jobs: IJob[];
  processJobs: (jobs: IJob[]) => Record<string, number>;
}

export interface IUsePromptsHelper {
  alert: IAlert | null;
  loading: boolean;
  addPrompt: (data: IPromptCreateInput) => Promise<boolean>;
  getPrompts: () => Promise<void>;
  prompts: IPrompt[];
  updatePrompt: (task: string, data: IPromptUpdateInput) => Promise<boolean>;
}

export interface IUseYouTubeHelper {
  alert: IAlert | null;
  loading: boolean;
  getChannels: () => Promise<void>;
  getVideos: (channelId: string) => Promise<void>;
  selectChannel: (channel: IYouTubeChannel) => Promise<void>;
  selectedChannel: IYouTubeChannel | null;
  videos: IYouTubeVideo[];
  channels: IYouTubeChannel[];
}

export interface IUseAdminHelper {
  syncStatus: boolean | null;
  syncStatusMessage: string;
  checkSyncFile: () => Promise<void>;
  downloadToLocal: () => Promise<void>;
}
