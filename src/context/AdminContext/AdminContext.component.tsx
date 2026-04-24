'use client';

import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IAlert, IJob, IPrompt, IReactChildren, IYouTubeChannel, IYouTubeVideo } from '@types';

import { AdminContextProvider } from './AdminContext.service';

export const AdminContext: React.FC<IReactChildren> = ({ children }) => {
  const queryClient = new QueryClient();
  const [alert, setAlert] = React.useState<IAlert | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [jobs, setJobs] = React.useState<IJob[]>([]);
  const [prompts, setPrompts] = React.useState<IPrompt[]>([]);
  const [channels, setChannels] = React.useState<IYouTubeChannel[]>([]);
  const [videos, setVideos] = React.useState<IYouTubeVideo[]>([]);
  const [selectedChannel, setSelectedChannel] = React.useState<IYouTubeChannel | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <AdminContextProvider.Provider
        value={{
          alert,
          channels,
          jobs,
          loading,
          prompts,
          selectedChannel,
          setAlert,
          setChannels,
          setJobs,
          setLoading,
          setPrompts,
          setSelectedChannel,
          setVideos,
          videos,
        }}
      >
        {children}
      </AdminContextProvider.Provider>
    </QueryClientProvider>
  );
};
