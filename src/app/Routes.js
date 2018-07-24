// @flow
import React from 'react';
import * as routeNames from 'constants/routes/routeNames';
import type { RoutesProps } from './RoutesTypes';

const Routes = (props: RoutesProps) => {
  const {
    LoginScreen, Router, Switch, Route, Loader, Row,
  } = props;

  return (
    <Row style={{ height: '100%', margin: 0, padding: 0 }}>
      <Loader />
      <Router>
        <Switch>
          <Route exact path={routeNames.HOME} component={LoginScreen} />
          <Route exact path={routeNames.LOGIN} component={LoginScreen} />
        </Switch>
      </Router>
    </Row>
  );
};

export default Routes;
