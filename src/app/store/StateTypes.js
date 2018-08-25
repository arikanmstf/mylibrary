// @flow
import type { CardItem } from 'ui/CardList/types';

export type State = {|
  form: Object,
  home: {|
    cards: Array<CardItem>,
    totalPages: number,
    currentPage: number,
    searchQuery: string,
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
