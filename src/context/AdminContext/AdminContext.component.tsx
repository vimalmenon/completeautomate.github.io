'use client';

import React from 'react';

import { IJob, IReactChildren } from '@types';

import { AdminContextProvider } from './AdminContext.service';

export const AdminContext: React.FC<IReactChildren> = ({ children }) => {
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [jobs, setJobs] = React.useState<IJob[]>([]);

  return (
    <AdminContextProvider.Provider
      value={{ errorMessage, jobs, loading, setErrorMessage, setJobs, setLoading }}
    >
      {children}
    </AdminContextProvider.Provider>
  );
};
