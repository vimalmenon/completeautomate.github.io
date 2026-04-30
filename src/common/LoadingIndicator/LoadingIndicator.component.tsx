interface LoadingIndicatorProps {
  label?: string;
  className?: string;
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  className = '',
  label = 'Loading…',
}) => (
  <div
    role="status"
    aria-live="polite"
    aria-label={label}
    className={`flex items-center gap-3 ${className}`}
  >
    <svg
      aria-hidden="true"
      className="h-5 w-5 animate-spin text-primary"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
    <span className="text-sm text-muted">{label}</span>
  </div>
);
