/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import { createAction } from 'redux-actions';
import { PUBLICATION_UPDATE_CARD } from 'constants/actions/actionNames';
import { fetchPublication } from 'modules/publication/actions';

import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const updateCard = createAction(PUBLICATION_UPDATE_CARD);

export const mapStateToProps = (state: Immutable<State>) => ({
  card: state.toJS().publication.card,
});

export const mapDispatchToProps = {
  fetchPublication,
};
