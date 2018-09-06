// @flow

export const findIndexById = (haystack: Array<{ id: number}>, needle: number) => (
  haystack.findIndex((item) => item.id === needle)
);
