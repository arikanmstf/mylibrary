// @flow
import { createAction } from 'redux-actions';
import {
  ADD_CARDS,
  UPDATE_CARDS,
  UPDATE_TOTAL_PAGES,
  UPDATE_CURRENT_PAGE,
  UPDATE_SEARCH_QUERY,
  UPDATE_SEARCH_PENDING,
} from 'constants/actions/actionNames';
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/Loader/actions';
import { getPublicationList } from 'modules/publication/services';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { SubmitSearchFormRequest } from 'ui/Header/types';

export const addCards = createAction(ADD_CARDS);
export const updateCards = createAction(UPDATE_CARDS);
export const updateTotalPages = createAction(UPDATE_TOTAL_PAGES);
export const updateCurrentPage = createAction(UPDATE_CURRENT_PAGE);
export const updateSearchQuery = createAction(UPDATE_SEARCH_QUERY);
export const updateSearchPending = createAction(UPDATE_SEARCH_PENDING);

export const fetchAndUpdateCards = (
  { search }: SubmitSearchFormRequest = { search: '' }, shouldShowLoader: boolean = true
): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    const page = 1;
    if (shouldShowLoader) {
      dispatch(showLoader());
    }
    logger.log('action: fetchAndUpdateCardsStart');

    const result = await getPublicationList({ page, search });
    logger.log('action: fetchAndUpdateCards', result);
    await Promise.all([
      dispatch(updateCards(result.content)),
      dispatch(updateTotalPages(result.totalPages)),
      dispatch(updateSearchQuery(search)),
      dispatch(updateCurrentPage(page)),
    ]);

    logger.log('action: fetchAndUpdateCardsEnd');
    dispatch(hideLoader());
  };
};

export const fetchAndAddCards = (): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    const isPending = getState().toJS().card.isSearchPending;
    if (isPending) {
      return false;
    }

    logger.log('action: fetchAndAddCardsStart');
    const page = getState().toJS().card.currentPage + 1;
    const totalPage = getState().toJS().card.totalPages;
    if (page > totalPage) {
      logger.log('page is too big');
      return false;
    }

    const search = getState().toJS().card.searchQuery;
    await dispatch(updateSearchPending(true));
    const result = await getPublicationList({ page, search });
    logger.log('action: fetchAndAddCards', result);
    await Promise.all([
      dispatch(addCards(result.content)),
      dispatch(updateTotalPages(result.totalPages)),
    ]);

    dispatch(updateSearchPending(false));
    dispatch(updateCurrentPage(page));
    logger.log('action: fetchAndAddCardsEnd');
    return true;
  };
};
