// @flow
import logger from 'helpers/logger';
import {
  postToggleFavorite,
  postToggleRead,
} from 'modules/publication/services';
import { updateCard, updateCards } from 'modules/card/actions';
import { updatePublication } from 'modules/publication/actions';
import { findIndexById, cloneObjectArray } from 'helpers/data/array';
import { showLoader, hideLoader } from 'ui/Loader/actions';
import { transformPublicationToCard } from 'helpers/data/transform';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';

const toggleTypes = {
  READ: 'read',
  FAVORITE: 'favorite',
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

    const result = await toggleFunc(id);
    logger.log(`toggle: ${type}`);
    const { card, cards } = getState().toJS().card;

    if (cards) {
      const newCards = cards ? cloneObjectArray(cards) : [];
      const index = findIndexById(newCards, id);
      newCards[index] = transformPublicationToCard(result);
      await dispatch(updateCards(newCards));
    }

    if (card) {
      const newCard = transformPublicationToCard(result);

      await Promise.all([
        dispatch(updateCard(newCard)),
        dispatch(updatePublication(result)),
      ]);
    }

    dispatch(hideLoader());
  };
};

export const toggleRead = (id) => (toggle(id, 'read'));
export const toggleFavorite = (id) => (toggle(id, 'favorite'));

export const mapDispatchToProps = {
  toggleFavorite,
  toggleRead,
};

export const mapStateToProps = null;
