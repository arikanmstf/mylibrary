// @flow
import { fetchAndAddCards, fetchAndUpdateCards, updateListType } from 'modules/card/actions';

import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const mapDispatchToProps = {
  addCards: fetchAndAddCards,
  fetchPublications: fetchAndUpdateCards,
  updateListType,
};

export const mapStateToProps = (state: Immutable<State>) => ({
  cards: state.toJS().card.cards,
  search: state.toJS().card.searchQuery,
  type: state.toJS().card.listType,
  isLoaderVisible: state.toJS().loader.visible,
});
