'use client';

import { useEffect, useState } from 'react';

import { ErrorMessage, LoadingIndicator } from '@common';
import { Button } from '@component';
import { usePromptsHelper } from '@context';
import { IPromptVersionUpdateInput } from '@types';

import { PromptItem } from './promptItem';

const promptTasks = [
  'YouTubeThumbnailImageGenerationPrompt',
  'YouTubeVideoSummarization',
  'YouTubeVideoMetadata',
  'YouTubeVideoCommunityPost',
  'YouTubeVideoTwitterPost',
  'YouTubeShortSpeechGenerationPrompt',
];

const aiModels = ['Deepseek', 'Perplexity', 'Qwen', 'Grok'];

const initialVersionInput: IPromptVersionUpdateInput = {
  ai: aiModels[0],
  prompt: '',
  systemMessage: '',
};

export const PromptsPage: React.FC = () => {
  const { addPrompt, alert, getPrompts, loading, prompts } = usePromptsHelper();
  const [isAdding, setIsAdding] = useState(false);
  const [description, setDescription] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [task, setTask] = useState(promptTasks[0]);
  const [currentVersion, setCurrentVersion] =
    useState<IPromptVersionUpdateInput>(initialVersionInput);

  useEffect(() => {
    void getPrompts();
  }, []);

  const resetForm = (): void => {
    setTask(promptTasks[0]);
    setDescription('');
    setCurrentVersion(initialVersionInput);
    setFormError(null);
    setIsAdding(false);
  };

  const handleAddPrompt = async (): Promise<void> => {
    const trimmedDescription = description.trim();
    const trimmedPrompt = currentVersion.prompt.trim();
    const trimmedSystemMessage = currentVersion.systemMessage.trim();

    if (
      !task ||
      !trimmedDescription ||
      !trimmedPrompt ||
      !trimmedSystemMessage ||
      !currentVersion.ai
    ) {
      setFormError('Task, description, system message, prompt, and AI model are required.');
      return;
    }

    const isAdded = await addPrompt({
      currentVersion: {
        ai: currentVersion.ai,
        prompt: trimmedPrompt,
        systemMessage: trimmedSystemMessage,
      },
      description: trimmedDescription,
      task,
    });

    if (isAdded) {
      resetForm();
    }
  };

  return (
    <div id="prompts" className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Prompts Library</h2>
          <p className="mt-1 text-sm text-muted">
            View, add, and manage all prompts and their versions.
          </p>
        </div>
        <Button
          className="sm:self-start"
          onClick={async () => {
            setFormError(null);
            setIsAdding((value) => !value);
          }}
        >
          {isAdding ? 'Close Form' : 'Add Prompt'}
        </Button>
      </div>

      {isAdding ? (
        <div className="mt-4 rounded-lg border border-border/60 bg-muted/5 p-4">
          <div className="grid gap-4">
            {formError ? <ErrorMessage message={formError} title="Cannot add prompt" /> : null}

            <label className="grid gap-2 text-sm">
              <span className="font-medium text-foreground">Task</span>
              <select
                className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-foreground/30"
                onChange={(event) => setTask(event.target.value)}
                value={task}
              >
                {promptTasks.map((promptTask) => (
                  <option key={promptTask} value={promptTask}>
                    {promptTask}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm">
              <span className="font-medium text-foreground">Description</span>
              <input
                className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-foreground/30"
                onChange={(event) => setDescription(event.target.value)}
                value={description}
              />
            </label>

            <label className="grid gap-2 text-sm">
              <span className="font-medium text-foreground">AI model</span>
              <select
                className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-foreground/30"
                onChange={(event) =>
                  setCurrentVersion((value) => ({ ...value, ai: event.target.value }))
                }
                value={currentVersion.ai}
              >
                {aiModels.map((aiModel) => (
                  <option key={aiModel} value={aiModel}>
                    {aiModel}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm">
              <span className="font-medium text-foreground">System message</span>
              <textarea
                className="min-h-32 rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-foreground/30"
                onChange={(event) =>
                  setCurrentVersion((value) => ({ ...value, systemMessage: event.target.value }))
                }
                value={currentVersion.systemMessage}
              />
            </label>

            <label className="grid gap-2 text-sm">
              <span className="font-medium text-foreground">Prompt</span>
              <textarea
                className="min-h-40 rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-foreground/30"
                onChange={(event) =>
                  setCurrentVersion((value) => ({ ...value, prompt: event.target.value }))
                }
                value={currentVersion.prompt}
              />
            </label>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-end gap-3">
            <button
              type="button"
              className="rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted/10"
              onClick={resetForm}
            >
              Cancel
            </button>
            <Button
              className="rounded-full bg-foreground text-background hover:bg-foreground/90"
              onClick={handleAddPrompt}
            >
              Save prompt
            </Button>
          </div>
        </div>
      ) : null}

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
