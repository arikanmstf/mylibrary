// @flow
import { createAction } from 'redux-actions';
import {
  CARD_ADD_CARDS,
  CARD_UPDATE_CARDS,
  CARD_UPDATE_CURRENT_PAGE,
  CARD_UPDATE_FETCHED_PUBLICATION_LIST_TYPE,
  CARD_UPDATE_LIST_TYPE,
  CARD_UPDATE_SEARCH_PENDING,
  CARD_UPDATE_SEARCH_QUERY,
  CARD_UPDATE_TOTAL_PAGES,
} from 'constants/actions/actionNames';
import { LOADER_CARD_LIST } from 'constants/actions/loaderNames';
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/ModalLoader/actions';
import { showCenterLoader, hideCenterLoader } from 'ui/CenterLoader/actions';
import { getPublicationList } from 'modules/publication/services';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';

export const addCards = createAction(CARD_ADD_CARDS);
export const updateCards = createAction(CARD_UPDATE_CARDS);
export const updateTotalPages = createAction(CARD_UPDATE_TOTAL_PAGES);
export const updateCurrentPage = createAction(CARD_UPDATE_CURRENT_PAGE);
export const updateFetchedPublicationListType = createAction(CARD_UPDATE_FETCHED_PUBLICATION_LIST_TYPE);
export const updateSearchQuery = createAction(CARD_UPDATE_SEARCH_QUERY);
export const updateListType = createAction(CARD_UPDATE_LIST_TYPE);
export const updateSearchPending = createAction(CARD_UPDATE_SEARCH_PENDING);

export const fetchAndUpdateCards = (shouldShowLoader: boolean = true): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    try {
      const page = 1;
      if (shouldShowLoader) {
        dispatch(showLoader(LOADER_CARD_LIST));
      }
      logger.log('action: fetchAndUpdateCardsStart');
      const search = getState().toJS().card.searchQuery;
      const type = getState().toJS().card.listType;
      const result = await getPublicationList(dispatch)({ page, search, type });
      logger.log('action: fetchAndUpdateCards');
      await Promise.all([
        dispatch(updateCards(result.content)),
        dispatch(updateTotalPages(result.totalPages)),
        dispatch(updateCurrentPage(page)),
        dispatch(updateFetchedPublicationListType(type)),
      ]);

      logger.log('action: fetchAndUpdateCardsEnd');
    } finally {
      dispatch(hideLoader(LOADER_CARD_LIST));
    }
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
    const type = getState().toJS().card.listType;

    dispatch(showCenterLoader());
    await dispatch(updateSearchPending(true));
    const result = await getPublicationList(dispatch)({ page, search, type });
    logger.log('action: fetchAndAddCards');
    await dispatch(updateSearchPending(false));

    await Promise.all([
      dispatch(addCards(result.content)),
      dispatch(updateTotalPages(result.totalPages)),
    ]);

    dispatch(updateCurrentPage(page));
    dispatch(hideCenterLoader());
    logger.log('action: fetchAndAddCardsEnd');
    return true;
  };
};
