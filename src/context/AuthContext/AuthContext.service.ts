'use client';

import { createContext, useContext } from 'react';

/* ------------------------------------------------------------------ */
/*  Types                                                             */
/* ------------------------------------------------------------------ */

export interface IAuthUser {
  sub: string;
  email?: string;
  username?: string;
}

export interface IAuthContext {
  /** Currently signed-in user, or null */
  user: IAuthUser | null;
  /** True while checking persisted session on first load */
  loading: boolean;
  /** True if Cognito is configured at all */
  configured: boolean;
  /** Cognito ID token — sent as Bearer to the API */
  idToken: string | null;
  /** Start the Hosted UI sign-in flow */
  signIn: () => void;
  /** Sign out and redirect */
  signOut: () => void;
}

/* ------------------------------------------------------------------ */
/*  Fallback context                                                  */
/* ------------------------------------------------------------------ */

const notImplemented = (): void => {
  throw new Error('AuthContext not initialised');
};

const fallbackContext: IAuthContext = {
  configured: false,
  idToken: null,
  loading: false,
  signIn: notImplemented,
  signOut: notImplemented,
  user: null,
};

export const AuthContextProvider = createContext<IAuthContext>(fallbackContext);

export const useAuthContext = (): IAuthContext => useContext<IAuthContext>(AuthContextProvider);
