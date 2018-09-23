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
import { ModalLoader, Div, Error } from 'ui/native';

// Screens
import LoginScreen from 'screens/login/LoginNativeContainer';
import LogoutScreen from 'screens/logout/LogoutNativeContainer';
import RegisterScreen from 'screens/register/RegisterNativeContainer';
import HomeScreen from 'screens/home/HomeNativeContainer';
import PublicationDetailScreen from 'screens/publicationDetail/PublicationDetailNativeContainer';
import PublicationAddToListScreen from 'screens/publicationAddToList/PublicationAddToListNativeContainer';
import BookDetailScreen from 'screens/bookDetail/BookDetailNativeContainer';
import WriterDetailScreen from 'screens/writerDetail/WriterDetailNativeContainer';

import { mapStateToProps, mapDispatchToProps } from './actions';
import type { RoutesProps } from './types';

const AppStack = createStackNavigator(
  {
    [routeNames.HOME]: HomeScreen,
    [routeNames.LOGOUT]: LogoutScreen,
    [routeNames.PUBLICATION_DETAIL]: PublicationDetailScreen,
    [routeNames.PUBLICATION_ADD_TO_LIST]: PublicationAddToListScreen,
    [routeNames.BOOK_DETAIL]: BookDetailScreen,
    [routeNames.WRITER_DETAIL]: WriterDetailScreen,
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
        <Error>
          <ModalLoader />
          <RootStack />
        </Error>
      </Div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
