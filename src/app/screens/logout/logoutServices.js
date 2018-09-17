// @flow

import Api, { LOGOUT } from 'helpers/api';

export const getLogout = (): Promise<*> => {
  return Api.get(LOGOUT);
};
