/**
 * Reducers Template By => create-module script
 * @version 1.2.0
 *
 */

import { handleActions } from 'redux-actions';
import { updateLoginState, updateInitializeState } from './actions';
import { transformUserToCard } from './transformers';

const initialState = {
  isLoggedIn: null,
  isInitialized: null,
  card: null,
  token: null,
  permissions: [],
};

const reducer = new Map([
  [
    updateLoginState,
    (state, action) => ({
      ...state,
      isLoggedIn: !!(action.payload && action.payload.user),
      card: action.payload ? transformUserToCard(action.payload.user) : initialState.user,
      token: action.payload ? action.payload.token : initialState.token,
      permissions: action.payload ? action.payload.permissions : initialState.permissions,
    }),
  ],
  [
    updateInitializeState,
    (state, action) => ({
      ...state,
      isInitialized: !!(action.payload && action.payload.user),
      card: action.payload ? transformUserToCard(action.payload.user) : initialState.card,
      permissions: action.payload ? action.payload.permissions : initialState.permissions,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
