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
  updateSearchQuery,
  updateSearchPending,
  updateRows,
} from './homeActions';

const initialState = {
  cards: null,
  totalPages: 0,
  currentPage: 1,
  searchQuery: '',
  isSearchPending: false,
  rows: null,
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
  [
    updateRows,
    (state, action) => ({
      ...state,
      rows: action.payload || state.rows,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
