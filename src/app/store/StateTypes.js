// @flow
import type { CardItem } from 'modules/card/types';
import type { Row } from 'ui/RowList/types';
import type { PublicationDetail, BookDetail } from 'helpers/api/types';

export type State = {|
  form: Object,
  book: {|
    book: BookDetail,
  |},
  card: {|
    card?: CardItem,
    cards?: Array<CardItem>,
    totalPages: number,
    currentPage: number,
    searchQuery: string,
    isSearchPending: boolean,
  |},
  publication: {|
    publication?: PublicationDetail,
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
|};
