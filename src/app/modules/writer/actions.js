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
import { transformWriterToCard } from 'helpers/data/transform';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';

import { getWriterDetail } from './services';

export const updateWriter = createAction(WRITER_UPDATE_WRITER);
export const updateWriterCard = createAction(WRITER_UPDATE_CARD);

export const fetchWriter = (id: number): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    dispatch(showLoader(LOADER_CARD_DETAIL));

    logger.log('action: fetchWriterStart');

    const writer = await getWriterDetail(dispatch)({ id });
    const card = transformWriterToCard(writer);
    logger.log('action: fetchWriter');

    await Promise.all([
      dispatch(updateWriterCard(card)),
      dispatch(updateWriter(writer)),
    ]);

    logger.log('action: fetchWriterEnd');
    dispatch(hideLoader(LOADER_CARD_DETAIL));
  };
};
