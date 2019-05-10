/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import {
  updatePublicationAction,
  updatePublicationCardAction,
  clearPublicationCardAction,
  clearPublicationAction,
} from './actions';

const initialState = {
  publication: null,
  card: null,
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
]);

export default handleActions(
  reducer,
  initialState
);
