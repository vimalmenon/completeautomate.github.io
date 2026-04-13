import { IApiData } from "../types";

export const ApiService = async (data: IApiData<unknown>): Promise<unknown> => {
  const { baseUrl, url } = data;
  return await fetch(`${baseUrl}${url}`);
};
