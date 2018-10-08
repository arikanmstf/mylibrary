/**
 * Services Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow

import Api, { BOOK_DETAIL } from 'helpers/api';
import type { BookDetail } from 'helpers/api/types';
import type { Dispatch } from 'redux';
import type { GetBookDetailRequest } from './types';

export const getBookDetail = (dispatch: Dispatch<*>) => async ({ id }: GetBookDetailRequest): Promise<BookDetail> => {
  return Api.get(dispatch)(BOOK_DETAIL.replace('{id}', id));
};
