'use client';

import { useEffect } from 'react';

import { ErrorMessage, LoadingIndicator } from '@common';
import { usePromptsHelper } from '@context';

import { PromptItem } from './promptItem';

export const PromptsPage: React.FC = () => {
  const { alert, getPrompts, loading, prompts } = usePromptsHelper();

  useEffect(() => {
    getPrompts();
  }, []);

  return (
    <div id="prompts" className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <h2 className="text-xl font-semibold">Prompts Library</h2>
      <p className="mt-1 text-sm text-muted">View and manage all prompts and their versions.</p>

      {alert ? (
        <ErrorMessage
          className="mt-4"
          message={alert.message}
          actionLabel="Try again"
          onAction={() => {
            void getPrompts();
          }}
          title="Could not load prompts"
        />
      ) : null}

      {loading ? <LoadingIndicator className="mt-4" label="Loading prompts…" /> : null}

      {!loading && prompts.length === 0 ? (
        <div className="mt-4 rounded-lg border border-border/50 bg-muted/5 p-4 text-center">
          <p className="text-sm text-muted">No prompts available</p>
        </div>
      ) : null}

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-border text-xs uppercase tracking-wider text-muted">
            <tr>
              <th className="px-3 py-3">Task</th>
              <th className="px-3 py-3">Description</th>
              <th className="px-3 py-3">Version</th>
              <th className="px-3 py-3 text-center">Versions</th>
              <th className="px-3 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {prompts.map((prompt) => (
              <PromptItem prompt={prompt} key={prompt.task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
