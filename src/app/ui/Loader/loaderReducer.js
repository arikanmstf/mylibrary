/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import { showLoader, hideLoader } from './actions';

const initialState = {
  isVisible: false,
};

const reducer = new Map([
  [
    showLoader,
    (state) => ({ ...state, isVisible: true }),
  ],
  [
    hideLoader,
    (state) => ({ ...state, isVisible: false }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
