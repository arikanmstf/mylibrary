/**
 * Services Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow

import Api, { LIST_MY, LIST } from 'helpers/api';
import { transformItemListToRowList, transformItemToRow } from 'helpers/data/transform';

import type { Item } from 'helpers/api/types';
import type { Dispatch } from 'redux';
import type { Row } from 'ui/RowList/types';
import type { SubmitSearchListFormRequest } from 'screens/publicationAddToList/PublicationAddToListTypes';
import type { AddListFormRequest } from 'screens/publicationAddToList/addListForm/AddListFormTypes';

export const getMyLists = (dispatch: Dispatch<*>) => async (
  params: SubmitSearchListFormRequest
): Promise<Array<Row>> => {
  const result: Array<Item> = await Api.get(dispatch)(LIST_MY, params);
  return transformItemListToRowList(result);
};

export const postList = (dispatch: Dispatch<*>) => async (
  params: AddListFormRequest
): Promise<Row> => {
  const result: Item = await Api.post(dispatch)(LIST, params);
  return transformItemToRow(result);
};
