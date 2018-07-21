// @flow
import React from 'react';
import { injectGlobal } from 'styled-components';
import font from 'assets/fonts/libre-baskerville.regular.ttf';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'store/reducers';

// Theme
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import * as COLOR from 'constants/theme/color';

// Routes
import Routes from './Routes';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLOR.green500,
    },
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: COLOR.white,
      },
    },
  },
  typography: {
    fontFamily: '"Baskerville", "Helvetica", "Arial", sans-serif',
  },
});
// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: 'Baskerville';
    src: url('${font}') format('opentype');
  }
`;

const App = () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <MuiThemeProvider theme={theme}>
        <Routes />
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
