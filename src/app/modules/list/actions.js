/**
 * Actions Template By => create-module script
 * @version 1.1.0
 *
 */

// @flow
import logger from 'helpers/logger';
import { updateRows } from 'modules/row/actions';
import { showLoader, hideLoader } from 'ui/ModalLoader/actions';
import { LOADER_ADD_LIST } from 'constants/actions/loaderNames';

import type { Dispatch } from 'redux';
import type { ThunkAction } from 'redux-thunk';
import type { SubmitSearchListFormRequest } from 'screens/publicationAddToList/PublicationAddToListTypes';
import type { AddListFormRequest } from 'screens/publicationAddToList/addListForm/AddListFormTypes';

import { getLists, postList } from './services';

export const fetchLists = (params: SubmitSearchListFormRequest): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    logger.log('action: fetchListsStart');

    const result = await getLists(dispatch)(params);
    logger.log('action: fetchLists', result);

    await dispatch(updateRows(result));
    logger.log('action: fetchListsEnd');
  };
};

export const addList = (params: AddListFormRequest): ThunkAction => {
  return async (dispatch: Dispatch<*>, getState: Function) => {
    logger.log('action: addListStart');
    dispatch(showLoader(LOADER_ADD_LIST));

    const result = await postList(dispatch)(params);

    logger.log('action: addList', result);
    const { rows } = getState().toJS().row;
    const fixedRows = rows || [];
    fixedRows.push(result);

    await dispatch(updateRows(fixedRows));
    dispatch(hideLoader(LOADER_ADD_LIST));
    logger.log('action: addListEnd');
  };
};
