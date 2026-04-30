import { IApiData, IMakeRequest } from '../types';

export const ApiService = async <T, E = unknown>(
  data: IApiData<unknown>
): Promise<IMakeRequest<T, E>> => {
  const url = `${data.baseUrl}${data.url}`;
  try {
    const response = fetch(url, {
      body: data.data ? JSON.stringify(data.data) : undefined,
      headers: {
        'Content-Type': 'application/json',
      },
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
