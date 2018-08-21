// @flow
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/Loader/actions';
import {
  toggleFavorite as toggleFavoriteService,
  toggleRead as toggleReadService,
} from 'screens/home/homeServices';
import { updateCards, fetchAndAddCards, fetchAndUpdateCards } from 'screens/home/homeActions';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const toggleFavorite = (id: number, index: number): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    dispatch(showLoader());
    const result = await toggleFavoriteService(id);
    logger.log('toggleFavorite', result);
    const { cards } = getState().toJS().home;
    const newCards = [...cards];
    newCards[index].isFavorite = !!result.result;
    await dispatch(updateCards(newCards));
    dispatch(hideLoader());
  };
};
export const toggleRead = (id: number, index: number): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    dispatch(showLoader());
    const result = await toggleReadService(id);
    logger.log('toggleRead', result);
    const { cards } = getState().toJS().home;
    const newCards = [...cards];
    newCards[index].isRead = !!result.result;
    await dispatch(updateCards(newCards));
    dispatch(hideLoader());
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  toggleFavorite: (id: number, index: number) => dispatch(toggleFavorite(id, index)),
  toggleRead: (id: number, index: number) => dispatch(toggleRead(id, index)),
  addCards: () => dispatch(fetchAndAddCards()),
  fetchCards: () => dispatch(fetchAndUpdateCards()),
});

export const mapStateToProps = (state: Immutable<State>) => ({
  cards: state.toJS().home.cards,
  isLoaderVisible: state.toJS().loader.isVisible,
});
