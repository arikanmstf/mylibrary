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

class Routes extends React.PureComponent<RoutesProps> {
  componentDidMount() {
    const { fetchInitialState: initial } = this.props;
    initial();
  }

  render() {
    const {
      Router,
      Switch,
      Loader,
      Row,
      PrivateRoute,
      PublicRoute,
      LoginScreen,
      HomeScreen,
      RegisterScreen,
    } = this.props;

    return (
      <Row style={{ height: '100%', marginTop: 0, padding: 0 }}>
        <Loader />
        <Router basename={homeURL}>
          <Switch>
            <PrivateRoute exact path={routeNames.HOME} component={HomeScreen} />
            <PublicRoute exact path={routeNames.LOGIN} component={LoginScreen} />
            <PublicRoute exact path={routeNames.REGISTER} component={RegisterScreen} />
          </Switch>
        </Router>
      </Row>
    );
  }
}

export const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  fetchInitialState: () => dispatch(fetchInitialState()),
});

export default connect(null, mapDispatchToProps)(Routes);
