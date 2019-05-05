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
import type { PublisherDetail } from 'helpers/api/types';

import { transformPublisherToCard } from './transformers';
import { getPublisherDetail } from './services';

export const updatePublisherAction = createAction(PUBLISHER_UPDATE_PUBLISHER);
export const updatePublisherCardAction = createAction(PUBLISHER_UPDATE_CARD);

export const updatePublisher = (publisher: PublisherDetail): ThunkAction => {
  return (dispatch: Dispatch<*>) => {
    dispatch(updatePublisherAction(publisher));
    dispatch(updatePublisherCardAction(transformPublisherToCard(publisher)));
  };
};

export const fetchPublisher = (id: number): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    dispatch(showLoader(LOADER_CARD_DETAIL));

    logger.log('action: fetchPublisherStart');

    const publisher = await getPublisherDetail(dispatch)({ id });
    logger.log('action: fetchPublisher');

    await Promise.all([
      dispatch(updatePublisher(publisher)),
    ]);

    logger.log('action: fetchPublisherEnd');
    dispatch(hideLoader(LOADER_CARD_DETAIL));
  };
};
