/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import { updateCard, updatePublication } from './publicationDetailActions';

const initialState = {
  card: null,
  publication: null,
};

const reducer = new Map([
  [
    updateCard,
    (state, action) => ({
      ...state,
      card: action.payload || state.card,
    }),
  ],
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
