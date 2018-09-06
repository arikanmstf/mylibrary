// @flow

import Api, { PUBLICATION } from 'helpers/api';
import { transformPublicationToCard } from 'helpers/data/transform';

import type { CardItem } from 'ui/CardList/types';
import type { PublicationDetail } from 'helpers/api/types';
import type { GetPublicationDetailRequest } from './PublicationDetailTypes';

export const getPublicationDetail = async ({ id }: GetPublicationDetailRequest): Promise<CardItem> => {
  const result: PublicationDetail = await Api.get(`${PUBLICATION}/${id}`);
  return transformPublicationToCard(result);
};
