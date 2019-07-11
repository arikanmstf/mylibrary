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
import {
  CARD_TYPE_PUBLICATION,
  CARD_TYPE_BOOK,
  CARD_TYPE_PUBLISHER,
} from 'modules/card/constants';
import { postPublicationDetail } from 'modules/publication/services';
import { postBookDetail } from 'modules/book/services';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';

export const submitCardDetailForm = async (form: Immutable<Object>, dispatch: Dispatch<*>) => {
  try {
    logger.log('action: submitCardDetailFormStart');
    dispatch(showLoader(LOADER_CARD_DETAIL_EDIT));
    const formData = form.toJS();
    const { type, id } = formData;
    let service;

    switch (type) {
      case CARD_TYPE_PUBLICATION: service = postPublicationDetail;
        break;
      case CARD_TYPE_BOOK: service = postBookDetail;
        break;
      case CARD_TYPE_PUBLISHER: service = () => () => {};
        break;
      default: throw new Error('Card type not found');
    }

    await service(dispatch)(id, formData);

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
