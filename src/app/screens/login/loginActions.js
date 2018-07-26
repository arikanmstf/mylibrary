/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import logger from 'helpers/logger';
import { createAction } from 'redux-actions';
import { showLoader, hideLoader } from 'ui/Loader/actions';
import s, { LOGIN_STATE } from 'helpers/storage';
import Auth from 'helpers/auth';
import { UPDATE_LOGIN_STATE } from 'constants/actions/actionNames';
import type { Immutable } from 'store/ImmutableTypes';
import { loginRequest } from './loginServices';
import type { submitLoginFormRequest, submitLoginFormResponse } from './LoginTypes';

export const updateLoginState = createAction(UPDATE_LOGIN_STATE);

export const fetchLoginState = () => {
  return async (dispatch) => {
    const loginState = await Auth.isLoggedIn();
    logger.log('fetchLoginState', loginState);
    dispatch(updateLoginState(loginState));
  };
};

const saveLoginState = (result: submitLoginFormResponse) => {
  return async (dispatch) => {
    s.save({
      key: LOGIN_STATE,
      data: { ...result },
      expires: 1000 * 3600,
    });

    dispatch(fetchLoginState());
  };
};

export const submitLoginForm = async (form: Immutable<submitLoginFormRequest>, dispatch) => {
  logger.log('submitLoginForm');
  dispatch(showLoader());
  const result = await loginRequest(form.toJS());
  dispatch(saveLoginState(result));
  dispatch(hideLoader());
};

export const mapStateToProps = () => ({});
export const mapDispatchToProps = () => ({});
