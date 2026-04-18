'use client';
import { JSX } from 'react';

import { YoutubeContext } from '@context';
import { YoutubePage } from '@page';

export default function AdminYoutubePage(): JSX.Element {
  return (
    <YoutubeContext>
      <YoutubePage />
    </YoutubeContext>
  );
}
