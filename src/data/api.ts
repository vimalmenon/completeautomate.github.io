import { Env } from '../constants';
import { IApiData } from '../types';

export const getChannels = (): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'GET',
  url: '/api/v1/channels',
});

export const getPrompts = (): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'GET',
  url: '/api/v1/prompts',
});

export const getVideos = (channelId: string): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'GET',
  url: `api/v1/channels/${channelId}`,
});

export const getJobs = (): IApiData => ({
  baseUrl: Env.API_URL,
  method: 'GET',
  url: `api/v1/jobs`,
});
