/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow

import { fetchBook } from 'modules/book/actions';

import type { ImmutableState } from 'store/StateTypes';

export const mapStateToProps = (state: ImmutableState) => ({
  card: state.toJS().book.card,
});

export const mapDispatchToProps = {
  fetchBook,
};
