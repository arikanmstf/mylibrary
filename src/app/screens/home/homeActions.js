/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import { fetchAndUpdateCards } from 'modules/card/actions';
import { toggleFavorite, toggleRead } from 'modules/publication/actions';

import type { ImmutableState } from 'store/StateTypes';

export const mapStateToProps = (state: ImmutableState) => ({
  cards: state.toJS().card.cards,
  listType: state.toJS().card.listType,
  fetchedPublicationListType: state.toJS().card.fetchedPublicationListType,
});

export const mapDispatchToProps = {
  fetchPublications: fetchAndUpdateCards,
  toggleFavorite,
  toggleRead,
};
