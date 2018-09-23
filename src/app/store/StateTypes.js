// @flow
import type { CardItem } from 'modules/card/types';
import type { Row } from 'ui/RowList/types';
import type { PublicationDetail, BookDetail, WriterDetail } from 'helpers/api/types';

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
    searchQuery: string,
    isSearchPending: boolean,
  |},
  centerLoader: {|
    isVisible: boolean,
  |},
  publication: {|
    publication?: PublicationDetail,
    card?: CardItem,
  |},
  row: {|
    rows?: Array<Row>,
  |},
  loader: {|
    isVisible: boolean,
  |},
  login: {|
    isLoggedIn: boolean,
    isInitialized: boolean,
  |},
  screen: {|
    isDrawerOpen: boolean,
  |},
  writer: {|
    writer?: WriterDetail,
    card?: CardItem,
  |},
|};
