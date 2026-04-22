import { IAlert, IJob, IPrompt, IPromptUpdateInput, IYouTubeChannel, IYouTubeVideo } from '@types';

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
  checkSyncFile: () => Promise<void>;
  downloadToLocal: () => Promise<void>;
}
