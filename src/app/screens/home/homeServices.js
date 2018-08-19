// @flow

import Api, { PUBLICATION } from 'helpers/api';
import { transformPublicationToCard } from 'helpers/data/transform';
import type { Pagination, CardItem } from 'ui/CardList/types';
import type { PublicationListItem } from 'helpers/api/types';

export const getPublicationList = async (): Promise<Pagination<CardItem>> => {
  const result: Pagination<PublicationListItem> = await Api.get(PUBLICATION);
  return transformPublicationToCard(result);
};
