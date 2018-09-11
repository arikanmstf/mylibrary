// @flow
import { fetchAndAddCards, fetchAndUpdateCards } from 'screens/home/homeActions';

import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const mapDispatchToProps = {
  addCards: fetchAndAddCards,
  fetchPublications: fetchAndUpdateCards,
};

export const mapStateToProps = (state: Immutable<State>) => ({
  rows: state.toJS().home.rows,
});
