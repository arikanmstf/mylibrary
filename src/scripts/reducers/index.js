import { combineReducers } from 'redux';
import publicationReducer from './publicationReducer';
import publicationDetailsReducer from './publicationDetailsReducer';

const rootReducer = combineReducers({
	publications: publicationReducer,
	publication: publicationDetailsReducer,
});

export default rootReducer;
