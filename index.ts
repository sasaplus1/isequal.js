export function isEqual(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) {
    return true;
  }

  if (a !== null && typeof a === 'object' && b !== null && typeof b === 'object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }

    for (const key of keysA) {
      if (!keysB.includes(key)) {
        return false;
      }

      if (!isEqual((a as { [key: string]: unknown })[key], (b as { [key: string]: unknown })[key])) {
        return false;
      }
    }

    return true;
  }

  return false;
}
