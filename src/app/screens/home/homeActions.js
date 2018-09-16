/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import logger from 'helpers/logger';
import { fetchAndUpdateCards } from 'modules/card/actions';
import { updateRows } from 'modules/row/actions';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

import { getListList } from './homeServices';

export const fetchLists = (): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    logger.log('action: fetchListsStart');

    const result = await getListList();
    logger.log('action: fetchLists', result);

    await dispatch(updateRows(result));
    logger.log('action: fetchListsEnd');
  };
};

export const mapStateToProps = (state: Immutable<State>) => ({
  cards: state.toJS().card.cards,
  rows: state.toJS().row.rows,
});

export const mapDispatchToProps = {
  fetchPublications: fetchAndUpdateCards,
  fetchLists,
};
