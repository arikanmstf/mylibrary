// @flow

import Api, { PUBLICATION } from 'helpers/api';
import { transformPublicationToCard } from 'helpers/data/transform';
import type { Pagination, CardItem } from 'ui/CardList/types';
import type { PublicationDetail } from 'helpers/api/types';

export const getPublicationList = async (page: number = 1): Promise<Pagination<CardItem>> => {
  const result: Pagination<PublicationDetail> = await Api.get(PUBLICATION, { page });
  return transformPublicationToCard(result);
};
