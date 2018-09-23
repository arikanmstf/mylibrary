/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import { fetchWriter } from 'modules/writer/actions';

export const mapStateToProps = (state: Immutable<State>) => ({
  card: state.toJS().writer.card,
});

export const mapDispatchToProps = {
  fetchWriter,
};
