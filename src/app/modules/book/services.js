/**
 * Services Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow

import Api, { BOOK, BOOK_DETAIL } from 'helpers/api';

import type { BookDetail } from 'helpers/api/types';
import type { Dispatch } from 'redux';
import type { Pagination } from 'ui/CardList/types';
import type { CardItem } from 'modules/card/types';
import type { SubmitSearchFormRequest } from 'ui/Header/HeaderSearch/types';

import { transformBookListToCardList } from './transformers';
import type { GetBookDetailRequest } from './types';

export const getBookDetail = (dispatch: Dispatch<*>) => async ({ id }: GetBookDetailRequest): Promise<BookDetail> => {
  return Api.get(dispatch)(BOOK_DETAIL.replace('{id}', id));
};

export const getBookList = (dispatch: Dispatch<*>) => async (
  { page, search, type }: SubmitSearchFormRequest = { page: 0, search: '', type: '' }
): Promise<Pagination<CardItem>> => {
  const result: Pagination<BookDetail> = await Api.get(dispatch)(BOOK, { page, search, type });
  return transformBookListToCardList(result);
};
