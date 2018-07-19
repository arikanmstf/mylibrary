// @flow
import * as React from 'react';
import type { LoginProps } from 'screens/login/LoginTypes';

export type RoutesProps = {
  LoginScreen: React.ComponentType<LoginProps>,
  Router: Function,
  Switch: Function,
  Route: Function,
};
