/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import logger from 'helpers/logger';
import { createAction } from 'redux-actions';
import { showLoader, hideLoader } from 'ui/ModalLoader/actions';
import storage, { LOGIN_STATE } from 'helpers/storage';
import { UPDATE_LOGIN_STATE, UPDATE_INITIALIZE_STATE } from 'constants/actions/actionNames';
import { LOADER_LOGIN } from 'constants/actions/loaderNames';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
import type { ThunkAction } from 'redux-thunk';

import { postLogin, postInitialize } from './loginServices';
import type { SubmitLoginFormRequest, SubmitLoginFormResponse } from './LoginTypes';

export const updateLoginState = createAction(UPDATE_LOGIN_STATE);
export const updateInitializeState = createAction(UPDATE_INITIALIZE_STATE);

export const saveLoginState = async (data: ?SubmitLoginFormResponse) => {
  const save = {
    key: LOGIN_STATE,
    data,
    expires: (1000 * 60 * 60) * 24 * 365,
  };
  await storage.save(save);
};

export const fetchInitialState = (): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    try {
      logger.log('action: fetchInitialStateStart');
      dispatch(showLoader(LOADER_LOGIN));
      const initial = await postInitialize(dispatch)();
      logger.log('action: fetchInitialState', initial);
      const loginState = initial ? await storage.load({ key: LOGIN_STATE }) : null;
      await Promise.all([
        dispatch(updateLoginState(loginState)),
        dispatch(updateInitializeState(initial)),
      ]);
      logger.log('action: fetchInitialStateEnd');
    } catch (e) {
      await Promise.all([
        saveLoginState(null),
        dispatch(updateLoginState(null)),
        dispatch(updateInitializeState(true)),
      ]);
    } finally {
      dispatch(hideLoader(LOADER_LOGIN));
    }
  };
};

export const submitLoginForm = async (form: Immutable<SubmitLoginFormRequest>, dispatch: Dispatch<*>) => {
  logger.log('action: submitLoginFormStart');
  dispatch(showLoader(LOADER_LOGIN));

  const result = await postLogin(dispatch)(form.toJS());
  await saveLoginState(result);
  await dispatch(fetchInitialState());

  logger.log('action: submitLoginFormEnd');
  dispatch(hideLoader(LOADER_LOGIN));
};

export const mapStateToProps = null;
export const mapDispatchToProps = null;
