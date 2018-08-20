/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import { updateCards, updateTotalPages } from './homeActions';

const initialState = {
  cards: [],
  totalPages: 0,
};

const reducer = new Map([
  [
    updateCards,
    (state, action) => ({
      ...state,
      cards: action.payload ? action.payload : initialState.cards,
    }),
  ],
  [
    updateTotalPages,
    (state, action) => ({
      ...state,
      totalPages: action.payload ? action.payload : initialState.totalPages,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
