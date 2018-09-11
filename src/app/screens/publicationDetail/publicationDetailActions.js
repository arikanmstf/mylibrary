/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import { createAction } from 'redux-actions';
import { PUBLICATION_UPDATE_CARD, PUBLICATION_UPDATE_PUBLICATION } from 'constants/actions/actionNames';
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/Loader/actions';
import { transformPublicationToCard } from 'helpers/data/transform';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';
import { getPublicationDetail } from './publicationDetailServices';

export const updateCard = createAction(PUBLICATION_UPDATE_CARD);
export const updatePublication = createAction(PUBLICATION_UPDATE_PUBLICATION);

export const fetchPublication = (id: number, shouldShowLoader: boolean = true): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    if (shouldShowLoader) {
      dispatch(showLoader());
    }

    logger.log('action: fetchPublicationStart');

    const publication = await getPublicationDetail({ id });
    const card = transformPublicationToCard(publication);
    logger.log('action: fetchPublication');

    await Promise.all([
      dispatch(updateCard(card)),
      dispatch(updatePublication(publication)),
    ]);

    logger.log('action: fetchPublicationEnd');
    dispatch(hideLoader());
  };
};

export const mapStateToProps = (state: Immutable<State>) => ({
  card: state.toJS().publication.card,
});

export const mapDispatchToProps = {
  fetchPublication,
};
