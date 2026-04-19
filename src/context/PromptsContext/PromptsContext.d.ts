import { IPrompt } from '@types';

export interface IUsePromptsHelper {
  errorMessage: string | null;
  getPrompts: () => Promise<void>;
  prompts: IPrompt[];
  loading: boolean;
}
