// @flow

import Api, { LOGIN, INITIALIZE } from 'helpers/api';
import s, { LOGIN_STATE } from 'helpers/storage';
import logger from 'helpers/logger';

import type { submitLoginFormRequest } from './LoginTypes';

export const loginRequest = (request: submitLoginFormRequest) => {
  return Api.post(LOGIN, request);
};

export const initialRequest = async () => {
  try {
    const result = await s.load({ key: LOGIN_STATE });

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

    return Api.post(INITIALIZE, request, config);
  } catch (e) {
    logger.log(e);
    return null;
  }
};
