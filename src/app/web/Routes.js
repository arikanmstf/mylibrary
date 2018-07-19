import { connect } from 'helpers/connect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Screens
import LoginScreen from 'screens/login/LoginWebContainer';
import Routes from '../Routes';

const mapRouteToProps = () => ({
  LoginScreen, Router, Switch, Route,
});

export default connect(mapRouteToProps)(Routes);
