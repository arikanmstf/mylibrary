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
  updateListType,
  updateFetchedPublicationListType,
} from './actions';

const initialState = {
  cards: null,
  totalPages: 0,
  currentPage: 1,
  searchQuery: '',
  listType: undefined,
  fetchedPublicationListType: undefined,
  isSearchPending: false,
  isEditMode: false,
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
    updateListType,
    (state, action) => ({
      ...state,
      listType: action.payload ? action.payload : initialState.listType,
    }),
  ],
  [
    updateFetchedPublicationListType,
    (state, action) => ({
      ...state,
      fetchedPublicationListType: action.payload ? action.payload : initialState.fetchedPublicationListType,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
