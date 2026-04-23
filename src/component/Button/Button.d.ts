import { IReactChildren } from '@types';

export interface IButtonProps extends IReactChildren {
  onClick: () => Promise<void>;
}
