import { IReactChildren } from '@types';

export interface IButtonProps extends IReactChildren {
  className?: string;
  onClick: () => Promise<void>;
}
