// @flow
import { fetchAndAddCards, fetchAndUpdateCards } from 'screens/home/homeActions';

import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const mapDispatchToProps = {
  addCards: fetchAndAddCards,
  fetchPublications: fetchAndUpdateCards,
};

export const mapStateToProps = (state: Immutable<State>) => ({
  cards: state.toJS().card.cards,
  search: state.toJS().card.searchQuery,
  isLoaderVisible: state.toJS().loader.isVisible,
});
