/**
 * Actions Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow
import logger from 'helpers/logger';
import { updateRows } from 'modules/row/actions';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';

import { getMyLists } from './services';

export const fetchLists = (): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    logger.log('action: fetchListsStart');

    const result = await getMyLists(dispatch)();
    logger.log('action: fetchLists', result);

    await dispatch(updateRows(result));
    logger.log('action: fetchListsEnd');
  };
};
