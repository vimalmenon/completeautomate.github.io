'use client';

import { useEffect, useState } from 'react';

import { ErrorMessage, LoadingIndicator } from '@common';
import { getVideoApi, updateVideoApi } from '@data';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { IYouTubeVideo, IYouTubeVideoUpdateInput } from '@types';
import { ApiService } from '@utility';
import { Check, ChevronDown } from 'lucide-react';

import Link from 'next/link';

const TASK_STATUS_OPTIONS = [
  'YouTubeVideoStart',
  'YouTubeVideoFixTranscript',
  'YouTubeVideoMetadataSelection',
  'YouTubeVideoThumbnailSelection',
  'YouTubeVideoCommunityPost',
  'YouTubeVideoComplete',
] as const;

const VIDEO_STATUS_OPTIONS = ['Active', 'Inactive'] as const;

interface YouTubeVideoEditorPageProps {
  channelId: string;
  videoId: string;
}

interface DropdownFieldProps {
  label: string;
  options: readonly string[];
  value: string;
  onValueChange: (value: string) => void;
}

const formatTimestamp = (iso: string): string => {
  if (!iso) {
    return '—';
  }

  return new Date(iso).toLocaleString();
};

const DropdownField: React.FC<DropdownFieldProps> = ({ label, onValueChange, options, value }) => (
  <div className="grid gap-2 text-sm">
    <span className="font-medium text-foreground">{label}</span>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="flex min-h-11 w-full items-center justify-between gap-3 rounded-xl border border-border bg-surface px-3 py-2.5 text-left outline-none transition focus:border-foreground/30"
        >
          <span className="min-w-0 flex-1 wrap-break-word">{value}</span>
          <ChevronDown className="h-4 w-4 shrink-0 text-muted" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          className="z-50 min-w-(--radix-dropdown-menu-trigger-width) rounded-xl border border-border bg-background p-1 shadow-lg"
          sideOffset={6}
        >
          <DropdownMenu.RadioGroup value={value} onValueChange={onValueChange}>
            {options.map((option) => (
              <DropdownMenu.RadioItem
                key={option}
                value={option}
                className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm outline-none transition focus:bg-muted/10 data-[state=checked]:bg-muted/10"
              >
                <span className="flex h-4 w-4 items-center justify-center">
                  <DropdownMenu.ItemIndicator>
                    <Check className="h-4 w-4" />
                  </DropdownMenu.ItemIndicator>
                </span>
                <span className="wrap-break-word">{option}</span>
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  </div>
);

export const YouTubeVideoEditorPage: React.FC<YouTubeVideoEditorPageProps> = ({
  channelId,
  videoId,
}) => {
  const [video, setVideo] = useState<IYouTubeVideo | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<IYouTubeVideoUpdateInput>({
    description: '',
    status: 'Active',
    tags: [],
    taskStatus: 'YouTubeVideoStart',
    title: '',
    userMessage: '',
  });
  const [tagsText, setTagsText] = useState('');

  useEffect(() => {
    const loadVideo = async (): Promise<void> => {
      setLoading(true);
      setError(null);
      setSaveMessage(null);

      const { error: requestError, response } = await ApiService<IYouTubeVideo>(
        getVideoApi(channelId, videoId)
      );

      if (requestError) {
        setError(
          typeof requestError === 'string'
            ? requestError
            : 'Unable to load the selected video right now.'
        );
        setLoading(false);
        return;
      }

      setVideo(response);
      setFormData({
        description: response.description,
        status: response.status,
        tags: response.tags,
        taskStatus: response.taskStatus,
        title: response.title,
        userMessage: response.userMessage ?? '',
      });
      setTagsText(response.tags.join(', '));
      setLoading(false);
    };

    void loadVideo();
  }, [channelId, videoId]);

  const handleSave = async (event: { preventDefault: () => void }): Promise<void> => {
    event.preventDefault();
    setError(null);
    setSaveMessage(null);

    const title = formData.title.trim();
    const description = formData.description.trim();
    const normalizedTags = tagsText
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);

    if (!title || !description) {
      setError('Title and description are required.');
      return;
    }

    setSaving(true);
    const payload: IYouTubeVideoUpdateInput = {
      description,
      status: formData.status,
      tags: normalizedTags,
      taskStatus: formData.taskStatus,
      title,
      userMessage: formData.userMessage?.trim() || null,
    };

    const { error: requestError, response } = await ApiService<IYouTubeVideo>(
      updateVideoApi(channelId, videoId, payload)
    );
    if (requestError) {
      setError(
        typeof requestError === 'string'
          ? requestError
          : 'Unable to update the selected video right now.'
      );
      setSaving(false);
      return;
    }

    setVideo(response);
    setFormData({
      description: response.description,
      status: response.status,
      tags: response.tags,
      taskStatus: response.taskStatus,
      title: response.title,
      userMessage: response.userMessage ?? '',
    });
    setTagsText(response.tags.join(', '));
    setSaveMessage('Video updated successfully.');
    setSaving(false);
  };

  return (
    <div className="space-y-6 lg:col-span-9">
      <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">YouTube</p>
            <h1 className="mt-2 text-2xl font-semibold">Edit Video</h1>
            <p className="mt-1 text-sm text-muted">
              Update workflow status and metadata for this video record.
            </p>
          </div>
          <Link
            href="/admin/youtube"
            className="inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted/10"
          >
            Back to videos
          </Link>
        </div>

        {loading ? <LoadingIndicator className="mt-6" label="Loading video…" /> : null}

        {!loading && error ? (
          <ErrorMessage
            className="mt-6"
            message={error}
            onAction={() => {
              globalThis.location.reload();
            }}
            actionLabel="Try again"
            title="Could not load video"
          />
        ) : null}

        {!loading && video ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
            <form
              className="rounded-2xl border border-border/60 bg-background p-5"
              onSubmit={(event) => {
                void handleSave(event);
              }}
            >
              <div className="grid gap-4">
                <label className="grid gap-2 text-sm">
                  <span className="font-medium text-foreground">Title</span>
                  <input
                    className="rounded-xl border border-border bg-surface px-3 py-2.5 outline-none transition focus:border-foreground/30"
                    value={formData.title}
                    onChange={(event) =>
                      setFormData((currentValue) => ({
                        ...currentValue,
                        title: event.target.value,
                      }))
                    }
                  />
                </label>

                <label className="grid gap-2 text-sm">
                  <span className="font-medium text-foreground">Description</span>
                  <textarea
                    className="min-h-40 rounded-xl border border-border bg-surface px-3 py-2.5 outline-none transition focus:border-foreground/30"
                    value={formData.description}
                    onChange={(event) =>
                      setFormData((currentValue) => ({
                        ...currentValue,
                        description: event.target.value,
                      }))
                    }
                  />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                  <DropdownField
                    label="Status"
                    options={VIDEO_STATUS_OPTIONS}
                    value={formData.status}
                    onValueChange={(nextValue) =>
                      setFormData((currentValue) => ({
                        ...currentValue,
                        status: nextValue as IYouTubeVideoUpdateInput['status'],
                      }))
                    }
                  />

                  <DropdownField
                    label="Task status"
                    options={TASK_STATUS_OPTIONS}
                    value={formData.taskStatus}
                    onValueChange={(nextValue) =>
                      setFormData((currentValue) => ({
                        ...currentValue,
                        taskStatus: nextValue,
                      }))
                    }
                  />
                </div>

                <label className="grid gap-2 text-sm">
                  <span className="font-medium text-foreground">Tags</span>
                  <input
                    className="rounded-xl border border-border bg-surface px-3 py-2.5 outline-none transition focus:border-foreground/30"
                    value={tagsText}
                    onChange={(event) => setTagsText(event.target.value)}
                    placeholder="automation, youtube, ai"
                  />
                </label>

                <label className="grid gap-2 text-sm">
                  <span className="font-medium text-foreground">User message</span>
                  <textarea
                    className="min-h-28 rounded-xl border border-border bg-surface px-3 py-2.5 outline-none transition focus:border-foreground/30"
                    value={formData.userMessage ?? ''}
                    onChange={(event) =>
                      setFormData((currentValue) => ({
                        ...currentValue,
                        userMessage: event.target.value,
                      }))
                    }
                  />
                </label>
              </div>

              {saveMessage ? (
                <div className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/8 px-4 py-3 text-sm text-emerald-800">
                  {saveMessage}
                </div>
              ) : null}

              {error ? (
                <ErrorMessage className="mt-4" message={error} title="Cannot update video" />
              ) : null}

              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={saving}
                >
                  {saving ? 'Saving…' : 'Save changes'}
                </button>
              </div>
            </form>

            <aside className="space-y-4">
              <div className="rounded-2xl border border-border/60 bg-background p-5">
                {video.thumbnail ? (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-40 w-full rounded-xl object-cover"
                  />
                ) : null}
                <dl className="mt-4 space-y-3 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Video ID
                    </dt>
                    <dd className="mt-1 wrap-break-word text-foreground/90">{video.videoId}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Channel ID
                    </dt>
                    <dd className="mt-1 wrap-break-word text-foreground/90">{video.channelId}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Published
                    </dt>
                    <dd className="mt-1 text-foreground/90">
                      {formatTimestamp(video.publishedAt)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Last updated
                    </dt>
                    <dd className="mt-1 text-foreground/90">
                      {formatTimestamp(video.lastUpdatedAt)}
                    </dd>
                  </div>
                </dl>
              </div>
            </aside>
          </div>
        ) : null}
      </div>
    </div>
  );
};
