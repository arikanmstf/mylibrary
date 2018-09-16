// @flow
import { ComponentType } from 'react';
import type { LoginProps } from 'screens/login/LoginTypes';
import type { LogoutProps } from 'screens/logout/LogoutTypes';
import type { RegisterProps } from 'screens/register/RegisterTypes';
import type { HomeProps } from 'screens/home/HomeTypes';
import type { PublicationAddToListProps } from 'screens/publicationAddToList/PublicationAddToListTypes';
import type { PublicationDetailProps } from 'screens/publicationDetail/PublicationDetailTypes';
import type { DivProps } from 'ui/Div/types';
import type { LoaderContainerProps } from 'ui/Loader/types';

export type RoutesProps = {
  LoginScreen: ComponentType<LoginProps>,
  LogoutScreen: ComponentType<LogoutProps>,
  RegisterScreen: ComponentType<RegisterProps>,
  HomeScreen: ComponentType<HomeProps>,
  PublicationDetailScreen: ComponentType<PublicationDetailProps>,
  PublicationAddToListScreen: ComponentType<PublicationAddToListProps>,
  Router: Function,
  Switch: Function,
  Route: Function,
  Div: ComponentType<DivProps>,
  Loader: ComponentType<LoaderContainerProps>,
  PrivateRoute: Function,
  PublicRoute: Function,
  fetchInitialState: Function,
};
