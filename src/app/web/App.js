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
import { green500, white } from 'constants/theme/color';

// Routes
import Routes from './Routes';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const theme = createMuiTheme({
  palette: {
    primary: {
      main: green500,
    },
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: white,
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
  
  body {
      margin: 0;
      padding: 0;
    }

    html, body {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    body > * {
      flex-shrink: 0;
    }
    
    #app {
      display: flex;
      flex-grow: 1;
    }
    
    #app > * {
      flex-grow: 1;
      flex-shrink: 0;
    }

  a {
    text-decoration: none;
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
