// @flow

import { createAction } from 'redux-actions';
import { SHOW_LOADER, HIDE_LOADER, CLEAR_LOADER } from 'constants/actions/actionNames';
import type { ImmutableState } from 'store/StateTypes';

export const showLoader = createAction(SHOW_LOADER);
export const hideLoader = createAction(HIDE_LOADER);
export const clearLoader = createAction(CLEAR_LOADER);

export const mapStateToProps = (state: ImmutableState) => ({
  visible: state.toJS().loader.visible,
});
