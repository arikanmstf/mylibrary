import { combineReducers } from 'redux';
import publicationReducer from './publicationReducer';

const rootReducer = combineReducers({
	publications: publicationReducer
});

export default rootReducer;
