/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import {
  addCards,
  updateCard,
  updateCards,
  updateTotalPages,
  updateCurrentPage,
  updateSearchQuery,
  updateSearchPending,
} from './actions';

const initialState = {
  cards: null,
  card: null,
  totalPages: 0,
  currentPage: 1,
  searchQuery: '',
  isSearchPending: false,
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
    updateCard,
    (state, action) => ({
      ...state,
      card: action.payload || state.card,
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
  [
    updateSearchQuery,
    (state, action) => ({
      ...state,
      searchQuery: action.payload ? action.payload : initialState.searchQuery,
    }),
  ],
  [
    updateSearchPending,
    (state, action) => ({
      ...state,
      isSearchPending: action.payload ? action.payload : initialState.isSearchPending,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
