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

import { CARD_TYPES } from 'modules/card/constants';

import { PERMISSIONS } from 'modules/user/constants';
import { hasPermission } from 'modules/user/helpers';

import { postPublicationDetail } from 'modules/publication/services';
import { transformPublicationToCard } from 'modules/publication/transformers';
import { updatePublicationCardAction } from 'modules/publication/actions';

import { postBookDetail } from 'modules/book/services';
import { transformBookToCard } from 'modules/book/transformers';
import { updateBookCardAction } from 'modules/book/actions';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
import type { ImmutableState } from 'store/StateTypes';

export const submitCardDetailForm = async (form: Immutable<Object>, dispatch: Dispatch<*>) => {
  try {
    logger.log('action: submitCardDetailFormStart');
    dispatch(showLoader(LOADER_CARD_DETAIL_EDIT));
    const formData = form.toJS();
    const { type, id } = formData;
    let service = () => {};
    let transform = () => {};
    let update = null;

    switch (type) {
      case CARD_TYPES.PUBLICATION:
        service = postPublicationDetail;
        transform = transformPublicationToCard;
        update = updatePublicationCardAction;
        break;
      case CARD_TYPES.BOOK:
        service = postBookDetail;
        transform = transformBookToCard;
        update = updateBookCardAction;
        break;
      case CARD_TYPES.PUBLISHER: service = () => () => {};
        break;
      default: throw new Error('Card type not found');
    }

    dispatch(update(transform(await service(dispatch)(id, formData))));

    logger.log('action: submitCardDetailFormEnd');
  } finally {
    dispatch(hideLoader(LOADER_CARD_DETAIL_EDIT));
  }
};

export const initializeForm = (values) => (dispatch) => {
  dispatch(initialize(CARD_DETAIL_FORM_KEY, values));
};

export const mapStateToProps = (state: ImmutableState) => {
  const { permissions } = state.toJS().user;

  return {
    hasEditPublicationPermission: hasPermission(PERMISSIONS.EDIT_PUBLICATION, permissions),
    hasEditBookPermission: hasPermission(PERMISSIONS.EDIT_BOOK, permissions),
    hasEditWriterPermission: hasPermission(PERMISSIONS.EDIT_WRITER, permissions),
    hasEditPublisherPermission: hasPermission(PERMISSIONS.EDIT_PUBLISHER, permissions),
  };
};

export const mapDispatchToProps = {
  initializeForm,
};
