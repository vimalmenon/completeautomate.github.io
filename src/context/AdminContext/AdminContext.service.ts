'use client';

import React from 'react';

import { getJobsApi } from '@data';
import { IAdminContext, IJob } from '@types';
import { ApiService, notImplemented } from '@utility';

import { IUseJobsHelper } from './AdminContext';

export const AdminContextProvider = React.createContext<IAdminContext>({
  alert: null,
  jobs: [],
  loading: false,
  prompts: [],
  setAlert: notImplemented,
  setJobs: notImplemented,
  setLoading: notImplemented,
  setPrompts: notImplemented,
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
  return {
    alert,
    getJobs,
    jobs,
    loading,
  };
};

export const usePromptsHelper = (): void => {};
