// @flow
import logger from 'helpers/logger';
import {
  toggleFavorite as toggleFavoriteService,
  toggleRead as toggleReadService,
} from 'screens/home/homeServices';
import { updateCards } from 'screens/home/homeActions';
import { updateCard } from 'screens/publicationDetail/publicationDetailActions';
import { findIndexById } from 'helpers/data/array';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';
import type { ThunkAction } from 'redux-thunk';

export const toggleFavorite = (id: number): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    const result = await toggleFavoriteService(id);
    logger.log('toggleFavorite', result);
    const { cards } = getState().toJS().home;
    const newCards = [...cards];
    const index = findIndexById(newCards, id);

    newCards[index].isFavorite = !!result.result;
    await Promise.all([
      dispatch(updateCards(newCards)),
      dispatch(updateCard(newCards[index])),
    ]);
  };
};

export const toggleRead = (id: number): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    const result = await toggleReadService(id);
    logger.log('toggleRead', result);
    const { cards } = getState().toJS().home;
    const newCards = [...cards];
    const index = findIndexById(newCards, id);

    newCards[index].isRead = !!result.result;

    await Promise.all([
      dispatch(updateCards(newCards)),
      dispatch(updateCard(newCards[index])),
    ]);
  };
};

export const mapDispatchToProps = {
  toggleFavorite,
  toggleRead,
};

export const mapStateToProps = (state: Immutable<State>) => ({
  cards: state.toJS().home.cards,
});
