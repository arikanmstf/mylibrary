/**
 * Actions Template By => create-module script
 * @version 1.0.0
 *
 */

// @flow
import logger from 'helpers/logger';

import type { ThunkAction } from 'redux-thunk';
import type { Dispatch } from 'redux';

import { showLoader, hideLoader } from 'ui/Loader/actions';
import { updateLoginState } from 'screens/login/loginActions';
import { logoutRequest } from './logoutServices';

export const makeLogoutRequest = (): ThunkAction => {
  return async (dispatch: Dispatch<*>) => {
    logger.log('makeLogoutRequest');
    dispatch(showLoader());
    const logoutState = await logoutRequest();
    if (logoutState) {
      logger.log('logoutState', logoutState);
      await Promise.all([
        dispatch(updateLoginState(logoutState)),
      ]);
    }
    dispatch(hideLoader());
  };
};

export const mapStateToProps = null;
export const mapDispatchToProps = {
  makeLogoutRequest,
};
