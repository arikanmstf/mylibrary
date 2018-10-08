// @flow

import Api, { LOGOUT } from 'helpers/api';
import type { Dispatch } from 'redux';

export const getLogout = (dispatch: Dispatch<*>) => (): Promise<*> => {
  return Api.get(dispatch)(LOGOUT);
};
