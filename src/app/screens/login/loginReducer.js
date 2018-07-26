/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import { updateLoginState } from './loginActions';

const initialState = {
  isLoggedIn: false,
};

const reducer = new Map([
  [
    updateLoginState,
    (state, action) => ({ ...state, isLoggedIn: !!(action.payload && action.payload.user) }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
