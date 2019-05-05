/**
 * Reducers Template By => create-module script
 * @version 1.1.0
 *
 */

import { handleActions } from 'redux-actions';
import { updateWriterAction, updateWriterCardAction } from './actions';

const initialState = {
  writer: null,
  card: null,
};

const reducer = new Map([
  [
    updateWriterAction,
    (state, action) => ({
      ...state,
      writer: action.payload || state.writer,
    }),
  ],
  [
    updateWriterCardAction,
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
