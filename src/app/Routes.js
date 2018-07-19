// @flow
import React from 'react';
import * as routeNames from 'constants/routes/routeNames';
import type { RoutesProps } from './RoutesTypes';

const Routes = (props: RoutesProps) => {
  const {
    LoginScreen, Router, Switch, Route,
  } = props;

  return (
    <Router>
      <Switch>
        <Route exact path={routeNames.HOME} component={LoginScreen} />
        <Route exact path={routeNames.LOGIN} component={LoginScreen} />
      </Switch>
    </Router>
  );
};

export default Routes;
