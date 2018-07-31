import { connect } from 'helpers/connect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loader, Row } from 'ui';

// Screens
import LoginScreen from 'screens/login/LoginWebContainer';
import HomeScreen from 'screens/home/HomeWebContainer';

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
