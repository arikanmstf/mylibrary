// @flow
import type { CardItem } from 'ui/CardList/types';
import type { Row } from 'ui/RowList/types';
import type { PublicationDetail } from 'helpers/api/types';

export type State = {|
  form: Object,
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
