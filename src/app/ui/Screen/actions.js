// @flow
import { createAction } from 'redux-actions';
import { SHOW_DRAWER, HIDE_DRAWER } from 'constants/actions/actionNames';
import type { Dispatch } from 'redux';

export const showDrawer = createAction(SHOW_DRAWER);
export const hideDrawer = createAction(HIDE_DRAWER);

export const mapStateToProps = (state) => ({
  isDrawerOpen: state.toJS().screen.isDrawerOpen,
});

export const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  hideDrawer: () => dispatch(hideDrawer()),
});
