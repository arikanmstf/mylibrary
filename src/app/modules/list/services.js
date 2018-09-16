/**
 * Services Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow

import Api, { LIST_MY } from 'helpers/api';
import { transformItemListToRowList } from 'helpers/data/transform';

import type { Item } from 'helpers/api/types';

export const getListList = async (): Promise<Array<Item>> => {
  const result: Array<Item> = await Api.get(LIST_MY);
  return transformItemListToRowList(result);
};
