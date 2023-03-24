export function parseNumber(number: string, toFixed: number) {
  return parseFloat(number).toFixed(toFixed);
}

export function getNumber(number?: number | undefined | null) {
  return number ?? 0;
}
