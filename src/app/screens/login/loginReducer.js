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
};

const reducer = new Map([
  [
    updateLoginState,
    (state, action) => ({
      ...state,
      isLoggedIn: !!(action.payload && action.payload.user),
      user: action.payload ? action.payload.user : null,
    }),
  ],
  [
    updateInitializeState,
    (state, action) => ({
      ...state,
      isInitialized: !!(action.payload && action.payload.user),
      user: action.payload ? action.payload.user : null,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
