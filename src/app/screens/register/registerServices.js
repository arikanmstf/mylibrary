// @flow

import Api, { REGISTER } from 'helpers/api';

import type { Dispatch } from 'redux';
import type { SubmitRegisterFormRequest, SubmitRegisterFormResponse } from './RegisterTypes';

export const postRegister = (
  dispatch: Dispatch<*>
) => (request: SubmitRegisterFormRequest): Promise<SubmitRegisterFormResponse> => {
  return Api.post(dispatch)(REGISTER, request);
};
