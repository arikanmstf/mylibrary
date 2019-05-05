// @flow
import { createAction } from 'redux-actions';
import { PUBLICATION_UPDATE_PUBLICATION, PUBLICATION_UPDATE_CARD } from 'constants/actions/actionNames';
import { LOADER_CARD_DETAIL, LOADER_TOGGLE_LIST } from 'constants/actions/loaderNames';
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/ModalLoader/actions';
import { findIndexById, cloneObjectArray } from 'helpers/data/array';
import { updateCards } from 'modules/card/actions';
import { postToggleFavorite, postToggleRead } from 'modules/publication/services';
import { updateGeneralError } from 'ui/GeneralError/actions';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { PublicationDetail } from 'helpers/api/types';

import { transformPublicationToCard } from './transformers';
import { getPublicationDetail, postToggleList } from './services';
import type { ToggleListRequest } from './types';

const toggleTypes = {
  READ: 'read',
  FAVORITE: 'favorite',
};

export const updatePublicationAction = createAction(PUBLICATION_UPDATE_PUBLICATION);
export const updatePublicationCardAction = createAction(PUBLICATION_UPDATE_CARD);

export const updatePublication = (publication: PublicationDetail): ThunkAction => {
  return (dispatch: Dispatch<*>) => {
    dispatch(updatePublicationAction(publication));
    dispatch(updatePublicationCardAction(transformPublicationToCard(publication)));
  };
};

export const fetchPublication = (id: number): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    dispatch(showLoader(LOADER_CARD_DETAIL));

    try {
      logger.log('action: fetchPublicationStart');
      const publication = await getPublicationDetail(dispatch)({ id });
      logger.log('action: fetchPublication');

      await Promise.all([
        dispatch(updatePublication(publication)),
      ]);

      logger.log('action: fetchPublicationEnd');
    } finally {
      dispatch(hideLoader(LOADER_CARD_DETAIL));
    }
  };
};

export const toggleList = (request: ToggleListRequest): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    logger.log('action: toggleListStart');
    dispatch(showLoader(LOADER_TOGGLE_LIST));

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
      dispatch(updatePublication(publication)),
    ]);

    logger.log('action: toggleListEnd');
    dispatch(hideLoader(LOADER_TOGGLE_LIST));
  };
};

const toggle = (id: number, type: 'read' | 'favorite'): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    let toggleFunc;
    dispatch(showLoader(LOADER_TOGGLE_LIST));

    switch (type) {
      case toggleTypes.READ: toggleFunc = postToggleRead; break;
      case toggleTypes.FAVORITE: toggleFunc = postToggleFavorite; break;
      default: toggleFunc = (d: Dispatch<*>) => (i: number) => {
        d(updateGeneralError(`toggleFunc type unknown with id: ${i}`));
        logger.log('toggleFunc type unknown');
      };
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
      await Promise.all([
        dispatch(updatePublication(result)),
      ]);
    }

    dispatch(hideLoader(LOADER_TOGGLE_LIST));
  };
};

export const toggleRead = (id: number) => (toggle(id, toggleTypes.READ));
export const toggleFavorite = (id: number) => (toggle(id, toggleTypes.FAVORITE));
