import { Env } from '@constants';
import {
  IApiData,
  IJobUpdateInput,
  IPromptCreateInput,
  IPromptUpdateInput,
  IYouTubeVideoUpdateInput,
} from '@types';

export const getChannelsApi = (): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'GET',
  url: '/api/v1/channels',
});

export const getVideosApi = (channelId: string): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'GET',
  url: `/api/v1/channels/${channelId}/videos`,
});

export const getVideoApi = (channelId: string, videoId: string): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'GET',
  url: `/api/v1/channels/${channelId}/videos/${videoId}`,
});

export const updateVideoApi = (
  channelId: string,
  videoId: string,
  data: IYouTubeVideoUpdateInput
): IApiData<IYouTubeVideoUpdateInput> => ({
  baseUrl: Env.API_URL,
  data,
  method: 'PUT',
  url: `/api/v1/channels/${channelId}/videos/${videoId}`,
});

export const getPromptsApi = (): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'GET',
  url: '/api/v1/prompts',
});

export const updatePromptApi = (
  task: string,
  data: IPromptUpdateInput
): IApiData<IPromptUpdateInput> => ({
  baseUrl: Env.API_URL,
  data,
  method: 'PUT',
  url: `/api/v1/prompts/${task}`,
});

export const createPromptApi = (data: IPromptCreateInput): IApiData<IPromptCreateInput> => ({
  baseUrl: Env.API_URL,
  data,
  method: 'POST',
  url: '/api/v1/prompts',
});

export const getJobsApi = (): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'GET',
  url: `/api/v1/jobs`,
});

export const updateJobApi = (jobId: string, data: IJobUpdateInput): IApiData<IJobUpdateInput> => ({
  baseUrl: Env.API_URL,
  data,
  method: 'PATCH',
  url: `/api/v1/jobs/${jobId}`,
});

export const getHealthApi = (): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'GET',
  url: `/api/v1/health`,
});

export const downloadToLocalApi = (): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'POST',
  url: '/api/v1/data/download_to_local',
});

export const fileSyncedApi = (): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'GET',
  url: '/api/v1/data/file_synced',
});
