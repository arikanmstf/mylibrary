import { connect } from 'helpers/connect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loader, Row } from 'ui';

// Screens
import LoginScreen from 'screens/login/LoginWebContainer';
import Routes from '../Routes';

const mapRouteToProps = () => ({
  LoginScreen, Router, Switch, Route, Loader, Row,
});

export default connect(mapRouteToProps)(Routes);
