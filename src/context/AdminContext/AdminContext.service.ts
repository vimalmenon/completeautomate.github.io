'use client';

import React from 'react';

import { getJobsApi } from '@data';
import { IAdminContext, IJob } from '@types';
import { ApiService } from '@utility';

import { IUseJobsHelper } from './AdminContext';

export const AdminContextProvider = React.createContext<IAdminContext>({} as IAdminContext);

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
