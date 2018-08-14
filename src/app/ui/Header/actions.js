// @flow
import { showDrawer, hideDrawer } from 'ui/Screen/actions';
import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  showDrawer: () => dispatch(showDrawer()),
  hideDrawer: () => dispatch(hideDrawer()),
});

export const mapStateToProps = (state: Immutable<State>) => ({
  isDrawerOpen: state.toJS().screen.isDrawerOpen,
});
