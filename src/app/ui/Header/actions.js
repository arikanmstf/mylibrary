// @flow
import { showDrawer, hideDrawer } from 'ui/Screen/actions';
import { fetchAndUpdateCards } from 'modules/card/actions';
import logger from 'helpers/logger';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
import type { State } from 'store/StateTypes';
import type { SubmitSearchFormRequest } from './types';

export const mapDispatchToProps = {
  showDrawer,
  hideDrawer,
};

export const submitSearchForm = async (form: Immutable<SubmitSearchFormRequest>, dispatch: Dispatch<*>) => {
  logger.log('submitSearchForm');
  dispatch(fetchAndUpdateCards(form.toJS(), false));
};

export const mapStateToProps = (state: Immutable<State>) => ({
  isDrawerOpen: state.toJS().screen.isDrawerOpen,
});
