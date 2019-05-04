// @flow
import { fetchAndAddCards, fetchAndUpdateCards, updateListType } from 'modules/card/actions';

import type { ImmutableState } from 'store/StateTypes';

export const mapDispatchToProps = {
  addCards: fetchAndAddCards,
  fetchPublications: fetchAndUpdateCards,
  updateListType,
};

export const mapStateToProps = (state: ImmutableState) => ({
  cards: state.toJS().card.cards,
  search: state.toJS().card.searchQuery,
  type: state.toJS().card.listType,
  isLoaderVisible: state.toJS().loader.visible,
});
