'use client';

import React from 'react';

import { IAlert, IJob, IReactChildren } from '@types';

import { AdminContextProvider } from './AdminContext.service';

export const AdminContext: React.FC<IReactChildren> = ({ children }) => {
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [alert, setAlert] = React.useState<IAlert | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [jobs, setJobs] = React.useState<IJob[]>([]);

  return (
    <AdminContextProvider.Provider
      value={{ alert, errorMessage, jobs, loading, setAlert, setErrorMessage, setJobs, setLoading }}
    >
      {children}
    </AdminContextProvider.Provider>
  );
};
