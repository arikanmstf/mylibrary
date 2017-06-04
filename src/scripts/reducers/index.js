import { combineReducers } from 'redux';
import publicationReducer from './publicationReducer';
import publicationDetailsReducer from './publicationDetailsReducer';
import listsOfPublicationReducer from './listsOfPublicationReducer';
import writerDetailsReducer from './writerDetailsReducer';
import bookDetailsReducer from './bookDetailsReducer';

const rootReducer = combineReducers({
	publications: publicationReducer,
	publication: publicationDetailsReducer,
	lists: listsOfPublicationReducer,
	writer: writerDetailsReducer,
	book: bookDetailsReducer
});

export default rootReducer;
