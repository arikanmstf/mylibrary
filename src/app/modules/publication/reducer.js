/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import { updatePublication, updatePublicationCard } from './actions';

const initialState = {
  publication: null,
  card: null,
};

const reducer = new Map([
  [
    updatePublication,
    (state, action) => ({
      ...state,
      publication: action.payload || state.publication,
    }),
  ],
  [
    updatePublicationCard,
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
