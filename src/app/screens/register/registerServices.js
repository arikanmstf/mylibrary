// @flow

import Api, { REGISTER } from 'helpers/api';

import type { SubmitRegisterFormRequest, SubmitRegisterFormResponse } from './RegisterTypes';

export const postRegister = (request: SubmitRegisterFormRequest): Promise<SubmitRegisterFormResponse> => {
  return Api.post(REGISTER, request);
};
