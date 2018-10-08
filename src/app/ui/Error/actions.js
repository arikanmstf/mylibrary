// @flow
import { createAction } from 'redux-actions';
import {
  ERROR_UPDATE_GENERAL,
  ERROR_UPDATE_MODAL,
} from 'constants/actions/actionNames';

export const updateGeneralError = createAction(ERROR_UPDATE_GENERAL);
export const updateModalError = createAction(ERROR_UPDATE_MODAL);

export const mapStateToProps = (state: Immutable<State>) => ({
  generalError: state.toJS().error.generalError,
  modalError: state.toJS().error.modalError,
});

export const mapDispatchToProps = {
  updateModalError,
};
