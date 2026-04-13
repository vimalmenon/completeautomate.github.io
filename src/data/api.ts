import { IApiData } from "../types";
import { Env } from "../constants";

export const getChannels = (): IApiData => {
  return {
    baseUrl: Env.API_URL,
    url: "/api/v1/channels",
    method: "GET",
  };
};

export const getPrompts = (): IApiData => {
  return {
    baseUrl: Env.API_URL,
    url: "/api/v1/prompts",
    method: "GET",
  };
};

export const getVideos = (channelId: string): IApiData => {
  return {
    baseUrl: Env.API_URL,
    url: `api/v1/channels/{channelId}`,
    method: "GET",
  };
};
