import { combineReducers } from 'redux';
import publicationReducer from './publicationReducer';
import loginPageReducer from './loginPageReducer';

const rootReducer = combineReducers({
	publications: publicationReducer
});

export default rootReducer;
