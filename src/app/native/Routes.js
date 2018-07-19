import { connect } from 'helpers/connect';
import { MemoryRouter as Router, Switch, Route } from 'react-router-native';
// Screens
import LoginScreen from 'screens/login/LoginNativeContainer';
import Routes from '../Routes';

const mapRouteToProps = () => ({
  LoginScreen, Router, Switch, Route,
});

export default connect(mapRouteToProps)(Routes);
