/**
 * Reducers Template By => create-module script
 * @version 1.1.0
 *
 */

import { handleActions } from 'redux-actions';
import { updateBook } from './actions';

const initialState = {
  book: null,
};

const reducer = new Map([
  [
    updateBook,
    (state, action) => ({
      ...state,
      publication: action.payload || state.publication,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
