export const Env = {
  ADMIN_ENABLED: process.env.NEXT_PUBLIC_ADMIN_ENABLED === 'true',
  API_URL: process.env.NEXT_PUBLIC_API_URL || '',
};
