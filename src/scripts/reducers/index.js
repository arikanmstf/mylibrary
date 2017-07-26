import { combineReducers } from 'redux';

import ProfileReducer from 'modules/profile/ProfileReducer';
import TagListReducer from 'modules/tag-list/TagListReducer';
import { TagDetailsReducer, TagSearchReducer } from 'modules/tag-details/TagDetailsReducer';
import { ListDetailsReducer, ListSearchReducer } from 'modules/list-details/ListDetailsReducer';
import BookDetailsReducer from 'modules/book-details/BookDetailsReducer';
import ListListReducer from 'modules/list-list/ListListReducer';

import PublicationReducer from './PublicationReducer';
import PublicationDetailsReducer from './PublicationDetailsReducer';
import WriterDetailsReducer from './WriterDetailsReducer';
import PublisherDetailsReducer from './PublisherDetailsReducer';
import UserDetailsReducer from './UserDetailsReducer';
import WriterSearchReducer from './WriterSearchReducer';
import BookSearchReducer from './BookSearchReducer';
import PublisherSearchReducer from './PublisherSearchReducer';
import BookReducer from './BookReducer';
import WriterReducer from './WriterReducer';
import PublishersReducer from './PublishersReducer';
import UserReducer from './UserReducer';
import ContentReducer from './ContentReducer';
import { ModalReducer, ModalConfirmReducer } from './ModalReducer';

const rootReducer = combineReducers({
  publications: PublicationReducer,
  publication: PublicationDetailsReducer,
  writer: WriterDetailsReducer,
  list: ListDetailsReducer,
  book: BookDetailsReducer,
  tag: TagDetailsReducer,
  publisher: PublisherDetailsReducer,
  user: UserDetailsReducer,
  writerSearch: WriterSearchReducer,
  listSearch: ListSearchReducer,
  bookSearch: BookSearchReducer,
  publisherSearch: PublisherSearchReducer,
  tagSearch: TagSearchReducer,
  books: BookReducer,
  writers: WriterReducer,
  publishers: PublishersReducer,
  users: UserReducer,
  tags: TagListReducer,
  lists: ListListReducer,
  contentLoaded: ContentReducer,
  modalMessage: ModalReducer,
  onConfirm: ModalConfirmReducer,
  profile: ProfileReducer
});

export default rootReducer;
