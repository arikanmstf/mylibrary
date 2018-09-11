import { connect } from 'helpers/connect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loader, Row, Error } from 'ui';

// Screens
import LoginScreen from 'screens/login/LoginWebContainer';
import LogoutScreen from 'screens/logout/LogoutWebContainer';
import RegisterScreen from 'screens/register/RegisterWebContainer';
import HomeScreen from 'screens/home/HomeWebContainer';
import PublicationDetailScreen from 'screens/publicationDetail/PublicationDetailWebContainer';
import PublicationAddToListScreen from 'screens/publicationAddToList/PublicationAddToListWebContainer';

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
  PublicationAddToListScreen,
  Route,
});

export default connect(mapRouteToProps)(Routes);
