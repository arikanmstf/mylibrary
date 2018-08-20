// @flow

import Api, { PUBLICATION, TOGGLE_FAVORITE, TOGGLE_READ } from 'helpers/api';
import { transformPublicationToCard } from 'helpers/data/transform';
import type { Pagination, CardItem } from 'ui/CardList/types';
import type { PublicationDetail, ToggleFavorite, ToggleRead } from 'helpers/api/types';

export const getPublicationList = async (page: number = 1): Promise<Pagination<CardItem>> => {
  const result: Pagination<PublicationDetail> = await Api.get(PUBLICATION, { page });
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
