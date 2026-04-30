'use client';

import { JSX, Suspense } from 'react';

import { ErrorMessage } from '@common';
import { YouTubeVideoEditorPage } from '@page';

import { useSearchParams } from 'next/navigation';

function AdminYoutubeVideoEditorRouteContent(): JSX.Element {
  const searchParams = useSearchParams();
  const channelId = searchParams.get('channelId');
  const videoId = searchParams.get('videoId');

  if (!channelId || !videoId) {
    return (
      <div className="space-y-6 lg:col-span-9">
        <ErrorMessage
          message="Both channelId and videoId are required to edit a YouTube video."
          title="Video not selected"
        />
      </div>
    );
  }

  return <YouTubeVideoEditorPage channelId={channelId} videoId={videoId} />;
}

export default function AdminYoutubeVideoEditorRoute(): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className="space-y-6 lg:col-span-9">
          <ErrorMessage message="Loading selected video…" title="Preparing editor" />
        </div>
      }
    >
      <AdminYoutubeVideoEditorRouteContent />
    </Suspense>
  );
}
