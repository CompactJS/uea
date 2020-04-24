export const accept = (input) => {
  return typeof input === 'string'
    ? Array.from(document.querySelectorAll(input))
    : Array.isArray(input)
    ? input
    : input.length !== undefined
    ? Array.from(input)
    : [input];
};
