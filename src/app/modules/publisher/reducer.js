/**
 * Reducers Template By => create-module script
 * @version 1.1.0
 *
 */

import { handleActions } from 'redux-actions';
import { updatePublisherAction, updatePublisherCardAction } from './actions';

const initialState = {
  publisher: null,
  card: null,
};

const reducer = new Map([
  [
    updatePublisherAction,
    (state, action) => ({
      ...state,
      publisher: action.payload || state.publisher,
    }),
  ],
  [
    updatePublisherCardAction,
    (state, action) => ({
      ...state,
      card: action.payload || state.card,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
