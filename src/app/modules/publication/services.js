// @flow

import Api, {
  PUBLICATION,
  PUBLICATION_DETAIL,
  PUBLICATION_TOGGLE_LIST,
  PUBLICATION_TOGGLE_READ,
  PUBLICATION_TOGGLE_FAVORITE,
} from 'helpers/api';

import type { Pagination } from 'ui/CardList/types';
import type { CardItem } from 'modules/card/types';
import type { PublicationDetail } from 'helpers/api/types';
import type { SubmitSearchFormRequest } from 'ui/Header/HeaderSearch/types';
import type { Dispatch } from 'redux';

import { transformPublicationListToCardList } from './transformers';
import type { GetPublicationDetailRequest, ToggleListRequest } from './types';

export const getPublicationDetail = (
  dispatch: Dispatch<*>
) => async ({ id }: GetPublicationDetailRequest): Promise<PublicationDetail> => {
  return Api.get(dispatch)(PUBLICATION_DETAIL.replace('{id}', id));
};

export const getPublicationList = (dispatch: Dispatch<*>) => async (
  { page, search, type }: SubmitSearchFormRequest = { page: 0, search: '', type: '' }
): Promise<Pagination<CardItem>> => {
  const result: Pagination<PublicationDetail> = await Api.get(dispatch)(PUBLICATION, { page, search, type });
  return transformPublicationListToCardList(result);
};

export const postToggleFavorite = (dispatch: Dispatch<*>) => async (id: number): Promise<PublicationDetail> => {
  return Api.post(dispatch)(PUBLICATION_TOGGLE_FAVORITE.replace('{id}', id));
};

export const postToggleRead = (dispatch: Dispatch<*>) => async (id: number): Promise<PublicationDetail> => {
  return Api.post(dispatch)(PUBLICATION_TOGGLE_READ.replace('{id}', id));
};

export const postToggleList = (
  dispatch: Dispatch<*>
) => async ({ addToListId, ...other }: ToggleListRequest): Promise<PublicationDetail> => {
  return Api.post(dispatch)(PUBLICATION_TOGGLE_LIST.replace('{id}', addToListId), other);
};
