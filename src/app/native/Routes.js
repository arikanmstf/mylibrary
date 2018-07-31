import { connect } from 'helpers/connect';
import { MemoryRouter as Router, Switch, Route } from 'react-router-native';
import { Loader, Row } from 'ui/native';

// Screens
import LoginScreen from 'screens/login/LoginNativeContainer';
import HomeScreen from 'screens/home/HomeNativeContainer';

import Routes from '../Routes';
import PrivateRoute from './PrivateRoute';

const mapRouteToProps = () => ({
  Router,
  Switch,
  Route,
  Loader,
  Row,
  PrivateRoute,
  LoginScreen,
  HomeScreen,
});

export default connect(mapRouteToProps)(Routes);
