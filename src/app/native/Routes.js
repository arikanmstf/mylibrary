import { connect } from 'helpers/connect';
import { MemoryRouter as Router, Switch } from 'react-router-native';
import { Loader, Row } from 'ui/native';

// Screens
import LoginScreen from 'screens/login/LoginNativeContainer';
import HomeScreen from 'screens/home/HomeNativeContainer';

import Routes from '../Routes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const mapRouteToProps = () => ({
  Router,
  Switch,
  Loader,
  Row,
  PrivateRoute,
  PublicRoute,
  LoginScreen,
  HomeScreen,
});

export default connect(mapRouteToProps)(Routes);
