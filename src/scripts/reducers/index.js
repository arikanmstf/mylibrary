import { combineReducers } from 'redux';
import PublicationReducer from './PublicationReducer';
import PublicationDetailsReducer from './PublicationDetailsReducer';
import WriterDetailsReducer from './WriterDetailsReducer';
import BookDetailsReducer from './BookDetailsReducer';
import ListDetailsReducer from './ListDetailsReducer';
import TagDetailsReducer from './TagDetailsReducer';
import PublisherDetailsReducer from './PublisherDetailsReducer';
import WriterSearchReducer from './WriterSearchReducer';
import ListSearchReducer from './ListSearchReducer';
import BookSearchReducer from './BookSearchReducer';

const rootReducer = combineReducers({
  publications: PublicationReducer,
  publication: PublicationDetailsReducer,
  writer: WriterDetailsReducer,
  list: ListDetailsReducer,
  book: BookDetailsReducer,
  tag: TagDetailsReducer,
  publisher: PublisherDetailsReducer,
  writerSearch: WriterSearchReducer,
  listSearch: ListSearchReducer,
  bookSearch: BookSearchReducer
});

export default rootReducer;
