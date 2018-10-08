// @flow

import Api, { LOGIN, INITIALIZE } from 'helpers/api';
import storage, { LOGIN_STATE } from 'helpers/storage';
import logger from 'helpers/logger';

import type { Dispatch } from 'redux';
import type { SubmitLoginFormRequest, SubmitLoginFormResponse } from './LoginTypes';

export const postLogin = (
  dispatch: Dispatch<*>
) => (request: SubmitLoginFormRequest): Promise<SubmitLoginFormResponse> => {
  return Api.post(dispatch)(LOGIN, request);
};

export const postInitialize = (dispatch: Dispatch<*>) => async () => {
  try {
    const result = await storage.load({ key: LOGIN_STATE });

    if (!(result && result.token)) {
      return null;
    }

    const config = {
      headers: { Authorization: `Bearer ${result.token}` },
    };

    const request = {
      platform: 'WEB',
      version: '1',
    };

    return Api.post(dispatch)(INITIALIZE, request, config);
  } catch (e) {
    logger.log(e);
    return null;
  }
};
