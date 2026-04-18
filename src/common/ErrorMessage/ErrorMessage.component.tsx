interface ErrorMessageProps {
  message: string;
  title?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  actionLabel,
  className = '',
  message,
  onAction,
  title = 'Something went wrong',
}) => {
  const actionEnabled = Boolean(actionLabel && onAction);

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`rounded-[1.5rem] border border-rose-500/20 bg-rose-500/8 p-5 text-rose-950 shadow-[0_16px_40px_rgb(190_24_93/0.08)] dark:text-rose-100 ${className}`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-rose-500/14 text-rose-600 dark:text-rose-300">
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v4m0 4h.01M10.29 3.86l-7.5 13A2 2 0 004.5 20h15a2 2 0 001.71-3.14l-7.5-13a2 2 0 00-3.42 0z"
              />
            </svg>
          </span>

          <div>
            <p className="text-base font-semibold tracking-[-0.03em]">{title}</p>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-rose-900/80 dark:text-rose-100/80">
              {message}
            </p>
          </div>
        </div>

        {actionEnabled ? (
          <button
            type="button"
            onClick={onAction}
            className="inline-flex items-center justify-center rounded-full border border-rose-500/25 bg-rose-500/12 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:border-rose-500/40 hover:bg-rose-500/18 dark:text-rose-100"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
};
