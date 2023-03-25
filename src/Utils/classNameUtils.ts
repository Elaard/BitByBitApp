export function addModifierToClassName(className: string, modifier?: string) {
  if (!modifier) {
    return className;
  }
  return className + " " + (className + "--" + modifier);
}
