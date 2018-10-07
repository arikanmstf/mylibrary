// @flow

import Api, {
  PUBLICATION,
  PUBLICATION_DETAIL,
  PUBLICATION_TOGGLE_LIST,
  PUBLICATION_TOGGLE_READ,
  PUBLICATION_TOGGLE_FAVORITE,
} from 'helpers/api';
import { transformPublicationListToCardList } from 'helpers/data/transform';

import type { Pagination } from 'ui/CardList/types';
import type { CardItem } from 'modules/card/types';
import type {
  PublicationDetail,
  ToggleFavorite,
  ToggleRead,
} from 'helpers/api/types';
import type { SubmitSearchFormRequest } from 'ui/Header/types';
import type { GetPublicationDetailRequest, ToggleListRequest } from './types';

export const getPublicationDetail = async ({ id }: GetPublicationDetailRequest): Promise<PublicationDetail> => {
  return Api.get(PUBLICATION_DETAIL.replace('{id}', id));
};

export const getPublicationList = async (
  { page, search, type }: SubmitSearchFormRequest = { page: 0, search: '', type: '' }
): Promise<Pagination<CardItem>> => {
  const result: Pagination<PublicationDetail> = await Api.get(PUBLICATION, { page, search, type });
  return transformPublicationListToCardList(result);
};

export const postToggleFavorite = async (id: number): Promise<ToggleFavorite> => {
  return Api.post(PUBLICATION_TOGGLE_FAVORITE.replace('{id}', id));
};

export const postToggleRead = async (id: number): Promise<ToggleRead> => {
  return Api.post(PUBLICATION_TOGGLE_READ.replace('{id}', id));
};

export const postToggleList = async ({ addToListId, ...other }: ToggleListRequest): Promise<PublicationDetail> => {
  return Api.post(PUBLICATION_TOGGLE_LIST.replace('{id}', addToListId), other);
};
