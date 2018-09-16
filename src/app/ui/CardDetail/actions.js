// @flow
import logger from 'helpers/logger';
import {
  toggleFavorite as toggleFavoriteService,
  toggleRead as toggleReadService,
} from 'modules/publication/services';
import { updateCard, updateCards } from 'modules/card/actions';
import { findIndexById, cloneObjectArray } from 'helpers/data/array';
import { showLoader, hideLoader } from 'ui/Loader/actions';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';

const toggleTypes = {
  READ: 'read',
  FAVORITE: 'favorite',
};

const toggle = (id: number, type: 'read' | 'favorite'): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    let toggleFunc;
    let toggleField = 'undefinedField';
    dispatch(showLoader());

    switch (type) {
      case toggleTypes.READ: toggleFunc = toggleReadService; toggleField = 'isRead'; break;
      case toggleTypes.FAVORITE: toggleFunc = toggleFavoriteService; toggleField = 'isFavorite'; break;
      default: toggleFunc = () => { logger.log('toggleFunc type unknown'); };
    }

    const result = await toggleFunc(id);
    logger.log(`toggle: ${type}`);
    const { cards } = getState().toJS().card;
    const { card } = getState().toJS().card;

    if (cards) {
      const newCards = cards ? cloneObjectArray(cards) : [];
      const index = findIndexById(newCards, id);
      newCards[index][toggleField] = !!result.result;
      await dispatch(updateCards(newCards));
    }

    if (card) {
      const newCard = {
        ...card,
        [toggleField]: !!result.result,
      };

      await Promise.all([
        dispatch(updateCard(newCard)),
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
