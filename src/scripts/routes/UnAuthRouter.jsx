import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from 'modules/login/LoginContainer';

const UnAuthRouter = () => (
  <Switch>
    <Route path="*" component={Login} />
  </Switch>
);

export default UnAuthRouter;
