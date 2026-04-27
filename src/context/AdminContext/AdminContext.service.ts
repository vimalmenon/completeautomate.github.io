'use client';

import React from 'react';

import {
  downloadToLocalApi,
  fileSyncedApi,
  getChannelsApi,
  getJobsApi,
  getPromptsApi,
  getVideosApi,
  updateJobApi,
  updatePromptApi,
} from '@data';
import {
  IAdminContext,
  IJob,
  IJobUpdateInput,
  IPrompt,
  IPromptUpdateInput,
  IYouTubeChannel,
  IYouTubeVideo,
} from '@types';
import { ApiService, notImplemented } from '@utility';

import {
  IUseAdminHelper,
  IUseJobsHelper,
  IUsePromptsHelper,
  IUseYouTubeHelper,
} from './AdminContext';

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

  const updateJob = async (jobId: string, data: IJobUpdateInput): Promise<boolean> => {
    setLoading(true);
    setAlert(null);

    const { error, response } = await ApiService<IJob>(updateJobApi(jobId, data));
    if (error) {
      setAlert({
        message: typeof error === 'string' ? error : 'Unable to update job right now.',
        severity: 'error',
      });
      setLoading(false);
      return false;
    }

    setJobs((currentJobs) => currentJobs.map((job) => (job.id === jobId ? response : job)));
    setLoading(false);
    return true;
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
    updateJob,
  };
};

export const usePromptsHelper = (): IUsePromptsHelper => {
  const { alert, loading, prompts, setAlert, setLoading, setPrompts } = useAdminContext();
  const getPrompts = async (): Promise<void> => {
    setLoading(true);
    setAlert(null);
    const { error, response } = await ApiService<IPrompt[]>(getPromptsApi());
    if (error) {
      setAlert({
        message: typeof error === 'string' ? error : 'Unable to load prompts right now.',
        severity: 'error',
      });
      setLoading(false);
      return;
    }
    setPrompts(response);
    setLoading(false);
  };

  const updatePrompt = async (task: string, data: IPromptUpdateInput): Promise<boolean> => {
    setLoading(true);
    setAlert(null);

    const { error, response } = await ApiService<IPrompt>(updatePromptApi(task, data));
    if (error) {
      setAlert({
        message: typeof error === 'string' ? error : 'Unable to update prompt right now.',
        severity: 'error',
      });
      setLoading(false);
      return false;
    }

    setPrompts((currentPrompts) =>
      currentPrompts.map((prompt) => (prompt.task === task ? response : prompt))
    );
    setLoading(false);
    return true;
  };

  return {
    alert,
    getPrompts,
    loading,
    prompts,
    updatePrompt,
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

export const useAdminHelper = (): IUseAdminHelper => {
  const [syncStatus, setSyncStatus] = React.useState<boolean | null>(null);
  const [syncStatusMessage, setSyncStatusMessage] =
    React.useState<string>('Status not checked yet.');

  const checkSyncFile = React.useCallback(async (): Promise<void> => {
    const { error, response } = await ApiService<{ synced: boolean }>(fileSyncedApi());

    if (error) {
      setSyncStatus(null);
      setSyncStatusMessage(
        typeof error === 'string' ? error : 'Unable to check file sync status right now.'
      );
      return;
    }

    setSyncStatus(response.synced);
    setSyncStatusMessage(
      response.synced ? 'Files are currently in sync.' : 'Files are out of sync.'
    );
  }, []);
  const downloadToLocal = React.useCallback(async (): Promise<void> => {
    const { error } = await ApiService(downloadToLocalApi());

    if (error) {
      setSyncStatusMessage(
        typeof error === 'string' ? error : 'Unable to sync files to local right now.'
      );
      return;
    }

    await checkSyncFile();
  }, [checkSyncFile]);
  return {
    checkSyncFile,
    downloadToLocal,
    syncStatus,
    syncStatusMessage,
  };
};
