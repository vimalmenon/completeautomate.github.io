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
  const { jobs, setJobs } = useAdminContext();
  const getJobs = async (): Promise<void> => {
    const result = await ApiService<IJob[]>(getJobsApi());
    if (result.response) {
      setJobs(result.response);
    }
  };
  return {
    getJobs,
    jobs,
  };
};
