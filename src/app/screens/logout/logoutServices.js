// @flow

import Api, { LOGOUT } from 'helpers/api';

export const logoutRequest = (): Promise<*> => {
  return Api.get(LOGOUT);
};
