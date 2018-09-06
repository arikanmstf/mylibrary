import { combineReducers } from 'redux-immutablejs';
import { reducer as form } from 'redux-form/immutable';

import home from 'screens/home/homeReducer';
import loader from 'ui/Loader/loaderReducer';
import login from 'screens/login/loginReducer';
import screen from 'ui/Screen/screenReducer';
import publication from 'screens/publicationDetail/publicationDetailReducer';

const rootReducer = combineReducers({
  form,
  home,
  loader,
  login,
  screen,
  publication,
});

export default rootReducer;
