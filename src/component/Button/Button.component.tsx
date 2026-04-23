import { IButtonProps } from './Button';

export const Button: React.FC<IButtonProps> = ({ children, onClick }) => (
  <button
    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-dark"
    onClick={onClick}
  >
    {children}
  </button>
);
