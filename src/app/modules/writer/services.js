/**
 * Services Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow

import Api, { WRITER_DETAIL } from 'helpers/api';
import type { WriterDetail } from 'helpers/api/types';
import type { Dispatch } from 'redux';
import type { GetWriterDetailRequest } from './types';

export const getWriterDetail = (
  dispatch: Dispatch<*>
) => async ({ id }: GetWriterDetailRequest): Promise<WriterDetail> => {
  return Api.get(dispatch)(WRITER_DETAIL.replace('{id}', id));
};
