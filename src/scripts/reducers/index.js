import { combineReducers } from 'redux';
import publicationReducer from './publicationReducer';
import publicationDetailsReducer from './publicationDetailsReducer';
import listsOfPublicationReducer from './listsOfPublicationReducer';

const rootReducer = combineReducers({
	publications: publicationReducer,
	publication: publicationDetailsReducer,
	lists: listsOfPublicationReducer
});

export default rootReducer;
