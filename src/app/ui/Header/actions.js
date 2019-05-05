// @flow
import { toggleDrawer } from 'ui/Screen/actions';
import fields from 'constants/forms/search';

import type { ImmutableState } from 'store/StateTypes';

export const mapDispatchToProps = {
  toggleDrawer,
};

export const mapStateToProps = (state: ImmutableState) => ({
  isDrawerOpen: state.toJS().screen.isDrawerOpen,
  initialValues: { [fields.SEARCH]: state.toJS().card.searchQuery },
});
