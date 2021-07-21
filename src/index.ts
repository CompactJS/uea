export type UniversalElementSelector =
  | string
  | HTMLElement
  | HTMLElement[]
  | HTMLCollection
  | NodeList;

export type SingleElementSelector = string | HTMLElement;

/**
 * Allow a range of different ways to select HTML Elements.
 * Always returns a single element.
 */
export function selectOne(selector: SingleElementSelector): HTMLElement | null {
  if (typeof selector === 'string') {
    return document.querySelector<HTMLElement>(selector);
  } else if (selector instanceof HTMLElement) {
    return selector;
  }
  return null;
}

/**
 * alias for backwards compatibility
 * @deprecated use select() instead
 */
export const accept = select;

/**
 * Allow a range of different ways to select HTML Elements.
 * Always returns an array of HTMLElements.
 */
export function select(input: UniversalElementSelector): HTMLElement[] {
  if (typeof input === 'string')
    return Array.from(document.querySelectorAll(input));
  if (Array.isArray(input)) return input;
  if ('length' in input)
    return Array.from(input).reduce(nodeToElementArray, []);
  return [input];
}

// typeguard
function nodeToElementArray(array: HTMLElement[], node: Node): HTMLElement[] {
  if (node.nodeType === Node.ELEMENT_NODE) array.push(node as HTMLElement);
  return array;
}
