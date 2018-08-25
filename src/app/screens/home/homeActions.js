/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import { createAction } from 'redux-actions';
import {
  ADD_CARDS,
  UPDATE_CARDS,
  UPDATE_TOTAL_PAGES,
  UPDATE_CURRENT_PAGE,
  UPDATE_SEARCH_QUERY,
} from 'constants/actions/actionNames';
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/Loader/actions';
import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';
import type { SubmitSearchFormRequest } from 'ui/Header/types';

import { getPublicationList } from './homeServices';

export const addCards = createAction(ADD_CARDS);
export const updateCards = createAction(UPDATE_CARDS);
export const updateTotalPages = createAction(UPDATE_TOTAL_PAGES);
export const updateCurrentPage = createAction(UPDATE_CURRENT_PAGE);
export const updateSearchQuery = createAction(UPDATE_SEARCH_QUERY);

export const fetchAndUpdateCards = (
  { search }: SubmitSearchFormRequest = { search: '' }, shouldShowLoader: boolean = true
): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    const page = 1;
    if (shouldShowLoader) {
      dispatch(showLoader());
    }

    const result = await getPublicationList({ page, search });
    logger.log('fetchAndUpdateCards', result);
    await Promise.all([
      dispatch(updateCards(result.content)),
      dispatch(updateTotalPages(result.totalPages)),
      dispatch(updateSearchQuery(search)),
    ]);
    dispatch(updateCurrentPage(page));
    dispatch(hideLoader());
  };
};

export const fetchAndAddCards = (): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    const page = getState().toJS().home.currentPage + 1;
    const search = getState().toJS().home.searchQuery;
    const result = await getPublicationList({ page, search });
    logger.log('fetchAndAddCards', result);
    await Promise.all([
      dispatch(addCards(result.content)),
      dispatch(updateTotalPages(result.totalPages)),
    ]);
    dispatch(updateCurrentPage(page));
  };
};

export const mapStateToProps = (state: Immutable<State>) => ({
  cards: state.toJS().home.cards,
});

export const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  fetchCards: (...args) => dispatch(fetchAndUpdateCards(...args)),
});

