/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import {
  addCards,
  updateCards,
  updateTotalPages,
  updateCurrentPage,
} from './homeActions';

const initialState = {
  cards: [],
  totalPages: 0,
  currentPage: 0,
};

const reducer = new Map([
  [
    addCards,
    (state, action) => ({
      ...state,
      cards: action.payload ? [...state.cards, ...action.payload] : state.cards,
    }),
  ],
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
  [
    updateCurrentPage,
    (state, action) => ({
      ...state,
      currentPage: action.payload ? action.payload : initialState.currentPage,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
