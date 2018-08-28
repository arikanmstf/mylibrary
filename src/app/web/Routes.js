import { connect } from 'helpers/connect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loader, Row, Error } from 'ui';

// Screens
import LoginScreen from 'screens/login/LoginWebContainer';
import LogoutScreen from 'screens/logout/LogoutWebContainer';
import RegisterScreen from 'screens/register/RegisterWebContainer';
import HomeScreen from 'screens/home/HomeWebContainer';

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
  Route,
});

export default connect(mapRouteToProps)(Routes);
