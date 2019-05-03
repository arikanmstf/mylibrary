/**
 * Actions Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow
import { createAction } from 'redux-actions';
import { BOOK_UPDATE_BOOK, BOOK_UPDATE_CARD } from 'constants/actions/actionNames';
import { LOADER_CARD_DETAIL } from 'constants/actions/loaderNames';
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/ModalLoader/actions';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';

import { transformBookToCard } from './transformers';
import { getBookDetail } from './services';

export const updateBook = createAction(BOOK_UPDATE_BOOK);
export const updateBookCard = createAction(BOOK_UPDATE_CARD);

export const fetchBook = (id: number, shouldShowLoader: boolean = true): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    if (shouldShowLoader) {
      dispatch(showLoader(LOADER_CARD_DETAIL));
    }

    logger.log('action: fetchBookStart');

    const book = await getBookDetail(dispatch)({ id });
    const card = transformBookToCard(book);
    logger.log('action: fetchBook');

    await Promise.all([
      dispatch(updateBookCard(card)),
      dispatch(updateBook(book)),
    ]);

    logger.log('action: fetchBookEnd');
    dispatch(hideLoader(LOADER_CARD_DETAIL));
  };
};
