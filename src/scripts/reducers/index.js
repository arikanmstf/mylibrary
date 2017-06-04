import { combineReducers } from 'redux';
import publicationReducer from './publicationReducer';
import publicationDetailsReducer from './publicationDetailsReducer';
import listsOfPublicationReducer from './listsOfPublicationReducer';
import writerDetailsReducer from './writerDetailsReducer';

const rootReducer = combineReducers({
	publications: publicationReducer,
	publication: publicationDetailsReducer,
	lists: listsOfPublicationReducer,
	writer: writerDetailsReducer
});

export default rootReducer;
