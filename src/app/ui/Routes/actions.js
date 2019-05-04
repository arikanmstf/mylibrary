// @flow
import { fetchInitialState } from 'screens/login/loginActions';

import type { Dispatch } from 'redux';
import type { ImmutableState } from 'store/StateTypes';

export const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  fetchInitialState: () => dispatch(fetchInitialState()),
});

export const mapStateToProps = (state: ImmutableState) => ({
  isLoggedIn: state.toJS().user.isLoggedIn,
  isInitialized: state.toJS().user.isInitialized,
});
