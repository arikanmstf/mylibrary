/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import { showCenterLoader, hideCenterLoader } from './actions';

const initialState = {
  isVisible: false,
};

const reducer = new Map([
  [
    showCenterLoader,
    (state) => ({ ...state, isVisible: true }),
  ],
  [
    hideCenterLoader,
    (state) => ({ ...state, isVisible: false }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
