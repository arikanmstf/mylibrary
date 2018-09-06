/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import { createAction } from 'redux-actions';
import { PUBLICATION_UPDATE_CARD } from 'constants/actions/actionNames';
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/Loader/actions';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';
import { getPublicationDetail } from './publicationDetailServices';

export const updateCard = createAction(PUBLICATION_UPDATE_CARD);

export const fetchCard = (id: number): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    dispatch(showLoader());
    logger.log('action: fetchCardStart');

    const result = await getPublicationDetail({ id });
    logger.log('action: fetchCard', result);

    await dispatch(updateCard(result));
    logger.log('action: fetchCardEnd');
    dispatch(hideLoader());
  };
};

export const mapStateToProps = (state: Immutable<State>) => ({
  card: state.toJS().publication.card,
});

export const mapDispatchToProps = {
  fetchCard,
};
