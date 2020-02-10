// @flow
import React, { Component, Fragment } from 'react';
import * as Font from 'expo-font';
import { Text } from 'react-native';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'store/reducers';

// Theme
import { StyleProvider, Root } from 'native-base';
import getTheme from 'native-base-theme/components';
import platform from 'native-base-theme/variables/platform';

// Routes
import { Routes } from 'ui/native';
import p from '../../../package.json';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

class App extends Component {
  state = {
    loading: true,
  };

  // async componentWillMount() {
  //   await Font.loadAsync({
  //     'simple-line-icons': require('native-base/Fonts/SimpleLineIcons.ttf'), // eslint-disable-line
  //   });
  //   this.setState({ loading: false });
  // }

  render() {
    const { loading } = this.state;

    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Fragment>
          <StyleProvider style={getTheme(platform)}>
            <Root>
              <Routes />
            </Root>
          </StyleProvider>
          <Text>{`Version: ${p ? p.version : 'not found'}`}</Text>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
