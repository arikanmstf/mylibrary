import { combineReducers } from 'redux';

import ProfileReducer from 'modules/profile/ProfileReducer';
import TagListReducer from 'modules/tag-list/TagListReducer';
import { TagDetailsReducer, TagSearchReducer } from 'modules/tag-details/TagDetailsReducer';
import { ListDetailsReducer, ListSearchReducer } from 'modules/list-details/ListDetailsReducer';
import BookDetailsReducer from 'modules/book-details/BookDetailsReducer';
import ListListReducer from 'modules/list-list/ListListReducer';
import PublicationDetailsReducer from 'modules/publication-details/PublicationDetailsReducer';
import PublicationListReducer from 'modules/publication-list/PublicationListReducer';
import PublisherDetailsReducer from 'modules/publisher-details/PublisherDetailsReducer';
import WriterDetailsReducer from 'modules/writer-details/WriterDetailsReducer';

import UserDetailsReducer from './UserDetailsReducer';
import WriterSearchReducer from './WriterSearchReducer';
import BookSearchReducer from './BookSearchReducer';
import PublisherSearchReducer from './PublisherSearchReducer';
import BookReducer from './BookReducer';
import WriterReducer from './WriterReducer';
import PublishersReducer from './PublishersReducer';
import UserReducer from './UserReducer';
import ContentReducer from './ContentReducer';
import DrawerReducer from './DrawerReducer';
import { ModalReducer, ModalConfirmReducer } from './ModalReducer';

const rootReducer = combineReducers({
  publications: PublicationListReducer,
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
  profile: ProfileReducer,
  drawerActive: DrawerReducer
});

export default rootReducer;
