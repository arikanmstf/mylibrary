import { combineReducers } from 'redux';
import login from 'screens/login/loginReducer';

const rootReducer = combineReducers({
  login,
});

export default rootReducer;
