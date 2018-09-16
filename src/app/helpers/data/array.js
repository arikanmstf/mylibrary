// @flow

export const findIndexById = (haystack: Array<{ id: number}>, needle: number) => (
  haystack.findIndex((item) => item.id === needle)
);

export const cloneObjectArray = (arr: Array<*>) => (arr.map((c) => ({ ...c })));
