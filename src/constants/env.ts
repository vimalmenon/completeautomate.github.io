export const Env = {
  ADMIN_ENABLED: process.env.NEXT_PUBLIC_ADMIN_ENABLED === 'true',
  API_URL: process.env.NEXT_PUBLIC_API_URL || '',

  NEXT_PUBLIC_COGNITO_CLIENT_ID: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || '',
  NEXT_PUBLIC_COGNITO_DOMAIN: process.env.NEXT_PUBLIC_COGNITO_DOMAIN || '',
  // Cognito Hosted UI redirect URLs
  /** Full callback URL for OAuth, e.g. https://yourdomain.com/auth/callback */
  NEXT_PUBLIC_COGNITO_REDIRECT_URL: process.env.NEXT_PUBLIC_COGNITO_REDIRECT_URL || '',
  NEXT_PUBLIC_COGNITO_REGION: process.env.NEXT_PUBLIC_COGNITO_REGION || 'us-east-1',

  /** Full sign-out URL, e.g. https://yourdomain.com */
  NEXT_PUBLIC_COGNITO_SIGNOUT_URL: process.env.NEXT_PUBLIC_COGNITO_SIGNOUT_URL || '',
  // --- Cognito Auth ---
  NEXT_PUBLIC_COGNITO_USER_POOL_ID: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || '',
};
