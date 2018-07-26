// @flow
import s, { LOGIN_STATE } from 'helpers/storage';
import logger from 'helpers/logger';
import Api, { INITIALIZE } from 'helpers/api';
import type { submitLoginFormResponse } from 'screens/login/LoginTypes';

class Auth {
  static async isLoggedIn() {
    try {
      const result = await s.load({ key: LOGIN_STATE });
      logger.log(`${LOGIN_STATE} result is;`, result);

      if (result) {
        return await Auth.initial(result);
      }
      return false;
    } catch (e) {
      logger.log(`${LOGIN_STATE} result false;`, e);
      return false;
    }
  }

  static async initial(result: submitLoginFormResponse) {
    const config = {
      headers: { Authorization: `Bearer ${result.token}` },
    };

    const request = {
      platform: 'WEB',
      version: '1',
    };

    return Api.post(INITIALIZE, request, config);
  }
}

export default Auth;
