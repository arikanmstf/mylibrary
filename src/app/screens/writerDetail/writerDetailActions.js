/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import { fetchWriter } from 'modules/writer/actions';
import type { ImmutableState } from 'store/StateTypes';

export const mapStateToProps = (state: ImmutableState) => ({
  card: state.toJS().writer.card,
});

export const mapDispatchToProps = {
  fetchWriter,
};
