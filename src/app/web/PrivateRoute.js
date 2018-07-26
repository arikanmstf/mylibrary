// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import LoginScreen from 'screens/login/LoginWebContainer';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }: {
  component: React.Component, isLoggedIn: boolean }) => {
  return isLoggedIn ? (
    <Route {...rest} render={(props) => (<Component {...props} />)} />
  ) : (
    <Route {...rest} render={(props) => (<LoginScreen {...props} />)} />
  );
};

export const mapStateToProps = (store) => ({
  isLoggedIn: store.toJS().login.isLoggedIn,
});

export default connect(mapStateToProps)(PrivateRoute);
