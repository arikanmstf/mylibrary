// @flow
import React from 'react';
import { LOGIN } from 'constants/routes/routeNames';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import type { ComponentType } from 'react';
import { mapStateToProps } from './actions';

const PrivateRouteWeb = (
  {
    component: Component,
    isLoggedIn,
    isInitialized,
    isEditMode,
    ...rest
  }: {
    component: ComponentType<*>,
    isLoggedIn: boolean,
    isInitialized: boolean,
    isEditMode: boolean,
  }
) => {
  if (isInitialized === null) {
    return null;
  }

  return isInitialized && isLoggedIn ? (
    <Route {...rest} render={(props) => (<Component {...props} isEditMode={isEditMode} />)} />
  ) : (
    <Redirect to={LOGIN} />
  );
};

export default connect(mapStateToProps)(PrivateRouteWeb);
