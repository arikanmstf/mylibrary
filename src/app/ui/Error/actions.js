// @flow
import { createAction } from 'redux-actions';
import {
  ERROR_UPDATE_GENERAL,
  ERROR_UPDATE_API,
} from 'constants/actions/actionNames';

export const updateGeneralError = createAction(ERROR_UPDATE_GENERAL);
export const updateApiError = createAction(ERROR_UPDATE_API);

export const mapStateToProps = (state: Immutable<State>) => ({
  generalError: state.toJS().error.generalError,
});
