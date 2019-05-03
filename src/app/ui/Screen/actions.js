// @flow
import { createAction } from 'redux-actions';
import { SHOW_DRAWER, HIDE_DRAWER } from 'constants/actions/actionNames';
import { sleep } from 'helpers/data/sleep';

import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';
import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';

export const showDrawer = createAction(SHOW_DRAWER);
export const hideDrawer = createAction(HIDE_DRAWER);

export const hideDrawerAsync = (): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    dispatch(hideDrawer());
    await sleep(250);
  };
};
export const mapStateToProps = (state: Immutable<State>) => ({
  isDrawerOpen: state.toJS().screen.isDrawerOpen,
});

export const mapDispatchToProps = {
  hideDrawer,
};
