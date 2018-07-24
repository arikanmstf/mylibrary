import { combineReducers } from 'redux-immutablejs';
import { reducer as form } from 'redux-form/immutable';

import login from 'screens/login/loginReducer';
import loader from 'ui/Loader/loaderReducer';

const rootReducer = combineReducers({
  login,
  loader,
  form,
});

export default rootReducer;
