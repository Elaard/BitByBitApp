import { isValidString } from "./stringUtils";

export function stringify<T>(data: T): string {
  if (!data) {
    return "";
  }
  if (isValidString(data)) {
    return data;
  }
  return JSON.stringify(data);
}

export function parse<T>(data: string): T | undefined {
  if (!data) {
    return;
  }
  if (!isValidString(data)) {
    return;
  }

  return JSON.parse(data);
}
