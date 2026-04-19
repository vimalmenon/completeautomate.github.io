'use client';

import React from 'react';

import { IAlert, IJob, IPrompt, IReactChildren, IYouTubeChannel, IYouTubeVideo } from '@types';

import { AdminContextProvider } from './AdminContext.service';

export const AdminContext: React.FC<IReactChildren> = ({ children }) => {
  const [alert, setAlert] = React.useState<IAlert | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [jobs, setJobs] = React.useState<IJob[]>([]);
  const [prompts, setPrompts] = React.useState<IPrompt[]>([]);
  const [channels, setChannels] = React.useState<IYouTubeChannel[]>([]);
  const [videos, setVideos] = React.useState<IYouTubeVideo[]>([]);

  return (
    <AdminContextProvider.Provider
      value={{
        alert,
        channels,
        jobs,
        loading,
        prompts,
        setAlert,
        setChannels,
        setJobs,
        setLoading,
        setPrompts,
        setVideos,
        videos,
      }}
    >
      {children}
    </AdminContextProvider.Provider>
  );
};
