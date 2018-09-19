/**
 * Reducers Template By => create-module script
 * @version 1.1.0
 *
 */

import { handleActions } from 'redux-actions';
import { updateBook, updateBookCard } from './actions';

const initialState = {
  book: null,
  card: null,
};

const reducer = new Map([
  [
    updateBook,
    (state, action) => ({
      ...state,
      publication: action.payload || state.book,
    }),
  ],
  [
    updateBookCard,
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
