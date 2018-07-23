// @flow

import API from 'helpers/api';
import { LOGIN } from 'constants/services/login';

import type { submitLoginFormRequest } from './LoginTypes';

export const loginRequest = (request: submitLoginFormRequest) => {
  return API.post(LOGIN, request);
};
