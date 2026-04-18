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
  const { errorMessage, jobs, loading, setErrorMessage, setJobs, setLoading } = useAdminContext();
  const getJobs = async (): Promise<void> => {
    setLoading(true);
    setErrorMessage(null);

    const result = await ApiService<IJob[]>(getJobsApi());

    if (result.response) {
      setJobs(result.response);
      setLoading(false);
      return;
    }

    setErrorMessage(
      typeof result.error === 'string' ? result.error : 'Unable to load jobs right now.'
    );
    setLoading(false);
  };
  return {
    errorMessage,
    getJobs,
    jobs,
    loading,
  };
};
