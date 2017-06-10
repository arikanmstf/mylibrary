import { combineReducers } from 'redux';
import PublicationReducer from './PublicationReducer';
import PublicationDetailsReducer from './PublicationDetailsReducer';
import WriterDetailsReducer from './WriterDetailsReducer';
import BookDetailsReducer from './BookDetailsReducer';
import ListDetailsReducer from './ListDetailsReducer';
import TagDetailsReducer from './TagDetailsReducer';
import PublisherDetailsReducer from './PublisherDetailsReducer';

const rootReducer = combineReducers({
  publications: PublicationReducer,
  publication: PublicationDetailsReducer,
  writer: WriterDetailsReducer,
  list: ListDetailsReducer,
  book: BookDetailsReducer,
  tag: TagDetailsReducer,
  publisher: PublisherDetailsReducer
});

export default rootReducer;
