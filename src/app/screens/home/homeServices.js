// @flow

import Api, { PUBLICATION, TOGGLE_FAVORITE, TOGGLE_READ } from 'helpers/api';
import { transformPublicationToCard } from 'helpers/data/transform';
import type { Pagination, CardItem } from 'ui/CardList/types';
import type { PublicationDetail, ToggleFavorite, ToggleRead } from 'helpers/api/types';
import type { SubmitSearchFormRequest } from 'ui/Header/types';

export const getPublicationList = async (
  { page, search }: SubmitSearchFormRequest = { page: 0, search: '' }
): Promise<Pagination<CardItem>> => {
  const result: Pagination<PublicationDetail> = await Api.get(PUBLICATION, { page, search });
  return transformPublicationToCard(result);
};

export const toggleFavorite = async (id: number): Promise<ToggleFavorite> => {
  const result: ToggleFavorite = await Api.post(`${TOGGLE_FAVORITE}/${id}`);
  return result;
};

export const toggleRead = async (id: number): Promise<ToggleRead> => {
  const result: ToggleRead = await Api.post(`${TOGGLE_READ}/${id}`);
  return result;
};
