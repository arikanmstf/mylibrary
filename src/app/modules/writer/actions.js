/**
 * Actions Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow

import { createAction } from 'redux-actions';
import { WRITER_UPDATE_CARD, WRITER_UPDATE_WRITER } from 'constants/actions/actionNames';
import { LOADER_CARD_DETAIL } from 'constants/actions/loaderNames';
import logger from 'helpers/logger';
import { showLoader, hideLoader } from 'ui/ModalLoader/actions';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { WriterDetail } from 'helpers/api/types';

import { transformWriterToCard } from './transformers';
import { getWriterDetail } from './services';

export const updateWriterAction = createAction(WRITER_UPDATE_WRITER);
export const updateWriterCardAction = createAction(WRITER_UPDATE_CARD);

export const updateWriter = (writer: WriterDetail): ThunkAction => {
  return (dispatch: Dispatch<*>) => {
    dispatch(updateWriterAction(writer));
    dispatch(updateWriterCardAction(transformWriterToCard(writer)));
  };
};

export const fetchWriter = (id: number): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    dispatch(showLoader(LOADER_CARD_DETAIL));

    logger.log('action: fetchWriterStart');

    const writer = await getWriterDetail(dispatch)({ id });
    logger.log('action: fetchWriter');

    await Promise.all([
      dispatch(updateWriter(writer)),
    ]);

    logger.log('action: fetchWriterEnd');
    dispatch(hideLoader(LOADER_CARD_DETAIL));
  };
};
