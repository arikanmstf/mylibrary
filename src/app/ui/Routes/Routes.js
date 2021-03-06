/**
 * Web Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as routeNames from 'constants/routes/routeNames';
import getConfig from 'config/get';
import logger from 'helpers/logger';
import {
  ModalLoader,
  Div,
  GeneralError,
  ModalError,
} from 'ui';
import { CODE_404 } from 'ui/GeneralError/constants';

// Screens
import LoginScreen from 'screens/login';
import LogoutScreen from 'screens/logout';
import RegisterScreen from 'screens/register';
import HomeScreen from 'screens/home';
import PublicationDetailScreen from 'screens/publicationDetail';
import PublicationAddToListScreen from 'screens/publicationAddToList';
import BookDetailScreen from 'screens/bookDetail';
import WriterDetailScreen from 'screens/writerDetail';
import PublisherDetailScreen from 'screens/publisherDetail';
import ProfileScreen from 'screens/profile';

import PrivateRoute from './PrivateRouteWeb';
import PublicRoute from './PublicRouteWeb';

import { mapDispatchToProps } from './actions';
import type { RoutesProps } from './types';

const { homeURL } = getConfig();
logger.log(`homeURL is set to: ${homeURL}`);

const NotFound = () => (
  <GeneralError error={{ code: CODE_404 }} />
);

class Routes extends PureComponent<RoutesProps> {
  componentDidMount() {
    const { fetchInitialState: initial } = this.props;
    initial();
  }

  render() {
    return (
      <Div fullHeight style={{ marginTop: 0, padding: 0 }}>
        <GeneralError>
          <ModalLoader />
          <ModalError />
          <Router basename={homeURL}>
            <Switch>
              <PrivateRoute exact path={routeNames.LOGOUT} component={LogoutScreen} />
              <PrivateRoute exact path={routeNames.PROFILE} component={ProfileScreen} />
              <PrivateRoute exact path={routeNames.PUBLICATION_ADD_TO_LIST} component={PublicationAddToListScreen} />
              <PrivateRoute exact path={routeNames.PUBLICATION_DETAIL} component={PublicationDetailScreen} />
              <PrivateRoute exact path={routeNames.PUBLICATION_EDIT} component={PublicationDetailScreen} isEditMode />
              <PrivateRoute exact path={routeNames.BOOK_DETAIL} component={BookDetailScreen} />
              <PrivateRoute exact path={routeNames.BOOK_EDIT} component={BookDetailScreen} isEditMode />
              <PrivateRoute exact path={routeNames.WRITER_DETAIL} component={WriterDetailScreen} />
              <PrivateRoute exact path={routeNames.WRITER_EDIT} component={WriterDetailScreen} isEditMode />
              <PrivateRoute exact path={routeNames.PUBLISHER_DETAIL} component={PublisherDetailScreen} />
              <PrivateRoute exact path={routeNames.PUBLISHER_EDIT} component={PublisherDetailScreen} isEditMode />
              <PrivateRoute exact path={routeNames.HOME} component={HomeScreen} />

              <PublicRoute exact path={routeNames.LOGIN} component={LoginScreen} />
              <PublicRoute exact path={routeNames.REGISTER} component={RegisterScreen} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </GeneralError>
      </Div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Routes);
