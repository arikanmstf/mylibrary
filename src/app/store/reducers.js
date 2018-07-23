import { combineReducers } from 'redux-immutablejs';
import { reducer as form } from 'redux-form/immutable';

import login from 'screens/login/loginReducer';

const rootReducer = combineReducers({
  login,
  form,
});

export default rootReducer;
