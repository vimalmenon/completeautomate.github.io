'use client';

import React from 'react';

import { getJobsApi } from '@data';
import { IAdminContext, IJob } from '@types';
import { ApiService, notImplemented } from '@utility';

import { IUseJobsHelper } from './AdminContext';

export const AdminContextProvider = React.createContext<IAdminContext>({
  alert: null,
  errorMessage: null,
  jobs: [],
  loading: false,
  prompts: [],
  setAlert: notImplemented,
  setErrorMessage: notImplemented,
  setJobs: notImplemented,
  setLoading: notImplemented,
  setPrompts: notImplemented,
});

export const useAdminContext = (): IAdminContext =>
  React.useContext<IAdminContext>(AdminContextProvider);

export const useJobsHelper = (): IUseJobsHelper => {
  const { errorMessage, jobs, loading, setAlert, setErrorMessage, setJobs, setLoading } =
    useAdminContext();
  const getJobs = async (): Promise<void> => {
    setLoading(true);
    setErrorMessage(null);

    const { error, response } = await ApiService<IJob[]>(getJobsApi());
    if (error) {
      setAlert({
        children: typeof error === 'string' ? error : 'Unable to load jobs right now.',
        severity: 'error',
      });
      return;
    }
    setJobs(response);
    setLoading(false);
  };
  return {
    errorMessage,
    getJobs,
    jobs,
    loading,
  };
};

export const usePromptHelper = (): void => {};
