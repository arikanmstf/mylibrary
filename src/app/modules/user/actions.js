/**
 * Actions Template By => create-module script
 * @version 1.2.0
 *
 */

// @flow

import { createAction } from 'redux-actions';
import { USER_UPDATE_LOGIN_STATE, USER_UPDATE_INITIALIZE_STATE } from 'constants/actions/actionNames';

export const updateLoginState = createAction(USER_UPDATE_LOGIN_STATE);
export const updateInitializeState = createAction(USER_UPDATE_INITIALIZE_STATE);
