import { combineReducers } from 'redux';
import PublicationReducer from './PublicationReducer';
import PublicationDetailsReducer from './PublicationDetailsReducer';
import WriterDetailsReducer from './WriterDetailsReducer';
import BookDetailsReducer from './BookDetailsReducer';
import ListDetailsReducer from './ListDetailsReducer';

const rootReducer = combineReducers({
  publications: PublicationReducer,
  publication: PublicationDetailsReducer,
  writer: WriterDetailsReducer,
  list: ListDetailsReducer,
  book: BookDetailsReducer
});

export default rootReducer;
