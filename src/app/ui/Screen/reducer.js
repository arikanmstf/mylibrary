/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import { showDrawer, hideDrawer } from './actions';

const initialState = {
  isDrawerOpen: false,
};

const reducer = new Map([
  [
    showDrawer,
    (state) => ({ ...state, isDrawerOpen: true }),
  ],
  [
    hideDrawer,
    (state) => ({ ...state, isDrawerOpen: false }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
