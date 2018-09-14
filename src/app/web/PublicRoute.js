// @flow
import React, { ComponentType } from 'react';
import { HOME } from 'constants/routes/routeNames';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

const PublicRoute = (
  {
    component: Component,
    isLoggedIn,
    isInitialized,
    ...rest
  }: {
    component: ComponentType<*>,
    isLoggedIn: boolean,
    isInitialized: boolean
  }
) => {
  if (isInitialized === null) {
    return null;
  }

  return isInitialized && isLoggedIn ? (
    <Redirect to={HOME} />
  ) : (
    <Route {...rest} render={(props) => (<Component {...props} />)} />
  );
};

export const mapStateToProps = (state: Immutable<State>) => ({
  isLoggedIn: state.toJS().login.isLoggedIn,
  isInitialized: state.toJS().login.isInitialized,
});

export default connect(mapStateToProps)(PublicRoute);
