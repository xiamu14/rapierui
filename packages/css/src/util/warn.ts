export function warnNegative(key: string, val: number) {
  if (val < 0) {
    console.warn(`css attribute: ${key} can't use negative number。`);
  }
}
