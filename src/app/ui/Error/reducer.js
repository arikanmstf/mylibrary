import { handleActions } from 'redux-actions';
import { updateGeneralError, updateApiError } from './actions';

const initialState = {
  generalError: null,
  apiError: null,
};

const reducer = new Map([
  [
    updateGeneralError,
    (state, action) => ({
      ...state,
      generalError: action.payload || state.generalError,
    }),
  ],
  [
    updateApiError,
    (state, action) => ({
      ...state,
      apiError: action.payload || state.apiError,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
