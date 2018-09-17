/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import { fetchPublication } from 'modules/publication/actions';

import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const mapStateToProps = (state: Immutable<State>) => ({
  card: state.toJS().card.card,
});

export const mapDispatchToProps = {
  fetchPublication,
};