'use client';

import { JSX } from 'react';

import { PromptsPage } from '@page';

export default function AdminPromptsPage(): JSX.Element {
  return (
    <div className="space-y-6 lg:col-span-9">
      <PromptsPage />
    </div>
  );
}
