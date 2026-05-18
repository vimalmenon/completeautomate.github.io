'use client';

import { JSX, useEffect, useState } from 'react';

export default function CookieConsent(): JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = (): void => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = (): void => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center gap-4 bg-surface/95 p-6 backdrop-blur-xl border-t border-border/60 shadow-[0_-8px_32px_rgb(15_23_42/0.08)] rounded-t-2xl transition-transform duration-300 ease-in-out translate-y-0 opacity-100">
      <p className="text-sm text-muted text-center">
        We use cookies to improve your experience. By using our site, you agree to our use of
        cookies.
      </p>
      <div className="flex items-center gap-4">
        <button
          className="rounded-full bg-primary px-6 py-2 font-semibold tracking-[-0.05em] text-primary-foreground transition-colors hover:bg-primary-dark"
          onClick={handleAccept}
        >
          Accept All
        </button>
        <button
          className="rounded-full border border-border px-6 py-2 font-semibold tracking-[-0.05em] text-foreground transition-colors hover:bg-surface hover:text-primary"
          onClick={handleDecline}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
