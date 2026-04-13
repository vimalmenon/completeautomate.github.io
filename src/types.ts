export type JobStatusType = "Running" | "Queued" | "Completed" | "Failed";

export interface IJob {
  id: string;
  status: JobStatusType;
  type: string;
  taskData: Record<string, any>;
  description: string;
  createdAt: string;
  failedCount: number;
  pendingOn: string[];
  completedAt?: string;
  errorMsg?: string;
}

export interface IYouTubeVideo {}

export interface IYouTubeChannelStats {
  subscriberCount: number;
  viewCount: number;
  videoCount: number;
  timestamp: string;
}

export interface IYouTubeChannel {
  refId: string;
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  lastUpdatedAt: string;
  country: string;
  thumbnailUrl: string;
  bannerImageUrl: string;
  privacyStatus: string;
  madeForKids: boolean;
  stats: IYouTubeChannelStats[];
  playlist: IYouTubeChannelPlaylist[];
}

export interface IYouTubeChannelPlaylist {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export interface IPromptVersion {
  prompt: string;
  systemMessage: string;
  version: string;
  ai: string;
  createdAt: string;
}
export interface IPrompt {
  task: string;
  description: string;
  version: string;
  lastUpdated: string;
  versions: IPromptVersion[];
}

export interface IRequestResponse<T> {
  data: T;
}
