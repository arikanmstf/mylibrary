import { combineReducers } from 'redux';
import publicationReducer from './publicationReducer';
import publicationDetailsReducer from './publicationDetailsReducer';
import writerDetailsReducer from './writerDetailsReducer';
import bookDetailsReducer from './bookDetailsReducer';

const rootReducer = combineReducers({
	publications: publicationReducer,
	publication: publicationDetailsReducer,
	writer: writerDetailsReducer,
	book: bookDetailsReducer
});

export default rootReducer;
