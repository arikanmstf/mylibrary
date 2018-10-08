/**
 * Services Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow

import Api, { PUBLISHER_DETAIL } from 'helpers/api';
import type { PublisherDetail } from 'helpers/api/types';
import type { Dispatch } from 'redux';
import type { GetPublisherDetailRequest } from './types';

export const getPublisherDetail = (
  dispatch: Dispatch<*>
) => async ({ id }: GetPublisherDetailRequest): Promise<PublisherDetail> => {
  return Api.get(dispatch)(PUBLISHER_DETAIL.replace('{id}', id));
};
