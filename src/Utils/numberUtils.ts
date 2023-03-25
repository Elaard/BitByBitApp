export function parseNumber(number: string, toFixed: number) {
  return parseFloat(number).toFixed(toFixed);
}

export function forceNumber(number?: number | string | undefined | null) {
  if (typeof number == "string") {
    return +number ?? 0;
  }
  return number ?? 0;
}
