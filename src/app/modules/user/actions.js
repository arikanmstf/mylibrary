/**
 * Actions Template By => create-module script
 * @version 1.2.0
 *
 */

// @flow

import { createAction } from 'redux-actions';
import { UPDATE_LOGIN_STATE, UPDATE_INITIALIZE_STATE } from 'constants/actions/actionNames';

export const updateLoginState = createAction(UPDATE_LOGIN_STATE);
export const updateInitializeState = createAction(UPDATE_INITIALIZE_STATE);
