/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import { dummyAction } from './writerDetailActions';

const initialState = {
  dummyField: null,
};

const reducer = new Map([
  [
    dummyAction,
    (state, action) => ({ ...state, dummyField: action.payload }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
