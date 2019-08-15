/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import Storage, { PUBLICATION_LIST_CACHE_STATE } from 'helpers/storage';
import {
  updatePublicationAction,
  updatePublicationCardAction,
  clearPublicationCardAction,
  clearPublicationAction,
  updatePublicationListCacheAction,
} from './actions';

const initialState = {
  publication: null,
  card: null,
  cache: Storage.load({ key: PUBLICATION_LIST_CACHE_STATE }),
};

const reducer = new Map([
  [
    updatePublicationAction,
    (state, action) => ({
      ...state,
      publication: action.payload || state.publication,
    }),
  ],
  [
    updatePublicationCardAction,
    (state, action) => ({
      ...state,
      card: action.payload || state.card,
    }),
  ],
  [
    clearPublicationAction,
    (state) => ({
      ...state,
      publication: null,
    }),
  ],
  [
    clearPublicationCardAction,
    (state) => ({
      ...state,
      card: null,
    }),
  ],
  [
    updatePublicationListCacheAction,
    (state, action) => ({
      ...state,
      cache: action.payload,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
