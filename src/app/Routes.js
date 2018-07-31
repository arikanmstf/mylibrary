// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import * as routeNames from 'constants/routes/routeNames';
import { fetchLoginState } from 'screens/login/loginActions';

import type { Dispatch } from 'redux';
import type { RoutesProps } from './RoutesTypes';

class Routes extends React.PureComponent<RoutesProps> {
  componentWillMount() {
    const { fetchLoginState: initial } = this.props;
    initial();
  }

  render() {
    const {
      Router,
      Switch,
      Route,
      Loader,
      Row,
      PrivateRoute,
      LoginScreen,
      HomeScreen,
    } = this.props;

    return (
      <Row style={{ height: '100%', margin: 0, padding: 0 }}>
        <Loader />
        <Router>
          <Switch>
            <PrivateRoute exact path={routeNames.HOME} component={HomeScreen} />
            <Route exact path={routeNames.LOGIN} component={LoginScreen} />
          </Switch>
        </Router>
      </Row>
    );
  }
}

export const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  fetchLoginState: () => dispatch(fetchLoginState()),
});

export default connect(null, mapDispatchToProps)(Routes);
