// @flow
import { showDrawer, hideDrawer } from 'ui/Screen/actions';
import type { Dispatch } from 'redux';

export const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  showDrawer: () => dispatch(showDrawer()),
  hideDrawer: () => dispatch(hideDrawer()),
});

export const mapStateToProps = (state) => ({
  isDrawerOpen: state.toJS().screen.isDrawerOpen,
});
