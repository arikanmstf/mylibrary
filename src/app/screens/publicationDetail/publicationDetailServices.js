// @flow

import Api, { PUBLICATION } from 'helpers/api';

import type { PublicationDetail } from 'helpers/api/types';
import type { GetPublicationDetailRequest } from './PublicationDetailTypes';

export const getPublicationDetail = async ({ id }: GetPublicationDetailRequest): Promise<PublicationDetail> => {
  return Api.get(`${PUBLICATION}/${id}`);
};
