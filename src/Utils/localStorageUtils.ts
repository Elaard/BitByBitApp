import { parse, stringify } from "./jsonUtils";

function get<T>(key: string): T | undefined {
  const data = localStorage.getItem(key);
  if (!data) {
    return;
  }
  return parse(data);
}

function save<T>(key: string, data: T) {
  const jsonData = stringify(data);
  localStorage.setItem(key, jsonData);
}

interface LocalStorageUtils {
  get<T>(key: string): T | undefined;
  save<T>(key: string, data: T): void;
}

export const localStorageUtils: LocalStorageUtils = {
  get,
  save,
};
