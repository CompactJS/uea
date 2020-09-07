export type UniversalElementSelector =
  | string
  | HTMLElement
  | HTMLElement[]
  | HTMLCollection
  | NodeList;

export const accept = (input: UniversalElementSelector): HTMLElement[] => {
  if (typeof input === 'string')
    return Array.from(document.querySelectorAll(input));
  if (Array.isArray(input)) return input;
  if ('length' in input)
    return Array.from(input).reduce(nodeToElementArray, []);
  return [input];
};

// typeguard
const nodeToElementArray = (
  array: HTMLElement[],
  node: Node
): HTMLElement[] => {
  if (node.nodeType === Node.ELEMENT_NODE) array.push(node as HTMLElement);
  return array;
};
