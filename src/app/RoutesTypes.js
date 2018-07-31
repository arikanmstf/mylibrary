// @flow
import * as React from 'react';
import type { LoginProps } from 'screens/login/LoginTypes';
import type { HomeProps } from 'screens/home/HomeTypes';
import type { RowProps } from 'ui/Row/types';
import type { LoaderContainerProps } from 'ui/Loader/types';

export type RoutesProps = {
  LoginScreen: React.ComponentType<LoginProps>,
  HomeScreen: React.ComponentType<HomeProps>,
  Router: Function,
  Switch: Function,
  Route: Function,
  Row: React.ComponentType<RowProps>,
  Loader: React.ComponentType<LoaderContainerProps>,
  PrivateRoute: Function,
  fetchInitialState: Function,
};
