// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-native';
import LoginScreen from 'screens/login/LoginNativeContainer';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }: {
  component: React.ComponentType<*>, isLoggedIn: boolean }) => {
  return isLoggedIn ? (
    <Route {...rest} render={(props) => (<Component {...props} />)} />
  ) : (
    <Route {...rest} render={(props) => (<LoginScreen {...props} />)} />
  );
};

export const mapStateToProps = (state: Immutable<State>) => ({
  isLoggedIn: state.toJS().login.isLoggedIn,
});

export default connect(mapStateToProps)(PrivateRoute);
