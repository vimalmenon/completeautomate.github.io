'use client';

import React from 'react';

import { getJobsApi, getPromptsApi } from '@data';
import { IAdminContext, IJob, IPrompt } from '@types';
import { ApiService, notImplemented } from '@utility';

import { IUseJobsHelper, IUsePromptsHelper } from './AdminContext';

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
