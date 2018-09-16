import { combineReducers } from 'redux-immutablejs';
import { reducer as form } from 'redux-form/immutable';

import card from 'modules/card/reducer';
import publication from 'modules/publication/reducer';

import home from 'screens/home/homeReducer';
import loader from 'ui/Loader/loaderReducer';
import login from 'screens/login/loginReducer';
import screen from 'ui/Screen/screenReducer';

const rootReducer = combineReducers({
  card,
  publication,
  form,
  home,
  loader,
  login,
  screen,
});

export default rootReducer;
