/**
 * Reducers Template By => create-module script
 * @version 1.0.0
 *
 */

import { handleActions } from 'redux-actions';
import { LOADER_DEFAULT } from 'constants/actions/loaderNames';
import { showLoader, hideLoader, clearLoader } from './actions';

const initialState = {
  visible: [],
};

const reducer = new Map([
  [
    showLoader,
    (state, action) => ({ ...state, visible: [...state.visible, action.payload || LOADER_DEFAULT] }),
  ],
  [
    hideLoader,
    (state, action) => ({ ...state, visible: state.visible.filter((v) => v !== (action.payload || LOADER_DEFAULT)) }),
  ],
  [
    clearLoader,
    (state) => ({ ...state, visible: initialState.visible }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
