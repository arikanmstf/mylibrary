/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import { fetchAndUpdateCards } from 'modules/card/actions';
import { toggleFavorite, toggleRead } from 'modules/publication/actions';

import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const mapStateToProps = (state: Immutable<State>) => ({
  cards: state.toJS().card.cards,
  listType: state.toJS().card.listType,
});

export const mapDispatchToProps = {
  fetchPublications: fetchAndUpdateCards,
  toggleFavorite,
  toggleRead,
};
