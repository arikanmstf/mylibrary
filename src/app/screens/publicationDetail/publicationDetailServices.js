// @flow

import Api, { PUBLICATION } from 'helpers/api';

import type { PublicationDetail } from 'helpers/api/types';
import type {
  GetPublicationDetailRequest,
  ToggleListRequest,
} from './PublicationDetailTypes';

export const getPublicationDetail = async ({ id }: GetPublicationDetailRequest): Promise<PublicationDetail> => {
  return Api.get(`${PUBLICATION}/${id}`);
};

export const toggleList = async ({ addToListId, ...other }: ToggleListRequest): Promise<PublicationDetail> => {
  return Api.post(`${PUBLICATION}/${addToListId}/toggle-list`, other);
};
