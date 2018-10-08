// @flow
import { createAction } from 'redux-actions';
import { PUBLICATION_UPDATE_PUBLICATION, PUBLICATION_UPDATE_CARD } from 'constants/actions/actionNames';
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/ModalLoader/actions';
import { transformPublicationToCard } from 'helpers/data/transform';
import { findIndexById, cloneObjectArray } from 'helpers/data/array';
import { updateCards } from 'modules/card/actions';
import { postToggleFavorite, postToggleRead } from 'modules/publication/services';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import { getPublicationDetail, postToggleList } from './services';
import type { ToggleListRequest } from './types';

const toggleTypes = {
  READ: 'read',
  FAVORITE: 'favorite',
};

export const updatePublication = createAction(PUBLICATION_UPDATE_PUBLICATION);
export const updatePublicationCard = createAction(PUBLICATION_UPDATE_CARD);

export const fetchPublication = (id: number, shouldShowLoader: boolean = true): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    if (shouldShowLoader) {
      dispatch(showLoader());
    }

    try {
      logger.log('action: fetchPublicationStart');
      const publication = await getPublicationDetail(dispatch)({ id });
      const card = transformPublicationToCard(publication);
      logger.log('action: fetchPublication');

      await Promise.all([
        dispatch(updatePublicationCard(card)),
        dispatch(updatePublication(publication)),
      ]);

      logger.log('action: fetchPublicationEnd');
    } finally {
      dispatch(hideLoader());
    }
  };
};

export const toggleList = (request: ToggleListRequest): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    logger.log('action: toggleListStart');
    dispatch(showLoader());

    const publication = await postToggleList(dispatch)(request);
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
      dispatch(updatePublicationCard(card)),
      dispatch(updatePublication(publication)),
    ]);

    logger.log('action: toggleListEnd');
    dispatch(hideLoader());
  };
};

const toggle = (id: number, type: 'read' | 'favorite'): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    let toggleFunc;
    dispatch(showLoader());

    switch (type) {
      case toggleTypes.READ: toggleFunc = postToggleRead; break;
      case toggleTypes.FAVORITE: toggleFunc = postToggleFavorite; break;
      default: toggleFunc = () => { logger.log('toggleFunc type unknown'); };
    }

    const result = await toggleFunc(dispatch)(id);
    logger.log(`toggle: ${type}`);
    const { cards } = getState().toJS().card;
    const { card } = getState().toJS().publication;

    if (cards) {
      const newCards = cards ? cloneObjectArray(cards) : [];
      const index = findIndexById(newCards, id);
      newCards[index] = transformPublicationToCard(result);
      await dispatch(updateCards(newCards));
    }

    if (card) {
      const newCard = transformPublicationToCard(result);

      await Promise.all([
        dispatch(updatePublicationCard(newCard)),
        dispatch(updatePublication(result)),
      ]);
    }

    dispatch(hideLoader());
  };
};

export const toggleRead = (id) => (toggle(id, 'read'));
export const toggleFavorite = (id) => (toggle(id, 'favorite'));
