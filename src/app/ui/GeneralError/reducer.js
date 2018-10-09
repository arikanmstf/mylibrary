import { handleActions } from 'redux-actions';
import { updateGeneralError, updateModalError } from './actions';

const initialState = {
  generalError: null,
  modalError: null,
};

const reducer = new Map([
  [
    updateGeneralError,
    (state, action) => ({
      ...state,
      generalError: action.payload,
    }),
  ],
  [
    updateModalError,
    (state, action) => ({
      ...state,
      modalError: action.payload,
    }),
  ],
]);

export default handleActions(
  reducer,
  initialState
);
