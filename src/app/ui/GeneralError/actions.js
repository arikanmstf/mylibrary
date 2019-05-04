// @flow
import { createAction } from 'redux-actions';
import {
  ERROR_UPDATE_GENERAL,
  ERROR_UPDATE_MODAL,
} from 'constants/actions/actionNames';

import type { ImmutableState } from 'store/StateTypes';

export const updateGeneralError = createAction(ERROR_UPDATE_GENERAL);
export const updateModalError = createAction(ERROR_UPDATE_MODAL);

export const mapStateToProps = (state: ImmutableState) => ({
  generalError: state.toJS().error.generalError,
});

export const mapDispatchToProps = null;
