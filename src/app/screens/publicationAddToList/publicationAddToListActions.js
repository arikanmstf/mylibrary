/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';
import { fetchPublication } from 'modules/publication/actions';
import { fetchLists } from 'screens/home/homeActions';

export const mapStateToProps = (state: Immutable<State>) => ({
  rows: state.toJS().row.rows,
  publication: state.toJS().publication.publication,
});

export const mapDispatchToProps = {
  fetchLists,
  fetchPublication,
};
