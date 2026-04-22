import { Dispatch, ReactNode, SetStateAction } from 'react';

export type JobStatusType =
  | 'NEW'
  | 'IN_PROGRESS'
  | 'COMPLETE'
  | 'PENDING'
  | 'REVIEW'
  | 'FAILED'
  | 'CLEAN_UP';

export type ApiMethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type SeverityType = 'success' | 'info' | 'warning' | 'error';

export interface IReactChildren {
  children: ReactNode;
}

export interface IJob {
  id: string;
  status: JobStatusType;
  type: string;
  taskData: Record<string, string>;
  description: string;
  createdAt: string;
  failedCount: number;
  pendingOn: string[];
  completedAt?: string;
  errorMsg?: string;
}

export interface IYouTubeVideoStats {
  views: number;
  likes: number;
  comments: number;
  timestamp: string;
}

export interface IYouTubeVideo {
  refId: string;
  publishedAt: string;
  lastUpdatedAt: string;
  title: string;
  description: string;
  thumbnail: string;
  taskStatus: string;
  tags: string[];
  language: string;
  channelId: string;
  videoId: string;
  stats: IYouTubeVideoStats[];
  transcript: null;
  summarizedTranscript: null;
  userMessage: null;
  status: 'Active' | 'Inactive';
  metadataSuggestions: string[];
  thumbnailPromptSuggestions: string[];
  thumbnailsSuggestions: string[];
  communityPosts: string[];
  twitterPosts: string[];
}

export interface IYouTubeVideoUpdateInput {
  title: string;
  description: string;
  tags: string[];
  userMessage?: string | null;
  taskStatus: string;
  status: 'Active' | 'Inactive';
}

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
  channelId: string;
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

export interface IPromptVersionUpdateInput {
  prompt: string;
  systemMessage: string;
  ai: string;
}

export interface IPromptUpdateInput {
  description: string;
  comment?: string | null;
  currentVersion: IPromptVersionUpdateInput;
}

export interface IPrompt {
  task: string;
  description: string;
  version: string;
  lastUpdated: string;
  versions: IPromptVersion[];
  comment?: string | null;
  promptData?: Record<string, unknown>[];
}

export interface IRequestResponse<T> {
  data: T;
}

export interface IApiData<T = unknown> {
  baseUrl: string;
  url: string;
  method: ApiMethodType;
  data?: T;
}

export interface INavigation {
  url: string;
  label: string;
  hidden?: boolean;
}

export type ReactSetState<T> = Dispatch<SetStateAction<T>>;

export interface IAdminContext {
  loading: boolean;
  setLoading: ReactSetState<boolean>;
  alert: IAlert | null;
  setAlert: ReactSetState<IAlert | null>;
  jobs: IJob[];
  setJobs: ReactSetState<IJob[]>;
  prompts: IPrompt[];
  setPrompts: ReactSetState<IPrompt[]>;
  channels: IYouTubeChannel[];
  setChannels: ReactSetState<IYouTubeChannel[]>;
  videos: IYouTubeVideo[];
  setVideos: ReactSetState<IYouTubeVideo[]>;
  selectedChannel: IYouTubeChannel | null;
  setSelectedChannel: ReactSetState<IYouTubeChannel | null>;
}

export interface IMakeRequest<T, E = string> {
  response: T;
  error?: E;
}

export interface IAlert {
  severity: SeverityType;
  message: string;
}
