// @flow

import { createAction } from 'redux-actions';
import { LOADER_SHOW, LOADER_HIDE, LOADER_CLEAR } from 'constants/actions/actionNames';
import type { ImmutableState } from 'store/StateTypes';

export const showLoader = createAction(LOADER_SHOW);
export const hideLoader = createAction(LOADER_HIDE);
export const clearLoader = createAction(LOADER_CLEAR);

export const mapStateToProps = (state: ImmutableState) => ({
  visible: state.toJS().loader.visible,
});
