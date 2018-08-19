/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import { updateCards } from './homeActions';

const initialState = {
  cards: null,
  totalPages: 0,
};

const reducer = new Map([
  [
    updateCards,
    (state, action) => ({
      ...state,
      cards: action.payload ? action.payload.content : initialState.cards,
      totalPages: action.payload ? action.payload.totalPages : initialState.totalPages,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
