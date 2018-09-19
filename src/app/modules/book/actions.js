/**
 * Actions Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow
import { createAction } from 'redux-actions';
import { BOOK_UPDATE_BOOK } from 'constants/actions/actionNames';
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/Loader/actions';
import { transformBookToCard } from 'helpers/data/transform';
import { updateCard } from 'modules/card/actions';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';

import { getBookDetail } from './services';

export const updateBook = createAction(BOOK_UPDATE_BOOK);

export const fetchBook = (id: number, shouldShowLoader: boolean = true): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    if (shouldShowLoader) {
      dispatch(showLoader());
    }

    logger.log('action: fetchBookStart');

    const book = await getBookDetail({ id });
    const card = transformBookToCard(book);
    logger.log('action: fetchBook');

    await Promise.all([
      dispatch(updateCard(card)),
      dispatch(updateBook(book)),
    ]);

    logger.log('action: fetchBookEnd');
    dispatch(hideLoader());
  };
};
