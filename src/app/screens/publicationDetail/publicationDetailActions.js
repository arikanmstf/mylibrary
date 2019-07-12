/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import { fetchPublication, toggleFavorite, toggleRead } from 'modules/publication/actions';

import type { ImmutableState } from 'store/StateTypes';

export const mapStateToProps = (state: ImmutableState) => ({
  card: state.toJS().publication.card,
});

export const mapDispatchToProps = {
  fetchData: fetchPublication,
  toggleFavorite,
  toggleRead,
};
