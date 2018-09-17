// @flow
import { createAction } from 'redux-actions';
import { PUBLICATION_UPDATE_PUBLICATION } from 'constants/actions/actionNames';
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/Loader/actions';
import { transformPublicationToCard } from 'helpers/data/transform';
import { findIndexById, cloneObjectArray } from 'helpers/data/array';
import { updateCards, updateCard } from 'modules/card/actions';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import { getPublicationDetail, postToggleList } from './services';
import type { ToggleListRequest } from './types';

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

export const toggleList = (request: ToggleListRequest): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    logger.log('action: toggleListStart');
    dispatch(showLoader());

    const publication = await postToggleList(request);
    const card = transformPublicationToCard(publication);
    const { cards } = getState().toJS().card;
    logger.log('action: toggleList');

    if (cards) {
      const newCards = cards ? cloneObjectArray(cards) : [];
      const index = findIndexById(newCards, card.id);
      newCards[index] = card;
      await dispatch(updateCards(newCards));
    }

    await Promise.all([
      dispatch(updateCard(card)),
      dispatch(updatePublication(publication)),
    ]);

    logger.log('action: toggleListEnd');
    dispatch(hideLoader());
  };
};
