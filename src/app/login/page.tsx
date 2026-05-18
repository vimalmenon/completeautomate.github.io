'use client';

import { JSX, useEffect } from 'react';

import { useAuthContext } from '@context';

import Link from 'next/link';

export default function LoginPage(): JSX.Element {
  const { configured, loading, signIn, user } = useAuthContext();

  useEffect(() => {
    // If already logged in, redirect to admin
    if (!loading && user) {
      window.location.href = '/admin';
    }
  }, [loading, user]);

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-md items-center justify-center px-4">
      <div className="w-full rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <h1 className="mb-2 text-2xl font-bold text-foreground">Admin Login</h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Sign in with your AWS Cognito account to access the admin dashboard.
        </p>

        <button
          className="w-full rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={loading}
          onClick={signIn}
          type="button"
        >
          {loading ? 'Checking session…' : configured ? 'Sign in with Cognito' : 'Enter Admin'}
        </button>

        {!configured && (
          <p className="mt-4 text-xs text-amber-600 dark:text-amber-400">
            Cognito not configured — admin is open (no auth).
          </p>
        )}

        <p className="mt-6 text-xs text-muted-foreground">
          <Link className="underline hover:text-foreground" href="/">
            Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
