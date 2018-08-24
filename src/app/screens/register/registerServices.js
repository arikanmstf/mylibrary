// @flow

import Api, { REGISTER } from 'helpers/api';

import type { submitRegisterFormRequest, submitRegisterFormResponse } from './RegisterTypes';

export const registerRequest = (request: submitRegisterFormRequest): Promise<submitRegisterFormResponse> => {
  return Api.post(REGISTER, request);
};
