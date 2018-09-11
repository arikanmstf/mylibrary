// @flow
import type { CardItem } from 'ui/CardList/types';
import type { Row } from 'ui/RowList/types';
import type { PublicationDetail } from 'helpers/api/types';

export type State = {|
  form: Object,
  home: {|
    cards?: Array<CardItem>,
    totalPages: number,
    currentPage: number,
    searchQuery: string,
    isSearchPending: boolean,
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
  publication: {|
    card?: CardItem,
    publication?: PublicationDetail,
  |},
|};
