// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LoginScreen from 'screens/login/LoginWebContainer';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

const PrivateRoute = (
  {
    component: Component,
    isLoggedIn,
    isInitialized,
    ...rest
  }: {
    component: React.ComponentType<*>,
    isLoggedIn: boolean,
    isInitialized: boolean
  }
) => {
  console.log(isInitialized, isLoggedIn);

  if (isInitialized === null) {
    return null;
  }

  return isInitialized && isLoggedIn ? (
    <Route {...rest} render={(props) => (<Component {...props} />)} />
  ) : (
    <Route {...rest} render={(props) => (<LoginScreen {...props} />)} />
  );
};

export const mapStateToProps = (state: Immutable<State>) => ({
  isLoggedIn: state.toJS().login.isLoggedIn,
  isInitialized: state.toJS().login.isInitialized,
});

export default connect(mapStateToProps)(PrivateRoute);
