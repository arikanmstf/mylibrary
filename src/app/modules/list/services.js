/**
 * Services Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow

import Api, { LIST_MY } from 'helpers/api';
import { transformItemListToRowList } from 'helpers/data/transform';

import type { Item } from 'helpers/api/types';
import type { Dispatch } from 'redux';
import type { Row } from 'ui/RowList/types';

export const getMyLists = (dispatch: Dispatch<*>) => async (): Promise<Array<Row>> => {
  const result: Array<Item> = await Api.get(dispatch)(LIST_MY);
  return transformItemListToRowList(result);
};
