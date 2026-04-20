import { Env } from '@constants';
import { IApiData } from '@types';

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

export const getJobsApi = (): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'GET',
  url: `/api/v1/jobs`,
});

export const getHealth = (): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'GET',
  url: `/api/v1/health`,
});
