import { connect } from 'helpers/connect';
import { MemoryRouter as Router, Switch, Route } from 'react-router-native';
import { Loader, Row, Error } from 'ui/native';

// Screens
import LoginScreen from 'screens/login/LoginNativeContainer';
import LogoutScreen from 'screens/logout/LogoutNativeContainer';
import RegisterScreen from 'screens/register/RegisterNativeContainer';
import HomeScreen from 'screens/home/HomeNativeContainer';
import PublicationDetailScreen from 'screens/publicationDetail/PublicationDetailNativeContainer';

import Routes from '../Routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const mapRouteToProps = () => ({
  Router,
  Switch,
  Loader,
  Row,
  Error,
  PrivateRoute,
  PublicRoute,
  LoginScreen,
  LogoutScreen,
  RegisterScreen,
  HomeScreen,
  PublicationDetailScreen,
  Route,
});

export default connect(mapRouteToProps)(Routes);
