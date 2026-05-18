import { IApiData, IMakeRequest } from '../types';

const AUTH_KEY = 'cognito_id_token';

function getAuthToken(): string | null {
  try {
    return sessionStorage.getItem(AUTH_KEY);
  } catch {
    return null;
  }
}

export const ApiService = async <T, E = unknown>(
  data: IApiData<unknown>
): Promise<IMakeRequest<T, E>> => {
  const url = `${data.baseUrl}${data.url}`;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  // Add auth token if available
  const token = getAuthToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = fetch(url, {
      body: data.data ? JSON.stringify(data.data) : undefined,
      headers,
      method: data.method,
    });
    const newResponse = await response;
    if (newResponse.ok) {
      return {
        response: await newResponse.json(),
      };
    }
    return Promise.resolve<IMakeRequest<T, E>>({
      error: (await newResponse.json()) as E,
      response: '' as T,
    });
  } catch (error) {
    return Promise.resolve<IMakeRequest<T, E>>({
      error: `Error while connecting ${error}` as E,
      response: '' as T,
    });
  }
};
