// @flow
import { fetchAndAddCards, fetchAndUpdateCards } from 'screens/home/homeActions';

import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const mapDispatchToProps = {
  addCards: fetchAndAddCards,
  fetchCards: fetchAndUpdateCards,
};

export const mapStateToProps = (state: Immutable<State>) => ({
  cards: state.toJS().home.cards,
  search: state.toJS().home.searchQuery,
  isLoaderVisible: state.toJS().loader.isVisible,
});
