// @flow
import { fetchInitialState } from 'screens/login/loginActions';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  fetchInitialState: () => dispatch(fetchInitialState()),
});

export const mapStateToProps = (state: Immutable<State>) => ({
  isLoggedIn: state.toJS().login.isLoggedIn,
  isInitialized: state.toJS().login.isInitialized,
});
