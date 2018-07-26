// @flow

import Api, { LOGIN } from 'helpers/api';

import type { submitLoginFormRequest } from './LoginTypes';

export const loginRequest = (request: submitLoginFormRequest) => {
  return Api.post(LOGIN, request);
};
