import { combineReducers } from 'redux';
import publicationReducer from './publicationReducer';
import publicationDetailsReducer from './publicationDetailsReducer';
import writerDetailsReducer from './writerDetailsReducer';
import bookDetailsReducer from './bookDetailsReducer';
import listDetailsReducer from './listDetailsReducer';

const rootReducer = combineReducers({
  publications: publicationReducer,
  publication: publicationDetailsReducer,
  writer: writerDetailsReducer,
  list: listDetailsReducer,
  book: bookDetailsReducer
});

export default rootReducer;
