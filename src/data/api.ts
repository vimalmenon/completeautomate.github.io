import { Env } from '@constants';
import { IApiData, IPromptUpdateInput } from '@types';

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

export const getJobsApi = (): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'GET',
  url: `/api/v1/jobs`,
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
