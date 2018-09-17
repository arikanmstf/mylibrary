/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import logger from 'helpers/logger';
import { createAction } from 'redux-actions';
import { showLoader, hideLoader } from 'ui/Loader/actions';
import storage, { LOGIN_STATE } from 'helpers/storage';
import { UPDATE_LOGIN_STATE, UPDATE_INITIALIZE_STATE } from 'constants/actions/actionNames';

import type { Dispatch } from 'redux';
import type { Immutable } from 'store/ImmutableTypes';
import type { ThunkAction } from 'redux-thunk';

import { postLogin, postInitialize } from './loginServices';
import type { SubmitLoginFormRequest } from './LoginTypes';

export const updateLoginState = createAction(UPDATE_LOGIN_STATE);
export const updateInitializeState = createAction(UPDATE_INITIALIZE_STATE);

export const fetchInitialState = (): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    logger.log('action: fetchInitialStateStart');
    const initial = await postInitialize();
    logger.log('action: fetchInitialState', initial);
    const loginState = initial ? await storage.load({ key: LOGIN_STATE }) : null;
    await Promise.all([
      dispatch(updateLoginState(loginState)),
      dispatch(updateInitializeState(initial)),
    ]);
    logger.log('action: fetchInitialStateEnd');
  };
};

export const submitLoginForm = async (form: Immutable<SubmitLoginFormRequest>, dispatch: Dispatch<*>) => {
  logger.log('action: submitLoginFormStart');
  dispatch(showLoader());

  const result = await postLogin(form.toJS());
  const data = {
    key: LOGIN_STATE,
    data: { ...result },
    expires: 1000 * 3600,
  };
  storage.save(data);
  dispatch(fetchInitialState());

  logger.log('action: submitLoginFormEnd');
  dispatch(hideLoader());
};

export const mapStateToProps = null;
export const mapDispatchToProps = null;
