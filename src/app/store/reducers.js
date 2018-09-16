import { combineReducers } from 'redux-immutablejs';
import { reducer as form } from 'redux-form/immutable';

import card from 'modules/card/reducer';
import publication from 'modules/publication/reducer';
import row from 'modules/row/reducer';

import loader from 'ui/Loader/loaderReducer';
import login from 'screens/login/loginReducer';
import screen from 'ui/Screen/screenReducer';

const rootReducer = combineReducers({
  form,
  card,
  publication,
  row,
  loader,
  login,
  screen,
});

export default rootReducer;
