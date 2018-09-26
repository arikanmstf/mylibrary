/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import { fetchPublisher } from 'modules/publisher/actions';

export const mapStateToProps = (state: Immutable<State>) => ({
  card: state.toJS().publisher.card,
});

export const mapDispatchToProps = {
  fetchPublisher,
};
