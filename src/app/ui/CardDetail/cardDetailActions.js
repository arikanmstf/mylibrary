/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import logger from 'helpers/logger';
import { initialize } from 'redux-form';
import { showLoader, hideLoader } from 'ui/ModalLoader/actions';
import { LOADER_CARD_DETAIL_EDIT } from 'constants/actions/loaderNames';
import { CARD_DETAIL_FORM_KEY } from 'constants/forms/card';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';

export const submitCardDetailForm = async (form: Immutable<Object>, dispatch: Dispatch<*>) => {
  try {
    logger.log('action: submitCardDetailFormStart');
    dispatch(showLoader(LOADER_CARD_DETAIL_EDIT));

    logger.log('action: submitCardDetailFormEnd');
  } finally {
    dispatch(hideLoader(LOADER_CARD_DETAIL_EDIT));
  }
};

export const initializeForm = (values) => (dispatch) => {
  dispatch(initialize(CARD_DETAIL_FORM_KEY, values));
};

export const mapDispatchToProps = {
  initializeForm,
};
