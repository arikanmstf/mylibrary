// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import * as routeNames from 'constants/routes/routeNames';
import { fetchInitialState } from 'screens/login/loginActions';

import type { Dispatch } from 'redux';
import type { RoutesProps } from './RoutesTypes';

class Routes extends React.PureComponent<RoutesProps> {
  componentDidMount() {
    const { fetchInitialState: initial } = this.props;
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
  fetchInitialState: () => dispatch(fetchInitialState()),
});

export default connect(null, mapDispatchToProps)(Routes);
