'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

const options = [
  {
    icon: (
      <svg
        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    label: 'Light',
    value: 'light',
  },
  {
    icon: (
      <svg
        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
    label: 'Dark',
    value: 'dark',
  },
  {
    icon: (
      <svg
        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: 'System',
    value: 'system',
  },
] as const;

export const ThemeToggle: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-0.5 rounded-full border border-border/70 bg-surface/80 p-0.5 shadow-[0_12px_30px_rgb(15_23_42/0.08)] sm:gap-1 sm:p-1">
        {options.map((option) => (
          <button
            key={option.value}
            className="flex items-center gap-1 rounded-full px-1.5 py-1 text-xs font-medium text-zinc-400 dark:text-zinc-500 opacity-70 sm:px-3 sm:py-1.5"
            aria-label={option.label}
          >
            {option.icon}
            <span className="hidden sm:inline">{option.label}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border/70 bg-surface/80 p-0.5 shadow-[0_12px_30px_rgb(15_23_42/0.08)] sm:gap-1 sm:p-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => setTheme(option.value)}
          className={`flex items-center gap-1 rounded-full px-1.5 py-1 text-xs font-medium transition-all sm:px-3 sm:py-1.5 ${
            theme === option.value
              ? 'bg-primary text-primary-foreground shadow-[0_10px_20px_rgb(8_145_178/0.25)]'
              : 'text-zinc-500 dark:text-zinc-400 hover:text-foreground'
          }`}
          aria-label={option.label}
        >
          {option.icon}
          <span className="hidden sm:inline">{option.label}</span>
        </button>
      ))}
    </div>
  );
};
