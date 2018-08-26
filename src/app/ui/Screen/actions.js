// @flow
import { createAction } from 'redux-actions';
import { SHOW_DRAWER, HIDE_DRAWER } from 'constants/actions/actionNames';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const showDrawer = createAction(SHOW_DRAWER);
export const hideDrawer = createAction(HIDE_DRAWER);

export const mapStateToProps = (state: Immutable<State>) => ({
  isDrawerOpen: state.toJS().screen.isDrawerOpen,
});

export const mapDispatchToProps = {
  hideDrawer,
};
