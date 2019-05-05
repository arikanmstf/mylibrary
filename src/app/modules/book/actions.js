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
import type { BookDetail } from 'helpers/api/types';

import { transformBookToCard } from './transformers';
import { getBookDetail } from './services';

export const updateBookAction = createAction(BOOK_UPDATE_BOOK);
export const updateBookCardAction = createAction(BOOK_UPDATE_CARD);

export const updateBook = (book: BookDetail): ThunkAction => {
  return (dispatch: Dispatch<*>) => {
    dispatch(updateBookAction(book));
    dispatch(updateBookCardAction(transformBookToCard(book)));
  };
};

export const fetchBook = (id: number, shouldShowLoader: boolean = true): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    if (shouldShowLoader) {
      dispatch(showLoader(LOADER_CARD_DETAIL));
    }

    logger.log('action: fetchBookStart');

    const book = await getBookDetail(dispatch)({ id });
    logger.log('action: fetchBook');

    await Promise.all([
      dispatch(updateBook(book)),
    ]);

    logger.log('action: fetchBookEnd');
    dispatch(hideLoader(LOADER_CARD_DETAIL));
  };
};
