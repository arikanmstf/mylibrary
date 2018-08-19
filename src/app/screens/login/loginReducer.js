/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import { updateLoginState, updateInitializeState } from './loginActions';

const initialState = {
  isLoggedIn: null,
  isInitialized: null,
  user: null,
  token: null,
};

const reducer = new Map([
  [
    updateLoginState,
    (state, action) => ({
      ...state,
      isLoggedIn: !!(action.payload && action.payload.user),
      user: action.payload ? action.payload.user : initialState.user,
      token: action.payload ? action.payload.token : initialState.token,
    }),
  ],
  [
    updateInitializeState,
    (state, action) => ({
      ...state,
      isInitialized: !!(action.payload && action.payload.user),
      user: action.payload ? action.payload.user : initialState.user,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
