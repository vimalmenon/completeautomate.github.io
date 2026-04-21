'use client';

import React from 'react';

import { getChannelsApi, getJobsApi, getPromptsApi, getVideosApi } from '@data';
import { IAdminContext, IJob, IPrompt, IYouTubeChannel, IYouTubeVideo } from '@types';
import { ApiService, notImplemented } from '@utility';

import { IUseJobsHelper, IUsePromptsHelper, IUseYouTubeHelper } from './AdminContext';

export const AdminContextProvider = React.createContext<IAdminContext>({
  alert: null,
  channels: [],
  jobs: [],
  loading: false,
  prompts: [],
  selectedChannel: null,
  setAlert: notImplemented,
  setChannels: notImplemented,
  setJobs: notImplemented,
  setLoading: notImplemented,
  setPrompts: notImplemented,
  setSelectedChannel: notImplemented,
  setVideos: notImplemented,
  videos: [],
});

export const useAdminContext = (): IAdminContext =>
  React.useContext<IAdminContext>(AdminContextProvider);

export const useJobsHelper = (): IUseJobsHelper => {
  const { alert, jobs, loading, setAlert, setJobs, setLoading } = useAdminContext();
  const getJobs = async (): Promise<void> => {
    setLoading(true);
    setAlert(null);

    const { error, response } = await ApiService<IJob[]>(getJobsApi());
    if (error) {
      setAlert({
        message: typeof error === 'string' ? error : 'Unable to load jobs right now.',
        severity: 'error',
      });
      return;
    }
    setJobs(response);
    setLoading(false);
  };
  const processJobs = (jobs: IJob[]): Record<string, number> =>
    jobs.reduce<Record<string, number>>((result, job) => {
      result[job.status] = result[job.status] ? +result[job.status] + 1 : 1;
      return result;
    }, {});
  return {
    alert,
    getJobs,
    jobs,
    loading,
    processJobs,
  };
};

export const usePromptsHelper = (): IUsePromptsHelper => {
  const { alert, loading, prompts, setAlert, setLoading, setPrompts } = useAdminContext();
  const getPrompts = async (): Promise<void> => {
    setLoading(false);
    const { error, response } = await ApiService<IPrompt[]>(getPromptsApi());
    if (error) {
      setAlert({
        message: typeof error === 'string' ? error : 'Unable to load jobs right now.',
        severity: 'error',
      });
      return;
    }
    setPrompts(response);
    setLoading(false);
  };

  return {
    alert,
    getPrompts,
    loading,
    prompts,
  };
};

export const useYouTubeHelper = (): IUseYouTubeHelper => {
  const {
    alert,
    channels,
    loading,
    selectedChannel,
    setAlert,
    setChannels,
    setLoading,
    setSelectedChannel,
    setVideos,
    videos,
  } = useAdminContext();
  const selectChannel = async (channel: IYouTubeChannel): Promise<void> => {
    setSelectedChannel(channel);
    setVideos([]);
    await getVideos(channel.channelId);
  };
  const getVideos = async (channelId: string): Promise<void> => {
    setLoading(true);
    const { error, response } = await ApiService<IYouTubeVideo[]>(getVideosApi(channelId));
    if (error) {
      setAlert({
        message: typeof error === 'string' ? error : 'Unable to load videos.',
        severity: 'error',
      });
      setLoading(false);
      return;
    }
    setVideos(response);
    setLoading(false);
  };
  const getChannels = async (): Promise<void> => {
    setLoading(true);
    setAlert(null);
    const { error, response } = await ApiService<IYouTubeChannel[]>(getChannelsApi());
    if (error) {
      setAlert({
        message: typeof error === 'string' ? error : 'Unable to load channels.',
        severity: 'error',
      });
      setLoading(false);
      return;
    }
    setChannels(response);
    setLoading(false);
  };
  return {
    alert,
    channels,
    getChannels,
    getVideos,
    loading,
    selectChannel,
    selectedChannel,
    videos,
  };
};
