// @flow
import { updateListType } from 'modules/card/actions';
import { hideDrawerAsync } from 'ui/Screen/actions';

import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';

export const mapStateToProps = (state: Immutable<State>) => ({
  listType: state.toJS().card.listType,
});

export const mapDispatchToProps = {
  updateListType,
  hideDrawerAsync,
};
