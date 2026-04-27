import { IReactChildren } from '@types';

export interface IButtonProps extends IReactChildren {
  className?: string;
  loadingText?: string;
  onClick: () => Promise<void>;
}
