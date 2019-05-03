/**
 * Actions Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow

import { createAction } from 'redux-actions';
import { PUBLISHER_UPDATE_CARD, PUBLISHER_UPDATE_PUBLISHER } from 'constants/actions/actionNames';
import { LOADER_CARD_DETAIL } from 'constants/actions/loaderNames';
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/ModalLoader/actions';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';

import { transformPublisherToCard } from './transformers';
import { getPublisherDetail } from './services';

export const updatePublisher = createAction(PUBLISHER_UPDATE_PUBLISHER);
export const updatePublisherCard = createAction(PUBLISHER_UPDATE_CARD);

export const fetchPublisher = (id: number): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    dispatch(showLoader(LOADER_CARD_DETAIL));

    logger.log('action: fetchPublisherStart');

    const publisher = await getPublisherDetail(dispatch)({ id });
    const card = transformPublisherToCard(publisher);
    logger.log('action: fetchPublisher');

    await Promise.all([
      dispatch(updatePublisherCard(card)),
      dispatch(updatePublisher(publisher)),
    ]);

    logger.log('action: fetchPublisherEnd');
    dispatch(hideLoader(LOADER_CARD_DETAIL));
  };
};
