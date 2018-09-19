/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow

import { fetchBook } from 'modules/book/actions';

import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const mapStateToProps = (state: Immutable<State>) => ({
  card: state.toJS().book.card,
});

export const mapDispatchToProps = {
  fetchBook,
};
