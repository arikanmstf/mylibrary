// @flow

import { createAction } from 'redux-actions';
import { SHOW_LOADER, HIDE_LOADER } from 'constants/actions/actionNames';
import type { State } from 'store/StateTypes';
import type { Immutable } from 'store/ImmutableTypes';

export const showLoader = createAction(SHOW_LOADER);
export const hideLoader = createAction(HIDE_LOADER);

export const mapStateToProps = (state: Immutable<State>) => ({
  visible: state.toJS().loader.visible,
});
