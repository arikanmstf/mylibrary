// @flow
import logger from 'helpers/logger';
import {
  toggleFavorite as toggleFavoriteService,
  toggleRead as toggleReadService,
} from 'screens/home/homeServices';
import { updateCards } from 'screens/home/homeActions';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';
import type { ThunkAction } from 'redux-thunk';

export const toggleFavorite = (id: number, index: number): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    const result = await toggleFavoriteService(id);
    logger.log('toggleFavorite', result);
    const { cards } = getState().toJS().home;
    const newCards = [...cards];
    newCards[index].isFavorite = !!result.result;
    await dispatch(updateCards(newCards));
  };
};

export const toggleRead = (id: number, index: number): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    const result = await toggleReadService(id);
    logger.log('toggleRead', result);
    const { cards } = getState().toJS().home;
    const newCards = [...cards];
    newCards[index].isRead = !!result.result;
    await dispatch(updateCards(newCards));
  };
};

export const mapDispatchToProps = {
  toggleFavorite,
  toggleRead,
};

export const mapStateToProps = (state: Immutable<State>) => ({
  cards: state.toJS().home.cards,
});
