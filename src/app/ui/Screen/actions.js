// @flow
import { createAction } from 'redux-actions';
import { SCREEN_SHOW_DRAWER, SCREEN_HIDE_DRAWER } from 'constants/actions/actionNames';
import { sleep } from 'helpers/data/sleep';

import type { ImmutableState } from 'store/StateTypes';
import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';

export const showDrawer = createAction(SCREEN_SHOW_DRAWER);
export const hideDrawer = createAction(SCREEN_HIDE_DRAWER);

export const hideDrawerAsync = (): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    dispatch(hideDrawer());
    await sleep(250);
  };
};
export const mapStateToProps = (state: ImmutableState) => ({
  isDrawerOpen: state.toJS().screen.isDrawerOpen,
});

export const mapDispatchToProps = {
  hideDrawer,
};
