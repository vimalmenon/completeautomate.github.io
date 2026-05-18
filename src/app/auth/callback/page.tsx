'use client';

import { JSX, useEffect } from 'react';

import { useAuthContext } from '@context';

import Link from 'next/link';

/**
 * OAuth callback page — Cognito Hosted UI redirects here after sign-in.
 *
 * `aws-amplify/auth` automatically intercepts the OAuth code on mount
 * and exchanges it for tokens.  When that succeeds, the session is
 * persisted and we redirect to the admin dashboard.
 */
export default function AuthCallbackPage(): JSX.Element {
  const { loading, user } = useAuthContext();

  useEffect(() => {
    if (!loading && user) {
      window.location.href = '/admin';
    }
  }, [loading, user]);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md items-center justify-center px-4">
      <div className="w-full rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <h1 className="mb-2 text-2xl font-bold text-foreground">
          {loading || !user ? 'Signing you in…' : 'Welcome!'}
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          {loading || !user
            ? 'Please wait while we complete authentication.'
            : 'Redirecting to the admin dashboard.'}
        </p>

        {loading && (
          <div className="mx-auto mb-6 h-8 w-8 animate-spin rounded-full border-2 border-foreground border-t-transparent" />
        )}

        {!loading && !user && (
          <>
            <p className="mb-4 text-xs text-red-600 dark:text-red-400">
              Authentication failed or was cancelled.
            </p>
            <Link
              className="text-sm font-medium text-foreground underline underline-offset-2 hover:opacity-80"
              href="/login"
            >
              Try again
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
