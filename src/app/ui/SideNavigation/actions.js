// @flow
import { updateListType } from 'modules/card/actions';
import { hideDrawerAsync } from 'ui/Screen/actions';

import type { ImmutableState } from 'store/StateTypes';

export const mapStateToProps = (state: ImmutableState) => ({
  listType: state.toJS().card.listType,
});

export const mapDispatchToProps = {
  updateListType,
  hideDrawerAsync,
};
