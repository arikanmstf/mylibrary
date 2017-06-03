import { combineReducers } from 'redux';
import publicationReducer from './publicationReducer';
import publicationDetailsReducer from './publicationDetailsReducer';
import listsOfPublicationReducer from './listsOfPublicationReducer';
import listByIdReducer from './listByIdReducer';

const rootReducer = combineReducers({
	publications: publicationReducer,
	publication: publicationDetailsReducer,
	lists: listsOfPublicationReducer,
	list: listByIdReducer
});

export default rootReducer;
