/**
 * Services Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow

import Api, { BOOK_DETAIL } from 'helpers/api';
import type { BookDetail } from 'helpers/api/types';
import type { GetBookDetailRequest } from './types';

export const getBookDetail = async ({ id }: GetBookDetailRequest): Promise<BookDetail> => {
  return Api.get(BOOK_DETAIL.replace('{id}', id));
};
