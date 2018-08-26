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

import { loginRequest, initialRequest } from './loginServices';
import type { SubmitLoginFormRequest } from './LoginTypes';

export const updateLoginState = createAction(UPDATE_LOGIN_STATE);
export const updateInitializeState = createAction(UPDATE_INITIALIZE_STATE);

export const fetchInitialState = (): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    dispatch(showLoader());
    const initial = await initialRequest();
    logger.log('fetchInitialState', initial);
    const loginState = initial ? await storage.load({ key: LOGIN_STATE }) : null;
    await Promise.all([
      dispatch(updateLoginState(loginState)),
      dispatch(updateInitializeState(initial)),
    ]);
    dispatch(hideLoader());
  };
};

export const submitLoginForm = async (form: Immutable<SubmitLoginFormRequest>, dispatch: Dispatch<*>) => {
  dispatch(showLoader());

  const result = await loginRequest(form.toJS());
  const data = {
    key: LOGIN_STATE,
    data: { ...result },
    expires: 1000 * 3600,
  };
  storage.save(data);

  dispatch(fetchInitialState());
  dispatch(hideLoader());
};

export const mapStateToProps = null;
export const mapDispatchToProps = null;
