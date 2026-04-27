import { useState } from 'react';

import { clsx } from 'clsx';

import { IButtonProps } from './Button';

export const Button: React.FC<IButtonProps> = ({ children, className, loadingText, onClick }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async (): Promise<void> => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-70',
        className
      )}
      disabled={loading}
      onClick={() => {
        void handleClick();
      }}
    >
      {loading ? (
        <>
          <span
            aria-hidden="true"
            className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          />
          <span>{loadingText ?? 'Loading...'}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};
