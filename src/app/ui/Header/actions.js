// @flow
import { showDrawer, hideDrawer, toggleDrawer } from 'ui/Screen/actions';
import { fetchAndUpdateCards, updateSearchQuery } from 'modules/card/actions';
import logger from 'helpers/logger';
import fields from 'constants/forms/search';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
import type { ImmutableState } from 'store/StateTypes';
import type { SubmitSearchFormRequest } from './types';

export const mapDispatchToProps = {
  toggleDrawer,
};

export const submitSearchForm = async (form: Immutable<SubmitSearchFormRequest>, dispatch: Dispatch<*>) => {
  logger.log('submitSearchForm');
  const { search } = form.toJS();
  dispatch(updateSearchQuery(search));
  dispatch(fetchAndUpdateCards(false));
};

export const mapStateToProps = (state: ImmutableState) => ({
  isDrawerOpen: state.toJS().screen.isDrawerOpen,
  initialValues: { [fields.SEARCH]: state.toJS().card.searchQuery },
});
