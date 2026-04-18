'use client';

import React from 'react';

import { IAlert, IReactChildren, IYouTubeChannel, IYouTubeVideo } from '@types';

import { YoutubeContextProvider } from './YoutubeContext.service';

export const YoutubeContext: React.FC<IReactChildren> = ({ children }) => {
  const [channels, setChannels] = React.useState<IYouTubeChannel[]>([]);
  const [videos, setVideos] = React.useState<IYouTubeVideo[]>([]);
  const [selectedChannel, setSelectedChannel] = React.useState<IYouTubeChannel | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [videosLoading, setVideosLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [alert, setAlert] = React.useState<IAlert | null>(null);

  return (
    <YoutubeContextProvider.Provider
      value={{
        alert,
        channels,
        errorMessage,
        loading,
        selectedChannel,
        setAlert,
        setChannels,
        setErrorMessage,
        setLoading,
        setSelectedChannel,
        setVideos,
        setVideosLoading,
        videos,
        videosLoading,
      }}
    >
      {children}
    </YoutubeContextProvider.Provider>
  );
};
