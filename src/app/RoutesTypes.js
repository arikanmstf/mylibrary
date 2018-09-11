// @flow
import * as React from 'react';
import type { LoginProps } from 'screens/login/LoginTypes';
import type { LogoutProps } from 'screens/logout/LogoutTypes';
import type { RegisterProps } from 'screens/register/RegisterTypes';
import type { HomeProps } from 'screens/home/HomeTypes';
import type { PublicationAddToListProps } from 'screens/publicationAddToList/PublicationAddToListTypes';
import type { PublicationDetailProps } from 'screens/publicationDetail/PublicationDetailTypes';
import type { RowProps } from 'ui/Row/types';
import type { LoaderContainerProps } from 'ui/Loader/types';

export type RoutesProps = {
  LoginScreen: React.ComponentType<LoginProps>,
  LogoutScreen: React.ComponentType<LogoutProps>,
  RegisterScreen: React.ComponentType<RegisterProps>,
  HomeScreen: React.ComponentType<HomeProps>,
  PublicationDetailScreen: React.ComponentType<PublicationDetailProps>,
  PublicationAddToListScreen: React.ComponentType<PublicationAddToListProps>,
  Router: Function,
  Switch: Function,
  Route: Function,
  Row: React.ComponentType<RowProps>,
  Loader: React.ComponentType<LoaderContainerProps>,
  PrivateRoute: Function,
  PublicRoute: Function,
  fetchInitialState: Function,
};
