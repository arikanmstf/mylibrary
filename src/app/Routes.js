// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import * as routeNames from 'constants/routes/routeNames';
import { fetchInitialState } from 'screens/login/loginActions';
import getConfig from 'config/get';
import logger from 'helpers/logger';

import type { Dispatch } from 'redux';
import type { RoutesProps } from './RoutesTypes';

const { homeURL } = getConfig();
logger.log(`homeURL is set to: ${homeURL}`);

// TODO: ErrorScreen
const ErrorScreen = () => (
  <h1>404 Not Found.</h1>
);

class Routes extends React.PureComponent<RoutesProps> {
  componentDidMount() {
    const { fetchInitialState: initial } = this.props;
    initial();
  }

  render() {
    const {
      Error,
      Router,
      Switch,
      Loader,
      Row,
      PrivateRoute,
      PublicRoute,
      Route,
      LoginScreen,
      LogoutScreen,
      HomeScreen,
      RegisterScreen,
    } = this.props;

    return (
      <Row fullHeight style={{ marginTop: 0, padding: 0 }}>
        <Error>
          <Loader />
          <Router basename={homeURL}>
            <Switch>
              <PrivateRoute exact path={routeNames.HOME} component={HomeScreen} />
              <PublicRoute exact path={routeNames.LOGIN} component={LoginScreen} />
              <PrivateRoute exact path={routeNames.LOGOUT} component={LogoutScreen} />
              <PublicRoute exact path={routeNames.REGISTER} component={RegisterScreen} />
              <Route component={ErrorScreen} />
            </Switch>
          </Router>
        </Error>
      </Row>
    );
  }
}

export const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  fetchInitialState: () => dispatch(fetchInitialState()),
});

export default connect(null, mapDispatchToProps)(Routes);
