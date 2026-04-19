'use client';

import React from 'react';

import { IAlert, IJob, IPrompt, IReactChildren } from '@types';

import { AdminContextProvider } from './AdminContext.service';

export const AdminContext: React.FC<IReactChildren> = ({ children }) => {
  const [alert, setAlert] = React.useState<IAlert | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [jobs, setJobs] = React.useState<IJob[]>([]);
  const [prompts, setPrompts] = React.useState<IPrompt[]>([]);

  return (
    <AdminContextProvider.Provider
      value={{
        alert,
        jobs,
        loading,
        prompts,
        setAlert,
        setJobs,
        setLoading,
        setPrompts,
      }}
    >
      {children}
    </AdminContextProvider.Provider>
  );
};
