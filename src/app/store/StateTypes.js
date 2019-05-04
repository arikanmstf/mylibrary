// @flow
import type { CardItem } from 'modules/card/types';
import type { Row } from 'ui/RowList/types';
import type {
  PublicationDetail,
  BookDetail,
  WriterDetail,
  PublisherDetail,
} from 'helpers/api/types';
import type { GeneralError } from 'ui/GeneralError/types';
import type { ModalError } from 'ui/ModalError/types';
import type { Immutable } from 'store/ImmutableTypes';


export type State = {|
  form: Object,
  book: {|
    book: BookDetail,
    card?: CardItem,
  |},
  card: {|
    cards?: Array<CardItem>,
    totalPages: number,
    currentPage: number,
    searchQuery?: string,
    listType?: string,
    isSearchPending: boolean,
  |},
  centerLoader: {|
    isVisible: boolean,
  |},
  error: {|
    generalError: GeneralError,
    modalError?: ModalError,
  |},
  publication: {|
    publication?: PublicationDetail,
    card?: CardItem,
  |},
  publisher: {|
    publisher?: PublisherDetail,
    card?: CardItem,
  |},
  row: {|
    rows?: Array<Row>,
  |},
  loader: {|
    visible: Array<*>,
  |},
  user: {|
    isLoggedIn: boolean,
    isInitialized: boolean,
    card?: CardItem,
  |},
  screen: {|
    isDrawerOpen?: boolean,
  |},
  writer: {|
    writer?: WriterDetail,
    card?: CardItem,
  |},
|};

export type ImmutableState = Immutable<State>;
