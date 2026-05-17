import { Env } from '@constants';
import { Amplify } from 'aws-amplify';

/**
 * Configure Amplify for Cognito Hosted UI auth.
 *
 * Called once at app init, before any auth operations.
 */
export function configureAmplify(): void {
  if (!Env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || !Env.NEXT_PUBLIC_COGNITO_CLIENT_ID) {
    // Auth not configured — safe to skip
    return;
  }

  const redirectUrl = Env.NEXT_PUBLIC_COGNITO_REDIRECT_URL;
  const signoutUrl = Env.NEXT_PUBLIC_COGNITO_SIGNOUT_URL;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const authConfig: any = {
    Cognito: {
      userPoolClientId: Env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
      userPoolId: Env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
      region: Env.NEXT_PUBLIC_COGNITO_REGION,
    },
  };

  // Add OAuth only when we have a hosted UI domain
  if (Env.NEXT_PUBLIC_COGNITO_DOMAIN) {
    authConfig.Cognito.loginWith = {
      oauth: {
        domain: Env.NEXT_PUBLIC_COGNITO_DOMAIN,
        scopes: ['openid', 'email', 'profile'],
        redirectSignIn: [
          redirectUrl || `${window.location.origin}/auth/callback`,
        ],
        redirectSignOut: [signoutUrl || `${window.location.origin}/`],
        responseType: 'code',
      },
    };
  }

  Amplify.configure({
    Auth: authConfig,
  });
}
