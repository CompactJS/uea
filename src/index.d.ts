declare module '@compactjs/uea';
/**
 * Allow a range of different ways to select HTML Elements
 */
export function accept(
  input: string | HTMLElement | HTMLElement[] | HTMLCollection | NodeList
): HTMLElement[];
