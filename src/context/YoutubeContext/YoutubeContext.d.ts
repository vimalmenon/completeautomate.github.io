import { IYouTubeChannel, IYouTubeVideo } from '@types';

export interface IYoutubeContext {
  alert: import('@types').IAlert | null;
  channels: IYouTubeChannel[];
  errorMessage: string | null;
  loading: boolean;
  selectedChannel: IYouTubeChannel | null;
  videos: IYouTubeVideo[];
  videosLoading: boolean;
  setAlert: (alert: import('@types').IAlert | null) => void;
  setChannels: (channels: IYouTubeChannel[]) => void;
  setErrorMessage: (msg: string | null) => void;
  setLoading: (loading: boolean) => void;
  setSelectedChannel: (channel: IYouTubeChannel | null) => void;
  setVideos: (videos: IYouTubeVideo[]) => void;
  setVideosLoading: (loading: boolean) => void;
}

export interface IUseYoutubeHelper {
  channels: IYouTubeChannel[];
  errorMessage: string | null;
  getChannels: () => Promise<void>;
  getVideos: (channelId: string) => Promise<void>;
  loading: boolean;
  selectedChannel: IYouTubeChannel | null;
  selectChannel: (channel: IYouTubeChannel) => Promise<void>;
  videos: IYouTubeVideo[];
  videosLoading: boolean;
}
