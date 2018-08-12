import { combineReducers } from 'redux-immutablejs';
import { reducer as form } from 'redux-form/immutable';

import login from 'screens/login/loginReducer';
import loader from 'ui/Loader/loaderReducer';
import screen from 'ui/Screen/screenReducer';

const rootReducer = combineReducers({
  form,
  loader,
  login,
  screen,
});

export default rootReducer;
