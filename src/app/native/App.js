// @flow
import React, { Component } from 'react';
import { Font } from 'expo';

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

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

class App extends Component {
  state = {
    loading: true,
  };

  async componentWillMount() {
    await Font.loadAsync({
      Ionicons: require('native-base/Fonts/Ionicons.ttf'), // eslint-disable-line
    });
    this.setState({ loading: false });
  }

  render() {
    const { loading } = this.state;

    return !loading && (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <StyleProvider style={getTheme(platform)}>
          <Root>
            <Routes />
          </Root>
        </StyleProvider>
      </Provider>
    );
  }
}

export default App;
