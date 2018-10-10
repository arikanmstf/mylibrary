// @flow
import { createAction } from 'redux-actions';
import {
  ERROR_UPDATE_GENERAL,
  ERROR_UPDATE_MODAL,
} from 'constants/actions/actionNames';

import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const updateGeneralError = createAction(ERROR_UPDATE_GENERAL);
export const updateModalError = createAction(ERROR_UPDATE_MODAL);

export const mapStateToProps = (state: Immutable<State>) => ({
  generalError: state.toJS().error.generalError,
});

export const mapDispatchToProps = null;
