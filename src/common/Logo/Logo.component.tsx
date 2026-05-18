'use client';

interface Props {
  className?: string;
  size?: number;
}

/**
 * CompleteAutomate logo mark — an abstract "C" / infinity loop
 * representing continuous automation flow.
 */
export const Logo: React.FC<Props> = ({ className = '', size = 32 }) => (
  <svg
    className={className}
    height={size}
    viewBox="0 0 32 32"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logoGrad" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#0891B2" />
        <stop offset="100%" stopColor="#22D3EE" />
      </linearGradient>
    </defs>
    {/* Outer arc — C shape */}
    <path
      d="M26 16A10 10 0 1 1 16 6a9.87 9.87 0 0 1 7 2.86"
      fill="none"
      stroke="url(#logoGrad)"
      strokeLinecap="round"
      strokeWidth="3"
    />
    {/* Inner arrow — forward momentum */}
    <path
      d="M21 7l3.5 3.5L28 7"
      fill="none"
      stroke="url(#logoGrad)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
    />
  </svg>
);
