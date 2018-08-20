/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import { createAction } from 'redux-actions';
import { UPDATE_CARDS, UPDATE_TOTAL_PAGES } from 'constants/actions/actionNames';
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/Loader/actions';
import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

import { getPublicationList } from './homeServices';

export const updateCards = createAction(UPDATE_CARDS);
export const updateTotalPages = createAction(UPDATE_TOTAL_PAGES);

export const fetchCards = (page: number): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    dispatch(showLoader());
    const result = await getPublicationList(page);
    logger.log('fetchCards', result);
    await Promise.all([
      dispatch(updateCards(result.content)),
      dispatch(updateTotalPages(result.totalPages)),
    ]);
    dispatch(hideLoader());
  };
};

export const mapStateToProps = (state: Immutable<State>) => ({
  cards: state.toJS().home.cards,
});

export const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  fetchCards: (page: number) => dispatch(fetchCards(page)),
});

