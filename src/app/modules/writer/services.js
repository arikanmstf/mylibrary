/**
 * Services Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow

import Api, { WRITER_DETAIL } from 'helpers/api';
import type { WriterDetail } from 'helpers/api/types';
import type { GetWriterDetailRequest } from './types';

export const getWriterDetail = async ({ id }: GetWriterDetailRequest): Promise<WriterDetail> => {
  return Api.get(WRITER_DETAIL.replace('{id}', id));
};
