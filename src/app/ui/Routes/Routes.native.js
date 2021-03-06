/**
 * Native Component Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import React, { PureComponent } from 'react';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import * as routeNames from 'constants/routes/routeNames';

import Div from 'ui/Div';
import GeneralError from 'ui/GeneralError';
import ModalError from 'ui/ModalError';
import ModalLoader from 'ui/ModalLoader';

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

import { mapStateToProps, mapDispatchToProps } from './actions';
import type { RoutesProps } from './types';

const AppStack = createStackNavigator(
  {
    [routeNames.HOME]: HomeScreen,
    [routeNames.LOGOUT]: LogoutScreen,
    [routeNames.PUBLICATION_DETAIL]: PublicationDetailScreen,
    [routeNames.PUBLICATION_EDIT]: PublicationDetailScreen,
    [routeNames.PUBLICATION_ADD_TO_LIST]: PublicationAddToListScreen,
    [routeNames.BOOK_DETAIL]: BookDetailScreen,
    [routeNames.BOOK_EDIT]: BookDetailScreen,
    [routeNames.WRITER_DETAIL]: WriterDetailScreen,
    [routeNames.WRITER_EDIT]: WriterDetailScreen,
    [routeNames.PUBLISHER_DETAIL]: PublisherDetailScreen,
    [routeNames.PUBLISHER_EDIT]: PublisherDetailScreen,
    [routeNames.PROFILE]: ProfileScreen,
  },
  {
    initialRouteName: routeNames.HOME,
    headerMode: 'none',
  }
);

const AuthStack = createStackNavigator(
  {
    [routeNames.LOGIN]: LoginScreen,
    [routeNames.REGISTER]: RegisterScreen,
  },
  {
    initialRouteName: routeNames.LOGIN,
    headerMode: 'none',
  }
);

class Routes extends PureComponent<RoutesProps> {
  componentDidMount() {
    const { fetchInitialState: initial } = this.props;
    initial();
  }

  render() {
    const { isInitialized, isLoggedIn } = this.props;
    if (isInitialized === null) {
      return null;
    }

    const RootStack = isInitialized && isLoggedIn ? AppStack : AuthStack;

    return (
      <Div fullHeight style={{ marginTop: 0, padding: 0 }}>
        <GeneralError>
          <ModalLoader />
          <ModalError />
          <RootStack />
        </GeneralError>
      </Div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
