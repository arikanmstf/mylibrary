/**
 * Actions Template By => create-module script
 * @version 1.0.1
 *
 */

// @flow
import { fetchPublisher } from 'modules/publisher/actions';
import type { ImmutableState } from 'store/StateTypes';

export const mapStateToProps = (state: ImmutableState) => ({
  card: state.toJS().publisher.card,
});

export const mapDispatchToProps = {
  fetchData: fetchPublisher,
};
