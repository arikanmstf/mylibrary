// @flow
import React, { ComponentType } from 'react';
import { HOME } from 'constants/routes/routeNames';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { mapStateToProps } from './actions';

const PublicRouteWeb = (
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

export default connect(mapStateToProps)(PublicRouteWeb);
