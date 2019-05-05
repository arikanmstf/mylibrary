// @flow
import { fetchAndUpdateCards, updateSearchQuery } from 'modules/card/actions';
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/ModalLoader/actions';
import { LOADER_SEARCH } from 'constants/actions/loaderNames';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
import type { SubmitSearchFormRequest } from './types';

export const onSubmit = async (form: Immutable<SubmitSearchFormRequest>, dispatch: Dispatch<*>) => {
  logger.log('submitSearchForm');
  const { search } = form.toJS();
  dispatch(updateSearchQuery(search));
  dispatch(showLoader(LOADER_SEARCH));
  await dispatch(fetchAndUpdateCards(false));
  dispatch(hideLoader(LOADER_SEARCH));
};
