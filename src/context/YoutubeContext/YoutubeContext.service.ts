'use client';

import React from 'react';

import { getChannelsApi, getVideosApi } from '@data';
import { IYouTubeChannel, IYouTubeVideo } from '@types';
import { ApiService } from '@utility';

import { IUseYoutubeHelper, IYoutubeContext } from './YoutubeContext';

export const YoutubeContextProvider = React.createContext<IYoutubeContext>({} as IYoutubeContext);

export const useYoutubeContext = (): IYoutubeContext =>
  React.useContext<IYoutubeContext>(YoutubeContextProvider);

export const useYoutubeHelper = (): IUseYoutubeHelper => {
  const {
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
  } = useYoutubeContext();

  const getChannels = async (): Promise<void> => {
    setLoading(true);
    setErrorMessage(null);
    const { error, response } = await ApiService<IYouTubeChannel[]>(getChannelsApi());
    if (error) {
      setAlert({
        message: typeof error === 'string' ? error : 'Unable to load channels.',
        severity: 'error',
      });
      setLoading(false);
      return;
    }
    setChannels(response);
    setLoading(false);
  };

  const getVideos = async (channelId: string): Promise<void> => {
    setVideosLoading(true);
    const { error, response } = await ApiService<IYouTubeVideo[]>(getVideosApi(channelId));
    if (error) {
      setAlert({
        message: typeof error === 'string' ? error : 'Unable to load videos.',
        severity: 'error',
      });
      setVideosLoading(false);
      return;
    }
    setVideos(response);
    setVideosLoading(false);
  };

  const selectChannel = async (channel: IYouTubeChannel): Promise<void> => {
    setSelectedChannel(channel);
    setVideos([]);
    await getVideos(channel.channelId);
  };

  return {
    channels,
    errorMessage,
    getChannels,
    getVideos,
    loading,
    selectChannel,
    selectedChannel,
    videos,
    videosLoading,
  };
};
