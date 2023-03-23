import { AxiosResponse } from "axios";

export function getResponseData<T>(response: AxiosResponse<T>) {
  return response.data;
}

export function joinUrls(url: string, parameters: string) {
  return `${url}/${parameters}`;
}
