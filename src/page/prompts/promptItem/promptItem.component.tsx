import { useState } from 'react';

import { IPrompt } from '@types';

interface IPromptItemProps {
  prompt: IPrompt;
}

export const PromptItem: React.FC<IPromptItemProps> = ({ prompt }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <tr
        className="border-b border-border/50 cursor-pointer hover:bg-muted/5"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <td className="px-3 py-3 font-medium text-foreground/90">{prompt.task}</td>
        <td className="px-3 py-3 text-sm">{prompt.description}</td>
        <td className="px-3 py-3 text-xs">{prompt.version.substring(0, 10)}...</td>
        <td className="px-3 py-3 text-center">
          <span className="rounded-full bg-blue-100/50 px-2.5 py-1 text-xs font-medium text-blue-700">
            {prompt.versions.length} versions
          </span>
        </td>
      </tr>
      {isExpanded && (
        <tr className="border-b border-border/50 bg-muted/5">
          <td colSpan={5} className="px-3 py-4">
            <div className="space-y-4">
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
                      </div>
                      <div className="mt-3 space-y-2">
                        <div>
                          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted">
                            System Message
                          </p>
                          <p className="text-sm text-foreground/80 whitespace-pre-wrap break-words">
                            {version.systemMessage}
                          </p>
                        </div>
                        <div>
                          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted">
                            Prompt
                          </p>
                          <p className="text-sm text-foreground/80 whitespace-pre-wrap break-words">
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
