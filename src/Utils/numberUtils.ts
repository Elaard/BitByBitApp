import { isValidString } from "./stringUtils";

export function parseNumber(number: string, toFixed: number) {
  return parseFloat(number).toFixed(toFixed);
}

export function forceNumber(number: number | string | undefined) {
  if (isValidString(number)) {
    return +number ?? 0;
  }
  return number ?? 0;
}
