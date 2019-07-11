/**
 * Services Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow

import Api, { WRITER, WRITER_DETAIL } from 'helpers/api';

import type { WriterDetail } from 'helpers/api/types';
import type { Dispatch } from 'redux';
import type { Pagination } from 'ui/CardList/types';
import type { SubmitSearchFormRequest } from 'ui/Header/HeaderSearch/types';
import type { CardItem } from 'modules/card/types';

import { transformWriterListToCardList } from './transformers';
import type { GetWriterDetailRequest, PostWriterDetailInsertRequest } from './types';

export const getWriterDetail = (
  dispatch: Dispatch<*>
) => async ({ id }: GetWriterDetailRequest): Promise<WriterDetail> => {
  return Api.get(dispatch)(WRITER_DETAIL.replace('{id}', id));
};

export const getWriterList = (dispatch: Dispatch<*>) => async (
  { page, search, type }: SubmitSearchFormRequest = { page: 0, search: '', type: '' }
): Promise<Pagination<CardItem>> => {
  const result: Pagination<WriterDetail> = await Api.get(dispatch)(WRITER, { page, search, type });
  return transformWriterListToCardList(result);
};

export const postWriterDetailInsert = (
  dispatch: Dispatch<*>
) => async (data: PostWriterDetailInsertRequest): Promise<WriterDetail> => {
  return Api.post(dispatch)(WRITER_DETAIL.replace('/{id}', ''), data);
};
