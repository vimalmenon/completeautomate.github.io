import { IApiData } from "../types";

export const ApiService = async (data: IApiData<unknown>): Promise<unknown> => {
  return await fetch(data.url);
};
