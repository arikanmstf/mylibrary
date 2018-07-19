// @flow

import API from 'helpers/api';
import { INITIALIZE } from 'constants/services/login';

export const initializeService = () => {
  return API.get(INITIALIZE);
};
