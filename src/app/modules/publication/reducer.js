/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import { updatePublication } from './actions';

const initialState = {
  card: null,
  publication: null,
};

const reducer = new Map([
  [
    updatePublication,
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
