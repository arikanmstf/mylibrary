// @flow
import type { CardItem } from 'modules/card/types';

export const findIndexById = (haystack: Array<CardItem>, needle: number) => (
  haystack.findIndex((item) => item.id === needle)
);

export const cloneObjectArray = (arr: Array<CardItem>) => (arr.map((c) => ({ ...c })));
