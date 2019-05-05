/**
 * Reducers Template By => create-module script
 * @version 1.1.0
 *
 */

import { handleActions } from 'redux-actions';
import { updateBookAction, updateBookCardAction } from './actions';

const initialState = {
  book: null,
  card: null,
};

const reducer = new Map([
  [
    updateBookAction,
    (state, action) => ({
      ...state,
      publication: action.payload || state.book,
    }),
  ],
  [
    updateBookCardAction,
    (state, action) => ({
      ...state,
      card: action.payload || state.book,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
