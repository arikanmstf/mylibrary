/**
 * Actions Template By => create-module script
 * @version 1.2.0
 *
 */

// @flow
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const mapStateToProps = (state: Immutable<State>) => ({
  card: state.toJS().user.card,
});

export const mapDispatchToProps = {};
