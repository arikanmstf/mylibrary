/**
 * Services Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow

import Api, { PUBLISHER, PUBLISHER_DETAIL } from 'helpers/api';
import type { PublisherDetail } from 'helpers/api/types';
import type { Dispatch } from 'redux';
import type { Pagination } from 'ui/CardList/types';
import type { CardItem } from 'modules/card/types';
import type { SubmitSearchFormRequest } from 'ui/Header/HeaderSearch/types';

import { transformPublisherListToCardList } from './transformers';
import type { GetPublisherDetailRequest } from './types';

export const getPublisherDetail = (
  dispatch: Dispatch<*>
) => async ({ id }: GetPublisherDetailRequest): Promise<PublisherDetail> => {
  return Api.get(dispatch)(PUBLISHER_DETAIL.replace('{id}', id));
};

export const postPublisherDetail = (
  dispatch: Dispatch<*>
) => async (id: number, data): Promise<PublisherDetail> => {
  return Api.post(dispatch)(PUBLISHER_DETAIL.replace('{id}', id), data);
};

export const getPublisherList = (dispatch: Dispatch<*>) => async (
  { page, search, type }: SubmitSearchFormRequest = { page: 0, search: '', type: '' }
): Promise<Pagination<CardItem>> => {
  const result: Pagination<PublisherDetail> = await Api.get(dispatch)(PUBLISHER, { page, search, type });
  return transformPublisherListToCardList(result);
};
