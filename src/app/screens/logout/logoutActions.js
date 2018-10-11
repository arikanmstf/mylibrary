/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import logger from 'helpers/logger';

import type { ThunkAction } from 'redux-thunk';
import type { Dispatch } from 'redux';

import { showLoader, hideLoader } from 'ui/ModalLoader/actions';
import { updateLoginState, saveLoginState } from 'screens/login/loginActions';
import { LOADER_LOGOUT } from 'constants/actions/loaderNames';

import { getLogout } from './logoutServices';

export const makeLogoutRequest = (): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    logger.log('makeLogoutRequest');
    dispatch(showLoader(LOADER_LOGOUT));
    const logoutState = await getLogout(dispatch)();
    if (logoutState) {
      logger.log('logoutState', logoutState);
      await Promise.all([
        dispatch(updateLoginState(logoutState)),
        saveLoginState(logoutState),
      ]);
    }
    dispatch(hideLoader(LOADER_LOGOUT));
  };
};

export const mapStateToProps = null;
export const mapDispatchToProps = {
  makeLogoutRequest,
};
