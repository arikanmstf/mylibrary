import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Theme from 'theme';

import App from './modules/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <ThemeProvider theme={Theme}>
      <App />
    </ThemeProvider>
  </Provider>
  , document.querySelector('.main-content'));
