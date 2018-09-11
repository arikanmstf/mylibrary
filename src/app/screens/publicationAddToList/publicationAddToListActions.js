/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';
import { fetchPublication, toggleList } from 'screens/publicationDetail/publicationDetailActions';
import { fetchLists } from 'screens/home/homeActions';

export const mapStateToProps = (state: Immutable<State>) => ({
  rows: state.toJS().home.rows,
  publication: state.toJS().publication.publication,
});

export const mapDispatchToProps = {
  fetchLists,
  toggleList,
  fetchPublication,
};
