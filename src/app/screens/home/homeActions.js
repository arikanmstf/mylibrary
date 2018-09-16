/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import { fetchAndUpdateCards } from 'modules/card/actions';
import { fetchLists } from 'modules/list/actions';

import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const mapStateToProps = (state: Immutable<State>) => ({
  cards: state.toJS().card.cards,
  rows: state.toJS().row.rows,
});

export const mapDispatchToProps = {
  fetchPublications: fetchAndUpdateCards,
  fetchLists,
};
