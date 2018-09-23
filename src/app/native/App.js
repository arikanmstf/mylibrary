// @flow
import React from 'react';

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

const App = () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <StyleProvider style={getTheme(platform)}>
        <Root>
          <Routes />
        </Root>
      </StyleProvider>
    </Provider>
  );
};

export default App;
