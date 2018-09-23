/**
 * Reducers Template By => create-module script
 * @version 1.1.0
 *
 */

import { handleActions } from 'redux-actions';
import { updateWriter, updateWriterCard } from './actions';

const initialState = {
  writer: null,
  card: null,
};

const reducer = new Map([
  [
    updateWriter,
    (state, action) => ({
      ...state,
      writer: action.payload || state.writer,
    }),
  ],
  [
    updateWriterCard,
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
