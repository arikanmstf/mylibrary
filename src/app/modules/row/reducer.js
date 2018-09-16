/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import {
  updateRows,
} from './actions';

const initialState = {
  rows: null,
};

const reducer = new Map([
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
