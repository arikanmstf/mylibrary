/**
 * Actions Template By => create-module script
 * @version 1.2.0
 *
 */

// @flow
import type { ImmutableState } from 'store/StateTypes';

export const mapStateToProps = (state: ImmutableState) => ({
  card: state.toJS().user.card,
});

export const mapDispatchToProps = {};
