'use client';

import React, { JSX, useCallback, useEffect, useState } from 'react';

import { Env } from '@constants';
import {
  fetchAuthSession,
  getCurrentUser,
  signInWithRedirect,
  signOut as amplifySignOut,
} from 'aws-amplify/auth';

import { AuthContextProvider, IAuthContext, IAuthUser } from './AuthContext.service';
import { configureAmplify } from './AuthContext.setup';

/* ------------------------------------------------------------------ */
/*  Auth storage key for manual token persistence                     */
/* ------------------------------------------------------------------ */

const AUTH_KEY = 'cognito_id_token';

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export const AuthContext: React.FC<{ children: React.ReactNode }> = ({ children }): JSX.Element => {
  const [user, setUser] = useState<IAuthUser | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const configured = Boolean(
    Env.NEXT_PUBLIC_COGNITO_USER_POOL_ID && Env.NEXT_PUBLIC_COGNITO_CLIENT_ID
  );

  /* ---- Initialise Amplify once ---- */
  useEffect(() => {
    configureAmplify();
  }, []);

  /* ---- Restore session on mount ---- */
  useEffect(() => {
    if (!configured) {
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const cognitoUser = await getCurrentUser();
        const session = await fetchAuthSession();

        const token = session.tokens?.idToken?.toString() ?? null;

        if (token) {
          sessionStorage.setItem(AUTH_KEY, token);
        } else {
          // Try sessionStorage fallback
          const stored = sessionStorage.getItem(AUTH_KEY);
          if (stored) {
            setIdToken(stored);
          }
        }

        setIdToken(token);
        setUser({
          email: cognitoUser.signInDetails?.loginId,
          sub: cognitoUser.userId,
          username: cognitoUser.username,
        });
      } catch {
        // No valid session — try sessionStorage fallback
        const stored = sessionStorage.getItem(AUTH_KEY);
        if (stored) {
          setIdToken(stored);
        }
      } finally {
        setLoading(false);
      }
    })();
  }, [configured]);

  /* ---- Sign in via Hosted UI ---- */
  const signIn = useCallback(() => {
    if (configured && Env.NEXT_PUBLIC_COGNITO_DOMAIN) {
      signInWithRedirect();
    } else {
      // Auth not configured — redirect to admin directly
      window.location.href = '/admin';
    }
  }, [configured]);

  /* ---- Sign out ---- */
  const signOut = useCallback(async () => {
    sessionStorage.removeItem(AUTH_KEY);
    setUser(null);
    setIdToken(null);
    if (configured && Env.NEXT_PUBLIC_COGNITO_DOMAIN) {
      await amplifySignOut();
    } else {
      window.location.href = '/';
    }
  }, [configured]);

  /* ---- Context value ---- */
  const value: IAuthContext = {
    configured,
    idToken,
    loading,
    signIn,
    signOut,
    user,
  };

  return <AuthContextProvider.Provider value={value}>{children}</AuthContextProvider.Provider>;
};
