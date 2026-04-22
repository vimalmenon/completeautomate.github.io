import { useEffect, useState } from 'react';

import { ErrorMessage } from '@common';
import { usePromptsHelper } from '@context';
import { IPrompt, IPromptVersionUpdateInput } from '@types';

interface IPromptItemProps {
  prompt: IPrompt;
}

export const PromptItem: React.FC<IPromptItemProps> = ({ prompt }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(prompt.description);
  const [formError, setFormError] = useState<string | null>(null);
  const { loading, updatePrompt } = usePromptsHelper();

  const currentVersion = prompt.versions.find((version) => version.version === prompt.version);
  const [currentVersionInput, setCurrentVersionInput] = useState<IPromptVersionUpdateInput>({
    ai: currentVersion?.ai ?? prompt.versions[0]?.ai ?? '',
    prompt: currentVersion?.prompt ?? prompt.versions[0]?.prompt ?? '',
    systemMessage: currentVersion?.systemMessage ?? prompt.versions[0]?.systemMessage ?? '',
  });

  useEffect(() => {
    setDescription(prompt.description);
    setCurrentVersionInput({
      ai: currentVersion?.ai ?? prompt.versions[0]?.ai ?? '',
      prompt: currentVersion?.prompt ?? prompt.versions[0]?.prompt ?? '',
      systemMessage: currentVersion?.systemMessage ?? prompt.versions[0]?.systemMessage ?? '',
    });
    setFormError(null);
    setIsEditing(false);
  }, [currentVersion?.ai, currentVersion?.prompt, currentVersion?.systemMessage, prompt.description, prompt.version, prompt.versions]);

  const handleToggleExpanded = (): void => {
    setIsExpanded((value) => !value);
  };

  const handleStartEditing = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    setFormError(null);
    setIsExpanded(true);
    setIsEditing(true);
  };

  const handleCancelEditing = (): void => {
    setDescription(prompt.description);
    setCurrentVersionInput({
      ai: currentVersion?.ai ?? prompt.versions[0]?.ai ?? '',
      prompt: currentVersion?.prompt ?? prompt.versions[0]?.prompt ?? '',
      systemMessage: currentVersion?.systemMessage ?? prompt.versions[0]?.systemMessage ?? '',
    });
    setFormError(null);
    setIsEditing(false);
  };

  const handleSave = async (event: { preventDefault: () => void }): Promise<void> => {
    event.preventDefault();

    const trimmedDescription = description.trim();
    const trimmedPrompt = currentVersionInput.prompt.trim();
    const trimmedSystemMessage = currentVersionInput.systemMessage.trim();

    if (!trimmedDescription || !trimmedPrompt || !trimmedSystemMessage || !currentVersionInput.ai) {
      setFormError('Description, system message, prompt, and AI model are required.');
      return;
    }

    const isSaved = await updatePrompt(prompt.task, {
      currentVersion: {
        ai: currentVersionInput.ai,
        prompt: trimmedPrompt,
        systemMessage: trimmedSystemMessage,
      },
      description: trimmedDescription,
    });

    if (isSaved) {
      setIsEditing(false);
      setFormError(null);
    }
  };

  return (
    <>
      <tr
        className="border-b border-border/50 cursor-pointer hover:bg-muted/5"
        onClick={handleToggleExpanded}
      >
        <td className="px-3 py-3 font-medium text-foreground/90">{prompt.task}</td>
        <td className="px-3 py-3 text-sm">{prompt.description}</td>
        <td className="px-3 py-3 text-xs">{prompt.version.substring(0, 10)}...</td>
        <td className="px-3 py-3 text-center">
          <span className="rounded-full bg-blue-100/50 px-2.5 py-1 text-xs font-medium text-blue-700">
            {prompt.versions.length} versions
          </span>
        </td>
        <td className="px-3 py-3">
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              className="rounded-full border border-border px-3 py-1.5 text-xs font-medium transition hover:bg-muted/10"
              onClick={handleStartEditing}
            >
              Edit current
            </button>
          </div>
        </td>
      </tr>
      {isExpanded && (
        <tr className="border-b border-border/50 bg-muted/5">
          <td colSpan={5} className="px-3 py-4">
            <div className="space-y-4">
              {isEditing ? (
                <form
                  className="rounded-lg border border-border/60 bg-surface p-4"
                  onSubmit={(event) => {
                    void handleSave(event);
                  }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Edit Current Prompt</h4>
                      <p className="text-sm text-muted">Saving creates a new version and keeps prior versions intact.</p>
                    </div>
                    <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800">
                      {prompt.task}
                    </span>
                  </div>

                  {formError ? (
                    <ErrorMessage className="mt-4" message={formError} title="Cannot save prompt" />
                  ) : null}

                  <div className="mt-4 grid gap-4">
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
                      <input
                        className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-foreground/30"
                        onChange={(event) =>
                          setCurrentVersionInput((value) => ({ ...value, ai: event.target.value }))
                        }
                        value={currentVersionInput.ai}
                      />
                    </label>

                    <label className="grid gap-2 text-sm">
                      <span className="font-medium text-foreground">System message</span>
                      <textarea
                        className="min-h-32 rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-foreground/30"
                        onChange={(event) =>
                          setCurrentVersionInput((value) => ({
                            ...value,
                            systemMessage: event.target.value,
                          }))
                        }
                        value={currentVersionInput.systemMessage}
                      />
                    </label>

                    <label className="grid gap-2 text-sm">
                      <span className="font-medium text-foreground">Prompt</span>
                      <textarea
                        className="min-h-40 rounded-xl border border-border bg-background px-3 py-2.5 text-sm outline-none transition focus:border-foreground/30"
                        onChange={(event) =>
                          setCurrentVersionInput((value) => ({ ...value, prompt: event.target.value }))
                        }
                        value={currentVersionInput.prompt}
                      />
                    </label>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-end gap-3">
                    <button
                      type="button"
                      className="rounded-full border border-border px-4 py-2 text-sm font-medium transition hover:bg-muted/10"
                      onClick={handleCancelEditing}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition disabled:cursor-not-allowed disabled:opacity-50"
                      disabled={loading}
                    >
                      {loading ? 'Saving…' : 'Save prompt'}
                    </button>
                  </div>
                </form>
              ) : null}

              <div>
                <h4 className="mb-3 font-semibold text-foreground">Prompt Versions</h4>
                <div className="space-y-3">
                  {prompt.versions.map((version, index) => (
                    <div
                      key={`${version.version}-${index}`}
                      className="rounded-lg border border-border/50 bg-surface p-4"
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-sm font-medium">
                            v{version.version} • {version.ai}
                          </p>
                          <p className="text-xs text-muted">
                            {new Date(version.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        {version.version === prompt.version ? (
                          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                            Current
                          </span>
                        ) : null}
                      </div>
                      <div className="mt-3 space-y-2">
                        <div>
                          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted">
                            System Message
                          </p>
                          <p className="text-sm text-foreground/80 whitespace-pre-wrap wrap-break-word">
                            {version.systemMessage}
                          </p>
                        </div>
                        <div>
                          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted">
                            Prompt
                          </p>
                          <p className="text-sm text-foreground/80 whitespace-pre-wrap wrap-break-word">
                            {version.prompt}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};
