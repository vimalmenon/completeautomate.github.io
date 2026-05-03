'use client';

import { useEffect, useMemo } from 'react';

import { ErrorMessage, LoadingIndicator } from '@common';
import { useYouTubeHelper } from '@context';
import { IYouTubeChannel, IYouTubeVideo } from '@types';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import Link from 'next/link';

const formatNumber = (n: number): string => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
};

const formatDate = (iso: string): string => {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

const formatCompactNumber = (value: number): string => {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
  return `${value}`;
};

interface ChannelCardProps {
  channel: IYouTubeChannel;
  isSelected: boolean;
  onSelect: (channel: IYouTubeChannel) => void;
}

const ChannelCard: React.FC<ChannelCardProps> = ({ channel, isSelected, onSelect }) => {
  const latestStats = channel.stats?.at(-1);
  return (
    <button
      onClick={() => onSelect(channel)}
      className={`w-full rounded-xl border p-4 text-left transition-colors ${
        isSelected
          ? 'border-primary bg-primary/5'
          : 'border-border bg-muted/10 hover:border-primary/40 hover:bg-muted/20'
      }`}
    >
      <div className="flex items-center gap-3">
        {channel.thumbnailUrl ? (
          <img
            src={channel.thumbnailUrl}
            alt={channel.title}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/30 text-xl font-bold text-muted">
            {channel.title?.[0] ?? '?'}
          </div>
        )}
        <div className="min-w-0">
          <p className="truncate font-semibold text-foreground">{channel.title}</p>
          {channel.customUrl && (
            <p className="text-xs text-muted">@{channel.customUrl.replace('@', '')}</p>
          )}
          {channel.country && <p className="text-xs text-muted">{channel.country}</p>}
        </div>
      </div>

      {latestStats && (
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-surface p-2">
            <p className="text-xs text-muted">Subscribers</p>
            <p className="mt-0.5 text-sm font-semibold">
              {formatNumber(latestStats.subscriberCount)}
            </p>
          </div>
          <div className="rounded-lg bg-surface p-2">
            <p className="text-xs text-muted">Total Views</p>
            <p className="mt-0.5 text-sm font-semibold">{formatNumber(latestStats.viewCount)}</p>
          </div>
          <div className="rounded-lg bg-surface p-2">
            <p className="text-xs text-muted">Videos</p>
            <p className="mt-0.5 text-sm font-semibold">{formatNumber(latestStats.videoCount)}</p>
          </div>
        </div>
      )}
    </button>
  );
};

interface VideoRowProps {
  video: IYouTubeVideo;
}

const VideoRow: React.FC<VideoRowProps> = ({ video }) => {
  const latestStats = video.stats?.at(-1);
  return (
    <tr className="border-b border-border/50 hover:bg-muted/10">
      <td className="px-3 py-3">
        <div className="flex items-center gap-3">
          {video.thumbnail ? (
            <img
              src={video.thumbnail}
              alt={video.title}
              className="h-10 w-16 rounded object-cover"
            />
          ) : (
            <div className="h-10 w-16 rounded bg-muted/30" />
          )}
          <span className="line-clamp-2 max-w-xs text-sm font-medium text-foreground/90">
            {video.title}
          </span>
        </div>
      </td>
      <td className="px-3 py-3 text-sm">{latestStats ? formatNumber(latestStats.views) : '—'}</td>
      <td className="px-3 py-3 text-sm">{latestStats ? formatNumber(latestStats.likes) : '—'}</td>
      <td className="px-3 py-3 text-sm">
        {latestStats ? formatNumber(latestStats.comments) : '—'}
      </td>
      <td className="px-3 py-3 text-sm text-muted">{formatDate(video.publishedAt)}</td>
      <td className="px-3 py-3">
        <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700">
          {video.taskStatus ?? '—'}
        </span>
      </td>
      <td className="px-3 py-3 text-right">
        <Link
          href={`/admin/youtube/video?channelId=${encodeURIComponent(video.channelId)}&videoId=${encodeURIComponent(video.videoId)}`}
          className="inline-flex rounded-full border border-border px-3 py-1.5 text-xs font-medium transition hover:bg-muted/10"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
};

export const YoutubePage: React.FC = () => {
  const { alert, channels, getChannels, loading, selectChannel, selectedChannel, videos } =
    useYouTubeHelper();

  const channelStatsChartData = useMemo(
    () =>
      [...(selectedChannel?.stats ?? [])]
        .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
        .map((stat) => ({
          label: new Date(stat.timestamp).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
          }),
          subscriberCount: stat.subscriberCount,
          videoCount: stat.videoCount,
          viewCount: stat.viewCount,
        })),
    [selectedChannel?.stats]
  );

  const videoTaskStatusChartData = useMemo(() => {
    const statusCounts = videos.reduce<Record<string, number>>((acc, video) => {
      const key = video.taskStatus || 'Unknown';
      acc[key] = (acc[key] ?? 0) + 1;
      return acc;
    }, {});

    return Object.entries(statusCounts)
      .map(([taskStatus, count]) => ({
        count,
        taskStatus,
      }))
      .sort((a, b) => b.count - a.count);
  }, [videos]);

  useEffect(() => {
    getChannels().catch(() => undefined);
  }, []);

  return (
    <div className="space-y-6 lg:col-span-9">
      {/* Channels */}
      <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <h2 className="text-xl font-semibold">YouTube Channels</h2>
        <p className="mt-1 text-sm text-muted">Select a channel to view its videos.</p>

        {alert ? (
          <ErrorMessage
            className="mt-4"
            message={alert.message}
            actionLabel="Try again"
            onAction={() => {
              getChannels().catch(() => undefined);
            }}
            title="Could not load channels"
          />
        ) : null}

        {loading ? (
          <LoadingIndicator className="mt-4" label="Loading channels…" />
        ) : (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {channels.map((channel) => (
              <ChannelCard
                key={channel.refId}
                channel={channel}
                isSelected={selectedChannel?.refId === channel.refId}
                onSelect={(c) => {
                  selectChannel(c).catch(() => undefined);
                }}
              />
            ))}
            {!loading && channels.length === 0 && (
              <p className="col-span-full mt-4 text-sm text-muted">No channels found.</p>
            )}
          </div>
        )}
      </div>

      {/* Videos */}
      {selectedChannel && (
        <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
          <div className="flex items-center gap-3">
            {selectedChannel.thumbnailUrl && (
              <img
                src={selectedChannel.thumbnailUrl}
                alt={selectedChannel.title}
                className="h-9 w-9 rounded-full object-cover"
              />
            )}
            <div>
              <h2 className="text-xl font-semibold">{selectedChannel.title}</h2>
              <p className="text-sm text-muted">Videos</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-2">
            <div className="rounded-xl border border-border/70 bg-background/60 p-4">
              <h3 className="text-sm font-semibold text-foreground">YouTube Channel Stats Trend</h3>
              <p className="mt-1 text-xs text-muted">
                Subscribers, total views, and video count over time.
              </p>
              {channelStatsChartData.length > 0 ? (
                <div className="mt-4 h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={channelStatsChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="label" minTickGap={24} />
                      <YAxis yAxisId="left" tickFormatter={formatCompactNumber} width={48} />
                      <YAxis yAxisId="right" orientation="right" allowDecimals={false} width={40} />
                      <Tooltip
                        formatter={(value, name) => [
                          typeof value === 'number' ? formatCompactNumber(value) : String(value ?? ''),
                          name === 'subscriberCount'
                            ? 'Subscribers'
                            : name === 'viewCount'
                              ? 'Views'
                              : 'Videos',
                        ]}
                      />
                      <Legend
                        formatter={(value: string) =>
                          value === 'subscriberCount'
                            ? 'Subscribers'
                            : value === 'viewCount'
                              ? 'Views'
                              : 'Videos'
                        }
                      />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="subscriberCount"
                        stroke="#0ea5e9"
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="viewCount"
                        stroke="#14b8a6"
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        yAxisId="right"
                        type="monotone"
                        dataKey="videoCount"
                        stroke="#f59e0b"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <p className="mt-3 text-sm text-muted">No channel stats history available yet.</p>
              )}
            </div>

            <div className="rounded-xl border border-border/70 bg-background/60 p-4">
              <h3 className="text-sm font-semibold text-foreground">YouTube Video Status</h3>
              <p className="mt-1 text-xs text-muted">
                Count of videos grouped by current workflow status.
              </p>
              {videoTaskStatusChartData.length > 0 ? (
                <div className="mt-4 h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={videoTaskStatusChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="taskStatus"
                        interval={0}
                        angle={-20}
                        textAnchor="end"
                        height={72}
                      />
                      <YAxis allowDecimals={false} />
                      <Tooltip />
                      <Bar dataKey="count" name="Videos" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <p className="mt-3 text-sm text-muted">No video status data available yet.</p>
              )}
            </div>
          </div>

          {loading ? (
            <LoadingIndicator className="mt-4" label="Loading videos…" />
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="border-b border-border text-xs uppercase tracking-wider text-muted">
                  <tr>
                    <th className="px-3 py-3">Video</th>
                    <th className="px-3 py-3">Views</th>
                    <th className="px-3 py-3">Likes</th>
                    <th className="px-3 py-3">Comments</th>
                    <th className="px-3 py-3">Published</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {videos.map((video) => (
                    <VideoRow key={video.refId} video={video} />
                  ))}
                </tbody>
              </table>
              {videos.length === 0 && (
                <p className="mt-4 text-sm text-muted">No videos found for this channel.</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
